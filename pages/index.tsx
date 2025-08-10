import Link from "next/link";
import { useState } from "react";

function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "What is Carevo, and how can it help my career?",
      answer:
        "Carevo is an AI-powered job application platform that automates your job search. Our AI analyzes your profile, skills, and preferences to identify relevant job opportunities, then creates personalized applications and applies on your behalf within minutes of job postings going live.",
    },
    {
      question: "How does Carevo's AI Resume Analyzer work?",
      answer:
        "Our AI Resume Analyzer scans your resume and compares it against job requirements to identify gaps and optimization opportunities. It suggests improvements to keywords, formatting, and content to increase your chances of getting past ATS systems and catching recruiters' attention.",
    },
    {
      question: "Can Carevo help me optimize my LinkedIn profile?",
      answer:
        "Yes! Carevo provides LinkedIn profile optimization suggestions based on industry best practices and current job market trends. We help you craft compelling headlines, summaries, and experience descriptions that attract recruiters and hiring managers.",
    },
    {
      question: "What is Carevo's Job Tracker, and how does it work?",
      answer:
        "Our Job Tracker is a comprehensive dashboard that monitors all your applications in real-time. It tracks application status, interview schedules, follow-ups, and provides analytics on your job search performance to help you optimize your strategy.",
    },
    {
      question: "Does Carevo provide interview and career coaching?",
      answer:
        "Yes, our Enterprise plan includes personalized career coaching and interview preparation. Our coaches provide mock interviews, salary negotiation guidance, and career strategy sessions to help you land your dream job.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-4">
              {item.question}
            </h3>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                openItems.includes(index) ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openItems.includes(index) && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Carevo
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Job Application Cards */}
            <div className="relative min-h-[500px]">
              {/* Job Application Cards Container */}
              <div className="absolute left-0 top-0 w-80 space-y-4 z-10">
                {/* Job Application Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-300 w-72">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">🏢</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        Project Manager
                      </div>
                      <div className="text-sm text-gray-500">✓ Applied</div>
                    </div>
                  </div>
                </div>

                {/* Job Application Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300 w-72 ml-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">🌟</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        Project Manager Lead
                      </div>
                      <div className="text-sm text-gray-500">✓ Applied</div>
                    </div>
                  </div>
                </div>

                {/* Job Application Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-72">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">🍎</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        Project Manager Specialist
                      </div>
                      <div className="text-sm text-gray-500">✓ Applied</div>
                    </div>
                  </div>
                </div>

                {/* Job Application Card 4 */}
                <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-300 w-72 ml-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        Project Manager
                      </div>
                      <div className="text-sm text-gray-500">✓ Applied</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Person Image */}
              <div className="absolute right-0 top-12 w-72 h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-end justify-center p-4">
                  <div className="w-56 h-80 rounded-2xl overflow-hidden bg-white shadow-lg">
                    <img
                      src="/do.jpg"
                      alt="Professional using Carevo"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:pl-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We apply.
                <sup className="text-blue-600">You get hired.</sup>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Carevo works nonstop —
                <span className="font-semibold text-gray-900">
                  finding and applying
                </span>{" "}
                to the right jobs for you until you’re hired.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                >
                  Get Started
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* User Avatars */}
            <div className="flex justify-center">
              <img
                src="/Image-1.png"
                alt="avatar1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/Image-2.png"
                alt="avatar2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/Image-3.png"
                alt="avatar3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl font-medium text-gray-700 italic leading-relaxed">
              "Recruiters from Amazon, Wise,
              <br /> and other big names are already in my inbox!"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Before - Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Without Carevo
              </h3>

              {/* Problem 1 */}
              <div className="bg-white rounded-xl p-6 border border-red-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Missed Opportunities
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Jobs get filled while you're still crafting the perfect
                      application
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="bg-white rounded-xl p-6 border border-red-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Hours Wasted Daily
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Endless scrolling through job boards instead of interview
                      prep
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="bg-white rounded-xl p-6 border border-red-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-red-600"
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
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Generic Applications
                    </h4>
                    <p className="text-gray-600 text-sm">
                      One-size-fits-all resumes that don't stand out to
                      recruiters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* After - Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                With Carevo
              </h3>

              {/* Solution 1 */}
              <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Never Miss a Job
                    </h4>
                    <p className="text-gray-600 text-sm">
                      AI applies within minutes of job postings going live
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Save 20+ Hours Weekly
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Carevo's AI handles the search while you focus on
                      interviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Tailored Applications
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Every application is customized to match job requirements
                      perfectly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skip the hassle — let us apply for you
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to automate your job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Setup Your Profile
              </h3>
              <p className="text-gray-600">
                Upload your resume, set preferences, and tell us what you're
                looking for. Takes less than 5 minutes.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-purple-50 border border-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Finds & Applies
              </h3>
              <p className="text-gray-600">
                Our AI scans 247 job boards, finds perfect matches, and applies
                on your behalf with personalized cover letters.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-green-50 border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Interviews
              </h3>
              <p className="text-gray-600">
                Receive instant notifications for applications, interviews, and
                offers. Track everything in one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Job Seekers Worldwide
            </h2>
            <p className="text-xl opacity-90">
              See the impact Carevo makes on your job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Applications Sent</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12K+</div>
              <div className="text-lg opacity-90">Interviews Secured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3.2K+</div>
              <div className="text-lg opacity-90">Job Offers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Carevo?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Save 20+ Hours Per Week
                    </h3>
                    <p className="text-gray-600">
                      No more endless scrolling through job boards. Focus on
                      interview prep instead.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Never Miss an Opportunity
                    </h3>
                    <p className="text-gray-600">
                      24/7 monitoring ensures you're first to apply to new job
                      postings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Smart Matching
                    </h3>
                    <p className="text-gray-600">
                      AI analyzes job requirements and matches them to your
                      skills and experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Personalized Applications
                    </h3>
                    <p className="text-gray-600">
                      Each application includes a tailored cover letter and
                      optimized resume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">
                    AI Agent Status
                  </h4>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jobs Scanned Today</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Applications Sent</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Match Score Avg</span>
                    <span className="font-semibold text-green-600">89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Choose the plan that fits your job search needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$0</div>
                <div className="text-gray-500 mb-6">per month</div>

                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      5 applications per month
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Basic job matching</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Email notifications</span>
                  </li>
                </ul>

                <Link
                  href="/signup"
                  className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors inline-block text-center"
                >
                  Get Started Free
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$29</div>
                <div className="text-gray-500 mb-6">per month</div>

                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      100 applications per month
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Advanced AI matching</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Custom cover letters</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                </ul>

                <Link
                  href="/signup"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Start Pro Trial
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$99</div>
                <div className="text-gray-500 mb-6">per month</div>

                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Unlimited applications
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Personal job coach</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Interview preparation</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      24/7 dedicated support
                    </span>
                  </li>
                </ul>

                <Link
                  href="/signup"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors inline-block text-center"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything you need to know about Carevo
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who've automated their way to better
            careers.
          </p>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg inline-block"
          >
            Start Free Trial
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Carevo
              </span>
            </div>
            <div className="text-gray-500">
              © 2025 Carevo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
