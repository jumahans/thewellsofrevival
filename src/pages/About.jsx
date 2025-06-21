import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

function About(){
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
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 z-0">
                        <img src="images/praise.jpg" alt="Church" className="w-full h-full object-cover" />
                        <div className="absolute inset-0  bg-opacity-50"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black animate-fade-in">
                            Our Story
                        </h1>
                        <p className="text-xl md:text-2xl text-red-500 font-extrabold animate-fade-in">
                            Transforming Lives Through Christ's Love
                        </p>
                    </div>
                </section>

                {/* Church History & Mission */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                                    Our History & Mission
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        The wells of revival Ministry came into being as a result of God speaking to Rev. John Ayisi and his wife Pastor Joyce Ayisi. The first sunday service was held on 24<sup>th</sup> Nov 2001.
                                    </p>
                                    <p>
                                        The Ministry was born out of a call of god upon His servant to raise up men and women of integrity & character who will be a beginning of a new generation wherever they are.
                                    </p>
                                    <p>
                                        Overturning the purpose of the enemy through spiritual warfare, changing the history and destiny of their people and becoming an instrument of strength and encouragement to God's people through strategic praying and declaration of the word in the name of Jesus Christ of Nazareth.
                                    </p>
                                    <p>
                                        This becomes the hub of God's will and purpose for the ministry. A clear vision was realized, recognizing that the primary mandate for the mission of the church was to evangelize, teach and train God called workers.
                                    </p>
                                    <p>
                                        The driving force behind the success of the wells of revival ministry has been prayer and the preaching of the solid word of God and the naked cross of Jesus Christ.
                                    </p>
                                    <p>
                                        Over the years, we have witnessed countless lives transformed through the power of God's Word and the fellowship of believers. Our congregation has grown not just in numbers but in spiritual depth and community impact.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img 
                                    src="images/church_image.webp" 
                                    alt="Church History"
                                    className="w-full max-w-md rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Vision & Values */}
                <section id="beliefs" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                What We Believe
                            </h2>
                            <p className="text-xl text-gray-600">
                                Our Foundation of Faith
                            </p>
                        </div>
                        
                        <div className="space-y-16">
                            {/* Tenets of Faith */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                                    Tenets of Faith
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            icon: "fas fa-cross",
                                            title: "God the Creator",
                                            text: "We believe in God the creator of heaven and earth and all therein.",
                                            verse: "(Gen 1:1-2, Ex 20:11, 1 Sam 2:8-2, 2 Kings 19:6, 1 Chron 16:26)"
                                        },
                                        {
                                            icon: "fas fa-dove",
                                            title: "The Trinity",
                                            text: "We believe in God consisting of the Father, Son and Holy Spirit (Trinity).",
                                            verse: "(2 Cor 13:14)"
                                        },
                                        {
                                            icon: "fas fa-heart",
                                            title: "Jesus Christ",
                                            text: "We believe in the deity of Jesus Christ, in His virgin birth, in His atoning death, in His bodily resurrection, in His ascension to the right hand of the Father.",
                                            verse: "(1 Tim 3:16)"
                                        },
                                        {
                                            icon: "fas fa-book-open",
                                            title: "The Bible",
                                            text: "We believe in the Bible as the inspired, infallible and authoritative word of God.",
                                            verse: "(2 Peter 1:21)"
                                        },
                                        {
                                            icon: "fas fa-user",
                                            title: "Salvation",
                                            text: "We believe that man was created in the image of God, fell from the glory of God through sin and therefore needs salvation.",
                                            verse: "(Gen 1:2, Rom 3:26, Rom 5)"
                                        },
                                        {
                                            icon: "fas fa-fire",
                                            title: "Holy Spirit Baptism",
                                            text: "We believe in the baptism of the Holy Spirit and the manifestation, gifts, ministries and fruit of the Spirit in life.",
                                            verse: "(Acts 2:4, Acts 10:46, Acts 19:16, 1 Cor 12:8-11, Gal 5:22-23)"
                                        },
                                        {
                                            icon: "fas fa-shield-alt",
                                            title: "Divine Protection",
                                            text: "We believe in the protection and security of God for every believer who shall maintain a holy walk in the Spirit.",
                                            verse: "(Jude 2, Rom 8:4)"
                                        },
                                        {
                                            icon: "fas fa-hands-helping",
                                            title: "Divine Healing",
                                            text: "We believe in divine healing which is obtained on the basis of the atonement.",
                                            verse: "(Ps 103:3, James 5:14-16, 1 Peter 2:24)"
                                        },
                                        {
                                            icon: "fas fa-crown",
                                            title: "Second Coming",
                                            text: "We believe in the bodily return of our Saviour and Lord Jesus Christ in great power and glory at the close of the present age.",
                                            verse: "(Dan 7:14, Acts 1:11, 1 Thess 4:13-18)"
                                        },
                                        {
                                            icon: "fas fa-infinity",
                                            title: "Resurrection",
                                            text: "We believe in the resurrection of both the saved and the lost. The saved unto eternal life and the lost unto eternal punishment.",
                                            verse: "(John 5:28-29, 1 Cor 15:51-55, 1 Thess 4:13-18)"
                                        },
                                        {
                                            icon: "fas fa-ring",
                                            title: "Marriage",
                                            text: "We believe in the sanctity of marriage and the biblical view on monogamy (one man, one wife) as the ideal form of marriage.",
                                            verse: "(Gen 2:24, Matt 5:27, Mark 10:7-9, Rom 7:2, 1 Cor 7:10-11, Heb 13:4)"
                                        },
                                        {
                                            icon: "fas fa-baby",
                                            title: "Child Dedication",
                                            text: "We believe in the dedication of infants by the laying of hands.",
                                            verse: "(1 Sam 1:24-28)"
                                        },
                                        {
                                            icon: "fas fa-bread-slice",
                                            title: "Lord's Supper",
                                            text: "We believe in the fellowship of the Lord's Supper.",
                                            verse: "(Matt 26:26, Mark 14:22, Luke 22:19-20, 1 Cor 10:16, 1 Cor 11:23)"
                                        },
                                        {
                                            icon: "fas fa-bolt",
                                            title: "Spiritual Authority",
                                            text: "We believe in God as the supreme power and authority over the heavens and the earth and that He has delegated power and authority through our Lord Jesus Christ to believers who can now claim victory over Satan and demonic forces of darkness.",
                                            verse: "(Luke 10:19, Mark 6:7, Mark 16:17)"
                                        }
                                    ].map((belief, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex items-start space-x-4">
                                                <div className="flex-shrink-0">
                                                    <i className={`${belief.icon} text-2xl text-blue-600`}></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                                        {belief.title}
                                                    </h4>
                                                    <p className="text-gray-600 text-sm mb-2">
                                                        {belief.text}
                                                    </p>
                                                    <p className="text-blue-600 text-xs italic">
                                                        {belief.verse}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Scope of Authority */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                                    Scope of Authority
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        "We believe that the kingdom of God's government is theocratic, Christ being sovereign and reigning head who builds, governs and sets her in order through leadership ministry of apostles, prophets, evangelists, pastors and teachers.",
                                        "We believe the church must have a person of Christ's appointing as the spiritual leader as discerned by the church leadership.",
                                        "We know that democracy is not an appropriate form of government for the New Testament church as it is not supported by God's pattern shown in the Holy Scriptures.",
                                        "Leaders shall be appointed according to gifting, grace and calling. This shall be done by the relevant authorities as stipulated in this document.",
                                        "We pursue family covenant relationships which we believe to be the true pattern for New Testament church."
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {item}
                                                </p>
                                                {index === 4 && (
                                                    <div className="mt-3">
                                                        <p className="text-gray-600 mb-2">
                                                            There are three (3) ministry structures in the Wells of Revival Ministry:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                                            <li>Local church structure</li>
                                                            <li>Regional council</li>
                                                            <li>National council</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Principle of Autonomy */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                                    Principle of Autonomy
                                </h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        We hold as Scripture and fundamental the principle of local church government by men and women of character and integrity according to <em className="text-blue-600">(1 Tim 3, Titus 1:5-9)</em> that is, the local church is sovereign under Christ's headship and all ecclesiastical power is exercised by each one of these churches assembled as a congregation.
                                    </p>
                                    <p>
                                        Decisions made must be according to the biblical principles, this ministers manual and the constitution.
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

export default About;
