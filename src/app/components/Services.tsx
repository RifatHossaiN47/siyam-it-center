"use client";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";
import {
  FaPassport,
  FaGraduationCap,
  FaHotel,
  FaShieldAlt,
  FaIdCard,
  FaBriefcase,
  FaCamera,
  FaFileImage,
  FaCopy,
  FaFileInvoice,
  FaCertificate,
  FaCreditCard,
  FaFileAlt,
  FaPlane,
  FaBook,
  FaLaptopCode,
  FaBaby,
  FaCar,
  FaImage,
  FaEnvelope,
  FaPrint,
  FaLandmark,
  FaFileContract,
} from "react-icons/fa";
import { services } from "../../data/services";

const iconMap: Record<string, React.ElementType> = {
  FaPassport,
  FaGraduationCap,
  FaHotel,
  FaShieldAlt,
  FaIdCard,
  FaBriefcase,
  FaCamera,
  FaFileImage,
  FaCopy,
  FaFileInvoice,
  FaCertificate,
  FaCreditCard,
  FaFileAlt,
  FaPlane,
  FaBook,
  FaLaptopCode,
  FaBaby,
  FaCar,
  FaImage,
  FaEnvelope,
  FaPrint,
  FaLandmark,
  FaFileContract,
};

export function Services() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] mb-4">
              {t("services.title")}
            </h2>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6 rounded-full" />
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 transition-all duration-300 cursor-pointer"
              >
                {/* Orange Top Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F97316] rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-[#F97316]/10 rounded-full flex items-center justify-center group-hover:bg-[#F97316]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#F97316]" />
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="font-bold text-[#1E293B] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                  {t(service.nameKey)}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
