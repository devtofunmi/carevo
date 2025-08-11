import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    resume: null as File | null,
    jobTitle: "",
    jobTitles: [] as string[],
    salaryExpectation: "",
    skills: [] as string[],
    skillInput: "",
    workLocation: "",
    agreeToTerms: false,
  });

  const [step, setStep] = useState(1);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileUpload = (file: File) => {
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const addJobTitle = () => {
    if (
      formData.jobTitle.trim() &&
      !formData.jobTitles.includes(formData.jobTitle.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        jobTitles: [...prev.jobTitles, prev.jobTitle.trim()],
        jobTitle: "",
      }));
    }
  };

  const removeJobTitle = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      jobTitles: prev.jobTitles.filter((t) => t !== title),
    }));
  };

  const addSkill = (skill: string) => {
    if (skill.trim() && !formData.skills.includes(skill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill.trim()],
      }));
    }
  };

  const removeSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleSkillConfirm = () => {
    if (formData.skillInput.trim()) {
      addSkill(formData.skillInput);
      setFormData((prev) => ({ ...prev, skillInput: "" }));
    }
  };

  const handleNextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // Handle signup logic here
  };

  const suggestedSkills = [
    "Agile",
    "JIRA",
    "Software testing and implementation",
    "Testing and deployment",
    "Design and development",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 px-6 py-4">
        <Link href="/" className="inline-flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">carevo</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="max-w-2xl w-full">
            {/* Step 1: Account Creation */}
            {step === 1 && (
              <div className="text-center space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Create your account
                  </h1>
                  <p className="text-lg text-gray-600">
                    Start your AI-powered job search journey
                  </p>
                </div>

                <div className="max-w-md mx-auto space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••••"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••••"
                      required
                    />
                  </div>

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Resume Upload */}
            {step === 2 && (
              <div className="text-center space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Upload your resume to get great matches
                  </h1>
                  <p className="text-lg text-gray-600">
                    Your resume will also help us complete applications faster.
                  </p>
                </div>

                <div className="max-w-lg mx-auto">
                  <div
                    className={`border-2 border-dashed rounded-2xl p-12 transition-colors ${
                      dragActive
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 bg-white hover:border-gray-400"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Upload your resume
                        </h3>
                        <p className="text-gray-600">
                          We'll auto-fill your answers.
                        </p>
                      </div>
                      {formData.resume && (
                        <div className="text-sm text-green-600 font-medium">
                          ✓ {formData.resume.name} uploaded
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        e.target.files?.[0] &&
                        handleFileUpload(e.target.files[0])
                      }
                      className="hidden"
                      id="resume-upload"
                    />
                  </div>
                  <label
                    htmlFor="resume-upload"
                    className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
                  >
                    Choose File
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="text-blue-600 hover:text-blue-700 font-medium underline cursor-pointer"
                >
                  Skip for now
                </button>
              </div>
            )}

            {/* Step 3: Job Preferences */}
            {step === 3 && (
              <div className="text-center space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    What kind of jobs are you looking for?
                  </h1>
                  <p className="text-lg text-gray-600">
                    We recommend up to 5 titles to get a great list of jobs.
                  </p>
                </div>

                <div className="max-w-lg mx-auto space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Job title, keyword or category
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          (e.preventDefault(), addJobTitle())
                        }
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Software Engineer"
                      />
                      <button
                        type="button"
                        onClick={addJobTitle}
                        className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {formData.jobTitles.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.jobTitles.map((title, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          {title}
                          <button
                            type="button"
                            onClick={() => removeJobTitle(title)}
                            className="ml-2 text-blue-600 hover:text-blue-800 cursor-pointer"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {formData.jobTitles.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm">
                        Great news! We've found jobs for you.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Salary Expectations */}
            {step === 4 && (
              <div className="text-center space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    How much would you like to earn?
                    <span className="inline-flex items-center ml-2">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </h1>
                </div>

                <div className="max-w-lg mx-auto space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Minimum desired compensation
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-gray-500">
                        $
                      </span>
                      <input
                        type="text"
                        name="salaryExpectation"
                        value={formData.salaryExpectation}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="75,000"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 text-left">
                      Enter your desired annual salary
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                  >
                    Skip for now
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Skills */}
            {step === 5 && (
              <div className="text-center space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    What skills would you like to highlight to employers?
                  </h1>
                  <p className="text-lg text-gray-600">
                    Choose 3 or more to help stand out.
                  </p>
                </div>

                <div className="max-w-lg mx-auto space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Enter 3 or more skills or tools
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={formData.skillInput}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            skillInput: e.target.value,
                          }))
                        }
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          (e.preventDefault(), handleSkillConfirm())
                        }
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Critical Thinking, Communication, Excel, etc."
                      />
                      <button
                        type="button"
                        onClick={handleSkillConfirm}
                        className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 cursor-pointer"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>

                  {formData.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-blue-600 hover:text-blue-800 cursor-pointer"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-gray-600 text-left">
                      Suggested skills:
                    </p>
                    <div className="space-y-2">
                      {suggestedSkills.map((skill, index) => (
                        <label
                          key={index}
                          className="flex items-center space-x-3 text-left"
                        >
                          <input
                            type="checkbox"
                            checked={formData.skills.includes(skill)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                addSkill(skill);
                              } else {
                                removeSkill(skill);
                              }
                            }}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Footer Navigation */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="max-w-2xl mx-auto flex justify-between items-center">
            <button
              type="button"
              onClick={handlePrevStep}
              className={`flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer ${
                step === 1 ? "invisible" : ""
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </button>

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium cursor-pointer"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
