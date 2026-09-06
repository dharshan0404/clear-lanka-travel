/**
 * Clear Lanka Travel - Core Client Application
 * Multilingual Support: English (EN), Tamil (TA), Chinese (ZH), French (FR), German (DE), Russian (RU)
 * Interactive Taxi Fare Calculator, Currency Engine, Curated Tour Filter,
 * Dynamic Photo Switcher, and Supabase CMS Integration.
 */

const CONFIG = {
  whatsappNumber: '94770000000', // Country code without + or spaces
  displayPhone: '+94 77 000 0000',
  email: 'hello@clearlankatravel.com'
};

// Local storage admin override (from local Admin CMS)
const adminContent = JSON.parse(localStorage.getItem('clearLankaAdminContent') || '{}');
Object.assign(CONFIG, {
  whatsappNumber: adminContent.whatsappNumber || CONFIG.whatsappNumber,
  displayPhone: adminContent.displayPhone || CONFIG.displayPhone,
  email: adminContent.email || CONFIG.email
});

/* ==========================================================================
   Comprehensive Multilingual Dictionaries (EN, TA, ZH, FR, DE, RU)
   ========================================================================== */
const I18N = {
  en: {
    announcement_text: "Planning your Sri Lanka holiday? Direct WhatsApp quotes within 15 minutes.",
    nav_calculator: "Fare Calculator",
    nav_services: "Services",
    nav_itineraries: "Tour Packages",
    nav_destinations: "Destinations",
    nav_safety: "Stay Safe",
    nav_login: "Traveller Login",
    hero_eyebrow: "Local help. Honest answers. Zero hidden markups.",
    hero_title: "Sri Lanka travel,<br><em>made clear.</em>",
    hero_lead: "Plan your Sri Lanka trip with verified local drivers, transparent taxi prices, custom itineraries, and scam-free advice that puts you—not a commission agent—first.",
    hero_btn_calc: "Calculate Taxi Fare ↓",
    hero_btn_whatsapp: "Ask on WhatsApp →",
    trust_nofees: "0% Booking Fees",
    trust_verified: "Verified Local Chauffeurs",
    trust_clearprice: "Fixed Transparent Pricing",
    trust_support: "24/7 Direct WhatsApp",
    badge_verified: "Verified Local Chauffeur",
    badge_tolls: "Tolls Included",
    hero_card_sub: "Private AC Sedan · 1–3 guests · 2 large bags",
    hero_card_allinc: "All inclusive",
    hero_card_check: "Check Route →",
    hero_caption_loc: "Central Highlands",
    hero_caption_title: "Nine Arch Bridge, Ella",
    promise_title: "Travel should feel simple & clear.",
    promise_step1_title: "Tell us your route",
    promise_step1_desc: "Choose pickup & destination.",
    promise_step2_title: "Get fair pricing",
    promise_step2_desc: "No hidden highway tolls or fuel charges.",
    promise_step3_title: "Book with peace of mind",
    promise_step3_desc: "Chat directly with local verified drivers.",
    calc_kicker: "Fair-Price Route Estimator",
    calc_heading: "Instant Sri Lanka<br><em>Taxi & Transfer Calculator.</em>",
    calc_lead: "Avoid airport touts and inflated roadside quotes. Select your pickup point, destination, and vehicle to see the honest market price with all expressway tolls included.",
    calc_curr_label: "Preferred Currency:",
    calc_pickup_label: "Pickup Location:",
    calc_dropoff_label: "Destination:",
    calc_vehicle_label: "Select Vehicle Type:",
    veh_sedan_title: "AC Sedan / Saloon",
    veh_sedan_desc: "1–3 Guests · 2 Large Bags",
    veh_tag_popular: "Most Popular",
    veh_van_title: "Spacious KDH Van",
    veh_van_desc: "4–7 Guests · 5–6 Bags",
    veh_tag_family: "Family & Group",
    veh_suv_title: "Premium SUV / Hiace",
    veh_suv_desc: "1–4 Guests · VIP Comfort",
    veh_tag_comfort: "Extra Comfort",
    veh_tuk_title: "Tuk-Tuk (Short Trips)",
    veh_tuk_desc: "1–2 Guests · Day excursions",
    veh_tag_budget: "Budget Scenic",
    calc_res_verified: "Verified Fair Rate",
    calc_res_status: "Live Estimate",
    calc_meta_time: "Est. Travel Time",
    calc_meta_dist: "Distance",
    perk_tolls: "Expressway & highway tolls included",
    perk_airport: "Flight delay tracking & airport paging",
    perk_driver: "English-speaking verified chauffeur",
    perk_door: "Door-to-door air-conditioned service",
    perk_pay: "Pay directly to driver with zero surprises",
    calc_btn_whatsapp: "Lock this Price on WhatsApp ↗",
    calc_guarantee_note: "🔒 No advance deposit needed for airport pickups. Free cancellation up to 12 hours before arrival.",
    services_kicker: "How we help you",
    services_heading: "Trusted travel support<br>for every part of your trip.",
    services_lead: "From the moment you step off your flight to the unforgettable remote villages, we connect you with genuine local people and honest advice.",
    serv1_title: "Airport Pickup & Transfers",
    serv1_desc: "Start relaxed with a punctual driver holding a name board at arrivals, a guaranteed fixed price, and expressway tolls settled.",
    serv2_title: "Dedicated Chauffeurs & Cars",
    serv2_desc: "Hire a reliable English-speaking driver for 3, 7, or 14 days. Vehicle fuel, insurance, and driver meals/lodging are fully covered.",
    serv3_title: "Certified Local Guides",
    serv3_desc: "Discover UNESCO heritage sites, secret tea country hikes, street food walks, and wildlife safaris with licensed local experts.",
    serv4_title: "Bespoke Itinerary Planning",
    serv4_desc: "A customized travel route designed around your pace, travel style, and interests—not an inflexible pre-packaged bus tour.",
    serv5_title: "Boutique Stays & Food Gems",
    serv5_desc: "Personal recommendations for authentic family homestays, coastal villas, and honest local eateries that tourists rarely find.",
    serv_book_link: "Calculate transfer fare",
    serv_driver_link: "Find your chauffeur",
    serv_guide_link: "Meet a local guide",
    serv_route_link: "Explore curated tours",
    serv_stay_link: "Browse destinations",
    itin_kicker: "Curated Journeys",
    itin_heading: "Handcrafted Sri Lanka<br><em>Tour Itineraries.</em>",
    itin_lead: "Every itinerary can be completely tailored to your schedule and preferences. Travel at your own rhythm with a private AC car and knowledgeable driver-guide.",
    tab_all: "All Journeys",
    tab_culture: "Culture & Heritage",
    tab_hills: "Tea Country & Scenic Trains",
    tab_wildlife: "Beaches & Safari",
    itin1_badge: "Most Popular",
    itin1_type: "Comprehensive Tour",
    itin1_title: "Classic Cultural Triangle & Hill Country",
    itin2_badge: "Coastal & Safari",
    itin2_type: "Nature & Ocean",
    itin2_title: "Southern Coast, Whales & Leopard Safari",
    itin3_badge: "Scenic Train",
    itin3_type: "Mountain Escapes",
    itin3_title: "Misty Tea Trails & Highland Train",
    itin4_badge: "Heritage & Island",
    itin4_type: "Cultural Immersion",
    itin4_title: "Jaffna & Northern Peninsula Heritage",
    itin_from: "Private Chauffeur & Vehicle from",
    itin_btn_quote: "Customize ↗",
    dest_kicker: "Explore Sri Lanka",
    dest_heading: "Iconic Destinations<br><em>& Local Secrets.</em>",
    dest_lead: "Whether you dream of misty tea ridges, ancient palace fortresses, or turquoise surf breaks, here is practical information to plan your stops.",
    safety_kicker: "Honest Traveler Advice",
    safety_heading: "Travel Smart & Avoid<br><em>The Common Tourist Traps.</em>",
    safety_lead: "Sri Lanka is remarkably hospitable, safe, and warm. However, like any world-class destination, commission touts exist. Here are the exact insider tips to protect your money.",
    scam1_title: "1. \"Your Hotel is Closed or Burned Down\"",
    scam1_desc: "A tuk-tuk or unregistered driver may claim that your pre-booked hotel is closed, under renovation, or overbooked, offering to take you to their \"friend's nice guest house\" instead (where they earn up to 40% commission).",
    scam1_sol_title: "How to handle it:",
    scam1_sol_desc: "Never believe third parties. Call your hotel directly via the phone number on your booking confirmation. Insist on being taken to the exact entrance.",
    scam2_title: "2. Herbal Spice Gardens & Gem Museum Stops",
    scam2_desc: "During inter-city road trips, drivers may suggest a \"quick free 10-minute tea or spice garden tour\". These shops use intense psychological sales techniques to sell herbal oils, spices, or gems at 10x market prices.",
    scam2_sol_title: "How to handle it:",
    scam2_sol_desc: "Politely tell your driver: \"No shopping stops please, we prefer to go directly to our destination.\" When you book through Clear Lanka Travel, our chauffeurs sign a strict no-commission policy.",
    scam3_title: "3. Tuk-Tuk Meters vs. Fixed Tourist Rates",
    scam3_desc: "In Colombo, tuk-tuks have meters (\"Meter Taxi\" on roof). Insist they turn the meter on. In beach towns (Mirissa, Ella, Galle), meters do not exist; always negotiate and agree upon the total price before getting into the vehicle.",
    scam3_sol_title: "Benchmark Rule:",
    scam3_sol_desc: "Short 2–3 km tuk-tuk rides are typically Rs. 400–700 ($1.50–$2.50). Or use ride-hailing apps like PickMe or Uber in Colombo and Kandy for fixed rates.",
    scam4_title: "4. Kandy to Ella Scenic Train Ticket Truth",
    scam4_desc: "Reserved 1st & 2nd class train seats open strictly 30 days in advance and sell out within minutes to bulk resellers. Touts outside Kandy or Colombo Fort stations will try to sell $3 tickets for $35.",
    scam4_sol_title: "Pro Traveler Tip:",
    scam4_sol_desc: "Unreserved 2nd & 3rd class tickets are sold on the morning of travel at official station counters for less than $2! Alternatively, book your chauffeur to drive your luggage ahead while you enjoy the train.",
    scam5_title: "5. Sacred Temple Etiquette & Dress Code",
    scam5_desc: "When visiting temples (Kandy Tooth Relic, Dambulla, Nallur Kovil): shoulders and knees must be covered (bring a sarong or light scarf). Shoes and hats must be removed before entering holy precincts.",
    scam5_sol_title: "Crucial Legal Rule:",
    scam5_sol_desc: "Never take selfies with your back turned directly to a Buddha statue, and never display Buddha tattoos openly, as this is considered deeply disrespectful under Sri Lankan law.",
    emer_title: "Official 24/7 Helpline Directory",
    emer_sub: "Save these toll-free numbers into your phone upon landing in Sri Lanka:",
    emer_police_label: "Sri Lanka Tourist Police",
    emer_police_desc: "Specialized police unit assisting tourists with disputes, scams, or lost items.",
    emer_med_label: "1990 Suwa Seriya Ambulance",
    emer_med_desc: "Fast, world-class medical emergency response with trained paramedics nationwide.",
    emer_support_label: "Clear Lanka WhatsApp Emergency",
    emer_support_desc: "Message us anytime if you feel unsure about a quote or need local advice.",
    bargain_title: "Free Price-Check Service",
    bargain_desc: "Got a taxi or hotel quote from someone on the street? Send a photo of the quote to our WhatsApp. We will honestly tell you if it's fair or overpriced—completely free!",
    bargain_link: "Check a quote on WhatsApp ↗",
    part_kicker: "Personally Checked",
    part_heading: "Local Chauffeurs & Guides<br><em>We Proudly Recommend.</em>",
    part_lead: "Every partner is personally met, identity-checked, vehicle-inspected, and vetted for fair pricing and English fluency.",
    part_vlabel: "Verified Driver Pick",
    part1_role: "Senior Chauffeur-Guide · Islandwide",
    part1_desc: "Punctual English-speaking chauffeurs with immaculate AC sedans and KDH vans. No commission stops, guaranteed.",
    part2_role: "Licensed Naturalist · Central Highlands",
    part2_desc: "Lifelong Ella local guiding immersive tea plantation hikes, secluded waterfalls, and railway heritage stories.",
    part_avail_btn: "Check Availability on WhatsApp →",
    trust_kicker: "Why Clear Lanka",
    trust_heading: "We’re on your side,<br><em>never in the middle.</em>",
    trust_lead: "We built Clear Lanka Travel after witnessing countless visitors waste hours and precious holiday budgets on inflated taxi commissions and tourist traps.",
    trust_cta: "Check Your Route Fare →",
    t1_title: "100% Transparent Rates",
    t1_desc: "Every quote clearly states whether highway tolls, fuel, and waiting charges are included. No unexpected surcharge at arrival.",
    t2_title: "Identity-Verified Locals",
    t2_desc: "We check National ID, driver licenses, passenger insurance, vehicle safety, and traveler reviews before connecting you.",
    t3_title: "Zero Sales Pressure",
    t3_desc: "Compare prices freely. If our quote isn't the best for your budget, we encourage you to shop around with our tips in hand.",
    t4_title: "Real-Time WhatsApp Support",
    t4_desc: "Have a question while exploring? Our local team is just a WhatsApp message away to help clarify train times or road conditions.",
    enq_kicker: "Let’s Make It Simple",
    enq_heading: "Tell us what you need.<br><em>We’ll make it clear.</em>",
    enq_lead: "No perfect itinerary needed yet. Share what you know and our local travel helpers will reply with honest recommendations and transparent costs.",
    enq_fastest: "Fastest Response (15 Mins)",
    enq_email: "Email Enquiry",
    enq_hours: "Typical WhatsApp reply time: 15–30 mins (8am–10pm Sri Lanka time, UTC+5:30)",
    tab_wa_quote: "Instant WhatsApp Booking",
    tab_email_quote: "Email Custom Itinerary",
    form_name: "Your Name:",
    form_dates: "Travel Dates / Arrival:",
    form_travellers: "Number of Travellers:",
    form_service: "Main Service Needed:",
    form_notes: "Route or Special Requirements:",
    btn_send_wa: "Open & Send on WhatsApp ↗",
    wa_instant_note: "Opens directly on WhatsApp with your details formatted. No waiting!",
    form_email: "Email Address:",
    form_help_legend: "What can we help you with?",
    form_message: "Tell us a little about your trip:",
    form_send_email: "Send Email Enquiry ↗",
    form_privacy_note: "We respect your privacy. Zero spam or unwanted marketing.",
    footer_tagline: "Transparent taxi fares, verified local chauffeurs, and scam-free Sri Lanka travel advice.",
    footer_emer_title: "Emergency Hotlines in Sri Lanka:",
    nav_partners: "Verified Drivers",
    header_book_btn: "BOOK NOW / INQUIRY",
    hero_editorial_p1: "Sri Lanka travel,",
    hero_editorial_p2: "made clear.",
    glass_popular_badge: "Popular Route",
    glass_all_inc: "All highway tolls & fuel included",
    fb_lbl_pickup: "Pickup Location",
    fb_lbl_dropoff: "Destination",
    fb_lbl_veh: "Vehicle Type",
    fb_lbl_curr: "Currency",
    fb_lbl_datetime: "Date & Pickup Time",
    fb_btn_estimate: "GET FARE ESTIMATE",
    promise_kicker: "Our Transparency Promise",
    part3_role: "Marine & Safari Specialist · Mirissa & Yala",
    part3_desc: "Licensed naturalist specializing in ethical blue whale watching cruises from Mirissa harbor and leopard 4x4 safaris in Yala National Park.",
    testi_kicker: "Real International Travellers",
    testi_heading: "Loved by Explorers Worldwide",
    testi_lead: "Over 1,200+ guests from Europe, Asia, and the Americas have trusted our honest, transparent local drivers.",
    testi1_text: "“Our driver was exactly where promised at Colombo Airport holding our name board. The price matched the quote to the exact rupee, and we felt looked after without ever being pressured into tourist shops. Best decision for Sri Lanka!”",
    testi2_text: "“Communication en français via WhatsApp très claire et rapide ! Chauffeur ponctuel, van climatisé d’une propreté exemplaire et conseils précieux pour visiter Sigiriya tôt le matin sans foule.”",
    testi3_text: "“价格透明公道，没有任何绕路或者强制购物店！司机师傅非常细心，帮我们买到了康提往返埃勒的高山茶园火车票，中文沟通也特别顺畅，强烈推荐。”",
    testi4_text: "“Превосходный сервис! Встретили в аэропорту Коломбо точно вовремя, машина чистая с отличным кондиционером. Фиксированная цена без скрытых доплат. Очень дружелюбный водитель.”",
    concierge_badge: "🌍 6 Languages Supported",
    concierge_name: "Clear Lanka Guest Concierge Team",
    concierge_desc: "Fluent assistance in English, Tamil, Chinese, French, German & Russian via WhatsApp.",
    login_kicker: "Traveller & Operator Access",
    login_heading: "Sign In to Your Account",
    login_lead: "Access your saved custom itineraries, verified chauffeur chats, and owner administration studio.",
    login_tab_traveller: "🎒 Traveller Account",
    login_tab_admin: "🛡️ Owner Studio",
    login_card_title: "Plan clearly.<br><em>Travel freely.</em>",
    login_card_desc: "Save useful services, keep enquiry updates together, and return to your Sri Lanka plans whenever you need them.",
    login_btn_signin: "Sign in securely →",
    login_open_full: "Open Standalone Traveller Portal (customer.html) ↗",
    login_open_admin: "Open Owner CMS Studio (admin.html) ↗",
  },

  ta: {
    announcement_text: "இலங்கை விடுமுறைக்கு திட்டமிடுகிறீர்களா? 15 நிமிடங்களில் நேரடி வாட்ஸ்அப் கட்டண விபரம்.",
    nav_calculator: "கட்டண கணிப்பான்",
    nav_services: "சேவைகள்",
    nav_itineraries: "சுற்றுலா தொகுப்புகள்",
    nav_destinations: "இடங்கள்",
    nav_safety: "பாதுகாப்பு வழிகாட்டி",
    nav_login: "பயணி உள்நுழைவு",
    hero_eyebrow: "உள்ளூர் உதவி. நேர்மையான பதில்கள். மறைமுக கட்டணங்கள் இல்லை.",
    hero_title: "இலங்கை பயணம்,<br><em>எளிமையாகவும் தெளிவாகவும்.</em>",
    hero_lead: "சரிபார்க்கப்பட்ட உள்ளூர் ஓட்டுநர்கள், நியாயமான டாக்சி கட்டணங்கள், தனிப்பயன் பயணத் திட்டங்கள் மற்றும் இடைத்தரகர்கள் இல்லாத உண்மையான வழிகாட்டுதலுடன் உங்கள் இலங்கை பயணத்தை திட்டமிடுங்கள்.",
    hero_btn_calc: "டாக்சி கட்டணம் கணக்கிடு ↓",
    hero_btn_whatsapp: "வாட்ஸ்அப்பில் கேளுங்கள் →",
    trust_nofees: "0% முன்பதிவு கட்டணம்",
    trust_verified: "சரிபார்க்கப்பட்ட ஓட்டுநர்கள்",
    trust_clearprice: "நிலையான வெளிப்படையான கட்டணம்",
    trust_support: "24/7 வாட்ஸ்அப் உதவி",
    badge_verified: "சரிபார்க்கப்பட்ட உள்ளூர் ஓட்டுநர்",
    badge_tolls: "ஹைவே டோல் கட்டணம் அடங்கும்",
    hero_card_sub: "சொகுசு ஏசி கார் · 1–3 பயணிகள் · 2 பெரிய பெட்டிகள்",
    hero_card_allinc: "அனைத்தும் அடங்கிய கட்டணம்",
    hero_card_check: "கட்டணம் பார்க்க →",
    hero_caption_loc: "மத்திய மலைநாடு",
    hero_caption_title: "ஒன்பது வளைவு பாலம், எல்லா",
    promise_title: "பயணம் எளிமையாகவும் வெளிப்படையாகவும் இருக்க வேண்டும்.",
    promise_step1_title: "உங்கள் வழியைத் தேர்ந்தெடுக்கவும்",
    promise_step1_desc: "புறப்படும் இடம் & சேருமிடம்.",
    promise_step2_title: "நியாயமான கட்டணத்தைப் பெறுங்கள்",
    promise_step2_desc: "எரிபொருள் அல்லது நெடுஞ்சாலை கூடுதல் கட்டணங்கள் இல்லை.",
    promise_step3_title: "மனநிறைவோடு பயணம் செய்யுங்கள்",
    promise_step3_desc: "உள்ளூர் ஓட்டுநர்களுடன் நேரடியாகப் பேசுங்கள்.",
    calc_kicker: "நியாயமான கட்டண கணிப்பான்",
    calc_heading: "உடனடி இலங்கை<br><em>டாக்சி & வாகன கட்டண கணிப்பான்.</em>",
    calc_lead: "விமான நிலைய தரகர்கள் மற்றும் அதிகப்படியான கட்டணங்களைத் தவிருங்கள். உங்கள் பயணப் பாதை மற்றும் வாகனத்தைத் தேர்வு செய்து, ஹைவே டோல் உள்ளிட்ட சரியான விலையை உடனே தெரிந்து கொள்ளுங்கள்.",
    calc_curr_label: "பயன்படுத்த விரும்பும் நாணயம்:",
    calc_pickup_label: "புறப்படும் இடம்:",
    calc_dropoff_label: "சேருமிடம்:",
    calc_vehicle_label: "வாகன வகையைத் தேர்வு செய்யவும்:",
    veh_sedan_title: "ஏசி கார் (Sedan / Saloon)",
    veh_sedan_desc: "1–3 பயணிகள் · 2 பெரிய சூட்கேஸ்கள்",
    veh_tag_popular: "மிகப் பிரபலம்",
    veh_van_title: "விசாலமான KDH வேன்",
    veh_van_desc: "4–7 பயணிகள் · 5–6 சூட்கேஸ்கள்",
    veh_tag_family: "குடும்பம் & குழுவினர்",
    veh_suv_title: "பிரீமியம் SUV / Hiace",
    veh_suv_desc: "1–4 பயணிகள் · கூடுதல் சொகுசு",
    veh_tag_comfort: "விஐபி சௌகரியம்",
    veh_tuk_title: "ஆட்டோ / Tuk-Tuk (குறுகிய தூரம்)",
    veh_tuk_desc: "1–2 பயணிகள் · அழகிய பகல் உலா",
    veh_tag_budget: "சிக்கனப் பயணம்",
    calc_res_verified: "சரிபார்க்கப்பட்ட நியாயமான விலை",
    calc_res_status: "நேரடி மதிப்பீடு",
    calc_meta_time: "தோராய பயண நேரம்",
    calc_meta_dist: "தூரம்",
    perk_tolls: "எக்ஸ்பிரஸ்வே & நெடுஞ்சாலை டோல் கட்டணம் அடங்கும்",
    perk_airport: "விமான தாமத கண்காணிப்பு & வரவேற்பு அட்டை",
    perk_driver: "ஆங்கிலம் / தமிழ் பேசும் பயிற்சி பெற்ற ஓட்டுநர்",
    perk_door: "வீடு / தங்கும் விடுதி வாசலில் ஏறும் வசதி",
    perk_pay: "ஓட்டுநரிடம் நேரடியாக செலுத்தும் எளிய முறை",
    calc_btn_whatsapp: "வாட்ஸ்அப்பில் இந்த கட்டணத்தை உறுதி செய் ↗",
    calc_guarantee_note: "🔒 விமான நிலைய பிக்கப்பிற்கு முன் பணம் தேவையில்லை. வருவதற்கு 12 மணி நேரத்திற்கு முன் இலவச ரத்து வசதி.",
    services_kicker: "எங்கள் சேவைகள்",
    services_heading: "உங்கள் பயணத்தின் ஒவ்வொரு பகுதிக்கும்<br>நம்பகமான ஆதரவு.",
    services_lead: "விமானத்தில் இருந்து இறங்கும் நிமிடம் முதல் கண்கவர் கிராமங்கள் வரை, நேர்மையான உள்ளூர் மனிதர்களுடன் உங்களை இணைக்கிறோம்.",
    serv1_title: "விமான நிலைய பிக்கப் & இடமாற்றம்",
    serv1_desc: "விமான நிலையத்தில் உங்கள் பெயர் பலகையுடன் காத்திருக்கும் ஓட்டுநர், நிலையான விலை, நிம்மதியான ஆரம்பம்.",
    serv2_title: "முழு பயணத்திற்குமான பிரத்யேக ஓட்டுநர் & கார்",
    serv2_desc: "3, 7 அல்லது 14 நாட்களுக்கு நம்பகமான கார் & ஓட்டுநர். எரிபொருள், காப்பீடு அனைத்தும் அடங்கும்.",
    serv3_title: "அங்கீகரிக்கப்பட்ட உள்ளூர் வழிகாட்டிகள்",
    serv3_desc: "பாரம்பரிய இடங்கள், மலைப்பாதை மலையேற்றங்கள், உணவு உலாக்கள் மற்றும் வனவிலங்கு சஃபாரிகளை அனுபவிக்க.",
    serv4_title: "தனிப்பயன் பயணத் திட்டம்",
    serv4_desc: "உங்கள் விருப்பம், நேரம் மற்றும் பட்ஜெட்டிற்கு ஏற்ப வடிவமைக்கப்பட்ட சுதந்திரமான பயணத் திட்டம்.",
    serv5_title: "சிறந்த தங்கும் விடுதிகள் & உணவு வழிகாட்டல்",
    serv5_desc: "சுற்றுலாப் பயணிகள் அரிதாக அறியும் சிறந்த குடும்ப ஹோம்ஸ்டே மற்றும் உண்மையான உள்ளூர் உணவகங்கள்.",
    serv_book_link: "கட்டணம் கணக்கிடு",
    serv_driver_link: "ஓட்டுநரைத் தேர்வு செய்",
    serv_guide_link: "வழிகாட்டியைச் சந்திக்க",
    serv_route_link: "சுற்றுலா தொகுப்புகளைப் பார்",
    serv_stay_link: "இடங்களைப் பார்வையிடு",
    itin_kicker: "சிறப்பு பயணங்கள்",
    itin_heading: "அழகிய இலங்கை<br><em>சுற்றுலா தொகுப்புகள்.</em>",
    itin_lead: "ஒவ்வொரு பயணத் திட்டமும் உங்கள் விருப்பத்திற்கு ஏற்ப மாற்றியமைக்கப்படலாம். தனிப்பட்ட ஏசி கார் மற்றும் அனுபவமிக்க வழிகாட்டியுடன் மகிழுங்கள்.",
    tab_all: "அனைத்து பயணங்கள்",
    tab_culture: "கலாச்சாரம் & பாரம்பரியம்",
    tab_hills: "தேயிலை தோட்டம் & மலை ரயில்",
    tab_wildlife: "கடற்கரை & சஃபாரி",
    itin1_badge: "மிகப் பிரபலம்",
    itin1_type: "முழுமையான சுற்றுலா",
    itin1_title: "பாரம்பரிய முக்கோணம் & மலைநாடு (7 நாட்கள்)",
    itin2_badge: "கடற்கரை & சஃபாரி",
    itin2_type: "இயற்கை & கடல்",
    itin2_title: "தெற்கு கடற்கரை, திமிங்கலம் & சிறுத்தை சஃபாரி (5 நாட்கள்)",
    itin3_badge: "அழகிய ரயில் பயணம்",
    itin3_type: "மலைநாட்டு உலா",
    itin3_title: "பனிமூட்ட தேயிலைத் தோட்டங்கள் & மலை ரயில் (4 நாட்கள்)",
    itin4_badge: "பாரம்பரியம் & தீவு",
    itin4_type: "கலாச்சார பயணம்",
    itin4_title: "யாழ்ப்பாணம் & வடபகுதி பாரம்பரிய உலா (4 நாட்கள்)",
    itin_from: "பிரத்யேக கார் & ஓட்டுநர் கட்டணம் ஆரம்பம்:",
    itin_btn_quote: "மாற்றியமைக்க ↗",
    dest_kicker: "இலங்கையை ஆராயுங்கள்",
    dest_heading: "முக்கிய இடங்கள்<br><em>& ரகசிய அழகுகள்.</em>",
    dest_lead: "பனிமூட்ட மலைகள், வரலாற்று கோட்டைகள் அல்லது அமைதியான கடற்கரைகள்—உங்கள் பயணத்தை திட்டமிட தேவையான தகவல்கள்.",
    safety_kicker: "நேர்மையான பயணியர் ஆலோசனை",
    safety_heading: "பாதுகாப்பாக பயணியுங்கள்<br><em>ஏமாற்று வேலைகளைத் தவிருங்கள்.</em>",
    safety_lead: "இலங்கை மிகவும் அன்பான, பாதுகாப்பான நாடு. இருப்பினும், சுற்றுலாப் பயணிகளை ஏமாற்றும் தரகர்களிடம் இருந்து தப்பிக்க சில முக்கிய ஆலோசனைகள்:",
    scam1_title: "1. \"உங்கள் ஹோட்டல் மூடப்பட்டுள்ளது அல்லது தீப்பிடித்தது\"",
    scam1_desc: "சில ஆட்டோ ஓட்டுநர்கள் நீங்கள் பதிவு செய்த ஹோட்டல் மூடப்பட்டுவிட்டதாகக் கூறி, 40% கமிஷன் கிடைக்கும் தங்கள் நண்பரின் விடுதிக்கு அழைத்துச் செல்ல முயல்வர்.",
    scam1_sol_title: "எப்படி சமாளிப்பது:",
    scam1_sol_desc: "யார் சொல்வதையும் கண்மூடித்தனமாக நம்பாதீர்கள். உங்கள் ஹோட்டல் ஆவணத்தில் உள்ள எண்ணிற்கு நேரடியாக அழையுங்கள். அதே இடத்திற்கு கொண்டு சேர்க்க வற்புறுத்துங்கள்.",
    scam2_title: "2. மூலிகை தோட்டங்கள் & ரத்தினக் கல் கடைகள்",
    scam2_desc: "பயணத்தின் நடுவில் இலவச தேயிலை அல்லது மசாலா தோட்டம் என்று அழைத்துச் சென்று, சந்தை விலையை விட 10 மடங்கு கூடுதல் விலையில் விற்க முயற்சிப்பர்.",
    scam2_sol_title: "எப்படி சமாளிப்பது:",
    scam2_sol_desc: "\"ஷாப்பிங் கடைகள் வேண்டாம், நேரடியாக சேருமிடம் செல்லுங்கள்\" என்று உறுதியாகக் கூறுங்கள். கிளியர் லங்கா ஓட்டுநர்கள் கமிஷன் கடைகளுக்கு அழைத்துச் செல்வதில்லை.",
    scam3_title: "3. ஆட்டோ மீட்டர் vs நிலையான கட்டணம்",
    scam3_desc: "கொழும்பில் மீட்டரை இயக்கும்படி கேளுங்கள். கடற்கரை நகரங்களில் (மிரிஸ்ஸ, காலி, எல்லா) மீட்டர் இல்லை; எனவே ஏறும் முன்பே முழு கட்டணத்தைப் பேசி முடிவு செய்யுங்கள்.",
    scam3_sol_title: "வழக்கமான கட்டணம்:",
    scam3_sol_desc: "குறுகிய 2-3 கி.மீ தூரத்திற்கு சுமார் ரூ. 400–700 ($1.50–$2.50) ஆகும். கொழும்பு மற்றும் கண்டியில் PickMe அல்லது Uber செயலியைப் பயன்படுத்தலாம்.",
    scam4_title: "4. கண்டி - எல்லா மலை ரயில் பயண உண்மை",
    scam4_desc: "முன்பதிவு பெட்டிகள் 30 நாட்களுக்கு முன் திறக்கப்பட்டு நிமிடங்களில் விற்றுத் தீர்ந்துவிடும். வெளியில் உள்ள தரகர்கள் $3 டிக்கெட்டை $35க்கு விற்க முயல்வார்கள்.",
    scam4_sol_title: "பயனுள்ள குறிப்பு:",
    scam4_sol_desc: "பயண நாளன்று காலையில் ரயில் நிலைய கவுண்ட்டரில் முன்பதிவில்லா 2ம், 3ம் வகுப்பு டிக்கெட்டுகள் $2க்கும் குறைவாகவே கிடைக்கும்! அல்லது உங்கள் லக்கேஜை காரில் அனுப்பிவிட்டு ரயிலில் பயணிக்கலாம்.",
    scam5_title: "5. வழிபாட்டு தல ஆடை கட்டுப்பாடு & மரியாதை",
    scam5_desc: "கோயில்கள் மற்றும் விகாரைகளுக்கு செல்லும்போது தோள்பட்டைகளும் முழங்கால்களும் மூடப்பட்டிருக்க வேண்டும். காலணிகளை கழற்றிவிட்டு செல்ல வேண்டும்.",
    scam5_sol_title: "முக்கிய சட்டம்:",
    scam5_sol_desc: "புத்தர் சிலைக்கு முதுகு காட்டி செல்ஃபி எடுப்பதோ, புத்தர் உருவ பச்சைக் குத்தல்களை வெளிப்படையாகக் காட்டுவதோ இலங்கையில் சட்டப்படி குற்றமாகும்.",
    emer_title: "அவசர உதவி எண்கள் (24/7)",
    emer_sub: "இலங்கைக்குள் வந்தவுடன் இந்த கட்டணமில்லா எண்களை சேமித்து வைக்கவும்:",
    emer_police_label: "இலங்கை சுற்றுலா காவல் துறை",
    emer_police_desc: "சுற்றுலாப் பயணிகளின் பிரச்சனைகள் மற்றும் உதவிகளுக்கான சிறப்பு காவல் பிரிவு.",
    emer_med_label: "1990 சுவசரிய ஆம்புலன்ஸ் சேவை",
    emer_med_desc: "இலவச மற்றும் அதிவிரைவான அவசர மருத்துவ ஊர்தி சேவை.",
    emer_support_label: "கிளியர் லங்கா வாட்ஸ்அப் உதவி",
    emer_support_desc: "கட்டணம் அல்லது வழி குறித்து சந்தேகம் இருந்தால் உடனே மெசேஜ் செய்யுங்கள்.",
    bargain_title: "இலவச கட்டண சரிபார்ப்பு சேவை",
    bargain_desc: "வெளியில் யாராவது உங்களுக்கு டாக்சி அல்லது ஹோட்டல் கட்டணம் சொன்னால், அதை எங்கள் வாட்ஸ்அப்பிற்கு அனுப்புங்கள். அது நியாயமானதா என்று இலவசமாக சரிபார்த்து சொல்வோம்!",
    bargain_link: "வாட்ஸ்அப்பில் சரிபார்க்க ↗",
    part_kicker: "நேரில் சரிபார்க்கப்பட்டவர்கள்",
    part_heading: "நாங்கள் பெருமையுடன் பரிந்துரைக்கும்<br><em>உள்ளூர் ஓட்டுநர்கள் & வழிகாட்டிகள்.</em>",
    part_lead: "ஒவ்வொரு கூட்டாளியும் நேரில் சந்திக்கப்பட்டு, அடையாளம் மற்றும் வாகன பாதுகாப்பு உறுதி செய்யப்பட்டுள்ளனர்.",
    part_vlabel: "தேர்ந்தெடுக்கப்பட்ட ஓட்டுநர்",
    part1_role: "மூத்த ஓட்டுநர்-வழிகாட்டி · தீவு முழுவதும்",
    part1_desc: "ஆங்கிலம் பேசும் சுத்தமான ஏசி கார்கள். கமிஷன் கடைகள் இல்லாத நேர்மையான சேவை.",
    part2_role: "அனுபவமிக்க வழிகாட்டி · மத்திய மலைநாடு",
    part2_desc: "எல்லா பகுதியில் தேயிலைத் தோட்டங்கள், நீர்வீழ்ச்சிகள் மற்றும் மலை ரயில் பாதைகளில் அழைத்துச் செல்லும் உள்ளூர் நிபுணர்.",
    part_avail_btn: "கிடைக்குமா என வாட்ஸ்அப்பில் பார்க்க →",
    trust_kicker: "கிளியர் லங்காவை ஏன் தேர்வு செய்ய வேண்டும்",
    trust_heading: "நாங்கள் உங்கள் பக்கம்,<br><em>இடைத்தரகராக அல்ல.</em>",
    trust_lead: "சுற்றுலாப் பயணிகள் தேவையற்ற கமிஷன்களால் பணத்தை இழப்பதைத் தடுக்கவே இந்த சேவையைத் தொடங்கினோம்.",
    trust_cta: "உங்கள் பயணக் கட்டணத்தை கணக்கிடுங்கள் →",
    t1_title: "100% வெளிப்படையான கட்டணம்",
    t1_desc: "ஹைவே டோல், எரிபொருள் உள்ளிட்ட அனைத்தும் மேற்கோளிலேயே குறிப்பிடப்படும். மறைமுக கட்டணங்கள் இல்லை.",
    t2_title: "அடையாளம் உறுதி செய்யப்பட்டவர்கள்",
    t2_desc: "தேசிய அடையாள அட்டை, ஓட்டுநர் உரிமம் மற்றும் வாகன காப்பீடு ஆகியவை முழுமையாக பரிசோதிக்கப்படுகின்றன.",
    t3_title: "வற்புறுத்தல்கள் அற்ற சுதந்திரம்",
    t3_desc: "கட்டணங்களை ஒப்பிட்டுப் பாருங்கள். எங்கள் ஆலோசனை உங்களுக்கு பயனுள்ளதாக இருப்பதே எங்கள் வெற்றி.",
    t4_title: "நேரடி வாட்ஸ்அப் உதவி",
    t4_desc: "பயணத்தின் போது எந்த உதவி அல்லது சந்தேகம் என்றாலும் எங்கள் உள்ளூர் குழு வாட்ஸ்அப்பில் உடனே பதிலளிக்கும்.",
    enq_kicker: "பயணத்தை எளிதாக்குங்கள்",
    enq_heading: "உங்கள் தேவையைச் சொல்லுங்கள்.<br><em>நாங்கள் தெளிவுபடுத்துகிறோம்.</em>",
    enq_lead: "முழுமையான திட்டம் தேவையில்லை. நீங்கள் விரும்பும் இடங்களைச் சொன்னால் போதும், உள்ளூர் உதவியாளர் வழிகாட்டுவார்.",
    enq_fastest: "விரைவான பதில் (15 நிமிடங்களில்)",
    enq_email: "மின்னஞ்சல் விசாரணை",
    enq_hours: "வழக்கமான வாட்ஸ்அப் பதில் நேரம்: 15–30 நிமிடங்கள் (காலை 8 - இரவு 10 இலங்கை நேரம்)",
    tab_wa_quote: "உடனடி வாட்ஸ்அப் முன்பதிவு",
    tab_email_quote: "மின்னஞ்சல் மூலம் பயணத் திட்டம்",
    form_name: "உங்கள் பெயர்:",
    form_dates: "பயண தேதிகள் / வரும் நாள்:",
    form_travellers: "பயணிகள் எண்ணிக்கை:",
    form_service: "தேவையான முதன்மை சேவை:",
    form_notes: "பயண வழி அல்லது சிறப்பு தேவைகள்:",
    btn_send_wa: "வாட்ஸ்அப்பில் அனுப்பித் தொடங்குக ↗",
    wa_instant_note: "உங்கள் விவரங்களுடன் நேரடியாக வாட்ஸ்அப் திறக்கும். காத்திருக்க வேண்டியதில்லை!",
    form_email: "மின்னஞ்சல் முகவரி:",
    form_help_legend: "நாங்கள் எதில் உதவ வேண்டும்?",
    form_message: "உங்கள் பயணத்தைப் பற்றி சுருக்கமாகக் கூறுங்கள்:",
    form_send_email: "மின்னஞ்சல் அனுப்பவும் ↗",
    form_privacy_note: "உங்கள் தனியுரிமையை மதிக்கிறோம். ஸ்பேம் விளம்பரங்கள் இருக்காது.",
    footer_tagline: "வெளிப்படையான டாக்சி கட்டணங்கள், சரிபார்க்கப்பட்ட ஓட்டுநர்கள் மற்றும் நம்பகமான இலங்கை பயண வழிகாட்டல்.",
    footer_emer_title: "இலங்கை அவசர உதவி எண்கள்:",
    nav_partners: "சரிபார்க்கப்பட்ட ஓட்டுநர்கள்",
    header_book_btn: "BOOK NOW / INQUIRY",
    hero_editorial_p1: "இலங்கை பயணம்,",
    hero_editorial_p2: "தெளிவாகவும் எளிமையாகவும்.",
    glass_popular_badge: "பிரபலமான வழித்தடம்",
    glass_all_inc: "அனைத்து டோல் மற்றும் எரிபொருள் கட்டணம் அடங்கும்",
    fb_lbl_pickup: "புறப்படும் இடம்",
    fb_lbl_dropoff: "சென்றடையும் இடம்",
    fb_lbl_veh: "வாகன வகை",
    fb_lbl_curr: "நாணயம்",
    fb_lbl_datetime: "தேதி & புறப்படும் நேரம்",
    fb_btn_estimate: "கட்டணத்தை கணக்கிடு",
    promise_kicker: "எங்கள் வெளிப்படைத்தன்மை உறுதிமொழி",
    part3_role: "கடல் மற்றும் சவாரி நிபுணர் · மிரிசா & யாலா",
    part3_desc: "மிரிசா துறைமுகத்தில் இருந்து நீலத் திமிங்கிலம் பார்க்கும் பயணங்கள் மற்றும் யாலா தேசிய பூங்காவில் 4x4 சிறுத்தை சவாரிகளில் நிபுணத்துவம் பெற்ற உரிமம் பெற்ற இயற்கை வழிகாட்டி.",
    testi_kicker: "உண்மையான சர்வதேச பயணிகள்",
    testi_heading: "உலகெங்கிலும் உள்ள பயணிகளால் விரும்பப்படுகிறது",
    testi_lead: "ஐரோப்பா, ஆசியா மற்றும் அமெரிக்காவைச் சேர்ந்த 1,200க்கும் மேற்பட்ட பயணிகள் எங்கள் நேர்மையான, வெளிப்படையான உள்ளூர் ஓட்டுநர்களை நம்பியுள்ளனர்.",
    testi1_text: "“கொழும்பு விமான நிலையத்தில் எங்கள் பெயர்ப் பலகையை ஏந்தியவாறு ஓட்டுநர் சரியான நேரத்தில் இருந்தார். கட்டணம் கூறியவாறே இருந்தது. எந்தவித தேவையற்ற கடைகளுக்கும் எங்களை வற்புறுத்தவில்லை. மிகச் சிறந்த அனுபவம்!”",
    testi2_text: "“வாட்ஸ்அப் மூலம் மிக விரைவான தகவல் தொடர்பு! சரியான நேரத்தில் வந்த ஓட்டுநர், சுத்தமான ஏசி வேன் மற்றும் கூட்ட நெரிசலின்றி சிகிரியாவைப் பார்வையிட சிறந்த உள்ளூர் ஆலோசனைகளை வழங்கினார்.”",
    testi3_text: "“விலை முற்றிலும் வெளிப்படையானது, மறைமுக கட்டணங்கள் இல்லை! எங்கள் ஓட்டுநர் மிகவும் கவனமாக இருந்தார், கண்டி-எல்லா ரயில் டிக்கெட்டுகளைப் பெற உதவினார். மிகவும் பரிந்துரைக்கத்தக்கது.”",
    testi4_text: "“அருமையான சேவை! கொழும்பு விமான நிலையத்தில் சரியான நேரத்தில் வரவேற்றார், சிறந்த குளிரூட்டப்பட்ட வாகனம். மறைமுக கட்டணங்கள் இல்லாத நிலையான விலை.”",
    concierge_badge: "🌍 6 மொழிகள் ஆதரிக்கப்படுகின்றன",
    concierge_name: "கிளியர் லங்கா பயண வரவேற்பு குழு",
    concierge_desc: "வாட்ஸ்அப் வழியாக ஆங்கிலம், தமிழ், சீனம், பிரெஞ்சு, ஜெர்மன் மற்றும் ரஷ்ய மொழிகளில் உடனடி உதவி.",
    login_kicker: "பயணி மற்றும் நிர்வாகி உள்நுழைவு",
    login_heading: "உங்கள் கணக்கில் உள்நுழையவும்",
    login_lead: "சேமிக்கப்பட்ட பயணத் திட்டங்கள் மற்றும் நிர்வாக ஸ்டுடியோவை அணுகவும்.",
    login_tab_traveller: "🎒 பயணி கணக்கு",
    login_tab_admin: "🛡️ நிர்வாக ஸ்டுடியோ",
    login_card_title: "தெளிவாக திட்டமிடுங்கள்.<br><em>சுதந்திரமாக பயணியுங்கள்.</em>",
    login_card_desc: "பயனுள்ள சேவைகளைச் சேமித்து, உங்கள் இலங்கை பயணத் திட்டங்களை எப்போது வேண்டுமானாலும் சரிபார்க்கவும்.",
    login_btn_signin: "பாதுகாப்பாக உள்நுழைக →",
    login_open_full: "பயணி போர்ட்டலைத் திறக்கவும் (customer.html) ↗",
    login_open_admin: "நிர்வாக ஸ்டுடியோவைத் திறக்கவும் (admin.html) ↗",
  },

  zh: {
    announcement_text: "正在计划您的斯里兰卡假期？15分钟内提供直接 WhatsApp / 微信报价。",
    nav_calculator: "车费计算器",
    nav_services: "服务项目",
    nav_itineraries: "精选路线",
    nav_destinations: "旅游目的地",
    nav_safety: "防坑与安全",
    nav_login: "旅客登录",
    hero_eyebrow: "当地协助 · 诚实回答 · 零隐形加价",
    hero_title: "斯里兰卡之旅，<br><em>清晰透明。</em>",
    hero_lead: "预订经认证的当地司机、透明出租车价格、定制行程，享受无中间商加价的安心旅程。",
    hero_btn_calc: "计算出租车费用 ↓",
    hero_btn_whatsapp: "WhatsApp 咨询 →",
    trust_nofees: "0% 预订手续费",
    trust_verified: "实名认证当地司机",
    trust_clearprice: "固定透明实价",
    trust_support: "24/7 全天候协助",
    badge_verified: "认证专职司机",
    badge_tolls: "含高速公路费",
    hero_card_sub: "私人空调轿车 · 1–3位旅客 · 2件大行李",
    hero_card_allinc: "费用全包",
    hero_card_check: "查看路线 →",
    hero_caption_loc: "中部高地",
    hero_caption_title: "埃拉九拱桥 (Nine Arch Bridge)",
    promise_title: "旅行理应轻松而清晰透明。",
    promise_step1_title: "告诉我们您的路线",
    promise_step1_desc: "选择出发地与目的地。",
    promise_step2_title: "获取公道价格",
    promise_step2_desc: "无隐形过路费或燃油附加费。",
    promise_step3_title: "安心出行无忧",
    promise_step3_desc: "直接与经认证的司机沟通。",
    calc_kicker: "公道价格路线估算",
    calc_heading: "斯里兰卡即时<br><em>出租车与包车计算器。</em>",
    calc_lead: "告别机场拉客与路边漫天要价。选择上车地点、目的地和车型，立即查看包含所有高速费用的真实市场价。",
    calc_curr_label: "选择结算货币：",
    calc_pickup_label: "出发地点：",
    calc_dropoff_label: "目的地：",
    calc_vehicle_label: "选择车型：",
    veh_sedan_title: "空调轿车 (Sedan)",
    veh_sedan_desc: "1–3位乘客 · 2件大行李",
    veh_tag_popular: "最受欢迎",
    veh_van_title: "宽敞KDH面包车",
    veh_van_desc: "4–7位乘客 · 5–6件行李",
    veh_tag_family: "家庭与团队",
    veh_suv_title: "高端豪华SUV / Hiace",
    veh_suv_desc: "1–4位乘客 · VIP尊享舒适",
    veh_tag_comfort: "尊享豪华",
    veh_tuk_title: "特色突突车 (Tuk-Tuk)",
    veh_tuk_desc: "1–2位乘客 · 短途风景游",
    veh_tag_budget: "经济观光",
    calc_res_verified: "认证公道价格",
    calc_res_status: "实时估算",
    calc_meta_time: "预计用时",
    calc_meta_dist: "总里程",
    perk_tolls: "包含所有高速过路费与燃油",
    perk_airport: "航班动态跟踪与接机举牌服务",
    perk_driver: "流利英语/经认证专业司机",
    perk_door: "门到门全程空调专车服务",
    perk_pay: "直接支付司机，绝无隐形加价",
    calc_btn_whatsapp: "在 WhatsApp 锁定此优惠价格 ↗",
    calc_guarantee_note: "🔒 机场接送无需提前押金。抵达前12小时免费取消。",
    services_kicker: "我们的服务",
    services_heading: "为您的旅程每一步<br>提供值得信赖的保障。",
    services_lead: "从走下飞机的那一刻，到难以忘怀的古老村落，我们为您连接可靠的当地人与诚恳的建议。",
    serv1_title: "机场接送服务",
    serv1_desc: "司机在到达口举牌等候，固定实价，高速过路费全包，开启惬意假期。",
    serv2_title: "全程专车司机与包车",
    serv2_desc: "可按3天、7天或14天包车。车辆燃油、全险、司机食宿全包。",
    serv3_title: "官方认证当地向导",
    serv3_desc: "持证当地专家带您探访联合国教科文组织遗址、秘密茶山徒步、地道市集与野生动物游猎。",
    serv4_title: "个性化定制行程",
    serv4_desc: "根据您的节奏、兴趣和预算量身定制路线，拒绝刻板赶路的大巴游。",
    serv5_title: "精品度假美宿与地道美食",
    serv5_desc: "亲身体验推荐的高分特色家庭民宿、海边别墅与极少有游客打扰的美味餐厅。",
    serv_book_link: "计算接送费用",
    serv_driver_link: "寻找专车司机",
    serv_guide_link: "结识当地向导",
    serv_route_link: "探索精选路线",
    serv_stay_link: "浏览目的地",
    itin_kicker: "精选路线",
    itin_heading: "匠心定制斯里兰卡<br><em>经典旅游路线。</em>",
    itin_lead: "每条路线均可根据您的偏好完全定制。配备私人空调车和经验丰富的中文/英文司机导游。",
    tab_all: "全部行程",
    tab_culture: "文化与遗产",
    tab_hills: "高山茶园与高山火车",
    tab_wildlife: "海滩与野生动物",
    itin1_badge: "最受欢迎",
    itin1_type: "全景综合游",
    itin1_title: "经典文化金三角与高山茶园 (7天)",
    itin2_badge: "海滩与游猎",
    itin2_type: "自然与海洋",
    itin2_title: "南部海岸观鲸与雅拉花豹游猎 (5天)",
    itin3_badge: "高山观景火车",
    itin3_type: "高山秘境",
    itin3_title: "云雾茶香步道与高山火车 (4天)",
    itin4_badge: "文化与海岛",
    itin4_type: "深度文化沉浸",
    itin4_title: "贾夫纳与北部半岛文化遗产 (4天)",
    itin_from: "包车与司机费用起价：",
    itin_btn_quote: "定制行程 ↗",
    dest_kicker: "探索斯里兰卡",
    dest_heading: "标志性目的地<br><em>与当地小众秘境。</em>",
    dest_lead: "无论是云雾缭绕的茶山、巍峨的空中宫殿，还是蔚蓝的冲浪海湾，这里为您提供全面的实用指南。",
    safety_kicker: "诚挚旅客建议",
    safety_heading: "聪明出行<br><em>避开常见旅游陷阱。</em>",
    safety_lead: "斯里兰卡人民热情好客、民风淳朴。但像所有热门旅游地一样，也存在佣金拉客现象。以下为保护您旅行利益的内行建议：",
    scam1_title: "1. “您的酒店已关门或发生火灾”",
    scam1_desc: "突突车或非正规司机会谎称您预订的酒店关门或满房，试图带您去他们有高额回扣的“朋友旅馆”。",
    scam1_sol_title: "如何应对：",
    scam1_sol_desc: "不要轻信中途搭讪者。直接按预订确认单上的电话致电酒店，坚持要求司机送到原定地址。",
    scam2_title: "2. 香料草药园与宝石展厅回扣陷阱",
    scam2_desc: "城际途中，司机可能会建议“顺路免费参观10分钟草药园”，进店后会推销价格高出市价10倍的精油和宝石。",
    scam2_sol_title: "如何应对：",
    scam2_sol_desc: "礼貌明确告诉司机：“我们不进购物店，请直接开往目的地。”Clear Lanka 司机均签署了严格的无回扣承诺。",
    scam3_title: "3. 突突车打表与固定游客价",
    scam3_desc: "在科伦坡，请务必坚持让司机打表（车顶标有 Meter Taxi）。在海滩度假小镇没有打表器，请在上车前谈妥总价。",
    scam3_sol_title: "参考标准：",
    scam3_sol_desc: "2–3公里的短途一般为 400–700 卢比（约1.5–2.5美元）。也可在科伦坡或康提使用 PickMe / Uber 叫车。",
    scam4_title: "4. 康提至埃拉高山火车购票真相",
    scam4_desc: "一等座和二等座预留票提前30天开售，几分钟内常被票贩子抢空并高价兜售。不要在站外花35美元买3美元的票！",
    scam4_sol_title: "内行贴士：",
    scam4_sol_desc: "车站官方窗口在发车当天早上出售无座的二等/三等票，票价不到2美元！也可以让包车司机载着行李先走，您轻松乘火车。",
    scam5_title: "5. 寺庙礼仪与着装守则",
    scam5_desc: "进入寺庙（佛牙寺、石窟寺等）：必须遮盖肩膀和膝盖，脱鞋脱帽。切勿背对佛像自拍，勿公开暴露佛陀文身，这在斯里兰卡属违法行为。",
    scam5_sol_title: "重要法规：",
    scam5_sol_desc: "严禁背对佛像拍照，请始终保持对当地宗教信仰的尊重与敬意。",
    emer_title: "官方24小时紧急求助热线",
    emer_sub: "抵达斯里兰卡后请将以下免费热线存入手机：",
    emer_police_label: "斯里兰卡旅游警察热线",
    emer_police_desc: "专门协助外国游客解决纠纷、防诈骗及失物寻找的警察机构。",
    emer_med_label: "1990 Suwa Seriya 国家救护车",
    emer_med_desc: "覆盖全国的高标准免费医疗急救车服务，配有专业医护。",
    emer_support_label: "Clear Lanka 紧急协助",
    emer_support_desc: "如果对报价存疑或遇到交通问题，随时给我们发送 WhatsApp 消息。",
    bargain_title: "免费价格核查服务",
    bargain_desc: "在路边或酒店收到报价？把报价单拍照发到我们的 WhatsApp，我们免费为您客观评估价格是否公道！",
    bargain_link: "在 WhatsApp 免费查价 ↗",
    part_kicker: "严格实地认证",
    part_heading: "我们诚意推荐的<br><em>当地司机与优秀向导。</em>",
    part_lead: "每一位合作伙伴都经过当面考核、身份审核、车况检验以及公平价格承诺。",
    part_vlabel: "认证星级司机",
    part1_role: "高级车队主管 · 环岛接送",
    part1_desc: "英语流利、车况极佳的轿车与面包车队。恪守无购物店承诺。",
    part2_role: "持证自然学家 · 中部高地",
    part2_desc: "埃拉当地向导，带领您深入茶园徒步、寻访秘境瀑布与铁路历史传奇故事。",
    part_avail_btn: "在 WhatsApp 查看档期 →",
    trust_kicker: "为何选择 Clear Lanka",
    trust_heading: "我们始终站在您身旁，<br><em>绝不赚取中间回扣。</em>",
    trust_lead: "我们在目睹了太多游客因模糊定价和高额佣金而失去旅行乐趣之后，创立了 Clear Lanka Travel。",
    trust_cta: "查询您的路线费用 →",
    t1_title: "100% 透明公开报价",
    t1_desc: "报价中明确列明高速费、燃油费与等候费，抵达目的地无任何附加收费。",
    t2_title: "实名认证当地专业人员",
    t2_desc: "严格核查身份证、驾驶证、乘客商业险与旅客真实口碑评价。",
    t3_title: "绝无强行推销",
    t3_desc: "自由比价。如果我们的报价不符合您的预算，带上我们的防坑指南放心挑选。",
    t4_title: "实时 WhatsApp 贴心支持",
    t4_desc: "旅途中遇到火车时刻或路况疑问？当地客服随时为您解答。",
    enq_kicker: "化繁为简",
    enq_heading: "告诉我们您的需求，<br><em>我们让一切清晰明了。</em>",
    enq_lead: "不需要完美成型的路线，只需分享您的想法，当地行程顾问将为您提供切实可行的建议和透明明细。",
    enq_fastest: "极速回复 (15分钟内)",
    enq_email: "邮件咨询",
    enq_hours: "WhatsApp 常见回复时间：15–30分钟（早8点至晚10点，斯里兰卡时间 UTC+5:30）",
    tab_wa_quote: "WhatsApp 即时预订咨询",
    tab_email_quote: "邮件定制详细行程",
    form_name: "您的姓名：",
    form_dates: "旅行日期 / 抵达时间：",
    form_travellers: "旅客人数：",
    form_service: "主要需求项目：",
    form_notes: "路线计划或特殊要求：",
    btn_send_wa: "立即在 WhatsApp 打开发送 ↗",
    wa_instant_note: "将直接在 WhatsApp 中生成格式化信息，无需长时间等待！",
    form_email: "电子邮箱：",
    form_help_legend: "我们需要为您提供哪些帮助？",
    form_message: "请简单描述您的旅行意向：",
    form_send_email: "发送邮件咨询 ↗",
    form_privacy_note: "我们严格尊重您的隐私，绝无垃圾邮件及骚扰推销。",
    footer_tagline: "透明出租车资费、认证专业司机以及诚恳的斯里兰卡旅行建议。",
    footer_emer_title: "斯里兰卡重要紧急热线：",
    nav_partners: "认证司机与向导",
    header_book_btn: "BOOK NOW / INQUIRY",
    hero_editorial_p1: "斯里兰卡之旅，",
    hero_editorial_p2: "清晰透明。",
    glass_popular_badge: "热门精品路线",
    glass_all_inc: "已包含高速公路费与全程油费",
    fb_lbl_pickup: "出发地点",
    fb_lbl_dropoff: "目的城市",
    fb_lbl_veh: "选择车型",
    fb_lbl_curr: "显示货币",
    fb_lbl_datetime: "出行日期与接送时间",
    fb_btn_estimate: "立即估算车费",
    promise_kicker: "清晰透明服务承诺",
    part3_role: "海洋观鲸与国家公园向导 · 米瑞莎与雅拉",
    part3_desc: "专业持证自然向导，专注于米瑞莎出海观蓝鲸与雅拉国家公园寻找锡兰花豹的四驱越野猎游，严守生态保护准则。",
    testi_kicker: "全球旅行者真实评价",
    testi_heading: "深受来自世界各地游客的信赖",
    testi_lead: "已有超过 1,200 位来自欧洲、亚洲和美洲的游客选择了我们诚实透明的本地司机服务。",
    testi1_text: "“司机在科伦坡机场出口举牌准时等候。实际收费与报价分毫不差，没有任何强制购物店，态度非常专业友善，让我们全家在斯里兰卡玩得十分安心！”",
    testi2_text: "“WhatsApp 沟通响应极其迅速！司机准点守信，九座空调面包车一尘不染，还建议我们清晨人少时登顶狮子岩，避开了酷暑和大批游客，体验极佳。”",
    testi3_text: "“价格透明公道，没有任何绕路或者强制购物店！司机师傅非常细心，帮我们买到了康提往返埃勒的高山茶园火车票，沟通也特别顺畅，强烈推荐。”",
    testi4_text: "“卓越的服务！在科伦坡机场准时接到我们，车辆干净且空调舒适。全程一口价没有任何附加收费，司机在去雅拉国家公园的路上还帮我们介绍了当地风土人情。”",
    concierge_badge: "🌍 支持 6 种主流语言",
    concierge_name: "Clear Lanka 多语种专属客服团队",
    concierge_desc: "通过 WhatsApp 提供英语、泰米尔语、中文、法语、德语及俄语的一对一出行咨询与行程协助。",
    login_kicker: "旅客与管理后台登录",
    login_heading: "登录您的专属账户",
    login_lead: "查看已保存的定制路线、司机行程确认单及后台管理工作台。",
    login_tab_traveller: "🎒 旅客会员中心",
    login_tab_admin: "🛡️ 管理员工作台",
    login_card_title: "清晰规划行程，<br><em>随心自由出行。</em>",
    login_card_desc: "轻松收藏推荐路线与司机服务，同步行程最新动态，随时调取斯里兰卡旅行方案。",
    login_btn_signin: "安全登录 →",
    login_open_full: "打开独立旅客服务中心 (customer.html) ↗",
    login_open_admin: "进入网站内容管理后台 (admin.html) ↗",
  },

  fr: {
    announcement_text: "Vous préparez vos vacances au Sri Lanka ? Devis WhatsApp direct en moins de 15 minutes.",
    nav_calculator: "Calculateur de Tarif",
    nav_services: "Services",
    nav_itineraries: "Circuits Privés",
    nav_destinations: "Destinations",
    nav_safety: "Conseils & Sécurité",
    nav_login: "Espace Voyageur",
    hero_eyebrow: "Aide locale · Réponses sincères · 0 commission cachée",
    hero_title: "Le voyage au Sri Lanka,<br><em>en toute clarté.</em>",
    hero_lead: "Organisez votre séjour avec des chauffeurs locaux certifiés, des tarifs de taxi transparents, des circuits sur mesure et des conseils avisés.",
    hero_btn_calc: "Calculer mon tarif taxi ↓",
    hero_btn_whatsapp: "Demander sur WhatsApp →",
    trust_nofees: "0% frais de réservation",
    trust_verified: "Chauffeurs locaux certifiés",
    trust_clearprice: "Prix fixes & transparents",
    trust_support: "Assistance WhatsApp 24/7",
    badge_verified: "Chauffeur Privé Certifié",
    badge_tolls: "Péages Inclus",
    hero_card_sub: "Berline privée climatisée · 1–3 passagers · 2 grands bagages",
    hero_card_allinc: "Tout compris",
    hero_card_check: "Voir l'itinéraire →",
    hero_caption_loc: "Hautes Terres Centrales",
    hero_caption_title: "Pont aux Neuf Arches, Ella",
    promise_title: "Voyager doit être simple et limpide.",
    promise_step1_title: "Indiquez votre trajet",
    promise_step1_desc: "Choisissez le départ et la destination.",
    promise_step2_title: "Obtenez un juste prix",
    promise_step2_desc: "Sans supplément péage ni surprise de carburant.",
    promise_step3_title: "Voyagez l'esprit tranquille",
    promise_step3_desc: "Échangez directement avec un chauffeur vérifié.",
    calc_kicker: "Estimateur de Trajet au Juste Prix",
    calc_heading: "Calculateur Immédiat de<br><em>Taxi & Transferts au Sri Lanka.</em>",
    calc_lead: "Évitez les rabatteurs d'aéroport et les tarifs gonflés. Sélectionnez vos étapes pour obtenir le tarif réel du marché, péages autoroutiers inclus.",
    calc_curr_label: "Devise préférée :",
    calc_pickup_label: "Lieu de départ :",
    calc_dropoff_label: "Destination :",
    calc_vehicle_label: "Type de véhicule :",
    veh_sedan_title: "Berline Climatisée",
    veh_sedan_desc: "1–3 Passagers · 2 Grands Bagages",
    veh_tag_popular: "Plus Populaire",
    veh_van_title: "Van KDH Spacieux",
    veh_van_desc: "4–7 Passagers · 5–6 Bagages",
    veh_tag_family: "Familles & Groupes",
    veh_suv_title: "SUV Premium / Hiace",
    veh_suv_desc: "1–4 Passagers · Confort VIP",
    veh_tag_comfort: "Grand Confort",
    veh_tuk_title: "Tuk-Tuk Pittoresque",
    veh_tuk_desc: "1–2 Passagers · Petits trajets",
    veh_tag_budget: "Économique",
    calc_res_verified: "Tarif Équitable Vérifié",
    calc_res_status: "Estimation en Direct",
    calc_meta_time: "Temps de trajet estimé",
    calc_meta_dist: "Distance",
    perk_tolls: "Péages d'autoroute et carburant inclus",
    perk_airport: "Suivi des vols en direct et accueil nominatif",
    perk_driver: "Chauffeur professionnel anglophone vérifié",
    perk_door: "Service porte-à-porte climatisé",
    perk_pay: "Paiement direct au chauffeur sans mauvaise surprise",
    calc_btn_whatsapp: "Bloquer ce tarif sur WhatsApp ↗",
    calc_guarantee_note: "🔒 Aucun acompte requis pour les transferts aéroport. Annulation gratuite jusqu'à 12h avant l'arrivée.",
    services_kicker: "Nos services",
    services_heading: "Un accompagnement fiable<br>à chaque étape de votre séjour.",
    services_lead: "Dès votre atterrissage jusqu'aux villages isolés, nous vous mettons en contact avec des personnes locales de confiance.",
    serv1_title: "Transferts Aéroport",
    serv1_desc: "Accueil ponctuel avec pancarte personnalisée aux arrivées, tarif fixe garanti et péages inclus.",
    serv2_title: "Chauffeurs Privés Dévoués",
    serv2_desc: "Location avec chauffeur pour 3, 7 ou 14 jours. Carburant, assurance et hébergement du chauffeur couverts.",
    serv3_title: "Guides Locaux Certifiés",
    serv3_desc: "Explorez les sites UNESCO, les plantations de thé et les réserves sauvages avec des guides officiels agréés.",
    serv4_title: "Création d'Itinéraires Sur Mesure",
    serv4_desc: "Un itinéraire adapté à votre rythme et vos centres d'intérêt, loin des circuits touristiques impersonnels.",
    serv5_title: "Adresses Secrètes & Gastronomie",
    serv5_desc: "Nos recommandations pour des maisons d'hôtes authentiques et les meilleures tables locales méconnues.",
    serv_book_link: "Calculer le tarif",
    serv_driver_link: "Trouver un chauffeur",
    serv_guide_link: "Rencontrer un guide",
    serv_route_link: "Voir les circuits",
    serv_stay_link: "Explorer les étapes",
    itin_kicker: "Circuits Personnalisés",
    itin_heading: "Itinéraires Privés<br><em>au Cœur du Sri Lanka.</em>",
    itin_lead: "Chaque itinéraire est 100 % personnalisable selon vos souhaits. Voyagez à votre rythme en véhicule privé climatisé.",
    tab_all: "Tous les circuits",
    tab_culture: "Culture & Patrimoine",
    tab_hills: "Montagnes & Train Panoramique",
    tab_wildlife: "Plages & Safaris",
    itin1_badge: "Le Plus Prisé",
    itin1_type: "Grand Tour Complet",
    itin1_title: "Triangle Culturel & Hautes Terres (7 Jours)",
    itin2_badge: "Plage & Safari",
    itin2_type: "Nature & Océan",
    itin2_title: "Côte Sud, Baleines & Léopards à Yala (5 Jours)",
    itin3_badge: "Train Mythique",
    itin3_type: "Évasion Nature",
    itin3_title: "Route du Thé & Train Panoramique (4 Jours)",
    itin4_badge: "Histoire & Îles",
    itin4_type: "Immersion Nordique",
    itin4_title: "Jaffna & l'Héritage de la Péninsule Nord (4 Jours)",
    itin_from: "Véhicule avec chauffeur à partir de",
    itin_btn_quote: "Personnaliser ↗",
    dest_kicker: "Découvrez l'île",
    dest_heading: "Destinations Clés<br><em>& Perles Cachées.</em>",
    dest_lead: "Des citadelles célestes aux plages de sable doré, tout pour préparer vos étapes essentielles.",
    safety_kicker: "Conseils Utiles aux Voyageurs",
    safety_heading: "Voyagez Malin & Évitez<br><em>les Pièges à Touristes Fréquents.</em>",
    safety_lead: "Le Sri Lanka est chaleureux et très sûr. Voici nos conseils indispensables pour préserver votre tranquillité et votre budget.",
    scam1_title: "1. « Votre hôtel est fermé ou a brûlé »",
    scam1_desc: "Certains rabatteurs affirment que votre hôtel est inaccessible afin de vous orienter vers un établissement leur versant jusqu'à 40 % de commission.",
    scam1_sol_title: "Comment réagir :",
    scam1_sol_desc: "Ne croyez aucun tiers. Appelez directement votre hébergement au numéro figurant sur votre réservation et exigez d'y être déposé.",
    scam2_title: "2. Arrêts forcés aux jardins d'épices et bijouteries",
    scam2_desc: "Des chauffeurs peu scrupuleux proposent une « petite visite gratuite » de jardin d'épices où les produits sont vendus 10 fois le prix normal.",
    scam2_sol_title: "Comment réagir :",
    scam2_sol_desc: "Dites courtoisement : « Pas d'arrêts shopping, merci de rouler directement vers notre destination. » Nos chauffeurs s'engagent par charte écrite.",
    scam3_title: "3. Tuk-Tuks : Compteurs vs Prix Forfaitaires",
    scam3_desc: "À Colombo, exigez l'enclenchement du compteur (Meter Taxi). Dans les stations balnéaires, fixez toujours fermement le prix avant de monter.",
    scam3_sol_title: "Tarif indicatif :",
    scam3_sol_desc: "Une course de 2–3 km coûte environ 400–700 LKR (1,50–2,50 $). Vous pouvez aussi utiliser PickMe ou Uber à Colombo et Kandy.",
    scam4_title: "4. Billets pour le Train Mythique Kandy - Ella",
    scam4_desc: "Les places réservées ouvrent 30 jours à l'avance et partent vite. Des revendeurs à la sauvette revendent des billets de 3 $ à plus de 35 $ !",
    scam4_sol_title: "Le bon conseil :",
    scam4_sol_desc: "Les billets en 2e et 3e classe sans réservation sont vendus au guichet le matin même pour moins de 2 $ ! Vous pouvez aussi envoyer vos valises en voiture.",
    scam5_title: "5. Respect des Temples et Tenue Décente",
    scam5_desc: "Épaules et genoux couverts obligatoires. Retirez chaussures et chapeaux. Ne tournez jamais le dos à une statue de Bouddha pour un selfie.",
    scam5_sol_title: "Règle Légale :",
    scam5_sol_desc: "Tourner le dos au Bouddha ou exposer un tatouage religieux est sévèrement sanctionné par la loi sri-lankaise.",
    emer_title: "Numéros d'Urgence Utiles (24/7)",
    emer_sub: "Enregistrez ces numéros gratuits dès votre arrivée :",
    emer_police_label: "Police Touristique du Sri Lanka",
    emer_police_desc: "Unité spéciale dédiée aux touristes étrangers pour les litiges et objets perdus.",
    emer_med_label: "Ambulance Nationale 1990 (Suwa Seriya)",
    emer_med_desc: "Service d'urgence médicale moderne, rapide et totalement gratuit dans toute l'île.",
    emer_support_label: "Assistance WhatsApp Clear Lanka",
    emer_support_desc: "Envoyez-nous un message si vous avez un doute sur un tarif ou un itinéraire.",
    bargain_title: "Contrôle Gratuit de Vos Devis",
    bargain_desc: "On vous propose un prix dans la rue ? Envoyez-nous la photo sur WhatsApp, nous vous dirons gratuitement si c'est équitable !",
    bargain_link: "Vérifier un devis sur WhatsApp ↗",
    part_kicker: "Vérifiés Personnellement",
    part_heading: "Chauffeurs & Guides Locaux<br><em>Recommandés avec Fierté.</em>",
    part_lead: "Chaque partenaire est rencontré en personne, contrôlé et engagé sur la transparence des tarifs.",
    part_vlabel: "Chauffeur Certifié",
    part1_role: "Chauffeur-Guide Senior · Tout le pays",
    part1_desc: "Chauffeurs ponctuels avec berlines et vans impeccables. Zéro arrêt commission garanti.",
    part2_role: "Guide Naturaliste · Hautes Terres",
    part2_desc: "Habitant d'Ella guidant des randonnées uniques entre théiers, cascades secrètes et ponts historiques.",
    part_avail_btn: "Disponibilité sur WhatsApp →",
    trust_kicker: "Pourquoi Clear Lanka",
    trust_heading: "Nous sommes à vos côtés,<br><em>jamais au milieu.</em>",
    trust_lead: "Nous avons fondé Clear Lanka Travel pour éviter aux voyageurs de perdre leur temps et leur budget dans des intermédiaires coûteux.",
    trust_cta: "Calculer le tarif de ma course →",
    t1_title: "Tarifs 100% Transparents",
    t1_desc: "Tous les devis précisent les péages et le carburant. Aucun supplément imprévu à destination.",
    t2_title: "Chauffeurs Rigoureusement Contrôlés",
    t2_desc: "Nous vérifions l'identité, le permis de conduire, les assurances passagers et les avis clients.",
    t3_title: "Zéro Pression Commerciale",
    t3_desc: "Comparez en toute liberté. Nos conseils sont là pour vous faire économiser intelligemment.",
    t4_title: "Support WhatsApp en Direct",
    t4_desc: "Une question pendant vos visites ? Notre équipe locale vous répond rapidement.",
    enq_kicker: "Restons Simples",
    enq_heading: "Faites-nous part de vos envies,<br><em>nous éclaircissons tout.</em>",
    enq_lead: "Pas besoin d'un itinéraire parfait. Décrivez vos souhaits et nos conseillers locaux vous répondront avec franchise.",
    enq_fastest: "Réponse Rapide (15 min)",
    enq_email: "Demande par Email",
    enq_hours: "Délai de réponse moyen WhatsApp : 15–30 min (8h–22h heure locale Sri Lanka, UTC+5:30)",
    tab_wa_quote: "Réservation Rapide WhatsApp",
    tab_email_quote: "Devis d'Itinéraire par Email",
    form_name: "Votre Nom :",
    form_dates: "Dates / Arrivée :",
    form_travellers: "Nombre de Voyageurs :",
    form_service: "Prestation souhaitée :",
    form_notes: "Étapes ou demandes particulières :",
    btn_send_wa: "Envoyer sur WhatsApp ↗",
    wa_instant_note: "Votre message est pré-rempli directement dans WhatsApp sans aucune attente !",
    form_email: "Adresse Email :",
    form_help_legend: "En quoi pouvons-nous vous aider ?",
    form_message: "Parlez-nous un peu de votre voyage :",
    form_send_email: "Envoyer ma demande par email ↗",
    form_privacy_note: "Respect absolu de vos données. Zéro spam ni publicité.",
    footer_tagline: "Tarifs de taxi transparents, chauffeurs locaux certifiés et conseils sincères pour votre voyage au Sri Lanka.",
    footer_emer_title: "Urgences Nationales au Sri Lanka :",
    nav_partners: "Chauffeurs Vérifiés",
    header_book_btn: "BOOK NOW / INQUIRY",
    hero_editorial_p1: "Voyager au Sri Lanka,",
    hero_editorial_p2: "en toute clarté.",
    glass_popular_badge: "Trajet Populaire",
    glass_all_inc: "Péages d’autoroute et carburant inclus",
    fb_lbl_pickup: "Lieu de départ",
    fb_lbl_dropoff: "Destination",
    fb_lbl_veh: "Type de véhicule",
    fb_lbl_curr: "Devise",
    fb_lbl_datetime: "Date et heure de départ",
    fb_btn_estimate: "ESTIMER LE TARIF",
    promise_kicker: "Notre Promesse de Transparence",
    part3_role: "Spécialiste Marin & Safari · Mirissa & Yala",
    part3_desc: "Naturaliste certifié organisant des sorties d’observation des baleines bleues à Mirissa et des safaris 4x4 léopards au parc de Yala.",
    testi_kicker: "Témoignages de Voyageurs",
    testi_heading: "Plébiscité par les Voyageurs du Monde Entier",
    testi_lead: "Plus de 1 200 voyageurs d’Europe, d’Asie et des Amériques font confiance à nos chauffeurs locaux honnêtes et transparents.",
    testi1_text: "“Notre chauffeur était ponctuel à l’aéroport de Colombo avec notre nom. Le tarif correspondait au centime près au devis sans aucun arrêt forcé dans les boutiques à touristes. Le meilleur choix !”",
    testi2_text: "“Communication en français via WhatsApp très claire et rapide ! Chauffeur ponctuel, van climatisé d’une propreté exemplaire et conseils précieux pour visiter Sigiriya tôt le matin sans foule.”",
    testi3_text: "“Tarif 100% transparent et sans détours commerciaux ! Notre chauffeur nous a aidés à obtenir nos billets de train Kandy-Ella et son accueil était chaleureux. À recommander vivement.”",
    testi4_text: "“Service impeccable ! Prise en charge ponctuelle à l’aéroport, véhicule climatisé très propre et prix fixe sans surprise. Un chauffeur très professionnel.”",
    concierge_badge: "🌍 6 Langues Prises en Charge",
    concierge_name: "Équipe de Conciergerie Clear Lanka",
    concierge_desc: "Assistance personnalisée via WhatsApp en anglais, tamoul, chinois, français, allemand et russe.",
    login_kicker: "Accès Voyageur & Administration",
    login_heading: "Connectez-vous à votre espace",
    login_lead: "Accédez à vos circuits enregistrés, échanges avec vos chauffeurs et espace d’administration.",
    login_tab_traveller: "🎒 Espace Voyageur",
    login_tab_admin: "🛡️ Studio Administrateur",
    login_card_title: "Planifiez sereinement,<br><em>voyagez librement.</em>",
    login_card_desc: "Enregistrez vos prestations préférées et retrouvez tous les détails de votre voyage au Sri Lanka.",
    login_btn_signin: "Connexion sécurisée →",
    login_open_full: "Ouvrir le portail voyageur (customer.html) ↗",
    login_open_admin: "Ouvrir le studio d’administration (admin.html) ↗",
  },

  de: {
    announcement_text: "Planen Sie Ihren Sri Lanka Urlaub? Direktes WhatsApp-Angebot innerhalb von 15 Minuten.",
    nav_calculator: "Fahrpreisrechner",
    nav_services: "Leistungen",
    nav_itineraries: "Rundreisen",
    nav_destinations: "Reiseziele",
    nav_safety: "Sicherheitstipps",
    nav_login: "Reisende Login",
    hero_eyebrow: "Lokale Hilfe · Ehrliche Antworten · 0 versteckte Aufschläge",
    hero_title: "Sri Lanka Reisen,<br><em>klar & transparent.</em>",
    hero_lead: "Planen Sie Ihre Sri Lanka Reise mit geprüften lokalen Fahrern, fairen Festpreisen, maßgeschneiderten Rundreisen und ehrlichen Insidertipps.",
    hero_btn_calc: "Taxipreis berechnen ↓",
    hero_btn_whatsapp: "Auf WhatsApp fragen →",
    trust_nofees: "0% Buchungsgebühren",
    trust_verified: "Geprüfte Chaffeure",
    trust_clearprice: "Feste, transparente Preise",
    trust_support: "24/7 WhatsApp Betreuung",
    badge_verified: "Geprüfter Privatchauffeur",
    badge_tolls: "Mautgebühren Inklusive",
    hero_card_sub: "Klimatisierte Limousine · 1–3 Gäste · 2 Koffer",
    hero_card_allinc: "Alles inklusive",
    hero_card_check: "Route ansehen →",
    hero_caption_loc: "Zentrales Hochland",
    hero_caption_title: "Nine Arch Bridge, Ella",
    promise_title: "Reiseplanung sollte einfach und transparent sein.",
    promise_step1_title: "Route wählen",
    promise_step1_desc: "Start- und Zielort auswählen.",
    promise_step2_title: "Fairen Festpreis erhalten",
    promise_step2_desc: "Keine versteckten Maut- oder Treibstoffzuschläge.",
    promise_step3_title: "Sorgenfrei reisen",
    promise_step3_desc: "Direkt mit lokalen Fahrern kommunizieren.",
    calc_kicker: "Routen- & Festpreisrechner",
    calc_heading: "Sofortiger Sri Lanka<br><em>Taxi- & Transferrechner.</em>",
    calc_lead: "Vermeiden Sie überteuerte Straßenpreise und Flughafen-Schlepper. Wählen Sie Ihre Route und erfahren Sie den fairen Marktpreis inklusive aller Mautgebühren.",
    calc_curr_label: "Währung auswählen:",
    calc_pickup_label: "Abholort:",
    calc_dropoff_label: "Zielort:",
    calc_vehicle_label: "Fahrzeugtyp wählen:",
    veh_sedan_title: "Klima-Limousine (Sedan)",
    veh_sedan_desc: "1–3 Personen · 2 große Koffer",
    veh_tag_popular: "Sehr beliebt",
    veh_van_title: "Geräumiger KDH Van",
    veh_van_desc: "4–7 Personen · 5–6 Koffer",
    veh_tag_family: "Familien & Gruppen",
    veh_suv_title: "Premium SUV / Hiace",
    veh_suv_desc: "1–4 Personen · VIP Komfort",
    veh_tag_comfort: "Extra Komfort",
    veh_tuk_title: "Malerisches Tuk-Tuk",
    veh_tuk_desc: "1–2 Personen · Kurze Strecken",
    veh_tag_budget: "Günstig",
    calc_res_verified: "Geprüfter Festpreis",
    calc_res_status: "Live Berechnung",
    calc_meta_time: "Geschätzte Fahrzeit",
    calc_meta_dist: "Entfernung",
    perk_tolls: "Sämtliche Autobahnmauten & Benzin inklusive",
    perk_airport: "Flugverfolgung & persönliche Namensschild-Abholung",
    perk_driver: "Englischsprachiger, lizenzierter Fahrer",
    perk_door: "Bequemer Haus-zu-Haus-Service mit Klimaanlage",
    perk_pay: "Direkte Barzahlung an den Fahrer ohne Überraschungen",
    calc_btn_whatsapp: "Diesen Preis auf WhatsApp sichern ↗",
    calc_guarantee_note: "🔒 Keine Anzahlung für Flughafentransfers erforderlich. Kostenlose Stornierung bis 12 Stunden vor Ankunft.",
    services_kicker: "Unser Angebot",
    services_heading: "Zuverlässige Reisebegleitung<br>für jeden Teil Ihrer Rundreise.",
    services_lead: "Von Ihrer Landung am Flughafen bis zu unberührten Dörfern vermitteln wir Ihnen vertrauenswürdige Einheimische und transparente Beratung.",
    serv1_title: "Flughafentransfers",
    serv1_desc: "Entspannt ankommen: Ihr Fahrer erwartet Sie mit Namensschild in der Ankunftshalle, Festpreis und Mautgebühren inklusive.",
    serv2_title: "Private Chauffeure & Rundreisen",
    serv2_desc: "Mieten Sie einen Chauffeur für 3, 7 oder 14 Tage. Benzin, Versicherung, Mahlzeiten und Unterkunft des Fahrers sind voll abgedeckt.",
    serv3_title: "Lizenzierte Reiseleiter",
    serv3_desc: "Erleben Sie UNESCO-Weltkulturerbestätten, Teeplantagen-Wanderungen und Wildtier-Safaris mit geprüften Guides.",
    serv4_title: "Individuelle Reiseplanung",
    serv4_desc: "Ihre maßgeschneiderte Reiseroute – angepasst an Ihr Reisetempo, persönliche Interessen und Budget.",
    serv5_title: "Boutique-Unterkünfte & Kulinarik",
    serv5_desc: "Ehrliche Empfehlungen für familiengeführte Homestays, Strandvillen und landestypische Restaurants fernab des Massentourismus.",
    serv_book_link: "Transfer berechnen",
    serv_driver_link: "Chauffeur anfragen",
    serv_guide_link: "Guide kennenlernen",
    serv_route_link: "Rundreisen entdecken",
    serv_stay_link: "Ziele erkunden",
    itin_kicker: "Kuratierte Rundreisen",
    itin_heading: "Handverlesene Sri Lanka<br><em>Reiserouten.</em>",
    itin_lead: "Jede Route kann individuell auf Ihren Zeitplan zugeschnitten werden. Reisen Sie entspannt im privaten klimatisierten Fahrzeug.",
    tab_all: "Alle Touren",
    tab_culture: "Kultur & Geschichte",
    tab_hills: "Teeberge & Panoramazug",
    tab_wildlife: "Strand & Safari",
    itin1_badge: "Bestseller",
    itin1_type: "Klassische Rundreise",
    itin1_title: "Kulturdreieck & Hochland (7 Tage)",
    itin2_badge: "Strand & Safari",
    itin2_type: "Natur & Ozean",
    itin2_title: "Südküste, Wale & Leoparden-Safari (5 Tage)",
    itin3_badge: "Panoramazug",
    itin3_type: "Naturerlebnis",
    itin3_title: "Teestraßen & Legendärer Bergzug (4 Tage)",
    itin4_badge: "Tradition & Inseln",
    itin4_type: "Kulturreise",
    itin4_title: "Jaffna & Kultur des Nordens (4 Tage)",
    itin_from: "Fahrzeug mit Chauffeur ab",
    itin_btn_quote: "Anpassen ↗",
    dest_kicker: "Entdecken Sie Sri Lanka",
    dest_heading: "Berühmte Highlights<br><em>& Lokale Geheimtipps.</em>",
    dest_lead: "Ob nebelverhangene Bergketten, uralte Felsenfestungen oder türkisblaue Buchten – alle wichtigen Infos auf einen Blick.",
    safety_kicker: "Praktische Reisetipps",
    safety_heading: "Clever reisen & typische<br><em>Touristenfallen vermeiden.</em>",
    safety_lead: "Sri Lanka ist ausgesprochen gastfreundlich und sicher. Mit diesen praktischen Hinweisen vermeiden Sie typische Provisionsfallen.",
    scam1_title: "1. „Ihr Hotel ist geschlossen oder abgebrannt“",
    scam1_desc: "Fahrer behaupten gelegentlich, Ihr reserviertes Hotel sei nicht erreichbar, um Sie in Unterkünfte mit bis zu 40% Provision zu locken.",
    scam1_sol_title: "Richtig reagieren:",
    scam1_sol_desc: "Glauben Sie keinen Behauptungen unterwegs. Rufen Sie Ihr Hotel unter der Buchungsnummer direkt an und bestehen Sie auf der gebuchten Adresse.",
    scam2_title: "2. Gewürzgärten & Edelstein-Verkaufsshows",
    scam2_desc: "Fahrer schlagen oft einen „kurzen kostenlosen Stopp“ in einem Gewürzgarten vor, wo Produkte zum 10-fachen Marktpreis angepriesen werden.",
    scam2_sol_title: "Richtig reagieren:",
    scam2_sol_desc: "Sagen Sie freundlich und bestimmt: „Bitte keine Shopping-Stopps, fahren Sie direkt zum Zielort.“ Unsere Fahrer verpflichten sich vertraglich dazu.",
    scam3_title: "3. Tuk-Tuk Taxameter vs. Pauschalpreise",
    scam3_desc: "In Colombo stets auf das Taxameter (Meter Taxi) bestehen. In Urlaubsregionen gibt es keine Zähler – vereinbaren Sie den Preis immer vor dem Einsteigen.",
    scam3_sol_title: "Richtwert:",
    scam3_sol_desc: "Eine kurze Fahrt (2–3 km) kostet etwa 400–700 LKR (1,50–2,50 $). Nutzen Sie in Colombo und Kandy auch PickMe oder Uber.",
    scam4_title: "4. Tickets für den Panoramazug Kandy - Ella",
    scam4_desc: "Reservierte Plätze sind 30 Tage vorab buchbar und oft blitzschnell vergriffen. Kaufen Sie keine überteuerten 35-Dollar-Tickets vor dem Bahnhof!",
    scam4_sol_title: "Insider-Tipp:",
    scam4_sol_desc: "Nicht reservierte Tickets der 2. und 3. Klasse gibt es am Reisetag am offiziellen Schalter für unter 2 $! Das Gepäck kann Ihr Chauffeur im Auto mitnehmen.",
    scam5_title: "5. Tempelknigge & Kleiderordnung",
    scam5_desc: "Schultern und Knie müssen stets bedeckt sein. Schuhe und Kopfbedeckung vor dem Betreten ablegen. Niemals mit dem Rücken zur Buddha-Statue für Fotos posieren.",
    scam5_sol_title: "Wichtiges Gesetz:",
    scam5_sol_desc: "Fotos mit dem Rücken zur Buddha-Statue oder sichtbare religiöse Tattoos sind in Sri Lanka strafbar.",
    emer_title: "Offizielle 24/7 Notrufnummern",
    emer_sub: "Speichern Sie diese kostenfreien Nummern bei Ankunft im Telefon:",
    emer_police_label: "Touristenpolizei Sri Lanka",
    emer_police_desc: "Spezialeinheit für ausländische Reisende bei Problemen, Betrug oder Verlust.",
    emer_med_label: "1990 Suwa Seriya Rettungsdienst",
    emer_med_desc: "Moderner, landesweiter und völlig kostenloser Notarzt- und Rettungsdienst.",
    emer_support_label: "Clear Lanka WhatsApp Notfallkontakt",
    emer_support_desc: "Schreiben Sie uns jederzeit, wenn Sie sich bei einem Preis unsicher sind.",
    bargain_title: "Kostenloser Preis-Check",
    bargain_desc: "Haben Sie unterwegs ein Angebot für ein Taxi oder Hotel erhalten? Senden Sie ein Foto an WhatsApp – wir prüfen neutral und kostenlos, ob der Preis fair ist!",
    bargain_link: "Angebot auf WhatsApp prüfen ↗",
    part_kicker: "Persönlich Geprüft",
    part_heading: "Empfohlene Chauffeure & Guides,<br><em>denen wir voll vertrauen.</em>",
    part_lead: "Jeder Partner wird persönlich kennengelernt, überprüft und auf faire Festpreise verpflichtet.",
    part_vlabel: "Geprüfter Fahrer",
    part1_role: "Senior Chauffeur-Guide · Landesweit",
    part1_desc: "Pünktliche, gepflegte Fahrzeuge mit zuverlässigen englischsprachigen Fahrern. Garantiert ohne Provisionsstopps.",
    part2_role: "Lizenzierter Naturführer · Hochland",
    part2_desc: "Einheimischer Guide aus Ella für authentische Wanderungen durch Teeplantagen und zu versteckten Wasserfällen.",
    part_avail_btn: "Verfügbarkeit auf WhatsApp prüfen →",
    trust_kicker: "Warum Clear Lanka",
    trust_heading: "Wir sind an Ihrer Seite,<br><em>nicht der Mittelsmann.</em>",
    trust_lead: "Wir haben Clear Lanka Travel gegründet, weil zu viele Reisende ihr Urlaubsbudget an undurchsichtige Vermittlergebühren verloren haben.",
    trust_cta: "Fahrpreis für meine Route berechnen →",
    t1_title: "100% Transparente Festpreise",
    t1_desc: "Jedes Angebot beinhaltet Maut und Benzin klar ausgewiesen. Keine unliebsamen Überraschungen.",
    t2_title: "Geprüfte Fahrerpersönlichkeiten",
    t2_desc: "Wir prüfen Ausweise, Führerscheine, Fahrzeuginspektionen und echte Gästebewertungen.",
    t3_title: "Keinerlei Verkaufsdruck",
    t3_desc: "Vergleichen Sie in Ruhe. Unsere Mission ist Ehrlichkeit, nicht der schnelle Abschluss.",
    t4_title: "Direkte WhatsApp-Hilfe vor Ort",
    t4_desc: "Fragen zu Zugfahrzeiten oder Straßenverhältnissen während der Reise? Wir helfen sofort.",
    enq_kicker: "Ganz unkompliziert",
    enq_heading: "Teilen Sie uns Ihre Wünsche mit.<br><em>Wir machen es transparent.</em>",
    enq_lead: "Sie brauchen noch keinen fertigen Plan. Nennen Sie uns Ihre Eckdaten und wir antworten mit praktischen Vorschlägen und fairen Kosten.",
    enq_fastest: "Schnellste Antwort (15 Min)",
    enq_email: "E-Mail Anfrage",
    enq_hours: "Antwortzeit WhatsApp: ca. 15–30 Min (8:00–22:00 Uhr Ortszeit Sri Lanka, UTC+5:30)",
    tab_wa_quote: "Direkte WhatsApp Buchung",
    tab_email_quote: "Rundreise per E-Mail anfragen",
    form_name: "Ihr Name:",
    form_dates: "Reisedaten / Ankunft:",
    form_travellers: "Anzahl Reisende:",
    form_service: "Gewünschte Leistung:",
    form_notes: "Reiseziele oder besondere Wünsche:",
    btn_send_wa: "Auf WhatsApp senden ↗",
    wa_instant_note: "Ihre Angaben werden automatisch in WhatsApp formatiert – keine Wartezeit!",
    form_email: "E-Mail-Adresse:",
    form_help_legend: "Wobei dürfen wir Ihnen helfen?",
    form_message: "Erzählen Sie uns kurz von Ihren Reiseplänen:",
    form_send_email: "Anfrage per E-Mail absenden ↗",
    form_privacy_note: "Ihre Daten sind geschützt. Kein Spam, keine Weitergabe.",
    footer_tagline: "Transparente Fahrpreise, geprüfte lokale Chauffeure und ehrliche Sri Lanka Reiseberatung.",
    footer_emer_title: "Wichtige Notrufnummern in Sri Lanka:",
    nav_partners: "Geprüfte Fahrer",
    header_book_btn: "BOOK NOW / INQUIRY",
    hero_editorial_p1: "Sri Lanka Reisen,",
    hero_editorial_p2: "einfach & klar.",
    glass_popular_badge: "Beliebte Route",
    glass_all_inc: "Inklusive Autobahngebühren & Treibstoff",
    fb_lbl_pickup: "Abholort",
    fb_lbl_dropoff: "Zielort",
    fb_lbl_veh: "Fahrzeugtyp",
    fb_lbl_curr: "Währung",
    fb_lbl_datetime: "Datum & Uhrzeit",
    fb_btn_estimate: "FAHRPREIS BERECHNEN",
    promise_kicker: "Unser Transparenzversprechen",
    part3_role: "Meeres- & Safari-Spezialist · Mirissa & Yala",
    part3_desc: "Zertifizierter Naturführer für ethische Blauwal-Beobachtung in Mirissa und Allrad-Leoparden-Safaris im Yala-Nationalpark.",
    testi_kicker: "Echte Internationale Reisende",
    testi_heading: "Geschätzt von Reisenden weltweit",
    testi_lead: "Über 1.200 Gäste aus Europa, Asien und Amerika vertrauen auf unsere ehrlichen und transparenten lokalen Chauffeure.",
    testi1_text: "“Unser Fahrer stand pünktlich mit Namensschild am Flughafen Colombo. Der Preis stimmte auf die Rupie genau und wir wurden nie in Touristenläden gedrängt. Die beste Entscheidung für Sri Lanka!”",
    testi2_text: "“Schnelle und klare Kommunikation über WhatsApp! Pünktlicher Fahrer, blitzsauberer klimatisierter Van und wertvolle Insidertipps, um Sigiriya frühmorgens ohne Touristenmassen zu besteigen.”",
    testi3_text: "“Absolut transparente Preise ohne unerwünschte Zwischenstopps! Unser Fahrer hat uns sogar geholfen, Tickets für den Panoramazug Kandy–Ella zu bekommen. Uneingeschränkt empfehlenswert.”",
    testi4_text: "“Hervorragender Service! Zuverlässige Abholung am Flughafen Colombo, sauberes Auto mit starker Klimaanlage und Festpreis ohne Überraschungen. Sehr freundlicher Fahrer.”",
    concierge_badge: "🌍 6 Sprachen Unterstützt",
    concierge_name: "Clear Lanka Gäste-Concierge-Team",
    concierge_desc: "Schnelle Betreuung via WhatsApp auf Englisch, Tamil, Chinesisch, Französisch, Deutsch und Russisch.",
    login_kicker: "Kunden- & Operator-Zugang",
    login_heading: "In Ihr Konto einloggen",
    login_lead: "Greifen Sie auf Ihre gespeicherten Rundreisen, Chauffeur-Details und das Admin-Studio zu.",
    login_tab_traveller: "🎒 Kundenbereich",
    login_tab_admin: "🛡️ Betreiber-Studio",
    login_card_title: "Klar geplant,<br><em>völlig frei gereist.</em>",
    login_card_desc: "Speichern Sie Services und behalten Sie Ihre Reisepläne für Sri Lanka jederzeit im Blick.",
    login_btn_signin: "Sicher einloggen →",
    login_open_full: "Vollständiges Kundenportal öffnen (customer.html) ↗",
    login_open_admin: "Admin-Studio öffnen (admin.html) ↗",
  },

  ru: {
    announcement_text: "Планируете отдых на Шри-Ланке? Прямой расчет в WhatsApp в течение 15 минут.",
    nav_calculator: "Калькулятор цен",
    nav_services: "Услуги",
    nav_itineraries: "Туры и Маршруты",
    nav_destinations: "Направления",
    nav_safety: "Безопасность",
    nav_login: "Кабинет туриста",
    hero_eyebrow: "Местная помощь · Честные ответы · Без скрытых наценок",
    hero_title: "Путешествие по Шри-Ланке,<br><em>прозрачно и легко.</em>",
    hero_lead: "Спланируйте поездку с проверенными местными водителями, фиксированными ценами на такси, индивидуальными турами и советами без назойливых комиссионеров.",
    hero_btn_calc: "Рассчитать стоимость такси ↓",
    hero_btn_whatsapp: "Спросить в WhatsApp →",
    trust_nofees: "0% комиссий за бронь",
    trust_verified: "Проверенные местные водители",
    trust_clearprice: "Фиксированные честные цены",
    trust_support: "24/7 поддержка в WhatsApp",
    badge_verified: "Сертифицированный Водитель",
    badge_tolls: "Платные дороги включены",
    hero_card_sub: "Седан с кондиционером · 1–3 гостя · 2 больших чемодана",
    hero_card_allinc: "Всё включено",
    hero_card_check: "Смотреть маршрут →",
    hero_caption_loc: "Центральное Высокогорье",
    hero_caption_title: "Девятиарочный мост, Элла",
    promise_title: "Путешествие должно быть понятным и прозрачным.",
    promise_step1_title: "Укажите маршрут",
    promise_step1_desc: "Выберите пункт отправления и назначения.",
    promise_step2_title: "Узнайте честную цену",
    promise_step2_desc: "Без скрытых доплат за бензин и платные трассы.",
    promise_step3_title: "Путешествуйте спокойно",
    promise_step3_desc: "Прямая связь с проверенными водителями.",
    calc_kicker: "Калькулятор честной цены",
    calc_heading: "Онлайн калькулятор<br><em>такси и трансферов на Шри-Ланке.</em>",
    calc_lead: "Забудьте о навязчивых зазывалах в аэропорту и завышенных ценах. Укажите маршрут и получите реальную рыночную стоимость с учетом скоростных дорог.",
    calc_curr_label: "Выберите валюту:",
    calc_pickup_label: "Откуда забрать:",
    calc_dropoff_label: "Куда доставить:",
    calc_vehicle_label: "Выберите тип автомобиля:",
    veh_sedan_title: "Седан с кондиционером",
    veh_sedan_desc: "1–3 пассажира · 2 чемодана",
    veh_tag_popular: "Хит выбора",
    veh_van_title: "Просторный минивэн KDH",
    veh_van_desc: "4–7 пассажиров · 5–6 чемоданов",
    veh_tag_family: "Для семей и групп",
    veh_suv_title: "Премиум SUV / Hiace",
    veh_suv_desc: "1–4 пассажира · VIP комфорт",
    veh_tag_comfort: "Повышенный комфорт",
    veh_tuk_title: "Колоритный Тук-Тук",
    veh_tuk_desc: "1–2 пассажира · Короткие поездки",
    veh_tag_budget: "Экономно",
    calc_res_verified: "Проверенный честный тариф",
    calc_res_status: "Живой расчет",
    calc_meta_time: "Примерное время",
    calc_meta_dist: "Расстояние",
    perk_tolls: "Все платные автобаны и топливо включены",
    perk_airport: "Отслеживание рейса и встреча с именной табличкой",
    perk_driver: "Проверенный англоговорящий водитель",
    perk_door: "Поездка от двери до двери с кондиционером",
    perk_pay: "Оплата напрямую водителю без сюрпризов",
    calc_btn_whatsapp: "Зафиксировать цену в WhatsApp ↗",
    calc_guarantee_note: "🔒 Без предоплаты для встречи в аэропорту. Бесплатная отмена за 12 часов до прилета.",
    services_kicker: "Чем мы помогаем",
    services_heading: "Надежная поддержка<br>на каждом этапе вашего отдыха.",
    services_lead: "С момента выхода из терминала и до удаленных живописных уголков острова мы связываем вас с порядочными людьми.",
    serv1_title: "Трансферы из аэропорта",
    serv1_desc: "Встреча в зоне прилета с табличкой, фиксированная цена и оплаченные скоростные трассы.",
    serv2_title: "Аренда авто с личным водителем",
    serv2_desc: "Машина с водителем на 3, 7 или 14 дней. Топливо, страховка, питание и ночлег водителя полностью включены.",
    serv3_title: "Лицензированные гиды",
    serv3_desc: "Знакомство с наследием ЮНЕСКО, трекинг по чайным холмам, дегустации и сафари с сертифицированными экспертами.",
    serv4_title: "Индивидуальные авторские туры",
    serv4_desc: "Маршрут под ваш темп, дату и бюджет — никакой спешки и душных больших автобусов.",
    serv5_title: "Уютные отели и вкусные места",
    serv5_desc: "Проверенные аутентичные виллы, бутик-отели и настоящая домашняя ланкийская кухня.",
    serv_book_link: "Рассчитать поездку",
    serv_driver_link: "Выбрать водителя",
    serv_guide_link: "Найти гида",
    serv_route_link: "Смотреть туры",
    serv_stay_link: "Каталог мест",
    itin_kicker: "Авторские маршруты",
    itin_heading: "Продуманные туры<br><em>по всей Шри-Ланке.</em>",
    itin_lead: "Любой маршрут можно скорректировать под ваши пожелания. Путешествуйте в своем ритме с персональным водителем.",
    tab_all: "Все туры",
    tab_culture: "Культура и древности",
    tab_hills: "Чайные горы и поезд",
    tab_wildlife: "Пляжи и сафари",
    itin1_badge: "Самый популярный",
    itin1_type: "Большой обзорный тур",
    itin1_title: "Золотой треугольник и высокогорье (7 дней)",
    itin2_badge: "Океан и сафари",
    itin2_type: "Природа и побережье",
    itin2_title: "Южный берег, киты и сафари с леопардами (5 дней)",
    itin3_badge: "Живописный поезд",
    itin3_type: "Горная сказка",
    itin3_title: "Чайные плантации и высокогорный поезд (4 дня)",
    itin4_badge: "Наследие и острова",
    itin4_type: "Этнографический тур",
    itin4_title: "Джафна и самобытный север острова (4 дня)",
    itin_from: "Машина с водителем от",
    itin_btn_quote: "Изменить под себя ↗",
    dest_kicker: "Откройте Шри-Ланку",
    dest_heading: "Главные достопримечательности<br><em>и секретные уголки.</em>",
    dest_lead: "От древней парящей крепости Сигирия до бирюзовых бухт для серфинга — полезные факты для вашего маршрута.",
    safety_kicker: "Полезно каждому туристу",
    safety_heading: "Путешествуйте с умом & избегайте<br><em>популярных уловок и разводов.</em>",
    safety_lead: "Шри-Ланка — исключительно добрая и безопасная страна. Но полезно знать несколько простых правил, чтобы не переплачивать посредникам.",
    scam1_title: "1. «Ваш отель закрыт или сгорел»",
    scam1_desc: "Водители тук-туков могут уверять, что отель на ремонте, чтобы увезти вас в отель знакомого с комиссией до 40%.",
    scam1_sol_title: "Как поступить:",
    scam1_sol_desc: "Никому не верьте на слово. Позвоните в свой отель по номеру в брони и настойчиво требуйте везти по указанному адресу.",
    scam2_title: "2. Сады специй и «бесплатные» экскурсии на фабрики",
    scam2_desc: "По пути вас могут завезти в сад специй или магазин камней, где масла и сувениры продаются в 10 раз дороже обычного.",
    scam2_sol_title: "Как поступить:",
    scam2_sol_desc: "Твердо скажите: «Без заездов в магазины, едем прямо в отель». Водители Clear Lanka подписывают обязательство без комиссионных заездов.",
    scam3_title: "3. Тук-туки: счетчик против фиксированной цены",
    scam3_desc: "В Коломбо требуйте включать счетчик (Meter Taxi). На курортах счетчиков нет — обязательно договаривайтесь о цене до посадки.",
    scam3_sol_title: "Ориентир цен:",
    scam3_sol_desc: "Поездка на 2–3 км обычно стоит 400–700 рупий (1,5–2,5 $). В Коломбо и Канди удобно вызывать через приложения PickMe или Uber.",
    scam4_title: "4. Правда о билетах на поезд Канди — Элла",
    scam4_desc: "Билеты 1 и 2 класса открываются за 30 дней и скупаются перекупщиками, которые продают билет за 3 $ по цене 35 $!",
    scam4_sol_title: "Лайфхак туриста:",
    scam4_sol_desc: "Билеты без мест во 2 и 3 класс продаются в кассе утром в день отправления дешевле 2 $! Багаж можно отправить с водителем на авто.",
    scam5_title: "5. Дресс-код и правила в храмах",
    scam5_desc: "Плечи и колени должны быть прикрыты. Обувь и головные уборы снимаются. Строго запрещено поворачиваться спиной к статуе Будды для фото.",
    scam5_sol_title: "Закон Шри-Ланки:",
    scam5_sol_desc: "Селфи спиной к Будде или открытые буддийские татуировки преследуются законом.",
    emer_title: "Круглосуточные экстренные службы",
    emer_sub: "Сохраните эти бесплатные номера по прибытии:",
    emer_police_label: "Туристическая полиция Шри-Ланки",
    emer_police_desc: "Специальный отдел для помощи туристам в спорных ситуациях.",
    emer_med_label: "Скорая помощь 1990 (Suwa Seriya)",
    emer_med_desc: "Современная, быстрая и полностью бесплатная государственная скорая помощь.",
    emer_support_label: "Экстренная связь с Clear Lanka",
    emer_support_desc: "Напишите в WhatsApp, если хотите проверить цену или заблудились.",
    bargain_title: "Бесплатная проверка цен",
    bargain_desc: "Вам назвали цену на улице? Сфотографируйте предложение и отправьте нам в WhatsApp — мы бесплатно скажем, адекватна ли цена!",
    bargain_link: "Проверить цену в WhatsApp ↗",
    part_kicker: "Лично отобраны",
    part_heading: "Местные водители и гиды,<br><em>которых мы рекомендуем.</em>",
    part_lead: "С каждым партнером мы знакомы лично, проверили документы, безопасность авто и культуру общения.",
    part_vlabel: "Проверенный водитель",
    part1_role: "Старший водитель-гид · По всему острову",
    part1_desc: "Пунктуальные англоговорящие водители на ухоженных авто. Никаких навязанных магазинов.",
    part2_role: "Лицензированный гид · Горные районы",
    part2_desc: "Коренной житель Эллы: трекинг по чайным тропам, уединенные водопады и история мостов.",
    part_avail_btn: "Узнать график в WhatsApp →",
    trust_kicker: "Почему Clear Lanka",
    trust_heading: "Мы на вашей стороне,<br><em>а не в доле с комиссий.</em>",
    trust_lead: "Мы создали сервис, видя, как путешественники тратят лишние деньги на разводы и неоправданные комиссии.",
    trust_cta: "Рассчитать стоимость маршрута →",
    t1_title: "100% прозрачные цены",
    t1_desc: "В расчете сразу указаны все сборы, бензин и платные трассы. Никаких доплат по приезду.",
    t2_title: "Проверенные личности",
    t2_desc: "Проверяем паспорт, права, пассажирскую страховку и реальные отзывы гостей.",
    t3_title: "Без навязчивых продаж",
    t3_desc: "Сравнивайте спокойно. Наша задача — дать вам ясность и надежность.",
    t4_title: "Поддержка в WhatsApp на маршруте",
    t4_desc: "Возник вопрос по дороге или расписанию поездов? Местная команда на связи.",
    enq_kicker: "Всё просто",
    enq_heading: "Напишите ваши пожелания,<br><em>мы сделаем расчет понятным.</em>",
    enq_lead: "Не обязательно иметь готовый план. Напишите пару строк, и местный координатор предложит оптимальные варианты.",
    enq_fastest: "Быстрый ответ (15 мин)",
    enq_email: "Запрос на Email",
    enq_hours: "Ответ в WhatsApp: 15–30 мин (с 8:00 до 22:00 по времени Шри-Ланки, UTC+5:30)",
    tab_wa_quote: "Быстрый расчет в WhatsApp",
    tab_email_quote: "Запрос маршрута по Email",
    form_name: "Ваше имя:",
    form_dates: "Даты поездки / прилет:",
    form_travellers: "Количество гостей:",
    form_service: "Что требуется:",
    form_notes: "Маршрут или пожелания:",
    btn_send_wa: "Открыть диалог в WhatsApp ↗",
    wa_instant_note: "Детали автоматически сформируются в сообщении WhatsApp без ожидания!",
    form_email: "Электронная почта:",
    form_help_legend: "С чем помочь в первую очередь?",
    form_message: "Пара слов о ваших планах:",
    form_send_email: "Отправить запрос на Email ↗",
    form_privacy_note: "Уважаем конфиденциальность. Никакого спама.",
    footer_tagline: "Честные тарифы на такси, проверенные местные водители и надежные советы по Шри-Ланке.",
    footer_emer_title: "Экстренные службы Шри-Ланки:",
    nav_partners: "Проверенные водители",
    header_book_btn: "BOOK NOW / INQUIRY",
    hero_editorial_p1: "Путешествие по Шри-Ланке,",
    hero_editorial_p2: "прозрачно и просто.",
    glass_popular_badge: "Популярный маршрут",
    glass_all_inc: "Включая дорожные сборы и бензин",
    fb_lbl_pickup: "Место посадки",
    fb_lbl_dropoff: "Место назначения",
    fb_lbl_veh: "Тип автомобиля",
    fb_lbl_curr: "Валюта",
    fb_lbl_datetime: "Дата и время выезда",
    fb_btn_estimate: "РАССЧИТАТЬ СТОИМОСТЬ",
    promise_kicker: "Наша гарантия честности",
    part3_role: "Гид по океану и сафари · Мирисса и Яла",
    part3_desc: "Лицензированный натуралист: этичное наблюдение за синими китами в Мириссе и джип-сафари 4х4 на леопардов в парке Яла.",
    testi_kicker: "Отзывы международных путешественников",
    testi_heading: "Нам доверяют путешественники со всего мира",
    testi_lead: "Более 1 200 гостей из Европы, Азии и Америки доверили свои поездки нашим честным и надежным водителям.",
    testi1_text: "“Водитель встретил нас в аэропорту Коломбо с табличкой точно в срок. Цена совпала до последней рупии, без заездов в магазины с комиссией. Отличный сервис!”",
    testi2_text: "“Отличная и оперативная поддержка в WhatsApp! Пунктуальный водитель, идеальная чистота в микроавтобусе и полезные советы для утреннего посещения Сигирии без очередей.”",
    testi3_text: "“Честная и фиксированная цена без скрытых условий и навязчивых магазинов! Водитель помог купить билеты на поезд Канди — Элла, очень доброжелательный и аккуратный на дорогах.”",
    testi4_text: "“Превосходный сервис! Встретили в аэропорту Коломбо точно вовремя, машина чистая с отличным кондиционером. Фиксированная цена без скрытых доплат. Очень дружелюбный водитель.”",
    concierge_badge: "🌍 Поддержка 6 языков",
    concierge_name: "Многоязычная служба поддержки Clear Lanka",
    concierge_desc: "Поддержка в WhatsApp на английском, тамильском, китайском, французском, немецком и русском языках.",
    login_kicker: "Вход для туристов и администратора",
    login_heading: "Войти в личный кабинет",
    login_lead: "Доступ к сохраненным маршрутам, бронированиям водителей и панели управления.",
    login_tab_traveller: "🎒 Кабинет туриста",
    login_tab_admin: "🛡️ Панель управления",
    login_card_title: "Планируйте четко,<br><em>путешествуйте свободно.</em>",
    login_card_desc: "Сохраняйте понравившиеся услуги и управляйте вашим путешествием по Шри-Ланке в одном месте.",
    login_btn_signin: "Безопасный вход →",
    login_open_full: "Открыть портал путешественника (customer.html) ↗",
    login_open_admin: "Открыть панель администратора (admin.html) ↗"
  }
};

let currentLang = localStorage.getItem('clearlanka_lang') || 'en';

const LANG_NAMES = {
  en: { code: 'EN', alt: 'தமிழ்', name: 'English' },
  ta: { code: 'தமிழ்', alt: 'EN', name: 'தமிழ்' },
  zh: { code: '中文', alt: 'EN', name: '中文' },
  fr: { code: 'FR', alt: 'EN', name: 'Français' },
  de: { code: 'DE', alt: 'EN', name: 'Deutsch' },
  ru: { code: 'RU', alt: 'EN', name: 'Русский' }
};

function applyLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;
  document.body.dataset.lang = lang;
  localStorage.setItem('clearlanka_lang', lang);

  // Update text of elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });

  // Update current language code label in header dropdown
  const codeLabel = document.querySelector('#current-lang-code');
  if (codeLabel && LANG_NAMES[lang]) {
    codeLabel.textContent = LANG_NAMES[lang].code;
  }
  const altLabel = document.querySelector('.lang-alt');
  if (altLabel && LANG_NAMES[lang]) {
    altLabel.textContent = LANG_NAMES[lang].alt;
  }

  // Update language switcher active states
  document.querySelectorAll('[data-lang-choice]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langChoice === lang);
  });

  // Recalculate fare so the text in results matches language
  updateFareCalculation();
  if (typeof window.calcFloatingFare === 'function') {
    window.calcFloatingFare(false);
  }
}

// Setup Language Switcher Listeners
function setupLanguageSwitcher() {
  const trigger = document.querySelector('#lang-dropdown-btn');
  const menu = document.querySelector('#lang-dropdown-menu');

  if (trigger && menu) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('show');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', () => {
      menu.classList.remove('show');
      trigger.setAttribute('aria-expanded', 'false');
    });
  }

  document.querySelectorAll('[data-lang-choice]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosen = btn.dataset.langChoice;
      applyLanguage(chosen);
      if (menu) {
        menu.classList.remove('show');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   Fare Calculator Matrix & Currency Engine
   ========================================================================== */
const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, name: 'USD' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR' },
  GBP: { symbol: '£', rate: 0.79, name: 'GBP' },
  AUD: { symbol: 'A$', rate: 1.52, name: 'AUD' },
  LKR: { symbol: 'Rs.', rate: 305, name: 'LKR' },
  CNY: { symbol: '¥', rate: 7.25, name: 'CNY' },
  RUB: { symbol: '₽', rate: 92.0, name: 'RUB' }
};

let currentCurrency = 'USD';

// Base pricing in USD for standard Sedan
const ROUTE_DATA = {
  // From Colombo Airport (CMB)
  'cmb-airport': {
    'galle': { min: 65, max: 85, time: '2 hrs 15 mins', dist: '155 km', via: 'via E01 Southern Expressway' },
    'mirissa': { min: 75, max: 95, time: '2 hrs 35 mins', dist: '175 km', via: 'via E01 Southern Expressway' },
    'kandy': { min: 55, max: 70, time: '3 hrs 00 mins', dist: '115 km', via: 'via Central Expressway & A1' },
    'nuwara-eliya': { min: 75, max: 95, time: '4 hrs 30 mins', dist: '165 km', via: 'via Gampola & Hatton' },
    'ella': { min: 95, max: 120, time: '5 hrs 00 mins', dist: '215 km', via: 'via E01 & Wellawaya' },
    'sigiriya': { min: 70, max: 90, time: '3 hrs 30 mins', dist: '150 km', via: 'via Kurunegala & Dambulla' },
    'yala': { min: 110, max: 135, time: '4 hrs 15 mins', dist: '245 km', via: 'via E01 Expressway' },
    'trincomalee': { min: 105, max: 130, time: '5 hrs 15 mins', dist: '240 km', via: 'via Habarana & Kantale' },
    'arugambay': { min: 135, max: 165, time: '6 hrs 30 mins', dist: '320 km', via: 'via Monaragala' },
    'colombo-city': { min: 25, max: 35, time: '45 mins', dist: '35 km', via: 'via Katunayake Expressway' },
    'jaffna': { min: 160, max: 195, time: '6 hrs 45 mins', dist: '380 km', via: 'via A9 Highway' }
  },

  // From Colombo City
  'colombo-city': {
    'galle': { min: 55, max: 75, time: '1 hr 55 mins', dist: '125 km', via: 'via E01 Southern Expressway' },
    'mirissa': { min: 65, max: 85, time: '2 hrs 15 mins', dist: '150 km', via: 'via E01 Southern Expressway' },
    'kandy': { min: 50, max: 68, time: '3 hrs 15 mins', dist: '120 km', via: 'via A1 Highway' },
    'nuwara-eliya': { min: 75, max: 95, time: '4 hrs 45 mins', dist: '170 km', via: 'via Avissawella & Hatton' },
    'ella': { min: 95, max: 120, time: '5 hrs 15 mins', dist: '220 km', via: 'via E01 Expressway' },
    'sigiriya': { min: 75, max: 95, time: '4 hrs 00 mins', dist: '175 km', via: 'via Kurunegala' },
    'yala': { min: 105, max: 130, time: '4 hrs 30 mins', dist: '260 km', via: 'via E01 Expressway' },
    'cmb-airport': { min: 25, max: 35, time: '45 mins', dist: '35 km', via: 'via Katunayake Expressway' },
    'jaffna': { min: 165, max: 200, time: '7 hrs 15 mins', dist: '395 km', via: 'via A9 Highway' }
  },

  // From Negombo
  'negombo': {
    'galle': { min: 68, max: 88, time: '2 hrs 25 mins', dist: '165 km', via: 'via Expressway' },
    'mirissa': { min: 78, max: 98, time: '2 hrs 45 mins', dist: '185 km', via: 'via Expressway' },
    'kandy': { min: 55, max: 70, time: '3 hrs 00 mins', dist: '110 km', via: 'via Giriulla' },
    'sigiriya': { min: 70, max: 90, time: '3 hrs 20 mins', dist: '145 km', via: 'via Kurunegala' },
    'ella': { min: 98, max: 125, time: '5 hrs 15 mins', dist: '225 km', via: 'via Expressway' },
    'cmb-airport': { min: 15, max: 20, time: '20 mins', dist: '12 km', via: 'via Airport Road' }
  },

  // From Kandy
  'kandy': {
    'nuwara-eliya': { min: 45, max: 60, time: '2 hrs 30 mins', dist: '75 km', via: 'via Ramboda Falls scenic pass' },
    'ella': { min: 65, max: 85, time: '4 hrs 15 mins', dist: '140 km', via: 'via Nuwara Eliya & Welimada' },
    'sigiriya': { min: 45, max: 60, time: '2 hrs 15 mins', dist: '90 km', via: 'via Matale & Dambulla' },
    'galle': { min: 85, max: 110, time: '4 hrs 30 mins', dist: '220 km', via: 'via Central Highway' },
    'cmb-airport': { min: 55, max: 70, time: '3 hrs 00 mins', dist: '115 km', via: 'via Central Expressway' },
    'colombo-city': { min: 50, max: 68, time: '3 hrs 15 mins', dist: '120 km', via: 'via A1 Highway' },
    'trincomalee': { min: 75, max: 95, time: '4 hrs 00 mins', dist: '180 km', via: 'via Dambulla & Habarana' },
    'yala': { min: 95, max: 120, time: '5 hrs 00 mins', dist: '210 km', via: 'via Mahiyanganaya' }
  },

  // From Galle
  'galle': {
    'mirissa': { min: 20, max: 28, time: '40 mins', dist: '32 km', via: 'via Coastal Matara Road' },
    'ella': { min: 75, max: 95, time: '3 hrs 30 mins', dist: '180 km', via: 'via Southern Highway & Wellawaya' },
    'yala': { min: 65, max: 85, time: '2 hrs 45 mins', dist: '150 km', via: 'via E01 Southern Expressway' },
    'cmb-airport': { min: 65, max: 85, time: '2 hrs 15 mins', dist: '155 km', via: 'via E01 Southern Expressway' },
    'colombo-city': { min: 55, max: 75, time: '1 hr 55 mins', dist: '125 km', via: 'via E01 Southern Expressway' },
    'kandy': { min: 85, max: 110, time: '4 hrs 30 mins', dist: '220 km', via: 'via Expressway' }
  },

  // From Mirissa
  'mirissa': {
    'ella': { min: 70, max: 90, time: '3 hrs 15 mins', dist: '160 km', via: 'via Wellawaya' },
    'yala': { min: 55, max: 75, time: '2 hrs 15 mins', dist: '125 km', via: 'via Expressway & Hambantota' },
    'cmb-airport': { min: 75, max: 95, time: '2 hrs 35 mins', dist: '175 km', via: 'via E01 Southern Expressway' },
    'colombo-city': { min: 65, max: 85, time: '2 hrs 15 mins', dist: '150 km', via: 'via E01 Southern Expressway' }
  },

  // From Ella
  'ella': {
    'yala': { min: 55, max: 70, time: '2 hrs 15 mins', dist: '105 km', via: 'via Wellawaya & Thanamalwila' },
    'kandy': { min: 65, max: 85, time: '4 hrs 15 mins', dist: '140 km', via: 'via Nuwara Eliya' },
    'nuwara-eliya': { min: 38, max: 50, time: '1 hr 45 mins', dist: '55 km', via: 'via Welimada Pass' },
    'galle': { min: 75, max: 95, time: '3 hrs 30 mins', dist: '180 km', via: 'via Southern Highway' },
    'cmb-airport': { min: 95, max: 120, time: '5 hrs 00 mins', dist: '215 km', via: 'via Expressway' }
  },

  // From Sigiriya
  'sigiriya': {
    'kandy': { min: 45, max: 60, time: '2 hrs 15 mins', dist: '90 km', via: 'via Dambulla & Matale' },
    'trincomalee': { min: 50, max: 65, time: '2 hrs 00 mins', dist: '100 km', via: 'via Habarana & Kantale' },
    'nuwara-eliya': { min: 75, max: 95, time: '4 hrs 30 mins', dist: '165 km', via: 'via Kandy' },
    'cmb-airport': { min: 70, max: 90, time: '3 hrs 30 mins', dist: '150 km', via: 'via Kurunegala' },
    'galle': { min: 110, max: 135, time: '5 hrs 15 mins', dist: '280 km', via: 'via Expressway' }
  },

  // From Jaffna
  'jaffna': {
    'cmb-airport': { min: 160, max: 195, time: '6 hrs 45 mins', dist: '380 km', via: 'via A9 Highway' },
    'colombo-city': { min: 165, max: 200, time: '7 hrs 15 mins', dist: '395 km', via: 'via A9 Highway' },
    'kandy': { min: 135, max: 165, time: '6 hrs 00 mins', dist: '320 km', via: 'via Dambulla & A9' }
  }
};

const VEHICLE_FACTORS = {
  sedan: { factor: 1.0, name: 'AC Sedan / Saloon (1–3 Pax)' },
  van: { factor: 1.35, name: 'KDH High-Roof Van (4–7 Pax)' },
  suv: { factor: 1.60, name: 'Premium SUV / Hiace (VIP)' },
  tuktuk: { factor: 0.60, name: 'Scenic Tuk-Tuk (1–2 Pax)' }
};

function formatCurrency(amountUSD, currency) {
  const c = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = Math.round(amountUSD * c.rate);
  if (currency === 'LKR') {
    return `${c.symbol} ${converted.toLocaleString()}`;
  }
  return `${c.symbol}${converted.toLocaleString()}`;
}

function getLocalizedWhatsAppMessage(pickup, dropoff, vehicle, price) {
  switch (currentLang) {
    case 'ta':
      return `வணக்கம் Clear Lanka Travel! நான் டாக்சி முன்பதிவு செய்ய விரும்புகிறேன்.\n📍 புறப்படும் இடம்: ${pickup}\n🏁 சேருமிடம்: ${dropoff}\n🚗 வாகனம்: ${vehicle}\n💵 மதிப்பீடு கட்டணம்: ${price}\nதயவுசெய்து கிடைக்கும் தன்மையை உறுதிப்படுத்தவும்.`;
    case 'zh':
      return `您好 Clear Lanka Travel！我想咨询预订出租车/包车：\n📍 出发地：${pickup}\n🏁 目的地：${dropoff}\n🚗 车型：${vehicle}\n💵 估算费用：${price}\n请确认司机档期与下一步安排。`;
    case 'fr':
      return `Bonjour Clear Lanka Travel ! Je souhaite réserver un taxi/chauffeur :\n📍 Départ : ${pickup}\n🏁 Arrivée : ${dropoff}\n🚗 Véhicule : ${vehicle}\n💵 Tarif estimé : ${price}\nMerci de me confirmer la disponibilité.`;
    case 'de':
      return `Hallo Clear Lanka Travel! Ich möchte eine Taxifahrt anfragen:\n📍 Abfahrt : ${pickup}\n🏁 Ziel : ${dropoff}\n🚗 Fahrzeug : ${vehicle}\n💵 Geschätzter Preis : ${price}\nBitte um Bestätigung der Verfügbarkeit.`;
    case 'ru':
      return `Здравствуйте, Clear Lanka Travel! Хочу заказать трансфер:\n📍 Откуда : ${pickup}\n🏁 Куда : ${dropoff}\n🚗 Автомобиль : ${vehicle}\n💵 Примерная цена : ${price}\nПожалуйста, подтвердите наличие водителя.`;
    default:
      return `Hello Clear Lanka Travel! I would like to check taxi availability.\n📍 Pickup: ${pickup}\n🏁 Dropoff: ${dropoff}\n🚗 Vehicle: ${vehicle}\n💵 Estimated Fare: ${price}\nPlease confirm driver availability and next steps.`;
  }
}

function updateFareCalculation() {
  const pickupEl = document.querySelector('#calc-pickup');
  const dropoffEl = document.querySelector('#calc-dropoff');
  if (!pickupEl || !dropoffEl) return;

  const pickupVal = pickupEl.value;
  const dropoffVal = dropoffEl.value;
  const pickupText = pickupEl.options[pickupEl.selectedIndex].text.split('(')[0].trim();
  const dropoffText = dropoffEl.options[dropoffEl.selectedIndex].text.split('(')[0].trim();

  const selectedVehicleEl = document.querySelector('input[name="vehicle-type"]:checked');
  const vehicleKey = selectedVehicleEl ? selectedVehicleEl.value : 'sedan';
  const vehicleInfo = VEHICLE_FACTORS[vehicleKey] || VEHICLE_FACTORS.sedan;

  // Lookup in matrix
  let route = (ROUTE_DATA[pickupVal] && ROUTE_DATA[pickupVal][dropoffVal]) ||
              (ROUTE_DATA[dropoffVal] && ROUTE_DATA[dropoffVal][pickupVal]);

  // Fallback if combination not directly defined
  if (!route) {
    if (pickupVal === dropoffVal) {
      route = { min: 15, max: 25, time: '20–30 mins', dist: '15 km', via: 'Local city transfer' };
    } else {
      route = { min: 80, max: 105, time: '4 hrs 00 mins', dist: '180 km', via: 'Scenic cross-island route' };
    }
  }

  const minFare = Math.round(route.min * vehicleInfo.factor);
  const maxFare = Math.round(route.max * vehicleInfo.factor);

  // Format strings
  const formattedMin = formatCurrency(minFare, currentCurrency);
  const formattedMax = formatCurrency(maxFare, currentCurrency);
  const priceStr = `${formattedMin} – ${formattedMax}`;

  // Update UI Elements
  const routeNameEl = document.querySelector('#result-route-name');
  const viaRouteEl = document.querySelector('#result-via-route');
  const priceRangeEl = document.querySelector('#result-price-range');
  const currencySubEl = document.querySelector('#result-currency-sub');
  const estTimeEl = document.querySelector('#result-est-time');
  const estDistEl = document.querySelector('#result-est-distance');
  const waBtnEl = document.querySelector('#calc-whatsapp-btn');

  if (routeNameEl) routeNameEl.textContent = `${pickupText} → ${dropoffText}`;
  if (viaRouteEl) viaRouteEl.textContent = route.via;
  if (priceRangeEl) priceRangeEl.textContent = priceStr;
  if (currencySubEl) currencySubEl.textContent = `${currentCurrency} · Total Vehicle Price`;
  if (estTimeEl) estTimeEl.textContent = `~${route.time}`;
  if (estDistEl) estDistEl.textContent = route.dist;

  // Pre-filled WhatsApp button URL
  if (waBtnEl) {
    const waText = getLocalizedWhatsAppMessage(pickupText, dropoffText, vehicleInfo.name, priceStr);
    waBtnEl.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
  }

  // Update Floating Hero card as well if Airport to Galle
  const heroPriceEl = document.querySelector('#glass-price-val') || document.querySelector('#hero-card-price');
  if (heroPriceEl && (pickupVal === 'cmb-airport' || pickupVal === 'galle')) {
    heroPriceEl.textContent = priceStr;
  }
}

// Attach event listeners to calculator inputs
document.querySelector('#calc-pickup')?.addEventListener('change', updateFareCalculation);
document.querySelector('#calc-dropoff')?.addEventListener('change', updateFareCalculation);
document.querySelectorAll('input[name="vehicle-type"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.vehicle-card').forEach(card => card.classList.remove('active'));
    radio.closest('.vehicle-card')?.classList.add('active');
    updateFareCalculation();
  });
});

// Currency Switcher Pills
document.querySelectorAll('.currency-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.currency-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCurrency = btn.dataset.currency || 'USD';
    const fbCurr = document.querySelector('#fb-currency');
    if (fbCurr) fbCurr.value = currentCurrency;
    updateFareCalculation();
    if (typeof window.calcFloatingFare === 'function') window.calcFloatingFare(false);
  });
});

// Preset destination link triggers (from Destinations section)
document.querySelectorAll('[data-dest-preset]').forEach(link => {
  link.addEventListener('click', () => {
    const dest = link.dataset.destPreset;
    const dropoffSelect = document.querySelector('#calc-dropoff');
    if (dropoffSelect && dest) {
      dropoffSelect.value = dest;
      updateFareCalculation();
    }
    const fbDropoff = document.querySelector('#fb-dropoff');
    if (fbDropoff && dest) {
      fbDropoff.value = dest;
      if (typeof window.calcFloatingFare === 'function') window.calcFloatingFare(false);
    }
  });
});

/* ==========================================================================
   Floating Fare Estimator Bar (Hero Section)
   ========================================================================== */
function initFloatingFareBar() {
  const pickupEl = document.querySelector('#fb-pickup');
  const dropoffEl = document.querySelector('#fb-dropoff');
  const currencyEl = document.querySelector('#fb-currency');
  const datetimeEl = document.querySelector('#fb-datetime');
  const vehBtns = document.querySelectorAll('.fb-veh-btn');
  const estimateBtn = document.querySelector('#fb-estimate-btn');
  const resultCard = document.querySelector('#fb-result-card');
  const closeBtn = document.querySelector('#fb-close-result');

  if (!pickupEl || !dropoffEl || !estimateBtn) return;

  // Set default datetime to tomorrow 09:00 AM if empty
  if (datetimeEl && !datetimeEl.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    datetimeEl.value = `${months[tomorrow.getMonth()]} ${tomorrow.getDate()}, 09:00 AM`;
  }

  let selectedVeh = 'sedan';

  // Vehicle selector buttons
  vehBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vehBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      selectedVeh = btn.dataset.vehicle || 'sedan';
      calcFloatingFare(false);
    });
  });

  // Location and currency change triggers
  pickupEl.addEventListener('change', () => calcFloatingFare(false));
  dropoffEl.addEventListener('change', () => calcFloatingFare(false));

  if (currencyEl) {
    currencyEl.addEventListener('change', () => {
      currentCurrency = currencyEl.value;
      // Sync currency pills
      document.querySelectorAll('.currency-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.currency === currentCurrency);
      });
      updateFareCalculation();
      calcFloatingFare(false);
    });
  }

  function calcFloatingFare(openCard = true) {
    const pVal = pickupEl.value;
    const dVal = dropoffEl.value;
    const pText = pickupEl.options[pickupEl.selectedIndex]?.text.split('(')[0].trim() || pVal;
    const dText = dropoffEl.options[dropoffEl.selectedIndex]?.text.split('(')[0].trim() || dVal;
    const curr = currencyEl ? currencyEl.value : currentCurrency;
    const vehInfo = VEHICLE_FACTORS[selectedVeh] || VEHICLE_FACTORS.sedan;

    let route = (ROUTE_DATA[pVal] && ROUTE_DATA[pVal][dVal]) ||
                (ROUTE_DATA[dVal] && ROUTE_DATA[dVal][pVal]);

    if (!route) {
      if (pVal === dVal) {
        route = { min: 15, max: 25, time: '20–30 mins', dist: '15 km', via: 'Local city transfer' };
      } else {
        route = { min: 80, max: 105, time: '4 hrs 00 mins', dist: '180 km', via: 'Scenic route across island' };
      }
    }

    const minFare = Math.round(route.min * vehInfo.factor);
    const maxFare = Math.round(route.max * vehInfo.factor);
    const formattedMin = formatCurrency(minFare, curr);
    const formattedMax = formatCurrency(maxFare, curr);
    const priceRange = `${formattedMin} – ${formattedMax}`;

    const resRoute = document.querySelector('#fb-res-route');
    const resTime = document.querySelector('#fb-res-time');
    const resDist = document.querySelector('#fb-res-dist');
    const resVia = document.querySelector('#fb-res-via');
    const resCurr = document.querySelector('#fb-res-curr');
    const resPrice = document.querySelector('#fb-res-price');
    const waBtn = document.querySelector('#fb-whatsapp-book-btn');

    if (resRoute) resRoute.textContent = `${pText} → ${dText}`;
    if (resTime) resTime.textContent = `⏱ ${route.time}`;
    if (resDist) resDist.textContent = `🛣 ${route.dist}`;
    if (resVia) resVia.textContent = `⚡ ${route.via}`;
    if (resCurr) resCurr.textContent = curr;
    if (resPrice) resPrice.textContent = priceRange;

    // Update Floating Hero route card price if Airport to Galle
    const heroPriceEl = document.querySelector('#glass-price-val') || document.querySelector('#hero-card-price');
    if (heroPriceEl && (pVal === 'cmb-airport' || pVal === 'galle')) {
      heroPriceEl.textContent = priceRange;
    }

    // Build localized WhatsApp message
    if (waBtn) {
      const dtText = datetimeEl && datetimeEl.value ? `\n📅 Date & Time: ${datetimeEl.value}` : '';
      const waMsg = `Hello Clear Lanka Travel! I would like to book a ride from the floating fare estimator:${dtText}\n📍 Pickup: ${pText}\n🏁 Drop-off: ${dText}\n🚗 Vehicle: ${vehInfo.name}\n💵 Estimated Fare: ${priceRange} (${curr})\nPlease confirm availability and driver assignment.`;
      waBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
    }

    if (resultCard && openCard) {
      resultCard.removeAttribute('hidden');
      resultCard.classList.add('visible');
      resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Hook globally
  window.calcFloatingFare = calcFloatingFare;

  estimateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calcFloatingFare(true);
  });

  if (closeBtn && resultCard) {
    closeBtn.addEventListener('click', () => {
      resultCard.setAttribute('hidden', '');
      resultCard.classList.remove('visible');
    });
  }

  // Pre-calculate on load
  calcFloatingFare(false);
}

/* ==========================================================================
   Tour Itinerary Filtering
   ========================================================================== */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;
    document.querySelectorAll('.itinerary-card').forEach(card => {
      const cardCats = card.dataset.category || '';
      if (category === 'all' || cardCats.includes(category)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ==========================================================================
   Booking Hub Tabs (Instant WhatsApp vs Email)
   ========================================================================== */
document.querySelectorAll('.tab-link').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const targetId = tab.dataset.target;
    document.querySelector(`#${targetId}`)?.classList.add('active');
  });
});

/* ==========================================================================
   Traveller & Operator Login Hub Tabs
   ========================================================================== */
document.querySelectorAll('.auth-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.auth-tab-pane').forEach(p => {
      p.classList.remove('active');
      p.hidden = true;
    });

    btn.classList.add('active');
    const targetId = btn.dataset.target;
    const targetPane = document.querySelector(`#${targetId}`);
    if (targetPane) {
      targetPane.classList.add('active');
      targetPane.hidden = false;
    }
  });
});

// Homepage Traveller Login Form submission handler
const homeTravellerForm = document.querySelector('#homepage-traveller-login');
if (homeTravellerForm) {
  homeTravellerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.querySelector('#home-traveller-status');
    const email = document.querySelector('#home-traveller-email')?.value.trim();
    const password = document.querySelector('#home-traveller-password')?.value;
    if (!status) return;
    status.className = 'auth-feedback';
    status.textContent = 'Signing in securely…';
    if (!cmsClient) {
      status.className = 'auth-feedback error';
      status.textContent = 'Secure login is unavailable. Open the traveller portal and try again.';
      return;
    }
    try {
      const { error } = await cmsClient.auth.signInWithPassword({ email, password });
      if (error) throw error;
      status.className = 'auth-feedback success';
      status.textContent = '✓ Signed in securely. Opening your traveller dashboard…';
      window.location.href = 'customer.html';
    } catch (error) {
      status.className = 'auth-feedback error';
      status.textContent = error.message || 'Sign-in failed. Check your details and try again.';
    }
  });
}

const homeAdminForm = document.querySelector('#homepage-admin-login');
if (homeAdminForm) {
  homeAdminForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.querySelector('#home-admin-status');
    const email = document.querySelector('#home-admin-email')?.value.trim();
    const password = document.querySelector('#home-admin-password')?.value;
    if (!status) return;
    status.className = 'auth-feedback';
    status.textContent = 'Verifying owner access…';
    if (!cmsClient) {
      status.className = 'auth-feedback error';
      status.textContent = 'Secure owner login is unavailable.';
      return;
    }
    try {
      const { data: authData, error: authError } = await cmsClient.auth.signInWithPassword({ email, password });
      if (authError) throw authError;
      const { data: admin, error: roleError } = await cmsClient.from('site_admins').select('role').eq('id', authData.user.id).maybeSingle();
      if (roleError) throw roleError;
      if (!admin || !['owner', 'editor'].includes(admin.role)) {
        await cmsClient.auth.signOut();
        throw new Error('This account does not have Owner Studio access.');
      }
      status.className = 'auth-feedback success';
      status.textContent = '✓ Access verified. Opening Owner Studio…';
      window.location.href = 'admin.html';
    } catch (error) {
      status.className = 'auth-feedback error';
      status.textContent = error.message || 'Owner sign-in failed.';
    }
  });
}

// WhatsApp Quick Booking Form
const waQuickForm = document.querySelector('#whatsapp-quick-form');
if (waQuickForm) {
  waQuickForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#wa-name')?.value.trim() || 'Traveller';
    const dates = document.querySelector('#wa-dates')?.value.trim() || 'Not fixed yet';
    const travellers = document.querySelector('#wa-travellers')?.value || '2 travellers';
    const service = document.querySelector('#wa-service')?.value || 'Travel Help';
    const notes = document.querySelector('#wa-notes')?.value.trim() || 'General enquiry';

    // Persist inquiry to CRM storage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('clearLankaInquiries') || '[]');
      existingLeads.unshift({
        id: `lead-${Date.now()}`,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
        name,
        phone: 'Direct WhatsApp',
        email: 'Submitted via Web WhatsApp Form',
        service,
        dates,
        pax: travellers,
        status: 'new',
        amount: 0,
        notes
      });
      localStorage.setItem('clearLankaInquiries', JSON.stringify(existingLeads.slice(0, 50)));
    } catch (_) {}

    let msg = `Hello Clear Lanka Travel! I would like to enquire about travel assistance:\n👤 Name: ${name}\n📅 Dates: ${dates}\n👥 Travellers: ${travellers}\n🚗 Service: ${service}\n📝 Notes: ${notes}\nPlease send options and availability.`;
    if (currentLang === 'ta') {
      msg = `வணக்கம் Clear Lanka Travel! எனது பயண முன்பதிவு விவரங்கள்:\n👤 பெயர்: ${name}\n📅 தேதிகள்: ${dates}\n👥 பயணிகள்: ${travellers}\n🚗 தேவை: ${service}\n📝 குறிப்பு: ${notes}\nதயவுசெய்து கட்டணம் மற்றும் விவரங்களை அனுப்பவும்.`;
    } else if (currentLang === 'zh') {
      msg = `您好 Clear Lanka Travel！行程咨询：\n👤 姓名：${name}\n📅 日期：${dates}\n👥 人数：${travellers}\n🚗 服务：${service}\n📝 需求：${notes}\n请发送具体报价和安排，谢谢！`;
    } else if (currentLang === 'fr') {
      msg = `Bonjour Clear Lanka Travel ! Demande d'informations :\n👤 Nom : ${name}\n📅 Dates : ${dates}\n👥 Voyageurs : ${travellers}\n🚗 Prestation : ${service}\n📝 Remarques : ${notes}\nMerci de m'envoyer les détails et disponibilités.`;
    } else if (currentLang === 'de') {
      msg = `Hallo Clear Lanka Travel! Reiseanfrage :\n👤 Name : ${name}\n📅 Reisedaten : ${dates}\n👥 Reisende : ${travellers}\n🚗 Leistung : ${service}\n📝 Wünsche : ${notes}\nBitte um Übersendung von Optionen und Verfügbarkeit.`;
    } else if (currentLang === 'ru') {
      msg = `Здравствуйте, Clear Lanka Travel! Запрос информации по поездке:\n👤 Имя : ${name}\n📅 Даты : ${dates}\n👥 Количество гостей : ${travellers}\n🚗 Услуга : ${service}\n📝 Пожелания : ${notes}\nПожалуйста, пришлите варианты и расчет.`;
    }

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });
}

// Email Form Handler
const emailForm = document.querySelector('#enquiry-form');
if (emailForm) {
  emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(emailForm);
    const status = emailForm.querySelector('.form-status');
    const help = data.getAll('help').join(', ') || 'general travel help';
    const subject = encodeURIComponent(`Sri Lanka Trip Enquiry from ${data.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nDates: ${data.get('dates') || 'Flexible'}\nTravellers: ${data.get('travellers')}\nServices: ${help}\n\nMessage:\n${data.get('message')}`
    );

    // Persist inquiry to CRM storage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('clearLankaInquiries') || '[]');
      existingLeads.unshift({
        id: `lead-${Date.now()}`,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
        name: data.get('name') || 'Traveller',
        phone: '',
        email: data.get('email') || '',
        service: help,
        dates: data.get('dates') || 'Flexible',
        pax: data.get('travellers') || '1-2 travellers',
        status: 'new',
        amount: 0,
        notes: data.get('message') || 'Email inquiry'
      });
      localStorage.setItem('clearLankaInquiries', JSON.stringify(existingLeads.slice(0, 50)));
    } catch (_) {}

    if (status) {
      status.textContent = 'Opening your email application...';
    }
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  });
}

/* ==========================================================================
   Navigation & Scroll
   ========================================================================== */
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

// Refresh Contact Links
function refreshContactLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    let defaultText = 'Hello Clear Lanka Travel, I would like help planning my Sri Lanka trip.';
    if (currentLang === 'ta') defaultText = 'வணக்கம் Clear Lanka Travel, எனது இலங்கை பயணத்தை திட்டமிட உதவி வேண்டும்.';
    if (currentLang === 'zh') defaultText = '您好 Clear Lanka Travel，我想咨询关于斯里兰卡旅行的包车与行程安排。';
    if (currentLang === 'fr') defaultText = 'Bonjour Clear Lanka Travel, je souhaite obtenir de l\'aide pour organiser mon voyage au Sri Lanka.';
    if (currentLang === 'de') defaultText = 'Hallo Clear Lanka Travel, ich benötige Unterstützung bei der Planung meiner Sri Lanka Reise.';
    if (currentLang === 'ru') defaultText = 'Здравствуйте, Clear Lanka Travel! Хочу проконсультироваться по поводу поездки на Шри-Ланку.';

    if (!link.href || link.href.includes('94770000000')) {
      link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;
    }
  });
  document.querySelectorAll('[data-phone]').forEach(node => node.textContent = CONFIG.displayPhone);
  document.querySelectorAll('[data-email]').forEach(link => link.href = `mailto:${CONFIG.email}`);
  document.querySelectorAll('[data-email-text]').forEach(node => node.textContent = CONFIG.email);
}

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ==========================================================================
   Testimonial Carousel with Avatar Photos
   ========================================================================== */
const testimonials = [
  {
    quote: 'Our driver was exactly where promised at Colombo Airport holding our name board. The price matched the quote to the dollar, and we felt looked after without ever being pressured into tourist shops. Best decision we made for Sri Lanka!',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    initials: 'AM',
    name: 'Anna & Marc',
    trip: 'Germany · 12-day trip across Sri Lanka'
  },
  {
    quote: 'The price check on WhatsApp saved us from paying $120 for an airport taxi that should have cost $70. The advice was quick, warm, and genuinely useful—not pushy at all.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    initials: 'JT',
    name: 'Jamie T.',
    trip: 'United Kingdom · Solo traveller'
  },
  {
    quote: 'Our guide in Ella was wonderful with our children and adjusted the hiking pace when rain arrived. That kind of local care made the whole trip memorable.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
    initials: 'SR',
    name: 'Sofia & Family',
    trip: 'Spain · Family holiday'
  }
];

document.querySelectorAll('.dots button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const item = testimonials[index];
    const bq = document.querySelector('.testimonial-wrap blockquote');
    const avatarImg = document.querySelector('.guest-avatar-img');
    const ini = document.querySelector('.guest-avatar-fallback');
    const name = document.querySelector('.guest b');
    const trip = document.querySelector('.guest small');
    const dotsWrap = document.querySelector('.dots');

    if (bq) bq.textContent = item.quote;
    if (avatarImg) avatarImg.src = item.photo;
    if (ini) ini.textContent = item.initials;
    if (name) name.textContent = item.name;
    if (trip) trip.textContent = item.trip;

    document.querySelectorAll('.dots button').forEach((dot, i) => dot.classList.toggle('active', i === index));
    if (dotsWrap) dotsWrap.setAttribute('aria-label', `Testimonial ${index + 1} of ${testimonials.length}`);
  });
});

/* ==========================================================================
   Hero Visual Photo Showcase Switcher
   ========================================================================== */
const heroPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
    title: 'Nine Arch Bridge, Ella',
    loc: 'Central Highlands',
    alt: 'Nine Arch Bridge train in Ella, Sri Lanka'
  },
  {
    url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80',
    title: 'Sigiriya Lion Rock',
    loc: 'Cultural Triangle',
    alt: 'Sigiriya Rock Fortress at sunrise'
  },
  {
    url: 'images/mirissa-coconut-hill.jpg',
    title: 'Mirissa Coconut Tree Hill',
    loc: 'Southern Coast',
    alt: 'Palm fringed beach in southern Sri Lanka'
  }
];

document.querySelectorAll('.hero-thumb-btn').forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.hero-thumb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const data = heroPhotos[idx];
    const mainImg = document.querySelector('.hero-main-photo');
    const titleEl = document.querySelector('#hero-caption-title');
    const locEl = document.querySelector('#hero-caption-loc');
    if (mainImg && data) {
      mainImg.src = data.url;
      mainImg.alt = data.alt;
    }
    if (titleEl && data) titleEl.textContent = data.title;
    if (locEl && data) locEl.textContent = data.loc;
  });
});

/* ==========================================================================
   Intersection Observer (Scroll Reveal)
   ========================================================================== */
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

/* ==========================================================================
   Supabase CMS Integration (Backward Compatible)
   ========================================================================== */
const cmsCfg = window.CLEAR_LANKA_SUPABASE;
const cmsClient = window.supabase?.createClient ? window.supabase.createClient(cmsCfg?.url, cmsCfg?.anonKey) : null;

async function loadPublishedCms() {
  let content = null;

  // 1. Read from Local Admin Storage
  try {
    const localRaw = localStorage.getItem('clearLankaAdminContent');
    if (localRaw) {
      content = JSON.parse(localRaw);
    }
  } catch (e) {
    console.warn('[CMS] Local parse error:', e);
  }

  // 2. Fetch from Supabase if connected
  if (cmsClient) {
    try {
      const { data: remote } = await cmsClient.from('site_settings').select('content').eq('id', 'main').maybeSingle();
      if (remote?.content) {
        content = { ...(content || {}), ...remote.content };
      }
    } catch (err) {
      console.warn('[CMS] Remote fetch skipped:', err);
    }
  }

  if (!content) return;

  // --- Apply Announcement Bar ---
  if (content.announcement) {
    const annBar = document.querySelector('.top-announcement-bar');
    if (annBar) {
      if (content.announcement.enabled === false) {
        annBar.style.display = 'none';
      } else {
        annBar.style.display = '';
        const annTextEl = annBar.querySelector('[data-i18n="announcement_text"]');
        if (annTextEl && content.announcement.text) {
          annTextEl.textContent = content.announcement.text;
        }
      }
    }
  }

  // --- Apply Hero Section ---
  if (content.hero) {
    if (content.hero.heroEyebrow) {
      const el = document.querySelector('.eyebrow span:last-child');
      if (el) el.textContent = ` ${content.hero.heroEyebrow}`;
    }
    if (content.hero.heroTitle) {
      const h1 = document.querySelector('.hero h1');
      if (h1) h1.innerHTML = content.hero.heroTitle;
    }
    if (content.hero.heroLead) {
      const lead = document.querySelector('.hero-lead');
      if (lead) lead.textContent = content.hero.heroLead;
    }
    if (content.hero.heroBtnCalc) {
      const btn = document.querySelector('.hero-actions a[href="#calculator"]');
      if (btn) btn.innerHTML = `${safeText(content.hero.heroBtnCalc)}`;
    }
    if (content.hero.heroBtnWa) {
      const btn = document.querySelector('.hero-actions a[data-whatsapp]');
      if (btn) btn.innerHTML = `${safeText(content.hero.heroBtnWa)}`;
    }
  }

  // --- Apply Contact & Helplines ---
  const contactData = content.contact || content;
  if (contactData.whatsappNumber || contactData.displayPhone || contactData.email) {
    Object.assign(CONFIG, {
      whatsappNumber: contactData.whatsappNumber || CONFIG.whatsappNumber,
      displayPhone: contactData.displayPhone || CONFIG.displayPhone,
      email: contactData.email || CONFIG.email
    });
    refreshContactLinks();
  }

  // --- Apply Routes to Live Taxi Fare Matrix ---
  if (Array.isArray(content.routes) && content.routes.length) {
    content.routes.forEach(r => {
      const toKey = r.to.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      if (!ROUTE_DATA['cmb-airport']) ROUTE_DATA['cmb-airport'] = {};
      ROUTE_DATA['cmb-airport'][toKey] = {
        min: r.min,
        max: r.max,
        time: r.time || '2 hrs',
        dist: r.dist || '150 km',
        via: r.via || 'via Expressway'
      };
    });
    updateFareCalculation();
  }

  // --- Apply Destinations ---
  if (Array.isArray(content.destinations) && content.destinations.length) {
    const grid = document.querySelector('.destination-grid');
    if (grid) {
      const visibleDests = content.destinations.filter(d => d.published !== false);
      if (visibleDests.length) {
        grid.innerHTML = visibleDests.map(d => `
          <article class="destination-card reveal visible">
            <div class="dest-img-wrap">
              <img src="${safeText(d.image_url || 'images/mirissa-beach.jpg')}" alt="${safeText(d.title)}" loading="lazy" />
              <span class="dest-region">${safeText(d.category || 'Sri Lanka')}</span>
            </div>
            <div class="dest-info">
              <h3>${safeText(d.title)}</h3>
              <p class="dest-desc">${safeText(d.description)}</p>
              <div class="dest-meta">
                <span>⏱ <b>${safeText(d.subtitle || 'Scenic spot')}</b></span>
                <span>✨ <b>Highlights:</b> ${safeText(d.highlights || 'Must see')}</span>
              </div>
              <a href="#calculator" class="dest-link">Check taxi fare →</a>
            </div>
          </article>
        `).join('');
      }
    }
  }

  // --- Apply Curated Itineraries ---
  if (Array.isArray(content.itineraries) && content.itineraries.length) {
    const grid = document.querySelector('.itinerary-grid');
    if (grid) {
      const visibleItins = content.itineraries.filter(i => i.published !== false);
      if (visibleItins.length) {
        grid.innerHTML = visibleItins.map(i => `
          <article class="itinerary-card reveal visible" data-category="${safeText(i.category || 'culture')}">
            <div class="itinerary-image-wrap">
              <img src="${safeText(i.image_url || 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80')}" alt="${safeText(i.title)}" loading="lazy" />
              <span class="itinerary-badge badge-popular">${safeText(i.badge || 'Curated')}</span>
              <span class="itinerary-duration">${safeText(i.duration)}</span>
            </div>
            <div class="itinerary-body">
              <span class="itinerary-type">${safeText(i.category || 'Tour Package')}</span>
              <h3>${safeText(i.title)}</h3>
              <p class="itinerary-stops"><b>Route:</b> ${safeText(i.route)}</p>
              <ul class="itinerary-highlights">
                ${(i.highlights || '').split('\n').filter(Boolean).map(h => `<li><span>•</span> ${safeText(h.replace(/^[•\-\*]\s*/, ''))}</li>`).join('')}
              </ul>
              <div class="itinerary-footer">
                <div class="itinerary-price">
                  <small>Private Chauffeur & Vehicle from</small>
                  <b>${safeText(i.price)} <span class="price-unit">/ car</span></b>
                </div>
                <a class="button button-small button-coral" data-whatsapp href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello, I would like to customize the tour: ' + i.title)}" target="_blank" rel="noopener">
                  <span>Customize ↗</span>
                </a>
              </div>
            </div>
          </article>
        `).join('');
      }
    }
  }

  // --- Apply Chauffeur Partners ---
  if (Array.isArray(content.partners) && content.partners.length) {
    const grid = document.querySelector('.partner-grid');
    if (grid) {
      const visiblePartners = content.partners.filter(p => p.published !== false);
      if (visiblePartners.length) {
        grid.innerHTML = visiblePartners.map(p => `
          <article class="partner-card reveal visible">
            <div class="partner-image photo-partner">
              <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80" alt="${safeText(p.name)}" loading="lazy" />
              <span class="verified-label">${safeText(p.badge || 'Verified Driver Pick')}</span>
              <span class="rating">${safeText(p.rating || '★ 4.9')}</span>
            </div>
            <div class="partner-info">
              <small>${safeText(p.base || 'Islandwide')}</small>
              <h3>${safeText(p.name)}</h3>
              <p>Fleet: ${safeText(p.vehicle)}. License: <code>${safeText(p.license)}</code>. Languages: ${safeText(p.languages)}.</p>
              <div>
                <span>✓ SLTDA licensed and verified</span>
                <span>✓ Air-conditioned vehicle inspected</span>
                <span>✓ Transparent fixed pricing</span>
              </div>
              <a data-whatsapp href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi, I am interested in booking driver: ' + p.name)}" target="_blank" rel="noopener">
                <span>Check Availability →</span>
              </a>
            </div>
          </article>
        `).join('');
      }
    }
  }

  // --- Apply Section Visibility ---
  if (content.layout?.sectionVisibility) {
    const secMap = {
      calculator: '#calculator',
      itineraries: '#itineraries',
      destinations: '#destinations',
      safety: '#safety',
      partners: '#partners',
      testimonials: '.testimonials'
    };
    Object.entries(secMap).forEach(([key, sel]) => {
      const el = document.querySelector(sel);
      if (el && content.layout.sectionVisibility[key] === false) {
        el.style.display = 'none';
      } else if (el) {
        el.style.display = '';
      }
    });
  }
}

function safeText(value = '') {
  return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

// Initialize
setupLanguageSwitcher();
refreshContactLinks();
applyLanguage(currentLang);
updateFareCalculation();
initFloatingFareBar();
loadPublishedCms();
