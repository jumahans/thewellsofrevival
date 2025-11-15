import React, { useState } from "react";
import logo from './assets/images/logo.jpg';
function Footer() {
  const [toast, setToast] = useState({ show: false, message: "" });
  const [email, setEmail] = useState("");

  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email");
      return;
    }
    showToast("Thank you! You'll hear from us soon.");
    setEmail("");
  };

  const socialLinks = [
    {
      href: "https://web.facebook.com/TheWellsOfRevivalKenya",
      icon: "fab fa-facebook",
      color: "hover:text-blue-500",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/thewellsofrevivalministries/",
      icon: "fab fa-instagram",
      color: "hover:text-pink-500",
      label: "Instagram",
    },
    {
      href: "https://youtube.com/@TheWellsOfRevival",
      icon: "fab fa-youtube",
      color: "hover:text-red-500",
      label: "YouTube",
    },
    {
      href: "https://twitter.com/wellsrevival",
      icon: "fab fa-twitter",
      color: "hover:text-blue-400",
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/sermons", label: "Sermons" },
    { to: "/events", label: "Events" },
    { to: "/give", label: "Give" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 Fmt-auto">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Wells of Revival Logo"
                className="w-14 h-14 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-white">The Wells of Revival</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Raising Eagles in the kingdom, Men and Women of character and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt w-4 text-blue-400"></i>
                <span>Majengo, Thika, Kenya</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-phone w-4 text-blue-400"></i>
                <a href="tel:+254727502355" className="hover:text-blue-400">
                  +254 727 502 355
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope w-4 text-blue-400"></i>
                <a href="mailto:thewellsofrevival.ke@gmail.com" className="hover:text-blue-400">
                  thewellsofrevival.ke@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <form onSubmit={handleNewsletter} className="mb-5">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl ${social.color} transition-colors duration-200`}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="text-center py-5 text-sm">
        <p>
          &copy; {new Date().getFullYear()} The Wells of Revival. All Rights Reserved.
        </p>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-xl text-white font-medium text-sm z-50 transition-all duration-300 ${
            toast.message.includes("valid") ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    </footer>
  );
}

export default Footer;