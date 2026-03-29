"use client";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { services } from "../../data/services";

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { key: "home", label: t("nav.home"), id: "hero" },
    { key: "services", label: t("nav.services"), id: "services" },
    { key: "about", label: t("nav.about"), id: "about" },
    { key: "contact", label: t("nav.contact"), id: "contact" },
  ];

  const popularServices = services.slice(0, 6);

  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://facebook.com",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/8801581167284",
      label: "WhatsApp",
      color: "#25D366",
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-extrabold text-lg">SIYAM</span>
                <span className="text-[#F97316] font-extrabold text-xs -mt-1">
                  IT CENTER
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#F97316] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#F97316] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Popular Services */}
          <div>
            <h3 className="text-white font-bold mb-4">
              {t("footer.popularServices")}
            </h3>
            <ul className="space-y-2">
              {popularServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-[#F97316] transition-colors text-sm"
                  >
                    {t(service.nameKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-gray-500">{t("contact.whatsapp")}</span>
                <a
                  href="https://wa.me/8801581167284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F97316] transition-colors"
                >
                  01581167284
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-gray-500">{t("contact.owner")}</span>
                <span className="text-gray-300">{t("contact.ownerName")}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-gray-500">{t("contact.location")}</span>
                <span className="text-gray-300">
                  {t("contact.locationText")}
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-gray-500">{t("contact.hours")}</span>
                <span className="text-gray-300 text-xs">
                  {t("contact.hoursText")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>{t("footer.copyright")}</p>
            <p>{t("footer.developed")}</p>
          </div>
        </div>

        {/* Developer Info */}
        <div className="border-t border-gray-800/50 pt-6 mt-6">
          <p className="text-center text-xs text-gray-600">
            Developed by{" "}
            <span className="text-[#F97316] font-semibold">
              Md Rifat Hossen
            </span>{" "}
            • Email:{" "}
            <a
              href="mailto:rifat8851@gmail.com"
              className="text-gray-400 hover:text-[#F97316] transition-colors"
            >
              rifat8851@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
