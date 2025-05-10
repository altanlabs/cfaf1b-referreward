import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full border-b border-black/[0.08] bg-white/80 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-black">
            Refery.io
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/jobs" className="text-black/60 hover:text-black transition-colors">
              Browse Jobs
            </Link>
            <Link to="/companies" className="text-black/60 hover:text-black transition-colors">
              For Companies
            </Link>
            <Link to="/about" className="text-black/60 hover:text-black transition-colors">
              About
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
      <footer className="border-t border-black/[0.08] bg-black/[0.02] py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-black mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/jobs" className="text-black/60 hover:text-black">Browse Jobs</Link></li>
                <li><Link to="/companies" className="text-black/60 hover:text-black">For Companies</Link></li>
                <li><Link to="/pricing" className="text-black/60 hover:text-black">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-black/60 hover:text-black">About Us</Link></li>
                <li><Link to="/careers" className="text-black/60 hover:text-black">Careers</Link></li>
                <li><Link to="/blog" className="text-black/60 hover:text-black">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-black/60 hover:text-black">Help Center</Link></li>
                <li><Link to="/contact" className="text-black/60 hover:text-black">Contact</Link></li>
                <li><Link to="/terms" className="text-black/60 hover:text-black">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-black/60 hover:text-black">Twitter</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">LinkedIn</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-black/[0.08] text-center text-black/60">
            <p> 2024 Refery.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}