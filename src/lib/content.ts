export const siteConfig = {
  name: "Alma y Tierra Retreat",
  tagline: "A Therapeutic Yoga Retreat in Oaxaca, Mexico",
  dates: "November 8–14, 2026",
  location: "Oaxaca, Mexico",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Inclusions", href: "#inclusions" },
  { label: "Schedule", href: "#schedule" },
  { label: "Guide", href: "#guide" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  heading: "Reconnect with Yourself in Oaxaca",
  subheading:
    "A 7-day therapeutic yoga retreat nestled in the heart of southern Mexico. Move, breathe, and restore among ancient traditions and breathtaking landscapes.",
  cta: "Reserve Your Spot",
  ctaHref: "#pricing",
  image: "/images/hero.jpg",
};

export const about = {
  heading: "Your Journey Awaits",
  paragraphs: [
    "Alma y Tierra is more than a yoga retreat — it's an invitation to slow down, turn inward, and rediscover the rhythms of your body and spirit. Set against the vibrant culture of Oaxaca, this week-long immersion blends daily yoga practice with therapeutic bodywork, guided meditation, and the rich culinary traditions of southern Mexico.",
    "Whether you're a seasoned practitioner or stepping onto the mat for the first time, this retreat meets you exactly where you are. Our intimate group size (max 12 guests) ensures personalized attention, deep connection, and space for genuine transformation.",
  ],
  image: "/images/about.jpg",
  imageAlt: "Colorful Mexican courtyard with arches and greenery",
};

export const inclusions = {
  heading: "What's Included",
  items: [
    {
      icon: "🧘",
      title: "Daily Yoga Sessions",
      description:
        "Two guided classes daily — a vinyasa flow at sunrise and a restorative yin practice at sunset.",
    },
    {
      icon: "🍽️",
      title: "Farm-to-Table Meals",
      description:
        "Three nourishing meals per day crafted with locally sourced Oaxacan ingredients. Dietary needs accommodated.",
    },
    {
      icon: "🏡",
      title: "Boutique Accommodations",
      description:
        "Shared or private rooms in a charming hacienda-style property with lush gardens and a pool.",
    },
    {
      icon: "💆",
      title: "Therapeutic Bodywork",
      description:
        "One 60-minute massage or temazcal (traditional sweat lodge) ceremony included per guest.",
    },
    {
      icon: "🌄",
      title: "Cultural Excursions",
      description:
        "Guided visit to Monte Albán ruins, a mezcal distillery tour, and a traditional Oaxacan cooking class.",
    },
    {
      icon: "🧘‍♀️",
      title: "Meditation & Breathwork",
      description:
        "Daily guided sessions in pranayama, mindfulness meditation, and journaling prompts.",
    },
  ],
};

export const schedule = {
  heading: "Your Week at a Glance",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Welcome",
      description:
        "Settle into your room, meet your fellow guests over a welcome dinner, and set intentions for the week ahead.",
    },
    {
      day: "Day 2",
      title: "Grounding & Roots",
      description:
        "Morning vinyasa focused on grounding postures. Afternoon free to explore the local market or relax by the pool.",
    },
    {
      day: "Day 3",
      title: "Heart Opening",
      description:
        "Heart-centered flow in the morning. Afternoon visit to Monte Albán archaeological site with guided meditation at sunset.",
    },
    {
      day: "Day 4",
      title: "Deep Restoration",
      description:
        "Gentle yin practice and your scheduled bodywork session. Evening sound bath under the stars.",
    },
    {
      day: "Day 5",
      title: "Cultural Immersion",
      description:
        "Traditional Oaxacan cooking class in the morning. Mezcal distillery tour and tasting in the afternoon.",
    },
    {
      day: "Day 6",
      title: "Integration & Flow",
      description:
        "Dynamic flow practice to integrate the week's themes. Free afternoon for journaling, exploration, or rest.",
    },
    {
      day: "Day 7",
      title: "Closing & Departure",
      description:
        "Sunrise meditation and closing ceremony. Farewell brunch before departure transfers.",
    },
  ],
};

export const guide = {
  heading: "Your Guide",
  name: "Elena Reyes",
  credentials: "E-RYT 500 · Certified Yoga Therapist · Somatic Practitioner",
  bio: [
    "Elena has been guiding yoga retreats across Latin America for over a decade. Trained in both classical Hatha and trauma-informed somatic practices, she brings a warm, intuitive approach to every class and every conversation.",
    "Born and raised in Oaxaca, Elena weaves the healing wisdom of her ancestral traditions — from temazcal ceremonies to plant medicine — into a modern, accessible yoga practice. Her teaching style is compassionate, grounded, and deeply attuned to each student's unique journey.",
  ],
  image: "/images/guide.jpg",
  imageAlt: "Elena Reyes, yoga instructor",
};

export const testimonials = {
  heading: "What Past Guests Say",
  items: [
    {
      quote:
        "This retreat changed my relationship with my body. Elena's teaching is unlike anything I've experienced — deeply personal, yet universally healing.",
      name: "Sarah M.",
      location: "Portland, OR",
    },
    {
      quote:
        "The combination of yoga, incredible food, and Oaxacan culture was magical. I left feeling like a completely different person.",
      name: "James L.",
      location: "Austin, TX",
    },
    {
      quote:
        "I came for the yoga and stayed for the community. The connections I made during this week will last a lifetime. Already booked my return trip.",
      name: "Priya K.",
      location: "Toronto, Canada",
    },
  ],
};

export const pricing = {
  heading: "Investment in Yourself",
  subheading:
    "Choose the option that fits your journey. Both packages include all meals, yoga sessions, excursions, and bodywork.",
  options: [
    {
      name: "Early Bird",
      price: "$2,200",
      period: "per person",
      note: "Book by August 31, 2026",
      features: [
        "Shared room accommodation",
        "All meals & snacks",
        "14 yoga & meditation sessions",
        "1 bodywork session",
        "All cultural excursions",
        "Airport transfer included",
        "$200 savings",
      ],
      highlighted: true,
      cta: "Claim Early Bird Rate",
    },
    {
      name: "Standard",
      price: "$2,400",
      period: "per person",
      note: "Private room upgrade: +$400",
      features: [
        "Shared room accommodation",
        "All meals & snacks",
        "14 yoga & meditation sessions",
        "1 bodywork session",
        "All cultural excursions",
        "Airport transfer included",
      ],
      highlighted: false,
      cta: "Reserve Your Spot",
    },
  ],
};

export const faq = {
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "Do I need yoga experience to attend?",
      answer:
        "Not at all! This retreat welcomes all levels, from complete beginners to advanced practitioners. Elena tailors each session with modifications and progressions so everyone can practice at their own edge.",
    },
    {
      question: "What's the cancellation policy?",
      answer:
        "Full refund up to 60 days before the retreat. 50% refund between 30–60 days. Within 30 days, your deposit can be applied to a future retreat.",
    },
    {
      question: "Is travel to Oaxaca included?",
      answer:
        "Flights are not included, but we provide complimentary airport transfers from Oaxaca International Airport (OAX). We're happy to help with travel recommendations.",
    },
    {
      question: "What about dietary restrictions?",
      answer:
        "Our kitchen accommodates vegetarian, vegan, gluten-free, and most allergy-related needs. Just let us know when you book, and we'll make sure every meal works for you.",
    },
    {
      question: "What should I pack?",
      answer:
        "Comfortable yoga clothing, a reusable water bottle, sunscreen, a hat, and layers for cooler evenings. Yoga mats and props are provided. We'll send a detailed packing list upon booking.",
    },
    {
      question: "Is it safe for solo travelers?",
      answer:
        "Absolutely. Many of our guests come solo and leave with lifelong friends. Oaxaca is one of Mexico's most welcoming regions, and our property is in a secure, peaceful setting.",
    },
  ],
};

export const contact = {
  heading: "Ready to Begin?",
  subheading:
    "Have questions or ready to reserve your spot? Send us a message and we'll get back to you within 24 hours.",
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
};

export const footer = {
  text: `© ${new Date().getFullYear()} Alma y Tierra Retreat. All rights reserved.`,
  builtBy: "CodeByAaron",
  builtByUrl: "https://codebyaaron.com",
};
