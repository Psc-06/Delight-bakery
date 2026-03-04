"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaBirthdayCake,
  FaRing,
  FaPalette,
  FaArrowRight,
  FaPhone,
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
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80",
    "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProducts = [
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      price: "₹450",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
      description: "Rich chocolate cake layered with creamy ganache",
    },
    {
      id: 2,
      name: "Red Velvet Cake",
      price: "₹500",
      image:
        "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80",
      description: "Classic red velvet with cream cheese frosting",
    },
    {
      id: 3,
      name: "Blueberry Cheesecake",
      price: "₹480",
      image:
        "https://images.unsplash.com/photo-1533134242820-b9d7c664e7c0?w=500&q=80",
      description: "Creamy cheesecake with blueberry compote",
    },
    {
      id: 4,
      name: "Strawberry Pastry",
      price: "₹80",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
      description: "Fresh strawberries with whipped cream",
    },
  ];

  const occasions = [
    {
      id: 1,
      title: "Birthday Cakes",
      description:
        "Celebrate special moments with custom designed birthday cakes",
      icon: <FaBirthdayCake className="text-6xl" />,
      image:
        "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80",
    },
    {
      id: 2,
      title: "Anniversary Cakes",
      description: "Romantic cakes perfect for your anniversary celebrations",
      icon: <FaRing className="text-6xl" />,
      image:
        "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=600&q=80",
    },
    {
      id: 3,
      title: "Custom Cakes",
      description: "Design your dream cake for any special occasion",
      icon: <FaPalette className="text-6xl" />,
      image:
        "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80",
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: "Chocolate Chip Cookies",
      price: "₹120",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80",
    },
    {
      id: 2,
      name: "Butter Croissants",
      price: "₹80",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80",
    },
    {
      id: 3,
      name: "Assorted Pastries",
      price: "₹85",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80",
    },
    {
      id: 4,
      name: "Chocolate Brownies",
      price: "₹60",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing variety of cookies, pastries, breads & other bakery items!!!",
      date: "February 2026",
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 5,
      text: "Best bakery in Jaipur! Their cakes are always fresh and delicious.",
      date: "January 2026",
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 5,
      text: "The custom cake for my daughter&apos;s birthday was absolutely perfect!",
      date: "March 2026",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80",
    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500&q=80",
    "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80",
    "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  ];

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-light-beige to-pastel-pink/30 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-display font-bold text-warm-brown mb-6 leading-tight">
                Freshly Baked Happiness
                <br />
                <span className="text-dark-brown">in Jaipur</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-700 mb-4">
                Delicious cakes, pastries and cookies made fresh every day.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 mb-8">
                Perfect for birthdays, anniversaries and every celebration.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <Link
                  href="/menu"
                  className="bg-warm-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dark-brown transition-colors duration-200 shadow-xl flex items-center space-x-2">
                  <FaBirthdayCake />
                  <span>Order Cake</span>
                </Link>
                <Link
                  href="/menu"
                  className="bg-white text-warm-brown px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 border-2 border-warm-brown shadow-lg flex items-center space-x-2">
                  <span>View Menu</span>
                  <FaArrowRight />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 inline-block">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-xl" />
                  ))}
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <p className="text-2xl font-bold text-warm-brown">
                    4.4 Rating
                  </p>
                  <p className="text-gray-600">410 Reviews</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0">
                    <Image
                      src={heroSlides[currentSlide]}
                      alt="Bakery Products"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "bg-white w-8" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-warm-brown text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
              Featured Delights
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked favorites loved by our customers
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-dark-brown">
                      {product.price}
                    </span>
                    <button className="bg-warm-brown text-white px-6 py-2 rounded-full hover:bg-dark-brown transition-colors duration-200 text-sm font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center space-x-2 bg-warm-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dark-brown transition-colors duration-200 shadow-lg">
              <span>View Full Menu</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20 bg-gradient-to-br from-beige to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
              Cakes for Every Occasion
            </h2>
            <p className="text-xl text-gray-600">
              Making your special moments even more memorable
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {occasions.map((occasion) => (
              <motion.div
                key={occasion.id}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer">
                <div className="relative h-96">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="mb-4">
                      {occasion.icon}
                    </motion.div>
                    <h3 className="text-3xl font-display font-bold mb-3">
                      {occasion.title}
                    </h3>
                    <p className="text-center text-gray-200 mb-4">
                      {occasion.description}
                    </p>
                    <Link
                      href="/menu"
                      className="bg-white text-warm-brown px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Order Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
              Best Sellers
            </h2>
            <p className="text-xl text-gray-600">
              Customer favorites that keep coming back
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-warm-brown mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold text-dark-brown">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-warm-brown/10 to-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Rated 4.4 stars based on 410+ happy customers
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-warm-brown text-lg">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center space-x-2 bg-warm-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dark-brown transition-colors duration-200 shadow-lg">
              <span>Read All Reviews</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
              Our Creations
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our delicious world
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-warm-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dark-brown transition-colors duration-200 shadow-lg">
              <span>View Full Gallery</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-beige to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
              Visit Our Bakery
            </h2>
            <p className="text-xl text-gray-600">
              Come experience freshness in person
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="w-full h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973155903!2d75.65046695!3d26.88528435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"></iframe>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-lg">
                <FaMapMarkerAlt className="text-4xl text-warm-brown mb-4" />
                <h3 className="text-2xl font-semibold text-warm-brown mb-3">
                  Address
                </h3>
                <p className="text-gray-700 text-lg">
                  D 135, Jan Path Corner,
                  <br />
                  Radha Vihar, Shyam Nagar,
                  <br />
                  Jaipur, Rajasthan 302019
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-lg">
                <FaClock className="text-4xl text-warm-brown mb-4" />
                <h3 className="text-2xl font-semibold text-warm-brown mb-3">
                  Opening Hours
                </h3>
                <p className="text-gray-700 text-lg">
                  Open Daily
                  <br />
                  8:00 AM - 10:00 PM
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-lg">
                <FaPhone className="text-4xl text-warm-brown mb-4" />
                <h3 className="text-2xl font-semibold text-warm-brown mb-3">
                  Contact
                </h3>
                <a
                  href="tel:+919928370227"
                  className="text-gray-700 text-2xl font-bold hover:text-warm-brown transition-colors">
                  +91 99283 70227
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Order CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=80"
            alt="Bakery Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/95 to-dark-brown/95" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-display font-bold mb-6">
              Planning a Celebration?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-2xl mb-4">
              Order Your Cake Today!
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 text-gray-200">
              Custom designs | Fresh ingredients | Timely delivery
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/menu"
                className="bg-white text-warm-brown px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-2xl">
                Order Now
              </Link>
              <a
                href="tel:+919928370227"
                className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-warm-brown transition-all duration-200 shadow-2xl flex items-center space-x-2">
                <FaPhone />
                <span>Call Bakery</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
