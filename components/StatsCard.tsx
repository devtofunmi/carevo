import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export default function StatsCard({ title, value, change, changeType = 'neutral' }: StatsCardProps) {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  }[changeType];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 lg:p-6 cursor-pointer group"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center justify-between">
        <div className="w-full">
          <motion.p 
            className="text-xs sm:text-sm font-medium text-gray-600 truncate"
            whileHover={{ color: "#374151" }}
          >
            {title}
          </motion.p>
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-1 sm:mt-2"
            whileHover={{ color: "#2563eb" }}
            transition={{ duration: 0.2 }}
          >
            {value}
          </motion.p>
          {change && (
            <motion.p 
              className={`text-xs sm:text-sm mt-1 sm:mt-2 ${changeColor}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {change}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}