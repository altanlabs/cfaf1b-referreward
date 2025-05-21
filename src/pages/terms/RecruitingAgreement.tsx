import { ScrollArea } from '@/components/ui/scroll-area';

export default function RecruitingAgreement() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Recruiting Agreement</h1>
        
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="prose prose-slate max-w-none">
            <section>
              <h2>1. Agreement Overview</h2>
              <p>
                This Recruiting Agreement ("Agreement") outlines the terms and conditions for referrers using the Refery.io platform.
              </p>
            </section>

            <section>
              <h2>2. Referrer Obligations</h2>
              <h3>2.1 Candidate Referrals</h3>
              <p>As a referrer, you agree to:</p>
              <ul>
                <li>Only refer candidates with their explicit permission</li>
                <li>Provide accurate and current information about candidates</li>
                <li>Maintain professional communication standards</li>
                <li>Respect candidate privacy and confidentiality</li>
              </ul>

              <h3>2.2 Quality Standards</h3>
              <p>You must ensure:</p>
              <ul>
                <li>Candidates meet job requirements</li>
                <li>Information is verified before submission</li>
                <li>Professional conduct in all interactions</li>
              </ul>
            </section>

            <section>
              <h2>3. Compensation</h2>
              <h3>3.1 Fee Structure</h3>
              <ul>
                <li>Success-based compensation model</li>
                <li>Payment upon successful placement</li>
                <li>Probation period requirements</li>
              </ul>

              <h3>3.2 Payment Terms</h3>
              <ul>
                <li>Payment processing through platform</li>
                <li>Escrow holding period</li>
                <li>Tax implications</li>
              </ul>
            </section>

            <section>
              <h2>4. Confidentiality</h2>
              <p>You agree to:</p>
              <ul>
                <li>Maintain candidate confidentiality</li>
                <li>Protect company information</li>
                <li>Use information only for referrals</li>
                <li>Comply with data protection laws</li>
              </ul>
            </section>

            <section>
              <h2>5. Non-Circumvention</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Bypass the platform for referrals</li>
                <li>Direct candidates to companies outside the platform</li>
                <li>Solicit direct arrangements</li>
              </ul>
            </section>

            <section>
              <h2>6. Dispute Resolution</h2>
              <p>Process for handling:</p>
              <ul>
                <li>Payment disputes</li>
                <li>Quality concerns</li>
                <li>Platform violations</li>
              </ul>
            </section>

            <section>
              <h2>7. Term and Termination</h2>
              <p>Details about:</p>
              <ul>
                <li>Agreement duration</li>
                <li>Termination conditions</li>
                <li>Post-termination obligations</li>
              </ul>
            </section>

            <section>
              <h2>8. Warranties and Representations</h2>
              <p>You warrant that:</p>
              <ul>
                <li>You have authority to refer candidates</li>
                <li>Information provided is accurate</li>
                <li>You will comply with all laws</li>
              </ul>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>
                Outlines liability limitations and indemnification requirements.
              </p>
            </section>

            <section>
              <h2>10. Contact Information</h2>
              <p>For questions about this agreement:</p>
              <ul>
                <li>Email: recruiting@refery.io</li>
                <li>Address: [Company Address]</li>
                <li>Phone: [Phone Number]</li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}