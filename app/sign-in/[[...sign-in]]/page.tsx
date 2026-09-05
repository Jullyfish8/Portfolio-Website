import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="auth-page">
      <SignIn signUpUrl="/sign-up" forceRedirectUrl="/admin" />
    </main>
  );
}
