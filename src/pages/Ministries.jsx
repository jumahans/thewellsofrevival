import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";


function Ministries(){
    const [popup, setpopup] = useState(false);
    const handlepopup = (e) =>{
        e.preventDefault();
        setpopup(true);
        setTimeout(() => setpopup(false), 3000 
        );
    }
    return(
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 z-0">
                    <img src="images/raising.jpg" alt="Church" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-opacity-50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-500 animate-fade-in">
                    Raising Eagles Youth Ministry
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-500 animate-fade-in">
                    Empowering the next generation to soar on wings like eagles
                    </p>
                </div>
                </section>


                {/* About Raising Eagles Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                    About Raising Eagles
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Raising Eagles is our vibrant youth ministry dedicated to nurturing the spiritual growth of young people in our community. We believe that today's youth are not just the church of tomorrow, but an integral part of the church today.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our mission is to help young people discover their God-given purpose, develop a personal relationship with Jesus Christ, and equip them with biblical principles that will guide them throughout their lives.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Isaiah 40:31 says, "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." This scripture inspires our name and our approach to youth ministry.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <i className="fas fa-pray text-blue-600"></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Spiritual Growth</h3>
                                        <p className="text-gray-600 text-sm">Bible studies and prayer sessions tailored for youth</p>
                                    </div>
                                    
                                    <div className="bg-green-50 rounded-lg p-4 text-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <i className="fas fa-users text-green-600"></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Community</h3>
                                        <p className="text-gray-600 text-sm">Building lasting friendships and support networks</p>
                                    </div>
                                    
                                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <i className="fas fa-hands-helping text-purple-600"></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Service</h3>
                                        <p className="text-gray-600 text-sm">Opportunities to serve the church and community</p>
                                    </div>
                                    
                                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <i className="fas fa-music text-orange-600"></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Worship</h3>
                                        <p className="text-gray-600 text-sm">Contemporary worship experiences for young people</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="order-first lg:order-last">
                                <img 
                                    src="images/raising1.jpg" 
                                    alt="Raising Eagles Youth Group" 
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            See Our Ministry in Action
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-100 md:h-200">
                                    <video 
                                        className="w-full h-full object-cover" 
                                        controls 
                                        loop 
                                        poster="tbh/fb1.png"
                                    >
                                        <source src="videos/Facebook1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Watch as our youth worship, learn, and grow together in Christ. Raising Eagles provides a safe and engaging environment where young people can explore their faith, ask questions, and develop lasting relationships with God and each other.
                                    </p>
                                    <a 
                                        href="https://www.instagram.com/raisingeaglesministry/?utm_source=ig_embed&ig_rid=d5b34a58-bd1a-49a7-86a3-e74c9a4deba1" 
                                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View More Videos
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-100 md:h-90">
                                    <video 
                                        className="w-full h-full object-cover" 
                                        controls 
                                        loop 
                                        poster="tbh/four.png"
                                    >
                                        <source src="videos/One.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-100 md:h-90">
                                    <video 
                                        className="w-full h-full object-cover" 
                                        controls 
                                        loop 
                                        poster="tbh/two.png"
                                    >
                                        <source src="videos/Two (1).mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-100 md:h-90">
                                    <video 
                                        className="w-full h-full object-cover" 
                                        controls 
                                        loop 
                                        poster="tbh/three.png"
                                    >
                                        <source src="videos/Three.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-100 md:h-90">
                                    <video 
                                        className="w-full h-full object-cover" 
                                        controls 
                                        loop 
                                        poster="tbh/one.png"
                                    >
                                        <source src="videos/Four.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-100 md:h-90">
                                    <video 
                                        className="w-full h-full object-cover" 
                                        controls 
                                        loop 
                                        poster="tbh/five.png"
                                    >
                                        <source src="videos/Five.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-100 md:h-90">
                                    <video 
                                        className="w-full h-full object-cover" 
                                        controls 
                                        loop 
                                        poster="tbh/six.png"
                                    >
                                        <source src="videos/Six.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-gray-50">
                    <div className="p16 bg-gray-50s">
                        <button className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold m-10" 
                        onClick={handlepopup}
                        >Visit Our Site</button>
                    </div>
                </section>
                {/* Small Green Popup */}
                {popup && (
                    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                    Coming Soon
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}

export default Ministries;
