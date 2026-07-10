/* SEO OS™ Alpha v0.1 — Application Engine
   Modules: Input → Keyword Engine → Architecture → Product SEO →
   Collection SEO → Blog Engine → Internal Linking → Technical → AI Search
   Everything runs in the browser. No server, no API keys, no cost. */

"use strict";

/* ---------- helpers ---------- */

function titleCase(s) {
  return s.trim().replace(/\s+/g, " ").split(" ")
    .map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(" ");
}
function slugify(s) {
  return s.toLowerCase().trim().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function splitList(s) {
  return (s || "").split(/[,\n]+/).map(x => x.trim()).filter(Boolean);
}
function uniq(arr) {
  const seen = new Set(); const out = [];
  for (const a of arr) { const k = a.toLowerCase(); if (!seen.has(k)) { seen.add(k); out.push(a); } }
  return out;
}
function fill(template, p, extra) {
  let t = template.replace(/\{p\}/g, p);
  if (extra) for (const k in extra) t = t.replace(new RegExp("\\{" + k + "\\}", "g"), extra[k]);
  return t;
}

/* ---------- the generator (pure — no DOM) ---------- */

function buildPlan(input) {
  const niche = SEOOS_NICHES[input.niche] || SEOOS_NICHES.generic;
  const brand = input.brand.trim();
  const products = splitList(input.products);
  const competitors = splitList(input.competitors);
  const audience = input.audience.trim();
  const country = input.country.trim();
  const noun = niche.nouns[0] || "products";

  /* Module 1 — Keyword Engine */
  const tier1 = uniq([...niche.seeds, ...(audience ? [noun + " for " + audience.toLowerCase()] : [])]);
  const tier2 = uniq([
    ...niche.commercial,
    ...products.flatMap(p => ["best " + p.toLowerCase(), "premium " + p.toLowerCase(), "top rated " + p.toLowerCase()])
  ]);
  const tier3 = uniq([
    ...niche.transactional,
    ...products.flatMap(p => {
      const base = ["buy " + p.toLowerCase(), "shop " + p.toLowerCase(), p.toLowerCase() + " online"];
      if (country) base.push("buy " + p.toLowerCase() + " " + country.toLowerCase());
      return base;
    })
  ]);
  const questions = uniq(products.flatMap(p => niche.questionTemplates.map(t => fill(t, p.toLowerCase()))));
  const semantic = uniq(niche.semantic.map(s => fill(s, "", { noun: noun })));
  const brandKw = uniq([
    brand,
    brand + " " + niche.label.toLowerCase(),
    ...products.map(p => brand + " " + p.toLowerCase()),
    brand + " reviews",
    "is " + brand + " legit"
  ]);

  /* Module 2 — Store Architecture */
  const derivedCollections = uniq([
    ...products.map(p => titleCase(pluralish(p))),
    ...niche.collections
  ]).slice(0, 10);

  /* Module 3 — Product SEO (per product) */
  const productSEO = products.map(p => {
    const P = titleCase(p);
    const benefit = niche.benefits[0] || "Premium";
    const benefit2 = niche.benefits[1] || "Best-Selling";
    const t1 = brand + " " + P + " | " + benefit + " " + titleCase(noun);
    const t2 = brand + " " + P + " | " + benefit;
    const t3 = brand + " " + P;
    return {
      name: P,
      seoTitle: t1.length <= 60 ? t1 : (t2.length <= 60 ? t2 : clamp60(t3)),
      meta: clamp155(fill(niche.metaTemplate, P, { brand: brand, noun: noun })),
      slug: "/products/" + slugify(brand + " " + p),
      h1: brand + " " + P,
      alts: [
        slugify(brand + " " + p) + "-front.jpg — \"" + brand + " " + p.toLowerCase() + " front view\"",
        slugify(brand + " " + p) + "-detail.jpg — \"" + benefit.toLowerCase() + " " + p.toLowerCase() + " close up\"",
        slugify(brand + " " + p) + "-lifestyle.jpg — \"" + (audience ? audience.toLowerCase() + " " : "") + "using " + brand + " " + p.toLowerCase() + "\""
      ],
      descriptionOutline: [
        "Hook — the problem this solves in one line",
        "3–5 benefit bullets (" + benefit + ", " + benefit2 + "...)",
        "Features & materials / what's included",
        "Size or usage guide",
        "Who it's for (" + (audience || "your customer") + ")",
        "Care / delivery instructions",
        "3–5 FAQs (see below)",
        "Link to related collection + 1 blog post"
      ],
      faqs: niche.faqTemplates.map(t => fill(t, P))
    };
  });

  /* Module 4 — Collection SEO */
  const collectionSEO = derivedCollections.slice(0, 6).map(c => ({
    name: c,
    seoTitle: clamp60(c + " | " + brand),
    meta: clamp155("Explore " + c.toLowerCase() + " by " + brand + ". " + (niche.benefits.slice(0, 2).join(", ")) + " picks with fast shipping. Shop the collection."),
    h1: brand + " " + c,
    outline: [
      "150–300 word intro above the grid: what " + c.toLowerCase() + " are + who they're for",
      "Buying criteria: how to choose (3 short paragraphs)",
      "500+ words below the grid: materials, styling/usage, care",
      "3 FAQs with FAQ schema",
      "Links to: 2 related collections, 2 blog posts, homepage"
    ]
  }));

  /* Module 5 — Blog Engine: 12-week calendar */
  const bt = niche.blogTopics;
  const pool = [];
  const levels = ["beginner", "intermediate", "advanced"];
  for (let i = 0; i < 4; i++) {
    for (const lvl of levels) {
      const list = bt[lvl];
      const t = list[i % list.length];
      pool.push({ level: lvl, title: fill(t, "", { noun: titleCase(noun) }) });
    }
  }
  const blogCalendar = pool.slice(0, 12).map((b, i) => ({
    week: i + 1,
    title: b.title,
    level: b.level,
    targetKeyword: (i % 3 === 0 && tier1[0]) ? tier1[0] :
                   (i % 3 === 1 && questions[i % Math.max(questions.length,1)]) ? questions[i % questions.length] :
                   (tier2[i % Math.max(tier2.length, 1)] || noun),
    intent: b.level === "beginner" ? "Informational" : b.level === "intermediate" ? "Comparison" : "Authority"
  }));

  /* Module 6 — Internal Linking */
  const linking = {
    tree: [
      "Homepage",
      "  ├── " + derivedCollections.slice(0, 4).join("\n  ├── "),
      "  │     └── Products (each links up to its collection + across to 2 related products)",
      "  ├── Blog (every post links to 1 collection + 2 products)",
      "  └── FAQ / Policies"
    ].join("\n"),
    rules: [
      "Every product links UP to its collection and ACROSS to 2 related products",
      "Every blog post links to exactly 1 collection and 2 products (in context, not footers)",
      "Every collection intro links to 2 sibling collections",
      "Homepage links to top 4 collections + newest blog post",
      "No page more than 3 clicks from the homepage"
    ]
  };

  /* Module 8 — AI Search Optimization */
  const aiSearch = {
    principle: "AI assistants quote pages that answer questions directly. Every product page should contain plain-language answers, not just marketing copy.",
    questions: questions.slice(0, 10),
    actions: [
      "Add an FAQ block to every product page answering the questions above in 1–2 sentences each",
      "Use the exact question as the heading (H3), answer immediately below",
      "State facts AI can cite: materials, sizes, shipping time, return window",
      "Keep brand + product name in the first sentence of every description",
      "Add FAQ schema so answers are machine-readable"
    ]
  };

  return {
    meta: { brand, niche: input.niche, nicheLabel: niche.label, audience, country, competitors, products, generatedAt: new Date().toISOString() },
    keywords: { tier1, tier2, tier3, questions, semantic, brand: brandKw },
    architecture: { collections: derivedCollections },
    productSEO, collectionSEO, blogCalendar, linking,
    checklist: SEOOS_TECH_CHECKLIST, aiSearch
  };
}

function pluralish(p) {
  const w = p.trim();
  if (/^the\s/i.test(w) || w.split(/\s+/).length > 2) return w; // product names/titles stay as-is
  if (/s$/i.test(w)) return w;
  if (/(guide|planner|tracker|serum|cleanser|bra|set|short|top|legging)$/i.test(w)) return w + "s";
  return w;
}
function clamp60(s) { return s.length <= 60 ? s : s.slice(0, 57).replace(/\s+\S*$/, "") + "…"; }
function clamp155(s) { return s.length <= 155 ? s : s.slice(0, 152).replace(/\s+\S*$/, "") + "…"; }

/* ---------- prompt engine ---------- */

function buildPrompts(input) {
  const brand = input.brand || "[Brand]";
  const nicheLabel = (SEOOS_NICHES[input.niche] || SEOOS_NICHES.generic).label;
  const products = splitList(input.products).join(", ") || "[products]";
  const audience = input.audience || "[audience]";
  const competitors = splitList(input.competitors).join(", ") || "[competitors]";
  return [
    { name: "Product Description Writer",
      text: "Write a Shopify product description for " + brand + " (niche: " + nicheLabel + "). Product: [PRODUCT NAME]. Audience: " + audience + ". Structure: 1-line hook, 4 benefit bullets, features/materials, size or usage guide, care/delivery, 4 FAQs. Tone: confident, specific, no hype words like 'game-changer'. 250-350 words." },
    { name: "Collection Page Copy",
      text: "Write SEO copy for the [COLLECTION NAME] collection page of " + brand + " (" + nicheLabel + ", audience: " + audience + "). Give me: a 200-word intro for above the product grid, a 500-word buying guide for below the grid, and 3 FAQs with concise answers. Primary keyword: [KEYWORD]. Use it naturally 3-5 times." },
    { name: "Blog Post Writer",
      text: "Write a 1,200-word blog post for " + brand + " titled '[POST TITLE]'. Target keyword: [KEYWORD]. Audience: " + audience + ". Include: an intro that names the problem, 4-5 H2 sections, one comparison table, a short FAQ, and a soft CTA linking to the [COLLECTION] collection. Write like a knowledgeable friend, not a brochure." },
    { name: "Meta Description Batch",
      text: "Write meta descriptions (max 155 characters each) for these " + brand + " pages: [PASTE PAGE LIST]. Each must include a benefit, the primary keyword, and an action verb. No exclamation marks, no 'Welcome to'." },
    { name: "Competitor Gap Finder",
      text: "My store is " + brand + " (" + nicheLabel + "). Competitors: " + competitors + ". My products: " + products + ". Based on what stores like these typically rank for, list: 10 keyword opportunities they target that I might be missing, 5 collection ideas, and 5 blog topics that would differentiate me. Format as three lists." },
    { name: "Image Alt Text Batch",
      text: "Generate SEO filenames and alt text for product photos. Brand: " + brand + ". For each product I list, give: filename (lowercase-hyphenated, starts with brand) and alt text (describes the image for a blind user AND includes the product keyword naturally). Products: [PASTE LIST]." },
    { name: "FAQ Schema Generator",
      text: "Convert these FAQs into valid FAQPage JSON-LD schema markup I can paste into a Shopify page: [PASTE Q&A LIST]. Output only the <script type=\"application/ld+json\"> block." },
    { name: "AI Search Answer Block",
      text: "For the product '" + brand + " [PRODUCT]', write a 'Quick Answers' section: take these customer questions [PASTE QUESTIONS] and answer each in 1-2 factual sentences an AI assistant could quote directly. No marketing language — just clear facts." }
  ];
}

/* ---------- markdown export ---------- */

function planToMarkdown(plan) {
  const L = [];
  const m = plan.meta;
  L.push("# SEO OS™ Strategy — " + m.brand);
  L.push("_Niche: " + m.nicheLabel + (m.country ? " · Market: " + m.country : "") + (m.audience ? " · Audience: " + m.audience : "") + "_");
  L.push("_Generated: " + m.generatedAt.slice(0, 10) + " · SEO OS Alpha v0.1_\n");

  L.push("## 1. Keyword Map");
  L.push("**Tier 1 — Authority (broad):** " + plan.keywords.tier1.join(" · "));
  L.push("**Tier 2 — Commercial:** " + plan.keywords.tier2.join(" · "));
  L.push("**Tier 3 — Buying intent:** " + plan.keywords.tier3.join(" · "));
  L.push("**Questions (blog/FAQ/AI):** " + plan.keywords.questions.join(" · "));
  L.push("**Semantic:** " + plan.keywords.semantic.join(" · "));
  L.push("**Brand:** " + plan.keywords.brand.join(" · ") + "\n");

  L.push("## 2. Store Architecture");
  L.push("Homepage → Collections → Products → Blog → FAQ");
  L.push("Collections: " + plan.architecture.collections.join(", ") + "\n");

  L.push("## 3. Product SEO");
  for (const p of plan.productSEO) {
    L.push("### " + p.name);
    L.push("- SEO title: " + p.seoTitle);
    L.push("- Meta: " + p.meta);
    L.push("- URL: " + p.slug);
    L.push("- H1: " + p.h1);
    L.push("- Images: " + p.alts.join(" | "));
    L.push("- Description outline: " + p.descriptionOutline.join(" → "));
    L.push("- FAQs: " + p.faqs.join(" / "));
  }
  L.push("");

  L.push("## 4. Collection SEO");
  for (const c of plan.collectionSEO) {
    L.push("### " + c.name);
    L.push("- SEO title: " + c.seoTitle);
    L.push("- Meta: " + c.meta);
    L.push("- Page plan: " + c.outline.join(" → "));
  }
  L.push("");

  L.push("## 5. Blog Calendar (12 weeks)");
  for (const b of plan.blogCalendar) {
    L.push("Week " + b.week + " — " + b.title + "  \n  keyword: `" + b.targetKeyword + "` · " + b.intent);
  }
  L.push("");

  L.push("## 6. Internal Linking");
  L.push("```\n" + plan.linking.tree + "\n```");
  L.push(plan.linking.rules.map(r => "- " + r).join("\n") + "\n");

  L.push("## 7. Technical Checklist");
  for (const g of plan.checklist) {
    L.push("**" + g.area + "**");
    L.push(g.items.map(i => "- [ ] " + i).join("\n"));
  }
  L.push("");

  L.push("## 8. AI Search Optimization");
  L.push(plan.aiSearch.principle);
  L.push("Questions to answer on-page: " + plan.aiSearch.questions.join(" · "));
  L.push(plan.aiSearch.actions.map(a => "- " + a).join("\n"));
  return L.join("\n");
}

/* ---------- DOM layer ---------- */

let CURRENT_PLAN = null;

function $(id) { return document.getElementById(id); }
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function chipRow(items, mono) {
  return "<div class='chips'>" + items.map(i =>
    "<span class='chip" + (mono ? " mono" : "") + "'>" + esc(i) + "</span>").join("") + "</div>";
}

function moduleCard(num, name, bodyHTML) {
  return "<section class='module'><div class='module-head'><span class='module-id mono'>MODULE " +
    String(num).padStart(2, "0") + "</span><span class='module-name'>" + esc(name) +
    "</span><span class='module-dot' aria-hidden='true'></span></div><div class='module-body'>" + bodyHTML + "</div></section>";
}

function renderPlan(plan) {
  const out = $("planOutput");
  const m = plan.meta;
  let h = "";

  h += "<div class='plan-banner'><div><div class='plan-brand'>" + esc(m.brand) + "</div>" +
    "<div class='plan-sub mono'>" + esc(m.nicheLabel) + (m.country ? " · " + esc(m.country) : "") +
    (m.audience ? " · " + esc(m.audience) : "") + "</div></div>" +
    "<div class='plan-actions'><button class='btn ghost' id='copyPlanBtn'>Copy plan</button>" +
    "<button class='btn ghost' id='downloadPlanBtn'>Download .md</button></div></div>";

  h += moduleCard(1, "Keyword Engine",
    "<h4>Tier 1 — Authority</h4>" + chipRow(plan.keywords.tier1, true) +
    "<h4>Tier 2 — Commercial</h4>" + chipRow(plan.keywords.tier2, true) +
    "<h4>Tier 3 — Buying intent</h4>" + chipRow(plan.keywords.tier3, true) +
    "<h4>Question keywords</h4>" + chipRow(plan.keywords.questions, true) +
    "<h4>Semantic</h4>" + chipRow(plan.keywords.semantic, true) +
    "<h4>Brand</h4>" + chipRow(plan.keywords.brand, true));

  h += moduleCard(2, "Store Architecture",
    "<p class='note'>Homepage → Collections → Products → Blog → FAQ. Every layer supports the one above it.</p>" +
    chipRow(plan.architecture.collections));

  h += moduleCard(3, "Product SEO", plan.productSEO.length ?
    plan.productSEO.map(p =>
      "<div class='item'><h4>" + esc(p.name) + "</h4>" +
      "<div class='kv'><span>SEO title</span><code>" + esc(p.seoTitle) + "</code></div>" +
      "<div class='kv'><span>Meta</span><code>" + esc(p.meta) + "</code></div>" +
      "<div class='kv'><span>URL</span><code>" + esc(p.slug) + "</code></div>" +
      "<div class='kv'><span>Images</span><code>" + p.alts.map(esc).join("<br>") + "</code></div>" +
      "<details><summary>Description outline + FAQs</summary><ol>" +
      p.descriptionOutline.map(d => "<li>" + esc(d) + "</li>").join("") + "</ol>" +
      "<p class='note'>FAQs: " + p.faqs.map(esc).join(" · ") + "</p></details></div>"
    ).join("") : "<p class='note'>Add products in Setup to generate per-product SEO.</p>");

  h += moduleCard(4, "Collection SEO",
    plan.collectionSEO.map(c =>
      "<div class='item'><h4>" + esc(c.name) + "</h4>" +
      "<div class='kv'><span>SEO title</span><code>" + esc(c.seoTitle) + "</code></div>" +
      "<div class='kv'><span>Meta</span><code>" + esc(c.meta) + "</code></div>" +
      "<details><summary>Page plan</summary><ol>" + c.outline.map(o => "<li>" + esc(o) + "</li>").join("") + "</ol></details></div>"
    ).join(""));

  h += moduleCard(5, "Blog Calendar — 12 weeks",
    "<table class='cal'><thead><tr><th>Wk</th><th>Post</th><th>Target keyword</th><th>Intent</th></tr></thead><tbody>" +
    plan.blogCalendar.map(b => "<tr><td class='mono'>" + b.week + "</td><td>" + esc(b.title) +
      "</td><td class='mono kw'>" + esc(b.targetKeyword) + "</td><td>" + b.intent + "</td></tr>").join("") +
    "</tbody></table>");

  h += moduleCard(6, "Internal Linking",
    "<pre class='tree mono'>" + esc(plan.linking.tree) + "</pre><ul>" +
    plan.linking.rules.map(r => "<li>" + esc(r) + "</li>").join("") + "</ul>");

  h += moduleCard(7, "Technical Checklist",
    plan.checklist.map((g, gi) =>
      "<h4>" + esc(g.area) + "</h4><ul class='checks'>" +
      g.items.map((i, ii) => "<li><label><input type='checkbox' data-check='" + gi + "-" + ii + "'> <span>" + esc(i) + "</span></label></li>").join("") +
      "</ul>").join(""));

  h += moduleCard(8, "AI Search Optimization",
    "<p class='note'>" + esc(plan.aiSearch.principle) + "</p>" +
    "<h4>Answer these on-page</h4>" + chipRow(plan.aiSearch.questions, true) +
    "<ul>" + plan.aiSearch.actions.map(a => "<li>" + esc(a) + "</li>").join("") + "</ul>");

  out.innerHTML = h;
  out.querySelectorAll(".module").forEach((mod, i) => {
    mod.style.setProperty("--d", (i * 70) + "ms");
    mod.classList.add("ready");
  });

  $("copyPlanBtn").addEventListener("click", () => copyText(planToMarkdown(plan), "copyPlanBtn"));
  $("downloadPlanBtn").addEventListener("click", () => downloadText(planToMarkdown(plan), slugify(m.brand) + "-seo-plan.md"));
  restoreChecks();
  out.querySelectorAll("input[data-check]").forEach(cb => cb.addEventListener("change", saveChecks));
}

/* ---------- checklist persistence (per brand) ---------- */
function checksKey() { return "seoos.checks." + (CURRENT_PLAN ? slugify(CURRENT_PLAN.meta.brand) : "default"); }
function saveChecks() {
  const done = [...document.querySelectorAll("input[data-check]:checked")].map(c => c.dataset.check);
  try { localStorage.setItem(checksKey(), JSON.stringify(done)); } catch (e) {}
}
function restoreChecks() {
  let done = [];
  try { done = JSON.parse(localStorage.getItem(checksKey()) || "[]"); } catch (e) {}
  done.forEach(k => {
    const cb = document.querySelector("input[data-check='" + k + "']");
    if (cb) cb.checked = true;
  });
}

/* ---------- prompts tab ---------- */
function renderPrompts() {
  const input = readForm();
  const list = buildPrompts(input);
  $("promptList").innerHTML = list.map((p, i) =>
    "<div class='item prompt'><h4>" + esc(p.name) + "</h4><pre class='ptext mono' id='pt" + i + "'>" + esc(p.text) +
    "</pre><button class='btn small' data-copy='pt" + i + "'>Copy prompt</button></div>").join("");
  document.querySelectorAll("[data-copy]").forEach(b =>
    b.addEventListener("click", () => copyText($(b.dataset.copy).textContent, null, b)));
}

/* ---------- projects (save/load) ---------- */
function getProjects() {
  try { return JSON.parse(localStorage.getItem("seoos.projects") || "{}"); } catch (e) { return {}; }
}
function saveProject() {
  const input = readForm();
  if (!input.brand.trim()) { flash("Enter a brand name first"); return; }
  const all = getProjects();
  all[input.brand.trim()] = { input, savedAt: new Date().toISOString() };
  localStorage.setItem("seoos.projects", JSON.stringify(all));
  renderProjects();
  flash("Saved: " + input.brand.trim());
}
function renderProjects() {
  const all = getProjects();
  const names = Object.keys(all).sort();
  $("projectList").innerHTML = names.length ? names.map(n =>
    "<div class='item proj'><div><h4>" + esc(n) + "</h4><p class='note mono'>" +
    esc((SEOOS_NICHES[all[n].input.niche] || SEOOS_NICHES.generic).label) + " · saved " + all[n].savedAt.slice(0, 10) +
    "</p></div><div class='proj-btns'><button class='btn small' data-load='" + esc(n) + "'>Load</button>" +
    "<button class='btn small danger' data-del='" + esc(n) + "'>Delete</button></div></div>").join("")
    : "<p class='note'>No saved projects yet. Fill in Setup and tap “Save project”. Projects are stored in this browser.</p>";
  document.querySelectorAll("[data-load]").forEach(b => b.addEventListener("click", () => {
    const p = getProjects()[b.dataset.load]; if (!p) return;
    writeForm(p.input); switchTab("setup"); flash("Loaded: " + b.dataset.load);
  }));
  document.querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", () => {
    const all2 = getProjects(); delete all2[b.dataset.del];
    localStorage.setItem("seoos.projects", JSON.stringify(all2)); renderProjects();
  }));
}

/* ---------- form ---------- */
function readForm() {
  return {
    brand: $("fBrand").value, niche: $("fNiche").value, country: $("fCountry").value,
    audience: $("fAudience").value, products: $("fProducts").value, competitors: $("fCompetitors").value
  };
}
function writeForm(v) {
  $("fBrand").value = v.brand || ""; $("fNiche").value = v.niche || "generic";
  $("fCountry").value = v.country || ""; $("fAudience").value = v.audience || "";
  $("fProducts").value = v.products || ""; $("fCompetitors").value = v.competitors || "";
}

/* ---------- clipboard / download / flash ---------- */
function copyText(text, btnId, btnEl) {
  const done = () => {
    const b = btnEl || (btnId && $(btnId));
    if (b) { const old = b.textContent; b.textContent = "Copied ✓"; setTimeout(() => b.textContent = old, 1400); }
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
  } else fallbackCopy(text, done);
}
function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta); done();
}
function downloadText(text, filename) {
  const blob = new Blob([text], { type: "text/markdown" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function flash(msg) {
  const f = $("flash"); f.textContent = msg; f.classList.add("show");
  setTimeout(() => f.classList.remove("show"), 1800);
}

/* ---------- tabs ---------- */
function switchTab(name) {
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === name));
  document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + name));
  if (name === "prompts") renderPrompts();
  if (name === "projects") renderProjects();
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  console.log("SEO OS™ Alpha v0.1 loaded");

  document.querySelectorAll(".tab").forEach(t =>
    t.addEventListener("click", () => switchTab(t.dataset.tab)));

  $("generateBtn").addEventListener("click", () => {
    const input = readForm();
    if (!input.brand.trim()) { flash("Enter a brand name first"); $("fBrand").focus(); return; }
    CURRENT_PLAN = buildPlan(input);
    renderPlan(CURRENT_PLAN);
    switchTab("plan");
  });

  $("saveBtn").addEventListener("click", saveProject);

  const demo = $("demoBtn");
  if (demo) demo.addEventListener("click", () => {
    writeForm({
      brand: "Velora Fit", niche: "activewear", country: "United States",
      audience: "women 18-45",
      products: "seamless leggings, sports bras, matching sets, gym shorts",
      competitors: "Gymshark, AYBL, NVGTN"
    });
    flash("Demo loaded — tap Generate");
  });

  renderProjects();
});