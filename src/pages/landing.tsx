import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { CheckCircleIcon, HandshakeIcon, ShieldCheckIcon, MoneyIcon, ArrowRightIcon } from '@/components/icons/LandingIcons';

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
  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-black tracking-tight">
              Hire from people you trust.
            </h1>
            <p className="mt-6 text-xl text-black/60">
              The best candidates aren't on job boards — they're referred by top founders, operators, and investors.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/post-job">Post a Job</Link>
              </Button>
              <Button size="lg" variant="secondary" onClick={scrollToHowItWorks}>
                See How It Works
              </Button>
            </div>
          </div>
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

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 scroll-mt-24">
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

      {/* For Companies */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
            For Companies
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">
            Find Top Talent Through Trusted Networks
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Refery.io helps companies tap into high-quality candidate pools through trusted referrals, reducing hiring costs and time-to-fill.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Access pre-vetted candidates through trusted networks
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Reduce hiring costs by up to 40% compared to traditional recruiting
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Improve retention rates with candidates who come through referrals
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Streamline your referral program with our easy-to-use platform
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" asChild>
              <Link to="/post-job">Post a Job</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Referrers */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
            For Referrers
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">
            Monetize Your Network, Help Your Connections
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Turn your professional network into a source of income while helping friends and connections find their dream jobs.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Earn competitive referral bonuses for successful placements
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Track your referrals through every stage of the hiring process
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Build your reputation as a trusted connector in your industry
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-emerald-600">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700">
                Help friends and connections advance their careers
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Become a Referrer
            </Button>
          </div>
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
        <div>
          <h2 className="text-3xl font-bold text-black mb-8">Secure & Compliant</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {trustFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <div className="text-xl text-teal-600">{feature}</div>
              </div>
            ))}
          </div>
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