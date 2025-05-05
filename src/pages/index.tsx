import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    reward: '$2,000',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'InnovateLabs',
    location: 'New York, USA',
    reward: '$3,000',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'London, UK',
    reward: '$2,500',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Refer. Connect. Earn.
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Help companies find great talent and earn rewards for successful referrals
        </p>
      </section>

      <section className="max-w-2xl mx-auto">
        <Card className="flex gap-4">
          <Input placeholder="Search jobs by title, company, or location" className="flex-1" />
          <Button>Search</Button>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockJobs.map((job) => (
          <Card key={job.id} className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{job.title}</h3>
              <p className="text-gray-400">{job.company}</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">{job.location}</span>
              <span className="text-blue-400 font-semibold">
                Reward: {job.reward}
              </span>
            </div>
            <Button variant="secondary" className="w-full">
              Refer a Candidate
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
}