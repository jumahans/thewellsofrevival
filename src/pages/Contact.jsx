import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";


function Contact(){
    const [popup, setpopup] = useState(false);
    const handlepopup = (e) =>{
        e.preventDefault();
        setpopup(true);
        setTimeout(() => setpopup(false), 3000);
    }
    return(
        <>
            <Header />
            <main>
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 z-0">
                        <img src="images/wells.jpg" alt="Church" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-opacity-50"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
                            Connect with us
                        </h1>
                        <p className="text-xl md:text-2xl text-white animate-fade-in">
                            We'd love to hear from you
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        We're here to help and answer any questions you might have. We look forward to hearing from you.
                                    </p>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <i className="fas fa-map-marker-alt text-2xl text-blue-600 mt-1"></i>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h4>
                                            <p className="text-gray-600">
                                                Wells of Revival Church<br />
                                                Majengo, Thika, Kenya
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <i className="fas fa-phone text-2xl text-blue-600 mt-1"></i>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h4>
                                            <p className="text-gray-600">
                                                <a href="tel:+254727502355" className="hover:text-blue-600 transition-colors">
                                                    +254-727-502-355
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <i className="fas fa-envelope text-2xl text-blue-600 mt-1"></i>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h4>
                                            <p className="text-gray-600">
                                                <a href="mailto:thewellsofrevival.ke@gmail.com" className="hover:text-blue-600 transition-colors">
                                                    thewellsofrevival.ke@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <i className="fas fa-clock text-2xl text-blue-600 mt-1"></i>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Service Times</h4>
                                            <div className="space-y-2 text-gray-600">
                                                <p>First service: 8:00 AM - 9:30 AM</p>
                                                <p>Second Service: 10:00 AM - 11:30 AM</p>
                                                <p>Discipleship/Mentorship Classes<br />11:45 AM - 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex space-x-4">
                                    <a href="#" className="text-2xl text-gray-600 hover:text-blue-600 transition-colors">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="#" className="text-2xl text-gray-600 hover:text-pink-500 transition-colors">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="text-2xl text-gray-600 hover:text-red-500 transition-colors">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="#" className="text-2xl text-gray-600 hover:text-blue-400 transition-colors">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Name
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Email
                                            </label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Phone
                                        </label>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            name="phone"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <select 
                                            id="subject" 
                                            name="subject"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="prayer">Prayer Request</option>
                                            <option value="visit">First-Time Visit</option>
                                            <option value="volunteer">Volunteer Opportunities</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Message
                                        </label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        ></textarea>
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        onClick={handlepopup}
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Office Hours Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Office Hours & Service Times
                            </h2>
                        </div>
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center">
                                <i className="fas fa-church text-4xl text-blue-600 mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Sunday Services</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="font-medium text-gray-700">First service</span>
                                        <span className="text-gray-600">8:00 AM - 9:30 AM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="font-medium text-gray-700">Second service</span>
                                        <span className="text-gray-600">10:00 AM - 11:30 AM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-medium text-gray-700">Discipleship/mentorship Classes</span>
                                        <span className="text-gray-600">11:45 AM - 12:30 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Prayer Request Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Need Prayer?</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Our prayer team is committed to praying for your needs. Submit your prayer request, and we will stand with you in faith.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    All prayer requests are kept confidential and are shared only with our dedicated prayer team.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                    Submit Your Prayer Request
                                </h3>
                                
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                    <p className="text-blue-800 text-sm flex items-center">
                                        <i className="fas fa-lock mr-2"></i>
                                        Your prayer request will be kept strictly confidential and shared only with our prayer team.
                                    </p>
                                </div>
                                
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="prayer-name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name (Optional)
                                        </label>
                                        <input 
                                            type="text" 
                                            id="prayer-name" 
                                            name="prayer-name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="prayer-email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Email (Optional)
                                        </label>
                                        <input 
                                            type="email" 
                                            id="prayer-email" 
                                            name="prayer-email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="prayer-request" className="block text-sm font-medium text-gray-700 mb-2">
                                            Prayer Request
                                        </label>
                                        <textarea 
                                            id="prayer-request" 
                                            name="prayer-request" 
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <input 
                                            type="checkbox" 
                                            id="prayer-updates" 
                                            name="prayer-updates"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                                                    />
                                        <label htmlFor="prayer-updates" className="text-sm text-gray-700">
                                            I would like to receive prayer updates and encouragement
                                        </label>
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        onClick={handlepopup}
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                    >
                                        Submit Prayer Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Find Us</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.499096747871!2d37.08165767404412!3d-1.0362134354020058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e62b53da841%3A0xbed071bf1770a28c!2sWells%20of%20Revival%20Ministries!5e1!3m2!1sen!2ske!4v1748000445027!5m2!1sen!2ske" 
                                    width="100%" 
                                    height="450" 
                                    style={{border: 0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    popup && (
                        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                            Coming Soon
                        </div>

                    )
                }
            </main>
            <Footer />
        </>
    )
}

export default Contact;

