"use client";
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  FaPassport, 
  FaIdCard, 
  FaPrint, 
  FaCamera, 
  FaCreditCard, 
  FaPlane 
} from 'react-icons/fa';

export function Hero() {
  const { t } = useTranslation();

  const serviceIcons = [
    { Icon: FaPassport, delay: 0.1 },
    { Icon: FaIdCard, delay: 0.2 },
    { Icon: FaPrint, delay: 0.3 },
    { Icon: FaCamera, delay: 0.4 },
    { Icon: FaCreditCard, delay: 0.5 },
    { Icon: FaPlane, delay: 0.6 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stable random positions — generated once, not on every re-render
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${(i * 37 + 11) % 100}%`,
      top: `${(i * 53 + 7) % 100}%`,
      duration: 3 + (i % 5) * 0.5,
      delay: (i % 4) * 0.5,
    })), []
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[70px] overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/95 to-[#0F172A]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px),
                         repeating-linear-gradient(90deg, transparent, transparent 2px, #fff 2px, #fff 4px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating Particles */}
      {particles.map(({ id, left, top, duration, delay }) => (
        <motion.div
          key={id}
          className="absolute w-1 h-1 bg-white/30 rounded-full pointer-events-none"
          style={{ left, top }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-2 bg-[#F97316]/20 text-[#F97316] rounded-full text-sm font-semibold backdrop-blur-sm border border-[#F97316]/30">
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-[#F97316] text-white rounded-lg font-semibold hover:bg-[#ea6a0a] transition-all hover:shadow-lg hover:shadow-[#F97316]/50 hover:-translate-y-1 min-h-[48px]"
              >
                {t('hero.cta1')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all hover:shadow-lg hover:-translate-y-1 min-h-[48px]"
              >
                {t('hero.cta2')}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[t('hero.trust1'), t('hero.trust2'), t('hero.trust3')].map((trust, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <span className="text-sm">{trust}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - 40% Icon Grid */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {serviceIcons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: delay,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/40 hover:border-[#F97316] transition-all hover:shadow-xl hover:shadow-[#F97316]/30">
                    <Icon className="w-12 h-12 text-[#F97316] mx-auto drop-shadow-lg" />
                    
                    {/* Glow Effect - no negative z-index, appears above card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  </div>
                  
                  {/* Floating Animation */}
                  <motion.div
                    className="absolute inset-0 -z-20"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: delay,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}