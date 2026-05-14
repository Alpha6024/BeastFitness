import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const storyRef = useRef(null);
  const timelineRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });

  const timeline = [
    { year: '2018', title: 'Foundation', desc: 'Beast Fitness was born' },
    { year: '2019', title: 'Expansion', desc: 'Opened 3 new locations' },
    { year: '2021', title: 'Innovation', desc: 'Launched digital training' },
    { year: '2024', title: 'Excellence', desc: '5000+ active members' },
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
            OUR STORY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Where luxury meets performance in an underground fitness revolution
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section ref={storyRef} className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-96 bg-gradient-to-br from-black to-zinc-800 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-9xl">
                🏆
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black gradient-text mb-6">
                REDEFINING FITNESS
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Beast Fitness was founded on a simple belief: fitness should be an experience, 
                not just a routine. We created an underground sanctuary where cutting-edge 
                technology meets raw determination.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our luxury facilities are designed to inspire, our trainers are certified 
                champions, and our community is built on mutual respect and relentless pursuit 
                of excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-12"
            >
              <h3 className="text-4xl font-black mb-6">MISSION</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To empower individuals to unleash their inner beast through world-class 
                training, premium facilities, and a community that pushes boundaries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-12"
            >
              <h3 className="text-4xl font-black mb-6">VISION</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the global standard for luxury fitness experiences, where every 
                member achieves transformational results in an inspiring environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-4">
              OUR JOURNEY
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-1 text-right pr-8">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </>
                  )}
                </div>
                <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                  {item.year}
                </div>
                <div className="flex-1 pl-8">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
