import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import { ShareIcon } from '@/components/icons/ShareIcon';
import { SortIcon } from '@/components/icons/SortIcon';
import { RemoteIcon, BriefcaseIcon, StarIcon } from '@/components/icons/JobIcons';
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
    <div className="space-y-12 py-8">
      <section className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
          Refer. Connect. Earn.
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          Help companies find great talent and earn rewards for successful referrals
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <Card className="p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Input 
              placeholder="Search jobs, companies..." 
              className="md:col-span-2"
            />
            <Select defaultValue="All Locations">
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </Select>
            <Button>Search Jobs</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <Select defaultValue="All Types" className="w-40">
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </Select>
            <Select defaultValue="All Levels" className="w-40">
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </Select>
            <div className="flex items-center gap-2 ml-auto">
              <SortIcon className="w-5 h-5 text-black/60" />
              <Select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="w-44"
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <div className="flex items-start gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-black truncate">
                        {job.title}
                      </h3>
                      <p className="text-black/60 text-sm">{job.company}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleShare(job)}
                      className="p-2 -mr-2 -mt-2"
                    >
                      <ShareIcon className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-black/[0.03] text-black/70 rounded-md text-sm">
                  <RemoteIcon className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-black/[0.03] text-black/70 rounded-md text-sm">
                  <BriefcaseIcon className="w-4 h-4" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-black/[0.03] text-black/70 rounded-md text-sm">
                  <StarIcon className="w-4 h-4" />
                  {job.experience}
                </span>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <span className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
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