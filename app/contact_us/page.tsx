import Image from "next/image";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2271098260417!2d101.61147477532647!3d3.033644753851077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb355399d229f%3A0xe07163890549fae1!2s1%2C%20Jalan%20Bandar%20Sepuluh%2C%20Pusat%20Bandar%20Puchong%2C%2047100%20Puchong%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sie!4v1779981309014!5m2!1sen!2sie";

export default function ContactPage() {
  return (
    <div className="flex flex-col pb-16">
      
      {/* Visual Banner */}
      <section className="relative w-full aspect-[2.91/0.96] max-h-[350px] overflow-hidden bg-zinc-200 shadow-inner">
        <Image
          src="/contact_us/Contact_Us.png"
          alt="Contact Us Banner"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <section className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Map Frame Card */}
            <div className="w-full min-h-[400px] lg:min-h-full bg-zinc-100 relative">
              <iframe
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP_EMBED_URL}
                className="absolute inset-0 w-full h-full border-0"
                title="La Belle Beauty Centre Location Map"
              />
            </div>

            {/* Info Cards Column */}
            <div className="p-8 sm:p-12 flex flex-col justify-center space-y-8 font-sans">
              
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950">
                  Contact Us
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  You can contact us through WhatsApp for bookings. Follow us on social media for the latest updates and promotions.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Detail: WhatsApp */}
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-bold text-zinc-950 flex items-center gap-2">
                    <Image
                      src="/assets/img/Digital_Glyph_Green.png"
                      alt="WhatsApp Icon"
                      width={18}
                      height={19}
                    />
                    <span>WhatsApp</span>
                  </h3>
                  <a
                    href="https://wa.me/60109191218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-amber-700 hover:text-amber-800 hover:underline block"
                  >
                    010 - 919 1218
                  </a>
                </div>

                {/* Detail: Location */}
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-bold text-zinc-950 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                    <span>Location</span>
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    1-2A, Jalan Bandar 10, Pusat Bandar Puchong, 47160 Puchong, Selangor.
                  </p>
                </div>

                {/* Detail: Hours */}
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-bold text-zinc-950 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block"></span>
                    <span>Opening Hours</span>
                  </h3>
                  <p className="text-sm text-zinc-650 font-semibold text-amber-800">
                    Appointment Only
                  </p>
                  <p className="text-sm text-zinc-600">
                    Monday - Sunday: 10:00 AM to 7:00 PM
                  </p>
                </div>

                {/* Detail: Social */}
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-bold text-zinc-950 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block"></span>
                    <span>Social Media</span>
                  </h3>
                  <div className="text-sm space-y-1">
                    <p className="text-zinc-600">
                      Instagram:{" "}
                      <a
                        href="https://www.instagram.com/labelle.beauty.centre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:underline font-medium"
                      >
                        @labelle.beauty.centre
                      </a>
                    </p>
                    <p className="text-zinc-600">
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/share/1DUdeu8qEp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:underline font-medium"
                      >
                        La Belle Beauty Centre
                      </a>
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      </div>

    </div>
  );
}
