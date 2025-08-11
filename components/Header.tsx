import { mockUser } from '@/lib/mockData';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16">
      <div className="flex items-center justify-between px-6 h-full">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good morning, {mockUser.name.split(' ')[0]}!</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* <div className="relative">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
          </div> */}
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{mockUser.name}</div>
              <div className="text-xs text-gray-500">{mockUser.title}</div>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
              {mockUser.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}