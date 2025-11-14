// import React from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import { useState } from "react";


// function Give(){

//     return(
//         <>
//             <Header />
//             <main>
//                 {/* Hero Section */}
//                 <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
//                 <div
//                     className="absolute inset-0 z-0"
//                     style={{
//                     backgroundImage:
//                         "linear-gradient(rgba(44, 62, 80, 0.5), rgba(52, 73, 94, 0.5)), url('images/give.jpeg')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat: "no-repeat",
//                     }}
//                 ></div>

//                 <div className="relative z-10 container mx-auto px-4 text-center">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
//                     Giving
//                     </h1>
//                     <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in">
//                     Supporting the Kingdom of God
//                     </p>
//                     <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto animate-fade-in">
//                     <p className="text-black text-lg italic">
//                         "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
//                     </p>
//                     </div>
//                 </div>
//                 </section>

//                 {/* Why Give Section */}
//                 <section className="py-16 bg-white">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//                             Why We Give
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
//                                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-heart text-2xl text-red-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Act of Worship</h3>
//                                 <p className="text-gray-600">
//                                     Giving is an act of worship that acknowledges God as the source of all blessings and expresses our gratitude to Him.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
//                                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-hands-helping text-2xl text-blue-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Kingdom Advancement</h3>
//                                 <p className="text-gray-600">
//                                     Your giving helps advance God's kingdom through evangelism, discipleship, and community outreach programs.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
//                                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-church text-2xl text-purple-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Church Operations</h3>
//                                 <p className="text-gray-600">
//                                     Your faithful giving supports the day-to-day operations of the church, including facilities, staff, and ministry resources.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
//                                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-globe-africa text-2xl text-green-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Global Missions</h3>
//                                 <p className="text-gray-600">
//                                     Your generosity extends beyond our local community to support missions and humanitarian efforts around the world.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Ways to Give Section */}
//                 <section className="py-16 bg-gray-50">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//                             Ways to Give
//                         </h2>
//                         <div className="space-y-8 max-w-4xl mx-auto">
//                             <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
//                                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <i className="fas fa-mobile-alt text-3xl text-green-600"></i>
//                                 </div>
//                                 <div className="flex-1 text-center md:text-left">
//                                     <h3 className="text-2xl font-bold text-gray-800 mb-3">Mobile Money</h3>
//                                     <p className="text-gray-600 mb-4">Give conveniently through M-Pesa:</p>
//                                     <div className="space-y-2">
//                                         <p className="text-gray-800"><strong>Paybill Number:</strong> 247247</p>
//                                         <p className="text-gray-800"><strong>Account Number:</strong> 340191</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
//                                 <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <i className="fas fa-university text-3xl text-blue-600"></i>
//                                 </div>
//                                 <div className="flex-1 text-center md:text-left">
//                                     <h3 className="text-2xl font-bold text-gray-800 mb-3">Bank Transfer</h3>
//                                     <p className="text-gray-600 mb-4">Make a direct bank transfer to our church account:</p>
//                                     <div className="space-y-2">
//                                         <p className="text-gray-800"><strong>Paybill Number:</strong> 972900</p>
//                                         <p className="text-gray-800"><strong>Account Number:</strong> 06004100015</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
//                                 <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <i className="fas fa-hand-holding-usd text-3xl text-yellow-600"></i>
//                                 </div>
//                                 <div className="flex-1 text-center md:text-left">
//                                     <h3 className="text-2xl font-bold text-gray-800 mb-3">In-Person Giving</h3>
//                                     <p className="text-gray-600 mb-4">Give during our Sunday services:</p>
//                                     <div className="space-y-2">
//                                         <p className="text-gray-800">
//                                             <strong>Church Hours:</strong> Sunday<br />
//                                             First Service 8:00 AM - 10:00 AM<br />
//                                             Second Service 10:30 AM - 12:30 PM
//                                         </p>
//                                         <p className="text-gray-800"><strong>Address:</strong> Majengo, Thika, Kenya</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Giving Categories Section */}
//                 <section className="py-16 bg-white">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//                             Giving Categories
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-red-500">
//                                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-hand-holding-heart text-2xl text-red-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Tithes</h3>
//                                 <p className="text-gray-600">
//                                     The biblical principle of giving 10% of your income to support God's work through the local church.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-blue-500">
//                                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-gift text-2xl text-blue-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Offerings</h3>
//                                 <p className="text-gray-600">
//                                     Gifts given above and beyond tithes to support the general operations and ministries of the church.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
//                                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-seedling text-2xl text-green-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Infrastructure & Development</h3>
//                                 <p className="text-gray-600">
//                                     Offering given to support church development.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-purple-500">
//                                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-hands-helping text-2xl text-purple-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Benevolence</h3>
//                                 <p className="text-gray-600">
//                                     Gifts that help those in need within our church and community through our compassion ministries.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-orange-500">
//                                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <i className="fas fa-globe-africa text-2xl text-orange-600"></i>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-3">Missions</h3>
//                                 <p className="text-gray-600">
//                                     Support for our mission efforts to spread the Gospel and serve communities.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </>
//     )
// }

// export default Give;


import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Give() {
  const [copied, setCopied] = useState({ paybill: false, account: false });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
  };

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* ==================== HERO ==================== */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(rgba(44, 62, 80, 0.6), rgba(52, 73, 94, 0.7)),
              url('images/give.jpeg')
            `,
          }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Giving
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 animate-fade-in">
              Supporting the Kingdom of God
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto animate-fade-in">
              <p className="text-white text-base sm:text-lg italic leading-relaxed">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — <strong>2 Corinthians 9:7</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ==================== WHY WE GIVE ==================== */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Why We Give
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: "fas fa-heart",
                  color: "bg-red-100 text-red-600",
                  title: "Act of Worship",
                  text: "Giving is an act of worship that acknowledges God as the source of all blessings and expresses our gratitude to Him.",
                },
                {
                  icon: "fas fa-hands-helping",
                  color: "bg-blue-100 text-blue-600",
                  title: "Kingdom Advancement",
                  text: "Your giving helps advance God's kingdom through evangelism, discipleship, and community outreach programs.",
                },
                {
                  icon: "fas fa-church",
                  color: "bg-purple-100 text-purple-600",
                  title: "Church Operations",
                  text: "Your faithful giving supports the day-to-day operations of the church, including facilities, staff, and ministry resources.",
                },
                {
                  icon: "fas fa-globe-africa",
                  color: "bg-green-100 text-green-600",
                  title: "Global Missions",
                  text: "Your generosity extends beyond our local community to support missions and humanitarian efforts around the world.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== WAYS TO GIVE ==================== */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Ways to Give
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* M-PESA */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col md:flex-row items-center gap-5">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-mobile-alt text-3xl text-green-600"></i>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Mobile Money (M-Pesa)</h3>
                  <p className="text-gray-600 mb-3">Give conveniently through M-Pesa:</p>
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span><strong>Paybill:</strong> 247247</span>
                      <button
                        onClick={() => copyToClipboard("247247", "paybill")}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                      >
                        <i className="fas fa-copy"></i>
                        {copied.paybill ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span><strong>Account:</strong> 340191</span>
                      <button
                        onClick={() => copyToClipboard("340191", "account")}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                      >
                        <i className="fas fa-copy"></i>
                        {copied.account ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                  <a
                    href="mpesa://pay?businessNumber=247247&accountNumber=340191"
                    className="mt-4 inline-block bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition font-medium text-sm"
                  >
                    Give via M-Pesa
                  </a>
                </div>
              </div>

              {/* BANK TRANSFER */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col md:flex-row items-center gap-5">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-university text-3xl text-blue-600"></i>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Bank Transfer</h3>
                  <p className="text-gray-600 mb-3">Make a direct bank transfer:</p>
                  <div className="space-y-3 text-sm sm:text-base">
                    <p><strong>Paybill:</strong> 972900</p>
                    <p><strong>Account:</strong> 06004100015</p>
                  </div>
                </div>
              </div>

              {/* IN-PERSON */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col md:flex-row items-center gap-5">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-hand-holding-usd text-3xl text-yellow-600"></i>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">In-Person Giving</h3>
                  <p className="text-gray-600 mb-3">Give during Sunday services:</p>
                  <div className="space-y-1 text-sm sm:text-base text-gray-700">
                    <p><strong>First Service:</strong> 8:00 AM – 10:00 AM</p>
                    <p><strong>Second Service:</strong> 10:30 AM – 12:30 PM</p>
                    <p><strong>Address:</strong> Majengo, Thika, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== GIVING CATEGORIES ==================== */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Giving Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Tithes", icon: "fas fa-hand-holding-heart", color: "border-red-500 bg-red-100 text-red-600", text: "The biblical principle of giving 10% of your income to support God's work through the local church." },
                { title: "Offerings", icon: "fas fa-gift", color: "border-blue-500 bg-blue-100 text-blue-600", text: "Gifts given above and beyond tithes to support the general operations and ministries of the church." },
                { title: "Infrastructure & Development", icon: "fas fa-seedling", color: "border-green-500 bg-green-100 text-green-600", text: "Offering given to support church development." },
                { title: "Benevolence", icon: "fas fa-hands-helping", color: "border-purple-500 bg-purple-100 text-purple-600", text: "Gifts that help those in need within our church and community through our compassion ministries." },
                { title: "Missions", icon: "fas fa-globe-africa", color: "border-orange-500 bg-orange-100 text-orange-600", text: "Support for our mission efforts to spread the Gospel and serve communities." },
              ].map((cat, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl shadow-lg p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 border-t-4 ${cat.color}`}
                >
                  <div className={`w-14 h-14 ${cat.color.split(" ")[1]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${cat.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Give;
