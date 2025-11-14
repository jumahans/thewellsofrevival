// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-lg">
//         {/* Quick announcement bar */}
//         <div className="bg-blue-600 text-white py-2 overflow-hidden">
//           <div className="container mx-auto px-4">
//             <div className="animate-marquee whitespace-nowrap">
//               <marquee behavior="smooth" direction="left">                Join us every Sunday for our service at 7:00 AM - 12:30 PM All are welcome!</marquee>

//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="bg-white border-b">
//           <div className="container mx-auto px-4">
//             <div className="flex items-center justify-between py-4">
//               {/* Logo */}
//               <div className="logo flex items-center">
//                 <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//                   <img 
//                     src="./images/logo.jpeg" 
//                     alt="Wells of Revival Logo" 
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <span className="text-xl font-bold text-blue-600 hidden sm:block">
//                     The Wells of Revival
//                   </span>
//                 </Link>
//               </div>

//               {/* Desktop Navigation - Changed from lg:block to md:block */}
//               <nav className="hidden md:block">
//                 <ul className="flex items-center space-x-8">
//                   <li>
//                     <Link 
//                       to="/" 
//                       className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       to="/about" 
//                       className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                     >
//                       About
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       to="/sermons" 
//                       className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                     >
//                       Sermons
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       to="/events" 
//                       className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                     >
//                       Events
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       to="/ministries" 
//                       className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                     >
//                       Ministries
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       to="/contact" 
//                       className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                     >
//                       Contact
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       to="/give" 
//                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
//                     >
//                       Give
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>

//               {/* Mobile Menu Button - Changed from lg:hidden to md:hidden */}
//               <button
//                 onClick={toggleMobileMenu}
//                 className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
//                 aria-label="Toggle mobile menu"
//               >
//                 <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
//                 <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
//                 <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation - Changed from lg:hidden to md:hidden */}
//         <div className={`md:hidden bg-white border-b transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <nav className="container mx-auto px-4 py-4">
//             <ul className="space-y-4">
//               <li>
//                 <Link 
//                   to="/" 
//                   className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/about" 
//                   className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/sermons" 
//                   className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Sermons
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/events" 
//                   className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Events
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/ministries" 
//                   className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Ministries
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/contact" 
//                   className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/give" 
//                   className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200 text-center"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Give
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/sermons", label: "Sermons" },
    { to: "/events", label: "Events" },
    { to: "/ministries", label: "Ministries" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md">
        {/* Announcement Bar */}
        <div className="bg-blue-600 text-white py-2 text-sm overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="animate-marquee whitespace-nowrap">
              <span className="inline-block">
                Join us every Sunday for our service at 7:00 AM - 12:30 PM All are welcome!
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  <img
                    src="/images/logo.jpeg"
                    alt="Wells of Revival Logo"
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="text-lg md:text-xl font-bold text-blue-600 hidden md:block">
                    The Wells of Revival
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.to
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/give"
                  className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium transition-all duration-200 shadow-sm"
                >
                  Give
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-5 flex flex-col justify-center gap-1">
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden bg-white border-b transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.to
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/give"
                  onClick={closeMobileMenu}
                  className="block text-center bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 font-medium transition-all duration-200 shadow-sm"
                >
                  Give
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CSS Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

export default Header;