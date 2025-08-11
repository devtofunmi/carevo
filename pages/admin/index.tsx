import AdminLayout from "@/components/AdminLayout";
import StatsCard from "@/components/StatsCard";
import {
  adminStats,
  systemMetrics,
  mockAdminUsers,
  recentActivity,
} from "@/lib/adminMockData";

export default function AdminDashboard() {
  const recentUsers = mockAdminUsers.slice(0, 5);
  const recentActivities = recentActivity.slice(0, 5);

  const getActivityIcon = (type: string) => {
    return "";
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Users"
            value={adminStats.totalUsers.toLocaleString()}
            change="+234 this month"
            changeType="positive"
            icon=""
          />
          <StatsCard
            title="Active Users"
            value={adminStats.activeUsers.toLocaleString()}
            change="69% of total"
            changeType="positive"
            icon=""
          />
          <StatsCard
            title="Applications Sent"
            value={adminStats.totalApplications.toLocaleString()}
            change="+12.5% this month"
            changeType="positive"
            icon=""
          />
          <StatsCard
            title="Successful Placements"
            value={adminStats.successfulPlacements.toLocaleString()}
            change="2.2% success rate"
            changeType="positive"
            icon=""
          />
        </div>

        {/* System Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            System Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {systemMetrics.jobBoardsMonitored}
              </div>
              <div className="text-sm text-gray-500">Job Boards Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {systemMetrics.jobsScannedToday.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">Jobs Scanned Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {systemMetrics.applicationsProcessed.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                Applications Processed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {systemMetrics.systemUptime}
              </div>
              <div className="text-sm text-gray-500">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">
                {systemMetrics.apiResponseTime}ms
              </div>
              <div className="text-sm text-gray-500">Avg Response Time</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Users
              </h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View all →
              </button>
            </div>

            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "Inactive"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {user.plan}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Activity
              </h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View all →
              </button>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">
                      {formatTimestamp(activity.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
            <div className="text-3xl font-bold mb-2">
              ${adminStats.monthlyRevenue.toLocaleString()}
            </div>
            <div className="text-sm opacity-90">+15.3% from last month</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Average Match Score</h3>
            <div className="text-3xl font-bold mb-2">
              {adminStats.averageMatchScore}%
            </div>
            <div className="text-sm opacity-90">+2.1% improvement</div>
          </div>
        </div>

       
      </div>
    </AdminLayout>
  );
}
