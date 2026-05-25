import Image from "next/image";

export default function PromotionPage() {
  const promotions = [
    {
      title: "Korean Skin Rejuvenation Special",
      image: "/promotion/assets/img/beauty_3_new.jpeg",
      description: "Experience the premium touch of advanced Korean clinical skin care. Designed to target fine lines, restore elasticity, and leave your complexion glowing with timeless radiance.",
      badge: "Best Seller",
    },
    {
      title: "Signature Holistic Face Therapy",
      image: "/promotion/assets/img/beauty_4_new.jpeg",
      description: "Indulge in a deeply relaxing, non-invasive therapeutic session combining botanical active ingredients and precise skin massage to clear congestion, soothe sensitivity, and lift contours.",
      badge: "Limited Offer",
    },
  ];

  return (
    <div className="flex flex-col pb-16">
      
      {/* Intro Section */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-950">
            Exclusive Promotions
          </h1>
          <div className="w-16 h-1 bg-[#fccf53] mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed pt-2">
            Check out our latest promotional offerings and exclusive packages ✨
          </p>
          <p className="text-sm text-zinc-500">
            Every deal is curated to offer you high-performance, premium skin treatments at special rates. Take a step towards true, radiant Korean beauty today.
          </p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {promotions.map((promo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md border border-zinc-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              {/* Promotion Image Card */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-50 border-b border-zinc-100 group shadow-inner">
                {promo.badge && (
                  <span className="absolute top-4 left-4 z-10 text-xs font-semibold uppercase tracking-wider bg-amber-600 text-white px-3 py-1 rounded-full shadow-sm">
                    {promo.badge}
                  </span>
                )}
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Promo content details */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-zinc-950">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {promo.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/60109191218?text=${encodeURIComponent(
                    `Hi La Belle, I'm interested in your "${promo.title}" promotion!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#fccf53] hover:bg-amber-400 text-zinc-950 font-serif font-semibold py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 block"
                >
                  Claim Promotion Offer
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
