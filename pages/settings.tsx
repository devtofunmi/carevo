import { useState } from 'react';
import Layout from '@/components/Layout';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    newJobs: true,
    applications: true,
    interviews: true,
    rejections: false,
    weeklyReport: true
  });

  const [autoApplySettings, setAutoApplySettings] = useState({
    enabled: true,
    minMatchScore: 90,
    maxApplicationsPerDay: 5,
    excludeKeywords: ['unpaid', 'internship', 'volunteer']
  });

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
          
          <div className="space-y-4">
            {[
              { key: 'newJobs', label: 'New job matches found', description: 'Get notified when AI finds jobs matching your criteria' },
              { key: 'applications', label: 'Application status updates', description: 'Updates when your application status changes' },
              { key: 'interviews', label: 'Interview invitations', description: 'Immediate notification for interview requests' },
              { key: 'rejections', label: 'Application rejections', description: 'Get notified when applications are rejected' },
              { key: 'weeklyReport', label: 'Weekly summary report', description: 'Weekly overview of your job search progress' }
            ].map((item) => (
              <div key={item.key} className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id={item.key}
                  checked={notifications[item.key as keyof typeof notifications]}
                  onChange={(e) => setNotifications({
                    ...notifications,
                    [item.key]: e.target.checked
                  })}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <div>
                  <label htmlFor={item.key} className="text-sm font-medium text-gray-900">
                    {item.label}
                  </label>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-Apply Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Auto-Apply Settings</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="auto-apply-enabled"
                checked={autoApplySettings.enabled}
                onChange={(e) => setAutoApplySettings({
                  ...autoApplySettings,
                  enabled: e.target.checked
                })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="auto-apply-enabled" className="ml-2 text-sm font-medium text-gray-900">
                Enable automatic job applications
              </label>
            </div>

            {autoApplySettings.enabled && (
              <div className="space-y-4 pl-6 border-l-2 border-blue-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum match score for auto-apply
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={autoApplySettings.minMatchScore}
                      onChange={(e) => setAutoApplySettings({
                        ...autoApplySettings,
                        minMatchScore: parseInt(e.target.value)
                      })}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium text-gray-900 w-12">
                      {autoApplySettings.minMatchScore}%
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum applications per day
                  </label>
                  <select
                    value={autoApplySettings.maxApplicationsPerDay}
                    onChange={(e) => setAutoApplySettings({
                      ...autoApplySettings,
                      maxApplicationsPerDay: parseInt(e.target.value)
                    })}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={3}>3 applications</option>
                    <option value={5}>5 applications</option>
                    <option value={10}>10 applications</option>
                    <option value={15}>15 applications</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exclude jobs containing these keywords
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {autoApplySettings.excludeKeywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800"
                      >
                        {keyword}
                        <button
                          onClick={() => setAutoApplySettings({
                            ...autoApplySettings,
                            excludeKeywords: autoApplySettings.excludeKeywords.filter((_, i) => i !== index)
                          })}
                          className="ml-1 text-red-600 hover:text-red-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Add keyword to exclude"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                        setAutoApplySettings({
                          ...autoApplySettings,
                          excludeKeywords: [...autoApplySettings.excludeKeywords, e.currentTarget.value.trim()]
                        });
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Agent Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Agent Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job board scanning frequency
              </label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Every hour</option>
                <option>Every 4 hours</option>
                <option>Every 12 hours</option>
                <option>Daily</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover letter personalization level
              </label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Basic (company name only)</option>
                <option>Standard (company + role details)</option>
                <option>Advanced (full job description analysis)</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="follow-up"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="follow-up" className="ml-2 text-sm text-gray-700">
                Send automatic follow-up messages after 1 week
              </label>
            </div>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Data & Privacy</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Export Application Data</h3>
                <p className="text-sm text-gray-500">Download all your application data as CSV</p>
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Export
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Delete Account</h3>
                <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </Layout>
  );
}