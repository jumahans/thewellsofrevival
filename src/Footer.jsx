import React, { useState } from "react";

function Footer() {
  const [showpopup, setshowpopup] = useState(false);

  const handlepopup = (e) => {
    e.preventDefault(); // stop link navigation
    setshowpopup(true);
    setTimeout(() => setshowpopup(false), 3000); // auto-close after 3 seconds
  };

  return (
    <footer className="bg-gray-800 text-white mt-auto relative">
      <div className="footer-content container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="footer-logo">
            <img
              src="images/logo.jpeg"
              alt="Wells of Revival Logo"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-bold mb-2">The Wells of Revival</h3>
            <p className="text-gray-300">
              Raising Eagles in the kingdom, Men and Women of character and
              integrity.
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 w-4"></i>
                Majengo, Thika, Kenya
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-2 w-4"></i>
                <a
                  href="tel:+254727502355"
                  className="hover:text-blue-400 transition-colors"
                >
                  +254-727-502-355
                </a>
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2 w-4"></i>
                <a
                  href="mailto:thewellsofrevival.ke@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  thewellsofrevival.ke@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div className="footer-social">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="social-icons flex space-x-4">
              <a
                href="https://web.facebook.com/TheWellsOfRevivalKenya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/thewellsofrevivalministries/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                onClick={handlepopup}
                className="text-2xl hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                onClick={handlepopup}
                className="text-2xl hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      <div className="footer-bottom text-center py-4">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} The Wells of Revival. All Rights
          Reserved.
        </p>
      </div>

      {/* Small Green Popup */}
      {showpopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Coming Soon
        </div>
      )}
    </footer>
  );
}

export default Footer;
