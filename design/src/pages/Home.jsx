import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CinematicHero from '../components/CinematicHero';
import StatsSection from '../components/StatsSection';

const Home = () => {
  const aboutRef = useRef(null);
  const trainersRef = useRef(null);
  const membershipRef = useRef(null);
  const testimonialsRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const trainersInView = useInView(trainersRef, { once: true, amount: 0.3 });
  const membershipInView = useInView(membershipRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  const trainers = [
    { name: 'Marcus Steel', specialty: 'Strength & Conditioning', image: '💪' },
    { name: 'Sarah Phoenix', specialty: 'HIIT & Cardio', image: '🔥' },
    { name: 'David Thunder', specialty: 'Bodybuilding', image: '⚡' },
  ];

  const testimonials = [
    {
      name: 'John Anderson',
      text: 'Beast Fitness transformed my life. Lost 30kg in 6 months!',
      role: 'Member since 2023',
    },
    {
      name: 'Emma Wilson',
      text: 'The trainers are world-class. Best investment I ever made.',
      role: 'Premium Member',
    },
    {
      name: 'Mike Roberts',
      text: 'Incredible facilities and atmosphere. Truly premium experience.',
      role: 'Elite Member',
    },
  ];

  return (
    <div className="bg-black">
      {/* Cinematic Hero */}
      <CinematicHero />

      {/* Stats Section */}
      <StatsSection />

      {/* About Preview */}
      <section ref={aboutRef} className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6">
                UNDERGROUND LUXURY
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Step into a world where fitness meets luxury. Our underground facility 
                features state-of-the-art equipment, world-class trainers, and an 
                atmosphere designed to push you beyond your limits.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="premium-btn bg-white text-black px-10 py-4 rounded-full font-bold"
              >
                DISCOVER MORE
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-96 bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                🏋️
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainers Preview */}
      <section ref={trainersRef} className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={trainersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-4">
              ELITE TRAINERS
            </h2>
            <p className="text-gray-400 text-lg">Learn from the best in the industry</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={trainersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8 text-center cursor-pointer"
              >
                <div className="text-6xl mb-4">{trainer.image}</div>
                <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-gray-400">{trainer.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section ref={membershipRef} className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={membershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-4">
              MEMBERSHIP PLANS
            </h2>
            <p className="text-gray-400 text-lg">Choose your path to greatness</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['BASIC', 'PREMIUM', 'ELITE'].map((plan, index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                animate={membershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`glass rounded-2xl p-8 ${
                  index === 1 ? 'border-2 border-white' : ''
                }`}
              >
                <h3 className="text-3xl font-black mb-4">{plan}</h3>
                <div className="text-5xl font-black mb-6">
                  ${(index + 1) * 49}<span className="text-xl text-gray-400">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-400">
                  <li>✓ Gym Access</li>
                  <li>✓ {index + 1} Classes/Week</li>
                  <li>✓ {index === 2 ? 'Personal' : 'Group'} Training</li>
                  <li>✓ {index === 2 ? '24/7' : 'Limited'} Access</li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="premium-btn w-full bg-white text-black py-3 rounded-full font-bold"
                >
                  SELECT PLAN
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-4">
              SUCCESS STORIES
            </h2>
            <p className="text-gray-400 text-lg">Real results from real people</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl p-8"
              >
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
