import AdminLayout from "@/components/AdminLayout";
import StatsCard from "@/components/StatsCard";
import {
  adminStats,
  systemMetrics,
  mockAdminUsers,
  recentActivity,
} from "@/lib/adminMockData";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <AdminLayout>
      <motion.div 
        className="space-y-4 sm:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          variants={itemVariants}
        >
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
        </motion.div>

        {/* System Metrics */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
          }}
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            System Metrics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {[
              { value: systemMetrics.jobBoardsMonitored, label: "Job Boards Monitored", color: "text-blue-600" },
              { value: systemMetrics.jobsScannedToday.toLocaleString(), label: "Jobs Scanned Today", color: "text-green-600" },
              { value: systemMetrics.applicationsProcessed.toLocaleString(), label: "Applications Processed", color: "text-purple-600" },
              { value: systemMetrics.systemUptime, label: "System Uptime", color: "text-green-600" },
              { value: `${systemMetrics.apiResponseTime}ms`, label: "Avg Response Time", color: "text-yellow-600" }
            ].map((metric, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-xl sm:text-2xl lg:text-3xl font-bold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
          variants={itemVariants}
        >
          {/* Recent Users */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
            whileHover={{ 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Recent Users
              </h2>
              <motion.button 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm text-left sm:text-right"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View all →
              </motion.button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {recentUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg space-y-2 sm:space-y-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-900 truncate">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 truncate">{user.email}</div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
            whileHover={{ 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Recent Activity
              </h2>
              <motion.button 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm text-left sm:text-right"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View all →
              </motion.button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div 
                  key={activity.id} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">
                      {formatTimestamp(activity.timestamp)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Revenue and Performance */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-4 sm:p-6 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2">Monthly Revenue</h3>
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              ${adminStats.monthlyRevenue.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm opacity-90">+15.3% from last month</div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-4 sm:p-6 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2">Average Match Score</h3>
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              {adminStats.averageMatchScore}%
            </div>
            <div className="text-xs sm:text-sm opacity-90">+2.1% improvement</div>
          </motion.div>
        </motion.div>

       
      </motion.div>
    </AdminLayout>
  );
}
