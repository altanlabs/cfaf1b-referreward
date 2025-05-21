import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

interface Agreement {
  id: string;
  title: string;
  path: string;
  content: string;
}

interface TermsAcceptanceProps {
  onAcceptTerms: (acceptedTerms: Record<string, boolean>) => void;
  disabled?: boolean;
}

const agreements: Agreement[] = [
  {
    id: 'terms',
    title: 'Terms of Service',
    path: '/terms',
    content: 'Terms of Service content...',
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    path: '/privacy',
    content: 'Privacy Policy content...',
  },
  {
    id: 'recruiting',
    title: 'Recruiting Agreement',
    path: '/recruiting-agreement',
    content: 'Recruiting Agreement content...',
  },
  {
    id: 'hiring',
    title: 'Hiring Agreement',
    path: '/hiring-agreement',
    content: 'Hiring Agreement content...',
  },
];

export default function TermsAcceptance({ onAcceptTerms, disabled }: TermsAcceptanceProps) {
  const [acceptedTerms, setAcceptedTerms] = useState<Record<string, boolean>>({});
  const [showError, setShowError] = useState(false);

  const handleTermAccept = (agreementId: string, accepted: boolean) => {
    const newAcceptedTerms = {
      ...acceptedTerms,
      [agreementId]: accepted,
    };
    setAcceptedTerms(newAcceptedTerms);
    setShowError(false);
    
    // Check if all terms are accepted
    const allAccepted = agreements.every(agreement => newAcceptedTerms[agreement.id]);
    if (allAccepted) {
      onAcceptTerms(newAcceptedTerms);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {agreements.map((agreement) => (
          <div key={agreement.id} className="flex items-start space-x-3">
            <Checkbox
              id={agreement.id}
              checked={acceptedTerms[agreement.id] || false}
              onCheckedChange={(checked) => handleTermAccept(agreement.id, checked as boolean)}
              disabled={disabled}
            />
            <div className="space-y-1">
              <label
                htmlFor={agreement.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{' '}
                <Dialog>
                  <DialogTrigger className="text-primary hover:underline">
                    {agreement.title}
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <ScrollArea className="h-[60vh]">
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">{agreement.title}</h2>
                        <div className="prose prose-sm">
                          {agreement.content}
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
                {' '}
                <Link
                  to={agreement.path}
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  (view full agreement)
                </Link>
              </label>
              <p className="text-sm text-muted-foreground">
                You must accept this agreement to continue.
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {showError && (
        <p className="text-sm text-destructive">
          Please accept all terms and conditions to continue.
        </p>
      )}
    </div>
  );
}