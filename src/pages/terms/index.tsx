import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const agreements = [
  {
    title: 'Terms of Service',
    description: 'General terms and conditions for using Refery.io',
    path: '/terms/service',
  },
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your data',
    path: '/terms/privacy',
  },
  {
    title: 'Recruiting Agreement',
    description: 'Terms for referrers using our platform',
    path: '/terms/recruiting',
  },
  {
    title: 'Hiring Agreement',
    description: 'Terms for companies hiring through our platform',
    path: '/terms/hiring',
  },
];

export default function TermsIndex() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Legal Agreements</h1>
        <p className="text-lg text-gray-600 mb-12">
          Review our legal agreements and policies that govern the use of Refery.io's services.
        </p>

        <div className="grid gap-6">
          {agreements.map((agreement) => (
            <Card key={agreement.path}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{agreement.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {agreement.description}
                    </CardDescription>
                  </div>
                  <Button asChild variant="secondary">
                    <Link to={agreement.path}>View Agreement</Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our legal agreements or need clarification, our legal team is here to help.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Legal Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}