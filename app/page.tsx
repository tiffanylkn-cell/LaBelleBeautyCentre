import Carousel from "./components/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mainSlides = [
    "/assets/img/beauty_1_new.png",
    "/assets/img/beauty_2_new.png",
    "/assets/img/beauty_3_new.png",
  ];

  const gallerySlides = [
    "/assets/img/P1010837.jpg",
    "/assets/img/P1010855.jpg",
    "/assets/img/P1010924.jpg",
  ];

  const expertise = [
    {
      title: "Skin Management",
      image: "/assets/img/skin_managemnt.png",
      description:
        "A consistent personalized approach to caring for your skin to maintain its health, balance, and appearance over time.",
      width: 181,
      height: 173,
    },
    {
      title: "Skin Tag Removal",
      image: "/assets/img/skin_tag.png",
      description:
        "Eliminating small, benign skin growths using methods like Co2 laser safely and effectively.",
      width: 200,
      height: 175,
    },
    {
      title: "Age Reversal",
      image: "/assets/img/age_reversal.png",
      description:
        "We utilize personalized treatment plans and product adjustments to reduce signs of aging like fine lines, wrinkles, and sagging skin, restoring you to a more youthful look.",
      width: 200,
      height: 165,
    },
    {
      title: "Under-Eye Bag & Dark Circles",
      image: "/assets/img/eye.png",
      description:
        "A common concern involving puffiness and darkened skin around the eyes, often linked to aging or insufficient rest. Treatment may include topical gels and advanced aesthetic procedures.",
      width: 200,
      height: 175,
    },
    {
      title: "Placenta and Stem Cell Therapy",
      image: "/assets/img/placenta.png",
      description:
        "Involves using plant placental extracts and stem cells in advanced skincare treatments to encourage skin rejuvenation and deep cellular regeneration.",
      width: 200,
      height: 207,
    },
  ];

  return (
    <div className="flex flex-col space-y-16 pb-16">
      
      {/* Hero Carousel Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
        <Carousel
          images={mainSlides}
          autoPlayInterval={6000}
          aspectRatio="aspect-[291/150]"
          priority
        />
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-center font-serif text-3xl sm:text-5xl text-zinc-950 font-bold mb-12">
            Why LA BELLE Beauty Centre?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Gallery Swiper Card */}
            <div className="w-full">
              <Carousel
                images={gallerySlides}
                autoPlayInterval={5000}
                aspectRatio="aspect-[4/3]"
              />
            </div>

            {/* Content Details */}
            <div className="flex flex-col justify-center space-y-10">
              
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-amber-700 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#fccf53] inline-block rounded-full"></span>
                  Holistic Approach
                </h3>
                <p className="text-base text-zinc-700 leading-relaxed">
                  At our center, we bring the essence of true Korean beauty right to you — combining
                  time-honored traditions, advanced skincare science, and a holistic approach that nurtures
                  your skin from the inside out with minimal invasive procedures. We don’t just offer
                  treatments; we curate an experience designed around your unique needs, goals, and lifestyle.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-amber-700 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#fccf53] inline-block rounded-full"></span>
                  Personalized Approach
                </h3>
                <p className="text-base text-zinc-700 leading-relaxed">
                  With a commitment to personalized care, modern facilities, and consistent results, we
                  ensure you feel cared for from the moment you step in. Choose us for your Korean beauty
                  journey — where confidence grows, skin glows, and true self-care begins.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Expertise Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-center font-serif text-3xl sm:text-5xl text-zinc-950 font-bold mb-4">
          Our Expertise
        </h2>
        <p className="text-center text-zinc-500 text-sm max-w-xl mx-auto mb-16">
          Explore our specialized Korean clinical aesthetic skills, delivering exceptional care for your delicate skin.
        </p>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-zinc-100 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-28 h-28 relative flex-shrink-0 bg-amber-50/50 rounded-xl p-2 flex items-center justify-center border border-amber-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h4 className="text-xl font-serif font-bold text-zinc-950 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 bg-amber-50 border border-amber-200/55 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-4">
            Ready to start your premium skin care journey?
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto mb-8">
            Schedule a personalized holistic consultation with our Korean beauty specialists. Bookings are by appointment only.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/our_service"
              className="w-full sm:w-auto px-8 py-3 bg-[#fccf53] hover:bg-amber-400 text-zinc-950 font-serif font-semibold rounded-xl shadow transition-colors duration-200"
            >
              Explore Our Services
            </Link>
            <a
              href="https://wa.me/60109191218"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 border border-zinc-300 hover:bg-white text-zinc-800 font-serif font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Image
                src="/our_service/assets/img/wa_logo.png"
                alt="WhatsApp"
                width={18}
                height={18}
              />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
