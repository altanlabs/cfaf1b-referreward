import { SignIn, useAuth } from "@altanlabs/auth";
import { Navigate, useLocation } from "react-router-dom";

export default function SignInPage() {
  const { user } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Welcome back</h1>
        <p className="text-black/60">
          Sign in to your account to continue
        </p>
      </div>
      <SignIn
        appearance={{ 
          theme: "light",
          variables: {
            colorPrimary: "#000",
            colorBackground: "#fff",
            colorInputBackground: "#fff",
            colorText: "#000",
            colorTextSecondary: "rgba(0, 0, 0, 0.6)",
            colorBorder: "rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
          }
        }}
        companyName="Refery.io"
        signUpUrl="/sign-up"
        withSignUp
        routing="path"
      />
    </div>
  );
}