import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, category: 'equipment', emoji: '🏋️', title: 'Strength Zone' },
    { id: 2, category: 'cardio', emoji: '🏃', title: 'Cardio Area' },
    { id: 3, category: 'training', emoji: '💪', title: 'Training Session' },
    { id: 4, category: 'equipment', emoji: '⚡', title: 'Free Weights' },
    { id: 5, category: 'spa', emoji: '🧖', title: 'Recovery Suite' },
    { id: 6, category: 'training', emoji: '🥊', title: 'Boxing Ring' },
    { id: 7, category: 'cardio', emoji: '🚴', title: 'Cycling Studio' },
    { id: 8, category: 'spa', emoji: '💆', title: 'Massage Room' },
    { id: 9, category: 'equipment', emoji: '🎯', title: 'Functional Area' },
  ];

  const categories = ['all', 'equipment', 'cardio', 'training', 'spa'];

  const filteredImages =
    filter === 'all' ? images : images.filter((img) => img.category === filter);

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
            GALLERY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Explore our world-class facilities
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  filter === category
                    ? 'bg-white text-black'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setSelectedImage(image)}
                  className="glass rounded-2xl overflow-hidden cursor-pointer aspect-square flex items-center justify-center relative group"
                >
                  <div className="text-8xl">{image.emoji}</div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
                    <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-12 max-w-4xl w-full text-center"
            >
              <div className="text-9xl mb-6">{selectedImage.emoji}</div>
              <h3 className="text-4xl font-black mb-4">{selectedImage.title}</h3>
              <p className="text-gray-400 mb-8 capitalize">
                Category: {selectedImage.category}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="premium-btn bg-white text-black px-8 py-3 rounded-full font-bold"
              >
                CLOSE
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6">
              EXPERIENCE IT YOURSELF
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a free tour and see why Beast Fitness is different
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="premium-btn bg-white text-black px-12 py-4 rounded-full text-lg font-bold"
            >
              SCHEDULE TOUR
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
