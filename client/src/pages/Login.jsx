import { useState } from "react";
import Loader from "../components/common/Loader";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  const [loading] = useState(false);

  if (loading) {
    return (
      <Loader
        title="Signing You In"
        message="Verifying your credentials securely..."
      />
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <LoginForm />
    </main>
  );
}

export default Login;