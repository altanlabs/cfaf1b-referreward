import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    logo: 'https://ui-avatars.com/api/?name=TechCorp&background=0D8ABC&color=fff',
    location: 'Remote',
    reward: '$2,000',
    type: 'Full-time',
    experience: 'Senior',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'InnovateLabs',
    logo: 'https://ui-avatars.com/api/?name=InnovateLabs&background=FF6B6B&color=fff',
    location: 'New York, USA',
    reward: '$3,000',
    type: 'Full-time',
    experience: 'Mid-Senior',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    logo: 'https://ui-avatars.com/api/?name=CloudTech&background=4CAF50&color=fff',
    location: 'London, UK',
    reward: '$2,500',
    type: 'Contract',
    experience: 'Senior',
  },
];

const locations = ['All Locations', 'Remote', 'New York, USA', 'London, UK'];
const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract'];
const experienceLevels = ['All Levels', 'Junior', 'Mid-Level', 'Senior'];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          Refer. Connect. Earn.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help companies find great talent and earn rewards for successful referrals
        </p>
      </section>

      <section className="max-w-5xl mx-auto space-y-4">
        <Card className="p-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Input placeholder="Search jobs, companies..." className="md:col-span-2" />
            <Select defaultValue="All Locations">
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </Select>
            <Button>Search Jobs</Button>
          </div>
          <div className="mt-4 flex gap-4">
            <Select defaultValue="All Types">
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </Select>
            <Select defaultValue="All Levels">
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </Select>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockJobs.map((job) => (
            <Card key={job.id} className="space-y-4">
              <div className="flex items-start gap-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">
                  {job.location}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">
                  {job.type}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600">
                  {job.experience}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">
                  Reward: {job.reward}
                </span>
                <Button variant="secondary">
                  Refer a Candidate
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}