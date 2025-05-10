import { SignUp, useAuth } from "@altanlabs/auth";
import { Navigate, useLocation } from "react-router-dom";

export default function SignUpPage() {
  const { user } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Create an account</h1>
        <p className="text-black/60">
          Join Refery.io to start referring and earning
        </p>
      </div>
      <SignUp
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
        signInUrl="/sign-in"
        withSignIn
        routing="path"
      />
    </div>
  );
}