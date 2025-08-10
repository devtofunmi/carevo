export default function TestimonialSection() {
  return (
    <section className="pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* User Avatars */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex -space-x-2">
              {/* Avatar 1 */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="/Image-1.png"
                  alt="User testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Avatar 2 */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="/Image-2.png"
                  alt="User testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Avatar 3 */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="/Image-3.png"
                  alt="User testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 italic leading-relaxed px-4">
            "Recruiters from Amazon, Wise,
            <br />
            and other big companies are already reaching out to me!"
          </blockquote>
        </div>
      </div>
    </section>
  );
}