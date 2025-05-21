import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import backgroundTimerDesktop from "../assets/backgroundTimer.jpg";
import backgroundTimerMobile from "../assets/FindMobile.jpg";
import AnimatedContent from "../components/AnimatedContent";
import BlurText from "../components/BlurText";

const RealtimePage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [username, setUsername] = useState("");
    const [quote, setQuote] = useState("");

    const quotes = [
        "Fokus adalah kunci kesuksesan.",
        "Sedikit demi sedikit menjadi bukit.",
        "Mulailah dari sekarang, jangan tunda.",
        "Kerja keras tidak akan mengkhianati hasil.",
        "Hari ini adalah kesempatan baru.",
        "Kesabaran adalah kekuatan."
    ];

    useEffect(() => {
        const storedName = localStorage.getItem("username") || "Guest";
        setUsername(storedName);

        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Set random quote on load
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    };


    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour >= 5 && hour < 12) return `Selamat Pagi, ${username}. Sudah Sarapan kah?`;
        if (hour >= 12 && hour < 15) return `Udah Siang nih, ${username}. Tetap Fokus yaa!`;
        if (hour >= 15 && hour < 18) return `Senja Telah Tiba, ${username}. Hampir Selesai!`;
        return `Sudah Malam , ${username}. Jangan sering bergadang!!`;
    };

    return (
        <div
            className="fixed inset-0 flex flex-col w-screen h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${window.innerWidth <= 768 ? backgroundTimerMobile : backgroundTimerDesktop})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Logo */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-2xl md:translate-x-0 md:left-6 md:text-left md:text-4xl font-mono tracking-widest">
                FOCUSIFY
            </div>

            {/* Quote Random */}
            <div className="absolute top-[58px] left-1/2 -translate-x-1/2 text-white text-xl italic text-center max-w-[200px] md:top-6 md:left-270 md:right-0 md:text-2xl md:text-right md:max-w-xs">
                "{quote}"
            </div>

            {/* Time Display */}
            <div className="flex flex-col items-center justify-center flex-grow text-white text-center mb-28 px-6">
                <BlurText
                    text={getGreeting()}
                    delay={150}
                    className="mt-6 text-xl md:text-4xl font-serif text-white mb-4"
                />
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    delay={200}
                    config={{ tension: 100, friction: 40 }}
                >
                    <h2 className="text-8xl md:text-9xl font-bold">{formatTime(currentTime)}</h2>
                </AnimatedContent>
            </div>


            {/* Navigation Icons */}
            <div className="absolute bottom-0 left-0 w-full max-w-md mx-auto flex justify-around px-6 py-3  md:mb-0 bg-blue-800/70 text-white rounded-t-xl shadow-md md:bottom-6 md:left-1/2 md:transform md:-translate-x-1/2 md:w-auto md:gap-6 md:px-6 md:py-2 md:rounded-t-xl">
                {/* Home - Landing Page */}
                <button onClick={() => window.location.href = '/'} className="hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7m-9 11v-6h4v6m5-6h2a2 2 0 002-2V7a2 2 0 00-.586-1.414l-8-8a2 2 0 00-2.828 0l-8 8A2 2 0 001 7v7a2 2 0 002 2h2" />
                    </svg>
                </button>

                {/* Daun - Realtime */}
                <button onClick={() => window.location.href = '/realtime'} className="hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C7 2 3 6 3 11c0 4.418 3.582 8 8 8 5 0 9-4 9-9 0-4-4-8-8-8zM5 15c1.5-2 3.5-3 6-3s4.5 1 6 3" />
                    </svg>
                </button>

                {/* Lampu - Timer */}
                <button onClick={() => window.location.href = '/timerpage'} className="hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 2v2m6-2v2M4.22 4.22l1.42 1.42M18.36 5.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8zM12 20v2m-6-2a6 6 0 0012 0" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default RealtimePage;
