import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Delight Bakery Column */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">
              Delight Bakery
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Freshly baked cakes and pastries in Jaipur. Premium quality,
              exceptional taste.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pastel-pink hover:text-white p-3 rounded-full transition-all duration-300">
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pastel-pink hover:text-white p-3 rounded-full transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pastel-pink hover:text-white p-3 rounded-full transition-all duration-300">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/menu"
                  className="text-gray-300 hover:text-pastel-pink transition-colors flex items-center space-x-2">
                  <span className="text-pastel-pink">→</span>
                  <span>Menu</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-pastel-pink transition-colors flex items-center space-x-2">
                  <span className="text-pastel-pink">→</span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-pastel-pink transition-colors flex items-center space-x-2">
                  <span className="text-pastel-pink">→</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-pastel-pink transition-colors flex items-center space-x-2">
                  <span className="text-pastel-pink">→</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-pastel-pink" />
                <a
                  href="tel:+919928370227"
                  className="hover:text-pastel-pink transition-colors">
                  +91 99283 70227
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-pastel-pink" />
                <span className="text-sm">
                  D 135, Jan Path Corner,
                  <br />
                  Shyam Nagar, Jaipur
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-pastel-pink" />
                <span className="text-sm">Daily: 8 AM - 10 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get updates on special offers and new arrivals
            </p>
            <Link
              href="/contact"
              className="inline-block bg-pastel-pink text-warm-brown px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Demo website concept for Delight
              Bakery
            </p>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span className="flex items-center space-x-1">
                <span>Rating:</span>
                <span className="text-yellow-400">⭐ 4.4</span>
              </span>
              <span>|</span>
              <span>410 Reviews</span>
              <span>|</span>
              <span className="text-pastel-pink">
                Crafted with ❤️ in Jaipur
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
