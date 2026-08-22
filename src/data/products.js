export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles', count: 23 },
  { id: 'beds', name: 'Luxury Beds', icon: 'BedDouble', count: 7 },
  { id: 'sofas', name: 'Handcrafted Sofas', icon: 'Armchair', count: 8 },
  { id: 'electronics', name: 'Home Electronics', icon: 'Tv', count: 8 }
];

export const PRODUCTS = [
  // ================= 9 BEDS =================
  {
    id: 'bed-1',
    category: 'beds',
    categoryName: 'Beds',
    name: 'Maharaja Grand Sheesham King Bed',
    subtitle: 'Hand-Carved Solid Sheesham with Gas-Lift Storage',
    price: 44999,
    originalPrice: 58000,
    rating: 4.9,
    reviewsCount: 128,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Bestseller · Solid Sheesham',
    material: 'Grade-A Seasoned Sheesham Wood (Indian Rosewood)',
    dimensions: '78" L x 72" W x 48" H (King Size)',
    warranty: '10-Year Structural Warranty',
    delivery: 'Free White-Glove Installation (2-4 Days)',
    emi: '₹2,180 / month (No Cost EMI)',
    images: [
      'https://images.unsplash.com/photo-1731336250970-dc942b5e0746?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Carved with divine precision by our master karigars in Dariyapur Bazar, the Maharaja Grand King Bed is built from 100% seasoned Sheesham hardwood with no particle board. Equipped with German hydraulic gas-lift mechanisms for silent storage access.',
    specs: [
      { label: 'Wood Type', value: '100% Solid Sheesham Wood' },
      { label: 'Storage Mechanism', value: 'German Hydraulic Gas-Lift (650L)' },
      { label: 'Headboard', value: 'Hand-Carved Lattice with Brass Studs' },
      { label: 'Finish', value: 'Glossy Teak Walnut Polyurethane Finish' },
      { label: 'Weight Capacity', value: 'Up to 550 kg load tested' },
      { label: 'Assembly', value: 'Zero-effort free room setup included' }
    ]
  },
  {
    id: 'bed-3',
    category: 'beds',
    categoryName: 'Beds',
    name: 'Royal Teakwood Poster Canopy Bed',
    subtitle: '4-Pillar Heritage Burma Teak Architecture',
    price: 54999,
    originalPrice: 72000,
    rating: 5.0,
    reviewsCount: 67,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Heritage Masterpiece · Teak',
    material: '100% Pure Burma Teakwood with Natural Wax Polish',
    dimensions: '82" L x 76" W x 84" H (Canopy Height)',
    warranty: 'Lifetime Termite & 15-Year Frame Warranty',
    delivery: 'Custom Made & Shipped in 5 Days',
    emi: '₹2,660 / month',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A tribute to royal Indian architecture. Four soaring fluted columns constructed with age-old mortise-and-tenon joints, handcrafted exclusively by Vishwakarma senior artisans to make a statement in any master bedroom.',
    specs: [
      { label: 'Wood Origin', value: 'Pure Seasoned Burma Teak' },
      { label: 'Joint System', value: 'Traditional Interlocking Mortise & Tenon' },
      { label: 'Canopy Rails', value: 'Solid Teak Crossbeams for Drapes' },
      { label: 'Finish Type', value: 'Hand-Rubbed Organic Linseed & Wax Polish' },
      { label: 'Material Options', value: 'Multiple wood & fabric finishes available' }
    ]
  },
  {
    id: 'bed-4',
    category: 'beds',
    categoryName: 'Beds',
    name: 'Vivaan Hydraulic Storage Queen Bed',
    subtitle: 'Effortless Gas-Lift Storage in Honey Walnut Finish',
    price: 32999,
    originalPrice: 42000,
    rating: 4.7,
    reviewsCount: 156,
    isBestseller: false,
    is3DAvailable: true,
    tag: 'Popular Choice · 600L Storage',
    material: 'Solid Seasoned Sheesham & Heavy Base Board',
    dimensions: '78" L x 60" W x 42" H (Queen Size)',
    warranty: '7-Year Structural Warranty',
    delivery: 'Free Delivery with Express 48h Dispatch',
    emi: '₹1,599 / month',
    images: [
      'https://images.unsplash.com/photo-1781572725438-ac8c41476752?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Designed for modern space optimization. Vivaan Queen Bed offers an expansive 600-liter storage cavity powered by ultra-smooth hydraulic dampers, combined with an ergonomic grooved wooden headboard for comfortable reading.',
    specs: [
      { label: 'Bed Size', value: 'Queen Size (60 x 78 inches)' },
      { label: 'Lift Capacity', value: 'Lift assists up to 120 kg mattress effortlessly' },
      { label: 'Internal Compartments', value: '4 Segregated Dust-Proof Chambers' },
      { label: 'Corner Protection', value: 'Chamfered Beveled Edges (Kid Safe)' }
    ]
  },
  {
    id: 'bed-6',
    category: 'beds',
    categoryName: 'Beds',
    name: 'Ishita Brass Inlay Royal King Bed',
    subtitle: 'Curved Solid Sheesham with Pure Brass Geometric Inlays',
    price: 48999,
    originalPrice: 65000,
    rating: 5.0,
    reviewsCount: 72,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Luxury Series · Brass Accents',
    material: 'Dark Walnut Sheesham & Pure Hand-Cut Brass Sheet',
    dimensions: '80" L x 76" W x 50" H',
    warranty: '10-Year Comprehensive Wood Warranty',
    delivery: 'Free Pan-India Delivery',
    emi: '₹2,370 / month',
    images: [
      'https://images.unsplash.com/photo-1714138083505-fc47d575e3b1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1731336250970-dc942b5e0746?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Precision artisan work where gold-toned brass strips are hand-embedded into the dark sheesham grain. The subtle arch curves reflect natural lighting, creating an aura of timeless luxury.',
    specs: [
      { label: 'Metal Work', value: '1.2mm Hand-Beaten Pure Brass Inlay' },
      { label: 'Wood Seasoning', value: 'Vacuum Press Kiln-Dried (under 8% moisture)' },
      { label: 'Bed Base', value: 'Reinforced solid plank bedboard' },
      { label: 'Polish', value: 'Non-toxic, zero VOC Italian PU clear coat' }
    ]
  },
  {
    id: 'bed-7',
    category: 'beds',
    categoryName: 'Beds',
    name: 'Zen Minimalist Low Platform Bed',
    subtitle: 'Japanese Inspired Low Profile with Floating Side Shelves',
    price: 26999,
    originalPrice: 35000,
    rating: 4.8,
    reviewsCount: 110,
    isBestseller: false,
    is3DAvailable: true,
    tag: 'Minimal Japanese · Zen Living',
    material: 'Solid Ashwood & Seasoned Marandi Core',
    dimensions: '84" L x 80" W x 28" H (Extended Platform)',
    warranty: '5-Year Frame Warranty',
    delivery: 'Free Delivery',
    emi: '₹1,305 / month',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Bring meditative tranquility to your bedroom. Features wide side ledges that serve as natural nightstands for your books and lamps, engineered for low-profile modern living.',
    specs: [
      { label: 'Platform Ledge', value: '6-inch perimeter floating border' },
      { label: 'Ergonomic Angle', value: '105° tilted angled rest backboard' },
      { label: 'Assembly Style', value: 'Interlocking tool-less hardware system' }
    ]
  },
  {
    id: 'bed-8',
    category: 'beds',
    categoryName: 'Beds',
    name: 'Nirvana 4-Drawer Bookcase Headboard Bed',
    subtitle: 'Built-in USB Charging Hub & Dual-Sided Smooth Drawers',
    price: 35999,
    originalPrice: 47000,
    rating: 4.7,
    reviewsCount: 65,
    isBestseller: false,
    is3DAvailable: true,
    tag: 'Smart Utility · 4 Drawers',
    material: 'Solid Sheesham & Multi-Density Core',
    dimensions: '80" L x 66" W x 45" H',
    warranty: '5-Year Warranty',
    delivery: 'Free Delivery & Assembly',
    emi: '₹1,740 / month',
    images: [
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1781572725438-ac8c41476752?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1766928210452-2470f91bae26?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Smart bedside organisation. The headboard incorporates hidden cubbies for devices and novels plus integrated USB-C charging ports, alongside four ball-bearing smooth rollout drawers.',
    specs: [
      { label: 'Storage', value: '4 Heavy Duty Drawers with Telescopic Channels' },
      { label: 'Power Hub', value: '2 USB-A + 2 USB-C 30W Fast Charge sockets' },
      { label: 'Wood Polish', value: 'Matte Walnut with anti-scratch coating' }
    ]
  },
  {
    id: 'bed-9',
    category: 'beds',
    categoryName: 'Beds',
    name: 'Rudra Antique Royal Carved King Bed',
    subtitle: 'Intricate Floral Jali Carving & Crown Headboard in Teak',
    price: 59999,
    originalPrice: 82000,
    rating: 5.0,
    reviewsCount: 49,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Collector Edition · Antique Teak',
    material: '100% Solid Heritage Teakwood',
    dimensions: '82" L x 76" W x 58" H',
    warranty: 'Lifetime Antique Frame Warranty',
    delivery: 'Insured White Glove Delivery',
    emi: '₹2,900 / month',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1731336250970-dc942b5e0746?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1714138083505-fc47d575e3b1?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An heirloom bed meant to be passed down through generations. Featuring over 120 hours of individual hand-chiseling on solid Teak planks, finished with an antique burnished gold wash.',
    specs: [
      { label: 'Artisan Craft Time', value: '120+ hours of hand carving' },
      { label: 'Structure', value: 'Heavyweight Solid Burma Teak (over 130 kg)' },
      { label: 'Finish', value: 'Antique Burnished Walnut & Distressed Gold' }
    ]
  },

  // ================= 8 SOFAS =================
  {
    id: 'sofa-1',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Royal Chesterfield 3-Seater',
    subtitle: 'Deep Diamond Tufting with Antiqued Saddle Brown Leather',
    price: 32999,
    originalPrice: 45000,
    rating: 4.9,
    reviewsCount: 215,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Showroom Bestseller · Leather',
    material: 'Full-Grain Breathable Leatherette & Teakwood Legs',
    dimensions: '88" W x 38" D x 32" H',
    warranty: '5-Year Frame & High-Density Foam Warranty',
    delivery: 'Free Pan-India Delivery',
    emi: '₹1,599 / month',
    images: [
      'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The epitome of classic grandeur. Generous rolled arms, individually pinned brass studs, deep diamond button-tufting, and 45-density supersoft foam for unmatched sitting posture and lumbar support.',
    specs: [
      { label: 'Seating Capacity', value: '3 Large Adults (tested up to 400kg)' },
      { label: 'Foam Construction', value: 'Multi-layer 45D High Resilient PU Foam + Pocket Springs' },
      { label: 'Suspension', value: 'Zig-Zag 8-Gauge Steel Springs with Nylon Webbing' },
      { label: 'Legs', value: 'Hand-turned solid teak wood with brass casters' }
    ]
  },
  {
    id: 'sofa-2',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Radha Scandinavian Loveseat (2-Seater)',
    subtitle: 'Natural Belgian Linen Weave & Tapered Teak Legs',
    price: 22499,
    originalPrice: 29000,
    rating: 4.8,
    reviewsCount: 142,
    isBestseller: false,
    is3DAvailable: true,
    tag: 'Compact Modern · 2 Seater',
    material: 'Belgian Linen Blend & Solid Oak Frame',
    dimensions: '62" W x 34" D x 33" H',
    warranty: '5-Year Structural Warranty',
    delivery: 'Free Delivery in 3 Days',
    emi: '₹1,090 / month',
    images: [
      'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Clean Nordic contours crafted for apartments and modern drawing rooms. Removable machine-washable cushion covers and high-density microfiber core for cloud-like seating.',
    specs: [
      { label: 'Seating Capacity', value: '2-Seater Compact (Ideal for living rooms / study)' },
      { label: 'Fabric Treatment', value: 'Hydrophobic anti-stain nanocoat' },
      { label: 'Cushion Fill', value: '70% High Density Foam + 30% Microfiber Down' },
      { label: 'Cushion Covers', value: 'Zippered & fully removable for easy washing' }
    ]
  },
  {
    id: 'sofa-3',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Meera Emerald Velvet 3-Seater',
    subtitle: 'Jewel-Toned Plush Velvet with Brushed Gold Trim',
    price: 24999,
    originalPrice: 34000,
    rating: 4.9,
    reviewsCount: 178,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Trending Color · Emerald Luxury',
    material: 'Royal Emerald Dutch Velvet & Solid Sal Frame',
    dimensions: '82" W x 36" D x 32" H',
    warranty: '5-Year Frame & Anti-Sag Guarantee',
    delivery: 'Free Delivery with Room Setup',
    emi: '₹1,210 / month',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Transform your lounge into an opulent haven. The striking emerald green velvet catches ambient light beautifully, accented with a sleek brushed gold bottom plinth.',
    specs: [
      { label: 'Upholstery Fabric', value: 'High Abrasion 40,000 Rub Martindale Velvet' },
      { label: 'Base Trim', value: 'Electroplated Brushed Titanium Gold Plinth' },
      { label: 'Armrest Design', value: 'Padded Curved Track Arms with dual piping' }
    ]
  },
  {
    id: 'sofa-4',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Ganesh Luxury Modular L-Shape Sectional',
    subtitle: 'Reversible Chaise Lounge with Hidden Ottoman Storage',
    price: 46999,
    originalPrice: 62000,
    rating: 5.0,
    reviewsCount: 164,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Family Favorite · 6 Seater',
    material: 'Heavy Linen Blend & Kiln-Dried Solid Hardwood',
    dimensions: '108" W x 68" D x 34" H (L-Shape)',
    warranty: '7-Year Frame & Mechanism Warranty',
    delivery: 'Free Assembly & Room Placement',
    emi: '₹2,275 / month',
    images: [
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1756302637887-1c00e98fd0cc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The ultimate family entertainer. Features a modular chaise that can be configured left or right to suit your room layout, plus hydraulic storage inside the chaise for extra quilts and cushions.',
    specs: [
      { label: 'Configuration', value: 'Modular Reversible (Left or Right aligned)' },
      { label: 'Seating Capacity', value: '6 Adults comfortably' },
      { label: 'Built-in Storage', value: '180 Liters internal chaise storage' },
      { label: 'Cushion Support', value: 'Dual Layer High Density 50D Reflex Core' }
    ]
  },
  {
    id: 'sofa-5',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Surya Dual Motor Power Recliner 3-Seater',
    subtitle: 'One-Touch Power Recline with USB Ports & Cup Holders',
    price: 58499,
    originalPrice: 75000,
    rating: 4.9,
    reviewsCount: 82,
    isBestseller: false,
    is3DAvailable: true,
    tag: 'Ultra Comfort · Electric Recliner',
    material: 'Nappa Soft Leatherette & German Motor Drive',
    dimensions: '86" W x 40" D (Reclines to 65") x 41" H',
    warranty: '5-Year Motor & Steel Mechanism Warranty',
    delivery: 'Free Delivery & Live Demo Setup',
    emi: '₹2,830 / month',
    images: [
      'https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Home theater comfort at its absolute pinnacle. Silent electric actuators glide smoothly from upright to zero-gravity lounge positions with infinite stops and individual footrest control.',
    specs: [
      { label: 'Reclining Angles', value: '110° to 165° Smooth Electric Transition' },
      { label: 'Motor Brand', value: 'German OKIN Dual Actuators' },
      { label: 'Console Features', value: 'Fold-down center table with 2 cup holders + 2 AC plugs' }
    ]
  },
  {
    id: 'sofa-6',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Kailash Curved Bouclé Accent Sofa',
    subtitle: 'Avant-Garde Architectural Curve in Cream Wool Bouclé',
    price: 36999,
    originalPrice: 48000,
    rating: 4.8,
    reviewsCount: 56,
    isBestseller: false,
    is3DAvailable: true,
    tag: 'Architectural · Curved Design',
    material: 'Heavy Cream Wool Bouclé & Curved Sal Core',
    dimensions: '90" W x 42" D x 31" H',
    warranty: '5-Year Frame Warranty',
    delivery: 'Free Delivery',
    emi: '₹1,790 / month',
    images: [
      'https://images.unsplash.com/photo-1756302637887-1c00e98fd0cc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A sculptural centerpiece for open-concept residences. The organic serpentine curve facilitates natural conversations and creates fluid flow across your living space.',
    specs: [
      { label: 'Curve Radius', value: 'Generous 35° ergonomic embrace radius' },
      { label: 'Fabric', value: '450 GSM Heavy Textured Bouclé' },
      { label: 'Frame', value: 'Curved Solid Sal Wood with Steel Tie Rods' }
    ]
  },
  {
    id: 'sofa-7',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Dharohar Solid Sheesham Wooden Sofa (3+1+1 Set)',
    subtitle: 'Traditional Solid Sheesham Frame with Thick 6" Cushions',
    price: 41999,
    originalPrice: 56000,
    rating: 5.0,
    reviewsCount: 130,
    isBestseller: true,
    is3DAvailable: true,
    tag: 'Heritage 5-Seater Set · Solid Wood',
    material: '100% Solid Seasoned Sheesham Wood (3-Seater + 2 Chairs)',
    dimensions: '3-Seater: 74"W | Single: 32"W x 30"D x 34"H',
    warranty: '10-Year Wood Termite & Structure Warranty',
    delivery: 'Free Delivery & Placement in Living Room',
    emi: '₹2,030 / month',
    images: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The beloved Indian family classic built to last for 50+ years. High-grade Solid Sheesham frame with ornate side slates, paired with 6-inch high-density cushions in durable jacquard fabric.',
    specs: [
      { label: 'Set Contents', value: '1x 3-Seater Sofa + 2x Single Armchairs' },
      { label: 'Wood Thickness', value: 'Heavy 1.5-inch solid Sheesham planks' },
      { label: 'Cushion Foam', value: 'High Resilience 40D Ortho Foam' }
    ]
  },
  {
    id: 'sofa-8',
    category: 'sofas',
    categoryName: 'Sofas',
    name: 'Arya Modern Click-Clack Sofa Cum Bed',
    subtitle: '3-Stage Foldable Mechanism & Orthopedic Sleep Base',
    price: 18999,
    originalPrice: 26000,
    rating: 4.7,
    reviewsCount: 198,
    isBestseller: false,
    is3DAvailable: true,
    tag: 'Multi-Purpose · Bed Conversion',
    material: 'Breathable Jute-Cotton Blend & Powder-Coated Metal Mechanism',
    dimensions: 'Sofa: 76" W x 35" D | Flat Bed: 76" W x 48" D',
    warranty: '5-Year Hinge & Frame Warranty',
    delivery: 'Free Delivery in 48 Hours',
    emi: '₹920 / month',
    images: [
      'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1756302637887-1c00e98fd0cc?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Converts from a cozy 3-seater sofa to a spacious queen sleeping surface in less than 3 seconds. Ideal for hosting unexpected guests in living rooms or studio apartments.',
    specs: [
      { label: 'Positions', value: '3 Angles (Sitting 90°, Relaxing 120°, Flat 180°)' },
      { label: 'Convert Mechanism', value: 'German Heavy Duty Click-Clack Ratchet' },
      { label: 'Mattress Core', value: 'Bonded Orthopedic Foam with Jute Layer' }
    ]
  },

  // ================= 8 ELECTRONICS =================
  {
    id: 'elec-1',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'Sony Bravia 4K Ultra HD Smart Google TV 65"',
    subtitle: 'Cognitive Processor XR, Dolby Vision Atmos & 120Hz Gaming',
    price: 82990,
    originalPrice: 119900,
    rating: 5.0,
    reviewsCount: 310,
    isBestseller: true,
    is3DAvailable: false,
    tag: 'Flagship TV · 65 Inch 4K',
    material: 'Slim Metal Bezel & Acoustic Multi-Audio Speakers',
    dimensions: '65-inch Screen (145.2 cm x 83.4 cm)',
    warranty: '3-Year Comprehensive Brand Warranty',
    delivery: 'Free Wall Mounting & 24h Express Installation',
    emi: '₹4,020 / month',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Transform your living room into an IMAX theater. The Cognitive Processor XR replicates how humans see and hear, delivering pitch blacks, blinding highlights, and lifelike natural depth.',
    specs: [
      { label: 'Resolution', value: '4K Ultra HD (3840 x 2160 pixels)' },
      { label: 'Refresh Rate', value: '120Hz with Variable Refresh Rate (VRR / ALLM)' },
      { label: 'Audio Output', value: '30W Acoustic Surface Audio+ with Dolby Atmos' },
      { label: 'Smart Platform', value: 'Google TV with Hands-free Voice Search' },
      { label: 'Connectivity', value: '4x HDMI 2.1, 2x USB, eARC, Optical, WiFi 6, BT 5.2' }
    ]
  },
  {
    id: 'elec-2',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'LG AI Dual Inverter 1.5 Ton 5-Star Split AC',
    subtitle: 'AI Convertible 6-in-1 Cooling with Ocean Black Copper Protection',
    price: 42990,
    originalPrice: 56990,
    rating: 4.9,
    reviewsCount: 245,
    isBestseller: true,
    is3DAvailable: false,
    tag: '5-Star Energy · AI Inverter',
    material: '100% Grooved Copper with Anti-Corrosive Ocean Black Fin',
    dimensions: 'Indoor Unit: 99.8 cm x 34.5 cm x 21.0 cm',
    warranty: '10-Year Compressor Warranty with Gas Charging Included',
    delivery: 'Free Delivery & Priority Technician Installation',
    emi: '₹2,080 / month',
    images: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Rapid 4-way cooling engineered for extreme 52°C Indian summers. AI Dual Inverter analyzes room temperature and user patterns to automatically regulate power consumption, saving up to 65% on electricity bills.',
    specs: [
      { label: 'Cooling Capacity', value: '5000 Watts (Cools rooms up to 180 sq.ft.)' },
      { label: 'Star Rating', value: '5-Star BEE Energy Efficiency (ISEER 5.2)' },
      { label: 'Filtration', value: 'HD Filter with Anti-Virus & PM 2.5 Protection' },
      { label: 'Noise Level', value: 'Super Silent 21 dB Low Noise Sleep Mode' }
    ]
  },
  {
    id: 'elec-3',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'Samsung 415L Double Door Frost-Free Refrigerator',
    subtitle: 'Convertible 5-in-1, Twin Cooling Plus & Digital Inverter Compressor',
    price: 48490,
    originalPrice: 63990,
    rating: 4.8,
    reviewsCount: 180,
    isBestseller: false,
    is3DAvailable: false,
    tag: 'Convertible 5-in-1 · 415L',
    material: 'Luxe Inox Stainless Finish & Toughened Glass Shelves',
    dimensions: '67.5 cm W x 71.5 cm D x 178.5 cm H',
    warranty: '20-Year Digital Inverter Compressor Warranty',
    delivery: 'Free Delivery & Unboxing Setup',
    emi: '₹2,350 / month',
    images: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Keeps farm produce fresh up to 15 days. Twin Cooling Plus controls the fridge and freezer independently with separate evaporators, preventing food odours from mixing and maintaining 70% humidity.',
    specs: [
      { label: 'Capacity', value: '415 Litres (Ideal for families of 4-6 members)' },
      { label: 'Modes', value: 'Normal, Extra Fridge, Seasonal, Vacation, Home Alone' },
      { label: 'Stabilizer Free', value: 'Works steadily between 100V - 300V' },
      { label: 'Deodorizer', value: 'Activated Carbon Power Deodorizer' }
    ]
  },
  {
    id: 'elec-4',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'Bosch 8 kg 5-Star Front Load Washing Machine',
    subtitle: 'EcoSilence Drive, Anti-Stain System & 1400 RPM Spin Speed',
    price: 39990,
    originalPrice: 52990,
    rating: 4.9,
    reviewsCount: 220,
    isBestseller: true,
    is3DAvailable: false,
    tag: 'German Engineering · 8 kg Front Load',
    material: 'Stainless Steel VarioDrum & Anti-Vibration Side Walls',
    dimensions: '59.8 cm W x 59.0 cm D x 84.8 cm H',
    warranty: '12-Year EcoSilence Motor Warranty + 3Y Machine',
    delivery: 'Free Delivery & Live Plumbing Demo Included',
    emi: '₹1,940 / month',
    images: [
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Tough on stains, gentle on delicate fabrics. The brushless EcoSilence Drive eliminates friction, operating quietly even during high-velocity 1400 RPM spin cycles while saving water and electricity.',
    specs: [
      { label: 'Capacity & Spin', value: '8 kg Wash Capacity | 1400 RPM Max Speed' },
      { label: 'Programs', value: '15 Wash Programs including AllergyPlus & Quick 15min' },
      { label: 'Heater', value: 'Built-in Inox heater warms water up to 90°C' },
      { label: 'Water Pressure', value: 'Low water pressure sensor (0.3 bar ready)' }
    ]
  },
  {
    id: 'elec-5',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'JBL Bar 800 Pro 5.1.2 Channel Dolby Atmos Soundbar',
    subtitle: '720W True Dolby Atmos with Detachable Wireless Surround Speakers',
    price: 54990,
    originalPrice: 69990,
    rating: 5.0,
    reviewsCount: 160,
    isBestseller: true,
    is3DAvailable: false,
    tag: 'True 3D Cinema Sound · 720W',
    material: 'Metallic Grill & 10" Wireless Down-Firing Subwoofer',
    dimensions: 'Main Bar: 88.4 cm x 5.6 cm x 12.0 cm',
    warranty: '2-Year Official Brand Warranty',
    delivery: 'Free Express Delivery',
    emi: '₹2,660 / month',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Experience 3D spatial sound without running speaker wires across your room. Simply detach the two battery-powered wireless rear speakers and place them behind your sofa for instant cinema surround sound.',
    specs: [
      { label: 'Total Output', value: '720 Watts Peak System Power' },
      { label: 'Channels', value: '5.1.2 Channel with 2 Up-Firing Height Drivers' },
      { label: 'Subwoofer', value: '10-inch Wireless Down-Firing Bass Subwoofer' },
      { label: 'Streaming', value: 'AirPlay, Alexa MRM, Chromecast built-in & BT 5.0' }
    ]
  },
  {
    id: 'elec-6',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'IFB 30L Convection Microwave Oven',
    subtitle: '101 Auto-Cook Menus, Oil-Free Cooking & Rotisserie Grill',
    price: 16990,
    originalPrice: 22990,
    rating: 4.8,
    reviewsCount: 195,
    isBestseller: false,
    is3DAvailable: false,
    tag: 'All-in-One Kitchen · 30L',
    material: 'Stainless Steel Cavity & Touch Keypad with LED Display',
    dimensions: '53.9 cm W x 43.8 cm D x 30.0 cm H',
    warranty: '3-Year Magnetron & 1Y Machine Warranty',
    delivery: 'Free Delivery with Starter Kit',
    emi: '₹825 / month',
    images: [
      'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Bake, grill, reheat, and roast with zero hassle. Includes motorized rotisserie for authentic tandoori dishes, fermentation mode for homemade curd/batter, and steam clean for automatic grease removal.',
    specs: [
      { label: 'Capacity', value: '30 Litres (Large size for whole chicken & 10" pizza)' },
      { label: 'Functions', value: 'Baking, Grilling, Microwave, Defrost & Deodorize' },
      { label: 'Included Accessories', value: 'Glass turntable, high/low rack, rotisserie spit & pan' }
    ]
  },
  {
    id: 'elec-7',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'Symphony Desert Air Cooler 70L',
    subtitle: 'i-Pure 5-Stage Air Purification with 50-Foot Air Throw',
    price: 11490,
    originalPrice: 15490,
    rating: 4.7,
    reviewsCount: 135,
    isBestseller: false,
    is3DAvailable: false,
    tag: 'Powerful Cooling · 70L Tank',
    material: 'Heavy Engineering Thermoplastic & Dense Aspen Honeycomb Pads',
    dimensions: '65.0 cm W x 52.0 cm D x 112.5 cm H',
    warranty: '1-Year Comprehensive On-Site Warranty',
    delivery: 'Free Delivery within 24 Hours',
    emi: '₹560 / month',
    images: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Designed for dry, hot Indian summer conditions. Combines a 70L massive water reservoir with multidirectional air swing and 3-sided honeycomb cooling pads for icy cool breeze across entire halls.',
    specs: [
      { label: 'Air Throw', value: '50 Feet Powerful High-Velocity Air Flow' },
      { label: 'Power Consumption', value: 'Only 185 Watts (Runs easily on home inverter)' },
      { label: 'Chamber Features', value: 'Dedicated Ice Chamber & Auto-Drain Float Valve' }
    ]
  },
  {
    id: 'elec-8',
    category: 'electronics',
    categoryName: 'Electronics',
    name: 'Havells Max Alkaline RO+UV+Minerals Water Purifier',
    subtitle: '7-Stage Purification with 100% Stainless Steel Storage Tank',
    price: 15990,
    originalPrice: 21990,
    rating: 4.9,
    reviewsCount: 170,
    isBestseller: true,
    is3DAvailable: false,
    tag: 'Pure Alkaline Water · SS Tank',
    material: 'Food Grade 304 Stainless Steel Tank & Curved High Gloss Body',
    dimensions: '38.2 cm W x 27.3 cm D x 49.0 cm H',
    warranty: '1-Year Comprehensive + Free 2x Filter Replacements',
    delivery: 'Free Express Delivery & Same-Day Plumber Setup',
    emi: '₹775 / month',
    images: [
      'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Restores essential minerals and maintains an optimal alkaline pH balance of 8.0+. With a 100% rust-free food-grade stainless steel storage tank, your family drinks bacteria-free, pure water every time.',
    specs: [
      { label: 'Purification Technology', value: 'RO + UV + Minerals Cartridge + Revitalizer' },
      { label: 'Tank Material', value: '7.5 Litres 304 Medical Grade Stainless Steel' },
      { label: 'TDS Treatment', value: 'Purifies water up to 2000 ppm TDS easily' }
    ]
  }
];

// Secondary catalogue photos become their own products instead of extra gallery images.
const derivedProducts = PRODUCTS.flatMap((product) =>
  product.images.slice(1).map((image, index) => ({
    ...product,
    id: `${product.id}-collection-${index + 1}`,
    name: `${product.name} — ${index === 0 ? 'Signature' : 'Studio'} Edition`,
    subtitle: `Curated ${index === 0 ? 'signature' : 'studio'} selection from our ${product.categoryName.toLowerCase()} collection.`,
    tag: 'New Arrival · Curated Selection',
    isBestseller: false,
    is3DAvailable: false,
    reviewsCount: Math.max(12, Math.round(product.reviewsCount / 2)),
    images: [image],
  }))
);

PRODUCTS.forEach((product) => {
  product.images = product.images.slice(0, 1);
});
PRODUCTS.push(...derivedProducts);

CATEGORIES.forEach((category) => {
  category.count = category.id === 'all'
    ? PRODUCTS.length
    : PRODUCTS.filter((product) => product.category === category.id).length;
});
