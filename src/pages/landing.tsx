import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { CheckCircleIcon, ArrowRightIcon, HandshakeIcon, ShieldCheckIcon, MoneyIcon } from '@/components/icons/LandingIcons';

const howItWorks = [
  {
    title: "Post a job",
    description: "Set the role, reward, and probation period.",
    icon: MoneyIcon,
  },
  {
    title: "Get trusted referrals",
    description: "Only vetted founders, VCs, and operators refer.",
    icon: HandshakeIcon,
  },
  {
    title: "Hire & pay on success",
    description: "We hold the reward securely until probation is complete.",
    icon: CheckCircleIcon,
  },
];

const whyRefery = [
  {
    title: "Trusted Referrals Only",
    description: "Every candidate is referred by respected operators and founders.",
    icon: HandshakeIcon,
  },
  {
    title: "No Hire, No Fee",
    description: "You only pay if the candidate is hired and stays.",
    icon: MoneyIcon,
  },
  {
    title: "Fully Compliant",
    description: "We handle KYC, tax, and global payouts via Stripe.",
    icon: ShieldCheckIcon,
  },
];

const trustFeatures = [
  "✔ Escrow holds via Stripe",
  "✔ GDPR compliant",
  "✔ Legal agreements baked into every referral",
  "✔ 90-day reward hold, auto-release if no dispute",
];

export default function LandingPage() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent" />
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black tracking-tight">
                Hire from people you trust.
              </h1>
              <p className="mt-6 text-xl text-black/60">
                The best candidates aren't on job boards — they're referred by top founders, operators, and investors.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/post-job">Post a Job</Link>
                </Button>
                <Button size="lg" variant="secondary">
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black">How It Works</h2>
          <p className="mt-4 text-black/60">Simple, transparent, and effective.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <div
              key={step.title}
              className="p-6 rounded-xl border border-black/[0.08] bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                <step.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-black">{step.title}</h3>
              <p className="mt-2 text-black/60">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Refery */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black">Why Refery?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whyRefery.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-black/[0.08] bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
              <p className="mt-2 text-black/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Callout Banner */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <p className="text-2xl font-bold">
            We're not a marketplace.<br />
            We're a high-signal referral network built by people who <em>actually</em> know great talent.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black">Who's referring?</h2>
          <p className="mt-4 text-xl text-black/60">
            Top founders, seasoned operators, and respected VCs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-black/5" />
          ))}
        </div>
      </section>

      {/* For Referrers */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-teal-50 rounded-2xl p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-black">Know someone great?</h2>
            <p className="mt-4 text-xl text-black/60">
              Refer them, and earn if they get hired.
            </p>
            <div className="mt-8">
              <Button size="lg">Refer Someone</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Legal */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">Secure & Compliant</h2>
            <div className="mt-8 space-y-4">
              {trustFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="text-xl text-teal-600">{feature}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black">
          Ready to hire with signal, not noise?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/post-job">Post a Job</Link>
          </Button>
          <Button size="lg" variant="secondary">
            Talk to Us
          </Button>
        </div>
      </section>
    </div>
  );
}