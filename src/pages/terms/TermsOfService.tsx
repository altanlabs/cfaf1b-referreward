import { ScrollArea } from '@/components/ui/scroll-area';

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="prose prose-slate max-w-none">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Welcome to Refery.io. By using our service, you agree to these terms. Please read them carefully.
              </p>
            </section>

            <section>
              <h2>2. Definitions</h2>
              <p>
                Throughout these Terms of Service, we use certain defined terms:
              </p>
              <ul>
                <li>"Service" refers to Refery.io's platform and services</li>
                <li>"User" refers to anyone who uses our Service</li>
                <li>"Referrer" refers to users who refer candidates</li>
                <li>"Company" refers to organizations posting jobs</li>
              </ul>
            </section>

            <section>
              <h2>3. Account Terms</h2>
              <p>
                To use our Service, you must:
              </p>
              <ul>
                <li>Be at least 18 years old</li>
                <li>Complete the registration process</li>
                <li>Provide accurate and complete information</li>
                <li>Be a human (accounts registered by bots or automated methods are not permitted)</li>
              </ul>
            </section>

            <section>
              <h2>4. Referral Terms</h2>
              <p>
                When making referrals through our platform:
              </p>
              <ul>
                <li>You must have the candidate's permission to refer them</li>
                <li>You must provide accurate information about the candidate</li>
                <li>You understand that payment is contingent on successful placement</li>
                <li>You agree to our referral fee structure and payment terms</li>
              </ul>
            </section>

            <section>
              <h2>5. Company Terms</h2>
              <p>
                Companies using our platform agree to:
              </p>
              <ul>
                <li>Provide accurate job posting information</li>
                <li>Respond to referrals in a timely manner</li>
                <li>Pay the agreed-upon fees for successful placements</li>
                <li>Maintain confidentiality of candidate information</li>
              </ul>
            </section>

            <section>
              <h2>6. Payment Terms</h2>
              <p>
                Our payment terms include:
              </p>
              <ul>
                <li>Payment processing through our secure platform</li>
                <li>Fees held in escrow until probation period completion</li>
                <li>Clear fee structure for successful placements</li>
                <li>Refund policy for specific circumstances</li>
              </ul>
            </section>

            <section>
              <h2>7. Privacy and Data Protection</h2>
              <p>
                We take privacy seriously and:
              </p>
              <ul>
                <li>Protect your personal information</li>
                <li>Comply with GDPR and other privacy laws</li>
                <li>Only use data as described in our Privacy Policy</li>
                <li>Allow you to control your data</li>
              </ul>
            </section>

            <section>
              <h2>8. Termination</h2>
              <p>
                We reserve the right to:
              </p>
              <ul>
                <li>Terminate accounts that violate these terms</li>
                <li>Remove content that violates our policies</li>
                <li>Refuse service to anyone for any reason</li>
              </ul>
            </section>

            <section>
              <h2>9. Changes to Terms</h2>
              <p>
                We may modify these terms:
              </p>
              <ul>
                <li>With notice to users</li>
                <li>Changes effective upon posting</li>
                <li>Continued use constitutes acceptance</li>
              </ul>
            </section>

            <section>
              <h2>10. Contact Information</h2>
              <p>
                For questions about these terms:
              </p>
              <ul>
                <li>Email: legal@refery.io</li>
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