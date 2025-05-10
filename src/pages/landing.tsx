import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { CheckCircleIcon, ArrowRightIcon } from '@/components/icons/LandingIcons';
import { MoneyIcon, NetworkIcon, ShieldIcon } from '@/components/icons/FeatureIcons';

const benefits = [
  "Access candidates you won't find on job boards or through agencies.",
  "Fraction of the cost of traditional recruiters-no retainers, only results.",
  "Set your own reward to attract more attention from top scouts.",
  "Full transparency: see reward and commission breakdown upfront.",
  "GDPR-compliant, global payments via Stripe, and seamless paperwork.",
  "Upload and relax-we do the rest.",
];

const steps = [
  {
    title: "Upload your job",
    description: "Set your own reward (as little or as much as you want).",
  },
  {
    title: "Reach top scouts",
    description: "Your role is shared with our exclusive network of top tech scouts.",
  },
  {
    title: "Get quality referrals",
    description: "Get high-quality referrals from people who know the industry inside-out.",
  },
  {
    title: "Pay for results",
    description: "Only pay when you hire and the candidate passes probation. No listing fees.",
  },
  {
    title: "We handle everything",
    description: "We handle all compliance, contracts, and payments-risk-free and automated.",
  },
];

const testimonials = [
  {
    quote: "We filled our hardest role in 3 weeks, and paid only for success.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    image: "https://ui-avatars.com/api/?name=Sarah+Chen&background=000000&color=fff",
  },
  {
    quote: "The quality of candidates from Refery.io's network is unmatched.",
    author: "Michael Rodriguez",
    role: "CEO at StartupX",
    image: "https://ui-avatars.com/api/?name=Michael+Rodriguez&background=000000&color=fff",
  },
];

export default function LandingPage() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent" />
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
              Unlock Elite Tech Talent—
              <span className="text-emerald-600">Only Pay for Results</span>
            </h1>
            <p className="mt-6 text-xl text-black/60 max-w-3xl">
              Tap into a private network of founders, operators, and investors who refer the best candidates—no listing fees, no upfront costs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Post a Job (Free)
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black">How It Works</h2>
          <p className="mt-4 text-black/60 max-w-2xl mx-auto">
            A simple, transparent process designed for busy hiring managers.
          </p>
        </div>
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-6 p-6 rounded-xl border border-black/[0.08] bg-white transition-all duration-200 hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.07)] hover:border-black/[0.12]"
            >
              <div className="flex-none w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-semibold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                <p className="mt-2 text-black/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black">Why Refery.io?</h2>
          <p className="mt-4 text-black/60 max-w-2xl mx-auto">
            Built for modern companies who want quality hires without the traditional recruitment overhead.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 p-6 rounded-xl border border-black/[0.08] bg-white"
            >
              <CheckCircleIcon className="flex-none w-6 h-6 text-emerald-600" />
              <p className="text-black/80">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-black/[0.08] bg-white p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-black/60 max-w-2xl mx-auto">
              No listing fees. No subscriptions. You set the reward, we take a transparent commission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-black/60">Example Reward</div>
                <div className="text-4xl font-bold text-black">$3,000</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-black/[0.08]">
                  <span className="text-black/60">Refery.io commission (25%)</span>
                  <span className="font-semibold">$750</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/[0.08]">
                  <span className="text-black/60">Referrer receives</span>
                  <span className="font-semibold">$2,250</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-black/60">
                Reward is held until probation is passed, then paid out automatically. All payments are handled securely through Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-xl border border-black/[0.08] bg-white"
            >
              <p className="text-xl text-black/80">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-black">{testimonial.author}</div>
                  <div className="text-black/60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scout CTA */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute h-full w-full bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white">
                Monetize Your Network—Join the Scout Program
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Are you a founder, operator, or investor with a world-class network? Get paid for every successful intro. Average reward: $2,250 per hire.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Apply to Be a Scout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black">
          Ready to hire better, faster, and for less?
        </h2>
        <p className="mt-4 text-black/60 max-w-2xl mx-auto">
          Post your job now—free and risk-free.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="group">
            Post a Job (Free)
            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="secondary">
            Become a Scout
          </Button>
        </div>
      </section>
    </div>
  );
}