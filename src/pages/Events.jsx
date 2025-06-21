import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Events(){
    return(
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 z-0">
                        <img src="images/events.webp" alt="Church" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-opacity-50"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-grey animate-fade-in">
                            Upcoming Events
                        </h1>
                        <p className="text-xl md:text-2xl text-grey animate-fade-in">
                            Join us for life-changing experiences
                        </p>
                    </div>
                </section>

                {/* Featured Event Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto px-4">
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                                    Featured Event
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold">Family Sunday 2025 April</h2>
                                <div className="space-y-2 text-gray-500">
                                    <p className="flex items-center">
                                        <i className="fas fa-calendar-alt mr-3"></i>
                                        April 5<sup>th</sup>, 2025
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-clock mr-3"></i>
                                        9:00 AM - 12:00 PM
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-map-marker-alt mr-3"></i>
                                        Wells of Revival Church, Thika
                                    </p>
                                </div>
                                <p className="text-gray-500 leading-relaxed">
                                    Join us for our powerful worship, anointed preaching, and life-changing encounters with God. 
                                    Speakers include [Speaker Names]. Don't miss this opportunity to experience a fresh outpouring of the Holy Spirit!
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-6">Event Starts In:</h3>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                        <span className="block text-3xl font-bold" id="countdown-days">00</span>
                                        <span className="text-sm">Days</span>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                        <span className="block text-3xl font-bold" id="countdown-hours">00</span>
                                        <span className="text-sm">Hours</span>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                        <span className="block text-3xl font-bold" id="countdown-minutes">00</span>
                                        <span className="text-sm">Minutes</span>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                        <span className="block text-3xl font-bold" id="countdown-seconds">00</span>
                                        <span className="text-sm">Seconds</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events Filter Section */}
                <section className="py-8 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                            <div className="flex items-center space-x-2">
                                <label htmlFor="event-category" className="text-sm font-medium text-gray-700">
                                    Category:
                                </label>
                                <select 
                                    id="event-category"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="worship">Worship</option>
                                    <option value="prayer">Prayer</option>
                                    <option value="youth">Youth</option>
                                    <option value="family">Family</option>
                                    <option value="outreach">Outreach</option>
                                </select>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <label htmlFor="event-month" className="text-sm font-medium text-gray-700">
                                    Month:
                                </label>
                                <select 
                                    id="event-month"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">All Months</option>
                                    <option value="june">June 2025</option>
                                    <option value="july">July 2025</option>
                                    <option value="august">August 2025</option>
                                    <option value="september">September 2025</option>
                                </select>
                            </div>
                            
                            <button 
                                id="filter-button" 
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </section>

                {/* Events Grid Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {/* Event Card 1 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-category="worship" data-month="june">
                                <div className="bg-blue-600 text-white p-4 text-center">
                                    <span className="block text-3xl font-bold">15</span>
                                    <span className="text-sm">June</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Worship Night</h3>
                                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                                        <p className="flex items-center">
                                            <i className="fas fa-clock mr-2"></i>
                                            7:00 PM - 9:00 PM
                                        </p>
                                        <p className="flex items-center">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Main Sanctuary
                                        </p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Join us for an evening of powerful worship and praise as we lift up the name of Jesus.
                                    </p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                                        Learn More →
                                    </a>
                                </div>
                            </div>

                            {/* Event Card 2 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-category="prayer" data-month="june">
                                <div className="bg-green-600 text-white p-4 text-center">
                                    <span className="block text-3xl font-bold">22</span>
                                    <span className="text-sm">June</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Prayer Meeting</h3>
                                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                                        <p className="flex items-center">
                                            <i className="fas fa-clock mr-2"></i>
                                            6:00 AM - 8:00 AM
                                        </p>
                                        <p className="flex items-center">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Prayer Room
                                        </p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Start your day with powerful prayer and intercession for our community and nation.
                                    </p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                                        Learn More →
                                    </a>
                                </div>
                            </div>

                            {/* Event Card 3 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-category="youth" data-month="july">
                                <div className="bg-purple-600 text-white p-4 text-center">
                                    <span className="block text-3xl font-bold">05</span>
                                    <span className="text-sm">July</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Youth Conference</h3>
                                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                                        <p className="flex items-center">
                                            <i className="fas fa-clock mr-2"></i>
                                            2:00 PM - 6:00 PM
                                        </p>
                                        <p className="flex items-center">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Youth Hall
                                        </p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        An inspiring conference designed to empower and equip young people for their destiny.
                                    </p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                                        Learn More →
                                    </a>
                                </div>
                            </div>

                            {/* Event Card 4 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-category="family" data-month="july">
                                <div className="bg-orange-600 text-white p-4 text-center">
                                    <span className="block text-3xl font-bold">12</span>
                                    <span className="text-sm">July</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Family Fun Day</h3>
                                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                                        <p className="flex items-center">
                                            <i className="fas fa-clock mr-2"></i>
                                            10:00 AM - 4:00 PM
                                        </p>
                                        <p className="flex items-center">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Church Grounds
                                        </p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        A day of fun activities, games, and fellowship for the whole family to enjoy together.
                                    </p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                                        Learn More →
                                    </a>
                                </div>
                            </div>

                            {/* Event Card 5 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-category="outreach" data-month="august">
                                <div className="bg-red-600 text-white p-4 text-center">
                                    <span className="block text-3xl font-bold">20</span>
                                    <span className="text-sm">August</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Community Outreach</h3>
                                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                                        <p className="flex items-center">
                                            <i className="fas fa-clock mr-2"></i>
                                            9:00 AM - 3:00 PM
                                        </p>
                                                                                <p className="flex items-center">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Local Community
                                        </p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Join us as we serve our community through various outreach activities and share God's love.
                                    </p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                                        Learn More →
                                    </a>
                                </div>
                            </div>

                            {/* Event Card 6 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-category="worship" data-month="august">
                                <div className="bg-indigo-600 text-white p-4 text-center">
                                    <span className="block text-3xl font-bold">27</span>
                                    <span className="text-sm">August</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Revival Service</h3>
                                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                                        <p className="flex items-center">
                                            <i className="fas fa-clock mr-2"></i>
                                            6:00 PM - 9:00 PM
                                        </p>
                                        <p className="flex items-center">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Main Sanctuary
                                        </p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Experience the power of God in this special revival service with healing and miracles.
                                    </p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                                        Learn More →
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-2">
                            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                                1
                            </a>
                            <a href="#" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                                2
                            </a>
                            <a href="#" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Events;

