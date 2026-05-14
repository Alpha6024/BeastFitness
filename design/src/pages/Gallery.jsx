import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { 
      id: 1, 
      category: 'equipment', 
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      title: 'Strength Zone' 
    },
    { 
      id: 2, 
      category: 'cardio', 
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
      title: 'Cardio Area' 
    },
    { 
      id: 3, 
      category: 'training', 
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      title: 'Training Session' 
    },
    { 
      id: 4, 
      category: 'equipment', 
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
      title: 'Free Weights' 
    },
    { 
      id: 5, 
      category: 'spa', 
      url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      title: 'Recovery Suite' 
    },
    { 
      id: 6, 
      category: 'training', 
      url: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      title: 'Boxing Ring' 
    },
    { 
      id: 7, 
      category: 'cardio', 
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
      title: 'Cycling Studio' 
    },
    { 
      id: 8, 
      category: 'spa', 
      url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
      title: 'Massage Room' 
    },
    { 
      id: 9, 
      category: 'equipment', 
      url: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&q=80',
      title: 'Functional Area' 
    },
    { 
      id: 10, 
      category: 'training', 
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      title: 'Group Training' 
    },
    { 
      id: 11, 
      category: 'equipment', 
      url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80',
      title: 'Dumbbell Rack' 
    },
    { 
      id: 12, 
      category: 'cardio', 
      url: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80',
      title: 'Treadmill Zone' 
    },
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
                  className="glass rounded-2xl overflow-hidden cursor-pointer aspect-square relative group"
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                    <p className="text-white text-xl font-bold">
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
              className="relative max-w-5xl w-full"
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 rounded-b-2xl">
                <h3 className="text-4xl font-black text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 capitalize">
                  Category: {selectedImage.category}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl"
              >
                ✕
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
