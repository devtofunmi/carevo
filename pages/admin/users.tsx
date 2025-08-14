import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { mockAdminUsers, AdminUser } from "@/lib/adminMockData";
import { motion } from "framer-motion";

export default function AdminUsers() {
  const [users, setUsers] = useState(mockAdminUsers);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const matchesFilter =
      filter === "all" || user.status.toLowerCase() === filter;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusCounts = {
    all: users.length,
    active: users.filter((u) => u.status === "Active").length,
    inactive: users.filter((u) => u.status === "Inactive").length,
    suspended: users.filter((u) => u.status === "Suspended").length,
  };

  const handleStatusChange = (
    userId: string,
    newStatus: AdminUser["status"]
  ) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case "Free":
        return "bg-gray-100 text-gray-800";
      case "Pro":
        return "bg-blue-100 text-blue-800";
      case "Enterprise":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
    <AdminLayout>
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
          <motion.button
            className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base self-start sm:self-auto"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1d4ed8",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Add New User
          </motion.button>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0"
              >
                <option value="all">All ({statusCounts.all})</option>
                <option value="active">Active ({statusCounts.active})</option>
                <option value="inactive">
                  Inactive ({statusCounts.inactive})
                </option>
                <option value="suspended">
                  Suspended ({statusCounts.suspended})
                </option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Users Table */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          variants={itemVariants}
        >
          <div className="overflow-x-auto hide-scrollbar">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Applications
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Join Date
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Last Active
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    className="hover:bg-gray-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs sm:text-sm">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="ml-2 sm:ml-4 min-w-0 flex-1">
                          <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                            {user.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${getPlanBadgeColor(
                          user.plan
                        )}`}
                      >
                        {user.plan}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 hidden sm:table-cell">
                      {user.totalApplications}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden md:table-cell">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden lg:table-cell">
                      {new Date(user.lastActive).toLocaleDateString()}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                        <motion.button
                          className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Edit
                        </motion.button>
                        <select
                          value={user.status}
                          onChange={(e) =>
                            handleStatusChange(
                              user.id,
                              e.target.value as AdminUser["status"]
                            )
                          }
                          className="text-xs border border-gray-300 rounded px-1 sm:px-2 py-1"
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                          <option value="Suspended">Suspended</option>
                        </select>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* User Statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
            whileHover={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Plan Distribution
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">Free</span>
                <span className="text-sm sm:text-base font-medium">
                  {users.filter((u) => u.plan === "Free").length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">Pro</span>
                <span className="text-sm sm:text-base font-medium">
                  {users.filter((u) => u.plan === "Pro").length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">
                  Enterprise
                </span>
                <span className="text-sm sm:text-base font-medium">
                  {users.filter((u) => u.plan === "Enterprise").length}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
            whileHover={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              User Activity
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">
                  Active Users
                </span>
                <span className="text-sm sm:text-base font-medium text-green-600">
                  {statusCounts.active}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">
                  Inactive Users
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-600">
                  {statusCounts.inactive}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">
                  Suspended Users
                </span>
                <span className="text-sm sm:text-base font-medium text-red-600">
                  {statusCounts.suspended}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 sm:col-span-2 lg:col-span-1"
            whileHover={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Total Applications
            </h3>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
              {users
                .reduce((sum, user) => sum + user.totalApplications, 0)
                .toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Avg:{" "}
              {Math.round(
                users.reduce((sum, user) => sum + user.totalApplications, 0) /
                  users.length
              )}{" "}
              per user
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}
