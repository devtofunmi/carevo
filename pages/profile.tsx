import { useState } from 'react';
import Layout from '@/components/Layout';
import { mockUser } from '@/lib/mockData';

export default function Profile() {
  const [profile, setProfile] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
    console.log('Saving profile:', profile);
  };

  const handleSkillAdd = (skill: string) => {
    if (skill && !profile.skills.includes(skill)) {
      setProfile({
        ...profile,
        skills: [...profile.skills, skill]
      });
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900"></h1>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{profile.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{profile.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Title</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({...profile, title: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{profile.title}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{profile.location}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
              {isEditing ? (
                <select
                  value={profile.experience}
                  onChange={(e) => setProfile({...profile, experience: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>1-2 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                  <option>10+ years</option>
                </select>
              ) : (
                <p className="text-gray-900">{profile.experience}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Salary</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.preferredSalary}
                  onChange={(e) => setProfile({...profile, preferredSalary: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{profile.preferredSalary}</p>
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills</h2>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {skill}
                {isEditing && (
                  <button
                    onClick={() => handleSkillRemove(skill)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
          
          {isEditing && (
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Add a skill"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSkillAdd(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
              <button
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  handleSkillAdd(input.value);
                  input.value = '';
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
          )}
        </div>

        {/* Job Preferences */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Job Preferences</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Locations</label>
              <div className="flex flex-wrap gap-2">
                {profile.preferredLocations.map((location, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="auto-apply"
                checked={profile.autoApply}
                onChange={(e) => setProfile({...profile, autoApply: e.target.checked})}
                disabled={!isEditing}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="auto-apply" className="ml-2 text-sm text-gray-700">
                Enable auto-apply for jobs with 90%+ match score
              </label>
            </div>
          </div>
        </div>

        {/* Resume */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Resume</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Current Resume</h3>
            <p className="text-gray-500 mb-4">alex_johnson_resume.pdf (uploaded 2 weeks ago)</p>
            <div className="space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Upload New Resume
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Download Current
              </button>
            </div>
          </div>
        </div>

        {/* Application Statistics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Application Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{profile.totalApplications}</div>
              <div className="text-sm text-gray-500">Total Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{profile.activeApplications}</div>
              <div className="text-sm text-gray-500">Active Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{profile.interviews}</div>
              <div className="text-sm text-gray-500">Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{profile.offers}</div>
              <div className="text-sm text-gray-500">Offers</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}