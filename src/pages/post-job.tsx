import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import { UploadIcon, FileIcon, DownloadIcon } from '@/components/icons/UploadIcons';

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
const experienceLevels = ['Entry Level', 'Mid-Level', 'Senior', 'Lead', 'Executive'];
const locations = ['Remote', 'Hybrid', 'On-site'];

interface JobFormData {
  title: string;
  company: string;
  type: string;
  experience: string;
  location: string;
  locationDetails: string;
  salary: string;
  reward: string;
  description: string;
  requirements: string;
}

const initialFormData: JobFormData = {
  title: '',
  company: '',
  type: 'Full-time',
  experience: 'Mid-Level',
  location: 'Remote',
  locationDetails: '',
  salary: '',
  reward: '',
  description: '',
  requirements: '',
};

export default function PostJobPage() {
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const [bulkFile, setBulkFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSingleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // API call would go here
      console.log('Submitting job:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setFormData(initialFormData);
      alert('Job posted successfully!');
    } catch (error) {
      alert('Error posting job. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBulkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBulkFile(file);
    }
  };

  const handleBulkSubmit = async () => {
    if (!bulkFile) return;
    setIsSubmitting(true);
    
    try {
      // API call would go here
      console.log('Uploading file:', bulkFile);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setBulkFile(null);
      alert('Jobs uploaded successfully!');
    } catch (error) {
      alert('Error uploading jobs. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadTemplate = () => {
    // In a real app, this would download an actual CSV template
    const template = 'Title,Company,Type,Experience,Location,Location Details,Salary,Reward,Description,Requirements\n';
    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'job-posting-template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-black">Post a Job</h1>
          <p className="mt-2 text-black/60">
            Create a new job listing or bulk upload multiple positions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Single Job Form */}
          <Card className="p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-black">Single Job Post</h2>
              <p className="text-black/60 text-sm mt-1">
                Fill out the form below to post a single job position.
              </p>
            </div>

            <form onSubmit={handleSingleJobSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Job Title
                </label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Senior Frontend Developer"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Company Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. TechCorp Inc."
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Job Type
                  </label>
                  <Select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Experience Level
                  </label>
                  <Select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Location Type
                  </label>
                  <Select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Location Details
                  </label>
                  <Input
                    name="locationDetails"
                    value={formData.locationDetails}
                    onChange={handleInputChange}
                    placeholder="e.g. New York, USA"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Salary Range
                  </label>
                  <Input
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g. $80,000 - $120,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Referral Reward
                  </label>
                  <Input
                    name="reward"
                    value={formData.reward}
                    onChange={handleInputChange}
                    placeholder="e.g. $2,000"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Job Description
                </label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter the job description..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Requirements
                </label>
                <Textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Enter job requirements..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Posting...' : 'Post Job'}
              </Button>
            </form>
          </Card>

          {/* Bulk Upload Section */}
          <div className="space-y-6">
            <Card className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Bulk Upload</h2>
                <p className="text-black/60 text-sm mt-1">
                  Upload multiple job positions using our CSV template.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={downloadTemplate}
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download CSV Template
                </Button>

                <div className="relative">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleBulkUpload}
                    className="hidden"
                    id="bulk-upload"
                  />
                  <label
                    htmlFor="bulk-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-black/10 border-dashed rounded-lg cursor-pointer bg-black/[0.02] hover:bg-black/[0.04] transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadIcon className="w-8 h-8 text-black/40 mb-2" />
                      <p className="text-sm text-black/60">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-black/40 mt-1">CSV file only</p>
                    </div>
                  </label>
                </div>

                {bulkFile && (
                  <div className="flex items-center gap-2 p-3 bg-black/[0.02] rounded-lg">
                    <FileIcon className="w-5 h-5 text-black/60" />
                    <span className="text-sm text-black/60 truncate">
                      {bulkFile.name}
                    </span>
                  </div>
                )}

                <Button
                  onClick={handleBulkSubmit}
                  disabled={!bulkFile || isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Uploading...' : 'Upload Jobs'}
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-black mb-4">Tips for Bulk Upload</h3>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Download and use our CSV template</li>
                <li>• Fill all required fields marked with *</li>
                <li>• Keep descriptions clear and concise</li>
                <li>• Verify all information before upload</li>
                <li>• Maximum 100 jobs per upload</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}