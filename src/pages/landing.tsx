import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { MoneyIcon, NetworkIcon, ShieldIcon, CompanyIcon } from '@/components/icons/FeatureIcons';

const features = [
  {
    icon: MoneyIcon,
    title: 'Earn Rewards',
    description: 'Get rewarded with cash for successful referrals. The more quality candidates you refer, the more you earn.',
  },
  {
    icon: NetworkIcon,
    title: 'Expand Your Network',
    description: 'Help your network grow professionally by connecting them with great opportunities at top companies.',
  },
  {
    icon: ShieldIcon,
    title: 'Secure & Compliant',
    description: 'Our platform ensures secure handling of data and compliant payouts across all regions.',
  },
  {
    icon: CompanyIcon,
    title: 'Top Companies',
    description: 'Access referral opportunities at leading companies across various industries and locations.',
  },
];

const stats = [
  { number: '500+', label: 'Active Jobs' },
  { number: '$2M+', label: 'Rewards Paid' },
  { number: '10k+', label: 'Successful Referrals' },
  { number: '98%', label: 'Client Satisfaction' },
];

export default function LandingPage() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white" />
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black max-w-4xl mx-auto tracking-tight">
            Turn Your Network Into{' '}
            <span className="text-emerald-600">Rewards</span>
          </h1>
          <p className="mt-6 text-xl text-black/60 max-w-2xl mx-auto">
            Connect great talent with amazing opportunities and earn rewards for successful referrals. Join thousands making a difference in their network.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/jobs">Browse Jobs</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/companies">For Companies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-black">{stat.number}</div>
              <div className="mt-2 text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black">Why Choose Refery.io</h2>
          <p className="mt-4 text-black/60 max-w-2xl mx-auto">
            Our platform makes it easy to refer candidates, track their progress, and earn rewards for successful placements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group rounded-xl border border-black/[0.08] bg-white p-6 transition-all duration-200 hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.07)] hover:border-black/[0.12]"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-emerald-50 text-emerald-600">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
              <p className="mt-2 text-black/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute h-full w-full bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="relative px-6 py-16 sm:px-12 sm:py-24 text-center">
            <h2 className="text-3xl font-bold text-white max-w-2xl mx-auto">
              Ready to Turn Your Network Into Opportunities?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Join thousands of professionals who are already earning rewards by helping great talent find their next role.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
                <Link to="/signup">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}