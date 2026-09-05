import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <SignUp signInUrl="/sign-in" forceRedirectUrl="/admin" />
    </main>
  );
}
