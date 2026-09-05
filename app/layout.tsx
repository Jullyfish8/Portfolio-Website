import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'Julfendi — Research, UI/UX & Instructional Design',
  description: 'A vibrant multidisciplinary portfolio spanning research, interface design, and learning experiences.',
  openGraph: {
    title: 'Julfendi — Multidisciplinary Designer',
    description: 'Research · UI/UX · Instructional Design',
    images: [{ url: '/og.png', width: 1732, height: 909, alt: 'Julfendi multidisciplinary design portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julfendi — Multidisciplinary Designer',
    description: 'Research · UI/UX · Instructional Design',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      __internal_clerkJSUrl="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@6/dist/clerk.browser.js"
      __internal_clerkUIUrl="https://cdn.jsdelivr.net/npm/@clerk/ui@1/dist/ui.browser.js"
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
