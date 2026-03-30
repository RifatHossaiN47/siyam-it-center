"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About Us",
      "nav.contact": "Contact",

      // Hero Section
      "hero.badge": "📍 Narayanganj, Bangladesh",
      "hero.title": "Your One-Stop Digital Service Center",
      "hero.subtitle":
        "From visa processing to passport, trade license to air tickets — we handle everything for you.",
      "hero.cta1": "Explore Services →",
      "hero.cta2": "📞 Contact Us",
      "hero.trust1": "✅ Fast Service",
      "hero.trust2": "✅ Trusted by 1000+ Clients",
      "hero.trust3": "✅ All Govt. Services",

      // Stats Section
      "stats.clients": "Happy Clients",
      "stats.services": "Services Offered",
      "stats.experience": "Years Experience",
      "stats.center": "Trusted Local Center",

      // Services Section
      "services.title": "Our Services",
      "services.subtitle":
        "We provide all government and digital services under one roof",

      // Service Names
      "service.visa": "Visa Application",
      "service.hotel": "Hotel Booking",
      "service.police": "Police Clearance",
      "service.nid": "NID Services",
      "service.job": "Job Application",
      "service.studio": "Studio / Photography",
      "service.scanning": "Scanning",
      "service.photocopy": "Photocopy",
      "service.etin": "E-TIN Certificate",
      "service.trade": "Trade License",
      "service.plastic": "Plastic ID Card",
      "service.term": "Term Paper / Assignment",
      "service.ticket": "Air Ticket",
      "service.passport": "Passport",
      "service.bmit": "BM IT Registration",
      "service.birth": "Birth Registration",
      "service.license": "Driving License",
      "service.photo": "Photo Printing",
      "service.email": "Email Services",
      "service.printing": "Color & B/W Printing",
      "service.land": "Land Tax",
      "service.gd": "Online GD",
      "service.ribbon": "Digital Ribbon / Certificate Work",

      // Why Choose Us
      "why.title": "Why Choose Siyam IT Center?",
      "why.fast.title": "Fast & Reliable Service",
      "why.fast.desc": "Quick turnaround time on all services",
      "why.price.title": "Affordable Pricing",
      "why.price.desc": "Competitive rates for all services",
      "why.staff.title": "Expert & Friendly Staff",
      "why.staff.desc": "Professional assistance at every step",
      "why.govt.title": "All Govt. Services Available",
      "why.govt.desc": "Complete government service solutions",
      "why.location.title": "Conveniently Located in Narayanganj",
      "why.location.desc": "Easy to reach and accessible",
      "why.support.title": "Easy WhatsApp Support",
      "why.support.desc": "Get help instantly via WhatsApp",

      // About Section
      "about.badge": "About Us",
      "about.title": "Meet Sabbir Ahmed — Your Trusted Service Partner",
      "about.description":
        "Siyam IT Center has been serving the people of Narayanganj with fast, affordable, and reliable digital and government services. Led by Sabbir Ahmed, our center is committed to making every service easy and accessible for everyone.",
      "about.licensed": "📋 Licensed Center",
      "about.trusted": "🤝 Trusted Since Day One",
      "about.cta": "Contact Sabbir →",

      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle":
        "Send us a message on WhatsApp and we'll get back to you instantly",
      "contact.whatsapp": "WhatsApp",
      "contact.owner": "Owner",
      "contact.location": "Location",
      "contact.hours": "Hours",
      "contact.ownerName": "Sabbir Ahmed",
      "contact.locationText": "Narayanganj, Bangladesh",
      "contact.hoursText": "Saturday–Thursday, 9 AM – 9 PM",

      // Contact Form
      "form.name": "Name",
      "form.phone": "Phone Number",
      "form.service": "Select Service",
      "form.message": "Message",
      "form.submit": "📲 Send Message on WhatsApp",
      "form.selectPlaceholder": "Choose a service...",
      "form.required": "This field is required",
      "form.requiredAll": "Please fill in all required fields",
      "form.success": "Redirecting to WhatsApp...",

      // Footer
      "footer.tagline": "Your Trusted Digital Service Partner in Narayanganj",
      "footer.quickLinks": "Quick Links",
      "footer.popularServices": "Popular Services",
      "footer.contactInfo": "Contact Info",
      "footer.copyright": "© 2026 Siyam IT Center. All Rights Reserved.",
      "footer.developed":
        "Your trusted partner in digital services from Bangladesh",
    },
  },
  bn: {
    translation: {
      // Navbar
      "nav.home": "হোম",
      "nav.services": "সেবাসমূহ",
      "nav.about": "আমাদের সম্পর্কে",
      "nav.contact": "যোগাযোগ",

      // Hero Section
      "hero.badge": "📍 নারায়ণগঞ্জ, বাংলাদেশ",
      "hero.title": "আপনার সকল ডিজিটাল সেবার কেন্দ্র",
      "hero.subtitle":
        "ভিসা প্রসেসিং থেকে পাসপোর্ট, ট্রেড লাইসেন্স থেকে বিমান টিকেট — আমরা সবকিছুই করি আপনার জন্য।",
      "hero.cta1": "সেবা দেখুন →",
      "hero.cta2": "📞 যোগাযোগ করুন",
      "hero.trust1": "✅ দ্রুত সেবা",
      "hero.trust2": "✅ ১০০০+ গ্রাহকের বিশ্বাস",
      "hero.trust3": "✅ সকল সরকারি সেবা",

      // Stats Section
      "stats.clients": "সন্তুষ্ট গ্রাহক",
      "stats.services": "সেবা প্রদান করা হয়",
      "stats.experience": "বছরের অভিজ্ঞতা",
      "stats.center": "বিশ্বাস্ত স্থানীয় কেন্দ্র",

      // Services Section
      "services.title": "আমাদের সেবাসমূহ",
      "services.subtitle":
        "আমরা একটি ছাদের নিচে সমস্ত সরকারি ও ডিজিটাল সেবা প্রদান করি",

      // Service Names
      "service.visa": "ভিসা আবেদন",
      "service.hotel": "হোটেল বুকিং",
      "service.police": "পুলিশ ক্লিয়ারেন্স",
      "service.nid": "জাতীয় পরিচয়পত্র সেবা",
      "service.job": "চাকরি আবেদন",
      "service.studio": "স্টুডিও / ফটোগ্রাফি",
      "service.scanning": "স্ক্যানিং",
      "service.photocopy": "ফটোকপি",
      "service.etin": "ই-টিআইএন সার্টিফিকেট",
      "service.trade": "ট্রেড লাইসেন্স",
      "service.plastic": "প্লাস্টিক আইডি কার্ড",
      "service.term": "টার্ম পেপার / অ্যাসাইনমেন্ট",
      "service.ticket": "বিমান টিকেট",
      "service.passport": "পাসপোর্ট",
      "service.bmit": "বিএম আইটি রেজিস্ট্রেশন",
      "service.birth": "জন্ম নিবন্ধন",
      "service.license": "ড্রাইভিং লাইসেন্স",
      "service.photo": "ছবি থেকে ছবি",
      "service.email": "ই-মেইল সেবা",
      "service.printing": "রঙিন ও সাদা-কালো প্রিন্টিং",
      "service.land": "ভূমির খাজনা",
      "service.gd": "অনলাইন জিডি",
      "service.ribbon": "ডিজিটাল রিবন / মাথাকর্ম প্রতিবেদন",

      // Why Choose Us
      "why.title": "কেন সিয়াম আইটি সেন্টার বেছে নিবেন?",
      "why.fast.title": "দ্রুত ও নির্ভরযোগ্য সেবা",
      "why.fast.desc": "সকল সেবায় দ্রুত সময়সীমা",
      "why.price.title": "সাশ্রয়ী মূল্য",
      "why.price.desc": "সকল সেবায় প্রতিযোগিতামূলক মূল্য",
      "why.staff.title": "দক্ষ ও বন্ধুত্বপূর্ণ কর্মী",
      "why.staff.desc": "প্রতিটি পদক্ষেপে পেশাদার সহায়তা",
      "why.govt.title": "সকল সরকারি সেবা উপলব্ধ",
      "why.govt.desc": "সম্পূর্ণ সরকারি সেবা সমাধান",
      "why.location.title": "নারায়ণগঞ্জে সুবিধাজনক অবস্থান",
      "why.location.desc": "সহজে পৌঁছানো যায় এবং প্রবেশযোগ্য",
      "why.support.title": "সহজ হোয়াটসঅ্যাপ সহায়তা",
      "why.support.desc": "হোয়াটসঅ্যাপের মাধ্যমে তাৎক্ষণিক সহায়তা পান",

      // About Section
      "about.badge": "আমাদের সম্পর্কে",
      "about.title":
        "সাব্বির আহমেদের সাথে পরিচিত হন — আপনার বিশ্বাস্ত সেবা অংশীদার",
      "about.description":
        "সিয়াম আইটি সেন্টার দ্রুত, সাশ্রয়ী এবং নির্ভরযোগ্য ডিজিটাল এবং সরকারি সেবা দিয়ে নারায়ণগঞ্জের মানুষকে সেবা প্রদান করে আসছে। সাব্বির আহমেদের নেতৃত্বে, আমাদের কেন্দ্র প্রতিটি সেবাকে সহজ এবং সবার জন্য সহজলভ্য করতে প্রতিশ্রুতিবদ্ধ।",
      "about.licensed": "📋 লাইসেন্সকৃত কেন্দ্র",
      "about.trusted": "🤝 প্রথম দিন থেকেই বিশ্বাস্ত",
      "about.cta": "সাব্বিরের সাথে যোগাযোগ করুন →",

      // Contact Section
      "contact.title": "যোগাযোগ করুন",
      "contact.subtitle":
        "হোয়াটসঅ্যাপে আমাদের একটি বার্তা পাঠান এবং আমরা তাৎক্ষণিক উত্তর দেব",
      "contact.whatsapp": "হোয়াটসঅ্যাপ",
      "contact.owner": "মালিক",
      "contact.location": "ঠিকানা",
      "contact.hours": "সময়",
      "contact.ownerName": "সাব্বির আহমেদ",
      "contact.locationText": "নারায়ণগঞ্জ, বাংলাদেশ",
      "contact.hoursText": "শনিবার-বৃহস্পতিবার, সকাল ৯টা – রাত ৯টা",

      // Contact Form
      "form.name": "নাম",
      "form.phone": "ফোন নম্বর",
      "form.service": "সেবা নির্বাচন করুন",
      "form.message": "বার্তা",
      "form.submit": "📲 হোয়াটসঅ্যাপে বার্তা পাঠান",
      "form.selectPlaceholder": "একটি সেবা নির্বাচন করুন...",
      "form.required": "এই ক্ষেত্রটি প্রয়োজনীয়",
      "form.requiredAll": "অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য পূরণ করুন",
      "form.success": "হোয়াটসঅ্যাপে রিডাইরেক্ট করা হচ্ছে...",

      // Footer
      "footer.tagline": "নারায়ণগঞ্জে আপনার বিশ্বাস্ত ডিজিটাল সেবা অংশীদার",
      "footer.quickLinks": "দ্রুত লিংক",
      "footer.popularServices": "জনপ্রিয় সেবা",
      "footer.contactInfo": "যোগাযোগের তথ্য",
      "footer.copyright": "© ২০২৬ সিয়াম আইটি সেন্টার। সর্বস্বত্ব সংরক্ষিত।",
      "footer.developed": "বাংলাদেশ থেকে ডিজিটাল সেবায় আপনার বিশ্বস্ত সঙ্গী",
    },
  },
};

// Get language from localStorage or default to 'en'
const savedLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("language") || "en"
    : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
