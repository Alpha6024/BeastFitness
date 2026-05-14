import { motion } from 'framer-motion';

const Trainers = () => {
  const trainers = [
    {
      name: 'Marcus Steel',
      specialty: 'Strength & Conditioning',
      experience: '12 Years',
      certifications: ['NASM-CPT', 'CSCS', 'Olympic Lifting'],
      bio: 'Former powerlifting champion with a passion for building raw strength.',
      emoji: '💪',
    },
    {
      name: 'Sarah Phoenix',
      specialty: 'HIIT & Cardio',
      experience: '8 Years',
      certifications: ['ACE-CPT', 'HIIT Specialist', 'Nutrition Coach'],
      bio: 'High-energy trainer specializing in fat loss and endurance.',
      emoji: '🔥',
    },
    {
      name: 'David Thunder',
      specialty: 'Bodybuilding',
      experience: '15 Years',
      certifications: ['IFBB Pro', 'Sports Nutrition', 'Posing Coach'],
      bio: 'Professional bodybuilder helping clients achieve aesthetic perfection.',
      emoji: '⚡',
    },
    {
      name: 'Luna Storm',
      specialty: 'Yoga & Mobility',
      experience: '10 Years',
      certifications: ['RYT-500', 'Mobility Specialist', 'Meditation'],
      bio: 'Bringing balance and flexibility to your fitness journey.',
      emoji: '🧘',
    },
    {
      name: 'Rex Titan',
      specialty: 'CrossFit & Functional',
      experience: '9 Years',
      certifications: ['CF-L2', 'Gymnastics', 'Weightlifting'],
      bio: 'CrossFit athlete focused on functional strength and performance.',
      emoji: '🏋️',
    },
    {
      name: 'Aria Blaze',
      specialty: 'Boxing & MMA',
      experience: '11 Years',
      certifications: ['Boxing Coach', 'MMA Instructor', 'Self Defense'],
      bio: 'Former MMA fighter teaching combat sports and conditioning.',
      emoji: '🥊',
    },
  ];

  return (
    <div className="bg-black pt-32">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black gradient-text mb-6"
          >
            ELITE TRAINERS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            World-class experts dedicated to your transformation
          </motion.p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-7xl mb-6 text-center"
                >
                  {trainer.emoji}
                </motion.div>
                <h3 className="text-3xl font-black mb-2 text-center">{trainer.name}</h3>
                <p className="text-gray-400 text-center mb-4">{trainer.specialty}</p>
                <div className="border-t border-gray-800 pt-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="text-white font-bold">Experience:</span> {trainer.experience}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="text-white font-bold">Certifications:</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {trainer.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="text-xs bg-black px-3 py-1 rounded-full text-gray-400"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic mb-6">{trainer.bio}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="premium-btn w-full bg-white text-black py-3 rounded-full font-bold"
                >
                  BOOK SESSION
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6">
              READY TO START?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a free consultation with one of our expert trainers today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="premium-btn bg-white text-black px-12 py-4 rounded-full text-lg font-bold"
            >
              SCHEDULE CONSULTATION
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
