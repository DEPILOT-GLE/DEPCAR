// DEP-TECH Car Spare Parts Data

const CARS = [
  { id:'range-rover', brand:'Land Rover', name:'Range Rover', model:'Sport / Vogue / Defender', img:'images/range_rover.png', color:'#4CAF50' },
  { id:'mercedes-benz', brand:'Mercedes-Benz', name:'Mercedes-Benz', model:'C-Class / E-Class / S-Class', img:'images/mercedes_amg.png', color:'#9E9E9E' },
  { id:'gle', brand:'Mercedes-Benz', name:'GLE / GLS Class', model:'GLE 350 / GLE 63 AMG', img:'https://images.unsplash.com/photo-1617469767027-a1a9ccbc66a5?w=600&q=80', color:'#607D8B' },
  { id:'amg', brand:'Mercedes-Benz', name:'AMG Series', model:'AMG GT / C63 / E63 / A45', img:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', color:'#F44336' },
  { id:'subaru', brand:'Subaru', name:'Subaru', model:'Forester / Outback / Impreza / WRX', img:'https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?w=600&q=80', color:'#2196F3' },
  { id:'mazda', brand:'Mazda', name:'Mazda', model:'CX-5 / CX-9 / Mazda 3 / Mazda 6', img:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', color:'#E91E63' },
  { id:'toyota-hilux', brand:'Toyota', name:'Toyota Hilux', model:'GR Sport / Revo / Legend', img:'images/toyota_hilux.png', color:'#FF5722' },
  { id:'v8', brand:'Various', name:'V8 Engines', model:'Land Cruiser V8 / Range Rover V8 / Benz V8', img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80', color:'#9C27B0' }
];

const PARTS = [
  // RANGE ROVER
  { id:1, car:'range-rover', carName:'Range Rover', name:'Range Rover Engine – 3.0L SDV6', category:'Engines', price:485000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'Complete SDV6 diesel engine assembly, 2018–2024 models', badge:'Premium' },
  { id:2, car:'range-rover', carName:'Range Rover', name:'Range Rover Front Grille – Sport', category:'Grilles', price:38500, img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80', desc:'OEM chrome mesh grille for Range Rover Sport 2020–2024' },
  { id:3, car:'range-rover', carName:'Range Rover', name:'Range Rover Alloy Rims 22"', category:'Rims', price:72000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'Set of 4 x 22" Anthracite alloy wheels', badge:'Set of 4' },
  { id:4, car:'range-rover', carName:'Range Rover', name:'Range Rover Bonnet – Sport SVR', category:'Bonnets', price:55000, img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80', desc:'Vented aluminium bonnet, SVR style 2021–2024' },
  { id:5, car:'range-rover', carName:'Range Rover', name:'Range Rover Turbocharger – TD6', category:'Turbos', price:95000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'OEM TD6 twin-scroll turbo unit, complete with gaskets', badge:'OEM' },
  { id:6, car:'range-rover', carName:'Range Rover', name:'Range Rover Suspension Air Bag', category:'Suspension', price:28000, img:'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&q=80', desc:'Front / rear air bag for Range Rover air suspension' },
  { id:7, car:'range-rover', carName:'Range Rover', name:'Range Rover LED Headlight – L405', category:'Lighting', price:42000, img:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&q=80', desc:'Full LED adaptive headlight assembly, driver or passenger' },
  { id:8, car:'range-rover', carName:'Range Rover', name:'Range Rover Gearbox – 8HP70', category:'Gearbox', price:220000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'ZF 8-speed automatic gearbox, fully reconditioned' },

  // MERCEDES BENZ
  { id:9, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Mercedes C-Class Engine – M271', category:'Engines', price:310000, img:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80', desc:'Complete M271 2.0L turbocharged petrol engine' },
  { id:10, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Mercedes S-Class Front Grille', category:'Grilles', price:52000, img:'https://images.unsplash.com/photo-1617469767027-a1a9ccbc66a5?w=400&q=80', desc:'AMG-style Panamericana grille for S-Class W222/W223', badge:'AMG Style' },
  { id:11, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Mercedes 19" AMG Rims', category:'Rims', price:88000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'Set of 4 x 19" AMG 5-spoke forged alloys', badge:'Set of 4' },
  { id:12, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Mercedes E-Class Bonnet – W213', category:'Bonnets', price:48000, img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80', desc:'Genuine steel bonnet, pre-painted options available' },
  { id:13, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Mercedes 7G-Tronic Gearbox', category:'Gearbox', price:195000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'7G-Tronic Plus automatic transmission, remanufactured' },
  { id:14, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Mercedes AIRMATIC Strut – Front', category:'Suspension', price:36000, img:'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&q=80', desc:'Front AIRMATIC strut for E/S-Class, OEM quality' },

  // GLE
  { id:15, car:'gle', carName:'Mercedes GLE', name:'GLE 350d Engine – OM656', category:'Engines', price:420000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'3.0L inline-6 diesel OM656, 2019–2024 GLE', badge:'Premium' },
  { id:16, car:'gle', carName:'Mercedes GLE', name:'GLE Front Grille – Panamericana', category:'Grilles', price:58000, img:'https://images.unsplash.com/photo-1617469767027-a1a9ccbc66a5?w=400&q=80', desc:'Genuine Panamericana vertical bar grille for GLE W167' },
  { id:17, car:'gle', carName:'Mercedes GLE', name:'GLE 21" Multi-Spoke Rims', category:'Rims', price:96000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'21-inch forged rims for GLE/GLS, set of 4', badge:'Set of 4' },
  { id:18, car:'gle', carName:'Mercedes GLE', name:'GLE Turbocharger Twin-Scroll', category:'Turbos', price:88000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'OEM twin-scroll turbo for GLE 350d diesel' },

  // AMG
  { id:19, car:'amg', carName:'Mercedes AMG', name:'AMG C63 Engine – M177 V8 Biturbo', category:'Engines', price:780000, img:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80', desc:'4.0L V8 biturbo engine, 510hp. Complete assembly', badge:'V8 Biturbo' },
  { id:20, car:'amg', carName:'Mercedes AMG', name:'AMG GT Panamericana Grille', category:'Grilles', price:65000, img:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80', desc:'Black chrome vertical bar Panamericana grille' },
  { id:21, car:'amg', carName:'Mercedes AMG', name:'AMG Forged 20" Track Rims', category:'Rims', price:142000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'AMG cross-spoke forged aluminium 20-inch, set of 4', badge:'Forged' },
  { id:22, car:'amg', carName:'Mercedes AMG', name:'AMG GT Carbon Bonnet', category:'Bonnets', price:125000, img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80', desc:'Genuine carbon fibre bonnet for AMG GT/GTS/GTR', badge:'Carbon' },
  { id:23, car:'amg', carName:'Mercedes AMG', name:'AMG Turbocharger – Biturbo Unit', category:'Turbos', price:165000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'Single turbo from biturbo pair, for M177/M178 engines' },

  // SUBARU
  { id:24, car:'subaru', carName:'Subaru', name:'Subaru EJ25 Engine – DOHC', category:'Engines', price:185000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'2.5L DOHC flat-four boxer engine for Forester/Outback' },
  { id:25, car:'subaru', carName:'Subaru', name:'Subaru WRX STI Front Grille', category:'Grilles', price:22000, img:'https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?w=400&q=80', desc:'OEM mesh grille for WRX STI 2018–2024' },
  { id:26, car:'subaru', carName:'Subaru', name:'Subaru 18" BBS-Style Rims', category:'Rims', price:56000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'18" 5-spoke alloy wheels for Subaru, set of 4', badge:'Set of 4' },
  { id:27, car:'subaru', carName:'Subaru', name:'Subaru EJ20 Turbocharger', category:'Turbos', price:68000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'Twin-scroll turbo for EJ20 WRX/STI engines', badge:'OEM' },
  { id:28, car:'subaru', carName:'Subaru', name:'Subaru Forester Bonnet', category:'Bonnets', price:32000, img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80', desc:'OEM steel bonnet for Forester SH/SJ models' },

  // MAZDA
  { id:29, car:'mazda', carName:'Mazda', name:'Mazda CX-5 Skyactiv-G Engine', category:'Engines', price:210000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'2.5L Skyactiv-G petrol engine for CX-5 KF 2017–2024' },
  { id:30, car:'mazda', carName:'Mazda', name:'Mazda CX-5 Front Grille', category:'Grilles', price:18500, img:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80', desc:'OEM chrome grille for CX-5 2017–2022' },
  { id:31, car:'mazda', carName:'Mazda', name:'Mazda 19" Alloy Rims', category:'Rims', price:62000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'19" 5-spoke alloy for Mazda CX-9/CX-5, set of 4', badge:'Set of 4' },
  { id:32, car:'mazda', carName:'Mazda', name:'Mazda CX-5 Turbo Kit', category:'Turbos', price:74000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'OEM turbocharger kit for CX-5 Turbo 2.5T' },
  { id:33, car:'mazda', carName:'Mazda', name:'Mazda 3 Front Bonnet', category:'Bonnets', price:24000, img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80', desc:'Steel bonnet for Mazda 3 BP 2019–2024' },

  // TOYOTA HILUX
  { id:34, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux 2.8 GD-6 Engine', category:'Engines', price:320000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'Complete 2.8L GD-6 diesel engine for Hilux Revo', badge:'Diesel' },
  { id:35, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux GR Sport Front Grille', category:'Grilles', price:28000, img:'https://images.unsplash.com/photo-1594136976374-e04d3b4b7c56?w=400&q=80', desc:'Black honeycomb grille for Hilux GR Sport 2022–2024' },
  { id:36, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux 18" Off-Road Rims', category:'Rims', price:78000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'Heavy-duty 18" alloy rims for Hilux, set of 4', badge:'Set of 4' },
  { id:37, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux GD6 Turbocharger', category:'Turbos', price:82000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'OEM turbo for 2.8 GD-6 diesel engine', badge:'OEM' },
  { id:38, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux Bonnet – Revo Style', category:'Bonnets', price:35000, img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80', desc:'Steel bonnet for Hilux Revo 2016–2024 models' },
  { id:39, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux Bull Bar Front Guard', category:'Body Parts', price:45000, img:'https://images.unsplash.com/photo-1594136976374-e04d3b4b7c56?w=400&q=80', desc:'Heavy steel bull bar with winch mount for Hilux' },
  { id:40, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux Leaf Spring Pack', category:'Suspension', price:24000, img:'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&q=80', desc:'Rear leaf spring upgrade pack for Hilux Revo' },

  // V8
  { id:41, car:'v8', carName:'V8 Engines', name:'Land Cruiser 4.5L V8 Diesel Engine', category:'Engines', price:650000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'1VD-FTV 4.5L V8 twin-turbo diesel for LC200', badge:'V8 Twin-Turbo' },
  { id:42, car:'v8', carName:'V8 Engines', name:'Range Rover 5.0 V8 Supercharged', category:'Engines', price:820000, img:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80', desc:'AJ133 5.0L supercharged V8 for Range Rover Sport SVR', badge:'Supercharged' },
  { id:43, car:'v8', carName:'V8 Engines', name:'Mercedes M178 V8 Biturbo Engine', category:'Engines', price:750000, img:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80', desc:'4.0L AMG M178 biturbo V8, complete assembly', badge:'AMG' },
  { id:44, car:'v8', carName:'V8 Engines', name:'V8 Intercooler Upgrade Kit', category:'Turbos', price:95000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'High-performance front-mount intercooler for V8 turbos' },
  { id:45, car:'v8', carName:'V8 Engines', name:'V8 Performance Exhaust System', category:'Exhaust', price:78000, img:'https://images.unsplash.com/photo-1594136976374-e04d3b4b7c56?w=400&q=80', desc:'Stainless steel V8 cat-back exhaust for deep V8 sound' },
  
  // NEW LUXURY & ESSENTIAL PARTS
  { id:46, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Luxury Nappa Leather Seats', category:'Interior', price:185000, img:'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80', desc:'Full set of luxurious genuine Nappa leather seats for S-Class / E-Class. Includes heating & cooling.', badge:'Luxurious' },
  { id:47, car:'range-rover', carName:'Range Rover', name:'Premium LED Matrix Headlights', category:'Lighting', price:95000, img:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&q=80', desc:'Ultra-bright LED Matrix headlights for Range Rover Vogue. Genuine OEM part.' },
  { id:48, car:'toyota-hilux', carName:'Toyota Hilux', name:'Heavy Duty Timing Belt Kit', category:'Engine Parts', price:18500, img:'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?w=400&q=80', desc:'Complete OEM timing belt kit including tensioners for 1KD/2KD Hilux engines.', badge:'OEM' },
  { id:49, car:'gle', carName:'Mercedes GLE', name:'Carbon Fiber Side Mirrors', category:'Body Parts', price:32000, img:'https://images.unsplash.com/photo-1617469767027-a1a9ccbc66a5?w=400&q=80', desc:'Genuine carbon fiber side mirror caps with integrated LED turn signals.' },
  { id:50, car:'amg', carName:'Mercedes AMG', name:'AMG Forged 22" Black Rims', category:'Rims', price:190000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc:'Exclusive AMG cross-spoke forged 22-inch rims in matte black. Set of 4.', badge:'Premium Forged' },
  { id:51, car:'subaru', carName:'Subaru', name:'Subaru Forester LED Headlights', category:'Lighting', price:55000, img:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&q=80', desc:'Steering responsive LED headlights for Subaru Forester.' },
  { id:52, car:'mazda', carName:'Mazda', name:'Mazda CX-5 Timing Belt & Water Pump', category:'Engine Parts', price:24000, img:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80', desc:'Genuine Mazda timing belt replacement kit with water pump included.' },
  
  // NEW PARTS: RIMS, SHOCKS, MIRRORS, WINDSCREENS FOR EACH CAR
  // Range Rover
  { id:53, car:'range-rover', carName:'Range Rover', name:'Range Rover Autobiography 22" Rims', category:'Rims', price:180000, img:'images/rim.jpg', desc:'Genuine 22-inch alloy rims.' },
  { id:54, car:'range-rover', carName:'Range Rover', name:'Air Suspension Shocks', category:'Suspension', price:120000, img:'images/shock.jpg', desc:'OEM air suspension shock absorbers.' },
  { id:55, car:'range-rover', carName:'Range Rover', name:'Heated Side Mirrors', category:'Body Parts', price:45000, img:'images/mirror.jpg', desc:'Complete heated side mirror assembly.' },
  { id:56, car:'range-rover', carName:'Range Rover', name:'Acoustic Windscreen', category:'Body Parts', price:85000, img:'images/windscreen.jpg', desc:'Genuine acoustic front windscreen.' },
  // Mercedes-Benz
  { id:57, car:'mercedes-benz', carName:'Mercedes-Benz', name:'S-Class 20" Multi-Spoke Rims', category:'Rims', price:160000, img:'images/rim.jpg', desc:'Premium multi-spoke rims.' },
  { id:58, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Airmatic Suspension Shocks', category:'Suspension', price:130000, img:'images/shock.jpg', desc:'Airmatic OEM suspension.' },
  { id:59, car:'mercedes-benz', carName:'Mercedes-Benz', name:'Folding Side Mirrors', category:'Body Parts', price:42000, img:'images/mirror.jpg', desc:'Auto-folding side mirror.' },
  { id:60, car:'mercedes-benz', carName:'Mercedes-Benz', name:'OEM Front Windscreen', category:'Body Parts', price:75000, img:'images/windscreen.jpg', desc:'Heated front windscreen.' },
  // GLE
  { id:61, car:'gle', carName:'GLE Class', name:'GLE 21" AMG Style Rims', category:'Rims', price:175000, img:'images/rim.jpg', desc:'Sport rims for GLE.' },
  { id:62, car:'gle', carName:'GLE Class', name:'Heavy Duty Shocks', category:'Suspension', price:95000, img:'images/shock.jpg', desc:'Rear and front shocks set.' },
  { id:63, car:'gle', carName:'GLE Class', name:'Side Mirrors with Blind Spot Assist', category:'Body Parts', price:48000, img:'images/mirror.jpg', desc:'Mirrors with sensors.' },
  { id:64, car:'gle', carName:'GLE Class', name:'Genuine Windscreen', category:'Body Parts', price:68000, img:'images/windscreen.jpg', desc:'OEM Windscreen for GLE.' },
  // AMG
  { id:65, car:'amg', carName:'AMG Series', name:'Forged Track Rims', category:'Rims', price:210000, img:'images/rim.jpg', desc:'Lightweight track rims.' },
  { id:66, car:'amg', carName:'AMG Series', name:'Adaptive Sport Shocks', category:'Suspension', price:150000, img:'images/shock.jpg', desc:'Performance adaptive shocks.' },
  { id:67, car:'amg', carName:'AMG Series', name:'Carbon Fiber Mirrors', category:'Body Parts', price:65000, img:'images/mirror.jpg', desc:'Real carbon fiber mirrors.' },
  { id:68, car:'amg', carName:'AMG Series', name:'Performance Windscreen', category:'Body Parts', price:90000, img:'images/windscreen.jpg', desc:'Aerodynamic sport windscreen.' },
  // Toyota Hilux
  { id:69, car:'toyota-hilux', carName:'Toyota Hilux', name:'Offroad 18" Rims', category:'Rims', price:85000, img:'images/rim.jpg', desc:'Tough offroad rims.' },
  { id:70, car:'toyota-hilux', carName:'Toyota Hilux', name:'Heavy Duty Leaf Springs & Shocks', category:'Suspension', price:65000, img:'images/shock.jpg', desc:'Complete suspension lift kit.' },
  { id:71, car:'toyota-hilux', carName:'Toyota Hilux', name:'Chrome Side Mirrors', category:'Body Parts', price:18000, img:'images/mirror.jpg', desc:'Hilux chrome side mirrors.' },
  { id:72, car:'toyota-hilux', carName:'Toyota Hilux', name:'Shatterproof Windscreen', category:'Body Parts', price:25000, img:'images/windscreen.jpg', desc:'Toughened glass windscreen.' },
  // Subaru
  { id:73, car:'subaru', carName:'Subaru', name:'STI 19" Sport Rims', category:'Rims', price:95000, img:'images/rim.jpg', desc:'STI performance rims.' },
  { id:74, car:'subaru', carName:'Subaru', name:'Bilstein Shocks', category:'Suspension', price:75000, img:'images/shock.jpg', desc:'Upgraded Bilstein suspension.' },
  { id:75, car:'subaru', carName:'Subaru', name:'Heated Side Mirrors', category:'Body Parts', price:22000, img:'images/mirror.jpg', desc:'Outback/Forester mirrors.' },
  { id:76, car:'subaru', carName:'Subaru', name:'Eyesight Compatible Windscreen', category:'Body Parts', price:35000, img:'images/windscreen.jpg', desc:'Subaru Eyesight calibrated glass.' },
  // Mazda
  { id:77, car:'mazda', carName:'Mazda', name:'Mazda 19" OEM Rims', category:'Rims', price:88000, img:'images/rim.jpg', desc:'Genuine Mazda CX-5 rims.' },
  { id:78, car:'mazda', carName:'Mazda', name:'Skyactiv Suspension Shocks', category:'Suspension', price:45000, img:'images/shock.jpg', desc:'OEM Mazda shock absorbers.' },
  { id:79, car:'mazda', carName:'Mazda', name:'Auto-folding Side Mirrors', category:'Body Parts', price:28000, img:'images/mirror.jpg', desc:'CX-5 side mirrors with motor.' },
  { id:80, car:'mazda', carName:'Mazda', name:'OEM Windscreen', category:'Body Parts', price:32000, img:'images/windscreen.jpg', desc:'Mazda CX-5 front windshield.' },
  // Grilles and Bonnets
  { id:81, car:'range-rover', carName:'Range Rover', name:'Autobiography Front Grille', category:'Body Parts', price:75000, img:'images/grill.jpg', desc:'Premium Range Rover front radiator grille.' },
  { id:82, car:'range-rover', carName:'Range Rover', name:'Aluminum V8 Bonnet', category:'Body Parts', price:140000, img:'images/bonnet.jpg', desc:'Lightweight aluminum front hood/bonnet.' },
  { id:83, car:'mercedes-benz', carName:'Mercedes-Benz', name:'S-Class Diamond Grille', category:'Body Parts', price:85000, img:'images/grill.jpg', desc:'Luxury diamond-style front grille.' },
  { id:84, car:'mercedes-benz', carName:'Mercedes-Benz', name:'OEM Metal Bonnet', category:'Body Parts', price:135000, img:'images/bonnet.jpg', desc:'Original factory replacement hood.' },
  { id:85, car:'gle', carName:'GLE Class', name:'GLE Panamericana Grille', category:'Body Parts', price:90000, img:'images/grill.jpg', desc:'Sporty AMG-style panamericana grille.' },
  { id:86, car:'gle', carName:'GLE Class', name:'GLE Sport Bonnet', category:'Body Parts', price:125000, img:'images/bonnet.jpg', desc:'Aerodynamic front hood for GLE SUV.' },
  { id:87, car:'amg', carName:'AMG Series', name:'G63 AMG Front Grille', category:'Body Parts', price:120000, img:'images/grill.jpg', desc:'Aggressive G-Wagon/AMG series grille.' },
  { id:88, car:'amg', carName:'AMG Series', name:'Carbon Fiber Bonnet', category:'Body Parts', price:280000, img:'images/bonnet.jpg', desc:'Ultra-lightweight real carbon fiber hood.' },
  { id:89, car:'toyota-hilux', carName:'Toyota Hilux', name:'TRD Offroad Grille', category:'Body Parts', price:45000, img:'images/grill.jpg', desc:'Tough TRD style front radiator grille.' },
  { id:90, car:'toyota-hilux', carName:'Toyota Hilux', name:'Hilux Heavy Duty Bonnet', category:'Body Parts', price:85000, img:'images/bonnet.jpg', desc:'Steel front hood replacement for Hilux.' },
  { id:91, car:'subaru', carName:'Subaru', name:'STI Mesh Grille', category:'Body Parts', price:35000, img:'images/grill.jpg', desc:'Sporty mesh front grille for Subaru.' },
  { id:92, car:'subaru', carName:'Subaru', name:'Hood with Scoop (Bonnet)', category:'Body Parts', price:95000, img:'images/bonnet.jpg', desc:'Classic Subaru hood with intercooler scoop.' },
  { id:93, car:'mazda', carName:'Mazda', name:'CX-5 Signature Grille', category:'Body Parts', price:42000, img:'images/grill.jpg', desc:'Genuine Mazda signature front grille.' },
  { id:94, car:'mazda', carName:'Mazda', name:'Mazda OEM Bonnet', category:'Body Parts', price:75000, img:'images/bonnet.jpg', desc:'Factory replacement steel hood for CX-5.' }
];

const SAFETY_TIPS = [
  { icon:'🛡️', title:'Buckle Up Every Trip', msg:'Always wear your seatbelt — it reduces the risk of death in an accident by 45%.' },
  { icon:'📵', title:'No Phone While Driving', msg:'Using a phone while driving makes you 4x more likely to crash. Keep eyes on the road.' },
  { icon:'💡', title:'Check Your Lights Daily', msg:'Ensure headlights, taillights and indicators are working before every journey.' },
  { icon:'🚦', title:'Respect Speed Limits', msg:'Speed limits exist to save lives. Even 10km/h over the limit doubles your crash risk.' },
  { icon:'😴', title:'Never Drive Tired', msg:'Drowsy driving is as dangerous as drunk driving. Rest if you feel sleepy.' },
  { icon:'🌧️', title:'Adapt to Weather', msg:'Reduce speed and increase following distance in rain, fog, or poor visibility.' },
  { icon:'🔧', title:'Maintain Your Vehicle', msg:'Regular servicing prevents accidents. Check tyres, brakes, and oil every 3 months.' },
  { icon:'🍺', title:'Zero Alcohol Policy', msg:'Do not drink and drive. Even one drink impairs your reaction time and judgement.' },
  { icon:'🛞', title:'Tyre Pressure Matters', msg:'Under-inflated tyres increase stopping distance and risk of blowout. Check weekly.' },
  { icon:'🚸', title:'Watch for Pedestrians', msg:'Always slow down near schools, markets and pedestrian crossings.' }
];

const CATEGORIES = ['All','Engines','Engine Parts','Grilles','Rims','Bonnets','Turbos','Suspension','Gearbox','Lighting','Body Parts','Exhaust','Interior'];
