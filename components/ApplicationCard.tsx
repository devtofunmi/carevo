import { JobApplication } from '@/lib/mockData';

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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{application.title}</h3>
            <p className="text-gray-600">{application.company}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span>📍 {application.location}</span>
              <span>💰 {application.salary}</span>
              <span>📅 {new Date(application.appliedDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[application.status]}`}>
            {application.status}
          </span>
          <div className="mt-2">
            <span className={`text-sm font-medium ${matchScoreColor}`}>
              {application.matchScore}% match
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600 line-clamp-2">{application.description}</p>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {application.requirements.slice(0, 4).map((req, index) => (
          <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
            {req}
          </span>
        ))}
        {application.requirements.length > 4 && (
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
            +{application.requirements.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
}