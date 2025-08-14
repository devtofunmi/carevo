import { useState } from "react";
import Layout from "@/components/Layout";
import ApplicationCard from "@/components/ApplicationCard";
import { mockApplications, JobApplication } from "@/lib/mockData";
import { motion } from "framer-motion";

export default function Applications() {
  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("date");

  const filteredApplications = mockApplications.filter((app) => {
    if (filter === "all") return true;
    return app.status.toLowerCase().replace(" ", "-") === filter;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (sortBy === "date") {
      return (
        new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
      );
    }
    if (sortBy === "match") {
      return b.matchScore - a.matchScore;
    }
    if (sortBy === "company") {
      return a.company.localeCompare(b.company);
    }
    return 0;
  });

  const statusCounts = {
    all: mockApplications.length,
    applied: mockApplications.filter((app) => app.status === "Applied").length,
    "under-review": mockApplications.filter(
      (app) => app.status === "Under Review"
    ).length,
    "interview-scheduled": mockApplications.filter(
      (app) => app.status === "Interview Scheduled"
    ).length,
    rejected: mockApplications.filter((app) => app.status === "Rejected")
      .length,
    offer: mockApplications.filter((app) => app.status === "Offer").length,
  };

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
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <motion.div
        className="space-y-4 sm:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0"
          variants={itemVariants}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Job Applications
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 flex-1 sm:flex-none"
            >
              <option value="date">Sort by Date</option>
              <option value="match">Sort by Match Score</option>
              <option value="company">Sort by Company</option>
            </select>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="border-b border-gray-200"
          variants={itemVariants}
        >
          <div className="hide-scrollbar -mb-px flex overflow-x-auto overflow-y-hidden">
            <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 min-w-max px-1">
              {[
                {
                  key: "all",
                  label: "All",
                  fullLabel: "All Applications",
                  count: statusCounts.all,
                },
                {
                  key: "applied",
                  label: "Applied",
                  fullLabel: "Applied",
                  count: statusCounts.applied,
                },
                {
                  key: "under-review",
                  label: "Review",
                  fullLabel: "Under Review",
                  count: statusCounts["under-review"],
                },
                {
                  key: "interview-scheduled",
                  label: "Interview",
                  fullLabel: "Interview Scheduled",
                  count: statusCounts["interview-scheduled"],
                },
                {
                  key: "offer",
                  label: "Offers",
                  fullLabel: "Offers",
                  count: statusCounts.offer,
                },
                {
                  key: "rejected",
                  label: "Rejected",
                  fullLabel: "Rejected",
                  count: statusCounts.rejected,
                },
              ].map((tab, index) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`py-2 px-2 sm:px-3 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${
                    filter === tab.key
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <span className="sm:hidden">
                    {tab.label} ({tab.count})
                  </span>
                  <span className="hidden sm:inline">
                    {tab.fullLabel} ({tab.count})
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Applications List */}
        <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
          {sortedApplications.length > 0 ? (
            sortedApplications.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ApplicationCard application={application} />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8 sm:py-12">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📭</div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                No applications found
              </h3>
              <p className="text-sm sm:text-base text-gray-500 px-4">
                Try adjusting your filters or let the AI agent find more
                opportunities for you.
              </p>
            </div>
          )}
        </motion.div>

        {/* Bulk Actions */}
        {sortedApplications.length > 0 && (
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
            variants={itemVariants}
            whileHover={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Bulk Actions
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <motion.button
                className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1d4ed8",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Export to CSV
              </motion.button>
              <motion.button
                className="px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f9fafb",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Mark as Reviewed
              </motion.button>
              <motion.button
                className="px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f9fafb",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send Follow-up
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </Layout>
  );
}
