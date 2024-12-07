import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SparkleClean</h3>
            <p className="text-gray-400">
              Professional cleaning services for homes and businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 SparkleClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;