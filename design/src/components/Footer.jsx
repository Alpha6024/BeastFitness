import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Trainers', path: '/trainers' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
    ],
    Membership: [
      { name: 'Plans & Pricing', path: '/membership' },
      { name: 'Student Discount', path: '/membership' },
      { name: 'Corporate Plans', path: '/membership' },
      { name: 'Free Trial', path: '/membership' },
    ],
    Support: [
      { name: 'FAQ', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'IG', url: '#' },
    { name: 'Facebook', icon: 'FB', url: '#' },
    { name: 'Twitter', icon: 'TW', url: '#' },
    { name: 'YouTube', icon: 'YT', url: '#' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-black mb-4"
            >
              BEAST<span className="text-gray-400">FITNESS</span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transform your body, elevate your mind. Join the elite underground fitness experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-900 pt-10 mb-10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get exclusive fitness tips and offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-zinc-900 border border-gray-800 rounded-full px-6 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="premium-btn bg-white text-black px-8 py-3 rounded-full font-bold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Beast Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
