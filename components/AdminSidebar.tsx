import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: '' },
  { name: 'Users', href: '/admin/users', icon: '' },
  { name: 'Applications', href: '/admin/applications', icon: '' },
  { name: 'Job Boards', href: '/admin/job-boards', icon: '' },
  { name: 'Analytics', href: '/admin/analytics', icon: '' },
  { name: 'Settings', href: '/admin/settings', icon: '' },
];

export default function AdminSidebar() {
  const router = useRouter();

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 shadow-lg">
      <div className="flex h-16 items-center px-6 border-b border-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="ml-3 text-xl font-bold text-white">Carevo Admin</span>
        </div>
      </div>
      
      <nav className="mt-6 px-3">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="absolute bottom-6 left-3 right-3">
        <div className="bg-gray-800 rounded-lg p-4 text-white">
          <div className="text-sm font-medium">System Status</div>
          <div className="flex items-center mt-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="ml-2 text-xs text-gray-300">All systems operational</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">Uptime: 99.9%</div>
        </div>
      </div>
    </div>
  );
}