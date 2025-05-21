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
        const seconds = time.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
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
            <div className="absolute top-10 left-8 text-white text-4xl font-mono tracking-widest">
                FOCUSIFY
            </div>

            {/* Quote Random - pojok kanan atas */}
            <div className="absolute top-10 right-10 text-white text-sm md:text-2xl italic text-right max-w-xs">
                "{quote}"
            </div>

            {/* Time Display */}
            <div className="flex flex-col items-center justify-center flex-grow text-white text-center mb-20">
                <BlurText
                    text={getGreeting()}
                    delay={150}
                    className="mt-6 text-4xl font-serif text-white mb-4"
                />
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    delay={200}
                    config={{ tension: 100, friction: 40 }}
                >
                    <h2 className="text-9xl font-bold p-">{formatTime(currentTime)}</h2>
                </AnimatedContent>
            </div>

            {/* Navigation Icons */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-800/70 text-white flex gap-6 px-6 py-2 rounded-t-xl shadow-md">
                {/* Home - Landing Page */}
                <button onClick={() => navigate('/')}>
                    <House size={32} />
                </button>

                {/* Realtime Page */}
                <button onClick={() => navigate('/realtime')}>
                    <GlobeHemisphereWest size={32} />
                </button>

                {/* Timer Page (this page) */}
                <button onClick={() => navigate('/timerpage')}>
                    <Timer size={32} />
                </button>
            </div>
        </div>
    );
};

export default RealtimePage;
