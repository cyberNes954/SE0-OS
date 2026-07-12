/* SEO OS™ Alpha v0.2 — Niche Knowledge Base
   Each niche is a "brain" the engine uses to generate a strategy.
   Add a new niche = add a new object here. No other code changes needed. */

const SEOOS_NICHES = {

  activewear: {
    aliases: ["activewear", "gym wear", "fitness apparel", "athletic wear", "gym clothes", "workout clothes", "athleisure", "fitness clothing", "leggings"],
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
    aliases: ["digital products", "digital downloads", "printables", "planners", "ebooks", "templates", "pdf guides", "workbooks", "digital"],
    competitors: [
      { name: "Etsy digital sellers", dominates: "Marketplace search volume for printables and planners", strength: "Etsy's domain authority ranks their listings instantly", gap: "No brand relationship or email list — buyers remember Etsy, not the seller" },
      { name: "Gumroad creators", dominates: "Creator-audience direct sales", strength: "Built-in creator communities and simple checkout", gap: "Zero SEO surface — Gumroad pages barely rank; a Shopify store with content out-ranks them" },
      { name: "Amazon KDP", dominates: "Ebook and low-content book reach", strength: "Amazon's buyer trust and Prime audience", gap: "Premium design and niche depth — KDP is a race to the bottom on price and quality" },
      { name: "Notion template shops", dominates: "Productivity and digital-native audiences", strength: "Viral template culture on Twitter/TikTok", gap: "Printable and offline formats — huge audience still wants PDF they can hold" },
      { name: "Udemy / course platforms", dominates: "Long-form video education searches", strength: "Depth perception — hours of content feels valuable", gap: "Quick-win downloadables — most buyers want the 30-page action guide, not 12 hours of video" }
    ],
    gapKeywords: [
      "printable planner instant download", "digital workbook pdf", "30 day challenge printable",
      "planner for beginners", "digital download how does it work", "workbook vs course",
      "self improvement guide pdf", "habit tracker printable free vs premium"
    ],
    socialLanes: {
      pinterest: "Pin every product mockup + free printable teasers — Pinterest is the #1 organic channel for digital products",
      instagram: "Carousel posts teaching one page of the guide; Stories with poll-based engagement",
      tiktok: "Screen-record flip-throughs, 'what's inside' reveals, before/after routine results",
      youtube: "Shorts flipping through the PDF + long-form 'how I use this planner' tutorials"
    },
    seasonal: [
      "New year goals — planner and habit content peak", "Consistency-slump content — restart messaging",
      "Spring reset and Ramadan-season prep (faith niches)", "Q2 planning and productivity refresh",
      "Summer routine maintenance content", "Mid-year review printables",
      "Summer learning — self-paced growth content", "Back-to-school planning peak",
      "Fall goal-setting + 90-day-finish challenges", "Q4 prep — 'finish the year strong' + Black Friday bundle building",
      "BFCM digital bundle peak — highest conversion window", "New year preview + gift-of-growth angle"
    ],
    label: "Digital Products",
    nouns: ["digital products", "digital downloads", "printable guides", "ebooks"],
    benefits: ["Instant Download", "Printable", "Step-by-Step", "Lifetime Access", "Beginner-Friendly"],
    seeds: [
      "digital downloads", "printable planner", "digital guide", "pdf guide",
      "self improvement ebook", "digital workbook", "instant download products"
    ],
    commercial: [
      "best digital planners", "premium pdf guide", "printable habit tracker",
      "top rated digital workbook", "30 day challenge guide"
    ],
    transactional: [
      "buy digital planner", "download pdf guide", "instant download workbook",
      "digital guide shop", "printable download store"
    ],
    semantic: [
      "instant delivery", "downloadable content", "printable pdf", "digital library",
      "online course alternative", "self paced guide", "habit building", "personal development"
    ],
    questionTemplates: [
      "how do I download {p} after purchase",
      "can I print {p}",
      "does {p} work on my phone",
      "is {p} beginner friendly",
      "what's included in {p}"
    ],
    collections: [
      "Guides & Ebooks", "Planners & Trackers", "Workbooks", "Bundles", "Best Sellers", "New Releases"
    ],
    blogTopics: {
      beginner: [
        "How Digital Downloads Work: What Happens After You Buy",
        "Printable vs App-Based Planners: Which Is Right for You",
        "How to Actually Finish a Self-Improvement Guide"
      ],
      intermediate: [
        "How to Build a Daily Routine That Sticks",
        "The Science of Habit Tracking",
        "How to Get the Most Out of a 30-Day Challenge"
      ],
      advanced: [
        "Why Structured Programs Beat Motivation",
        "Designing Your Own Personal Growth System",
        "From Consuming Content to Changing Behavior"
      ]
    },
    faqTemplates: [
      "How is {p} delivered?",
      "Can I print {p} at home?",
      "Is {p} a physical product?",
      "Can I get a refund on {p}?",
      "How long do I have access to {p}?"
    ],
    metaTemplate: "Get {brand} {p} — instant digital download. Practical, step-by-step, and ready the moment you order. Start today.",
  },

  skincare: {
    aliases: ["skincare", "skin care", "beauty", "cosmetics", "makeup", "beauty products"],
    competitors: [
      { name: "CeraVe", dominates: "Dermatologist-recommended trust and drugstore reach", strength: "Derm endorsements and ingredient credibility at low prices", gap: "Personalization and premium experience — clinical but generic" },
      { name: "The Ordinary", dominates: "Ingredient-transparency and price-per-active searches", strength: "Cult following for single-ingredient formulas", gap: "Routine simplicity — beginners are overwhelmed choosing between 30 near-identical bottles" },
      { name: "Glossier", dominates: "Community-built brand aesthetic and 'skin first' positioning", strength: "UGC engine and millennial/Gen-Z loyalty", gap: "Clinical credibility — light on actives and derm-backed claims" },
      { name: "Paula's Choice", dominates: "Ingredient education and content authority", strength: "Deep ingredient dictionary ranks for thousands of informational keywords", gap: "Approachable pricing and beginner-friendly tone" },
      { name: "Drunk Elephant", dominates: "'Clean-clinical' premium positioning", strength: "Suspicious-6 framing created a category", gap: "Value pricing — actively searched as 'Drunk Elephant dupes'" }
    ],
    gapKeywords: [
      "skincare routine for beginners", "simple 3 step routine", "skincare for sensitive skin fragrance free",
      "affordable clean skincare", "skin barrier repair routine", "skincare routine order morning night",
      "niacinamide and vitamin c together", "drugstore vs premium skincare"
    ],
    socialLanes: {
      pinterest: "Routine infographics (AM/PM order charts) — skincare routine pins compound for years",
      instagram: "Before/after journeys, ingredient-spotlight carousels, derm-myth debunking Reels",
      tiktok: "GRWM routines, ingredient layering do's/don'ts, texture close-ups",
      youtube: "'Full routine for [skin type]' searchable tutorials + ingredient deep-dives"
    },
    seasonal: [
      "Winter barrier-repair content peak", "Dry-skin rescue + Valentine's glow prep",
      "Spring routine transition — lighter textures", "SPF education season begins",
      "SPF Awareness Month — biggest sun-care moment", "Summer oily-skin and sweat-proof content",
      "Peak sun maintenance + post-sun repair", "Back-to-routine skin reset + dark-spot content",
      "Fall transition — reintroduce actives, retinol season begins", "Holiday gift-set positioning begins",
      "BFCM bundles and routine kits", "Gifting kits + new year skin-goals content"
    ],
    label: "Skincare & Beauty",
    nouns: ["skincare", "beauty products", "skin care routine", "cosmetics"],
    benefits: ["Dermatologist-Tested", "Fragrance-Free", "Hydrating", "Gentle", "Clean-Formula", "Non-Comedogenic"],
    seeds: [
      "skincare products", "skin care routine", "face moisturizer", "facial cleanser",
      "serum for face", "clean beauty", "sensitive skin products"
    ],
    commercial: [
      "best moisturizer for dry skin", "gentle cleanser for sensitive skin",
      "top rated vitamin c serum", "best skincare routine order", "hydrating face serum"
    ],
    transactional: [
      "buy face serum", "shop skincare online", "moisturizer for oily skin",
      "cleanser for acne prone skin", "skincare bundle deal"
    ],
    semantic: [
      "skin barrier", "hyaluronic acid", "niacinamide", "spf protection",
      "am pm routine", "skin type", "ingredient list", "patch test"
    ],
    questionTemplates: [
      "is {p} good for sensitive skin",
      "how often should I use {p}",
      "can I use {p} with retinol",
      "is {p} non comedogenic",
      "when will I see results from {p}"
    ],
    collections: [
      "Cleansers", "Serums", "Moisturizers", "SPF", "Kits & Bundles", "Best Sellers", "New Arrivals"
    ],
    blogTopics: {
      beginner: [
        "How to Build Your First Skincare Routine",
        "Skin Types Explained: How to Know Yours",
        "The Right Order to Apply Skincare Products"
      ],
      intermediate: [
        "Niacinamide vs Vitamin C: Which Do You Need",