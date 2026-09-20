import { BusinessInfo, MarketplaceStore, ServiceItem, ProductItem, ProcessStep } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "FATHER AND SONS ENTERPRISES",
  tagline: "We Make anything you Went",
  shortAbout: "We are a garment manufacturing business specializing in the production of quality clothing and apparel. We manufacture T-shirts, lowers, tops, dresses, and other garments as per customer requirements. We focus on quality stitching, timely production, and reliable service.",
  businessTypes: [
    "Garment Manufacturer",
    "Stitching Service Provider",
    "Garment Manufacturer + Stitching Service"
  ],
  yearStarted: 2025,
  phone: "+91 7303179577",
  whatsapp: "7303179577",
  email: "shoukat124319@gmail.com",
  address: {
    line1: "H66, H-Block, Sector 9, Gautam Buddha nagar",
    city: "NOIDA",
    state: "UTTAR PRADESH",
    pincode: "201301",
    fullFormatted: "H66, H-Block, Sector 9, Gautam Buddha Nagar, Noida, Uttar Pradesh - 201301"
  },
  googleMapsUrl: "https://share.google/kLmyRpUWeoAILsfb5",
  businessHours: "Monday – Sunday: 9:00 AM – 8:00 PM",
  moq: 50,
  acceptBulk: true,
  customManufacturing: true,
  privateLabel: true,
  sampleProvided: true,
};

export const MARKETPLACE_STORES: MarketplaceStore[] = [
  {
    name: "Amazon India",
    tag: "Trendy Everyday Fashion",
    link: "https://www.amazon.in/s?rh=n%3A1571271031%2Cp_4%3ATrendy%2BEveryday%2BFashion&ref=bl_sl_s_ap_web_1571271031",
    description: "Official Amazon storefront showcasing ready collections, trending apparel, and fast delivery dispatch.",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    featuredProduct: "Trendy Everyday Collections"
  },
  {
    name: "Flipkart",
    tag: "Father Sons Enterprises",
    link: "https://www.flipkart.com/father-sons-enterprises-women-ribbed-maroon-mini-short-dress/p/itm3a0be8af94a5b?pid=DREHN97BCHCPP6B9",
    description: "Verified Flipkart seller listing ribbed maroon mini short dresses and Western fashion apparel.",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    featuredProduct: "Ribbed Maroon Mini Short Dress"
  },
  {
    name: "Meesho",
    tag: "TwinStar Clothing 1",
    link: "https://www.meesho.com/TwinStarClothing1?ms=2",
    description: "Top-rated reseller and boutique hub with competitive wholesale-grade rates for fashion sellers.",
    badgeColor: "bg-pink-500/10 text-pink-500 border-pink-500/30",
    featuredProduct: "Reseller Catalog & Styles"
  },
  {
    name: "IndiaMART",
    tag: "Verified B2B Supplier",
    link: "https://www.indiamart.com/company/273562166/?srsltid=AU7gw4UXXnPczz9OdId2zUH7yVzaE405AFl7DIRgSwvOXzRRsMxbO2Bi",
    description: "Verified IndiaMART business page for bulk inquiries, corporate orders, and contract manufacturing.",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
    featuredProduct: "B2B Contract Manufacturing"
  }
];

export const MANUFACTURING_SERVICES: ServiceItem[] = [
  {
    id: "garment-manufacturing",
    title: "Garment Manufacturing",
    shortDesc: "End-to-end garment production engineered to your exact tech packs.",
    details: "Full production pipeline handling pattern, fabric, construction, and finishing according to your buyer specs.",
    iconName: "Shirt",
    highlight: true
  },
  {
    id: "bulk-garment",
    title: "Bulk Garment Manufacturing",
    shortDesc: "High-volume scalability with strict batch consistency and prompt delivery.",
    details: "Streamlined mass-production runs starting from low MOQ of 50 up to thousands of pieces per month.",
    iconName: "Layers"
  },
  {
    id: "custom-garment",
    title: "Custom Garment Manufacturing",
    shortDesc: "Tailored specifications, custom silhouettes, and bespoke cuts.",
    details: "Bring any custom cut, fit, collar, or finish — we manufacture anything you desire.",
    iconName: "Scissors"
  },
  {
    id: "stitching-services",
    title: "Stitching Services",
    shortDesc: "Industrial overlock, flatlock, single & double needle precision stitching.",
    details: "Expert seamsters ensuring strong seams, clean hems, and smooth structural contours.",
    iconName: "Sparkles"
  },
  {
    id: "private-label",
    title: "Private Label Manufacturing",
    shortDesc: "Complete brand customization with your custom neck labels & tags.",
    details: "Turnkey white-label production ready for fashion labels, D2C startups, and boutique brands.",
    iconName: "Tag",
    highlight: true
  },
  {
    id: "sampling",
    title: "Sampling / Sample Development",
    shortDesc: "Prototyping and fit-testing before entering full commercial production.",
    details: "Rapid sample turnarounds allowing you to verify sizing, drape, hand-feel, and seam quality.",
    iconName: "FileCheck",
    highlight: true
  },
  {
    id: "fabric-cutting",
    title: "Fabric Cutting",
    shortDesc: "High-precision master cutting tables for minimal shrinkage and zero waste.",
    details: "Accurate layer layups ensuring identical proportions across all garment sizes.",
    iconName: "Cpu"
  },
  {
    id: "sewing-stitching",
    title: "Sewing / Stitching Assembly",
    shortDesc: "Dedicated production lines for knitted, woven, and ribbed garments.",
    details: "State-of-the-art machinery calibrated for stretch fabrics, rib knits, and delicate textiles.",
    iconName: "Compass"
  },
  {
    id: "finishing",
    title: "Finishing & Thread Trimming",
    shortDesc: "Careful thread clipping, steam ironing, and form shaping.",
    details: "Every garment is neatly pressed and trimmed to retail-ready showroom presentation standards.",
    iconName: "Flame"
  },
  {
    id: "quality-checking",
    title: "Quality Checking (QC)",
    shortDesc: "Multi-point inspection for measurement, seam integrity, and dye uniformity.",
    details: "Strict Zero-Defect checkpoint before any garment moves to the packaging section.",
    iconName: "ShieldCheck",
    highlight: true
  },
  {
    id: "packaging",
    title: "Packaging & Dispatch Ready",
    shortDesc: "Individual polybag packing, barcode stickering, carton boxing, and logistics prep.",
    details: "Custom folding and carton sealing ready for direct dispatch to Amazon FBA, Flipkart, or your warehouse.",
    iconName: "Package"
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "womens-dresses",
    name: "Women's Dresses",
    category: "Women",
    description: "Fashion-forward Western & ethnic silhouettes, mini dresses, midi cuts, and flared patterns.",
    moq: 50,
    leadTime: "7–14 Days",
    sampleTime: "3–4 Days",
    popularFabric: "Rib Knit, Crepe, Georgette, Cotton Blend"
  },
  {
    id: "bodycon-dresses",
    name: "Bodycon Dresses",
    category: "Women",
    description: "Form-fitting, high-stretch ribbed fabric cuts crafted for premium drape and durability.",
    moq: 50,
    leadTime: "7–12 Days",
    sampleTime: "3 Days",
    popularFabric: "2x2 Rib, Modal Elastane, Ponte Roma"
  },
  {
    id: "womens-tops",
    name: "Women's Tops",
    category: "Women",
    description: "Crop tops, halter necks, camisoles, ribbed basic tees, and casual everyday blouses.",
    moq: 50,
    leadTime: "6–10 Days",
    sampleTime: "2–3 Days",
    popularFabric: "Combed Cotton, Viscose, Lycra Jersey"
  },
  {
    id: "western-wear",
    name: "Western Wear",
    category: "Women",
    description: "Contemporary Western apparel including coordinated sets, outerwear, and statement pieces.",
    moq: 50,
    leadTime: "10–14 Days",
    sampleTime: "3–5 Days",
    popularFabric: "Satin, Poly-spandex, Heavy Jersey"
  },
  {
    id: "party-wear",
    name: "Party Wear",
    category: "Women",
    description: "Glamorous party dresses, evening cuts, and chic celebratory outfits with fine stitching.",
    moq: 50,
    leadTime: "10–15 Days",
    sampleTime: "4–5 Days",
    popularFabric: "Lurex, Shimmer Rib, Velvet, Georgette"
  },
  {
    id: "casual-wear",
    name: "Casual Wear",
    category: "General",
    description: "Everyday comfort clothing with breathable fabrics, durable seams, and modern styling.",
    moq: 50,
    leadTime: "7–10 Days",
    sampleTime: "3 Days",
    popularFabric: "100% Bio-Washed Cotton, Terry Cotton"
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    category: "General",
    description: "Round neck, V-neck, oversized drop-shoulder, polo tees, and plain or print-ready blanks.",
    moq: 50,
    leadTime: "5–8 Days",
    sampleTime: "2 Days",
    popularFabric: "180-240 GSM Super Combed Cotton"
  },
  {
    id: "joggers-lowers",
    name: "Joggers / Lowers",
    category: "General",
    description: "Track pants, joggers with elasticated waistbands, deep zip pockets, and tapered cuffs.",
    moq: 50,
    leadTime: "7–12 Days",
    sampleTime: "3 Days",
    popularFabric: "Loopknit Fleece, 4-Way Lycra, Twill Cotton"
  },
  {
    id: "mens-wear",
    name: "Men's Wear",
    category: "Men",
    description: "Casual men's essentials including crewnecks, polos, streetwear tops, and bottoms.",
    moq: 50,
    leadTime: "7–12 Days",
    sampleTime: "3 Days",
    popularFabric: "Cotton-Poly blend, Heavyweight Jersey"
  },
  {
    id: "kids-wear",
    name: "Kids Wear",
    category: "Kids",
    description: "Soft, skin-friendly, non-toxic dyed garments with anti-chafing seams for infants and kids.",
    moq: 50,
    leadTime: "7–10 Days",
    sampleTime: "3 Days",
    popularFabric: "Organic Cotton, Interlock Knit"
  },
  {
    id: "all-garments",
    name: "All Custom Garments",
    category: "General",
    description: "Bespoke cut-and-sew solutions — if you can sketch or imagine it, our masters can stitch it.",
    moq: 50,
    leadTime: "Custom",
    sampleTime: "3–4 Days",
    popularFabric: "Any fabric requested by customer"
  }
];

export const TARGET_CUSTOMERS = [
  { title: "Wholesalers", desc: "Reliable bulk manufacturing with competitive tiered pricing.", icon: "Building" },
  { title: "Retailers", desc: "Fast-moving trendy styles to stock your retail storefronts.", icon: "Store" },
  { title: "Online Sellers", desc: "E-commerce-ready apparel optimized for Amazon, Flipkart, & Meesho.", icon: "ShoppingBag" },
  { title: "Fashion Brands", desc: "Premium stitching and strict adherence to design specifications.", icon: "Sparkles" },
  { title: "Startups", desc: "Low MOQ of just 50 pieces to test your fashion concepts safely.", icon: "Rocket" },
  { title: "Exporters", desc: "Rigorous quality inspection meeting international standards.", icon: "Globe" }
];

export const MANUFACTURING_PROCESS: ProcessStep[] = [
  { step: 1, title: "Design / Requirement", desc: "You share your reference garment, sketch, tech pack, or vision.", icon: "FileText" },
  { step: 2, title: "Fabric Selection", desc: "We source or inspect the optimal GSM, weave, and composition.", icon: "Layers" },
  { step: 3, title: "Pattern Making", desc: "Master pattern masters draft precise dimensional sizing templates.", icon: "PenTool" },
  { step: 4, title: "Sampling (Special)", desc: "Quick physical prototype developed for client approval & fit test.", icon: "CheckCircle", isSpecial: true },
  { step: 5, title: "Cutting", desc: "Precision multi-layer fabric cutting according to approved patterns.", icon: "Scissors" },
  { step: 6, title: "Stitching", desc: "High-grade industrial sewing lines stitch the garments with precision.", icon: "Sparkles" },
  { step: 7, title: "Finishing", desc: "Thread trimming, steam ironing, and garment shaping.", icon: "Flame" },
  { step: 8, title: "Quality Check", desc: "100% inspection for sizing, stitching tension, and fabric flaws.", icon: "ShieldCheck" },
  { step: 9, title: "Packaging", desc: "Individual polybags, brand tagging, and carton consolidation.", icon: "Package" },
  { step: 10, title: "Dispatch", desc: "Prompt courier / transport dispatch with live tracking updates.", icon: "Truck" }
];

export const WHY_CHOOSE_US = [
  {
    title: "Low MOQ of Just 50 Pieces",
    description: "Launch new designs without high capital barrier. Perfect for growing fashion labels and established brands alike.",
    stat: "50 pcs",
    label: "Minimum Order"
  },
  {
    title: "Quality Stitching Focus",
    description: "We take immense pride in seam precision, durable threadwork, and flawless finish in every single piece.",
    stat: "100%",
    label: "Quality Checked"
  },
  {
    title: "Timely Production & Delivery",
    description: "Planned production schedules and strict timelines ensure your inventory lands right when you need it.",
    stat: "7-14 Days",
    label: "Turnaround Time"
  },
  {
    title: "Turnkey Sampling Service",
    description: "Test your fit, finish, and fabric before committing to bulk production runs. We iterate till you approve.",
    stat: "3 Days",
    label: "Rapid Sample"
  }
];

export const SOCIAL_PLACEHOLDERS = [
  { platform: "Instagram", label: "Instagram", url: "#", note: "Replace link" },
  { platform: "Facebook", label: "Facebook", url: "#", note: "Replace link" },
  { platform: "YouTube", label: "YouTube", url: "#", note: "Replace link" },
  { platform: "LinkedIn", label: "LinkedIn", url: "#", note: "Replace link" },
];
