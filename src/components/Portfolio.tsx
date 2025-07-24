import { motion } from "framer-motion";
import { ExternalLink, Heart, Star } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpeg";
import portfolio2 from "@/assets/portfolio-2.jpeg";
import portfolio3 from "@/assets/portfolio-3.jpeg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: portfolio1,
      title: "Editorial Artistry",
      category: "Editorial",
      description: "Bold and creative makeup for fashion photography",
      featured: true,
    },
    {
      id: 2,
      image: portfolio2,
      title: "Glamour Evening",
      category: "Evening",
      description: "Sophisticated looks for special occasions",
      featured: false,
    },
    {
      id: 3,
      image: portfolio3,
      title: "Natural Beauty",
      category: "Everyday",
      description: "Fresh and radiant everyday makeup",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Triple Text Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6">
            <span className="relative inline-block">portfolio</span>{" "}
            <span className="relative inline-block text-transparent">
              portfolio
              <span
                className="absolute inset-0 "
                style={{
                  WebkitTextStroke: "2px hsl(var(--foreground))",
                  left: "0.1em",
                }}
              >
                portfolio
              </span>
            </span>{" "}
            <span className="relative inline-block">portfolio</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Discover my latest work showcasing diverse makeup artistry from
            natural everyday looks to bold editorial creations
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 ${
                item.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${
                  item.featured ? "h-96 lg:h-[500px]" : "h-80"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Featured Badge */}
                {item.featured && (
                  <motion.div
                    className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-inter font-medium flex items-center space-x-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <span>Featured</span>
                  </motion.div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-inter font-medium">
                  {item.category}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <motion.h3
                    className="text-xl md:text-2xl font-subheading mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-white/90 font-inter mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#contact">
                      <motion.button
                        className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-inter font-medium hover:bg-primary/90 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Contact Me</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </a>

                    <motion.button
                      className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-muted-foreground font-inter mb-6">
            Ready to create your perfect look?
          </p>
          <a
            href="https://wa.me/14752390569"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-8 py-4 bg-primary text-primary-foreground font-inter font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk directly with me
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
