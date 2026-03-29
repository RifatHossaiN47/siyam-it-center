"use client";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";
import { Award, Shield } from "lucide-react";

export function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = () => {
    window.open("https://wa.me/8801581167284", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative border layers - DOM order places them behind the main card naturally */}
            <div className="absolute inset-0 rounded-3xl border-4 border-[#1E3A8A]/40 translate-x-3 translate-y-3" />
            <div className="absolute inset-0 rounded-3xl border-4 border-[#F97316]/50 translate-x-1.5 translate-y-1.5" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder Image with gradient overlay */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] flex items-center justify-center relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-[#F97316] rounded-full blur-3xl" />
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F97316] rounded-full blur-3xl" />
                </div>

                {/* Icon Grid */}
                <div className="relative z-10 grid grid-cols-3 gap-8">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20"
                    >
                      <div className="w-8 h-8 bg-[#F97316] rounded-lg" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div>
              <span className="inline-block px-4 py-2 bg-[#F97316]/10 text-[#F97316] rounded-full text-sm font-bold border border-[#F97316]/20">
                {t("about.badge")}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] leading-tight">
              {t("about.title")}
            </h2>

            {/* Description */}
            <p className="text-lg text-[#64748B] leading-relaxed">
              {t("about.description")}
            </p>

            {/* Highlight Pills */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#EFF6FF] rounded-full border border-[#1E3A8A]/20">
                <Award className="w-5 h-5 text-[#1E3A8A]" />
                <span className="text-sm font-semibold text-[#1E293B]">
                  {t("about.licensed")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#EFF6FF] rounded-full border border-[#1E3A8A]/20">
                <Shield className="w-5 h-5 text-[#1E3A8A]" />
                <span className="text-sm font-semibold text-[#1E293B]">
                  {t("about.trusted")}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={openWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#ea6a0a] text-white rounded-lg font-semibold shadow-lg shadow-[#F97316]/30 hover:shadow-xl hover:shadow-[#F97316]/50 transition-all min-h-[48px]"
            >
              {t("about.cta")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
