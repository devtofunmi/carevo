import Layout from "@/components/Layout";
import StatsCard from "@/components/StatsCard";
import ApplicationCard from "@/components/ApplicationCard";
import { mockUser, mockApplications, mockStats } from "@/lib/mockData";
import { motion } from "framer-motion";

export default function Dashboard() {
  const recentApplications = mockApplications.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Layout>
      <motion.div
        className="space-y-4 sm:space-y-6 px-4 sm:px-0"
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
            title="Total Applications"
            value={mockUser.totalApplications}
            change="+12 this week"
            changeType="positive"
            icon={""}
          />
          <StatsCard
            title="Active Applications"
            value={mockUser.activeApplications}
            change="23 pending"
            changeType="neutral"
            icon={""}
          />
          <StatsCard
            title="Interviews"
            value={mockUser.interviews}
            change="+3 scheduled"
            changeType="positive"
            icon={""}
          />
          <StatsCard
            title="Offers"
            value={mockUser.offers}
            change="2 pending"
            changeType="positive"
            icon={""}
          />
        </motion.div>

        {/* AI Agent Status */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold">AI Agent Status</h2>
              <p className="opacity-90 mt-1 text-sm sm:text-base">
                Your personal job hunting assistant is working 24/7
              </p>
            </div>
            <div className="text-left sm:text-right">
              <div className="flex items-center sm:justify-end mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="font-medium">Active</span>
              </div>
              <div className="text-sm opacity-90">Scanned 1,247 jobs today</div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[
              {
                value: mockStats.applicationsThisWeek,
                label: "Applications this week",
              },
              { value: `${mockStats.responseRate}%`, label: "Response rate" },
              {
                value: `${mockStats.averageMatchScore}%`,
                label: "Avg. match score",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-lg p-3 sm:p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Recent Applications */}
        <motion.div variants={itemVariants}>
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Recent Applications
            </h2>
            <motion.button
              className="text-blue-600 cursor-pointer hover:text-blue-700 font-medium text-left sm:text-right"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all applications
            </motion.button>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {recentApplications.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <ApplicationCard application={application} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
