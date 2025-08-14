import { JobApplication } from '@/lib/mockData';
import { motion } from "framer-motion";

interface ApplicationCardProps {
  application: JobApplication;
}

export default function ApplicationCard({ application }: ApplicationCardProps) {
  const statusColors = {
    'Applied': 'bg-blue-100 text-blue-800',
    'Under Review': 'bg-yellow-100 text-yellow-800',
    'Interview Scheduled': 'bg-purple-100 text-purple-800',
    'Rejected': 'bg-red-100 text-red-800',
    'Offer': 'bg-green-100 text-green-800'
  };

  const matchScoreColor = application.matchScore >= 90 ? 'text-green-600' : 
                         application.matchScore >= 80 ? 'text-yellow-600' : 'text-red-600';

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 cursor-pointer group"
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
        <div className="flex-1 min-w-0">
          <motion.h3 
            className="text-base sm:text-lg font-semibold text-gray-900 truncate"
            whileHover={{ color: "#2563eb" }}
            transition={{ duration: 0.2 }}
          >
            {application.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 truncate"
            whileHover={{ color: "#374151" }}
            transition={{ duration: 0.2 }}
          >
            {application.company}
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
            <span className="truncate">📍 {application.location}</span>
            <span className="truncate">💰 {application.salary}</span>
            <span className="truncate">📅 {new Date(application.appliedDate).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-start sm:text-right space-x-2 sm:space-x-0 sm:space-y-2">
          <motion.span 
            className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[application.status]}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {application.status}
          </motion.span>
          <motion.span 
            className={`text-xs sm:text-sm font-medium ${matchScoreColor}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {application.matchScore}% match
          </motion.span>
        </div>
      </div>
      
      <div className="mt-3 sm:mt-4">
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{application.description}</p>
      </div>
      
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
        {application.requirements.slice(0, 4).map((req, index) => (
          <motion.span 
            key={index} 
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
            whileHover={{ 
              backgroundColor: "#dbeafe", 
              color: "#1e40af",
              scale: 1.05 
            }}
            transition={{ duration: 0.2 }}
          >
            {req}
          </motion.span>
        ))}
        {application.requirements.length > 4 && (
          <motion.span 
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
            whileHover={{ 
              backgroundColor: "#dbeafe", 
              color: "#1e40af",
              scale: 1.05 
            }}
            transition={{ duration: 0.2 }}
          >
            +{application.requirements.length - 4} more
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}