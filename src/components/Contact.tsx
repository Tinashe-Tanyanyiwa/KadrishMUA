import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description:
          "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (475) 239-0569",
      link: "#",
    },
    {
      icon: Mail,
      title: "Email",
      value: "KBIZATI7@GMAIL.COM",
      link: "mailto:kbizati7@gmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@KADRISHYYMUA",
      link: "https://instagram.com/kadrishyymua",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Sat: 9AM-7PM",
      link: "#",
    },
  ];

  const services = [
    "Bridal Makeup",
    "Special Events",
    "Editorial/Photoshoot",
    "Everyday Makeup",
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-20 w-32 h-32 bg-white rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-white rounded-full blur-xl" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full blur-lg" />
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6">
            <span className="relative inline-block text-transparent">
              contact
              <span
                className="absolute inset-0 "
                style={{
                  WebkitTextStroke: "2px white",
                  left: "0.1em",
                }}
              >
                contact
              </span>
            </span>{" "}
            <span className="relative inline-block">contact</span>{" "}
            <span className="relative inline-block text-transparent">
              contact
              <span
                className="absolute inset-0 "
                style={{
                  WebkitTextStroke: "2px white",
                  left: "0.1em",
                }}
              >
                contact
              </span>
            </span>{" "}
          </h2>

          <p className="text-lg md:text-xl text-white/80 font-inter max-w-2xl mx-auto">
            Ready to transform your look? Get in touch to book your consultation
            and bring your beauty vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-subheading text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-inter font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-inter font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-inter font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-inter font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-inter font-medium mb-2">
                  Service Type *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <option value="" className="text-gray-800">
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="text-gray-800"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/80 font-inter font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your vision, event details, or any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary font-inter font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-subheading text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-white/80 font-inter leading-relaxed mb-8">
                I'd love to hear about your upcoming event or project. Whether
                you're planning a wedding, photoshoot, or special occasion,
                let's create something beautiful together.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group block"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white/80 text-sm">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="font-subheading text-white text-xl mb-4">
                Need Quick Help?
              </h4>
              <p className="text-white/80 font-inter mb-4">
                For urgent inquiries or last-minute bookings, reach out directly
                via Instagram DM for the fastest response.
              </p>
              <motion.a
                href="https://instagram.com/kadrishyymua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg font-inter font-medium hover:bg-white/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
                <span>Message on Instagram</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
