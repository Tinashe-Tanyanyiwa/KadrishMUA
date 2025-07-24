import { motion } from 'framer-motion';
import { Instagram, Mail, Heart, ArrowUp } from 'lucide-react';
import logowhite from "@/../public/lovable-uploads/KadrishaMUAW.png"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/kadrishyymua',
      color: 'hover:text-pink-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kbizati7@gmail.com',
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Bridal Makeup',
    'Special Events',
    'Editorial/Photoshoot',
    'Makeup Lessons'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img 
                src={logowhite} 
                alt="Kadrisha MUA" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-300 font-inter leading-relaxed">
                Professional makeup artistry that enhances your natural beauty and creates unforgettable looks for any occasion.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:bg-white/20`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-subheading text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 font-inter hover:text-white transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-subheading text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 font-inter flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-subheading text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 font-inter text-sm mb-1">Email</p>
                <a 
                  href="mailto:kbizati7@gmail.com"
                  className="text-white font-inter hover:text-primary transition-colors duration-300"
                >
                  KBIZATI7@GMAIL.COM
                </a>
              </div>
              <div>
                <p className="text-gray-400 font-inter text-sm mb-1">Instagram</p>
                <a 
                  href="https://instagram.com/kadrishyymua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-inter hover:text-primary transition-colors duration-300"
                >
                  @KADRISHYYMUA
                </a>
              </div>
              <div>
                <p className="text-gray-400 font-inter text-sm mb-1">Hours</p>
                <p className="text-white font-inter">Mon-Sat: 9AM-7PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-subheading text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 font-inter mb-6 max-w-md mx-auto">
              Follow me on Instagram for the latest makeup looks, tips, and behind-the-scenes content.
            </p>
            <motion.a
              href="https://instagram.com/kadrishyymua"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-inter font-medium hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-gray-400 font-inter text-sm mb-4 md:mb-0">
            <span>© 2024 Kadrisha MUA. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for beauty</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-inter text-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-large flex items-center justify-center md:hidden z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;