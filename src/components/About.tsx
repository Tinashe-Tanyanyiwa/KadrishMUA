import { motion } from "framer-motion";
import { Instagram, Mail, Sparkles, Heart, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Heart, number: "200+", label: "Happy Clients" },
    {
      icon: Award,
      number: "Experience",
      label: "Works with actresses and celebrities",
    },
    { icon: Sparkles, number: "500+", label: "Makeup Looks" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-white rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Heading with Triple Text Effect */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
              {/* <span className="relative inline-block">about</span>{" "} */}
              <span className="relative inline-block text-transparent">
                about
                <span
                  className="absolute inset-0 "
                  style={{
                    WebkitTextStroke: "2px white",
                    left: "0.1em",
                  }}
                >
                  about
                </span>
              </span>{" "}
              <span className="relative inline-block">about</span>
              <span className="relative inline-block text-transparent">
                about
                <span
                  className="absolute inset-0 "
                  style={{
                    WebkitTextStroke: "2px white",
                    left: "0.1em",
                  }}
                >
                  about
                </span>
              </span>{" "}
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-subheading text-white/90 mb-8"
          >
            Artistry That Speaks
          </motion.h3>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg md:text-xl text-white/80 font-inter leading-relaxed mb-6">
              Hi my name is Kadrisha, I’m a makeup artist based out of New
              Haven, CT! I grew up with a big family that always had an event
              going on, so I fell in love with makeup from a very young age. I
              always knew I wanted to do it professionally from the moment I had
              a brush in my hand. I’m a self taught artist and still teach
              myself new tricks with the evolving world of makeup! I hope to
              work in tv/film one day doing hair/makeup on a set!!
            </p>
            <p className="text-lg md:text-xl text-white/80 font-inter leading-relaxed">
              I’ve loved movies and tv since I can remember, and I hope to be
              the person that inspires another wave of young talented future
              makeup artists out there!! No matter what event you need makeup
              for I’m the girl to call, from weddings to proms or even
              photoshoots. I can do any kind of makeup that you need for your
              special event or project!!
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-heading text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl md:text-2xl font-subheading text-white mb-6">
              Let's Connect
            </h4>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Instagram */}
              <motion.a
                href="https://instagram.com/kadrishyymua"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter font-medium">@KADRISHYYMUA</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:kbizati7@gmail.com"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter font-medium">
                  KBIZATI7@GMAIL.COM
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-12">
            <motion.button
              className="px-8 py-4 bg-white text-primary font-inter font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-large"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact">Book Your Session</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
