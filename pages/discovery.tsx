import { useState } from 'react';
import Layout from '@/components/Layout';
import { mockUser } from '@/lib/mockData';

interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  matchScore: number;
  postedDate: string;
  description: string;
  requirements: string[];
  logo: string;
  isNew: boolean;
}

const mockOpportunities: JobOpportunity[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'TechFlow',
    location: 'San Francisco, CA',
    salary: '$150k - $190k',
    type: 'Full-time',
    matchScore: 96,
    postedDate: '2025-01-10',
    description: 'Join our team building next-generation web applications with React and TypeScript...',
    requirements: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    logo: 'https://via.placeholder.com/40x40/3B82F6/ffffff?text=TF',
    isNew: true
  },
  {
    id: '2',
    title: 'Frontend Engineer',
    company: 'DataViz Inc',
    location: 'Remote',
    salary: '$130k - $170k',
    type: 'Remote',
    matchScore: 91,
    postedDate: '2025-01-09',
    description: 'Build beautiful data visualization tools using modern frontend technologies...',
    requirements: ['React', 'D3.js', 'TypeScript', 'Python'],
    logo: 'https://via.placeholder.com/40x40/10B981/ffffff?text=DV',
    isNew: true
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'CloudNative',
    location: 'Austin, TX',
    salary: '$140k - $180k',
    type: 'Full-time',
    matchScore: 88,
    postedDate: '2025-01-08',
    description: 'Work on cloud-native applications using React, Node.js, and Kubernetes...',
    requirements: ['React', 'Node.js', 'Kubernetes', 'AWS'],
    logo: 'https://via.placeholder.com/40x40/8B5CF6/ffffff?text=CN',
    isNew: false
  }
];

export default function Discovery() {
  const [autoApply, setAutoApply] = useState(mockUser.autoApply);

  const handleApply = (jobId: string) => {
    console.log('Applying to job:', jobId);
    // In a real app, this would trigger the application process
  };

  const handleSaveForLater = (jobId: string) => {
    console.log('Saving job for later:', jobId);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            {/* <h1 className="text-3xl font-bold text-gray-900">Job Discovery</h1> */}
            <p className="text-gray-600 mt-1">AI-curated opportunities matching your profile</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="auto-apply"
                checked={autoApply}
                onChange={(e) => setAutoApply(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="auto-apply" className="ml-2 text-sm text-gray-700">
                Auto-apply to high matches (90%+)
              </label>
            </div>
          </div>
        </div>

        {/* Discovery Stats */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Discovery Engine</h2>
              <p className="opacity-90 mt-1">Found 23 new opportunities in the last 24 hours</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">247</div>
              <div className="text-sm opacity-90">Job boards monitored</div>
            </div>
          </div>
        </div>

        {/* Job Opportunities */}
        <div className="space-y-4">
          {mockOpportunities.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={job.logo} alt={job.company} className="w-8 h-8 rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      {job.isNew && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{job.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                      <span>📅 {new Date(job.postedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    job.matchScore >= 90 ? 'text-green-600' : 
                    job.matchScore >= 80 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {job.matchScore}%
                  </div>
                  <div className="text-sm text-gray-500">match</div>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {job.requirements.map((req, index) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    {req}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleApply(job.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={() => handleSaveForLater(job.id)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Save for Later
                  </button>
                </div>
                
                {autoApply && job.matchScore >= 90 && (
                  <div className="flex items-center text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Will auto-apply
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Search Preferences */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title Keywords</label>
              <input
                type="text"
                defaultValue="Senior Frontend Developer, React Developer"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>$120k - $160k</option>
                <option>$140k - $180k</option>
                <option>$160k - $200k</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Remote</option>
                <option>Contract</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Update Preferences
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}