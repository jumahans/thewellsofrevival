import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-lg">
        {/* Quick announcement bar */}
        <div className="bg-blue-600 text-white py-2 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="animate-marquee whitespace-nowrap">
              <marquee behavior="smooth" direction="left">                Join us every Sunday for our service at 7:00 AM - 12:30 PM All are welcome!</marquee>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div className="logo flex items-center">
                <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  <img 
                    src="./images/logo.jpeg" 
                    alt="Wells of Revival Logo" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-xl font-bold text-blue-600 hidden sm:block">
                    The Wells of Revival
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation - Changed from lg:block to md:block */}
              <nav className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  <li>
                    <Link 
                      to="/" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/sermons" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      Sermons
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/events" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/ministries" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      Ministries
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/give" 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
                    >
                      Give
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Button - Changed from lg:hidden to md:hidden */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
                aria-label="Toggle mobile menu"
              >
                <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Changed from lg:hidden to md:hidden */}
        <div className={`md:hidden bg-white border-b transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/sermons" 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sermons
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/ministries" 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ministries
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/give" 
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Give
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
