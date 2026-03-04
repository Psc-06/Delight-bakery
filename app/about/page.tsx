"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHeart,
  FaLeaf,
  FaClock,
  FaAward,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Made with Love",
      description:
        "Every product is crafted with passion and dedication to bring you the best taste",
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Fresh Ingredients",
      description:
        "We use only premium, fresh ingredients sourced from trusted suppliers",
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Baked Daily",
      description:
        "Everything is baked fresh every morning to ensure maximum freshness",
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Quality Assured",
      description:
        "Maintaining highest quality standards in every product we create",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Customer First",
      description: "Your satisfaction and happiness is our ultimate goal",
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: "Premium Experience",
      description:
        "Creating memorable experiences with exceptional bakery products",
    },
  ];

  const stats = [
    { number: "410+", label: "Happy Customers" },
    { number: "4.4", label: "Star Rating" },
    { number: "1000+", label: "Products Daily" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-warm-brown to-dark-brown text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&q=80"
            alt="Bakery"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-display font-bold mb-6">
              About Delight Bakery
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-3xl mx-auto">
              Spreading happiness one bite at a time in the heart of Jaipur
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-6">
                Our Story
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-4">
                Delight Bakery was born from a simple passion: to bring joy
                through exceptional baked goods. Located in Shyam Nagar, Jaipur,
                we&apos;ve become a beloved destination for cake lovers, pastry
                enthusiasts, and everyone who appreciates the art of fine
                baking.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-4">
                What started as a small neighborhood bakery has grown into a
                trusted name for celebrations and everyday indulgences. Our
                master bakers combine traditional techniques with innovative
                flavors to create products that not only taste amazing but also
                look spectacular.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6">
                We believe that quality cannot be compromised. That&apos;s why
                we source the finest ingredients, maintain strict hygiene
                standards, and ensure everything is baked fresh daily. From
                custom celebration cakes to your morning croissant, we treat
                every order with the same care and dedication.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="bg-beige p-6 rounded-xl border-l-4 border-warm-brown">
                <p className="text-gray-700 italic text-lg">
                  &ldquo;Our mission is simple: to create memorable moments
                  through exceptional baked goods that bring smiles to faces and
                  warmth to hearts.&rdquo;
                </p>
                <p className="text-warm-brown font-semibold mt-3">
                  - Delight Bakery Team
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500&q=80"
                  alt="Bakery Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&q=80"
                  alt="Fresh Baking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg -mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&q=80"
                  alt="Cakes Display"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=500&q=80"
                  alt="Pastries"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-warm-brown to-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-warm-brown mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-warm-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-8">
              Our Fresh Baking Philosophy
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-6">
              We believe that the secret to exceptional baked goods lies in
              three things: quality ingredients, time-honored techniques, and
              genuine passion. Our bakers arrive before sunrise to begin the
              daily ritual of creating fresh delights.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-6">
              Every loaf of bread, every pastry, and every cake is made from
              scratch using traditional methods that have been perfected over
              generations. We don&apos;t take shortcuts, and we never compromise
              on quality.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-8">
              When you choose Delight Bakery, you&apos;re not just buying baked
              goods—you&apos;re experiencing the culmination of our dedication,
              expertise, and love for the craft. We&apos;re honored to be part
              of your celebrations and everyday moments.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href="/contact"
                className="inline-block bg-warm-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dark-brown transition-colors duration-200 shadow-lg">
                Visit Our Bakery
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
