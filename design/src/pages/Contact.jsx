import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            CONTACT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Get in touch with our team
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black mb-8">SEND MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-black border border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-black border border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full bg-black border border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full bg-black border border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="premium-btn w-full bg-white text-black py-4 rounded-full font-bold text-lg"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-black mb-8">GET IN TOUCH</h2>
                <div className="space-y-6">
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">📍 Location</h3>
                    <p className="text-gray-400">
                      123 Underground Street
                      <br />
                      Downtown District, City 12345
                    </p>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">📞 Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">✉️ Email</h3>
                    <p className="text-gray-400">info@beastfitness.com</p>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">🕐 Hours</h3>
                    <p className="text-gray-400">
                      Mon-Fri: 5:00 AM - 12:00 AM
                      <br />
                      Sat-Sun: 6:00 AM - 10:00 PM
                      <br />
                      <span className="text-white font-bold">Elite Members: 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-400">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-2">
                (Google Maps integration would go here)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-8">
              FOLLOW US
            </h2>
            <div className="flex justify-center space-x-6">
              {[
                { name: 'Instagram', icon: 'IG' },
                { name: 'Facebook', icon: 'FB' },
                { name: 'Twitter', icon: 'TW' },
                { name: 'YouTube', icon: 'YT' },
                { name: 'TikTok', icon: 'TT' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-black text-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
