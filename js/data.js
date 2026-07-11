/* SEO OS™ Alpha v0.2 — Niche Knowledge Base
   Each niche is a "brain" the engine uses to generate a strategy.
   Add a new niche = add a new object here. No other code changes needed. */

const SEOOS_NICHES = {

  activewear: {
    competitors: [
      { name: "Gymshark", dominates: "Community-driven fitness marketing and athlete sponsorships", strength: "Massive social proof, influencer army, conditioning content", gap: "Fabric education and honest sizing depth — their content sells lifestyle, not product knowledge" },
      { name: "Lululemon", dominates: "Premium quality perception and studio/yoga positioning", strength: "Brand trust, retail presence, 'worth the price' reputation", gap: "Price accessibility — shoppers actively search for 'Lululemon alternatives'" },
      { name: "Alo Yoga", dominates: "Celebrity styling and streetwear-athleisure crossover", strength: "Aspirational imagery, being seen in it matters", gap: "Performance-first messaging — squat-proof, sweat-tested claims are secondary for them" },
      { name: "AYBL", dominates: "Gym-girl aesthetic and scrunch/contour styles", strength: "Trend speed, TikTok-native product drops", gap: "Blog authority and SEO content — they rank on brand, not on informational keywords" },
      { name: "NVGTN", dominates: "Scarcity drops and hype cycles", strength: "Sell-out culture creates urgency and resale demand", gap: "Always-available basics + evergreen SEO — the drop model underinvests in search" }
    ],
    gapKeywords: [
      "modest activewear", "activewear for tall women", "petite gym leggings",
      "postpartum workout leggings", "leggings that don't roll down", "gym clothes for beginners",
      "how should leggings fit", "sports bra for large chest"
    ],
    socialLanes: {
      pinterest: "Outfit-pin boards per collection (Gym Fit Ideas, Matching Sets) — Pinterest drives evergreen activewear traffic for 6+ months per pin",
      instagram: "Reels: styling one set 3 ways, fabric stretch tests, real-body try-ons; keyword the captions",
      tiktok: "Squat-proof tests, honest sizing hauls, 'leggings under $X vs Lululemon' comparisons",
      youtube: "Long-form try-on hauls and 'best leggings for ___' searchable reviews"
    },
    seasonal: [
      "New year fitness resolutions — beginner gym outfit content", "Valentine's / Galentine's gym fit gifting",
      "Spring reset — pastel drops and outdoor training content", "Outdoor season — running and hiking crossover content",
      "Summer prep peak — shorts and breathable sets", "Summer activity — travel-friendly and sweat-proof sets",
      "Mid-year sale positioning vs competitor drops", "Back-to-routine — gym return content",
      "Fall colors drop — earth-tone sets", "Cozy athleisure layering + Black Friday early list-building",
      "BFCM peak — bundles and gift guides", "Gift guides + New Year preview"
    ],
    label: "Women's Activewear",
    nouns: ["activewear", "gym wear", "workout clothes", "fitness apparel"],
    benefits: ["Squat-Proof", "Seamless", "High Waist", "Breathable", "Moisture-Wicking", "Compression"],
    seeds: [
      "women's activewear", "gym wear for women", "women's workout clothes",
      "fitness clothing", "athletic wear", "activewear sets", "gym outfits"
    ],
    commercial: [
      "best women's activewear", "premium workout clothes", "seamless workout sets",
      "matching gym sets", "squat proof leggings", "high waist gym leggings"
    ],
    transactional: [
      "buy women's gym wear", "shop seamless leggings", "black gym leggings",
      "moisture wicking sports bra", "activewear sale"
    ],
    semantic: [
      "athleisure", "yoga pants", "training clothes", "exercise clothing",
      "performance fabric", "four-way stretch", "gym fashion", "workout fits"
    ],
    questionTemplates: [
      "are {p} squat proof",
      "what size {p} should I get",
      "how to wash {p}",
      "are {p} good for running",
      "can you wear {p} every day"
    ],
    collections: [
      "Leggings", "Sports Bras", "Matching Sets", "Shorts", "Tops", "Best Sellers", "New Arrivals"
    ],
    blogTopics: {
      beginner: [
        "What Is Activewear? A Complete Guide",
        "Gym Wear vs Athleisure: What's the Difference",
        "Best Workout Clothes for Beginners"
      ],
      intermediate: [
        "How to Choose the Right Leggings for Your Body",
        "Best Sports Bras by Workout Type",
        "How Compression Leggings Actually Work"
      ],
      advanced: [
        "How Seamless Leggings Are Made",
        "The Best Fabrics in Women's Activewear",
        "How Moisture-Wicking Technology Works"
      ]
    },
    faqTemplates: [
      "Is {p} true to size?",
      "Is {p} squat proof?",
      "What fabric is {p} made of?",
      "How do I care for {p}?",
      "What's your return policy on {p}?"
    ],
    metaTemplate: "Move confidently in {brand} {p}. Designed for comfort, flexibility, and performance. Shop premium {noun} today.",
  },

  digital: {
    competitors: [
      { name: "Etsy digital sellers", dominates: "Marketplace search volume for printables and planners", strength: "Etsy's domain authority ranks their listings instantly", gap: "No brand relationship or email list — buyers remember Etsy, not the seller" },
      { name: "Gumroad creators", dominates: "Creator-audience direct sales", strength: "Built-in creator communities and simple checkout", gap: "Zero SEO surface — Gumroad pages barely rank; a Shopify store with content out-ranks them" },
      { name: "Amazon KDP", dominates: "Ebook and low-content book reach", strength: "Amazon's buyer trust and Prime audience", gap: "Premium design and niche depth — KDP is a race to the bottom on price and quality" },
      { name: "Notion template shops", dominates: "Productivity and digital-native audiences", strength: "Viral template culture on Twitter/TikTok", gap: "Printable and offline formats — huge audience still wants PDF they can hold" },
      { name: "Udemy / course platforms", dominates: "Long-form video education searches", strength: "Depth perception — hours of content feels valuable", gap: "Quick-win downloadables — most buyers want the 30-page action guide, not 12 hours of video" }
    ],
    gapKeywords: [
      "printable planner instant download", "digital workbook pdf", "30 day challenge printable",
      "planner for beginners", "digital download how doe