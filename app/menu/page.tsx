"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaShoppingCart,
  FaSearch,
  FaTimes,
  FaLeaf,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const slideInRight = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

// Product interface
interface Product {
  id: number;
  name: string;
  weight?: string;
  category: string;
  price: number;
  veg: boolean;
  description: string;
  image: string;
}

// Cart item interface
interface CartItem extends Product {
  quantity: number;
}

// All categories - moved outside component to avoid unnecessary re-renders
const categories = [
  "All",
  "Cakes (400gm)",
  "Cakes (250gm)",
  "Bento Cakes",
  "Patties",
  "Snacks",
  "Pastry",
  "Biscuits (250gm)",
  "Rusk",
  "Khari",
  "Breads",
  "Cream Roll",
  "Chocolate",
];

// All products data - moved outside component to avoid unnecessary re-renders
const allProducts: Product[] = [
  // Cakes (400gm)
  {
    id: 1,
    name: "Truffle Chocolate Cake",
    weight: "450gm",
    category: "Cakes (400gm)",
    price: 650,
    veg: true,
    description: "Rich chocolate cake layered with creamy truffle ganache.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 2,
    name: "White Forest Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 600,
    veg: true,
    description: "Classic white chocolate cake with fresh cream.",
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80",
  },
  {
    id: 3,
    name: "Oreo Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 580,
    veg: true,
    description: "Delicious Oreo cookie cake with cream filling.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  },
  {
    id: 4,
    name: "Rich Pineapple Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 630,
    veg: true,
    description: "Premium pineapple cake with rich cream layers.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 5,
    name: "Heart Shape Chocolate Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 570,
    veg: true,
    description: "Romantic heart-shaped chocolate cake.",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500&q=80",
  },
  {
    id: 6,
    name: "Chocolate Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 550,
    veg: true,
    description: "Classic chocolate cake with smooth frosting.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 7,
    name: "Doll Pineapple Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 520,
    veg: true,
    description: "Adorable doll-shaped pineapple cake.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 8,
    name: "Heart Shape Pineapple Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 520,
    veg: true,
    description: "Heart-shaped pineapple cake for special occasions.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 9,
    name: "Black Forest Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 500,
    veg: true,
    description: "Cherry-topped chocolate cake with whipped cream.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  },
  {
    id: 10,
    name: "Pineapple Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 480,
    veg: true,
    description: "Fresh pineapple chunks with vanilla cream.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 11,
    name: "Butterscotch Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 520,
    veg: true,
    description: "Sweet butterscotch with crunchy praline.",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500&q=80",
  },
  {
    id: 12,
    name: "Pista Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 550,
    veg: true,
    description: "Rich pistachio flavored cake.",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5acd1d81d7b?w=500&q=80",
  },
  {
    id: 13,
    name: "American Nuts Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 550,
    veg: true,
    description: "Loaded with premium American nuts.",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5acd1d81d7b?w=500&q=80",
  },
  {
    id: 14,
    name: "Cassata Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 550,
    veg: true,
    description: "Italian-style ice cream cake.",
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80",
  },
  {
    id: 15,
    name: "Belgian Chocolate Cake",
    weight: "450gm",
    category: "Cakes (400gm)",
    price: 720,
    veg: true,
    description: "Premium Belgian chocolate cake.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 16,
    name: "Panda Pineapple Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 520,
    veg: true,
    description: "Cute panda-themed pineapple cake.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 17,
    name: "Blueberry Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 650,
    veg: true,
    description: "Fresh blueberry cake with cream.",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5acd1d81d7b?w=500&q=80",
  },
  {
    id: 18,
    name: "Heart Shape Black Forest Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 550,
    veg: true,
    description: "Heart-shaped Black Forest delight.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  },
  {
    id: 19,
    name: "Fresh Fruit Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 620,
    veg: true,
    description: "Loaded with fresh seasonal fruits.",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5acd1d81d7b?w=500&q=80",
  },
  {
    id: 20,
    name: "Choco Chip Cake",
    weight: "400gm",
    category: "Cakes (400gm)",
    price: 620,
    veg: true,
    description: "Chocolate chip studded vanilla cake.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },

  // Cakes (250gm)
  {
    id: 21,
    name: "Lotus Biscoff Cake",
    weight: "250gm",
    category: "Cakes (250gm)",
    price: 470,
    veg: true,
    description: "Premium Lotus Biscoff flavored cake.",
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80",
  },
  {
    id: 22,
    name: "Chocolate Cake",
    weight: "250gm",
    category: "Cakes (250gm)",
    price: 425,
    veg: true,
    description: "Classic chocolate cake in smaller size.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 23,
    name: "Pineapple Cake",
    weight: "250gm",
    category: "Cakes (250gm)",
    price: 370,
    veg: true,
    description: "Fresh pineapple cake perfect for small gatherings.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 24,
    name: "Black Forest Cake",
    weight: "250gm",
    category: "Cakes (250gm)",
    price: 400,
    veg: true,
    description: "Mini Black Forest cake.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  },

  // Bento Cakes
  {
    id: 25,
    name: "Belgian Chocolate Bento Cake",
    category: "Bento Cakes",
    price: 350,
    veg: true,
    description: "Premium Belgian chocolate in bento style.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 26,
    name: "Chocolate Bento Cake",
    category: "Bento Cakes",
    price: 300,
    veg: true,
    description: "Cute single-serve chocolate bento cake.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 27,
    name: "Pineapple Bento Cake",
    category: "Bento Cakes",
    price: 260,
    veg: true,
    description: "Mini pineapple bento cake.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 28,
    name: "Black Forest Bento Cake",
    category: "Bento Cakes",
    price: 270,
    veg: true,
    description: "Black Forest in convenient bento size.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  },
  {
    id: 29,
    name: "Truffle Bento Cake",
    category: "Bento Cakes",
    price: 330,
    veg: true,
    description: "Rich truffle bento cake.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },

  // Patties
  {
    id: 30,
    name: "Aloo Patties",
    category: "Patties",
    price: 29,
    veg: true,
    description: "Crispy potato-filled patties.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  },
  {
    id: 31,
    name: "Punjabi Patties",
    category: "Patties",
    price: 49,
    veg: true,
    description: "Spicy Punjabi-style patties.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  },
  {
    id: 32,
    name: "Paneer Patties",
    category: "Patties",
    price: 59,
    veg: true,
    description: "Cottage cheese stuffed patties.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  },
  {
    id: 33,
    name: "Cheese Patties",
    category: "Patties",
    price: 49,
    veg: true,
    description: "Cheesy and delicious patties.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  },
  {
    id: 34,
    name: "Paneer Cheese Patties",
    category: "Patties",
    price: 79,
    veg: true,
    description: "Paneer and cheese combo patties.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  },
  {
    id: 35,
    name: "Punjabi Cheese Patties",
    category: "Patties",
    price: 79,
    veg: true,
    description: "Punjabi spice with melted cheese.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  },
  {
    id: 36,
    name: "Double Cheese Patties",
    category: "Patties",
    price: 79,
    veg: true,
    description: "Extra cheesy patties.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  },

  // Snacks
  {
    id: 37,
    name: "Paneer Kulcha",
    category: "Snacks",
    price: 109,
    veg: true,
    description: "Soft kulcha stuffed with paneer.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  },
  {
    id: 38,
    name: "Stuff Garlic Bread",
    category: "Snacks",
    price: 165,
    veg: true,
    description: "Garlic bread loaded with cheese and herbs.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  },
  {
    id: 39,
    name: "Coin Pizza",
    category: "Snacks",
    price: 149,
    veg: true,
    description: "Mini coin-sized pizzas.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  },
  {
    id: 40,
    name: "Garlic Bread",
    category: "Snacks",
    price: 109,
    veg: true,
    description: "Classic garlic bread.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  },
  {
    id: 41,
    name: "Italian Pizza",
    category: "Snacks",
    price: 145,
    veg: true,
    description: "Italian-style vegetarian pizza.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  },
  {
    id: 42,
    name: "Paneer Cheese Grilled Sandwich",
    category: "Snacks",
    price: 150,
    veg: true,
    description: "Grilled sandwich with paneer and cheese.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
  },
  {
    id: 43,
    name: "Paneer Pizza",
    category: "Snacks",
    price: 145,
    veg: true,
    description: "Pizza topped with fresh paneer.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  },
  {
    id: 44,
    name: "Cheese Burger",
    category: "Snacks",
    price: 119,
    veg: true,
    description: "Juicy veg burger with cheese.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
  },
  {
    id: 45,
    name: "Cheese Grilled Sandwich",
    category: "Snacks",
    price: 119,
    veg: true,
    description: "Classic grilled cheese sandwich.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
  },
  {
    id: 46,
    name: "Hot Dog",
    category: "Snacks",
    price: 89,
    veg: true,
    description: "Vegetarian hot dog.",
    image:
      "https://images.unsplash.com/photo-1612392062798-2dbaa7c2ecb3?w=500&q=80",
  },
  {
    id: 47,
    name: "Junglee Paneer Roll",
    category: "Snacks",
    price: 120,
    veg: true,
    description: "Spicy paneer wrapped in roll.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80",
  },
  {
    id: 48,
    name: "Coleslaw Sandwich",
    category: "Snacks",
    price: 95,
    veg: true,
    description: "Fresh coleslaw sandwich.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
  },
  {
    id: 49,
    name: "Burger",
    category: "Snacks",
    price: 89,
    veg: true,
    description: "Classic veg burger.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
  },
  {
    id: 50,
    name: "Punjabi Sandwich",
    category: "Snacks",
    price: 89,
    veg: true,
    description: "Spicy Punjabi-style sandwich.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
  },
  {
    id: 51,
    name: "Paneer Tikka Sandwich",
    category: "Snacks",
    price: 95,
    veg: true,
    description: "Tandoori paneer tikka sandwich.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
  },
  {
    id: 52,
    name: "Vegetable Sandwich",
    category: "Snacks",
    price: 95,
    veg: true,
    description: "Fresh vegetable sandwich.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
  },

  // Pastry
  {
    id: 53,
    name: "DBC Pastry",
    category: "Pastry",
    price: 125,
    veg: true,
    description: "Death By Chocolate pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 54,
    name: "Cassata Pastry",
    category: "Pastry",
    price: 200,
    veg: true,
    description: "Italian Cassata ice cream pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 55,
    name: "Belgian Chocolate Pastry",
    category: "Pastry",
    price: 170,
    veg: true,
    description: "Premium Belgian chocolate pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 56,
    name: "Blueberry Pastry",
    category: "Pastry",
    price: 200,
    veg: true,
    description: "Fresh blueberry pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 57,
    name: "Lotus Biscoff Cheesecake Jar",
    category: "Pastry",
    price: 190,
    veg: true,
    description: "Lotus Biscoff cheesecake in a jar.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 58,
    name: "Blueberry Cheesecake Jar",
    category: "Pastry",
    price: 190,
    veg: true,
    description: "Blueberry cheesecake in a jar.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 59,
    name: "Nutella Cheesecake Jar",
    category: "Pastry",
    price: 190,
    veg: true,
    description: "Nutella cheesecake in a jar.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 60,
    name: "Lotus Biscoff Pastry",
    category: "Pastry",
    price: 140,
    veg: true,
    description: "Lotus Biscoff flavored pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 61,
    name: "Rich Pineapple Pastry",
    category: "Pastry",
    price: 99,
    veg: true,
    description: "Rich pineapple pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 62,
    name: "Mousse Pudding",
    category: "Pastry",
    price: 119,
    veg: true,
    description: "Smooth chocolate mousse pudding.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 63,
    name: "Pista Pastry",
    category: "Pastry",
    price: 105,
    veg: true,
    description: "Pistachio flavored pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 64,
    name: "Butterscotch Pastry",
    category: "Pastry",
    price: 105,
    veg: true,
    description: "Butterscotch pastry with praline.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 65,
    name: "Chocolate Pastry",
    category: "Pastry",
    price: 105,
    veg: true,
    description: "Classic chocolate pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 66,
    name: "Black Forest Pastry",
    category: "Pastry",
    price: 89,
    veg: true,
    description: "Black Forest pastry slice.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 67,
    name: "Pineapple Pastry",
    category: "Pastry",
    price: 89,
    veg: true,
    description: "Fresh pineapple pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 68,
    name: "Truffle Cup",
    category: "Pastry",
    price: 80,
    veg: true,
    description: "Mini truffle cup.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 69,
    name: "Brownie Pastry",
    category: "Pastry",
    price: 135,
    veg: true,
    description: "Fudgy brownie pastry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 70,
    name: "Donut",
    category: "Pastry",
    price: 105,
    veg: true,
    description: "Glazed donut.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80",
  },
  {
    id: 71,
    name: "Chocolate Brownie",
    category: "Pastry",
    price: 105,
    veg: true,
    description: "Rich chocolate brownie.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80",
  },

  // Biscuits (250gm)
  {
    id: 72,
    name: "Cake Rusk",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 170,
    veg: true,
    description: "Crunchy cake rusk.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 73,
    name: "Sweet Aata Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 170,
    veg: true,
    description: "Sweet whole wheat biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 74,
    name: "Ajwain Biscuits",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Carom seeds flavored biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 75,
    name: "Coconut Biscuits",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Coconut flavored biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 76,
    name: "Nan Khatai",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Traditional Indian shortbread.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 77,
    name: "Badam Cake Rusk",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Almond cake rusk.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 78,
    name: "Elachi Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 140,
    veg: true,
    description: "Cardamom flavored biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 79,
    name: "Manpasand Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Favorite mix biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 80,
    name: "Pista Nankhatai",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Pistachio nankhatai.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 81,
    name: "Salted Aata Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 170,
    veg: true,
    description: "Salted whole wheat biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 82,
    name: "Choco Vanilla Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Chocolate and vanilla biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 83,
    name: "Choco Chip Chocolate Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 170,
    veg: true,
    description: "Chocolate chip biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 84,
    name: "Dry Fruit Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 170,
    veg: true,
    description: "Loaded with dry fruits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 85,
    name: "Badam Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 170,
    veg: true,
    description: "Almond biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 86,
    name: "Kaju Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 149,
    veg: true,
    description: "Cashew biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 87,
    name: "Desi Jeera Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 200,
    veg: true,
    description: "Cumin flavored traditional biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: 88,
    name: "Desi Ghee Elaichi Biscuit",
    weight: "250gm",
    category: "Biscuits (250gm)",
    price: 200,
    veg: true,
    description: "Ghee and cardamom biscuits.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },

  // Rusk
  {
    id: 89,
    name: "Milk Rusk",
    weight: "500gm",
    category: "Rusk",
    price: 129,
    veg: true,
    description: "Classic milk rusk.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 90,
    name: "Special Rusk",
    category: "Rusk",
    price: 145,
    veg: true,
    description: "Special premium rusk.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 91,
    name: "Elachi Rusk",
    category: "Rusk",
    price: 140,
    veg: true,
    description: "Cardamom flavored rusk.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },

  // Khari
  {
    id: 92,
    name: "Masala Khari",
    category: "Khari",
    price: 185,
    veg: true,
    description: "Spiced khari puff.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 93,
    name: "Khari",
    category: "Khari",
    price: 180,
    veg: true,
    description: "Classic khari puff.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 94,
    name: "Cheese Khari",
    category: "Khari",
    price: 165,
    veg: true,
    description: "Cheese flavored khari.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 95,
    name: "Fine Khari",
    category: "Khari",
    price: 139,
    veg: true,
    description: "Fine crispy khari.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },

  // Breads
  {
    id: 96,
    name: "Thin Pizza Base",
    weight: "2pcs",
    category: "Breads",
    price: 59,
    veg: true,
    description: "Thin crust pizza base.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 97,
    name: "Pizza Base",
    weight: "2pcs",
    category: "Breads",
    price: 49,
    veg: true,
    description: "Regular pizza base.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 98,
    name: "Ladi Pav",
    weight: "6pcs",
    category: "Breads",
    price: 59,
    veg: true,
    description: "Soft ladi pav.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 99,
    name: "Kulcha",
    weight: "4pcs",
    category: "Breads",
    price: 39,
    veg: true,
    description: "Fresh kulcha bread.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 100,
    name: "Pav",
    weight: "9pcs",
    category: "Breads",
    price: 60,
    veg: true,
    description: "Fresh pav buns.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 101,
    name: "Burger Base",
    weight: "4pcs",
    category: "Breads",
    price: 59,
    veg: true,
    description: "Burger buns.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: 102,
    name: "Garlic Loaf",
    category: "Breads",
    price: 90,
    veg: true,
    description: "Garlic flavored loaf.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },

  // Cream Roll
  {
    id: 103,
    name: "Cream Roll",
    weight: "4pcs",
    category: "Cream Roll",
    price: 149,
    veg: true,
    description: "Crispy cream rolls.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 104,
    name: "Cherry Roll",
    category: "Cream Roll",
    price: 39,
    veg: true,
    description: "Cherry flavored roll.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },

  // Chocolate
  {
    id: 105,
    name: "Dubai Pista Kunafa Chocolate",
    category: "Chocolate",
    price: 175,
    veg: true,
    description: "Premium Dubai-style chocolate.",
    image:
      "https://images.unsplash.com/photo-1542843137-8791a6904d14?w=500&q=80",
  },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Cart functions
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Handle checkout via WhatsApp
  const handleCheckout = () => {
    const phoneNumber = "919928370227";

    // Create order message
    let message = "🛒 *New Order from Delight Bakery Website*\n\n";
    message += "*Order Details:*\n";
    message += "─────────────────\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      if (item.weight) {
        message += `   Weight: ${item.weight}\n`;
      }
      message += `   Qty: ${item.quantity} × ₹${item.price} = ₹${item.quantity * item.price}\n\n`;
    });

    message += "─────────────────\n";
    message += `*Total Amount: ₹${cartTotal}*\n`;
    message += `*Total Items: ${cartItemCount}*\n\n`;
    message += "Please confirm my order. Thank you! 🍰";

    // Open WhatsApp with order details
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-beige">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 bg-warm-brown text-white mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cream/90">
            Explore our delicious collection of treats
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-brown/50" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-warm-brown/20 focus:border-warm-brown focus:outline-none text-lg"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max px-4 md:px-0 md:flex-wrap md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-warm-brown text-white shadow-lg scale-105"
                    : "bg-white text-warm-brown border-2 border-warm-brown/20 hover:border-warm-brown hover:shadow-md"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.veg && (
                    <div className="absolute top-3 left-3 bg-white rounded-full p-1.5 shadow-lg">
                      <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
                        <FaLeaf className="text-green-600 text-xs" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-warm-brown mb-1">
                    {product.name}
                  </h3>
                  {product.weight && (
                    <p className="text-sm text-gray-500 mb-2">
                      {product.weight}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-warm-brown">
                      ₹{product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-pastel-pink hover:bg-pastel-pink/80 text-warm-brown font-semibold py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-gray-500">
                No products found matching your search.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-24 right-8 bg-warm-brown text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-40">
        <FaShoppingCart className="text-2xl" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-pastel-pink text-warm-brown w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Cart Panel */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col">
              {/* Cart Header */}
              <div className="bg-warm-brown text-white p-6 flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition">
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-beige rounded-xl p-4 flex gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-warm-brown mb-1 truncate">
                            {item.name}
                          </h3>
                          <p className="text-lg font-bold text-warm-brown mb-2">
                            ₹{item.price}
                          </p>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-full bg-white hover:bg-warm-brown hover:text-white transition flex items-center justify-center">
                              <FaMinus className="text-xs" />
                            </button>
                            <span className="font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-full bg-white hover:bg-warm-brown hover:text-white transition flex items-center justify-center">
                              <FaPlus className="text-xs" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-500 hover:text-red-700 transition">
                              <FaTimes />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t p-6 bg-beige">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold text-warm-brown">
                      Total:
                    </span>
                    <span className="text-3xl font-bold text-warm-brown">
                      ₹{cartTotal}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-warm-brown text-white font-bold py-4 rounded-full hover:bg-warm-brown/90 transition-all shadow-lg hover:shadow-xl">
                    Proceed to Checkout
                  </button>
                  <p className="text-center text-sm text-gray-600 mt-3">
                    {cartItemCount} item{cartItemCount !== 1 ? "s" : ""} in cart
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
