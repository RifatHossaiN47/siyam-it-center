"use client";
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'motion/react';
import { Award, Briefcase, Zap, MapPin } from 'lucide-react';

interface StatData {
  icon: React.ElementType;
  number: number;
  suffix: string;
  labelKey: string;
}

function CountUpNumber({ end, duration = 2, inView }: { end: number; duration?: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, duration, inView]);

  return <span>{count}</span>;
}

export function Stats() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats: StatData[] = [
    {
      icon: Award,
      number: 1000,
      suffix: '+',
      labelKey: 'stats.clients',
    },
    {
      icon: Briefcase,
      number: 25,
      suffix: '+',
      labelKey: 'stats.services',
    },
    {
      icon: Zap,
      number: 5,
      suffix: '+',
      labelKey: 'stats.experience',
    },
    {
      icon: MapPin,
      number: 1,
      suffix: '',
      labelKey: 'stats.center',
    },
  ];

  return (
    <section ref={ref} className="bg-[#0F172A] py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative group"
              >
                {/* Divider - Hide on mobile for last item, and last item in desktop */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-700" />
                )}

                <div className="space-y-3">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316]/20 rounded-full mb-2"
                  >
                    <Icon className="w-8 h-8 text-[#F97316]" />
                  </motion.div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-extrabold text-[#F97316]">
                    <CountUpNumber end={stat.number} inView={inView} />
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base text-gray-300 font-medium">
                    {t(stat.labelKey)}
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-[#F97316]/0 group-hover:bg-[#F97316]/5 rounded-lg transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}