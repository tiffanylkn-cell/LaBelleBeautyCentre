import Image from "next/image";
import testimonials from "./testimonial.json";

export default function TestimonialPage() {

  return (
    <div className="flex flex-col pb-16">
      
      {/* Intro Section */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-950">
            Real Results, Real Confidence ✨
          </h1>
          <div className="w-16 h-1 bg-[#fccf53] mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed pt-2">
            At La Belle Beauty Centre⁠, every skin journey is personal. Our clients’ glowing reviews and
            transformation stories reflect the care, expertise, and results we strive to deliver with every
            treatment. From acne recovery and skin rejuvenation to anti-aging and personalized facials, we are
            honored to be part of your confidence journey.
          </p>
          <p className="text-sm text-zinc-500">
            Read real experiences from clients who have trusted us with their skin, and discover why so many continue to choose La Belle for healthy, radiant, and beautiful skin.
          </p>
        </div>
      </section>

      {/* Testimonials Profile Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testi, idx) => (
            <div
              key={`${testi.name}-${idx}`}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md border border-zinc-100 p-6 flex flex-col space-y-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Profile Image COMPARISON Case */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 group">
                <Image
                  src={testi.image}
                  alt={`${testi.name} Transformation Result`}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Card Meta details */}
              <div className="flex-grow space-y-4 font-sans">
                <div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
                  <h3 className="text-2xl font-serif font-bold text-zinc-950">
                    {testi.name}
                  </h3>
                  <span className="text-sm font-semibold bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-100">
                    Age {testi.age}
                  </span>
                </div>

                <div className="space-y-2 text-sm leading-relaxed text-zinc-700">
                  <p>
                    <strong className="text-zinc-950 block">Skin Concerns:</strong>
                    {testi.concerns}
                  </p>
                  <p>
                    <strong className="text-zinc-950 block">Treatment Performed:</strong>
                    <span className="text-amber-800 font-semibold">{testi.treatment}</span>
                  </p>
                  <p className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                    <strong className="text-zinc-950 block mb-1">Results:</strong>
                    {testi.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews Area */}
      <section className="bg-amber-50/50 border-t border-zinc-100 py-16 text-center w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-950">
            Google Reviews
          </h2>
          <div className="w-16 h-1 bg-[#fccf53] mx-auto rounded-full"></div>
          <p className="text-base text-zinc-700 leading-relaxed pt-2 max-w-2xl mx-auto">
            Hear directly from our happy clients from our Google Reviews! Discover real experiences, honest
            feedback, and glowing reviews from customers who trust us for their beauty and skincare journey.
            Your satisfaction and confidence are our top priority.
          </p>

          <div className="relative w-full max-w-4xl mx-auto shadow-lg rounded-2xl overflow-hidden mt-10 border border-zinc-200/50">
            <Image
              src="/testimonial/google_review.png"
              alt="Google Reviews Summary"
              width={1019}
              height={400}
              sizes="(max-width: 896px) 100vw, 896px"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
