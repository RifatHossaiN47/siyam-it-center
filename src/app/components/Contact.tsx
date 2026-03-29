"use client";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";
import { MessageCircle, User, MapPin, Clock, Phone } from "lucide-react";
import { toast } from "sonner";
import { services } from "../../data/services";

export function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      service: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = t("form.required");
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("form.required");
    }
    if (!formData.service) {
      newErrors.service = t("form.required");
    }
    if (!formData.message.trim()) {
      newErrors.message = t("form.required");
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t("form.requiredAll"));
      return;
    }

    // Build WhatsApp message
    const message = `Hello! I'm ${formData.name}
    
Phone: ${formData.phone}
Service Needed: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/8801581167284?text=${encodeURIComponent(message)}`;

    toast.success(t("form.success"));

    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: t("contact.whatsapp"),
      value: "01581167284",
      link: "https://wa.me/8801581167284",
    },
    {
      icon: User,
      label: t("contact.owner"),
      value: t("contact.ownerName"),
      link: null,
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.locationText"),
      link: null,
    },
    {
      icon: Clock,
      label: t("contact.hours"),
      value: t("contact.hoursText"),
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Diagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #fff 20px, #fff 40px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              {t("contact.title")}
            </h2>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F97316]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/30 transition-colors">
                      <Icon className="w-6 h-6 text-[#F97316]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {info.label}
                      </div>
                      <div className="text-white font-semibold">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t("form.name")} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-2 border-transparent focus:border-[#F97316] focus:outline-none transition-colors"
                  placeholder={t("form.name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t("form.phone")} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-2 border-transparent focus:border-[#F97316] focus:outline-none transition-colors"
                  placeholder={t("form.phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              {/* Service Select */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t("form.service")} *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-2 border-transparent focus:border-[#F97316] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="">{t("form.selectPlaceholder")}</option>
                  {services.map((service) => (
                    <option key={service.id} value={t(service.nameKey)}>
                      {t(service.nameKey)}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-400">{errors.service}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t("form.message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-2 border-transparent focus:border-[#F97316] focus:outline-none transition-colors resize-none"
                  placeholder={t("form.message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#ea6a0a] text-white rounded-lg font-bold shadow-lg shadow-[#F97316]/30 hover:shadow-xl hover:shadow-[#F97316]/50 transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Phone className="w-5 h-5" />
                {t("form.submit")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
