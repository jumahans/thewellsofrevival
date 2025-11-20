import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageLoadStatus, setImageLoadStatus] = useState({});
    const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

    const heroImages = [
        "image/22.jpg", "image/14.jpg", "image/15.jpg", "image/30.jpg",
        "image/28.jpg", "image/19.jpg", "image/20.jpg", "image/27.jpg"
    ];

    const galleryImages = [
        "image/27.jpg", "images/fb2.jpg", "images/youth.jpg", "images/pastor2.jpg",
        "images/pastor1.jpg", "image/15.jpg", "image/14.jpg", "image/19.jpg",
        "image/20.jpg", "images/fb1.jpg", "image/22.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const handleImageLoad = (imagePath) => {
        setImageLoadStatus(prev => ({ ...prev, [imagePath]: 'loaded' }));
    };

    const handleImageError = (imagePath) => {
        setImageLoadStatus(prev => ({ ...prev, [imagePath]: 'error' }));
    };

    const openGalleryModal = (index) => setSelectedGalleryImage(index);
    const closeGalleryModal = () => setSelectedGalleryImage(null);

    const LazyGallery = () => {
        const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
            rootMargin: "300px",
        });

        return (
            <div ref={ref} className="absolute inset-0 flex items-center justify-center perspective-[1500px]">
                {inView ? (
                    galleryImages.map((src, i) => {
                        const rot = -5 + Math.random() * 10;
                        const tx = -60 + Math.random() * 120;
                        const ty = -40 + Math.random() * 80;

                        return (
                            <motion.div
                                key={src + i}
                                className="absolute cursor-pointer select-none"
                                style={{ zIndex: galleryImages.length - i }}
                                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                                animate={{
                                    opacity: 1,
                                    x: tx,
                                    y: i * 14 + ty,
                                    rotate: rot,
                                    scale: 1 - i * 0.045,
                                }}
                                transition={{ delay: i * 0.09, duration: 0.9, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.15,
                                    y: ty - 70,
                                    rotate: rot * 1.7,
                                    zIndex: 999,
                                    transition: { duration: 0.35 }
                                }}
                                onClick={() => openGalleryModal(i)}
                            >
                                <div className="bg-white p-5 md:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-200">
                                    <img
                                        src={src}
                                        alt={`Gallery ${i + 1}`}
                                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl pointer-events-none shadow-md"
                                        draggable={false}
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                    />
                                </div>
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="text-2xl text-gray-500 animate-pulse">
                        Loading gallery...
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <Header />
            <main>
                {/* HERO - unchanged */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
                    <div className="absolute inset-0 z-0">
                        {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {/* This is the magic line */}
                            <img
                            src={image}
                            alt={`Church hero ${index + 1}`}
                            className="w-full h-full object-contain object-center"
                            style={{ background: 'black' }} // black bars instead of stretch/crop
                            onLoad={() => handleImageLoad(image)}
                            onError={() => handleImageError(image)}
                            />
                        </div>
                        ))}

                        {/* Dark overlay so text stays readable on bright images */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="flex space-x-3 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                        {heroImages.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/60 hover:bg-white/90'
                            }`}
                            />
                        ))}
                        </div>
                    </div>

                    {/* Hero Text – looks even better now */}
                    <div className="relative z-20 container mx-auto px-6 text-center text-white">
                        <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl"
                        >
                        Welcome to Wells of Revival
                        </motion.h1>

                        <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-lg md:text-2xl lg:text-3xl italic font-light tracking-wide drop-shadow-lg"
                        >
                        " Raising eagles in the Kingdom, Men and Women of character and integrity "
                        </motion.p>
                    </div>
                </section>

                {/* VIDEO GRID - unchanged */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                            Experience Our Worship
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <video className="w-full h-120 object-cover" controls loop poster="tbh/fv.png">
                                    <source src="videos/Vid2.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <video className="w-full h-120 object-cover" controls loop poster="tbh/inst1.png">
                                    <source src="videos/Inst1.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <video className="w-full h-120 object-cover" controls loop poster="tbh/inst2.png">
                                    <source src="videos/Inst2.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PASTOR SECTION - 100% ORIGINAL TEXT RESTORED */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                            Our Leadership
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center">
                                <div className="relative inline-block">
                                    <img
                                        src="images/pastor2.jpg"
                                        alt="Bishop John Ayisi"
                                        className="w-120 h-120 rounded-full object-cover object-center mx-auto shadow-lg"
                                    />
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold text-gray-800">Bishop John Ayisi</h3>
                                    <p className="text-lg text-gray-600">Lead Pastor</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800">A Message from Our Pastor</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Welcome to Wells of Revival! We are a community of believers dedicated to
                                    experiencing God's presence and transforming lives through the power of His Word.
                                    We invite you to join us as we seek revival in our hearts, homes, and community.
                                </p>
                                <a
                                    href="/about"
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE TIMES - unchanged */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                            Join Us in Worship
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                                <i className="fas fa-church text-4xl text-blue-600 mb-4"></i>
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">Sunday Service</h3>
                                <div className="space-y-4">
                                    <div>
                                        <hr className="border-gray-300 mb-4" />
                                        <p className="text-gray-600">First service 8:00 AM - 9:30 AM</p>
                                        <hr className="border-gray-300 mt-4" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Second service 10:00 AM - 11:30 AM</p>
                                        <hr className="border-gray-300 mt-4" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Discipleship/mentorship Classes - 11:45 AM - 12:30 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                                <i className="fas fa-pray text-4xl text-blue-600 mb-4"></i>
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">Fellowship Meetings</h3>
                                <div>
                                    <hr className="border-gray-300 mb-4" />
                                    <p className="text-gray-600">
                                        Diaspora fellowship on Wednesday<br />
                                        9:00 PM - 9:30 PM
                                    </p>
                                    <hr className="border-gray-300 mb-4"/>
                                    <p className="text-gray-600">
                                        Township fellowship<br />
                                        5:30 PM - 7:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FIXED GALLERY - ONLY PERFORMANCE CHANGE */}
                <section className="py-20 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                            Our Church Gallery
                        </h2>
                        <div className="relative h-[600px] md:h-[800px] max-w-7xl mx-auto overflow-visible bg-gradient-to-br from-blue-50 via-transparent to-pink-50 rounded-3xl">
                            <LazyGallery />
                        </div>
                    </div>
                </section>

                {/* MODAL - 100% unchanged */}
                <AnimatePresence>
                    {selectedGalleryImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                            onClick={closeGalleryModal}
                        >
                            <button onClick={closeGalleryModal} className="absolute top-5 right-5 text-white text-5xl hover:text-gray-400 z-10">×</button>

                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length); }}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-10"
                            >‹</button>

                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedGalleryImage((prev) => (prev + 1) % galleryImages.length); }}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-10"
                            >›</button>

                            <div className="w-full h-full flex items-center justify-center">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.img
                                        key={selectedGalleryImage}
                                        src={galleryImages[selectedGalleryImage]}
                                        alt="Full view"
                                        initial={{ rotateY: 65, opacity: 0 }}
                                        animate={{ rotateY: 0, opacity: 1 }}
                                        exit={{ rotateY: -65, opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 80, damping: 25 }}
                                        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-4xl"
                                        onClick={(e) => e.stopPropagation()}
                                        draggable={false}
                                    />
                                </AnimatePresence>
                            </div>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-lg">
                                {selectedGalleryImage + 1} / {galleryImages.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* MAP - unchanged */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                            Find Us
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800">Wells of Revival Church</h3>
                                <div className="space-y-4">
                                    <p className="flex items-center text-gray-600">
                                        <i className="fas fa-map-marker-alt mr-3 text-blue-600"></i>
                                        Majengo, Thika, Kenya
                                    </p>
                                    <p className="flex items-center text-gray-600">
                                        <i className="fas fa-phone mr-3 text-blue-600"></i>
                                        <a href="tel:+254727502355" className="hover:text-blue-600 transition-colors">
                                            +254-727-502-355
                                        </a>
                                    </p>
                                    <p className="flex items-center text-gray-600">
                                        <i className="fas fa-envelope mr-3 text-blue-600"></i>
                                        <a href="mailto:thewellsofrevival.ke@gmail.com" className="hover:text-blue-600 transition-colors">
                                            thewellsofrevival.ke@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.499096747871!2d37.08165767404412!3d-1.0362134354020058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e62b53da841%3A0xbed071bf1770a28c!2sWells%20of%20Revival%20Ministries!5e1!3m2!1sen!2ske!4v1748000445027!5m2!1sen!2ske"
                                    className="w-full h-full border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;




















// import React, { useState, useEffect } from "react";
// import Header from "../Header";
// import Footer from "../Footer";

// import { motion, AnimatePresence } from "framer-motion";

// function Home(){
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [imageLoadStatus, setImageLoadStatus] = useState({});
//     const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
        
//     const heroImages = [
//         "image/22.jpg",
//         "image/14.jpg", 
//         "image/15.jpg",
//         "image/30.jpg",
//         "image/28.jpg",
//         "image/19.jpg",
//         "image/20.jpg",
//         "image/27.jpg"
//     ];

//     const galleryImages = [
//         "image/27.jpg", "images/fb2.jpg", "images/youth.jpg", "images/pastor2.jpg",
//         "images/pastor1.jpg", "image/15.jpg", "image/14.jpg", "image/19.jpg",
//         "image/20.jpg", "images/fb1.jpg", "image/22.jpg"
//     ];

//     // Auto-advance slideshow
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => 
//                 (prevIndex + 1) % heroImages.length
//             );
//         }, 4000);
//         return () => clearInterval(interval);
//     }, [heroImages.length]);

//     // Handle image load success
//     const handleImageLoad = (imagePath) => {
//         console.log(`✅ Image loaded successfully: ${imagePath}`);
//         setImageLoadStatus(prev => ({ ...prev, [imagePath]: 'loaded' }));
//     };

//     // Handle image load error
//     const handleImageError = (imagePath) => {
//         console.error(`❌ Failed to load image: ${imagePath}`);
//         setImageLoadStatus(prev => ({ ...prev, [imagePath]: 'error' }));
//     };

//     // Handle gallery image click
//     const openGalleryModal = (imageSrc) => {
//         setSelectedGalleryImage(imageSrc);
//     };

//     // Close gallery modal
//     const closeGalleryModal = () => {
//         setSelectedGalleryImage(null);
//     };

//     // Handle modal backdrop click
//     const handleModalBackdropClick = (e) => {
//         if (e.target === e.currentTarget) {
//             closeGalleryModal();
//         }
//     };

//     return(
//         <>
//             <Header />
//             <main>
//                 <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
//                 {/* Debug Info - Remove this after testing */}
//                 <div className="absolute top-4 left-4 z-30 bg-black bg-opacity-75 text-white p-2 rounded text-sm">
//                     <div>Current: {currentImageIndex + 1}/{heroImages.length}</div>
//                     <div>Image: {heroImages[currentImageIndex]}</div>
//                     <div>Status: {imageLoadStatus[heroImages[currentImageIndex]] || 'loading...'}</div>
//                 </div>

//                 {/* Image Slideshow Background */}
//                 <div className="absolute inset-0 z-0">
//                     {heroImages.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-1000 ${
//                         index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//                         }`}
//                     >
//                         <img 
//                         src={image}
//                         alt={`Church ${index + 1}`}
//                         className="w-full h-full object-cover object-center"
//                         onLoad={() => handleImageLoad(image)}
//                         onError={() => handleImageError(image)}
//                         />
//                     </div>
//                     ))}
//                     <div className="absolute inset-0 bg-gradient-to-b from-[rgba(44,62,80,0.6)] to-[rgba(52,73,94,0.6)] z-10"></div>
//                 </div>

//                 {/* Slideshow Navigation Dots */}
//                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//                     <div className="flex space-x-2">
//                     {heroImages.map((_, index) => (
//                         <button
//                         key={index}
//                         onClick={() => setCurrentImageIndex(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                             index === currentImageIndex
//                             ? 'bg-white scale-125'
//                             : 'bg-white bg-opacity-50 hover:bg-opacity-75'
//                         }`}
//                         />
//                     ))}
//                     </div>
//                 </div>

//                 {/* Hero Content */}
//                 <div className="relative z-10 container mx-auto px-4">
//                     <div className="text-center text-white">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-gray-100">
//                         Welcome to Wells of Revival
//                     </h1>
//                     <div className="text-xl md:text-2xl animate-pulse">
//                         <p className="italic">
//                         " Raising eagles in the Kingdom, Men and Women of character and integrity "
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//                 </section>


                

//                 {/* Video Grid Section */}
//                 <section className="py-16 bg-gray-50">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//                             Experience Our Worship
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                                 <video
//                                     className="w-full h-120 object-cover"
//                                     controls
//                                     loop
//                                     poster="tbh/fv.png"
//                                 >
//                                     <source src="videos/Vid2.mp4" type="video/mp4" />
//                                 </video>
//                             </div>
//                             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                                 <video
//                                     className="w-full h-120 object-cover"
//                                     controls
//                                     loop
//                                     poster="tbh/inst1.png"
//                                 >
//                                     <source src="videos/Inst1.mp4" type="video/mp4" />
//                                 </video>
//                             </div>
//                             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                                 <video
//                                     className="w-full h-120 object-cover"
//                                     controls
//                                     loop
//                                     poster="tbh/inst2.png"
//                                 >
//                                     <source src="videos/Inst2.mp4" type="video/mp4" />
//                                 </video>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Pastor & Leadership Section */}
//                 <section className="py-16 bg-white">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//                             Our Leadership
//                         </h2>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                             <div className="text-center">
//                                 <div className="relative inline-block">
//                                     <img
//                                         src="images/pastor2.jpg"
//                                         alt="Bishop John Ayisi"
//                                         className="w-120 h-120 rounded-full object-cover object-center mx-auto shadow-lg"
//                                     />
//                                 </div>
//                                 <div className="mt-6">
//                                     <h3 className="text-2xl font-bold text-gray-800">Bishop John Ayisi</h3>
//                                     <p className="text-lg text-gray-600">Lead Pastor</p>
//                                 </div>
//                             </div>
//                             <div className="space-y-6">
//                                 <h3 className="text-2xl font-bold text-gray-800">A Message from Our Pastor</h3>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     Welcome to Wells of Revival! We are a community of believers dedicated to
//                                     experiencing God's presence and transforming lives through the power of His Word.
//                                     We invite you to join us as we seek revival in our hearts, homes, and community.
//                                 </p>
//                                 <a
//                                     href="/about"
//                                     className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//                                 >
//                                     Read More
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Service Times Section */}
//                 <section className="py-16 bg-gray-50">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//                             Join Us in Worship
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//                             <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//                                 <i className="fas fa-church text-4xl text-blue-600 mb-4"></i>
//                                 <h3 className="text-2xl font-bold mb-6 text-gray-800">Sunday Service</h3>
//                                 <div className="space-y-4">
//                                     <div>
//                                         <hr className="border-gray-300 mb-4" />
//                                         <p className="text-gray-600">First service 8:00 AM - 9:30 AM</p>
//                                         <hr className="border-gray-300 mt-4" />
//                                     </div>
//                                     <div>
//                                         <p className="text-gray-600">Second service 10:00 AM - 11:30 AM</p>
//                                         <hr className="border-gray-300 mt-4" />
//                                     </div>
//                                     <div>
//                                         <p className="text-gray-600">Discipleship/mentorship Classes - 11:45 AM - 12:30 PM</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//                                 <i className="fas fa-pray text-4xl text-blue-600 mb-4"></i>
//                                 <h3 className="text-2xl font-bold mb-6 text-gray-800">Fellowship Meetings</h3>
//                                 <div>
//                                     <hr className="border-gray-300 mb-4" />
//                                     <p className="text-gray-600">
//                                         Diaspora fellowship on Wednesday<br />
//                                         9:00 PM - 9:30 PM
//                                     </p>
//                                     <hr className="border-gray-300 mb-4"/>
//                                     <p className="text-gray-600">
//                                         Township fellowship<br />
//                                         5:30 PM - 7:00 PM
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Church Gallery Section */}

//                 {/* === NEW FLIPBOOK-STYLE GALLERY === */}
//                 <section className="py-20 bg-gray-100"> {/* Changed from bg-white to bg-gray-100 */}
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
//                         Our Church Gallery
//                         </h2>

//                         {/* Photo Stack – NOW VISIBLE IMMEDIATELY */}
//                         <div className="relative h-[600px] md:h-[800px] max-w-7xl mx-auto overflow-visible bg-gradient-to-br from-blue-50 via-transparent to-pink-50 rounded-3xl"> {/* Added visible background */}
//                         <div className="absolute inset-0 flex items-center justify-center perspective-[1500px]">
//                             {galleryImages.map((src, i) => {
//                             const rot = -5 + Math.random() * 10;
//                             const tx = -60 + Math.random() * 120;
//                             const ty = -40 + Math.random() * 80;

//                             return (
//                                 <motion.div
//                                 key={src + i}
//                                 className="absolute cursor-pointer select-none"
//                                 style={{ zIndex: galleryImages.length - i }}
//                                 initial={{ opacity: 0, scale: 0.8, y: 100 }}
//                                 animate={{
//                                     opacity: 1,
//                                     x: tx,
//                                     y: i * 14 + ty,
//                                     rotate: rot,
//                                     scale: 1 - i * 0.045,
//                                 }}
//                                 transition={{ delay: i * 0.09, duration: 0.9, ease: "easeOut" }}
//                                 whileHover={{
//                                     scale: 1.15,
//                                     y: ty - 70,
//                                     rotate: rot * 1.7,
//                                     zIndex: 999,
//                                     transition: { duration: 0.35 }
//                                 }}
//                                 onClick={() => setSelectedGalleryImage(i)}
//                                 >
//                                 <div className="bg-white p-5 md:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-200">
//                                     <img
//                                     src={src}
//                                     alt={`Gallery ${i + 1}`}
//                                     className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl pointer-events-none shadow-md"
//                                     draggable={false}
//                                     loading="eager" // This forces images to load immediately
//                                     />
//                                 </div>
//                                 </motion.div>
//                             );
//                             })}
//                         </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* === FULLSCREEN FLIPBOOK MODAL (No external deps) === */}
//                 <AnimatePresence>
//                 {selectedGalleryImage !== null && (
//                     <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//                     onClick={() => setSelectedGalleryImage(null)}
//                     >
//                     {/* Close Button */}
//                     <button
//                         onClick={() => setSelectedGalleryImage(null)}
//                         className="absolute top-5 right-5 text-white text-5xl hover:text-gray-400 z-10"
//                     >
//                         ×
//                     </button>

//                     {/* Prev/Next Arrows */}
//                     <button
//                         onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
//                         }}
//                         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-10"
//                     >
//                         ‹
//                     </button>
//                     <button
//                         onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedGalleryImage((prev) => (prev + 1) % galleryImages.length);
//                         }}
//                         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-10"
//                     >
//                         ›
//                     </button>

//                     {/* Page Flip Animation */}
//                     <div className="w-full h-full flex items-center justify-center">
//                         <AnimatePresence mode="wait" initial={false}>
//                         <motion.img
//                             key={selectedGalleryImage}
//                             src={galleryImages[selectedGalleryImage]}
//                             alt="Full view"
//                             initial={{ rotateY: 65, opacity: 0 }}
//                             animate={{ rotateY: 0, opacity: 1 }}
//                             exit={{ rotateY: -65, opacity: 0 }}
//                             transition={{ type: "spring", stiffness: 80, damping: 25 }}
//                             className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-4xl"
//                             onClick={(e) => e.stopPropagation()}
//                             draggable={false}
//                         />
//                         </AnimatePresence>
//                     </div>

//                     {/* Counter */}
//                     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-lg">
//                         {selectedGalleryImage + 1} / {galleryImages.length}
//                     </div>
//                     </motion.div>
//                 )}
//                 </AnimatePresence>

//                 {/* Location Map Section */}
//                 <section className="py-16 bg-gray-50">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//                             Find Us
//                         </h2>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//                             <div className="space-y-6">
//                                 <h3 className="text-2xl font-bold text-gray-800">Wells of Revival Church</h3>
//                                 <div className="space-y-4">
//                                     <p className="flex items-center text-gray-600">
//                                         <i className="fas fa-map-marker-alt mr-3 text-blue-600"></i>
//                                         Majengo, Thika, Kenya
//                                     </p>
//                                     <p className="flex items-center text-gray-600">
//                                         <i className="fas fa-phone mr-3 text-blue-600"></i>
//                                         <a href="tel:+254727502355" className="hover:text-blue-600 transition-colors">
//                                             +254-727-502-355
//                                         </a>
//                                     </p>
//                                     <p className="flex items-center text-gray-600">
//                                         <i className="fas fa-envelope mr-3 text-blue-600"></i>
//                                         <a href="mailto:thewellsofrevival.ke@gmail.com" className="hover:text-blue-600 transition-colors">
//                                             thewellsofrevival.ke@gmail.com
//                                         </a>
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
//                                 <iframe
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.499096747871!2d37.08165767404412!3d-1.0362134354020058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e62b53da841%3A0xbed071bf1770a28c!2sWells%20of%20Revival%20Ministries!5e1!3m2!1sen!2ske!4v1748000445027!5m2!1sen!2ske"
//                                     className="w-full h-full border-0"
//                                     allowFullScreen=""
//                                     loading="lazy"
//                                     referrerPolicy="no-referrer-when-downgrade"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </>
//     )
// }

// export default Home;

