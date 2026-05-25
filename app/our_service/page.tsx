import Image from "next/image";
import CollapsibleService from "../components/CollapsibleService";

export default function ServicesPage() {
  const treatments = [
    {
      title: "Acne Scarring",
      whatsAppText: "acne scarring",
      description:
        "Acne scarring occurs when deep inflammation disrupts the skin’s natural healing process, leading to an imbalance in collagen renewal. This results in uneven texture, visible depressions, or raised areas on the skin.",
      bullets: [
        "Raised scars formed by excess collagen during healing.",
        "Indented scars caused by collagen loss, creating uneven skin texture.",
        "Post-acne marks, such as redness or pigmentation, which affect skin tone rather than texture",
      ],
      additionalParagraphs: [
        "Our treatments are designed to restore skin balance, support collagen regeneration, and strengthen the skin barrier. With a tailored approach and consistent care, skin texture becomes smoother, tone more even, and the complexion clearer and more refined.",
      ],
    },
    {
      title: "Acne",
      whatsAppText: "acne",
      description:
        "Acne is a common skin concern that arises when pores become congested with excess sebum, dead skin cells, and bacteria. This imbalance disrupts the skin’s natural clarity, leading to inflammation and visible breakouts.",
      bullets: [],
      additionalParagraphs: [
        "Acne is often influenced by factors such as hormonal fluctuations, genetic tendencies, overactive oil production, stress, certain medications, and the use of pore-clogging products.",
        "It may present as blackheads, whiteheads, inflamed pimples, or deeper cystic lesions, most commonly affecting the face, chest, back, and shoulders. While not medically harmful, untreated acne can lead to long-term scarring and uneven skin texture.",
        "Our acne treatments focus on purifying congested pores, calming inflammation, regulating oil production, and restoring skin balance. With consistent professional care and a supportive home routine, the skin gradually becomes clearer, smoother, and more refined.",
      ],
    },
    {
      title: "Open Pores",
      whatsAppText: "open pores",
      description:
        "Enlarged pores are often caused by excess oil production, loss of skin elasticity, and buildup of impurities. Our treatment is specially designed to deeply cleanse, refine pore size, and improve overall skin texture for a smoother, more refined complexion.",
      bullets: [],
      additionalParagraphs: [
        "Our treatment focuses on gentle exfoliation to remove dead skin cells, thorough pore cleansing to clear congestion, and targeted active ingredients to regulate oil production and boost collagen renewal. The skin is then soothed and hydrated to restore balance and elasticity.",
        "Recommended frequency: Once every 2–4 weeks for best results.",
      ],
    },
    {
      title: "Blackhead",
      whatsAppText: "blackhead",
      description:
        "A blackhead is a type of acne lesion that forms when a pore in the skin becomes clogged with excess oil (sebum), dead skin cells, and sometimes bacteria. The clogged pore stays open at the surface, and the exposure to air causes the trapped material to oxidize, turning it dark or black—hence the name “blackhead.”",
      bullets: [],
      additionalParagraphs: [
        "Blackheads are usually harmless but can be stubborn and sometimes lead to inflammation if irritated.",
        "Clear and refine congested pores with our specialized treatments which includes black head extraction and advanced treatments. Designed to gently remove excess oil, dead skin cells, and impurities, our treatments helps reduce blackheads, leaving your skin smoother, clearer, and refreshed. Perfect for maintaining a clean, healthy complexion.",
      ],
    },
    {
      title: "Sensitized Skin",
      whatsAppText: "sensitized skin",
      description:
        "Sensitized skin is a condition where the skin’s protective barrier becomes weakened, making it more reactive to external and internal triggers. When this happens, the skin is less able to retain moisture and defend itself, leading to visible redness and inflammation.",
      bullets: [],
      additionalParagraphs: [
        "Common symptoms include persistent redness, warmth, swelling, tightness, itching, or a stinging and burning sensation. The skin may also feel dry, fragile, and easily irritated, even by products or treatments that were previously well tolerated.",
        "Sensitized skin can be triggered by factors such as over-exfoliation, harsh skincare products, excessive sun exposure, stress, hormonal changes, pollution, or aggressive aesthetic treatments. Without proper care, ongoing inflammation can further damage the skin barrier and worsen sensitivity.",
        "Restoring balance through gentle, calming, and barrier-repairing care is essential to reduce redness, soothe inflammation, and strengthen the skin for long-term skin health. Our soothing treatment is specially designed for sensitized skin experiencing redness, inflammation, and discomfort. It focuses on calming irritated skin, reducing visible redness, and strengthening the skin’s natural barrier.",
        "Gentle, skin-repairing ingredients help to soothe inflammation, restore moisture balance, and improve skin resilience without causing further irritation. Ideal for reactive, fragile, or over-treated skin, this treatment leaves the skin feeling calmer, more comfortable, and visibly healthier with a smoother, more balanced complexion.",
      ],
    },
    {
      title: "Dryness & Dehydration",
      whatsAppText: "dryness and dehydration",
      description:
        "Dry skin occurs when the skin does not produce enough natural oils, leading to a weakened skin barrier. This can result in flakiness, rough texture, itchiness, and increased sensitivity.",
      bullets: [],
      additionalParagraphs: [
        "Dehydrated skin, on the other hand, happens when the skin loses too much water due to factors such as environmental exposure, air conditioning, sun damage, stress, or insufficient hydration. Dehydrated skin may appear dull, feel tight, and show fine lines more prominently.",
        "When skin renewal is disrupted, the complexion appears flat and uneven. Consistent exfoliation, brightening care, and proper hydration are essential to improve skin clarity, enhance radiance, and restore a smoother, more luminous complexion.",
        "Our revitalizing treatments are designed to improve dullness and uneven skin tone by enhancing skin renewal and restoring natural radiance. It targets dark spots, uneven pigmentation, and tired-looking skin for a clearer, more balanced complexion.",
        "Brightening and skin-refining ingredients derived from plants help smooth skin texture, improve tone clarity, and boost luminosity while maintaining optimal hydration. Ideal for fatigued or uneven skin, our treatments leaves the skin looking brighter, more even, and visibly refreshed.",
      ],
    },
    {
      title: "Oily Skin",
      whatsAppText: "oily skin",
      description:
        "Oily skin is a skin condition where the sebaceous glands produce excess sebum (natural oil). While sebum helps protect and moisturize the skin, overproduction can cause the skin to appear shiny, feel greasy, and have enlarged pores.",
      bullets: [],
      additionalParagraphs: [
        "Excess oil easily mixes with dead skin cells and impurities, leading to clogged pores, blackheads, whiteheads, and acne breakouts. Oily skin is commonly influenced by genetics, hormonal changes, stress, climate, and the use of unsuitable skincare products. In hot and humid environments, oil production may become more noticeable.",
        "Although oily skin often feels heavier, it can still be dehydrated beneath the surface. Proper balance-focused care is essential to regulate sebum production, maintain hydration, and keep the skin clear, healthy, and refined without over-drying.",
        "Our treatment is specially designed for oily and combination skin to help regulate excess sebum production while maintaining proper hydration. It targets shine, clogged pores, and congestion without over-drying the skin.",
        "Purifying and oil-controlling natural plant ingredients work to refine pores, reduce excess oil, and improve overall skin clarity. The treatment helps rebalance the skin, leaving it feeling fresh, clean, and comfortable with a smoother, more refined complexion.",
      ],
    },
    {
      title: "Dull Skin Tone",
      whatsAppText: "dull skin tone",
      description:
        "Dull and uneven skin tone occurs when the skin lacks radiance and appears tired, rough, or blotchy in color. This condition is often caused by a buildup of dead skin cells on the surface, slowing down natural skin renewal and preventing light from reflecting evenly.",
      bullets: [],
      additionalParagraphs: [
        "Uneven tone may show as dark spots, pigmentation, acne marks, redness, or patchy areas. Common triggers include sun exposure, hormonal changes, inflammation, acne, aging, stress, lack of sleep, and environmental damage. Poor circulation and dehydration can also contribute to a lack of glow.",
        "When skin renewal is disrupted, the complexion appears flat and uneven. Consistent exfoliation, brightening care, and proper hydration are essential to improve skin clarity, enhance radiance, and restore a smoother, more luminous complexion.",
        "Our revitalizing treatments are designed to improve dullness and uneven skin tone by enhancing skin renewal and restoring natural radiance. It targets dark spots, uneven pigmentation, and tired-looking skin for a clearer, more balanced complexion.",
        "Brightening and skin-refining ingredients derived from plants help smooth skin texture, improve tone clarity, and boost luminosity while maintaining optimal hydration. Ideal for fatigued or uneven skin, our treatments leaves the skin looking brighter, more even, and visibly refreshed.",
      ],
    },
    {
      title: "Wrinkle Fine Lines",
      whatsAppText: "wrinkle fine lines",
      description:
        "Wrinkles and fine lines are signs of skin aging that occur when the skin gradually loses collagen, elastin, and moisture. Fine lines usually appear first as shallow lines, while wrinkles become deeper and more visible over time.",
      bullets: [],
      additionalParagraphs: [
        "This condition is influenced by factors such as natural aging, sun exposure, repeated facial expressions, dehydration, stress, lack of sleep, and environmental damage. As skin renewal slows down, the skin becomes thinner and less elastic, making lines more noticeable, especially around the eyes, forehead, and mouth.",
        "When the skin barrier is weakened and moisture levels drop, fine lines appear more pronounced and the skin may look tired or sagging. Proper anti-aging care that focuses on hydration, collagen support, and skin repair is essential to smooth lines, improve firmness, and maintain a youthful, healthy complexion.",
        "Our age-defying treatments are designed to reduce the appearance of fine lines and wrinkles by improving skin hydration, elasticity, and firmness. It targets early signs of aging caused by collagen loss, dehydration, and environmental stress.",
      ],
    },
    {
      title: "Sagging",
      whatsAppText: "sagging",
      description:
        "Our holistic non-invasive lifting treatments are designed to firm, tighten, and improve skin texture by stimulating collagen production, helping restore a more lifted and youthful appearance.",
      bullets: [],
      additionalParagraphs: [
        "Although sagging skin is a natural part of aging, it can be accelerated by sun damage, lifestyle factors, and collagen loss. Proper firming care works to redefine facial contours and restore skin elasticity.",
        "Purifying, firming, and skin-refining active ingredients are massaged into the skin to encourage blood circulation and lymphatic drainage. The treatment works to visibly lift and tone sagging facial muscles, restoring a refreshed, healthy look.",
      ],
    },
    {
      title: "Pigmentation",
      whatsAppText: "pigmentation",
      description:
        "Pigmentation & Dark Spots occur when the skin produces excess melanin, leading to uneven skin tone and visible darkened areas.",
      bullets: [
        "Prolonged sun exposure.",
        "Marks left behind after acne or skin inflammation.",
        "Hormonal changes.",
        "Aging.",
        "Certain medications or improper skincare use.",
        "Genetic predisposition.",
      ],
      additionalParagraphs: [
        "They appear as brown, grey, or dark patches on the skin and may develop gradually over time. These spots can affect the face or body and often become more prominent without proper care.",
        "With the right skincare routine, sun protection, and professional treatments, pigmentation can be improved, helping to restore a brighter, clearer, and more even complexion.",
        "Our advanced holistic treatments are designed to target uneven skin tone, dark spots, and discoloration caused by sun exposure, acne marks, hormonal changes, and aging. Using targeted brightening and corrective actives, it helps regulate melanin production while gently renewing the skin.",
        "Our treatments work to fade existing pigmentation, improve skin clarity, and restore a brighter, more even complexion. With consistent sessions and proper sun protection, skin appears clearer, smoother, and visibly more radiant.",
      ],
    },
    {
      title: "Eye Bags & Dark Circles",
      whatsAppText: "eyebag / dark circles",
      description:
        "Eye Bags & Dark Circles are common under-eye concerns that affect the appearance of freshness and youthfulness.",
      bullets: [
        "Lack of sleep and fatigue",
        "Stress and dehydration",
        "Genetics",
        "Aging and loss of collagen",
        "Poor blood circulation",
        "Allergies or frequent eye rubbing",
      ],
      additionalParagraphs: [
        "Eye bags occur when fluid retention, fat displacement, or weakened skin around the eyes causes puffiness or swelling. This area is delicate and prone to changes due to aging and lifestyle factors.",
        "Dark circles appear as darkened or shadowed areas under the eyes. They may look brown, blue, or purplish, depending on the cause and skin tone.",
        "Proper eye care, hydration, adequate rest, and targeted treatments can help reduce puffiness, brighten dark circles, and improve the overall appearance of the eye area, restoring a more refreshed and youthful look.",
        "Our eye treatments focus on reducing under-eye puffiness, dark circles, and signs of fatigue caused by poor circulation, fluid retention, aging, and lifestyle factors. Using gentle yet effective eye-specific techniques and natural plant ingredients, it helps improve blood circulation, enhance lymphatic drainage, and strengthen the delicate eye area.",
        "The treatment works to visibly reduce swelling, lighten dark circles, and smooth fine lines around the eyes. With regular sessions, the eye area appears brighter, firmer, and more refreshed, giving the face a well-rested and youthful appearance.",
      ],
    },
    {
      title: "Mole Removal",
      whatsAppText: "mole removal",
      description:
        "Moles are common skin growths caused by clusters of pigment-producing cells. They can appear anywhere on the face or body and may be present from birth or develop over time. While most moles are harmless, some may become raised, darker, or more noticeable, affecting skin appearance and confidence.",
      bullets: [],
      additionalParagraphs: [
        "Our professional mole removal treatment is performed with precision and care to safely remove unwanted moles while minimizing discomfort and protecting surrounding skin. The treatment focuses on improving skin clarity and achieving a smoother, more even skin surface.",
        "Ideal for those looking to enhance skin appearance or remove prominent moles, this procedure offers effective results with minimal downtime and proper aftercare guidance.",
      ],
    },
    {
      title: "Oil Seed & Milia Removal",
      whatsAppText: "oil Seed / milia Removal",
      description:
        "Oil seeds, also known as milia, are small keratin-filled bumps that form beneath the skin surface, commonly around the eyes and face. Although harmless, they can affect skin smoothness and overall appearance.",
      bullets: [],
      additionalParagraphs: [
        "Milia form when dead skin cells (keratin) become trapped under the skin instead of shedding naturally. This can be triggered by factors such as heavy skincare products, sun damage, lack of exfoliation, skin trauma, or aging. Milia are common in all skin types and are especially noticeable on delicate areas like the eye region.",
        "Our professional milia removal treatment safely and hygienically removes oil seeds through precise techniques, minimizing discomfort and protecting the delicate surrounding skin. The treatment also helps improve skin texture and supports healthy skin renewal to reduce future recurrence.",
      ],
    },
    {
      title: "Skin Tag Removal",
      whatsAppText: "skin tag removal",
      description:
        "Skin tags are small, soft, benign growths that commonly appear on areas such as the neck, underarms, eyelids, and body folds. They are usually caused by friction, genetics, hormonal changes, or aging, and while harmless, they may be aesthetically bothersome or uncomfortable.",
      bullets: [],
      additionalParagraphs: [
        "Our professional skin tag removal treatment safely and effectively removes unwanted skin tags with minimal discomfort. The procedure is quick, precise, and designed to protect the surrounding skin while improving overall skin appearance.",
        "This treatment is suitable for those seeking a cleaner, smoother skin surface with minimal downtime and visible results, helping restore confidence and comfort in the treated area.",
      ],
    },
  ];

  return (
    <div className="flex flex-col pb-16">
      
      {/* Header Banner */}
      <section className="relative w-full aspect-[2.91/0.96] max-h-[350px] overflow-hidden bg-zinc-200 shadow-inner">
        <Image
          src="/our_service/assets/img/our_services.png"
          alt="Our Services Banner"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        
        {/* Intro Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6 mb-16">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-950 leading-tight">
            Korean Holistic Skin Management Centre
          </h1>
          <div className="w-16 h-1 bg-[#fccf53] mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed pt-2">
            Our Korean Holistic Skin Management Center is a specialized facility dedicated to enhancing and
            improving the health and appearance of the skin.
          </p>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Offering holistic and minimally invasive advanced treatments and services, including skincare
            consultations, personalized treatment plans, and innovative procedures, the center aims to address
            various skin concerns and help clients achieve their desired skin goals. With a team of experienced
            professionals and advanced Korean skin care technology, we provide personalized care and comprehensive
            solutions for individuals seeking skin rejuvenation and transformation.
          </p>
        </section>

        {/* Treatment Card Grid */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, idx) => (
              <CollapsibleService
                key={idx}
                title={treatment.title}
                description={treatment.description}
                bullets={treatment.bullets}
                additionalParagraphs={treatment.additionalParagraphs}
                whatsAppText={treatment.whatsAppText}
              />
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}
