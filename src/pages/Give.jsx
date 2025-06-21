import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";


function Give(){

    return(
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 z-0">
                        <img src="images/give.jpeg" alt="Church" className="w-full h-full object-cover" />
                        <div className="absolute inset-0  bg-opacity-50"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
                            Giving
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in">
                            Supporting the Kingdom of God
                        </p>
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto animate-fade-in">
                            <p className="text-grey text-lg italic">
                                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Give Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Why We Give
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-heart text-2xl text-red-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Act of Worship</h3>
                                <p className="text-gray-600">
                                    Giving is an act of worship that acknowledges God as the source of all blessings and expresses our gratitude to Him.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-hands-helping text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Kingdom Advancement</h3>
                                <p className="text-gray-600">
                                    Your giving helps advance God's kingdom through evangelism, discipleship, and community outreach programs.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-church text-2xl text-purple-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Church Operations</h3>
                                <p className="text-gray-600">
                                    Your faithful giving supports the day-to-day operations of the church, including facilities, staff, and ministry resources.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-globe-africa text-2xl text-green-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Global Missions</h3>
                                <p className="text-gray-600">
                                    Your generosity extends beyond our local community to support missions and humanitarian efforts around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ways to Give Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Ways to Give
                        </h2>
                        <div className="space-y-8 max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-mobile-alt text-3xl text-green-600"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Mobile Money</h3>
                                    <p className="text-gray-600 mb-4">Give conveniently through M-Pesa:</p>
                                    <div className="space-y-2">
                                        <p className="text-gray-800"><strong>Paybill Number:</strong> 247247</p>
                                        <p className="text-gray-800"><strong>Account Number:</strong> 340191</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-university text-3xl text-blue-600"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Bank Transfer</h3>
                                    <p className="text-gray-600 mb-4">Make a direct bank transfer to our church account:</p>
                                    <div className="space-y-2">
                                        <p className="text-gray-800"><strong>Paybill Number:</strong> 972900</p>
                                        <p className="text-gray-800"><strong>Account Number:</strong> 06004100015</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-hand-holding-usd text-3xl text-yellow-600"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">In-Person Giving</h3>
                                    <p className="text-gray-600 mb-4">Give during our Sunday services:</p>
                                    <div className="space-y-2">
                                        <p className="text-gray-800">
                                            <strong>Church Hours:</strong> Sunday<br />
                                            First Service 8:00 AM - 10:00 AM<br />
                                            Second Service 10:30 AM - 12:30 PM
                                        </p>
                                        <p className="text-gray-800"><strong>Address:</strong> Majengo, Thika, Kenya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Giving Categories Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Giving Categories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-red-500">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-hand-holding-heart text-2xl text-red-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Tithes</h3>
                                <p className="text-gray-600">
                                    The biblical principle of giving 10% of your income to support God's work through the local church.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-gift text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Offerings</h3>
                                <p className="text-gray-600">
                                    Gifts given above and beyond tithes to support the general operations and ministries of the church.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-seedling text-2xl text-green-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Infrastructure & Development</h3>
                                <p className="text-gray-600">
                                    Offering given to support church development.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-purple-500">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-hands-helping text-2xl text-purple-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Benevolence</h3>
                                <p className="text-gray-600">
                                    Gifts that help those in need within our church and community through our compassion ministries.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-globe-africa text-2xl text-orange-600"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Missions</h3>
                                <p className="text-gray-600">
                                    Support for our mission efforts to spread the Gospel and serve communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Give;
