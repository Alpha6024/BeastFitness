import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { number: 5000, suffix: '+', label: 'Active Members' },
    { number: 50, suffix: '+', label: 'Expert Trainers' },
    { number: 15, suffix: 'K+', label: 'Success Stories' },
    { number: 24, suffix: '/7', label: 'Gym Access' },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const element = document.getElementById(`stat-${index}`);
        gsap.from(element, {
          textContent: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          onUpdate: function () {
            element.textContent = Math.ceil(this.targets()[0].textContent);
          },
        });
      });
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black gradient-text mb-4">
            BY THE NUMBERS
          </h2>
          <p className="text-gray-400 text-lg">Excellence in every metric</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                <span id={`stat-${index}`}>{stat.number}</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
