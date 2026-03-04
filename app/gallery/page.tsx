"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Masonry from "react-masonry-css";

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

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      alt: "Chocolate Truffle Cake",
      category: "Cakes",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
      alt: "Fresh Strawberry Pastry",
      category: "Pastries",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80",
      alt: "Red Velvet Cake",
      category: "Cakes",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
      alt: "Chocolate Chip Cookies",
      category: "Cookies",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
      alt: "Black Forest Cake",
      category: "Cakes",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
      alt: "Chocolate Éclair",
      category: "Pastries",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      alt: "Fresh Bread Loaf",
      category: "Breads",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80",
      alt: "Birthday Celebration Cake",
      category: "Custom Cakes",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1533134242820-b9d7c664e7c0?w=800&q=80",
      alt: "Blueberry Cheesecake",
      category: "Pastries",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
      alt: "Butter Croissants",
      category: "Breads",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&q=80",
      alt: "Theme Cake",
      category: "Custom Cakes",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      alt: "Tiramisu Pastry",
      category: "Pastries",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=800&q=80",
      alt: "Oatmeal Cookies",
      category: "Cookies",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1588195538326-c5acd1d81d7b?w=800&q=80",
      alt: "Vanilla Sponge Cake",
      category: "Cakes",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
      alt: "Fruit Tart",
      category: "Pastries",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&q=80",
      alt: "Anniversary Cake",
      category: "Custom Cakes",
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80",
      alt: "Butterscotch Cake",
      category: "Cakes",
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
      alt: "Chocolate Mousse",
      category: "Pastries",
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
      alt: "Butter Cookies",
      category: "Cookies",
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1573140401552-3a5686e1c8e5?w=800&q=80",
      alt: "Garlic Bread",
      category: "Breads",
    },
  ];

  const breakpointColumns = {
    default: 4,
    1280: 3,
    768: 2,
    640: 1,
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-warm-brown mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual feast of our freshly baked creations that bring joy to
            every celebration
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}>
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-6 w-auto"
            columnClassName="pl-6 bg-clip-padding">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="mb-6 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={index % 3 === 0 ? 500 : index % 2 === 0 ? 400 : 450}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {image.alt}
                      </h3>
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 bg-gradient-to-br from-warm-brown to-dark-brown text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Like What You See?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Visit us or order online to taste these delicious creations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/menu"
              className="bg-white text-warm-brown px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              View Menu
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-warm-brown transition-all duration-200 shadow-lg">
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .masonry-grid {
          display: flex;
          margin-left: -24px;
          width: auto;
        }
        .masonry-grid_column {
          padding-left: 24px;
          background-clip: padding-box;
        }
      `}</style>
    </div>
  );
}
