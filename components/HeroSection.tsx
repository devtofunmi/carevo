import Link from 'next/link';

export default function HeroSection() {
  return (
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
              to the right jobs for you until you're hired.
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
  );
}