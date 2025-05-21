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

                {/* Home */}
                <button onClick={() => window.location.href = '/'} className="hover:scale-110 transition" title="Beranda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V20a1.25 1.25 0 01-1.25 1.25H4.25A1.25 1.25 0 013 20V9.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9" />
                    </svg>
                </button>
                {/* Realtime */}
                <button onClick={() => window.location.href = '/realtime'} className="hover:scale-110 transition" title="Realtime Calm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                </button>

                {/* Timer */}
                <button onClick={() => window.location.href = '/timerpage'} className="hover:scale-110 transition" title="Timer Fokus">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3M15 3H9M12 22a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default RealtimePage;
