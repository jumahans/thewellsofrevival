import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Sermons() {
  // === SERMON DATA ===
  const sermonsData = [
    {
      id: 1,
      title: "JUST BELIEVE",
      speaker: "bishop-ayisi",
      speakerName: "Bishop Ayisi",
      topic: "faith",
      series: "revival",
      youtubeId: "PCKcofkScOs?si=ayfM_oXC2iPUbV1U",
      description: "Faith moves mountains—just believe, and watch God do the impossible.",
    },
    {
      id: 2,
      title: "THE LOVE OF GOD",
      speaker: "guest-speaker",
      speakerName: "Bishop John Ayisi",
      topic: "prayer",
      series: "purpose",
      youtubeId: "uuNFagALYJI?si=RGbEIBlxWjHU76YZ",
      description: "God's love never fails, never leaves, and never gives up on you—it's forever.",
    },
    {
      id: 3,
      title: "KUFIKA KWENYE UWEPO",
      speaker: "bishop-ayisi",
      speakerName: "Bishop Ayisi",
      topic: "holy-spirit",
      series: "revival",
      youtubeId: "hWDrVvnI5T4?si=uhc4an6AcdRV3UHW",
      description: "Peace, power, and purpose await in God's presence—draw near and be transformed.",
    },
    {
      id: 4,
      title: "TURNING TO GOD IN TIME OF TROUBLE",
      speaker: "bishop-ayisi",
      speakerName: "Bishop Ayisi",
      topic: "family",
      series: "purpose",
      youtubeId: "h9p39UTR6FE?si=eKm8ImS_-3XebZhE",
      description: "When storms rise, don't run away—run to God. He's your refuge and strength.",
    },
  ];

  // === FILTER STATE ===
  const [filters, setFilters] = useState({
    speaker: "all",
    topic: "all",
    series: "all",
  });

  const [filteredSermons, setFilteredSermons] = useState(sermonsData);

  // === FILTER LOGIC ===
  useEffect(() => {
    let filtered = sermonsData;

    if (filters.speaker !== "all") {
      filtered = filtered.filter((s) => s.speaker === filters.speaker);
    }
    if (filters.topic !== "all") {
      filtered = filtered.filter((s) => s.topic === filters.topic);
    }
    if (filters.series !== "all") {
      filtered = filtered.filter((s) => s.series === filters.series);
    }

    setFilteredSermons(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* ==================== HERO ==================== */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/sermons.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Sermons & Teachings
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white animate-fade-in">
              Grow in faith through the Word of God
            </p>
          </div>
        </section>

        {/* ==================== FILTERS ==================== */}
        <section className="py-10 sm:py-12 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center sm:text-left">
                Filter Sermons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="speakers" className="block text-sm font-medium text-gray-700 mb-1">
                    Speaker
                  </label>
                  <select
                    id="speakers"
                    name="speaker"
                    value={filters.speaker}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="all">All Speakers</option>
                    <option value="bishop-ayisi">Bishop Ayisi</option>
                    <option value="guest-speaker">Guest Speakers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="topics" className="block text-sm font-medium text-gray-700 mb-1">
                    Topic
                  </label>
                  <select
                    id="topics"
                    name="topic"
                    value={filters.topic}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="all">All Topics</option>
                    <option value="faith">Faith</option>
                    <option value="prayer">Prayer</option>
                    <option value="holy-spirit">Holy Spirit</option>
                    <option value="family">Family</option>
                    <option value="healing">Healing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="series" className="block text-sm font-medium text-gray-700 mb-1">
                    Series
                  </label>
                  <select
                    id="series"
                    name="series"
                    value={filters.series}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="all">All Series</option>
                    <option value="revival">Path to Revival</option>
                    <option value="purpose">Discovering Your Purpose</option>
                    <option value="faith">Faith That Moves Mountains</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => setFilters({ speaker: "all", topic: "all", series: "all" })}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FEATURED SERMON ==================== */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Featured Message
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/od-5iVUk994?si=BXYk8gu4niPRzDz0"
                      title="Featured Sermon: There Is Hope"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      There Is Hope
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <i className="fas fa-user mr-2"></i>
                      <span className="font-semibold">Bishop John Ayisi</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      In times of uncertainty and challenge, discover the unwavering hope that comes from faith in God. This powerful message reminds us that no matter what we face, there is always hope in Christ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== RECENT SERMONS ==================== */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Recent Sermons
            </h2>

            {filteredSermons.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No sermons match your filters. Try adjusting them.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {filteredSermons.map((sermon) => (
                  <div
                    key={sermon.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                        title={sermon.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        {sermon.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="fas fa-user mr-2 text-sm"></i>
                        <span className="font-medium text-sm">{sermon.speakerName}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-snug">
                        {sermon.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sermons;