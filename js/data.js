/* SEO OS™ Alpha v0.2 — Niche Knowledge Base
   Each niche is a "brain" the engine uses to generate a strategy.
   Add a new niche = add a new object here. No other code changes needed. */

const SEOOS_NICHES = {

  activewear: {
    aliases: ["activewear", "gym wear", "fitness apparel", "athletic wear", "gym clothes", "workout clothes", "athleisure", "fitness clothing", "leggings"],
    competitors: [
      { name: "Gymshark", domain: "gymshark.com", dominates: "Community-driven fitness marketing and athlete sponsorships", strength: "Massive social proof, influencer army, conditioning content", gap: "Fabric education and honest sizing depth — their content sells lifestyle, not product knowledge" },
      { name: "Lululemon", domain: "lululemon.com", dominates: "Premium quality perception and studio/yoga positioning", strength: "Brand trust, retail presence, 'worth the price' reputation", gap: "Price accessibility — shoppers actively search for 'Lululemon alternatives'" },
      { name: "Alo Yoga", domain: "aloyoga.com", dominates: "Celebrity styling and streetwear-athleisure crossover", strength: "Aspirational imagery, being seen in it matters", gap: "Performance-first messaging — squat-proof, sweat-tested claims are secondary for them" },
      { name: "AYBL", domain: "beaybl.com", dominates: "Gym-girl aesthetic and scrunch/contour styles", strength: "Trend speed, TikTok-native product drops", gap: "Blog authority and SEO content — they rank on brand, not on informational keywords" },
      { name: "NVGTN", domain: "nvgtn.com", dominates: "Scarcity drops and hype cycles", strength: "Sell-out culture creates urgency and resale demand", gap: "Always-available basics + evergreen SEO — the drop model underinvests in search" }
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
      { name: "Etsy digital sellers", domain: "etsy.com", dominates: "Marketplace search volume for printables and planners", strength: "Etsy's domain authority ranks their listings instantly", gap: "No brand relationship or email list — buyers remember Etsy, not the seller" },
      { name: "Gumroad creators", domain: "gumroad.com", dominates: "Creator-audience direct sales", strength: "Built-in creator communities and simple checkout", gap: "Zero SEO surface — Gumroad pages barely rank; a Shopify store with content out-ranks them" },
      { name: "Amazon KDP", domain: "kdp.amazon.com", dominates: "Ebook and low-content book reach", strength: "Amazon's buyer trust and Prime audience", gap: "Premium design and niche depth — KDP is a race to the bottom on price and quality" },
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
      { name: "CeraVe", domain: "cerave.com", dominates: "Dermatologist-recommended trust and drugstore reach", strength: "Derm endorsements and ingredient credibility at low prices", gap: "Personalization and premium experience — clinical but generic" },
      { name: "The Ordinary", domain: "theordinary.com", dominates: "Ingredient-transparency and price-per-active searches", strength: "Cult following for single-ingredient formulas", gap: "Routine simplicity — beginners are overwhelmed choosing between 30 near-identical bottles" },
      { name: "Glossier", domain: "glossier.com", dominates: "Community-built brand aesthetic and 'skin first' positioning", strength: "UGC engine and millennial/Gen-Z loyalty", gap: "Clinical credibility — light on actives and derm-backed claims" },
      { name: "Paula's Choice", domain: "paulaschoice.com", dominates: "Ingredient education and content authority", strength: "Deep ingredient dictionary ranks for thousands of informational keywords", gap: "Approachable pricing and beginner-friendly tone" },
      { name: "Drunk Elephant", domain: "drunkelephant.com", dominates: "'Clean-clinical' premium positioning", strength: "Suspicious-6 framing created a category", gap: "Value pricing — actively searched as 'Drunk Elephant dupes'" }
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
        "How to Repair a Damaged Skin Barrier",
        "Morning vs Night Routines: What Actually Changes"
      ],
      advanced: [
        "How to Read a Skincare Ingredient List",
        "Actives That Don't Mix: A Layering Guide",
        "What 'Clean Beauty' Really Means (and Doesn't)"
      ]
    },
    faqTemplates: [
      "Is {p} suitable for sensitive skin?",
      "Is {p} fragrance-free?",
      "How do I add {p} to my routine?",
      "Is {p} cruelty-free?",
      "How long does one bottle of {p} last?"
    ],
    metaTemplate: "Meet {brand} {p} — gentle, effective skincare made for real routines. Shop {noun} that your skin will thank you for.",
  },

  generic: {
    aliases: ["ecommerce", "general", "other", "online store"],
    competitors: [
      { name: "Amazon", domain: "amazon.com", dominates: "Convenience and price-comparison searches in every category", strength: "Prime shipping trust and review volume", gap: "Brand story, expertise content, and post-purchase relationship — Amazon can't do niche authority" },
      { name: "The category big-box leader", dominates: "High-volume head keywords through domain authority", strength: "Massive catalog and paid + organic dominance", gap: "Depth on long-tail questions — they rank broadly but answer nothing specifically" },
      { name: "The top DTC brand in your niche", dominates: "Brand-name searches and social presence", strength: "Community and recognizable identity", gap: "Informational SEO — most DTC brands run on ads and neglect search content" }
    ],
    gapKeywords: [
      "best {noun} for beginners", "how to choose {noun}", "{noun} buying guide",
      "affordable quality {noun}", "{noun} comparison", "is premium {noun} worth it"
    ],
    socialLanes: {
      pinterest: "Product styling and how-to pins tied to each collection",
      instagram: "Educational carousels answering your top customer questions",
      tiktok: "Behind-the-scenes, honest demos, and comparison content",
      youtube: "Searchable 'best {noun} for ___' reviews and tutorials"
    },
    seasonal: [
      "New year fresh-start content", "Valentine's gifting angle", "Spring refresh content",
      "Q2 buying guides", "Early summer prep guides", "Summer use-case content",
      "Mid-year sale positioning", "Back-to-school angle", "Fall preparation content",
      "Early holiday research + gift guides launch", "BFCM peak — bundles and urgency", "Last-minute gifts + year wrap-up"
    ],
    label: "General Ecommerce",
    nouns: ["products", "online store", "shop"],
    benefits: ["Premium", "Best-Selling", "Top-Rated", "High-Quality"],
    seeds: [],
    commercial: [],
    transactional: [],
    semantic: [
      "free shipping", "customer reviews", "size guide", "gift ideas",
      "new arrivals", "best sellers", "official store"
    ],
    questionTemplates: [
      "is {p} worth it",
      "how do I use {p}",
      "what size {p} should I choose",
      "how long does {p} last",
      "what is {p} made of"
    ],
    collections: ["Best Sellers", "New Arrivals", "Bundles", "Sale"],
    blogTopics: {
      beginner: [
        "How to Choose the Right {noun} for You",
        "A Beginner's Guide to {noun}",
        "5 Things to Know Before Buying {noun}"
      ],
      intermediate: [
        "How to Get the Most Out of Your {noun}",
        "{noun} Care Guide: Make It Last",
        "Common {noun} Mistakes to Avoid"
      ],
      advanced: [
        "How Quality {noun} Is Actually Made",
        "What Separates Premium {noun} From Cheap Alternatives",
        "The Complete {noun} Buying Framework"
      ]
    },
    faqTemplates: [
      "How is {p} shipped?",
      "What is your return policy on {p}?",
      "Is {p} in stock?",
      "How do I use {p}?",
      "Is there a warranty on {p}?"
    ],
    metaTemplate: "Shop {brand} {p} — quality you can count on, backed by real support. Order today.",
  }
};

/* Static Shopify technical SEO checklist (v0.1) */
const SEOOS_TECH_CHECKLIST = [
  { area: "Indexing", items: [
    "Submit sitemap.xml to Google Search Console (yourstore.com/sitemap.xml)",
    "Verify domain in Google Search Console and Bing Webmaster Tools",
    "Check robots.txt isn't blocking collections or products",
    "Remove password protection so search engines can crawl the store"
  ]},
  { area: "On-Page", items: [
    "Every page has a unique SEO title under 60 characters",
    "Every page has a unique meta description under 155 characters",
    "One H1 per page, matching the primary keyword",
    "URLs are short, lowercase, and keyword-based (no /products/copy-of-...)"
  ]},
  { area: "Images", items: [
    "Rename image files before upload (brand-product-keyword.jpg, never IMG_1234.jpg)",
    "Add descriptive alt text to every product image",
    "Compress images (Shopify serves WebP automatically, but start under ~500KB)"
  ]},
  { area: "Speed & Mobile", items: [
    "Run PageSpeed Insights on homepage, one collection, one product",
    "Remove unused Shopify apps (each app adds scripts)",
    "Test checkout and navigation on a real phone"
  ]},
  { area: "Structured Data", items: [
    "Confirm product schema shows price, availability, reviews (test with Google Rich Results Test)",
    "Add FAQ schema to pages with FAQ sections",
    "Enable breadcrumbs in theme settings"
  ]},
  { area: "Content Hygiene", items: [
    "No duplicate product descriptions copied from suppliers",
    "Collection pages have at least 300 words of unique intro copy",
    "Old/deleted product URLs are redirected (Online Store → Navigation → URL Redirects)"
  ]}
];


/* ===== v0.3 — Platform Placement Specs =====
   Where every keyword goes, per platform. */
const SEOOS_PLATFORMS = [
  { key: "shopify", label: "Shopify", fields: [
    { f: "Page title", where: "Products \u2192 [product] \u2192 Search engine listing \u2192 Edit \u2192 Page title", rule: "\u226460 characters", use: "seoTitle" },
    { f: "Meta description", where: "Same panel \u2192 Meta description", rule: "\u2264155 characters", use: "meta" },
    { f: "URL handle", where: "Same panel \u2192 URL handle", rule: "lowercase-hyphens, keep short", use: "slugbare" },
    { f: "Product title (H1)", where: "Products \u2192 [product] \u2192 Title", rule: "Brand + product, natural", use: "h1" },
    { f: "Image alt text", where: "Product media \u2192 tap image \u2192 Edit alt text", rule: "describe image + keyword once", use: "alt1" },
    { f: "Description", where: "Products \u2192 [product] \u2192 Description", rule: "primary keyword in first sentence", use: "firstline" }
  ]},
  { key: "amazon", label: "Amazon", fields: [
    { f: "Listing title", where: "Seller Central \u2192 Manage Inventory \u2192 Edit \u2192 Product Name", rule: "\u2264200 chars: Brand + Product + Benefit + Attribute", use: "amzTitle" },
    { f: "Backend Search Terms", where: "Edit listing \u2192 Keywords tab \u2192 Search Terms (hidden field \u2014 buyers never see it)", rule: "\u2264249 bytes, spaces only, NO commas, NO words already in title, NO brand names", use: "backend" },
    { f: "Bullet points", where: "Edit listing \u2192 Description tab \u2192 Key Product Features", rule: "5 bullets, BENEFIT first then keyword", use: "bullets" },
    { f: "Description / A+", where: "Description tab \u2192 Product Description", rule: "use question keywords as headers", use: "questions" }
  ]},
  { key: "ebay", label: "eBay", fields: [
    { f: "Item title", where: "Sell \u2192 List item \u2192 Title", rule: "\u226480 chars, NO promo words (wow, L@@K), attributes over adjectives", use: "ebayTitle" },
    { f: "Item specifics", where: "Listing form \u2192 Item specifics", rule: "fill EVERY field \u2014 eBay search filters run on these", use: "specifics" },
    { f: "Description", where: "Listing form \u2192 Description", rule: "first 250 chars matter most (mobile preview)", use: "firstline" }
  ]},
  { key: "walmart", label: "Walmart", fields: [
    { f: "Product name", where: "Seller Center \u2192 Items \u2192 Edit \u2192 Product Name", rule: "50\u201375 characters, Brand + Product + Key Attribute", use: "wmName" },
    { f: "Key features", where: "Item detail \u2192 Key Features", rule: "3\u201310 bullets, one keyword each", use: "bullets" },
    { f: "Description", where: "Item detail \u2192 Description", rule: "\u2265150 words, natural keywords", use: "firstline" },
    { f: "Attributes", where: "Item detail \u2192 Attributes section", rule: "complete ALL \u2014 powers Walmart filters", use: "specifics" }
  ]},
  { key: "woo", label: "WooCommerce", fields: [
    { f: "Product title", where: "Products \u2192 [product] \u2192 Title", rule: "Brand + product", use: "h1" },
    { f: "Permalink (slug)", where: "Under the title \u2192 Edit permalink", rule: "lowercase-hyphens", use: "slugbare" },
    { f: "SEO title + meta", where: "Yoast/Rank Math box below editor", rule: "\u226460 / \u2264155 chars", use: "seoTitle" },
    { f: "Short description", where: "Product data \u2192 Short description", rule: "primary keyword in first sentence", use: "firstline" },
    { f: "Image alt", where: "Media library \u2192 image \u2192 Alt text", rule: "describe + keyword", use: "alt1" }
  ]}
];

/* ===== v0.3 — Sourcing platforms (live search links, opened by the user) ===== */
const SEOOS_SOURCING = [
  { label: "AliExpress", url: q => "https://www.aliexpress.com/w/wholesale-" + q.split(" ").join("-") + ".html" },
  { label: "Alibaba", url: q => "https://www.alibaba.com/trade/search?SearchText=" + encodeURIComponent(q) },
  { label: "CJdropshipping", url: q => "https://www.cjdropshipping.com/search?keyword=" + encodeURIComponent(q) },
  { label: "Temu", url: q => "https://www.temu.com/search_result.html?search_key=" + encodeURIComponent(q) },
  { label: "1688", url: q => "https://s.1688.com/selloffer/offer_search.htm?keywords=" + encodeURIComponent(q) }
];

/* Marketplace-pattern attributes (how AliExpress/Temu-style listings title products) */
const SEOOS_ATTRS = ["portable", "mini", "foldable", "rechargeable", "wireless", "waterproof", "adjustable", "multifunctional", "heavy duty", "premium"];



/* ============ v0.3 — Dropshipping Product Keyword Engine ============
   Seeded from winning-product patterns across AliExpress, CJdropshipping,
   Alibaba, Temu and 1688. Live marketplace data arrives at the SaaS stage. */
const SEOOS_DROPSHIP = [
  { key: "pet", match: ["dog","cat","pet","puppy","kitten","paw","leash","litter"],
    label: "Pet Supplies",
    modifiers: ["for small dogs","for large dogs","for cats","indoor","interactive","automatic","no-pull","washable"],
    problems: ["stops scratching","anti anxiety","reduces shedding","slow feeder","chew resistant"],
    audiences: ["dog owners","cat owners","pet parents"] },
  { key: "kitchen", match: ["kitchen","cooking","chopper","slicer","peeler","utensil","spatula","knife","container","organizer rack"],
    label: "Kitchen Gadgets",
    modifiers: ["multifunctional","stainless steel","space saving","dishwasher safe","mini","electric"],
    problems: ["saves time","no mess","easy clean","cuts prep time"],
    audiences: ["home cooks","small kitchens","meal preppers"] },
  { key: "beauty", match: ["facial","face roller","gua sha","lash","nail","hair remover","scalp","derma","blackhead","makeup"],
    label: "Beauty Tools",
    modifiers: ["ice roller","electric","rechargeable","painless","salon quality","travel size"],
    problems: ["reduces puffiness","removes blackheads","anti aging","frizz control"],
    audiences: ["skincare lovers","beauty routine","self care"] },
  { key: "phone", match: ["phone","iphone","samsung","charger","magsafe","phone case","screen protector","phone holder","earbuds"],
    label: "Phone Accessories",
    modifiers: ["magnetic","wireless","fast charging","shockproof","universal","foldable"],
    problems: ["never lose grip","charges 2x faster","fits all phones"],
    audiences: ["iphone users","android users","commuters"] },
  { key: "car", match: ["car","vehicle","dashboard","seat gap","trunk","windshield","tire","car vacuum","car charger"],
    label: "Car Accessories",
    modifiers: ["universal fit","cordless","portable","leather","led"],
    problems: ["fills seat gap","removes scratches","keeps car organized"],
    audiences: ["car owners","commuters","road trips"] },
  { key: "led", match: ["led","light strip","lamp","neon","projector","night light","galaxy light","sunset lamp"],
    label: "LED & Lighting",
    modifiers: ["color changing","app controlled","usb powered","motion sensor","dimmable"],
    problems: ["transforms your room","no wiring needed","energy saving"],
    audiences: ["room decor","gamers","teen bedroom"] },
  { key: "homeorg", match: ["organizer","storage","shelf","holder","rack","hook","drawer","closet","hanger","bin"],
    label: "Home Organization",
    modifiers: ["stackable","foldable","wall mounted","under sink","space saving","adhesive"],
    problems: ["doubles storage space","no drilling","clutter free"],
    audiences: ["small apartments","renters","minimalists"] },
  { key: "fitness", match: ["resistance band","yoga","dumbbell","workout","massage gun","posture","ab roller","jump rope","fitness"],
    label: "Fitness Gear",
    modifiers: ["adjustable","portable","home gym","non slip","heavy duty"],
    problems: ["corrects posture","relieves muscle pain","full body workout at home"],
    audiences: ["home workouts","beginners","recovery"] },
  { key: "baby", match: ["baby","toddler","infant","stroller","pacifier","bottle","nursery","diaper","teether"],
    label: "Baby Products",
    modifiers: ["bpa free","silicone","portable","hands free","machine washable"],
    problems: ["soothes teething","hands free feeding","mess free"],
    audiences: ["new moms","parents","baby shower gift"] },
  { key: "outdoor", match: ["camping","hiking","outdoor","tent","lantern","cooler","fishing","beach","picnic","waterproof bag"],
    label: "Outdoor & Camping",
    modifiers: ["waterproof","lightweight","compact","solar powered","heavy duty"],
    problems: ["packs down small","waterproof rating","sets up in seconds"],
    audiences: ["campers","hikers","beach days"] }
];
