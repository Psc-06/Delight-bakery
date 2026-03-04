"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "February 28, 2026",
      review:
        "Best bakery in Jaipur! Their cakes are always fresh and delicious. I ordered a custom birthday cake for my daughter and it exceeded all expectations. The design was perfect and everyone loved the taste. Will definitely order again!",
      avatar: null,
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 5,
      date: "February 25, 2026",
      review:
        "Amazing quality and taste. The custom cake for my daughter's birthday was absolutely perfect! The team understood exactly what I wanted and delivered beyond expectations. Highly recommended for celebrations.",
      avatar: null,
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 4,
      date: "March 02, 2026",
      review:
        "Love their pastries! Fresh every time I visit. The location is convenient in Shyam Nagar and the staff is very friendly and helpful. The strawberry pastries are my favorite!",
      avatar: null,
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 5,
      date: "February 20, 2026",
      review:
        "Excellent bakery with a great variety of products. Their chocolate truffle cake is to die for! The quality is consistently good and prices are reasonable. This is now my go-to place for all celebrations.",
      avatar: null,
    },
    {
      id: 5,
      name: "Neha Gupta",
      rating: 5,
      date: "February 18, 2026",
      review:
        "I ordered a wedding cake from Delight Bakery and it was stunning! Not only did it look beautiful, but it tasted incredible too. All my guests were asking where I got it from. Thank you for making our special day even more memorable!",
      avatar: null,
    },
    {
      id: 6,
      name: "Amit Kumar",
      rating: 4,
      date: "February 15, 2026",
      review:
        "Great place for fresh baked goods. I stop by every morning for their croissants and bread. Everything is fresh and delicious. The staff is friendly and service is quick.",
      avatar: null,
    },
    {
      id: 7,
      name: "Sonia Mehta",
      rating: 5,
      date: "February 12, 2026",
      review:
        "The best red velvet cake I've ever had! Ordered it for my anniversary and it was perfect. The cream cheese frosting was heavenly. Will definitely be a regular customer!",
      avatar: null,
    },
    {
      id: 8,
      name: "Rajesh Agarwal",
      rating: 5,
      date: "February 10, 2026",
      review:
        "Outstanding bakery! The custom photo cake for my parents' anniversary was beautiful and delicious. The whole family loved it. Great service and reasonable prices too.",
      avatar: null,
    },
    {
      id: 9,
      name: "Kavita Jain",
      rating: 4,
      date: "February 08, 2026",
      review:
        "Very good bakery with quality products. Their cookies are amazing - especially the chocolate chip ones. My kids love them! Will continue to shop here.",
      avatar: null,
    },
    {
      id: 10,
      name: "Suresh Bansal",
      rating: 5,
      date: "February 05, 2026",
      review:
        "Fantastic bakery in Shyam Nagar! The black forest cake is incredible. Fresh, tasty, and beautifully decorated. Ordered multiple times and never disappointed. Highly recommend!",
      avatar: null,
    },
    {
      id: 11,
      name: "Pooja Sharma",
      rating: 5,
      date: "January 30, 2026",
      review:
        "Love this place! The pastries are always fresh and the variety is great. The tiramisu is my absolute favorite. Staff is courteous and helpful with suggestions.",
      avatar: null,
    },
    {
      id: 12,
      name: "Manish Goel",
      rating: 4,
      date: "January 28, 2026",
      review:
        "Good bakery with fresh products daily. Their breads are excellent and prices are fair. Has become our family's regular bakery for all occasions.",
      avatar: null,
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 320, percentage: 78 },
    { stars: 4, count: 70, percentage: 17 },
    { stars: 3, count: 15, percentage: 4 },
    { stars: 2, count: 3, percentage: 1 },
    { stars: 1, count: 2, percentage: 0 },
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
              Customer Reviews
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl">
              What our happy customers say about us
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Rating Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Overall Rating */}
            <div className="text-center md:border-r border-gray-200">
              <div className="text-7xl font-display font-bold text-warm-brown mb-2">
                4.4
              </div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-2xl ${i < 4 ? "text-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-lg">Based on 410 reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-3">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-gray-700 font-medium">
                      {item.stars}
                    </span>
                    <FaStar className="text-yellow-500 text-sm" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-yellow-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-gray-600 w-12 text-sm">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FaUserCircle className="text-4xl text-warm-brown" />
                  <div>
                    <h3 className="font-semibold text-lg text-warm-brown">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-2xl text-pastel-pink opacity-50" />
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 bg-gradient-to-br from-warm-brown to-dark-brown text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join our 410+ happy customers and taste the difference!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/menu"
              className="bg-white text-warm-brown px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Order Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-warm-brown transition-all duration-200 shadow-lg">
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
