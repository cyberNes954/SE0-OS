/* SEO OS™ Alpha v0.1 — Niche Knowledge Base
   Each niche is a "brain" the engine uses to generate a strategy.
   Add a new niche = add a new object here. No other code changes needed. */

const SEOOS_NICHES = {

  activewear: {
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
    metaTemplate: "Move confidently in {brand} {p}. Designed for comfort, flexibility, and performance. Shop premium {noun} today."
  },

  digital: {
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
    metaTemplate: "Get {brand} {p} — instant digital download. Practical, step-by-step, and ready the moment you order. Start today."
  },

  skincare: {
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
    metaTemplate: "Meet {brand} {p} — gentle, effective skincare made for real routines. Shop {noun} that your skin will thank you for."
  },

  generic: {
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
    metaTemplate: "Shop {brand} {p} — quality you can count on, backed by real support. Order today."
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