import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="fixed top-0 w-full border-b border-white/10 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Refery.io
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Post a Job
            </Button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 pt-24 pb-12">
        {children}
      </main>
    </div>
  );
}