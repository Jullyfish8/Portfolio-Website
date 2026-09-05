import { auth, currentUser } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export type ChatGPTUser = {
  userId: string;
  displayName: string;
  email: string;
  fullName: string | null;
};

const SIGN_IN_PATH = '/sign-in';

export async function getChatGPTUser(): Promise<ChatGPTUser | null> {
  if (process.env.CLERK_SECRET_KEY) {
    const session = await auth();
    if (!session.userId) return null;
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress ?? '';
    if (!isOwner(email)) return null;
    const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ') || null;
    return { userId: session.userId, displayName: fullName ?? email, email, fullName };
  }

  const requestHeaders = await headers();
  const userId = requestHeaders.get('oai-authenticated-user-id');
  const email = requestHeaders.get('oai-authenticated-user-email');
  if (!userId || !email) return null;

  const encodedFullName = requestHeaders.get('oai-authenticated-user-full-name');
  const fullName = encodedFullName ? safeDecodeURIComponent(encodedFullName) : null;

  return {
    userId,
    displayName: fullName ?? email,
    email,
    fullName,
  };
}

export async function requireChatGPTUser(
  returnTo: string,
): Promise<ChatGPTUser> {
  const user = await getChatGPTUser();
  if (user) return user;

  redirect(`${SIGN_IN_PATH}?redirect_url=${encodeURIComponent(safeRelativeReturnPath(returnTo))}`);
}

export function chatGPTSignOutPath(returnTo = '/'): string {
  const safeReturnTo = safeRelativeReturnPath(returnTo);
  if (process.env.CLERK_SECRET_KEY) return `/sign-out?redirect_url=${encodeURIComponent(safeReturnTo)}`;
  return `/signout-with-chatgpt?return_to=${encodeURIComponent(safeReturnTo)}`;
}

function isOwner(email: string): boolean {
  const allowed = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return Boolean(email) && (!allowed || email.toLowerCase() === allowed);
}

function safeRelativeReturnPath(value: string): string {
  if (!value.startsWith('/') || value.startsWith('//')) return '/';

  let url: URL;
  try {
    url = new URL(value, 'https://app.local');
  } catch {
    return '/';
  }
  if (url.origin !== 'https://app.local') return '/';
  return `${url.pathname}${url.search}${url.hash}`;
}

function safeDecodeURIComponent(value: string): string | null {
  try {
    return decodeURIComponent(value);
  } catch {
    return null;
  }
}
