/* ==========================================================================
   NEW AMBIKA MOBILES - CORE APPLICATION ENGINE & ROUTER (VANILLA JS SPA)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. SVG GRAPHICS ENGINE (PREMIUM INLINE ILLUSTRATIONS)
// --------------------------------------------------------------------------
// This function returns beautifully rendered SVG illustrations representing the products.
// It generates high-resolution, perfectly scaled graphics that load instantly.
function getProductSVG(category, id, name = "") {
  // Curated premium e-commerce photography database
  const images = {
    // Mobiles (New)
    101: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80", // Samsung S23 Ultra Green
    102: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80", // iPhone 15 Pro Max Titanium
    103: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80", // OnePlus 12 Emerald
    104: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80", // Redmi Note 13 Purple
    105: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80", // iPhone 14 Pro Space Black
    106: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80", // Samsung A54 5G Awesome Graphite
    107: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80", // Google Pixel 8 Pro Bay Blue
    108: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80", // OnePlus Nord CE 4 5G
    
    // Second-Hand Mobiles
    201: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80", // Used iPhone 13 Black
    202: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=600&q=80", // Used Galaxy S21 Lavender
    203: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80", // Used OnePlus 10 Pro Green
    204: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80", // Used iPhone 12 Pro Pacific Blue
    205: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=600&q=80", // Used Galaxy S22 Ultra Phantom Black
    
    // UV Glass Tempered
    301: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80", // 11D UV Curved Tempered
    302: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=600&q=80", // Matte Finish UV Glass
    
    // Combo Displays
    401: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=600&q=80", // Premium IPS Display
    402: "https://images.unsplash.com/photo-1551645121-d1034da75057?auto=format&fit=crop&w=600&q=80", // OEM AMOLED Display Panel
    
    // Accessories
    501: "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=600&q=80", // GaN 65W charger
    502: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80", // Type-C Fast Cable
    503: "https://images.unsplash.com/photo-1588449668338-d1516886359d?auto=format&fit=crop&w=600&q=80", // AirPods Pro Gen 2
    504: "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=600&q=80", // MagSafe Wireless Charger
    
    // Speakers
    601: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80", // Bluetooth Speaker SonicBoom
    602: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80", // JBL Flip 6 Speaker
    
    // Repair Services
    701: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80"  // Charging Port repair
  };

  if (images[id]) return images[id];
  
  // High-quality category base image fallbacks for newly added items from the admin catalog panel
  const categoryFallbacks = {
    "mobiles": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    "second-hand": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "uv-glass": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80",
    "combo-display": "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=600&q=80",
    "accessories": "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=600&q=80",
    "speakers": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    "repair": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80"
  };
  
  return categoryFallbacks[category] || "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80";
}

// --------------------------------------------------------------------------
// 2. MOCK DATABASE SEEDING
// --------------------------------------------------------------------------
const INITIAL_PRODUCTS = [
  // Mobiles (New)
  {
    id: 101,
    name: "Samsung Galaxy S23 Ultra 5G (Green, 12GB RAM, 256GB Storage)",
    brand: "Samsung",
    category: "mobiles",
    price: 92499,
    oldPrice: 124999,
    discount: 26,
    rating: 4.8,
    reviewsCount: 1280,
    inStock: true,
    stockCount: 8,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Samsung",
      "Model": "Galaxy S23 Ultra",
      "RAM": "12 GB",
      "Storage": "256 GB",
      "Color": "Green",
      "Primary Camera": "200 MP + 12 MP + 10 MP",
      "Battery": "5000 mAh"
    }
  },
  {
    id: 102,
    name: "Apple iPhone 15 Pro Max (Natural Titanium, 256GB Storage)",
    brand: "Apple",
    category: "mobiles",
    price: 134900,
    oldPrice: 159900,
    discount: 16,
    rating: 4.9,
    reviewsCount: 940,
    inStock: true,
    stockCount: 5,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Apple",
      "Model": "iPhone 15 Pro Max",
      "Storage": "256 GB",
      "Color": "Natural Titanium",
      "Processor": "A17 Pro Chip",
      "Camera": "48 MP Pro Camera System",
      "Weight": "221g"
    }
  },
  {
    id: 103,
    name: "OnePlus 12 5G (Flowy Emerald, 16GB RAM, 512GB Storage)",
    brand: "OnePlus",
    category: "mobiles",
    price: 64999,
    oldPrice: 69999,
    discount: 7,
    rating: 4.7,
    reviewsCount: 520,
    inStock: true,
    stockCount: 12,
    delivery: "FREE Delivery by Tuesday, 2 PM",
    specs: {
      "Brand": "OnePlus",
      "Model": "12 5G",
      "RAM": "16 GB",
      "Storage": "512 GB",
      "Color": "Flowy Emerald",
      "Processor": "Snapdragon 8 Gen 3",
      "Battery": "5400 mAh"
    }
  },
  {
    id: 104,
    name: "Redmi Note 13 Pro 5G (Coral Purple, 8GB RAM, 256GB Storage)",
    brand: "Xiaomi",
    category: "mobiles",
    price: 25999,
    oldPrice: 31999,
    discount: 19,
    rating: 4.4,
    reviewsCount: 1840,
    inStock: true,
    stockCount: 20,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Xiaomi",
      "Model": "Redmi Note 13 Pro",
      "RAM": "8 GB",
      "Storage": "256 GB",
      "Color": "Coral Purple",
      "Primary Camera": "200 MP Ultra-Clear",
      "Charging": "67W Turbo Charge"
    }
  },
  {
    id: 105,
    name: "Apple iPhone 14 Pro (Space Black, 128GB Storage)",
    brand: "Apple",
    category: "mobiles",
    price: 99999,
    oldPrice: 129999,
    discount: 23,
    rating: 4.8,
    reviewsCount: 830,
    inStock: true,
    stockCount: 6,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Apple",
      "Model": "iPhone 14 Pro",
      "Storage": "128 GB",
      "Color": "Space Black",
      "Processor": "A16 Bionic",
      "Camera": "48 MP Main Camera"
    }
  },
  {
    id: 106,
    name: "Samsung Galaxy A54 5G (Awesome Graphite, 8GB RAM, 128GB Storage)",
    brand: "Samsung",
    category: "mobiles",
    price: 35499,
    oldPrice: 41999,
    discount: 15,
    rating: 4.5,
    reviewsCount: 620,
    inStock: true,
    stockCount: 14,
    delivery: "FREE Delivery by Tuesday, 2 PM",
    specs: {
      "Brand": "Samsung",
      "Model": "Galaxy A54 5G",
      "RAM": "8 GB",
      "Storage": "128 GB",
      "Color": "Awesome Graphite",
      "Battery": "5000 mAh"
    }
  },
  {
    id: 107,
    name: "Google Pixel 8 Pro (Bay Blue, 12GB RAM, 128GB Storage)",
    brand: "Google",
    category: "mobiles",
    price: 75999,
    oldPrice: 106999,
    discount: 28,
    rating: 4.6,
    reviewsCount: 340,
    inStock: true,
    stockCount: 5,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Google",
      "Model": "Pixel 8 Pro",
      "RAM": "12 GB",
      "Storage": "128 GB",
      "Color": "Bay Blue",
      "Processor": "Google Tensor G3",
      "Camera": "50 MP + 48 MP + 48 MP Triple Camera"
    }
  },
  {
    id: 108,
    name: "OnePlus Nord CE 4 5G (Celadon Marble, 8GB RAM, 128GB Storage)",
    brand: "OnePlus",
    category: "mobiles",
    price: 24999,
    oldPrice: 26999,
    discount: 7,
    rating: 4.4,
    reviewsCount: 890,
    inStock: true,
    stockCount: 15,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "OnePlus",
      "Model": "Nord CE 4 5G",
      "RAM": "8 GB",
      "Storage": "128 GB",
      "Color": "Celadon Marble",
      "Battery": "5500 mAh",
      "Charging": "100W SUPERVOOC"
    }
  },

  // Second-Hand Mobiles
  {
    id: 201,
    name: "Apple iPhone 13 (Midnight Black, 128GB) - Superb Refurbished Condition",
    brand: "Apple",
    category: "second-hand",
    price: 35999,
    oldPrice: 59900,
    discount: 40,
    rating: 4.5,
    reviewsCount: 340,
    inStock: true,
    stockCount: 3,
    condition: "Premium (90% Battery Health)",
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Apple",
      "Model": "iPhone 13 (Refurbished)",
      "Storage": "128 GB",
      "Condition": "Grade A Premium (Like New)",
      "Battery Health": "90%",
      "Box Content": "Original Box & Cable Included",
      "Warranty": "6 Months Store Warranty"
    }
  },
  {
    id: 202,
    name: "Samsung Galaxy S21 FE 5G (Lavender, 128GB) - Excellent Condition",
    brand: "Samsung",
    category: "second-hand",
    price: 18499,
    oldPrice: 39999,
    discount: 53,
    rating: 4.2,
    reviewsCount: 180,
    inStock: true,
    stockCount: 4,
    condition: "Excellent (Minor Scratches)",
    delivery: "FREE Delivery by Tuesday, 2 PM",
    specs: {
      "Brand": "Samsung",
      "Model": "Galaxy S21 FE",
      "Storage": "128 GB",
      "Condition": "Grade B (Minor back scratches)",
      "Battery Status": "87% Capacity",
      "Accessories": "Compatible Charger & Bill",
      "Warranty": "3 Months Store Warranty"
    }
  },
  {
    id: 203,
    name: "OnePlus 10 Pro 5G (Emerald Forest, 8GB RAM, 128GB Storage) - Certified Used",
    brand: "OnePlus",
    category: "second-hand",
    price: 27999,
    oldPrice: 66999,
    discount: 58,
    rating: 4.3,
    reviewsCount: 210,
    inStock: true,
    stockCount: 2,
    condition: "Good (Fully Checked)",
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "OnePlus",
      "Model": "10 Pro (Used)",
      "RAM": "8 GB",
      "Storage": "128 GB",
      "Condition": "Tested, 100% Functional",
      "Display State": "Flawless Screen",
      "Warranty": "3 Months Store Warranty"
    }
  },
  {
    id: 204,
    name: "Apple iPhone 12 Pro (Pacific Blue, 128GB) - Certified Refurbished",
    brand: "Apple",
    category: "second-hand",
    price: 24999,
    oldPrice: 49999,
    discount: 50,
    rating: 4.3,
    reviewsCount: 190,
    inStock: true,
    stockCount: 4,
    condition: "Excellent (Minor Scratches)",
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Apple",
      "Model": "iPhone 12 Pro",
      "Storage": "128 GB",
      "Condition": "Grade A Refurbished",
      "Battery Status": "86% Health",
      "Warranty": "3 Months Store Warranty"
    }
  },
  {
    id: 205,
    name: "Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage) - Certified Refurbished",
    brand: "Samsung",
    category: "second-hand",
    price: 42999,
    oldPrice: 109999,
    discount: 60,
    rating: 4.4,
    reviewsCount: 150,
    inStock: true,
    stockCount: 3,
    condition: "Excellent (Like New)",
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Samsung",
      "Model": "Galaxy S22 Ultra (Refurbished)",
      "RAM": "12 GB",
      "Storage": "256 GB",
      "Condition": "Grade A Excellent",
      "Battery Status": "89% Health",
      "Warranty": "3 Months Store Warranty"
    }
  },

  // UV Glass
  {
    id: 301,
    name: "Premium 11D UV Curved Tempered Glass Screen Protector (with Alignment Kit)",
    brand: "New Ambika",
    category: "uv-glass",
    price: 599,
    oldPrice: 1499,
    discount: 60,
    rating: 4.7,
    reviewsCount: 4890,
    inStock: true,
    stockCount: 150,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "New Ambika Premium",
      "Type": "UV Liquid Adhesive Tempered",
      "Thickness": "0.33 mm",
      "Hardness": "9H Toughness",
      "Features": "Full Glue, Case Friendly, Ultra-Clear Touch",
      "Curing Time": "5 Minutes UV exposure"
    }
  },
  {
    id: 302,
    name: "Matte Finish UV Curved Liquid Tempered Glass (Anti-Fingerprint / Gamer Special)",
    brand: "New Ambika",
    category: "uv-glass",
    price: 699,
    oldPrice: 1799,
    discount: 61,
    rating: 4.5,
    reviewsCount: 2340,
    inStock: true,
    stockCount: 80,
    delivery: "Delivery in 2 Days",
    specs: {
      "Brand": "New Ambika Premium",
      "Finish": "Matte Anti-Glow",
      "Recommended Use": "Gaming & Outdoors",
      "Hardness": "9H Curved Edge",
      "Adhesive": "Loca Liquid Glue"
    }
  },

  // Combo Displays
  {
    id: 401,
    name: "Premium Original IPS LCD Combo Assembly Replacement Screen",
    brand: "Ambika OEM",
    category: "combo-display",
    price: 2499,
    oldPrice: 5999,
    discount: 58,
    rating: 4.3,
    reviewsCount: 1120,
    inStock: true,
    stockCount: 45,
    delivery: "FREE Delivery by Tuesday, 2 PM",
    specs: {
      "Manufacturer": "OEM Certified",
      "Resolution": "Full HD+",
      "Touch Latency": "Zero lag touch overlay",
      "Brightness": "550 nits peak",
      "In-Store Fitting": "Available at Salem Store (Additional charge ₹200)"
    }
  },
  {
    id: 402,
    name: "OEM Certified Super AMOLED Display Screen Combo Assembly",
    brand: "Ambika OEM",
    category: "combo-display",
    price: 4999,
    oldPrice: 9999,
    discount: 50,
    rating: 4.6,
    reviewsCount: 830,
    inStock: true,
    stockCount: 25,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Manufacturer": "AMOLED Certified",
      "Colors": "100% sRGB Wide gamut",
      "Fingerprint Scanner": "Supports In-Display Fingerprint",
      "Warranty": "30 Days Glass breakage warranty"
    }
  },

  // Accessories
  {
    id: 501,
    name: "Ambika 65W GaN SuperFast Multi-Port Power Adapter (Dual Type-C & Type-A)",
    brand: "Ambika Gadgets",
    category: "accessories",
    price: 1999,
    oldPrice: 3999,
    discount: 50,
    rating: 4.7,
    reviewsCount: 1430,
    inStock: true,
    stockCount: 60,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Technology": "GaN (Gallium Nitride)",
      "Wattage": "65W Max Output",
      "Ports": "2x USB-C + 1x USB-A",
      "Protections": "Short circuit, Over-temperature protection"
    }
  },
  {
    id: 502,
    name: "Braided 100W USB-C to USB-C Heavy-Duty Fast Charging Cable (2 Meter, Red)",
    brand: "Ambika Gadgets",
    category: "accessories",
    price: 399,
    oldPrice: 999,
    discount: 60,
    rating: 4.5,
    reviewsCount: 3210,
    inStock: true,
    stockCount: 300,
    delivery: "Delivery in 2 Days",
    specs: {
      "Length": "2 Meters / 6.6 Feet",
      "Material": "Braided Double-Nylon Jacket",
      "Data Speed": "480 Mbps sync",
      "Power Rating": "100W PD Compatible"
    }
  },
  {
    id: 503,
    name: "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB-C)",
    brand: "Apple",
    category: "accessories",
    price: 18900,
    oldPrice: 24900,
    discount: 24,
    rating: 4.7,
    reviewsCount: 1420,
    inStock: true,
    stockCount: 15,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Apple",
      "Model": "AirPods Pro 2",
      "Connectivity": "Bluetooth 5.3",
      "Noise Cancellation": "Active Noise Cancellation",
      "Battery Life": "Up to 6 hours listening time"
    }
  },
  {
    id: 504,
    name: "Apple MagSafe Wireless Charger (White, 15W Fast Charge)",
    brand: "Apple",
    category: "accessories",
    price: 3999,
    oldPrice: 4500,
    discount: 11,
    rating: 4.5,
    reviewsCount: 890,
    inStock: true,
    stockCount: 40,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Brand": "Apple",
      "Model": "MagSafe Charger",
      "Type": "Wireless Fast Charger",
      "Max Output": "15W",
      "Compatibility": "iPhone 12 and newer models"
    }
  },

  // Speakers
  {
    id: 601,
    name: "Ambika SonicBoom 20W Portable Bluetooth Speaker (IPX7 Waterproof, Deep Bass)",
    brand: "Ambika Gadgets",
    category: "speakers",
    price: 2499,
    oldPrice: 4999,
    discount: 50,
    rating: 4.6,
    reviewsCount: 1560,
    inStock: true,
    stockCount: 35,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Power": "20W Stereo Sound",
      "Battery Life": "12 Hours playtime",
      "Waterproof": "IPX7 certified",
      "Connectivity": "Bluetooth 5.3 + Aux"
    }
  },
  {
    id: 602,
    name: "JBL Flip 6 Portable Waterproof Bluetooth Speaker (Midnight Black, Rich Bass)",
    brand: "JBL",
    category: "speakers",
    price: 9999,
    oldPrice: 14999,
    discount: 33,
    rating: 4.7,
    reviewsCount: 2450,
    inStock: true,
    stockCount: 18,
    delivery: "FREE Delivery by Tomorrow, 10 PM",
    specs: {
      "Power": "30W 2-way Speaker System",
      "Battery Life": "12 Hours",
      "Waterproof": "IP67 Dust & Waterproof",
      "Connectivity": "Bluetooth 5.1"
    }
  },

  // Repair Services
  {
    id: 701,
    name: "Mobile USB Charging Port Replacement Service (Doorstep & Store pick-up)",
    brand: "Ambika Service",
    category: "repair",
    price: 499,
    oldPrice: 999,
    discount: 50,
    rating: 4.8,
    reviewsCount: 1210,
    inStock: true,
    stockCount: 999,
    delivery: "Service completed within 3 Hours",
    specs: {
      "Service Type": "Charging Port repair / Mic repair",
      "Location": "Ambika Salem Store or Home Service (+₹100)",
      "TAT": "3 Hours turnaround time",
      "Warranty": "3 Months service warranty"
    }
  }
];

const INITIAL_REVIEWS = [
  { name: "Karthik R.", rating: 5, date: "May 10, 2026", title: "Exactly like original display combo!", text: "My OnePlus Nord screen was completely shattered. Ambika Mobiles repaired it in just 2 hours using their certified AMOLED combo. Touch response is flawless!" },
  { name: "Meena Sundar", rating: 5, date: "April 28, 2026", title: "Amazing UV Glass Protection", text: "Got the Premium UV Curved Glass fitted for my S23 Ultra at their store. It has zero bubbles and works perfectly with the in-display fingerprint sensor." },
  { name: "Vijay Kumar", rating: 4, date: "May 15, 2026", title: "Great value Second-Hand iPhone 13", text: "Bought an iPhone 13 in 'Superb' condition. The battery health is 91% as promised, and there is barely any mark on the side. Feels brand new!" },
  { name: "Ramesh P.", rating: 5, date: "May 20, 2026", title: "Trustworthy shop", text: "I have been buying accessories and repairing all family mobiles here for 4 years. Honest prices, very fast service, friendly staff. Highly recommended." }
];

// --------------------------------------------------------------------------
// 3. STATE DECLARATION
// --------------------------------------------------------------------------
let state = {
  products: [],
  reviews: [],
  cart: [],
  orders: [],
  wishlist: [],
  currentView: 'home', // home, category, detail, cart, checkout, orders, admin
  currentCategory: 'all',
  currentFilterBrand: 'all',
  currentFilterRating: 'all',
  currentFilterPrice: 'all',
  currentSort: 'default',
  searchQuery: '',
  activeDetailProductId: null,
  activeAdminTab: 'dashboard', // dashboard, orders, products, offers, inventory, customers, settings
  adminEditProductId: null,
  wizardData: {
    brand: null,
    model: null,
    service: null,
    price: 0
  },
  siteConfig: {}
};

const BRANDS = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Vivo", "Oppo"];
const MODELS = {
  "Apple": ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15 Pro"],
  "Samsung": ["Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy A54", "Galaxy Note 20"],
  "OnePlus": ["OnePlus 9R", "OnePlus 10 Pro", "OnePlus 11", "OnePlus Nord CE 3", "OnePlus 12"],
  "Xiaomi": ["Redmi Note 11", "Redmi Note 12 Pro", "Xiaomi 13 Pro"],
  "Realme": ["Realme GT", "Realme 11 Pro", "Realme C55"],
  "Vivo": ["Vivo V27", "Vivo X90", "Vivo Y100"],
  "Oppo": ["Oppo Reno 8", "Oppo Reno 10 Pro", "Oppo F23"]
};

// --------------------------------------------------------------------------
// 4. BOOTSTRAP & SYSTEM INITS
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Load Mock DB from localStorage or seed fresh
  if (!localStorage.getItem("ambika_products")) {
    localStorage.setItem("ambika_products", JSON.stringify(INITIAL_PRODUCTS));
  }
  if (!localStorage.getItem("ambika_reviews")) {
    localStorage.setItem("ambika_reviews", JSON.stringify(INITIAL_REVIEWS));
  }
  if (!localStorage.getItem("ambika_orders")) {
    localStorage.setItem("ambika_orders", JSON.stringify([]));
  }
  if (!localStorage.getItem("ambika_cart")) {
    localStorage.setItem("ambika_cart", JSON.stringify([]));
  }
  if (!localStorage.getItem("ambika_wishlist")) {
    localStorage.setItem("ambika_wishlist", JSON.stringify([]));
  }
  if (!localStorage.getItem("ambika_site_config")) {
    const DEFAULT_SITE_CONFIG = {
      shopName: "New Ambika Mobiles",
      shopAddress: "Shop No. 12, Ambika Complex, Salem - 636001",
      shopPhone: "+91 98765 43210",
      shopEmail: "support@ambikamobiles.com",
      banner1Title: "Samsung S23 Ultra & iPhone 15 Pro",
      banner1Desc: "Upgrade to high-end mobile experiences. Shop new models with certified store warranty, cash discounts and easy exchanges.",
      banner1Image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&h=400&q=80",
      banner2Title: "UV Curved Tempered Glass",
      banner2Desc: "Experience bubbles-free high quality 11D UV Liquid Adhesive protection, tailored perfectly for Samsung Edge series & OnePlus curved displays.",
      banner2Image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&h=400&q=80",
      banner3Title: "Combo Display & Broken Glass",
      banner3Desc: "Don't let a shattered display slow you down. Order high quality LCD/AMOLED screen combos online and get professional fitting within 2 hours!",
      banner3Image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&h=400&q=80"
    };
    localStorage.setItem("ambika_site_config", JSON.stringify(DEFAULT_SITE_CONFIG));
  }
  
  state.products = JSON.parse(localStorage.getItem("ambika_products"));
  state.reviews = JSON.parse(localStorage.getItem("ambika_reviews"));
  state.orders = JSON.parse(localStorage.getItem("ambika_orders"));
  state.cart = JSON.parse(localStorage.getItem("ambika_cart"));
  state.wishlist = JSON.parse(localStorage.getItem("ambika_wishlist"));
  state.siteConfig = JSON.parse(localStorage.getItem("ambika_site_config"));
  
  updateCartBadge();
  handleMobileResponsiveSearch();
  applySiteConfig();
  
  // Render active view
  renderView();
  
  // Listen to browser resize to adjust full width layouts dynamically
  window.addEventListener('resize', handleMobileResponsiveSearch);
});

// Sync database with localStorage
function saveStateToStorage() {
  localStorage.setItem("ambika_products", JSON.stringify(state.products));
  localStorage.setItem("ambika_orders", JSON.stringify(state.orders));
  localStorage.setItem("ambika_cart", JSON.stringify(state.cart));
  localStorage.setItem("ambika_wishlist", JSON.stringify(state.wishlist));
}

function saveSiteConfig() {
  localStorage.setItem("ambika_site_config", JSON.stringify(state.siteConfig));
}

function applySiteConfig() {
  if (!state.siteConfig) return;
  
  // 1. Top Strip Address & Phone
  let stripAddr = document.getElementById("topStripAddress");
  if (stripAddr) stripAddr.innerHTML = `<i class="fas fa-map-marker-alt"></i> Store: ${state.siteConfig.shopAddress}`;
  
  let stripPhone = document.getElementById("topStripPhone");
  if (stripPhone) stripPhone.innerHTML = `<i class="fas fa-phone-alt"></i> Call Us: ${state.siteConfig.shopPhone}`;
  
  // 2. Logos (header/sidebar/footer)
  let logos = document.querySelectorAll(".shop-logo");
  logos.forEach(logo => {
    let words = state.siteConfig.shopName.split(" ");
    let lastWord = words.pop();
    let firstPart = words.join(" ");
    logo.innerHTML = `<i class="fas fa-mobile-alt"></i>${firstPart} <span>${lastWord}</span>`;
  });
  
  // 3. Footer contact details
  let footerInfo = document.getElementById("footerContactInfo");
  if (footerInfo) {
    footerInfo.innerHTML = `
      <li style="margin-bottom: 12px;">
        <strong style="color:#ffffff; display:block; font-size:13px; margin-bottom: 4px;">${state.siteConfig.shopName}</strong>
        ${state.siteConfig.shopAddress.replace(", ", "<br>")}
      </li>
      <li style="margin-bottom: 8px;"><i class="fas fa-phone-alt"></i> ${state.siteConfig.shopPhone}</li>
      <li><i class="fas fa-envelope"></i> ${state.siteConfig.shopEmail}</li>
    `;
  }
}

// Adjust mobile searches
function handleMobileResponsiveSearch() {
  let isMobile = window.innerWidth <= 768;
  let mobSearch = document.getElementById("mobileSearchWrapper");
  if (mobSearch) {
    mobSearch.style.display = isMobile ? "block" : "none";
  }
}

// Global scroll helper
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle menu overlay
function toggleSidebarMenu() {
  let menu = document.getElementById("mobileSidebarMenu");
  if (menu) {
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  }
}

// --------------------------------------------------------------------------
// 5. SHOPPING CART ENGINE
// --------------------------------------------------------------------------
function updateCartBadge() {
  let count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  
  let desktopCountBadge = document.getElementById("cartCountBadge");
  if (desktopCountBadge) desktopCountBadge.innerText = count;
  
  let mobileCountBadge = document.getElementById("mobileCartCountBadge");
  if (mobileCountBadge) mobileCountBadge.innerText = count;
}

function addToCart(productId, quantity = 1, specOptions = null) {
  let product = state.products.find(p => p.id === productId);
  if (!product) return;
  
  let cartItem = state.cart.find(item => item.product.id === productId && JSON.stringify(item.specs) === JSON.stringify(specOptions));
  
  if (cartItem) {
    cartItem.qty += quantity;
  } else {
    state.cart.push({
      product: product,
      qty: quantity,
      specs: specOptions
    });
  }
  
  saveStateToStorage();
  updateCartBadge();
  
  // Custom toast notification or popup to user
  alert(`"${product.name}" added to Cart!`);
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveStateToStorage();
  updateCartBadge();
  if (state.currentView === 'cart') {
    renderCartView();
  }
}

function adjustCartQty(index, change) {
  state.cart[index].qty += change;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveStateToStorage();
  updateCartBadge();
  if (state.currentView === 'cart') {
    renderCartView();
  }
}

// --------------------------------------------------------------------------
// 6. ROUTER STATE CONTROLLER
// --------------------------------------------------------------------------
function navigateTo(viewName) {
  state.currentView = viewName;
  scrollToTop();
  
  // Highlight active menu bar in bottom bar (mobile nav)
  let items = ["mobNavHome", "mobNavCategories", "mobNavCart", "mobNavOrders", "mobNavAccount"];
  items.forEach(id => {
    let el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  
  if (viewName === 'home') {
    let el = document.getElementById("mobNavHome");
    if (el) el.classList.add('active');
  } else if (viewName === 'category') {
    let el = document.getElementById("mobNavCategories");
    if (el) el.classList.add('active');
  } else if (viewName === 'cart') {
    let el = document.getElementById("mobNavCart");
    if (el) el.classList.add('active');
  } else if (viewName === 'orders') {
    let el = document.getElementById("mobNavOrders");
    if (el) el.classList.add('active');
  }
  
  // Render specific layout inside main content
  renderView();
}

function navigateToCategoryFilter(categoryKey, filterType = "") {
  state.currentCategory = categoryKey;
  state.currentView = 'category';
  state.searchQuery = '';
  
  if (filterType === 'wishlist') {
    state.currentFilterBrand = 'wishlist';
  } else {
    state.currentFilterBrand = 'all';
  }
  state.currentFilterPrice = 'all';
  state.currentFilterRating = 'all';
  state.currentSort = 'default';
  
  // Sync category strip styling
  let catElements = document.querySelectorAll('.cat-item');
  catElements.forEach(el => el.classList.remove('active'));
  
  // Find matching ribbon node
  catElements.forEach(el => {
    if (el.innerText.toLowerCase().includes(categoryKey.toLowerCase()) || 
       (categoryKey === 'all' && el.innerText.toLowerCase().includes('home'))) {
      el.classList.add('active');
    }
  });

  scrollToTop();
  renderView();
}

function navigateToProductDetail(productId) {
  state.activeDetailProductId = productId;
  navigateTo('detail');
}

function renderView() {
  const container = document.getElementById("mainAppContent");
  if (!container) return;
  
  switch(state.currentView) {
    case 'home':
      renderHomeView(container);
      break;
    case 'category':
      renderCategoryView(container);
      break;
    case 'detail':
      renderProductDetailView(container);
      break;
    case 'cart':
      renderCartView(container);
      break;
    case 'checkout':
      renderCheckoutView(container);
      break;
    case 'orders':
      renderOrdersView(container);
      break;
    case 'admin':
      renderAdminView(container);
      break;
    default:
      renderHomeView(container);
  }
}

// --------------------------------------------------------------------------
// 7. FRONTEND PAGE RENDERING (HOME FLOW)
// --------------------------------------------------------------------------
let sliderInterval = null;
let currentSlideIndex = 0;

function renderHomeView(container) {
  // Clear any existing carousel timer
  if (sliderInterval) clearInterval(sliderInterval);

  let html = `
    <!-- Large image banner slider -->
    <div class="hero-slider-container">
      <div class="hero-slider" id="homeSlider">
        
        <!-- Slide 1 -->
        <div class="slide">
          <img src="${state.siteConfig.banner1Image}" style="position:absolute; width:100%; height:100%; object-fit:cover; z-index:-1;" alt="">
          <div class="slide-content">
            <span class="badge badge-warning" style="align-self:flex-start; margin-bottom:10px;">PREMIUM RELEASES</span>
            <h2>${state.siteConfig.banner1Title}</h2>
            <p>${state.siteConfig.banner1Desc}</p>
            <button class="slide-btn" onclick="navigateToCategoryFilter('mobiles')">Shop New Mobiles</button>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="slide">
          <img src="${state.siteConfig.banner2Image}" style="position:absolute; width:100%; height:100%; object-fit:cover; z-index:-1;" alt="">
          <div class="slide-content">
            <span class="badge badge-success" style="align-self:flex-start; margin-bottom:10px;">PROTECT YOUR DEVICE</span>
            <h2>${state.siteConfig.banner2Title}</h2>
            <p>${state.siteConfig.banner2Desc}</p>
            <button class="slide-btn" onclick="openWizard('uv-glass')">Order UV Glass Fitting</button>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="slide">
          <img src="${state.siteConfig.banner3Image}" style="position:absolute; width:100%; height:100%; object-fit:cover; z-index:-1;" alt="">
          <div class="slide-content">
            <span class="badge badge-info" style="align-self:flex-start; margin-bottom:10px;">REPAIR SERVICES</span>
            <h2>${state.siteConfig.banner3Title}</h2>
            <p>${state.siteConfig.banner3Desc}</p>
            <button class="slide-btn" onclick="openWizard('combo')">Display Screen Combo Wizard</button>
          </div>
        </div>

      </div>
      
      <!-- Arrows -->
      <button class="slider-arrow arrow-prev" onclick="moveSlide(-1)"><i class="fas fa-chevron-left"></i></button>
      <button class="slider-arrow arrow-next" onclick="moveSlide(1)"><i class="fas fa-chevron-right"></i></button>

      <!-- Dots -->
      <div class="slider-dots" id="sliderDots">
        <span class="dot active" onclick="setSlide(0)"></span>
        <span class="dot" onclick="setSlide(1)"></span>
        <span class="dot" onclick="setSlide(2)"></span>
      </div>
    </div>

    <!-- Category Shortcuts (Circle Card row) -->
    <div class="shortcuts-section">
      <div class="container">
        <div class="shortcuts-wrapper">
          
          <div class="shortcut-card" onclick="navigateToCategoryFilter('mobiles')">
            <div class="shortcut-img-wrapper"><i class="fas fa-mobile-alt"></i></div>
            <span>New Mobiles</span>
          </div>
          
          <div class="shortcut-card" onclick="navigateToCategoryFilter('second-hand')">
            <div class="shortcut-img-wrapper"><i class="fas fa-sync-alt"></i></div>
            <span>Second Hand</span>
          </div>

          <div class="shortcut-card" onclick="openWizard('uv-glass')">
            <div class="shortcut-img-wrapper"><i class="fas fa-shield-alt"></i></div>
            <span>UV Curved</span>
          </div>

          <div class="shortcut-card" onclick="openWizard('combo')">
            <div class="shortcut-img-wrapper"><i class="fas fa-laptop-code"></i></div>
            <span>Combos</span>
          </div>

          <div class="shortcut-card" onclick="navigateToCategoryFilter('accessories')">
            <div class="shortcut-img-wrapper"><i class="fas fa-plug"></i></div>
            <span>Chargers</span>
          </div>

          <div class="shortcut-card" onclick="navigateToCategoryFilter('speakers')">
            <div class="shortcut-img-wrapper"><i class="fas fa-volume-up"></i></div>
            <span>Speakers</span>
          </div>

          <div class="shortcut-card" onclick="navigateToCategoryFilter('repair')">
            <div class="shortcut-img-wrapper"><i class="fas fa-tools"></i></div>
            <span>Repairs</span>
          </div>

        </div>
      </div>
    </div>

    <!-- MAIN BODY FLOW -->
    <div class="container">
      
      <!-- UV + Combo display configurator (WIZARD SYSTEM) -->
      <section class="home-section" id="uvComboConfiguratorSection">
        <div class="section-card" style="background: linear-gradient(to bottom, #ffffff, #f7f9fa);">
          <div class="section-header">
            <h3><i class="fas fa-cogs" style="color:var(--accent-blue); margin-right:8px;"></i>UV Glass & Combo Display Online Configurator</h3>
            <span style="font-size:12px; color:var(--text-medium); font-weight:600;"><i class="fas fa-info-circle"></i> Custom Fit Estimates</span>
          </div>
          
          <div class="wizard-layout">
            <div class="wizard-steps">
              
              <!-- Step 1: Brand & Model -->
              <div class="wizard-step-card" id="wizardStep1">
                <div class="step-title-row">
                  <span class="step-num">1</span>
                  <h4>Select Your Phone Model</h4>
                </div>
                
                <div class="checkout-form-group">
                  <label>Select Device Brand:</label>
                  <select class="checkout-input" id="wizBrandSelect" onchange="onWizardBrandChange()">
                    <option value="" disabled selected>-- Choose Phone Brand --</option>
                    ${BRANDS.map(b => `<option value="${b}">${b}</option>`).join('')}
                  </select>
                </div>

                <div class="checkout-form-group" id="wizModelWrapper" style="display:none;">
                  <label>Select Device Model:</label>
                  <select class="checkout-input" id="wizModelSelect" onchange="onWizardModelChange()">
                    <!-- Populated dynamically -->
                  </select>
                </div>
              </div>

              <!-- Step 2: Service Type Selection -->
              <div class="wizard-step-card disabled" id="wizardStep2">
                <div class="step-title-row">
                  <span class="step-num">2</span>
                  <h4>Select Required Protective Layer / Screen</h4>
                </div>
                <div class="options-grid">
                  <div class="option-box" id="optGlass" onclick="selectWizardService('uv-glass')">
                    <i class="fas fa-shield-alt"></i>
                    <h5>UV Curved Tempered</h5>
                    <p style="font-size:11px; color:var(--text-light); margin-top:4px;">Bubbles-free liquid UV installation</p>
                  </div>
                  <div class="option-box" id="optCombo" onclick="selectWizardService('combo-display')">
                    <i class="fas fa-laptop-code"></i>
                    <h5>Combo Display Panel</h5>
                    <p style="font-size:11px; color:var(--text-light); margin-top:4px;">Original LCD/AMOLED Screen assembly</p>
                  </div>
                </div>
              </div>

            </div>

            <!-- Wizard Calculator Sidebar -->
            <div class="wizard-summary-card">
              <h4 class="summary-heading">Configurator Summary</h4>
              <div id="wizardSummaryContent">
                <p style="color:var(--text-light); text-align:center; font-size:13px; padding:20px 0;">Please select phone details to see live pricing</p>
              </div>
              <button class="btn-wizard-action" id="btnWizardCart" disabled onclick="addWizardToCart()">
                <i class="fas fa-cart-plus"></i> Add Customized Service
              </button>
            </div>
          </div>
          
        </div>
      </section>

      <!-- Featured Products Grid -->
      <section class="home-section">
        <div class="section-card">
          <div class="section-header">
            <h3>Featured New Mobiles & Electronics</h3>
            <a href="#" class="see-all-link" onclick="navigateToCategoryFilter('mobiles'); return false;">See All <i class="fas fa-chevron-right" style="font-size: 10px;"></i></a>
          </div>
          <div class="product-grid">
            ${renderProductCardsHTML(state.products.filter(p => p.category === 'mobiles' || p.category === 'accessories').slice(0, 4))}
          </div>
        </div>
      </section>

      <!-- Special Offers Banner / Grid -->
      <section class="home-section">
        <div class="section-card" style="background-color: #f7f9fa; border: none; padding: 10px 0;">
          <div class="section-header">
            <h3>Special Deals & Offers</h3>
            <a href="#" class="see-all-link" onclick="navigateToCategoryFilter('offers'); return false;">View All Offers</a>
          </div>
          
          <div class="offers-row">
            <div class="offer-tile" style="background: linear-gradient(135deg, #1d976c 0%, #93f9b9 100%); color:#111111;" onclick="navigateToCategoryFilter('uv-glass')">
              <div class="offer-info">
                <span class="offer-tag" style="background-color:#111111; color:#ffffff;">FLAT 60% OFF</span>
                <h4 style="color:#111111;">UV Curved Glass Combos</h4>
                <p style="color:#333333; margin-top:4px;">Starting from ₹599. Get free UV glue installation kit today!</p>
              </div>
              <i class="fas fa-shield-alt" style="color:rgba(0,0,0,0.15); font-size: 50px;"></i>
            </div>
            
            <div class="offer-tile" style="background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);" onclick="navigateToCategoryFilter('second-hand')">
              <div class="offer-info">
                <span class="offer-tag">Refurbished Exchange</span>
                <h4>Second-Hand iPhone 13</h4>
                <p style="margin-top:4px; opacity:0.9;">Buy premium certified secondhand phone and get extra ₹1,500 exchange bonus!</p>
              </div>
              <i class="fas fa-sync-alt" style="font-size: 50px; opacity: 0.3;"></i>
            </div>

            <div class="offer-tile" style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color:#111111;" onclick="openWizard('combo')">
              <div class="offer-info">
                <span class="offer-tag" style="background-color:#111111; color:#ffffff;">STORE SPECIAL</span>
                <h4 style="color:#111111;">Free Display Service</h4>
                <p style="color:#333333; margin-top:4px;">Order combo screens online. Get zero labour charges fitting in Salem!</p>
              </div>
              <i class="fas fa-tools" style="color:rgba(0,0,0,0.15); font-size: 50px;"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Second Hand Mobile Phones Grid -->
      <section class="home-section">
        <div class="section-card">
          <div class="section-header">
            <h3>Verified Second-Hand Smart Phones</h3>
            <a href="#" class="see-all-link" onclick="navigateToCategoryFilter('second-hand'); return false;">See All <i class="fas fa-chevron-right" style="font-size:10px;"></i></a>
          </div>
          <div class="product-grid">
            ${renderProductCardsHTML(state.products.filter(p => p.category === 'second-hand').slice(0, 4))}
          </div>
        </div>
      </section>

      <!-- Popular Gadgets / Speakers Grid -->
      <section class="home-section">
        <div class="section-card">
          <div class="section-header">
            <h3>Popular Wireless Speakers & Accessories</h3>
            <a href="#" class="see-all-link" onclick="navigateToCategoryFilter('speakers'); return false;">See All Speakers</a>
          </div>
          <div class="product-grid">
            ${renderProductCardsHTML(state.products.filter(p => p.category === 'speakers' || p.category === 'accessories').slice(2, 6))}
          </div>
        </div>
      </section>

      <!-- Customer Reviews Strip -->
      <section class="home-section">
        <div class="section-card">
          <div class="section-header">
            <h3>What Our Salem Customers Say</h3>
            <span style="font-size:13px; color:var(--text-medium); font-weight:600;"><i class="fas fa-check-circle text-green"></i> 100% Verified Buyer Ratings</span>
          </div>
          
          <div class="reviews-grid">
            ${state.reviews.map(r => `
              <div class="review-card">
                <div class="review-header">
                  <span class="reviewer-name">${r.name}</span>
                  <span class="reviewer-verified"><i class="fas fa-check-circle"></i> Verified Shop Buyer</span>
                </div>
                <div class="review-stars">
                  ${Array(r.rating).fill('<i class="fas fa-star"></i>').join('')}
                  ${Array(5 - r.rating).fill('<i class="far fa-star"></i>').join('')}
                </div>
                <div class="review-title">"${r.title}"</div>
                <p class="review-desc">${r.text}</p>
                <div style="font-size: 11px; color:var(--text-light); text-align:right; margin-top:8px;">${r.date}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Contact / Store details Section -->
      <section class="home-section" id="contactSection">
        <div class="section-card">
          <div class="contact-section-inner">
            
            <div class="contact-info-panel">
              <h4>Contact New Ambika Mobiles</h4>
              <p style="color:var(--text-medium); margin-bottom:20px; font-size:13.5px;">For bulk dealer orders, urgent doorstep screen replacements, or customized UV glass quotes, feel free to call our technical experts or drop by the showroom in Salem.</p>
              
              <div class="contact-row">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Showroom Address</strong>
                  Shop No. 12, Ambika Complex, Opp. Town Bus Stand Main Road, Salem - 636001, Tamil Nadu, India.
                </div>
              </div>

              <div class="contact-row">
                <i class="fas fa-phone-alt"></i>
                <div>
                  <strong>Phone Numbers</strong>
                  +91 98765 43210 (Sales Manager)<br>
                  +91 427 2445566 (Store Landline)
                </div>
              </div>

              <div class="contact-row">
                <i class="fas fa-clock"></i>
                <div>
                  <strong>Business Hours</strong>
                  Monday - Saturday: 09:30 AM to 09:30 PM<br>
                  Sunday: 10:00 AM to 08:30 PM
                </div>
              </div>
            </div>
            
            <div class="contact-map-panel">
              <div class="map-wrapper">
                <!-- Mock Map Frame with a styled canvas overlay or neat placeholder representation -->
                <div style="width:100%; height:100%; background-color:#e5e3df; position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:15px; text-align:center;">
                  <i class="fas fa-map-marked-alt" style="font-size:45px; color:#228b22; margin-bottom:12px;"></i>
                  <strong style="font-size:15px; color:#222;">Salem Ambika Complex Map</strong>
                  <span style="font-size:12px; color:#555; margin-top:5px; max-width:280px;">Map preview showing exact showroom location on Town Main Road.</span>
                  <button onclick="alert('Google Maps navigation launched! Redirecting to Salem Main Road Complex.')" style="margin-top:15px; background-color:var(--accent-blue); color:white; border:none; padding:8px 16px; border-radius:var(--radius-md); font-weight:700; cursor:pointer;">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `;
  
  container.innerHTML = html;
  
  // Start image banner slider carousel logic
  initBannerSlider();
}

// Banner controls
function initBannerSlider() {
  currentSlideIndex = 0;
  let slider = document.getElementById("homeSlider");
  if (!slider) return;
  
  sliderInterval = setInterval(() => {
    moveSlide(1);
  }, 5000);
}

function moveSlide(dir) {
  let slider = document.getElementById("homeSlider");
  if (!slider) return;
  
  let slideCount = slider.children.length;
  currentSlideIndex = (currentSlideIndex + dir + slideCount) % slideCount;
  
  slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  
  // Dots update
  let dots = document.querySelectorAll("#sliderDots .dot");
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function setSlide(idx) {
  currentSlideIndex = idx;
  let slider = document.getElementById("homeSlider");
  if (!slider) return;
  slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  
  let dots = document.querySelectorAll("#sliderDots .dot");
  dots.forEach((dot, i) => {
    if (i === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  
  // reset timer
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
      moveSlide(1);
    }, 5000);
  }
}

// Helper to render multiple cards
function renderProductCardsHTML(productList) {
  if (productList.length === 0) {
    return `<div style="grid-column: 1/-1; text-align:center; padding:30px; font-weight:600; color:var(--text-medium);">No products found matching filters.</div>`;
  }
  
  return productList.map((p, idx) => {
    let oldPriceHTML = p.oldPrice ? `<span class="old-price">₹${p.oldPrice.toLocaleString()}</span>` : "";
    let discountHTML = p.discount ? `<span class="disc-percent">${p.discount}% off</span>` : "";
    let usedConditionHTML = p.category === 'second-hand' ? `<span class="condition-tag ${p.condition.includes('Premium') ? 'condition-premium' : ''}"><i class="fas fa-history"></i> ${p.condition.split(' ')[0]}</span>` : "";
    
    // Check if in wishlist
    let isWishlisted = state.wishlist.includes(p.id);
    let heartClass = isWishlisted ? 'fas fa-heart active' : 'far fa-heart';
    
    let starsHTML = '';
    let wholeStars = Math.floor(p.rating);
    for(let i=0; i<wholeStars; i++) starsHTML += '<i class="fas fa-star"></i>';
    if(p.rating % 1 !== 0) starsHTML += '<i class="fas fa-star-half-alt"></i>';
    let emptyStars = 5 - Math.ceil(p.rating);
    for(let i=0; i<emptyStars; i++) starsHTML += '<i class="far fa-star"></i>';
    
    let stockStatusHTML = p.inStock ? 
      `<span class="prod-availability text-green">In Stock</span>` : 
      `<span class="prod-availability text-red">Out of Stock</span>`;
      
    if (p.stockCount && p.stockCount <= 5 && p.inStock) {
      stockStatusHTML = `<span class="prod-availability text-red">Only ${p.stockCount} Left!</span>`;
    }

    return `
      <div class="product-card" onclick="navigateToProductDetail(${p.id})">
        ${usedConditionHTML}
        <i class="${heartClass} wishlist-heart" onclick="toggleWishlistItem(event, ${p.id})"></i>
        <div class="prod-img-box">
          <img src="${getProductSVG(p.category, p.id, p.name)}" alt="${p.name}" loading="lazy">
        </div>
        <div class="prod-info-box">
          <div class="prod-brand">${p.brand}</div>
          <div class="prod-name">${p.name}</div>
          
          <div class="prod-rating-row">
            <span class="rating-badge">${p.rating} <i class="fas fa-star"></i></span>
            <span class="review-count">(${p.reviewsCount.toLocaleString()})</span>
          </div>

          <div class="prod-price-row">
            <span class="curr-price">₹${p.price.toLocaleString()}</span>
            ${oldPriceHTML}
            ${discountHTML}
          </div>

          ${stockStatusHTML}
          <div class="delivery-info">${p.delivery}</div>
          
          <div class="prod-card-actions">
            <button class="btn-card-cart" onclick="event.stopPropagation(); addToCart(${p.id}, 1)">Add to Cart</button>
            <button class="btn-card-buy" onclick="event.stopPropagation(); quickBuyNow(${p.id})">Buy Now</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleWishlistItem(event, productId) {
  event.stopPropagation();
  let index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    alert("Item removed from your Wishlist!");
  } else {
    state.wishlist.push(productId);
    alert("Item added to your Wishlist!");
  }
  saveStateToStorage();
  renderView();
}

function quickBuyNow(productId) {
  let cartItem = state.cart.find(item => item.product.id === productId);
  if (!cartItem) {
    addToCart(productId, 1);
  }
  navigateTo('cart');
}

// --------------------------------------------------------------------------
// 8. INTERACTIVE UV + COMBO WIZARD CONTROLLERS
// --------------------------------------------------------------------------
function openWizard(serviceType) {
  scrollToTop();
  state.currentView = 'home';
  renderView();
  
  // Pre-fill configurator section view
  let target = document.getElementById("uvComboConfiguratorSection");
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    
    // Choose Apple by default to guide them
    let selectBrand = document.getElementById("wizBrandSelect");
    if (selectBrand) {
      selectBrand.value = "Apple";
      onWizardBrandChange();
      
      // Auto select first model
      let selectModel = document.getElementById("wizModelSelect");
      if (selectModel) {
        selectModel.value = "iPhone 13";
        onWizardModelChange();
        
        // Select service type
        let serviceKey = serviceType === 'uv-glass' ? 'uv-glass' : 'combo-display';
        selectWizardService(serviceKey);
      }
    }
  }
}

function onWizardBrandChange() {
  let brand = document.getElementById("wizBrandSelect").value;
  state.wizardData.brand = brand;
  state.wizardData.model = null;
  state.wizardData.service = null;
  state.wizardData.price = 0;
  
  // Populated models
  let modelWrapper = document.getElementById("wizModelWrapper");
  let modelSelect = document.getElementById("wizModelSelect");
  
  if (brand && MODELS[brand]) {
    modelSelect.innerHTML = `<option value="" disabled selected>-- Choose Model --</option>` + 
      MODELS[brand].map(m => `<option value="${m}">${m}</option>`).join('');
    
    modelWrapper.style.display = 'block';
    
    // Reset Step 2
    document.getElementById("wizardStep2").classList.add('disabled');
    let boxes = document.querySelectorAll(".option-box");
    boxes.forEach(b => b.classList.remove('active'));
  }
  
  updateWizardSummary();
}

function onWizardModelChange() {
  let model = document.getElementById("wizModelSelect").value;
  state.wizardData.model = model;
  state.wizardData.service = null;
  state.wizardData.price = 0;
  
  // Activate step 2
  document.getElementById("wizardStep2").classList.remove('disabled');
  
  let boxes = document.querySelectorAll(".option-box");
  boxes.forEach(b => b.classList.remove('active'));
  
  updateWizardSummary();
}

function selectWizardService(serviceType) {
  state.wizardData.service = serviceType;
  
  // Style active boxes
  let optGlass = document.getElementById("optGlass");
  let optCombo = document.getElementById("optCombo");
  
  if (serviceType === 'uv-glass') {
    optGlass.classList.add('active');
    optCombo.classList.remove('active');
  } else {
    optCombo.classList.add('active');
    optGlass.classList.remove('active');
  }
  
  // Real-time Pricing engine!
  calculateWizardPrice();
  updateWizardSummary();
}

function calculateWizardPrice() {
  let brand = state.wizardData.brand;
  let model = state.wizardData.model;
  let service = state.wizardData.service;
  
  if (!brand || !model || !service) return;
  
  let price = 0;
  
  if (service === 'uv-glass') {
    price = 599; // Base UV Tempered Price
    // Brand premium additions
    if (brand === 'Apple') price += 200;
    else if (brand === 'Samsung') price += 100;
    else if (brand === 'OnePlus') price += 100;
    
    // Model specific edge curve additions
    if (model.includes('Pro') || model.includes('Ultra') || model.includes('Edge')) {
      price += 150;
    }
  } else {
    price = 2999; // Base screen display replacement price
    // Premium brands screen costs
    if (brand === 'Apple') price += 1800;
    else if (brand === 'Samsung') price += 1400;
    else if (brand === 'OnePlus') price += 1200;
    
    if (model.includes('Pro') || model.includes('Ultra') || model.includes('AMOLED')) {
      price += 1500;
    }
  }
  
  state.wizardData.price = price;
}

function updateWizardSummary() {
  let summary = document.getElementById("wizardSummaryContent");
  let btnCart = document.getElementById("btnWizardCart");
  
  if (!state.wizardData.brand) {
    summary.innerHTML = `<p style="color:var(--text-light); text-align:center; font-size:13px; padding:20px 0;">Please select phone details to see live pricing</p>`;
    btnCart.disabled = true;
    return;
  }
  
  let brandHTML = `<div class="summary-spec-row"><span>Brand:</span><span>${state.wizardData.brand}</span></div>`;
  let modelHTML = state.wizardData.model ? `<div class="summary-spec-row"><span>Model:</span><span>${state.wizardData.model}</span></div>` : "";
  
  let serviceName = state.wizardData.service === 'uv-glass' ? 'UV Curved Tempered' : 'Combo Screen Assembly';
  let serviceHTML = state.wizardData.service ? `<div class="summary-spec-row"><span>Service:</span><span>${serviceName}</span></div>` : "";
  
  let priceHTML = state.wizardData.price > 0 ? `
    <div class="summary-price-row">
      <span>Est. Price:</span>
      <span class="text-green">₹${state.wizardData.price.toLocaleString()}</span>
    </div>
    <div style="font-size:11.5px; color:var(--text-medium); margin-bottom:10px;">
      <i class="fas fa-check"></i> Includes professional UV curing & fitting.<br>
      <i class="fas fa-shield-alt"></i> 100% Touch responsiveness guaranteed.
    </div>
  ` : "";
  
  summary.innerHTML = `
    ${brandHTML}
    ${modelHTML}
    ${serviceHTML}
    ${priceHTML}
  `;
  
  btnCart.disabled = (state.wizardData.price === 0);
}

function addWizardToCart() {
  if (state.wizardData.price === 0) return;
  
  // We need to create a temporary wizard-based customized product!
  // We add it as a highly structured item to cart
  let customId = state.wizardData.service === 'uv-glass' ? 301 : 401; // Reference base items
  let baseProduct = state.products.find(p => p.id === customId);
  
  // Custom naming based on wizard configuration
  let customizedProduct = {
    ...baseProduct,
    name: `${state.wizardData.model} Custom ${state.wizardData.service === 'uv-glass' ? 'Premium 11D UV Curved Tempered Glass' : 'Super Display Screen Combo Assembly'}`,
    price: state.wizardData.price,
    oldPrice: Math.round(state.wizardData.price * 2.2),
    discount: 55,
    delivery: "Fitted at Salem Showroom in 2 Hours or Delivered"
  };
  
  state.cart.push({
    product: customizedProduct,
    qty: 1,
    specs: {
      "Selected Device": `${state.wizardData.brand} ${state.wizardData.model}`,
      "Fitting Method": "In-Store Installation / Custom Fit"
    }
  });
  
  saveStateToStorage();
  updateCartBadge();
  alert("Custom Fitting Service added to Cart successfully!");
  
  // Reset Wizard selection
  document.getElementById("wizBrandSelect").value = "";
  document.getElementById("wizModelWrapper").style.display = 'none';
  document.getElementById("wizardStep2").classList.add('disabled');
  let boxes = document.querySelectorAll(".option-box");
  boxes.forEach(b => b.classList.remove('active'));
  state.wizardData = { brand: null, model: null, service: null, price: 0 };
  updateWizardSummary();
  
  navigateTo('cart');
}

// --------------------------------------------------------------------------
// 9. SEARCH & FILTER CONTROLLERS
// --------------------------------------------------------------------------
function executeSearch() {
  let desktopInput = document.getElementById("searchInput");
  let mobileInput = document.getElementById("mobileSearchInput");
  
  let val = desktopInput ? desktopInput.value.trim() : "";
  if (window.innerWidth <= 768 && mobileInput) {
    val = mobileInput.value.trim();
  }
  
  state.searchQuery = val;
  state.currentView = 'category';
  state.currentCategory = 'all';
  state.currentFilterBrand = 'all';
  state.currentFilterPrice = 'all';
  state.currentFilterRating = 'all';
  state.currentSort = 'default';
  
  renderView();
}

function handleSearchKeyPress(event) {
  if (event.key === 'Enter') {
    executeSearch();
  }
}

function onCategorySelectSearch() {
  let cat = document.getElementById("searchCategory").value;
  if (cat === 'all') {
    navigateToCategoryFilter('all');
  } else {
    navigateToCategoryFilter(cat);
  }
}

// --------------------------------------------------------------------------
// 10. PRODUCT CATEGORY FILTER VIEW
// --------------------------------------------------------------------------
function renderCategoryView(container) {
  // Filters data
  let filtered = [...state.products];
  
  // 1. Search Query filter
  if (state.searchQuery) {
    let q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q)
    );
  }
  
  // 2. Category tab filter
  if (state.currentCategory !== 'all') {
    if (state.currentCategory === 'offers') {
      filtered = filtered.filter(p => p.discount >= 40);
    } else {
      filtered = filtered.filter(p => p.category === state.currentCategory);
    }
  }
  
  // 3. Brand filter (sidebar)
  if (state.currentFilterBrand !== 'all') {
    if (state.currentFilterBrand === 'wishlist') {
      filtered = filtered.filter(p => state.wishlist.includes(p.id));
    } else {
      filtered = filtered.filter(p => p.brand.toLowerCase() === state.currentFilterBrand.toLowerCase());
    }
  }
  
  // 4. Rating filter (sidebar)
  if (state.currentFilterRating !== 'all') {
    let r = parseFloat(state.currentFilterRating);
    filtered = filtered.filter(p => p.rating >= r);
  }
  
  // 5. Price filter (sidebar)
  if (state.currentFilterPrice !== 'all') {
    if (state.currentFilterPrice === 'low') {
      filtered = filtered.filter(p => p.price < 2000);
    } else if (state.currentFilterPrice === 'mid') {
      filtered = filtered.filter(p => p.price >= 2000 && p.price < 20000);
    } else if (state.currentFilterPrice === 'high') {
      filtered = filtered.filter(p => p.price >= 20000);
    }
  }

  // 6. Sort logic
  if (state.currentSort !== 'default') {
    if (state.currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.currentSort === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    }
  }

  let wishlistTitle = state.currentFilterBrand === 'wishlist' ? "My Favorite Wishlist" : "";
  let pageTitle = wishlistTitle || (state.currentCategory === 'all' ? "All Categories Shop" : 
    state.currentCategory.replace('-', ' ').toUpperCase());

  let html = `
    <div class="container">
      <div class="category-page-layout filter-dropdowns-layout">
        
        <!-- TOP HORIZONTAL FILTER BAR -->
        <div class="filter-bar-container">
          <div class="filter-bar">
            
            <!-- Brand Filter Dropdown -->
            <div class="filter-dropdown-wrapper" id="dropdownBrandWrapper">
              <button class="filter-dropdown-btn" onclick="toggleFilterDropdown('Brand')">
                <span>Brand: <strong>${state.currentFilterBrand === 'all' ? 'All Brands' : (state.currentFilterBrand === 'wishlist' ? 'Wishlist' : state.currentFilterBrand)}</strong></span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-panel" id="panelBrand">
                <div class="dropdown-panel-header">
                  <span>Filter by Brand</span>
                  <button class="dropdown-reset-btn" onclick="selectFilterOption('brand', 'all')">Reset</button>
                </div>
                <div class="dropdown-options-list">
                  <label class="dropdown-option-item ${state.currentFilterBrand === 'all' ? 'active' : ''}">
                    <input type="radio" name="brand-opt" value="all" ${state.currentFilterBrand === 'all' ? 'checked' : ''} onchange="selectFilterOption('brand', 'all')">
                    <span>All Brands</span>
                  </label>
                  <label class="dropdown-option-item text-red ${state.currentFilterBrand === 'wishlist' ? 'active' : ''}">
                    <input type="radio" name="brand-opt" value="wishlist" ${state.currentFilterBrand === 'wishlist' ? 'checked' : ''} onchange="selectFilterOption('brand', 'wishlist')">
                    <span><i class="fas fa-heart" style="margin-right:4px;"></i> My Wishlist</span>
                  </label>
                  ${BRANDS.map(b => `
                    <label class="dropdown-option-item ${state.currentFilterBrand === b ? 'active' : ''}">
                      <input type="radio" name="brand-opt" value="${b}" ${state.currentFilterBrand === b ? 'checked' : ''} onchange="selectFilterOption('brand', '${b}')">
                      <span>${b}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Price Filter Dropdown -->
            <div class="filter-dropdown-wrapper" id="dropdownPriceWrapper">
              <button class="filter-dropdown-btn" onclick="toggleFilterDropdown('Price')">
                <span>Price: <strong>${state.currentFilterPrice === 'all' ? 'All Prices' : (state.currentFilterPrice === 'low' ? 'Under ₹2,000' : (state.currentFilterPrice === 'mid' ? '₹2,000 to ₹20,000' : 'Over ₹20,000'))}</strong></span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-panel" id="panelPrice">
                <div class="dropdown-panel-header">
                  <span>Filter by Price</span>
                  <button class="dropdown-reset-btn" onclick="selectFilterOption('price', 'all')">Reset</button>
                </div>
                <div class="dropdown-options-list">
                  <label class="dropdown-option-item ${state.currentFilterPrice === 'all' ? 'active' : ''}">
                    <input type="radio" name="price-opt" value="all" ${state.currentFilterPrice === 'all' ? 'checked' : ''} onchange="selectFilterOption('price', 'all')">
                    <span>All Prices</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentFilterPrice === 'low' ? 'active' : ''}">
                    <input type="radio" name="price-opt" value="low" ${state.currentFilterPrice === 'low' ? 'checked' : ''} onchange="selectFilterOption('price', 'low')">
                    <span>Under ₹2,000</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentFilterPrice === 'mid' ? 'active' : ''}">
                    <input type="radio" name="price-opt" value="mid" ${state.currentFilterPrice === 'mid' ? 'checked' : ''} onchange="selectFilterOption('price', 'mid')">
                    <span>₹2,000 to ₹20,000</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentFilterPrice === 'high' ? 'active' : ''}">
                    <input type="radio" name="price-opt" value="high" ${state.currentFilterPrice === 'high' ? 'checked' : ''} onchange="selectFilterOption('price', 'high')">
                    <span>Over ₹20,000</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Rating Filter Dropdown -->
            <div class="filter-dropdown-wrapper" id="dropdownRatingWrapper">
              <button class="filter-dropdown-btn" onclick="toggleFilterDropdown('Rating')">
                <span>Rating: <strong>${state.currentFilterRating === 'all' ? 'All Ratings' : (state.currentFilterRating + ' ★ & Up')}</strong></span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-panel" id="panelRating">
                <div class="dropdown-panel-header">
                  <span>Filter by Customer Rating</span>
                  <button class="dropdown-reset-btn" onclick="selectFilterOption('rating', 'all')">Reset</button>
                </div>
                <div class="dropdown-options-list">
                  <label class="dropdown-option-item ${state.currentFilterRating === 'all' ? 'active' : ''}">
                    <input type="radio" name="rating-opt" value="all" ${state.currentFilterRating === 'all' ? 'checked' : ''} onchange="selectFilterOption('rating', 'all')">
                    <span>Show All Ratings</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentFilterRating === '4' ? 'active' : ''}">
                    <input type="radio" name="rating-opt" value="4" ${state.currentFilterRating === '4' ? 'checked' : ''} onchange="selectFilterOption('rating', '4')">
                    <span class="dropdown-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> & Up</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentFilterRating === '3' ? 'active' : ''}">
                    <input type="radio" name="rating-opt" value="3" ${state.currentFilterRating === '3' ? 'checked' : ''} onchange="selectFilterOption('rating', '3')">
                    <span class="dropdown-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> & Up</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Sort By Dropdown -->
            <div class="filter-dropdown-wrapper sort-by-wrapper" id="dropdownSortWrapper">
              <button class="filter-dropdown-btn sort-btn" onclick="toggleFilterDropdown('Sort')">
                <span>Sort: <strong>${state.currentSort === 'default' ? 'Featured' : (state.currentSort === 'price-asc' ? 'Price: Low to High' : (state.currentSort === 'price-desc' ? 'Price: High to Low' : 'Highest Rated'))}</strong></span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-panel dropdown-panel-right" id="panelSort">
                <div class="dropdown-panel-header">
                  <span>Sort Results By</span>
                </div>
                <div class="dropdown-options-list">
                  <label class="dropdown-option-item ${state.currentSort === 'default' ? 'active' : ''}">
                    <input type="radio" name="sort-opt" value="default" ${state.currentSort === 'default' ? 'checked' : ''} onchange="selectFilterOption('sort', 'default')">
                    <span>Featured (Default)</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentSort === 'price-asc' ? 'active' : ''}">
                    <input type="radio" name="sort-opt" value="price-asc" ${state.currentSort === 'price-asc' ? 'checked' : ''} onchange="selectFilterOption('sort', 'price-asc')">
                    <span>Price: Low to High</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentSort === 'price-desc' ? 'active' : ''}">
                    <input type="radio" name="sort-opt" value="price-desc" ${state.currentSort === 'price-desc' ? 'checked' : ''} onchange="selectFilterOption('sort', 'price-desc')">
                    <span>Price: High to Low</span>
                  </label>
                  <label class="dropdown-option-item ${state.currentSort === 'rating-desc' ? 'active' : ''}">
                    <input type="radio" name="sort-opt" value="rating-desc" ${state.currentSort === 'rating-desc' ? 'checked' : ''} onchange="selectFilterOption('sort', 'rating-desc')">
                    <span>Customer Rating</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          <!-- ACTIVE FILTER CHIPS -->
          ${renderActiveFilterChipsHTML()}
        </div>

        <!-- PRODUCTS MAIN GRID -->
        <div class="category-products-container">
          <div class="section-card" style="border:1px solid var(--border-light); border-radius: var(--radius-md);">
            <div class="section-header" style="margin-bottom: 12px; padding-bottom: 8px;">
              <h3 style="font-size:16px; font-weight:700;">Results for <span style="color:var(--accent-blue);">${pageTitle}</span> (${filtered.length} products found)</h3>
              <span style="font-size:12px; color:var(--text-light); font-weight:600;"><i class="fas fa-check-circle text-green" style="margin-right:4px;"></i>Showing Verified Store Stock</span>
            </div>
            
            <div class="product-grid">
              ${renderProductCardsHTML(filtered)}
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function renderActiveFilterChipsHTML() {
  let activeChips = [];
  
  if (state.currentFilterBrand !== 'all') {
    let brandText = state.currentFilterBrand === 'wishlist' ? 'My Wishlist' : state.currentFilterBrand;
    activeChips.push(`<span class="filter-chip">Brand: ${brandText} <i class="fas fa-times-circle" onclick="selectFilterOption('brand', 'all')"></i></span>`);
  }
  
  if (state.currentFilterPrice !== 'all') {
    let priceText = state.currentFilterPrice === 'low' ? 'Under ₹2,000' : (state.currentFilterPrice === 'mid' ? '₹2,000 - ₹20,000' : 'Over ₹20,000');
    activeChips.push(`<span class="filter-chip">Price: ${priceText} <i class="fas fa-times-circle" onclick="selectFilterOption('price', 'all')"></i></span>`);
  }
  
  if (state.currentFilterRating !== 'all') {
    activeChips.push(`<span class="filter-chip">Rating: ${state.currentFilterRating}★ & Up <i class="fas fa-times-circle" onclick="selectFilterOption('rating', 'all')"></i></span>`);
  }
  
  if (state.currentSort !== 'default') {
    let sortText = state.currentSort === 'price-asc' ? 'Price: Low to High' : (state.currentSort === 'price-desc' ? 'Price: High to Low' : 'Highest Rated');
    activeChips.push(`<span class="filter-chip">Sort: ${sortText} <i class="fas fa-times-circle" onclick="selectFilterOption('sort', 'default')"></i></span>`);
  }
  
  if (activeChips.length === 0) return '';
  
  return `
    <div class="active-filters-chips-row">
      <span class="chips-label">Active Refinements:</span>
      <div class="chips-list">
        ${activeChips.join('')}
        <button class="clear-all-filters-btn" onclick="clearAllFilters()">Clear All</button>
      </div>
    </div>
  `;
}

function toggleFilterDropdown(dropdownType) {
  event.stopPropagation();
  const targetId = `dropdown${dropdownType}Wrapper`;
  const wrapper = document.getElementById(targetId);
  if (!wrapper) return;
  const isOpen = wrapper.classList.contains('open');
  
  closeAllFilterDropdowns();
  
  if (!isOpen) {
    wrapper.classList.add('open');
  }
}

function closeAllFilterDropdowns() {
  const openDropdowns = document.querySelectorAll('.filter-dropdown-wrapper.open');
  openDropdowns.forEach(dropdown => {
    dropdown.classList.remove('open');
  });
}

function selectFilterOption(type, value) {
  if (type === 'brand') state.currentFilterBrand = value;
  if (type === 'price') state.currentFilterPrice = value;
  if (type === 'rating') state.currentFilterRating = value;
  if (type === 'sort') state.currentSort = value;
  
  closeAllFilterDropdowns();
  renderView();
}

function clearAllFilters() {
  state.currentFilterBrand = 'all';
  state.currentFilterPrice = 'all';
  state.currentFilterRating = 'all';
  state.currentSort = 'default';
  
  closeAllFilterDropdowns();
  renderView();
}

// Close dropdowns on clicking outside
document.addEventListener('click', function(event) {
  const insideDropdown = event.target.closest('.filter-dropdown-wrapper');
  if (!insideDropdown) {
    closeAllFilterDropdowns();
  }
});

function setCategoryFilter(type, value) {
  if (type === 'brand') state.currentFilterBrand = value;
  if (type === 'price') state.currentFilterPrice = value;
  if (type === 'rating') state.currentFilterRating = value;
  
  renderView();
}

// --------------------------------------------------------------------------
// 11. PRODUCT DETAIL VIEW RENDER
// --------------------------------------------------------------------------
function renderProductDetailView(container) {
  let product = state.products.find(p => p.id === state.activeDetailProductId);
  if (!product) {
    container.innerHTML = `<div class="container"><div class="section-card" style="text-align:center; padding:50px;">Product not found. <button onclick="navigateTo('home')">Return Home</button></div></div>`;
    return;
  }
  
  let oldPriceHTML = product.oldPrice ? `<span class="old-price" style="font-size:15px; margin-left:10px;">M.R.P: ₹${product.oldPrice.toLocaleString()}</span>` : "";
  let discountHTML = product.discount ? `<span class="detail-discount-tag">-${product.discount}%</span>` : "";
  
  let specsHTML = "";
  if (product.specs) {
    specsHTML = `
      <h4 style="font-size:15px; font-weight:700; margin-top:25px; border-bottom:1px solid #f0f0f0; padding-bottom:8px;">Technical Details & Specifications</h4>
      <table class="spec-table">
        <tbody>
          ${Object.entries(product.specs).map(([key, val]) => `
            <tr>
              <th>${key}</th>
              <td>${val}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  let html = `
    <div class="container">
      
      <!-- Back navigation link strip -->
      <div style="font-size:12px; margin-bottom:15px; color:var(--text-medium);">
        <a href="#" onclick="navigateTo('home'); return false;">Home</a> &gt; 
        <a href="#" onclick="navigateToCategoryFilter('${product.category}'); return false;">${product.category.toUpperCase()}</a> &gt; 
        <span>${product.brand}</span>
      </div>

      <div class="detail-layout">
        
        <!-- Left: Image Box -->
        <div class="detail-left-col">
          <div class="detail-img-wrapper">
            <img src="${getProductSVG(product.category, product.id, product.name)}" alt="${product.name}">
          </div>
          
          <div style="display:flex; justify-content:center; gap:10px; font-size:11px; color:var(--text-medium);">
            <span><i class="fas fa-shield-alt"></i> 100% Genuine product</span>
            <span>|</span>
            <span><i class="fas fa-undo"></i> 7 Days replacement</span>
            <span>|</span>
            <span><i class="fas fa-handshake"></i> Verified warranty</span>
          </div>
        </div>

        <!-- Center: Specs & Info -->
        <div class="detail-mid-col">
          <div class="prod-brand" style="font-size:13px;">${product.brand} SHOP</div>
          <h2 class="detail-title">${product.name}</h2>
          
          <div class="detail-rating-row">
            <span class="rating-badge" style="padding: 3px 8px; font-size:12px;">${product.rating} <i class="fas fa-star"></i></span>
            <span class="review-count" style="font-size:13px; font-weight:600; color:var(--accent-blue);">${product.reviewsCount.toLocaleString()} ratings</span>
            <span style="color:#ddd;">|</span>
            <span style="font-size:13px; color:var(--text-medium);"><i class="fas fa-check-double text-green"></i> Salem Store Pick Available</span>
          </div>

          <div class="detail-price-box">
            <div class="flex-align-center" style="margin-bottom:8px;">
              ${discountHTML}
              <span class="curr-price" style="font-size:26px;">₹${product.price.toLocaleString()}</span>
            </div>
            <div>
              ${oldPriceHTML}
              <span style="font-size:12px; color:var(--text-light); margin-left:10px;">Inclusive of all taxes</span>
            </div>
          </div>

          <div style="margin:20px 0; font-size:13.5px; line-height:1.6;">
            <strong style="display:block; margin-bottom:5px;">Product Overview:</strong>
            <ul>
              <li style="margin-bottom:6px; list-style:inside disc;">Directly source-verified by New Ambika Mobiles Salem.</li>
              <li style="margin-bottom:6px; list-style:inside disc;">100% rigorously checked and tested parts if refurbished/second-hand.</li>
              <li style="margin-bottom:6px; list-style:inside disc;">Fully compatible with Indian cellular networks and charging outlets.</li>
              <li style="margin-bottom:6px; list-style:inside disc;">Eligible for doorstep delivery and instant fit service inside Salem town limits.</li>
            </ul>
          </div>

          ${specsHTML}
        </div>

        <!-- Right: Actions Box -->
        <div class="detail-right-col">
          <div class="buy-box-price">₹${product.price.toLocaleString()}</div>
          
          <div style="font-size:13px; margin-bottom:10px;">
            <i class="fas fa-check-circle text-green" style="font-size:14px; margin-right:4px;"></i> 
            <span class="text-green" style="font-weight:700;">In Stock & Ready</span>
          </div>
          
          <div style="font-size:12px; color:var(--text-medium); margin-bottom:12px;">
            Ordered items can be picked up or shipped immediately. Delivery by tomorrow.
          </div>

          <!-- PINCode Checker Mock -->
          <div class="delivery-pincode-box">
            <div class="pincode-label">Delivery Checker (Pincode)</div>
            <div class="pincode-input-row">
              <input type="text" class="pincode-input" id="detailPincodeInput" placeholder="e.g. 636001" maxlength="6">
              <button class="pincode-btn" onclick="checkPincodeDelivery()">Check</button>
            </div>
            <div id="pincodeMessage" style="font-size:11.5px; margin-top:8px; font-weight:600;"></div>
          </div>

          <div class="qty-select-row">
            <span>Qty:</span>
            <select class="qty-select" id="detailQtySelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button class="detail-actions-btn btn-detail-cart" onclick="addDetailToCart(${product.id})">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
          
          <button class="detail-actions-btn btn-detail-buy" onclick="buyDetailNow(${product.id})">
            <i class="fas fa-bolt"></i> Buy Now
          </button>
        </div>

      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function checkPincodeDelivery() {
  let pin = document.getElementById("detailPincodeInput").value.trim();
  let msg = document.getElementById("pincodeMessage");
  
  if (pin.length !== 6 || isNaN(pin)) {
    msg.style.color = 'var(--text-light)';
    msg.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Please enter valid 6-digit Pincode.`;
    return;
  }
  
  if (pin.startsWith("636")) {
    msg.style.color = 'var(--rating-green)';
    msg.innerHTML = `<i class="fas fa-truck"></i> Fast Delivery available! Fitted/Delivered Tomorrow, 10 PM.`;
  } else {
    msg.style.color = 'var(--text-medium)';
    msg.innerHTML = `<i class="fas fa-truck"></i> Available. Ships in 2-3 Days via courier service.`;
  }
}

function addDetailToCart(productId) {
  let qtySelect = document.getElementById("detailQtySelect");
  let qty = parseInt(qtySelect.value);
  addToCart(productId, qty);
}

function buyDetailNow(productId) {
  let qtySelect = document.getElementById("detailQtySelect");
  let qty = parseInt(qtySelect.value);
  
  let cartItem = state.cart.find(item => item.product.id === productId);
  if (!cartItem) {
    addToCart(productId, qty);
  }
  navigateTo('cart');
}

// --------------------------------------------------------------------------
// 12. SHOPPING CART PAGE RENDER
// --------------------------------------------------------------------------
function renderCartView(container) {
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="container">
        <div class="cart-items-panel empty-cart-view">
          <i class="fas fa-shopping-basket"></i>
          <h4>Your Shopping Cart is Empty</h4>
          <p style="color:var(--text-medium); font-size:13px;">Fill your basket with high-quality mobiles, curved UV protection or accessories today!</p>
          <a href="#" class="btn-shop-now" onclick="navigateTo('home'); return false;">Shop Daily Deals Now</a>
        </div>
      </div>
    `;
    return;
  }

  let totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  let originalTotalSum = state.cart.reduce((sum, item) => sum + ((item.product.oldPrice || item.product.price) * item.qty), 0);
  let finalTotalSum = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
  let discountSaved = originalTotalSum - finalTotalSum;

  let itemsHTML = state.cart.map((item, index) => {
    let oldPriceHTML = item.product.oldPrice ? `<div class="cart-item-price-old">₹${(item.product.oldPrice * item.qty).toLocaleString()}</div>` : "";
    let specsHTML = "";
    
    if (item.specs) {
      specsHTML = `<div class="cart-item-spec">` + 
        Object.entries(item.specs).map(([k, v]) => `<strong>${k}:</strong> ${v}`).join(' | ') + 
        `</div>`;
    }

    return `
      <div class="cart-item-row">
        <!-- Image -->
        <div class="cart-item-img">
          <img src="${getProductSVG(item.product.category, item.product.id, item.product.name)}" alt="${item.product.name}">
        </div>
        
        <!-- Info Details -->
        <div class="cart-item-info">
          <h4><a href="#" onclick="navigateToProductDetail(${item.product.id}); return false;">${item.product.name}</a></h4>
          <div style="font-size:12px; color:var(--text-medium); margin-bottom:8px;">Seller: New Ambika Mobiles Salem</div>
          ${specsHTML}
          
          <div class="cart-item-actions">
            <!-- Qty selectors -->
            <div style="display:flex; align-items:center; gap:8px;">
              <button class="cart-qty-btn" onclick="adjustCartQty(${index}, -1)">-</button>
              <span class="cart-item-qty">${item.qty}</span>
              <button class="cart-qty-btn" onclick="adjustCartQty(${index}, 1)">+</button>
            </div>
            
            <span style="color:#ddd;">|</span>
            <span class="cart-remove-link" onclick="removeFromCart(${index})"><i class="fas fa-trash-alt"></i> Delete</span>
          </div>
        </div>

        <!-- Price -->
        <div class="cart-item-price">
          <div class="cart-item-price-val">₹${(item.product.price * item.qty).toLocaleString()}</div>
          ${oldPriceHTML}
        </div>
      </div>
    `;
  }).join('');

  let html = `
    <div class="container">
      <h2 style="font-size:22px; font-weight:700; margin-bottom:20px;"><i class="fas fa-shopping-cart" style="color:var(--accent-blue); margin-right:10px;"></i>Shopping Cart</h2>
      
      <div class="cart-layout">
        
        <!-- List of items -->
        <div class="cart-items-panel">
          <div class="justify-between" style="border-bottom:1px solid var(--border-light); padding-bottom:10px; font-weight:600; color:var(--text-medium);">
            <span>Items List</span>
            <span>Price</span>
          </div>
          
          ${itemsHTML}
          
          <div style="text-align:right; font-size:14px; font-weight:700; border-top:1px solid var(--border-light); padding-top:15px; margin-top:15px;">
            Subtotal (${totalItemsCount} item${totalItemsCount > 1 ? 's' : ''}): 
            <span style="font-size:18px; color:var(--text-dark);">₹${finalTotalSum.toLocaleString()}</span>
          </div>
        </div>

        <!-- Pricing Summary Box (Amazon Style) -->
        <div class="cart-summary-card">
          <h4 class="summary-title">Price Details</h4>
          
          <div class="summary-row">
            <span>Price (${totalItemsCount} item${totalItemsCount > 1 ? 's' : ''}):</span>
            <span>₹${originalTotalSum.toLocaleString()}</span>
          </div>
          
          <div class="summary-row">
            <span>Discount:</span>
            <span class="text-green">-₹${discountSaved.toLocaleString()}</span>
          </div>

          <div class="summary-row">
            <span>Delivery Charges:</span>
            <span class="text-green">FREE</span>
          </div>

          <div class="summary-row total">
            <span>Total Amount:</span>
            <span>₹${finalTotalSum.toLocaleString()}</span>
          </div>
          
          <div style="background-color:#e8f5e9; color:#2e7d32; font-size:12.5px; font-weight:700; border-radius:var(--radius-sm); padding:10px; text-align:center; margin-bottom:15px;">
            <i class="fas fa-tags"></i> You will save ₹${discountSaved.toLocaleString()} on this order!
          </div>

          <button class="btn-checkout" onclick="navigateTo('checkout')">
            Proceed to Buy (${totalItemsCount} item${totalItemsCount > 1 ? 's' : ''})
          </button>
        </div>

      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// --------------------------------------------------------------------------
// 13. CHECKOUT WORKFLOW VIEW RENDER
// --------------------------------------------------------------------------
function renderCheckoutView(container) {
  if (state.cart.length === 0) {
    navigateTo('cart');
    return;
  }

  let finalTotalSum = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);

  let html = `
    <div class="container">
      <h2 style="font-size:22px; font-weight:700; margin-bottom:20px;"><i class="fas fa-shield-alt" style="color:var(--accent-orange); margin-right:10px;"></i>Secure Checkout</h2>
      
      <div class="checkout-layout">
        
        <!-- Forms panel -->
        <div class="checkout-steps-panel">
          
          <!-- Delivery Address -->
          <div style="border-bottom:1px solid var(--border-light); padding-bottom:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:700; margin-bottom:15px;"><i class="fas fa-map-marker-alt" style="color:var(--accent-blue); margin-right:8px;"></i>1. Delivery Address</h4>
            
            <form id="checkoutAddressForm">
              <div class="checkout-grid-2">
                <div class="checkout-form-group">
                  <label for="checkName">Full Name</label>
                  <input type="text" id="checkName" class="checkout-input" value="Ramesh Kumar" required>
                </div>
                <div class="checkout-form-group">
                  <label for="checkPhone">Mobile Number (10 digits)</label>
                  <input type="text" id="checkPhone" class="checkout-input" value="9876543210" maxlength="10" required>
                </div>
              </div>

              <div class="checkout-form-group">
                <label for="checkAddress">Flat, House no., Building, Apartment</label>
                <input type="text" id="checkAddress" class="checkout-input" value="Plot 45, Salem Main Road" required>
              </div>

              <div class="checkout-grid-2">
                <div class="checkout-form-group">
                  <label for="checkCity">Town/City</label>
                  <input type="text" id="checkCity" class="checkout-input" value="Salem" required>
                </div>
                <div class="checkout-form-group">
                  <label for="checkPin">Pincode</label>
                  <input type="text" id="checkPin" class="checkout-input" value="636001" maxlength="6" required>
                </div>
              </div>
            </form>
          </div>

          <!-- Payment Options -->
          <div>
            <h4 style="font-size:16px; font-weight:700; margin-bottom:15px;"><i class="fas fa-credit-card" style="color:var(--accent-blue); margin-right:8px;"></i>2. Select Payment Method</h4>
            
            <div class="checkout-radio-label active" onclick="selectCheckoutPayment('cod')">
              <input type="radio" name="payment-method" id="payCOD" checked>
              <div>
                <div>Cash on Delivery (COD) / Shop Pick-up</div>
                <span style="font-weight:normal; font-size:11.5px; color:var(--text-medium);">Pay at showroom or home delivery cash/UPI after check.</span>
              </div>
            </div>

            <div class="checkout-radio-label" onclick="selectCheckoutPayment('upi')">
              <input type="radio" name="payment-method" id="payUPI">
              <div>
                <div>Scan UPI Code (Pay Immediately)</div>
                <span style="font-weight:normal; font-size:11.5px; color:var(--text-medium);">Secure digital UPI payments via PhonePe, GPay or Paytm.</span>
              </div>
            </div>
            
            <div id="upiQRBox" style="display:none; text-align:center; padding:15px; border:1px dashed var(--accent-blue); border-radius:var(--radius-md); margin-top:10px; margin-bottom:10px; background-color:#f5faff;">
              <i class="fas fa-qrcode" style="font-size:40px; color:var(--text-dark); margin-bottom:6px;"></i>
              <div style="font-weight:700; font-size:13px; color:var(--accent-blue);">UPI ID: ambikamobiles@okaxis</div>
              <p style="font-size:11px; color:var(--text-medium); margin-top:2px;">Scan and pay ₹${finalTotalSum.toLocaleString()} then enter reference ID.</p>
              <input type="text" class="checkout-input" style="max-width:240px; text-align:center; margin-top:8px; font-size:12px; padding:5px;" placeholder="Enter 12 Digit Transaction Ref ID">
            </div>

          </div>

        </div>

        <!-- Checkout summary sidebar -->
        <div class="cart-summary-card">
          <h4 class="summary-title">Order Review</h4>
          
          <div class="summary-row">
            <span>Order Value:</span>
            <span>₹${finalTotalSum.toLocaleString()}</span>
          </div>

          <div class="summary-row">
            <span>Shipping:</span>
            <span class="text-green">FREE</span>
          </div>

          <div class="summary-row total" style="margin-bottom: 20px;">
            <span>Order Total:</span>
            <span>₹${finalTotalSum.toLocaleString()}</span>
          </div>

          <button class="btn-wizard-action" style="background-color: var(--accent-orange);" onclick="executePlaceOrder()">
            <i class="fas fa-check-circle"></i> Place Order Now
          </button>
        </div>

      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function selectCheckoutPayment(mode) {
  let payCOD = document.getElementById("payCOD");
  let payUPI = document.getElementById("payUPI");
  let upiQRBox = document.getElementById("upiQRBox");
  
  // Update radios visually
  let labels = document.querySelectorAll(".checkout-radio-label");
  labels.forEach(l => l.classList.remove('active'));
  
  if (mode === 'cod') {
    if (payCOD) payCOD.checked = true;
    labels[0].classList.add('active');
    if (upiQRBox) upiQRBox.style.display = 'none';
  } else {
    if (payUPI) payUPI.checked = true;
    labels[1].classList.add('active');
    if (upiQRBox) upiQRBox.style.display = 'block';
  }
}

function executePlaceOrder() {
  let checkName = document.getElementById("checkName").value.trim();
  let checkPhone = document.getElementById("checkPhone").value.trim();
  let checkAddress = document.getElementById("checkAddress").value.trim();
  let checkCity = document.getElementById("checkCity").value.trim();
  let checkPin = document.getElementById("checkPin").value.trim();
  
  if (!checkName || !checkPhone || !checkAddress || !checkCity || !checkPin) {
    alert("Please complete the delivery address form fields.");
    return;
  }
  
  if (checkPhone.length !== 10 || isNaN(checkPhone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  let paymentMethod = document.getElementById("payCOD").checked ? "Cash on Delivery" : "UPI Payment";
  let finalTotalSum = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
  
  // Create orders
  let newOrder = {
    orderId: "AMB-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    status: 'Pending', // Pending, Packed, Shipped, Delivered
    paymentMethod: paymentMethod,
    address: `${checkAddress}, ${checkCity} - ${checkPin}`,
    phone: checkPhone,
    customerName: checkName,
    items: [...state.cart],
    total: finalTotalSum
  };
  
  state.orders.push(newOrder);
  
  // Deduct stock inventory dynamically!
  state.cart.forEach(cartItem => {
    let p = state.products.find(prod => prod.id === cartItem.product.id);
    if (p && p.stockCount) {
      p.stockCount = Math.max(0, p.stockCount - cartItem.qty);
      if (p.stockCount === 0) p.inStock = false;
    }
  });

  // Empty cart
  state.cart = [];
  
  saveStateToStorage();
  updateCartBadge();
  
  alert(`Congratulations! Your order ${newOrder.orderId} has been successfully placed.`);
  navigateTo('orders');
}

// --------------------------------------------------------------------------
// 14. CUSTOMER ORDERS TRACKER VIEW RENDER
// --------------------------------------------------------------------------
function renderOrdersView(container) {
  if (state.orders.length === 0) {
    container.innerHTML = `
      <div class="container">
        <div class="cart-items-panel empty-cart-view">
          <i class="fas fa-box-open"></i>
          <h4>No Orders Found</h4>
          <p style="color:var(--text-medium); font-size:13px;">You have not placed any orders yet. Place an order to start tracking!</p>
          <a href="#" class="btn-shop-now" onclick="navigateTo('home'); return false;">Shop Mobiles & UV Glass</a>
        </div>
      </div>
    `;
    return;
  }

  let html = `
    <div class="container">
      <h2 style="font-size:22px; font-weight:700; margin-bottom:20px;"><i class="fas fa-box" style="color:var(--accent-blue); margin-right:10px;"></i>Your Orders</h2>
      
      <div class="orders-list">
        ${state.orders.map(order => {
          let dotColorClass = order.status.toLowerCase();
          
          return `
            <div class="order-tracker-card">
              <!-- Header info strip -->
              <div class="order-card-header">
                <div>
                  <span>ORDER PLACED</span><br>
                  <strong>${order.date}</strong>
                </div>
                <div>
                  <span>TOTAL</span><br>
                  <strong>₹${order.total.toLocaleString()}</strong>
                </div>
                <div>
                  <span>SHIP TO</span><br>
                  <strong>${order.customerName}</strong>
                </div>
                <div style="margin-left:auto; text-align:right;">
                  <span>ORDER ID: ${order.orderId}</span><br>
                  <strong>${order.paymentMethod}</strong>
                </div>
              </div>

              <!-- Items list inside order -->
              <div style="display:flex; flex-direction:column; gap:15px;">
                ${order.items.map(item => `
                  <div class="order-card-body">
                    <!-- Image -->
                    <div class="order-item-img">
                      <img src="${getProductSVG(item.product.category, item.product.id, item.product.name)}" alt="${item.product.name}">
                    </div>
                    
                    <!-- Title and info -->
                    <div>
                      <h4 style="font-size:15px; font-weight:600; margin-bottom:4px;">${item.product.name}</h4>
                      <p style="font-size:12.5px; color:var(--text-medium);">Qty: ${item.qty} | Fitting/Delivery included.</p>
                      <p style="font-size:12px; color:var(--text-light); margin-top:2px;">Shipped from: New Ambika Mobiles Salem Warehouse</p>
                    </div>

                    <!-- Tracker Status column -->
                    <div class="order-status-col">
                      <div class="status-indicator">
                        <span class="status-dot ${dotColorClass}"></span>
                        <span>${order.status}</span>
                      </div>
                      <div style="font-size:11.5px; color:var(--text-medium); margin-top:4px;">
                        ${getOrderStatusTrackingText(order.status)}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).reverse().join('')}
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function getOrderStatusTrackingText(status) {
  if (status === 'Pending') return "Order received by Salem desk, waiting processing.";
  if (status === 'Packed') return "Item packed & ready for fitting/courier dispatch.";
  if (status === 'Shipped') return "Dispatched. Out for delivery in Salem region.";
  if (status === 'Delivered') return "Package handed over safely. Thank you!";
  return "";
}

// --------------------------------------------------------------------------
// 15. SELLER CENTRAL (ADMIN PANEL) UX RENDER
// --------------------------------------------------------------------------
function renderAdminView(container) {
  let html = `
    <div class="container">
      <div class="admin-layout">
        
        <!-- Amazon style Seller Central Sidebar -->
        <aside class="admin-sidebar">
          <div class="admin-sidebar-header">
            <h4>Seller Central</h4>
            <p>New Ambika Mobiles Portal</p>
          </div>
          
          <div class="admin-menu-item ${state.activeAdminTab === 'dashboard' ? 'active' : ''}" onclick="setAdminTab('dashboard')">
            <i class="fas fa-chart-line"></i> Dashboard Metrics
          </div>
          <div class="admin-menu-item ${state.activeAdminTab === 'orders' ? 'active' : ''}" onclick="setAdminTab('orders')">
            <i class="fas fa-boxes"></i> Orders Manager
          </div>
          <div class="admin-menu-item ${state.activeAdminTab === 'products' ? 'active' : ''}" onclick="setAdminTab('products')">
            <i class="fas fa-mobile-alt"></i> Catalog Products
          </div>
          <div class="admin-menu-item ${state.activeAdminTab === 'inventory' ? 'active' : ''}" onclick="setAdminTab('inventory')">
            <i class="fas fa-warehouse"></i> Inventory & Stock
          </div>
          <div class="admin-menu-item ${state.activeAdminTab === 'customers' ? 'active' : ''}" onclick="setAdminTab('customers')">
            <i class="fas fa-comments"></i> Customer Inquiries
          </div>
          <div class="admin-menu-item ${state.activeAdminTab === 'settings' ? 'active' : ''}" onclick="setAdminTab('settings')">
            <i class="fas fa-sliders-h"></i> Portal Settings
          </div>
        </aside>

        <!-- Dynamic Admin Central Content Panels -->
        <main class="admin-content-card" id="adminContentPanel">
          <!-- Rendered dynamically -->
        </main>

      </div>
    </div>
  `;
  
  container.innerHTML = html;
  renderAdminTabContent();
}

function setAdminTab(tabName) {
  state.activeAdminTab = tabName;
  renderView();
}

function renderAdminTabContent() {
  const panel = document.getElementById("adminContentPanel");
  if (!panel) return;
  
  switch(state.activeAdminTab) {
    case 'dashboard':
      renderAdminDashboard(panel);
      break;
    case 'orders':
      renderAdminOrdersManager(panel);
      break;
    case 'products':
      renderAdminProductsCatalog(panel);
      break;
    case 'inventory':
      renderAdminInventory(panel);
      break;
    case 'customers':
      renderAdminInquiries(panel);
      break;
    case 'settings':
      renderAdminSettings(panel);
      break;
    default:
      renderAdminDashboard(panel);
  }
}

// Sub-Tab 1: Dashboard Sales Metrics
function renderAdminDashboard(panel) {
  let totalRevenue = state.orders.reduce((sum, o) => sum + o.total, 0);
  let totalOrdersCount = state.orders.length;
  let catalogCount = state.products.length;
  let outOfStockAlerts = state.products.filter(p => !p.inStock || (p.stockCount && p.stockCount <= 5)).length;

  panel.innerHTML = `
    <h3 style="font-size:18px; font-weight:700; border-bottom:1px solid #f0f0f0; padding-bottom:10px; margin-bottom:20px;">Seller Dashboard Overview</h3>
    
    <!-- Metrics card widget row -->
    <div class="admin-metrics-grid">
      <div class="admin-metric-card">
        <div class="metric-info">
          <h5>Total Revenue</h5>
          <h3>₹${totalRevenue.toLocaleString()}</h3>
        </div>
        <div class="metric-icon-box sales"><i class="fas fa-rupee-sign"></i></div>
      </div>
      
      <div class="admin-metric-card">
        <div class="metric-info">
          <h5>Store Orders</h5>
          <h3>${totalOrdersCount}</h3>
        </div>
        <div class="metric-icon-box orders"><i class="fas fa-shopping-basket"></i></div>
      </div>

      <div class="admin-metric-card">
        <div class="metric-info">
          <h5>Catalog Items</h5>
          <h3>${catalogCount}</h3>
        </div>
        <div class="metric-icon-box products"><i class="fas fa-tags"></i></div>
      </div>

      <div class="admin-metric-card">
        <div class="metric-info">
          <h5>Stock Alerts</h5>
          <h3 class="${outOfStockAlerts > 0 ? 'text-red' : ''}">${outOfStockAlerts}</h3>
        </div>
        <div class="metric-icon-box stock"><i class="fas fa-exclamation-triangle"></i></div>
      </div>
    </div>

    <!-- Quick action links -->
    <div class="checkout-steps-panel" style="border: 1px solid var(--border-light); margin-top:20px; background-color:#fafafa;">
      <h4 style="font-size:14px; font-weight:700; margin-bottom:10px;">Quick Store Manager Operations</h4>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn-admin-add" onclick="openAdminAddProductModal()"><i class="fas fa-plus-circle"></i> Add New Product to Catalog</button>
        <button class="btn-admin-edit" onclick="setAdminTab('orders')"><i class="fas fa-shipping-fast"></i> Process Pending Orders (${state.orders.filter(o => o.status === 'Pending').length})</button>
        <button class="btn-admin-edit" onclick="alert('Mock store database reset to factory seeding successfully!'); localStorage.clear(); location.reload();"><i class="fas fa-sync-alt"></i> Reset Seeding Data</button>
      </div>
    </div>
  `;
}

// Sub-Tab 2: Orders Manager
function renderAdminOrdersManager(panel) {
  let pendingOrders = state.orders.filter(o => o.status === 'Pending').length;
  
  let ordersHTML = state.orders.map(order => {
    let itemsTitleList = order.items.map(item => `${item.product.name} (x${item.qty})`).join(', ');
    
    return `
      <tr>
        <td><strong>${order.orderId}</strong></td>
        <td>${order.date}</td>
        <td>
          <div style="font-weight:600;">${order.customerName}</div>
          <div style="font-size:11.5px; color:var(--text-medium);">${order.phone} | ${order.address}</div>
        </td>
        <td><div style="max-width:250px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${itemsTitleList}">${itemsTitleList}</div></td>
        <td>₹${order.total.toLocaleString()}</td>
        <td>
          <select class="admin-select-status" onchange="changeAdminOrderStatus('${order.orderId}', this.value)">
            <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Packed" ${order.status === 'Packed' ? 'selected' : ''}>Packed</option>
            <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
            <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
          </select>
        </td>
      </tr>
    `;
  }).reverse().join('');

  panel.innerHTML = `
    <div class="admin-table-controls">
      <h3 style="font-size:16px; font-weight:700; margin:0;">Seller Orders Manager Panel (${state.orders.length} orders)</h3>
      <span class="badge badge-warning">${pendingOrders} Pending Actions</span>
    </div>

    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer & Contact Address</th>
            <th>Ordered Products</th>
            <th>Total Amount</th>
            <th>Status (Actions)</th>
          </tr>
        </thead>
        <tbody>
          ${state.orders.length === 0 ? `<tr><td colspan="6" style="text-align:center; padding:30px; font-weight:600;">No orders received yet from Salem customers.</td></tr>` : ordersHTML}
        </tbody>
      </table>
    </div>
  `;
}

function changeAdminOrderStatus(orderId, newStatus) {
  let order = state.orders.find(o => o.orderId === orderId);
  if (order) {
    order.status = newStatus;
    saveStateToStorage();
    alert(`Order ${orderId} status changed to "${newStatus}"! Notification triggered.`);
    renderView();
  }
}

// Sub-Tab 3: Catalog Products (CRUD catalog)
function renderAdminProductsCatalog(panel) {
  let listHTML = state.products.map(p => {
    return `
      <tr>
        <td><img src="${getProductSVG(p.category, p.id, p.name)}" class="admin-table-img" alt=""></td>
        <td><strong>${p.brand}</strong></td>
        <td><div style="font-weight:600; max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${p.name}</div></td>
        <td><span class="badge badge-info">${p.category.toUpperCase()}</span></td>
        <td>₹${p.price.toLocaleString()}</td>
        <td>${p.inStock ? `<span class="text-green">Yes (${p.stockCount || 'N/A'})</span>` : `<span class="text-red">No (0)</span>`}</td>
        <td>
          <div class="admin-actions-cell">
            <button class="btn-admin-edit" onclick="openAdminEditProductModal(${p.id})">Edit</button>
            <button class="btn-admin-delete" onclick="deleteAdminProduct(${p.id})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).reverse().join('');

  panel.innerHTML = `
    <div class="admin-table-controls">
      <h3 style="font-size:16px; font-weight:700; margin:0;">Store Catalog Products (${state.products.length} items)</h3>
      <button class="btn-admin-add" onclick="openAdminAddProductModal()"><i class="fas fa-plus"></i> Add New Product</button>
    </div>

    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Brand</th>
            <th>Product Title Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>In Stock (Qty)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${listHTML}
        </tbody>
      </table>
    </div>
  `;
}

function deleteAdminProduct(productId) {
  if (confirm("Are you sure you want to permanently delete this product from the showroom catalog?")) {
    let index = state.products.findIndex(p => p.id === productId);
    if (index > -1) {
      state.products.splice(index, 1);
      saveStateToStorage();
      alert("Product deleted from database catalog successfully.");
      renderView();
    }
  }
}

// CRUD Modal Popups
function openAdminAddProductModal() {
  state.adminEditProductId = null;
  renderProductFormModal();
}

function openAdminEditProductModal(productId) {
  state.adminEditProductId = productId;
  renderProductFormModal();
}

function renderProductFormModal() {
  let modal = document.getElementById("loginModal");
  if (!modal) return;
  
  let product = null;
  let title = "Add New Store Product";
  
  if (state.adminEditProductId) {
    product = state.products.find(p => p.id === state.adminEditProductId);
    title = "Edit Product Details";
  }
  
  let modalTitle = document.getElementById("loginModalTitle");
  modalTitle.innerHTML = `<i class="fas fa-edit" style="color:var(--accent-orange); margin-right:8px;"></i>${title}`;
  
  // Custom form HTML inject inside login modal layout
  let content = `
    <div class="modal-header">
      <h4><i class="fas fa-edit" style="color:var(--accent-orange); margin-right:8px;"></i>${title}</h4>
      <button class="modal-close-btn" onclick="closeLoginModal()">&times;</button>
    </div>
    <form onsubmit="handleProductFormSubmit(event)">
      <div class="checkout-form-group">
        <label>Product Category</label>
        <select class="checkout-input" id="formCategory" required>
          <option value="mobiles" ${product && product.category === 'mobiles' ? 'selected' : ''}>New Mobiles</option>
          <option value="second-hand" ${product && product.category === 'second-hand' ? 'selected' : ''}>Second-Hand Mobiles</option>
          <option value="uv-glass" ${product && product.category === 'uv-glass' ? 'selected' : ''}>UV Glass</option>
          <option value="combo-display" ${product && product.category === 'combo-display' ? 'selected' : ''}>Combo Screen Displays</option>
          <option value="accessories" ${product && product.category === 'accessories' ? 'selected' : ''}>Accessories</option>
          <option value="speakers" ${product && product.category === 'speakers' ? 'selected' : ''}>Speakers</option>
          <option value="repair" ${product && product.category === 'repair' ? 'selected' : ''}>Repair Services</option>
        </select>
      </div>

      <div class="checkout-grid-2">
        <div class="checkout-form-group">
          <label>Brand Name</label>
          <input type="text" class="checkout-input" id="formBrand" value="${product ? product.brand : ''}" placeholder="e.g. Apple" required>
        </div>
        <div class="checkout-form-group">
          <label>Product Ratings (1.0 to 5.0)</label>
          <input type="number" step="0.1" class="checkout-input" id="formRating" value="${product ? product.rating : '4.5'}" min="1" max="5" required>
        </div>
      </div>

      <div class="checkout-form-group">
        <label>Product Title (Name)</label>
        <input type="text" class="checkout-input" id="formName" value="${product ? product.name : ''}" placeholder="Enter full specifications name" required>
      </div>

      <div class="checkout-grid-2">
        <div class="checkout-form-group">
          <label>Selling Price (₹)</label>
          <input type="number" class="checkout-input" id="formPrice" value="${product ? product.price : ''}" placeholder="Selling Price" required>
        </div>
        <div class="checkout-form-group">
          <label>List Price (MRP M.R.P)</label>
          <input type="number" class="checkout-input" id="formOldPrice" value="${product ? (product.oldPrice || '') : ''}" placeholder="Original Price M.R.P">
        </div>
      </div>

      <div class="checkout-grid-2">
        <div class="checkout-form-group">
          <label>Inventory Qty (Stock)</label>
          <input type="number" class="checkout-input" id="formStockCount" value="${product ? (product.stockCount || '10') : '10'}" required>
        </div>
        <div class="checkout-form-group">
          <label>Condition Tag (Used)</label>
          <input type="text" class="checkout-input" id="formCondition" value="${product ? (product.condition || '') : ''}" placeholder="e.g. Premium (90% Battery)">
        </div>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn-modal-cancel" onclick="closeLoginModal()">Cancel</button>
        <button type="submit" class="btn-modal-submit">Save Settings</button>
      </div>
    </form>
  `;
  
  modal.querySelector(".admin-modal-card").innerHTML = content;
  modal.style.display = 'flex';
}

function handleProductFormSubmit(event) {
  event.preventDefault();
  
  let cat = document.getElementById("formCategory").value;
  let brand = document.getElementById("formBrand").value.trim();
  let rating = parseFloat(document.getElementById("formRating").value);
  let name = document.getElementById("formName").value.trim();
  let price = parseInt(document.getElementById("formPrice").value);
  let oldPrice = parseInt(document.getElementById("formOldPrice").value) || null;
  let stockCount = parseInt(document.getElementById("formStockCount").value);
  let condition = document.getElementById("formCondition").value.trim();
  
  let discount = null;
  if (oldPrice && oldPrice > price) {
    discount = Math.round(((oldPrice - price) / oldPrice) * 100);
  }

  if (state.adminEditProductId) {
    // Edit existing product catalog item
    let index = state.products.findIndex(p => p.id === state.adminEditProductId);
    if (index > -1) {
      state.products[index] = {
        ...state.products[index],
        category: cat,
        brand: brand,
        rating: rating,
        name: name,
        price: price,
        oldPrice: oldPrice,
        discount: discount,
        stockCount: stockCount,
        inStock: stockCount > 0,
        condition: condition || undefined
      };
      alert("Product details updated successfully!");
    }
  } else {
    // Add new product catalog item
    let newId = state.products.reduce((max, p) => p.id > max ? p.id : max, 0) + 1;
    let newProduct = {
      id: newId,
      name: name,
      brand: brand,
      category: cat,
      price: price,
      oldPrice: oldPrice,
      discount: discount,
      rating: rating,
      reviewsCount: Math.floor(10 + Math.random() * 50),
      inStock: stockCount > 0,
      stockCount: stockCount,
      condition: condition || undefined,
      delivery: "FREE Delivery by Tomorrow, 10 PM",
      specs: {
        "Brand": brand,
        "Category": cat
      }
    };
    state.products.push(newProduct);
    alert("New product added to catalog successfully!");
  }
  
  saveStateToStorage();
  closeLoginModal();
  renderView();
}

// Sub-Tab 4: Inventory levels & alerts
function renderAdminInventory(panel) {
  let lowStockList = state.products.map(p => {
    let stockStatus = p.stockCount === 0 ? `<span class="badge badge-warning" style="background-color:#ffebee; color:#c62828;">Out of Stock</span>` : 
      p.stockCount <= 5 ? `<span class="badge badge-warning">Low Stock Alerts</span>` : `<span class="badge badge-success">Good Stock</span>`;
    
    return `
      <tr>
        <td><strong>${p.id}</strong></td>
        <td><div style="font-weight:600; max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${p.name}</div></td>
        <td><span class="badge badge-info">${p.category.toUpperCase()}</span></td>
        <td>
          <input type="number" value="${p.stockCount || '0'}" style="width:70px; padding:4px; text-align:center;" onchange="updateAdminStock(${p.id}, this.value)">
        </td>
        <td>${stockStatus}</td>
      </tr>
    `;
  }).reverse().join('');

  panel.innerHTML = `
    <h3 style="font-size:16px; font-weight:700; border-bottom:1px solid #f0f0f0; padding-bottom:10px; margin-bottom:20px;">Showroom Inventory Status Tracker</h3>
    
    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name Details</th>
            <th>Category</th>
            <th>Stock Count (Edit)</th>
            <th>Stock Alerts</th>
          </tr>
        </thead>
        <tbody>
          ${lowStockList}
        </tbody>
      </table>
    </div>
  `;
}

function updateAdminStock(productId, newQty) {
  let p = state.products.find(prod => prod.id === productId);
  if (p) {
    p.stockCount = Math.max(0, parseInt(newQty));
    p.inStock = p.stockCount > 0;
    saveStateToStorage();
    alert(`Inventory count for Product ID ${productId} successfully updated to ${p.stockCount}!`);
    renderView();
  }
}

// Sub-Tab 5: Customer inquiries Mock
function renderAdminInquiries(panel) {
  panel.innerHTML = `
    <h3 style="font-size:16px; font-weight:700; border-bottom:1px solid #f0f0f0; padding-bottom:10px; margin-bottom:20px;">Customer Service & Inquiry Logs</h3>
    
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div class="checkout-steps-panel" style="border: 1px solid var(--border-light); padding:15px; border-left:4px solid var(--accent-orange);">
        <div class="justify-between" style="font-weight:700; margin-bottom:8px;">
          <span>Suresh K. (Salem Town)</span>
          <span style="font-size:12px; color:var(--text-light);">Today, 11:30 AM</span>
        </div>
        <p style="font-size:13px; color:var(--text-medium); line-height:1.5;">"Hi, do you have original replacement displays for OnePlus 11 in stock? If I drop the phone off in the morning, how long will it take to repair?"</p>
        <button class="btn-admin-edit" style="margin-top:10px; background-color:var(--accent-blue); color:white; border:none;" onclick="alert('Response sent: Yes Suresh, OnePlus 11 OEM Super AMOLED displays are in stock. Repair time is 2 hours at showroom!')">Reply / Call Customer</button>
      </div>

      <div class="checkout-steps-panel" style="border: 1px solid var(--border-light); padding:15px; border-left:4px solid var(--rating-green);">
        <div class="justify-between" style="font-weight:700; margin-bottom:8px;">
          <span>Anitha S. (Salem Bypass)</span>
          <span style="font-size:12px; color:var(--text-light);">Yesterday, 04:15 PM</span>
        </div>
        <p style="font-size:13px; color:var(--text-medium); line-height:1.5;">"Can I order UV Glass for iPhone 15 Pro, and have your technician come to my home for installation? Please let me know home service rates."</p>
        <button class="btn-admin-edit" style="margin-top:10px; background-color:var(--accent-blue); color:white; border:none;" onclick="alert('Response sent: Yes, home installation is available. Charge ₹100 extra.')">Reply / Call Customer</button>
      </div>
    </div>
  `;
}

// Sub-Tab 6: Settings
function renderAdminSettings(panel) {
  panel.innerHTML = `
    <h3 style="font-size:16px; font-weight:700; border-bottom:1px solid #f0f0f0; padding-bottom:10px; margin-bottom:20px;">
      <i class="fas fa-edit" style="color:var(--accent-blue); margin-right:8px;"></i>Website Visual Editor (Interactive Store Demo)
    </h3>
    <p style="color:var(--text-medium); font-size:12.5px; margin-bottom:20px; line-height:1.5;">
      Modify the general store branding, contact parameters, and banner slide graphics below. Changes are saved to <code>localStorage</code> and dynamically applied instantly across the storefront.
    </p>
    
    <form id="adminSiteConfigForm" onsubmit="handleSiteConfigSave(event)" style="display:flex; flex-direction:column; gap:20px;">
      <!-- Part 1: General Info -->
      <div class="checkout-steps-panel" style="border: 1px solid var(--border-light); padding:15px;">
        <h4 style="font-size:14px; font-weight:700; border-bottom:1px solid #e0e0e0; padding-bottom:6px; margin-bottom:12px; color:var(--accent-blue);">
          1. General Shop Settings
        </h4>
        <div class="checkout-form-group">
          <label>Shop Brand Name</label>
          <input type="text" class="checkout-input" id="cfgShopName" value="${state.siteConfig.shopName}" required>
        </div>
        <div class="checkout-form-group">
          <label>Showroom Physical Address</label>
          <input type="text" class="checkout-input" id="cfgShopAddress" value="${state.siteConfig.shopAddress}" required>
        </div>
        <div class="checkout-grid-2">
          <div class="checkout-form-group">
            <label>Customer Helpline Mobile</label>
            <input type="text" class="checkout-input" id="cfgShopPhone" value="${state.siteConfig.shopPhone}" required>
          </div>
          <div class="checkout-form-group">
            <label>Helpline Support Email</label>
            <input type="email" class="checkout-input" id="cfgShopEmail" value="${state.siteConfig.shopEmail}" required>
          </div>
        </div>
      </div>
      
      <!-- Part 2: Banner Slides Graphics -->
      <div class="checkout-steps-panel" style="border: 1px solid var(--border-light); padding:15px;">
        <h4 style="font-size:14px; font-weight:700; border-bottom:1px solid #e0e0e0; padding-bottom:6px; margin-bottom:12px; color:var(--accent-blue);">
          2. Hero Slide Banners Customizer
        </h4>
        
        <!-- Slide 1 settings -->
        <div style="background-color:#fafafa; padding:10px; border-radius:4px; margin-bottom:12px; border-left:3px solid var(--accent-orange);">
          <strong style="font-size:12.5px; display:block; margin-bottom:8px;">Slide 1 (Premium Smartphones Releases)</strong>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 1 Heading Title</label>
            <input type="text" class="checkout-input" style="font-size:12.5px; padding:6px 10px;" id="cfgBanner1Title" value="${state.siteConfig.banner1Title}" required>
          </div>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 1 Subtext Description</label>
            <textarea class="checkout-input" style="font-size:12.5px; padding:6px 10px; height:60px;" id="cfgBanner1Desc" required>${state.siteConfig.banner1Desc}</textarea>
          </div>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 1 Image URL (Unsplash/Web)</label>
            <input type="text" class="checkout-input" style="font-size:12.5px; padding:6px 10px;" id="cfgBanner1Image" value="${state.siteConfig.banner1Image}" required>
          </div>
        </div>

        <!-- Slide 2 settings -->
        <div style="background-color:#fafafa; padding:10px; border-radius:4px; margin-bottom:12px; border-left:3px solid var(--accent-yellow-hover);">
          <strong style="font-size:12.5px; display:block; margin-bottom:8px;">Slide 2 (UV Tempered Curved Protection)</strong>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 2 Heading Title</label>
            <input type="text" class="checkout-input" style="font-size:12.5px; padding:6px 10px;" id="cfgBanner2Title" value="${state.siteConfig.banner2Title}" required>
          </div>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 2 Subtext Description</label>
            <textarea class="checkout-input" style="font-size:12.5px; padding:6px 10px; height:60px;" id="cfgBanner2Desc" required>${state.siteConfig.banner2Desc}</textarea>
          </div>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 2 Image URL (Unsplash/Web)</label>
            <input type="text" class="checkout-input" style="font-size:12.5px; padding:6px 10px;" id="cfgBanner2Image" value="${state.siteConfig.banner2Image}" required>
          </div>
        </div>

        <!-- Slide 3 settings -->
        <div style="background-color:#fafafa; padding:10px; border-radius:4px; border-left:3px solid var(--rating-green);">
          <strong style="font-size:12.5px; display:block; margin-bottom:8px;">Slide 3 (Screen Combo Repairs)</strong>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 3 Heading Title</label>
            <input type="text" class="checkout-input" style="font-size:12.5px; padding:6px 10px;" id="cfgBanner3Title" value="${state.siteConfig.banner3Title}" required>
          </div>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 3 Subtext Description</label>
            <textarea class="checkout-input" style="font-size:12.5px; padding:6px 10px; height:60px;" id="cfgBanner3Desc" required>${state.siteConfig.banner3Desc}</textarea>
          </div>
          <div class="checkout-form-group">
            <label style="font-size:11.5px;">Slide 3 Image URL (Unsplash/Web)</label>
            <input type="text" class="checkout-input" style="font-size:12.5px; padding:6px 10px;" id="cfgBanner3Image" value="${state.siteConfig.banner3Image}" required>
          </div>
        </div>

      </div>
      
      <button type="submit" class="btn-wizard-action" style="background-color: var(--accent-orange); max-width:280px; align-self:start;">
        <i class="fas fa-save"></i> Apply Live Store Changes
      </button>
    </form>
  `;
}

function handleSiteConfigSave(event) {
  event.preventDefault();
  
  // Read inputs
  state.siteConfig.shopName = document.getElementById("cfgShopName").value.trim();
  state.siteConfig.shopAddress = document.getElementById("cfgShopAddress").value.trim();
  state.siteConfig.shopPhone = document.getElementById("cfgShopPhone").value.trim();
  state.siteConfig.shopEmail = document.getElementById("cfgShopEmail").value.trim();
  
  state.siteConfig.banner1Title = document.getElementById("cfgBanner1Title").value.trim();
  state.siteConfig.banner1Desc = document.getElementById("cfgBanner1Desc").value.trim();
  state.siteConfig.banner1Image = document.getElementById("cfgBanner1Image").value.trim();
  
  state.siteConfig.banner2Title = document.getElementById("cfgBanner2Title").value.trim();
  state.siteConfig.banner2Desc = document.getElementById("cfgBanner2Desc").value.trim();
  state.siteConfig.banner2Image = document.getElementById("cfgBanner2Image").value.trim();
  
  state.siteConfig.banner3Title = document.getElementById("cfgBanner3Title").value.trim();
  state.siteConfig.banner3Desc = document.getElementById("cfgBanner3Desc").value.trim();
  state.siteConfig.banner3Image = document.getElementById("cfgBanner3Image").value.trim();
  
  saveSiteConfig();
  applySiteConfig();
  alert("Interactive Demo: General Store and Carousel Banner settings successfully updated and rendered globally!");
  navigateTo('home'); // Go to home page to see results!
}

// --------------------------------------------------------------------------
// 16. CLIENT INTERACTIVE LOGIN MODALS CONTROLLER
// --------------------------------------------------------------------------
function openLoginModal() {
  let modal = document.getElementById("loginModal");
  if (!modal) return;
  
  let modalTitle = document.getElementById("loginModalTitle");
  modalTitle.innerHTML = `<i class="fas fa-lock" style="color:var(--accent-orange); margin-right:8px;"></i>Sign In`;
  
  let content = `
    <div class="modal-header">
      <h4><i class="fas fa-lock" style="color:var(--accent-orange); margin-right:8px;"></i>Sign In</h4>
      <button class="modal-close-btn" onclick="closeLoginModal()">&times;</button>
    </div>
    <form onsubmit="handleLoginSubmit(event)">
      <div class="checkout-form-group">
        <label for="loginEmail">Email or Mobile Number</label>
        <input type="text" id="loginEmail" class="checkout-input" placeholder="e.g. 9876543210" required>
      </div>
      <div class="checkout-form-group">
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" class="checkout-input" placeholder="Enter password" required>
      </div>
      
      <div style="font-size:12px; margin-bottom: 15px; color: var(--text-medium);">
        By continuing, you agree to New Ambika Mobiles' Conditions of Use and Privacy Notice.
      </div>
      
      <button type="submit" class="btn-wizard-action" style="background-color: var(--accent-yellow); color: var(--text-dark); border-color:#a88734;">
        Continue
      </button>
    </form>
    
    <div style="border-top: 1px solid var(--border-light); margin-top:20px; padding-top:15px; text-align:center;">
      <div style="font-size:12px; color:var(--text-light); margin-bottom: 10px;">New to Ambika Mobiles?</div>
      <button onclick="alert('Account creation is automated. Type any mobile and password to continue mock checkout!')" class="btn-modal-cancel" style="width: 100%;">Create your Account</button>
    </div>
  `;
  
  modal.querySelector(".admin-modal-card").innerHTML = content;
  modal.style.display = 'flex';
}

function closeLoginModal() {
  let modal = document.getElementById("loginModal");
  if (modal) modal.style.display = 'none';
}

function handleLoginSubmit(event) {
  event.preventDefault();
  let contact = document.getElementById("loginEmail").value.trim();
  closeLoginModal();
  alert(`Successfully Logged In as customer: ${contact}! Ready to purchase.`);
}

// --------------------------------------------------------------------------
// 17. GLOBAL MODULE FUNCTION BINDINGS TO WINDOW SCOPE
// --------------------------------------------------------------------------
window.navigateTo = navigateTo;
window.navigateToCategoryFilter = navigateToCategoryFilter;
window.navigateToProductDetail = navigateToProductDetail;
window.scrollToTop = scrollToTop;
window.toggleSidebarMenu = toggleSidebarMenu;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.handleLoginSubmit = handleLoginSubmit;
window.onCategorySelectSearch = onCategorySelectSearch;
window.handleSearchKeyPress = handleSearchKeyPress;
window.executeSearch = executeSearch;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.adjustCartQty = adjustCartQty;
window.toggleWishlistItem = toggleWishlistItem;
window.quickBuyNow = quickBuyNow;
window.addDetailToCart = addDetailToCart;
window.buyDetailNow = buyDetailNow;
window.openWizard = openWizard;
window.onWizardBrandChange = onWizardBrandChange;
window.onWizardModelChange = onWizardModelChange;
window.selectWizardService = selectWizardService;
window.addWizardToCart = addWizardToCart;
window.selectCheckoutPayment = selectCheckoutPayment;
window.executePlaceOrder = executePlaceOrder;
window.changeAdminOrderStatus = changeAdminOrderStatus;
window.checkPincodeDelivery = checkPincodeDelivery;
window.setAdminTab = setAdminTab;
window.deleteAdminProduct = deleteAdminProduct;
window.openAdminAddProductModal = openAdminAddProductModal;
window.openAdminEditProductModal = openAdminEditProductModal;
window.handleProductFormSubmit = handleProductFormSubmit;
window.updateAdminStock = updateAdminStock;
window.handleSiteConfigSave = handleSiteConfigSave;
window.moveSlide = moveSlide;
window.setSlide = setSlide;
window.setCategoryFilter = setCategoryFilter;
window.toggleFilterDropdown = toggleFilterDropdown;
window.closeAllFilterDropdowns = closeAllFilterDropdowns;
window.selectFilterOption = selectFilterOption;
window.clearAllFilters = clearAllFilters;

