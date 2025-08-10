import Layout from '@/components/Layout';
import StatsCard from '@/components/StatsCard';
import ApplicationCard from '@/components/ApplicationCard';
import { mockUser, mockApplications, mockStats } from '@/lib/mockData';

export default function Dashboard() {
  const recentApplications = mockApplications.slice(0, 3);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Applications"
            value={mockUser.totalApplications}
            change="+12 this week"
            changeType="positive"
            icon="📊"
          />
          <StatsCard
            title="Active Applications"
            value={mockUser.activeApplications}
            change="23 pending"
            changeType="neutral"
            icon="⏳"
          />
          <StatsCard
            title="Interviews"
            value={mockUser.interviews}
            change="+3 scheduled"
            changeType="positive"
            icon="🎯"
          />
          <StatsCard
            title="Offers"
            value={mockUser.offers}
            change="2 pending"
            changeType="positive"
            icon="🎉"
          />
        </div>

        {/* AI Agent Status */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">AI Agent Status</h2>
              <p className="opacity-90 mt-1">Your personal job hunting assistant is working 24/7</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="font-medium">Active</span>
              </div>
              <div className="text-sm opacity-90">
                Scanned 1,247 jobs today
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">{mockStats.applicationsThisWeek}</div>
              <div className="text-sm opacity-90">Applications this week</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">{mockStats.responseRate}%</div>
              <div className="text-sm opacity-90">Response rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">{mockStats.averageMatchScore}%</div>
              <div className="text-sm opacity-90">Avg. match score</div>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Applications</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View all applications →
            </button>
          </div>
          
          <div className="space-y-4">
            {recentApplications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl mr-3">⚙️</span>
              <div className="text-left">
                <div className="font-medium">Update Preferences</div>
                <div className="text-sm text-gray-500">Modify job search criteria</div>
              </div>
            </button>
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl mr-3">📄</span>
              <div className="text-left">
                <div className="font-medium">Upload Resume</div>
                <div className="text-sm text-gray-500">Update your resume</div>
              </div>
            </button>
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl mr-3">🔍</span>
              <div className="text-left">
                <div className="font-medium">Discover Jobs</div>
                <div className="text-sm text-gray-500">Browse new opportunities</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}