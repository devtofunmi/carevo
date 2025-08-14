import { mockUser } from '@/lib/mockData';
import { motion } from "framer-motion";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16">
      <div className="flex items-center justify-between px-4 sm:px-6 h-full">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <motion.button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 mr-2 rounded-lg"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "#f3f4f6" 
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
          
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
              Good morning, {mockUser.name.split(' ')[0]}!
            </h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-medium text-gray-900">{mockUser.name}</div>
              <div className="text-xs text-gray-500">{mockUser.title}</div>
            </div>
            <motion.div 
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#1d4ed8" 
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {mockUser.name.split(' ').map(n => n[0]).join('')}
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}