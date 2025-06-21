import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Sermons(){
    return(
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 z-0">
                        <img src="images/sermons.jpg" alt="Church" className="w-full h-full object-cover" />
                        <div className="absolute inset-0  bg-opacity-50"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
                            Sermons & Teachings
                        </h1>
                        <p className="text-xl md:text-2xl text-white animate-fade-in">
                            Grow in faith through the Word of God
                        </p>
                    </div>
                </section>

                {/* Sermons Filter Section */}
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                                <div className="space-y-2">
                                    <label htmlFor="speaker-filter" className="block text-sm font-semibold text-gray-700">
                                        Speaker:
                                    </label>
                                    <select 
                                        id="speaker-filter" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="all">All Speakers</option>
                                        <option value="bishop-ayisi">Bishop Ayisi</option>
                                        <option value="guest-speaker">Guest Speakers</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="topic-filter" className="block text-sm font-semibold text-gray-700">
                                        Topic:
                                    </label>
                                    <select 
                                        id="topic-filter" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="all">All Topics</option>
                                        <option value="faith">Faith</option>
                                        <option value="prayer">Prayer</option>
                                        <option value="holy-spirit">Holy Spirit</option>
                                        <option value="family">Family</option>
                                        <option value="healing">Healing</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="series-filter" className="block text-sm font-semibold text-gray-700">
                                        Series:
                                    </label>
                                    <select 
                                        id="series-filter" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="all">All Series</option>
                                        <option value="revival">Path to Revival</option>
                                        <option value="purpose">Discovering Your Purpose</option>
                                        <option value="faith">Faith That Moves Mountains</option>
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
                    </div>
                </section>

                {/* Featured Sermon */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Featured Message
                        </h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="aspect-video lg:aspect-square">
                                        <iframe 
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/od-5iVUk994?si=BXYk8gu4niPRzDz0" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                            There Is Hope
                                        </h3>
                                        <div className="flex items-center text-gray-600 mb-4">
                                            <i className="fas fa-user mr-2"></i>
                                            <span className="font-semibold">Bishop John Ayisi</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            In times of uncertainty and challenge, discover the unwavering hope that comes from faith in God. This powerful message reminds us that no matter what we face, there is always hope in Christ.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sermon Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Recent Sermons
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {/* Sermon Card 1 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-speaker="bishop-ayisi" data-topic="faith" data-series="revival">
                                <div className="aspect-video relative">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/PCKcofkScOs?si=ayfM_oXC2iPUbV1U" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">JUST BELIEVE</h3>
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <i className="fas fa-user mr-2"></i>
                                        <span className="font-semibold">Bishop Ayisi</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Faith moves mountains—just believe, and watch God do the impossible.
                                    </p>
                                </div>
                            </div>

                            {/* Sermon Card 2 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-speaker="guest-speaker" data-topic="prayer" data-series="purpose">
                                <div className="aspect-video relative">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/uuNFagALYJI?si=RGbEIBlxWjHU76YZ" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">THE LOVE OF GOD</h3>
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <i className="fas fa-user mr-2"></i>
                                        <span className="font-semibold">Bishop John Ayisi</span>
                                    </div>
                                    <p className="text-gray-600">
                                        God's love never fails, never leaves, and never gives up on you—it's forever.
                                    </p>
                                </div>
                            </div>

                            {/* Sermon Card 3 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-speaker="bishop-ayisi" data-topic="holy-spirit" data-series="revival">
                                <div className="aspect-video relative">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/hWDrVvnI5T4?si=uhc4an6AcdRV3UHW" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">KUFIKA KWENYE UWEPO</h3>
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <i className="fas fa-user mr-2"></i>
                                        <span className="font-semibold">Bishop Ayisi</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Peace, power, and purpose await in God's presence—draw near and be transformed.
                                    </p>
                                </div>
                            </div>

                            {/* Sermon Card 4 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-speaker="bishop-ayisi" data-topic="family" data-series="purpose">
                                <div className="aspect-video relative">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/h9p39UTR6FE?si=eKm8ImS_-3XebZhE" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">TURNING TO GOD IN TIME OF TROUBLE</h3>
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <i className="fas fa-user mr-2"></i>
                                        <span className="font-semibold">Bishop Ayisi</span>
                                    </div>
                                    <p className="text-gray-600">
                                        When storms rise, don't run away—run to God. He's your refuge and strength.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Sermons;
