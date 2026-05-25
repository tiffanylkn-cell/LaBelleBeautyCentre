import Image from "next/image";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Madam Chin",
      age: 80,
      image: "/testimonial/assets/img/NmnTesti1.png",
      concerns: "Wrinkles, pigmentation, uneven and dull skin tone, eye bags, laugh lines, marionette lines, and dry skin.",
      treatment: "NMN Cell Renewal Treatment",
      results: "Overall skin tone appeared brighter and more even, pigmentation was visibly lightened, and eye bags were reduced. Laugh lines and marionette lines appeared significantly softened, leaving the skin looking smoother, more supple, and rejuvenated.",
    },
    {
      name: "Mrs. How",
      age: 65,
      image: "/testimonial/assets/img/UltraLiftTesti2.png",
      concerns: "Wrinkles, fine lines, and uneven, dull skin tone.",
      treatment: "Ultra Lift Treatment",
      results: "Fine lines were visibly reduced, wrinkles appeared softened, and the skin looked brighter with a more even and radiant skin tone.",
    },
    {
      name: "Ms. Lim",
      age: 25,
      image: "/testimonial/assets/img/Sooth Calm Testi .png",
      concerns: "Sensitized skin around the mouth area, congested pores, blackheads, enlarged pores, and dehydrated skin.",
      treatment: "Soothe And Calm Treatment",
      results: "Redness and irritation were visibly reduced, while pores and blackheads appeared minimized. Skin felt smoother, more hydrated, and visibly radiant with a healthy glow.",
    },
    {
      name: "Ms. Tee",
      age: 20,
      image: "/testimonial/assets/img/SoothCalmTesti1.png",
      concerns: "Dark patches on the cheeks, redness, congested pores, and dull skin.",
      treatment: "Personalized Treatment for Acne and Sensitive Skin.",
      results: "Dark patches appeared lighter, redness was visibly reduced, and the skin looked softer, more hydrated, and radiant with a healthy glow.",
    },
  ];

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
              key={idx}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md border border-zinc-100 p-6 flex flex-col space-y-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Profile Image COMPARISON Case */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 group shadow-inner">
                <Image
                  src={testi.image}
                  alt={`${testi.name} Transformation Result`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
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

          <div className="relative w-full max-w-4xl mx-auto aspect-[10.19/4] shadow-lg rounded-2xl overflow-hidden mt-10 border border-zinc-200/50">
            <Image
              src="/testimonial/assets/img/google_review.png"
              alt="Google Reviews Summary"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
