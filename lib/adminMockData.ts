// Mock data for Admin Dashboard

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  plan: 'Free' | 'Pro' | 'Enterprise';
  totalApplications: number;
  lastActive: string;
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalApplications: number;
  successfulPlacements: number;
  monthlyRevenue: number;
  averageMatchScore: number;
}

export interface SystemMetrics {
  jobBoardsMonitored: number;
  jobsScannedToday: number;
  applicationsProcessed: number;
  systemUptime: string;
  apiResponseTime: number;
}

export const adminStats: AdminStats = {
  totalUsers: 12847,
  activeUsers: 8934,
  totalApplications: 156789,
  successfulPlacements: 3421,
  monthlyRevenue: 89750,
  averageMatchScore: 87
};

export const systemMetrics: SystemMetrics = {
  jobBoardsMonitored: 247,
  jobsScannedToday: 45678,
  applicationsProcessed: 1234,
  systemUptime: "99.9%",
  apiResponseTime: 145
};

export const mockAdminUsers: AdminUser[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    joinDate: "2024-12-15",
    status: "Active",
    plan: "Pro",
    totalApplications: 47,
    lastActive: "2025-01-10"
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    joinDate: "2024-11-22",
    status: "Active",
    plan: "Enterprise",
    totalApplications: 89,
    lastActive: "2025-01-09"
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    email: "m.rodriguez@email.com",
    joinDate: "2025-01-05",
    status: "Active",
    plan: "Free",
    totalApplications: 12,
    lastActive: "2025-01-10"
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@email.com",
    joinDate: "2024-10-18",
    status: "Inactive",
    plan: "Pro",
    totalApplications: 156,
    lastActive: "2024-12-28"
  },
  {
    id: "5",
    name: "David Kim",
    email: "david.kim@email.com",
    joinDate: "2024-09-30",
    status: "Suspended",
    plan: "Free",
    totalApplications: 23,
    lastActive: "2024-12-15"
  }
];

export const recentActivity = [
  {
    id: "1",
    type: "user_signup",
    message: "New user registered: john.doe@email.com",
    timestamp: "2025-01-10T14:30:00Z"
  },
  {
    id: "2",
    type: "application_sent",
    message: "1,234 applications processed in the last hour",
    timestamp: "2025-01-10T14:00:00Z"
  },
  {
    id: "3",
    type: "system_alert",
    message: "Job board API rate limit reached for LinkedIn",
    timestamp: "2025-01-10T13:45:00Z"
  },
  {
    id: "4",
    type: "user_upgrade",
    message: "User upgraded to Pro plan: sarah.chen@email.com",
    timestamp: "2025-01-10T13:20:00Z"
  },
  {
    id: "5",
    type: "placement_success",
    message: "Successful job placement: Frontend Developer at TechCorp",
    timestamp: "2025-01-10T12:15:00Z"
  }
];