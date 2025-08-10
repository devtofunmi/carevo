// Mock data for Carevo - AI Job Application Assistant

export interface JobApplication {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  status: 'Applied' | 'Under Review' | 'Interview Scheduled' | 'Rejected' | 'Offer';
  appliedDate: string;
  matchScore: number;
  description: string;
  requirements: string[];
  logo?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  title: string;
  location: string;
  skills: string[];
  experience: string;
  preferredSalary: string;
  preferredLocations: string[];
  autoApply: boolean;
  totalApplications: number;
  activeApplications: number;
  interviews: number;
  offers: number;
}

export const mockUser: UserProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  title: "Senior Frontend Developer",
  location: "San Francisco, CA",
  skills: ["React", "TypeScript", "Next.js", "Node.js", "Python", "AWS", "Docker"],
  experience: "5+ years",
  preferredSalary: "$120k - $160k",
  preferredLocations: ["San Francisco", "Remote", "New York"],
  autoApply: true,
  totalApplications: 47,
  activeApplications: 23,
  interviews: 8,
  offers: 2
};

export const mockApplications: JobApplication[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$140k - $180k",
    type: "Full-time",
    status: "Interview Scheduled",
    appliedDate: "2025-01-08",
    matchScore: 95,
    description: "We're looking for a senior frontend developer to join our growing team...",
    requirements: ["React", "TypeScript", "5+ years experience", "Team leadership"],
    logo: "https://via.placeholder.com/40x40/3B82F6/ffffff?text=TC"
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    salary: "$130k - $160k",
    type: "Remote",
    status: "Under Review",
    appliedDate: "2025-01-07",
    matchScore: 88,
    description: "Join our innovative startup as a full stack engineer...",
    requirements: ["React", "Node.js", "PostgreSQL", "AWS"],
    logo: "https://via.placeholder.com/40x40/10B981/ffffff?text=SX"
  },
  {
    id: "3",
    title: "React Developer",
    company: "BigTech Inc",
    location: "New York, NY",
    salary: "$120k - $150k",
    type: "Full-time",
    status: "Applied",
    appliedDate: "2025-01-06",
    matchScore: 92,
    description: "We need a React developer for our core product team...",
    requirements: ["React", "JavaScript", "Redux", "Testing"],
    logo: "https://via.placeholder.com/40x40/8B5CF6/ffffff?text=BT"
  },
  {
    id: "4",
    title: "Frontend Architect",
    company: "InnovateLab",
    location: "Austin, TX",
    salary: "$160k - $200k",
    type: "Full-time",
    status: "Offer",
    appliedDate: "2025-01-05",
    matchScore: 97,
    description: "Lead our frontend architecture and mentor junior developers...",
    requirements: ["React", "TypeScript", "Architecture", "Leadership"],
    logo: "https://via.placeholder.com/40x40/F59E0B/ffffff?text=IL"
  },
  {
    id: "5",
    title: "Software Engineer",
    company: "CloudSoft",
    location: "Seattle, WA",
    salary: "$110k - $140k",
    type: "Full-time",
    status: "Rejected",
    appliedDate: "2025-01-04",
    matchScore: 78,
    description: "Join our cloud infrastructure team...",
    requirements: ["JavaScript", "Python", "AWS", "Docker"],
    logo: "https://via.placeholder.com/40x40/EF4444/ffffff?text=CS"
  }
];

export const mockStats = {
  applicationsThisWeek: 12,
  responseRate: 34,
  averageMatchScore: 89,
  topSkillDemand: "React"
};