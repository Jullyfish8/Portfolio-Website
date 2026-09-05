'use client';

import { SignOutButton } from '@clerk/nextjs';

export default function SignOutPage() {
  return <main className="auth-page"><SignOutButton redirectUrl="/"><button type="button">Sign out</button></SignOutButton></main>;
}
