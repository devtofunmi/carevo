import { useState } from 'react';
import Layout from '@/components/Layout';
import ApplicationCard from '@/components/ApplicationCard';
import { mockApplications, JobApplication } from '@/lib/mockData';

export default function Applications() {
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');

  const filteredApplications = mockApplications.filter(app => {
    if (filter === 'all') return true;
    return app.status.toLowerCase().replace(' ', '-') === filter;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime();
    }
    if (sortBy === 'match') {
      return b.matchScore - a.matchScore;
    }
    if (sortBy === 'company') {
      return a.company.localeCompare(b.company);
    }
    return 0;
  });

  const statusCounts = {
    all: mockApplications.length,
    applied: mockApplications.filter(app => app.status === 'Applied').length,
    'under-review': mockApplications.filter(app => app.status === 'Under Review').length,
    'interview-scheduled': mockApplications.filter(app => app.status === 'Interview Scheduled').length,
    rejected: mockApplications.filter(app => app.status === 'Rejected').length,
    offer: mockApplications.filter(app => app.status === 'Offer').length,
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Sort by Date</option>
              <option value="match">Sort by Match Score</option>
              <option value="company">Sort by Company</option>
            </select>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { key: 'all', label: 'All Applications', count: statusCounts.all },
              { key: 'applied', label: 'Applied', count: statusCounts.applied },
              { key: 'under-review', label: 'Under Review', count: statusCounts['under-review'] },
              { key: 'interview-scheduled', label: 'Interview Scheduled', count: statusCounts['interview-scheduled'] },
              { key: 'offer', label: 'Offers', count: statusCounts.offer },
              { key: 'rejected', label: 'Rejected', count: statusCounts.rejected },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  filter === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {sortedApplications.length > 0 ? (
            sortedApplications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-500">Try adjusting your filters or let the AI agent find more opportunities for you.</p>
            </div>
          )}
        </div>

        {/* Bulk Actions */}
        {sortedApplications.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Actions</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Export to CSV
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Mark as Reviewed
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Send Follow-up
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}