import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">
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