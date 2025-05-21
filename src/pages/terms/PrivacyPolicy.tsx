import { ScrollArea } from '@/components/ui/scroll-area';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="prose prose-slate max-w-none">
            <section>
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how Refery.io collects, uses, and protects your personal information.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <ul>
                <li>Account information (name, email, etc.)</li>
                <li>Professional information</li>
                <li>Referral information</li>
                <li>Payment information</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <ul>
                <li>Usage data</li>
                <li>Device information</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Process referrals and payments</li>
                <li>Communicate with you</li>
                <li>Ensure platform security</li>
              </ul>
            </section>

            <section>
              <h2>4. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Companies receiving referrals</li>
                <li>Service providers</li>
                <li>Legal authorities when required</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>We protect your data through:</p>
              <ul>
                <li>Encryption</li>
                <li>Access controls</li>
                <li>Regular security audits</li>
                <li>Employee training</li>
              </ul>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your data</li>
                <li>Correct your data</li>
                <li>Delete your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2>7. Cookies</h2>
              <p>We use cookies to:</p>
              <ul>
                <li>Improve user experience</li>
                <li>Analyze platform usage</li>
                <li>Remember preferences</li>
              </ul>
            </section>

            <section>
              <h2>8. Children's Privacy</h2>
              <p>
                Our service is not intended for users under 18. We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2>9. International Data Transfers</h2>
              <p>
                We may transfer data internationally in compliance with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this policy and will notify you of significant changes.
              </p>
            </section>

            <section>
              <h2>11. Contact Us</h2>
              <p>For privacy-related inquiries:</p>
              <ul>
                <li>Email: privacy@refery.io</li>
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