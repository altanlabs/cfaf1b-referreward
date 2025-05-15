import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export default function SignUpPage() {
  const { user } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (user) return <Navigate to={from} replace />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Create an account</h1>
        <p className="text-black/60">
          Join Refery.io to start referring and earning
        </p>
      </div>
      <div className="w-full max-w-md">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#000000',
                  brandAccent: '#666666',
                }
              }
            },
            className: {
              container: 'w-full',
              button: 'w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800',
              input: 'w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent',
            }
          }}
          providers={[]}
          view="sign_up"
          redirectTo={`${window.location.origin}/`}
        />
      </div>
    </div>
  );
}