import { ScrollArea } from '@/components/ui/scroll-area';

export default function HiringAgreement() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Hiring Agreement</h1>
        
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="prose prose-slate max-w-none">
            <section>
              <h2>1. Agreement Overview</h2>
              <p>
                This Hiring Agreement ("Agreement") outlines the terms and conditions for companies using Refery.io's hiring platform.
              </p>
            </section>

            <section>
              <h2>2. Company Obligations</h2>
              <h3>2.1 Job Postings</h3>
              <p>Companies agree to:</p>
              <ul>
                <li>Provide accurate job descriptions</li>
                <li>Specify clear requirements</li>
                <li>Update posting status promptly</li>
                <li>Maintain professional standards</li>
              </ul>

              <h3>2.2 Candidate Processing</h3>
              <p>Companies must:</p>
              <ul>
                <li>Review referrals promptly</li>
                <li>Provide timely feedback</li>
                <li>Maintain candidate confidentiality</li>
                <li>Follow fair hiring practices</li>
              </ul>
            </section>

            <section>
              <h2>3. Fee Structure</h2>
              <h3>3.1 Payment Terms</h3>
              <ul>
                <li>Success-based fee model</li>
                <li>Payment timing and methods</li>
                <li>Escrow requirements</li>
              </ul>

              <h3>3.2 Probation Period</h3>
              <ul>
                <li>Duration of probation</li>
                <li>Performance criteria</li>
                <li>Refund conditions</li>
              </ul>
            </section>

            <section>
              <h2>4. Hiring Process</h2>
              <p>Companies agree to:</p>
              <ul>
                <li>Follow platform hiring procedures</li>
                <li>Document hiring decisions</li>
                <li>Maintain communication records</li>
                <li>Report successful placements</li>
              </ul>
            </section>

            <section>
              <h2>5. Non-Circumvention</h2>
              <p>Companies agree not to:</p>
              <ul>
                <li>Bypass the platform for hiring</li>
                <li>Direct hire referred candidates</li>
                <li>Solicit referrers outside the platform</li>
              </ul>
            </section>

            <section>
              <h2>6. Data Protection</h2>
              <p>Companies must:</p>
              <ul>
                <li>Protect candidate data</li>
                <li>Comply with privacy laws</li>
                <li>Secure information systems</li>
                <li>Report data breaches</li>
              </ul>
            </section>

            <section>
              <h2>7. Dispute Resolution</h2>
              <p>Process for handling:</p>
              <ul>
                <li>Hiring disputes</li>
                <li>Payment issues</li>
                <li>Platform violations</li>
              </ul>
            </section>

            <section>
              <h2>8. Term and Termination</h2>
              <p>Details about:</p>
              <ul>
                <li>Agreement duration</li>
                <li>Termination conditions</li>
                <li>Post-termination obligations</li>
              </ul>
            </section>

            <section>
              <h2>9. Warranties and Representations</h2>
              <p>Companies warrant that:</p>
              <ul>
                <li>They have hiring authority</li>
                <li>Information provided is accurate</li>
                <li>They will comply with laws</li>
              </ul>
            </section>

            <section>
              <h2>10. Contact Information</h2>
              <p>For questions about this agreement:</p>
              <ul>
                <li>Email: hiring@refery.io</li>
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