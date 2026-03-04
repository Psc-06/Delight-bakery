"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Address",
      content:
        "D 135, Jan Path Corner, Radha Vihar, Shyam Nagar, Jaipur, Rajasthan 302019",
      link: "https://maps.google.com/?q=D+135+Jan+Path+Corner+Radha+Vihar+Shyam+Nagar+Jaipur+302019",
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone",
      content: "+91 99283 70227",
      link: "tel:+919928370227",
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email",
      content: "info@delightbakery.com",
      link: "mailto:info@delightbakery.com",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Opening Hours",
      content: "Daily: 8:00 AM - 10:00 PM",
      link: null,
    },
  ];

  const openingHours = [
    { day: "Monday", hours: "8:00 AM - 10:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 10:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 10:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 10:00 PM" },
    { day: "Friday", hours: "8:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 10:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-warm-brown to-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-display font-bold mb-4">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl">
              We&apos;d love to hear from you
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Contact Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <div className="text-warm-brown flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="font-semibold text-lg text-warm-brown mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-warm-brown transition-colors"
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer">
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-600">{info.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-display font-bold text-warm-brown mb-6">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6">
                <p className="font-semibold">Thank you for your message!</p>
                <p>We&apos;ll get back to you soon.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your order or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-warm-brown text-white py-4 rounded-xl font-semibold hover:bg-dark-brown transition-colors duration-200 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-3">
                Or reach us directly via WhatsApp
              </p>
              <a
                href="https://wa.me/919928370227?text=Hi!%20I%20would%20like%20to%20place%20an%20order%20at%20Delight%20Bakery."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-200">
                <FaWhatsapp size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-display font-bold text-warm-brown mb-6">
              Opening Hours
            </h2>

            <div className="space-y-4 mb-8">
              {openingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                  <span className="font-medium text-gray-700">
                    {schedule.day}
                  </span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="bg-beige rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-lg text-warm-brown mb-3">
                Special Notes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-warm-brown mr-2">•</span>
                  <span>Open all days including holidays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-brown mr-2">•</span>
                  <span>
                    Custom cake orders require 24 hours advance notice
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-brown mr-2">•</span>
                  <span>Same-day delivery available within 5km radius</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-warm-brown to-dark-brown text-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">Need Custom Cake?</h3>
              <p className="mb-4 text-gray-200">
                Call us at least 24 hours in advance for custom designs
              </p>
              <a
                href="tel:+919928370227"
                className="inline-block bg-white text-warm-brown px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Call Now: +91 99283 70227
              </a>
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-display font-bold text-warm-brown mb-4">
              Find Us on Map
            </h2>
            <p className="text-gray-600 mb-6">
              D 135, Jan Path Corner, Radha Vihar, Shyam Nagar, Jaipur,
              Rajasthan 302019
            </p>
          </div>
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
          <div className="p-6 bg-beige">
            <p className="text-gray-700 text-center">
              <strong>Note:</strong> Click on the map for detailed directions or{" "}
              <a
                href="https://maps.google.com/?q=D+135+Jan+Path+Corner+Radha+Vihar+Shyam+Nagar+Jaipur+302019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-brown hover:underline font-semibold">
                open in Google Maps
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
