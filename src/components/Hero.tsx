import { motion } from "framer-motion";
import { useRef } from "react";
import heroImage1 from "@/assets/hero1.jpeg";
import heroImage2 from "@/assets/hero2.jpeg";
import heroImage3 from "@/assets/hero3.jpeg";
import heroImage4 from "@/assets/hero4.jpeg";
import heroImage5 from "@/assets/hero5.jpeg";
import heroImage6 from "@/assets/hero6.jpeg";
import heroImage7 from "@/assets/hero7.jpeg";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: heroImage1, alt: "Professional makeup artistry in action" },
    { src: heroImage2, alt: "Bold and beautiful makeup transformation" },
    { src: heroImage3, alt: "Elegant bridal makeup perfection" },
    { src: heroImage4, alt: "Glamorous editorial makeup look" },
    { src: heroImage5, alt: "Vibrant and colorful makeup artistry" },
    { src: heroImage6, alt: "Natural beauty enhancement with makeup" },
    { src: heroImage7, alt: "Creative and artistic makeup design" },
  ];

  const handleImageClick = (index: number) => {
    console.log(`Image ${index + 1} clicked`);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-teal-400 via-orange-500 to-yellow-300"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              BEAUTY
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 font-inter max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional makeup artistry that enhances your natural beauty and
            creates unforgettable looks for any occasion.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact">
              <motion.button
                className="px-8 py-3 bg-white text-primary font-inter font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
            </a>

            <a target="_blank" href="https://instagram.com/kadrishyymua">
              <motion.button
                className="px-8 py-3 border-2 border-white text-white font-inter font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Instagram
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Images */}
        <motion.div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => handleImageClick(index)}
            >
              <div className="w-80 h-48 md:w-96 md:h-60 rounded-2xl overflow-hidden shadow-large">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Interactive Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                initial={false}
              >
                <motion.div
                  className="text-white text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-inter font-medium text-sm mb-2">
                    View Details
                  </p>
                  <div className="w-8 h-0.5 bg-white mx-auto" />
                </motion.div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-inter font-medium text-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
              >
                {index === 0 ? "Makeup" : index === 1 ? "Makeup" : "Makeup"}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
