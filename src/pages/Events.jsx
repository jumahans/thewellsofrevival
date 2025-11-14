import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Events() {
  // === EVENT DATA ===
  const eventsData = [
    {
      id: 1,
      title: "Worship Night",
      category: "worship",
      month: "june",
      day: 15,
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      description: "Join us for an evening of powerful worship and praise as we lift up the name of Jesus.",
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Prayer Meeting",
      category: "prayer",
      month: "june",
      day: 22,
      time: "6:00 AM - 8:00 AM",
      location: "Prayer Room",
      description: "Start your day with powerful prayer and intercession for our community and nation.",
      color: "bg-green-600",
    },
    {
      id: 3,
      title: "Youth Conference",
      category: "youth",
      month: "july",
      day: 5,
      time: "2:00 PM - 6:00 PM",
      location: "Youth Hall",
      description: "An inspiring conference designed to empower and equip young people for their destiny.",
      color: "bg-purple-600",
    },
    {
      id: 4,
      title: "Family Fun Day",
      category: "family",
      month: "july",
      day: 12,
      time: "10:00 AM - 4:00 PM",
      location: "Church Grounds",
      description: "A day of fun activities, games, and fellowship for the whole family to enjoy together.",
      color: "bg-orange-600",
    },
    {
      id: 5,
      title: "Community Outreach",
      category: "outreach",
      month: "august",
      day: 20,
      time: "9:00 AM - 3:00 PM",
      location: "Local Community",
      description: "Join us as we serve our community through various outreach activities and share God's love.",
      color: "bg-red-600",
    },
    {
      id: 6,
      title: "Revival Service",
      category: "worship",
      month: "august",
      day: 27,
      time: "6:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      description: "Experience the power of God in this special revival service with healing and miracles.",
      color: "bg-indigo-600",
    },
  ];

  // === FILTERS & PAGINATION ===
  const [filters, setFilters] = useState({ category: "all", month: "all" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredEvents = eventsData.filter((event) => {
    return (
      (filters.category === "all" || event.category === filters.category) &&
      (filters.month === "all" || event.month === filters.month)
    );
  });

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // === COUNTDOWN LOGIC ===
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-04-05T09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const brukar = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds: brukar });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

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
              url('images/events.webp')
            `,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Upcoming Events
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white animate-fade-in">
              Join us for life-changing experiences
            </p>
          </div>
        </section>

        {/* ==================== FEATURED EVENT ==================== */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  Featured Event
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Family Sunday 2025 April</h2>
                <div className="space-y-3 text-white/90">
                  <p className="flex items-center text-sm sm:text-base">
                    <i className="fas fa-calendar-alt mr-3"></i>
                    April 5<sup>th</sup>, 2025
                  </p>
                  <p className="flex items-center text-sm sm:text-base">
                    <i className="fas fa-clock mr-3"></i>
                    9:00 AM - 12:00 PM
                  </p>
                  <p className="flex items-center text-sm sm:text-base">
                    <i className="fas fa-map-marker-alt mr-3"></i>
                    Wells of Revival Church, Thika
                  </p>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Join us for our powerful worship, anointed preaching, and life-changing encounters with God. 
                  Speakers include Bishop John Ayisi. Don't miss this opportunity to experience a fresh outpouring of the Holy Spirit!
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Event Starts In:</h3>
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { value: countdown.days, label: "Days" },
                    { value: countdown.hours, label: "Hours" },
                    { value: countdown.minutes, label: "Minutes" },
                    { value: countdown.seconds, label: "Seconds" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/20 rounded-lg p-3 sm:p-4">
                      <span className="block text-2xl sm:text-3xl font-bold">
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span className="text-xs sm:text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FILTERS ==================== */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="w-full sm:w-auto">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="all">All Categories</option>
                  <option value="worship">Worship</option>
                  <option value="prayer">Prayer</option>
                  <option value="youth">Youth</option>
                  <option value="family">Family</option>
                  <option value="outreach">Outreach</option>
                </select>
              </div>

              <div className="w-full sm:w-auto">
                <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
                  Month
                </label>
                <select
                  id="month"
                  value={filters.month}
                  onChange={(e) => setFilters({ ...filters, month: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="all">All Months</option>
                  <option value="june">June 2025</option>
                  <option value="july">July 2025</option>
                  <option value="august">August 2025</option>
                  <option value="september">September 2025</option>
                </select>
              </div>

              <div className="flex items-end w-full sm:w-auto">
                <button
                  onClick={() => {
                    setFilters({ category: "all", month: "all" });
                    setCurrentPage(1);
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== EVENTS GRID ==================== */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            {paginatedEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No events match your filters. Try adjusting them.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
                  {paginatedEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`${event.color} text-white p-4 text-center`}>
                        <span className="block text-3xl font-bold">{event.day}</span>
                        <span className="text-sm">{event.month.charAt(0).toUpperCase() + event.month.slice(1)}</span>
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                        <div className="space-y-2 text-gray-600 text-sm mb-4">
                          <p className="flex items-center">
                            <i className="fas fa-clock mr-2"></i>
                            {event.time}
                          </p>
                          <p className="flex items-center">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {event.location}
                          </p>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
                        >
                          Learn More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${
                          currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Events;