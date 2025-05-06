import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import { ShareIcon } from '@/components/icons/ShareIcon';
import { SortIcon } from '@/components/icons/SortIcon';
import { useState } from 'react';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    logo: 'https://ui-avatars.com/api/?name=TechCorp&background=000000&color=fff',
    location: 'Remote',
    reward: '$2,000',
    type: 'Full-time',
    experience: 'Senior',
    postedAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'InnovateLabs',
    logo: 'https://ui-avatars.com/api/?name=InnovateLabs&background=000000&color=fff',
    location: 'New York, USA',
    reward: '$3,000',
    type: 'Full-time',
    experience: 'Mid-Senior',
    postedAt: '2024-01-20',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    logo: 'https://ui-avatars.com/api/?name=CloudTech&background=000000&color=fff',
    location: 'London, UK',
    reward: '$2,500',
    type: 'Contract',
    experience: 'Senior',
    postedAt: '2024-01-18',
  },
];

const locations = ['All Locations', 'Remote', 'New York, USA', 'London, UK'];
const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract'];
const experienceLevels = ['All Levels', 'Junior', 'Mid-Level', 'Senior'];
const sortOptions = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'reward-high', label: 'Highest Reward' },
  { value: 'reward-low', label: 'Lowest Reward' },
  { value: 'alphabetical', label: 'Alphabetical' },
];

export default function HomePage() {
  const [sortBy, setSortBy] = useState('recent');
  const [jobs, setJobs] = useState(mockJobs);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sortedJobs = [...jobs];
    
    switch (value) {
      case 'recent':
        sortedJobs.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
        break;
      case 'reward-high':
        sortedJobs.sort((a, b) => parseInt(b.reward.replace(/\D/g, '')) - parseInt(a.reward.replace(/\D/g, '')));
        break;
      case 'reward-low':
        sortedJobs.sort((a, b) => parseInt(a.reward.replace(/\D/g, '')) - parseInt(b.reward.replace(/\D/g, '')));
        break;
      case 'alphabetical':
        sortedJobs.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    
    setJobs(sortedJobs);
  };

  const handleShare = (job: typeof jobs[0]) => {
    const shareData = {
      title: `${job.title} at ${job.company}`,
      text: `Check out this ${job.title} position at ${job.company}! Referral reward: ${job.reward}`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .catch((err) => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(
        `${shareData.title}\n${shareData.text}\n${shareData.url}`
      );
    }
  };

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          Refer. Connect. Earn.
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
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
            <div className="flex items-center gap-2 ml-auto">
              <SortIcon className="w-5 h-5 text-black/60" />
              <Select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="!w-auto"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="space-y-4">
              <div className="flex items-start gap-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-md"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-black">{job.title}</h3>
                      <p className="text-black/60">{job.company}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleShare(job)}
                      className="p-2"
                    >
                      <ShareIcon className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-black/5 rounded-md text-sm text-black">
                  {job.location}
                </span>
                <span className="px-2 py-1 bg-black/5 rounded-md text-sm text-black">
                  {job.type}
                </span>
                <span className="px-2 py-1 bg-black/5 rounded-md text-sm text-black">
                  {job.experience}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black font-semibold">
                  Reward: {job.reward}
                </span>
                <Button variant="success">
                  Refer
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}