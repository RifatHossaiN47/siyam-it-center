"use client";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";
import {
  Zap,
  DollarSign,
  Users,
  Building2,
  MapPin,
  MessageCircle,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
}

export function WhyUs() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features: Feature[] = [
    {
      icon: Zap,
      titleKey: "why.fast.title",
      descKey: "why.fast.desc",
    },
    {
      icon: DollarSign,
      titleKey: "why.price.title",
      descKey: "why.price.desc",
    },
    {
      icon: Users,
      titleKey: "why.staff.title",
      descKey: "why.staff.desc",
    },
    {
      icon: Building2,
      titleKey: "why.govt.title",
      descKey: "why.govt.desc",
    },
    {
      icon: MapPin,
      titleKey: "why.location.title",
      descKey: "why.location.desc",
    },
    {
      icon: MessageCircle,
      titleKey: "why.support.title",
      descKey: "why.support.desc",
    },
  ];

  return (
    <section className="py-20 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] mb-4">
              {t("why.title")}
            </h2>
            <div className="w-24 h-1 bg-[#F97316] mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#F97316]/30"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                  {t(feature.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-[#64748B] leading-relaxed">
                  {t(feature.descKey)}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 w-12 h-1 bg-[#F97316]/30 rounded-full group-hover:w-20 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
