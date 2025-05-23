import React, { useState, useEffect, useRef } from "react";
import backgroundTimerDesktop from "../assets/backgroundTimer.jpg";
import backgroundTimerMobile from "../assets/FindMobile.jpg";
import AnimatedContent from "../components/AnimatedContent";
import { Toaster, toast } from 'react-hot-toast';
import SettingTimer from "../components/SettingTimer"; // pastikan path-nya benar
import { PencilSimple } from "phosphor-react";



const TimerPage = () => {
    const name = localStorage.getItem('username') || 'Guest';

    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('fokus'); // fokus | istirahat
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes default
    const timerRef = useRef(null);

    const [customTitle, setCustomTitle] = useState('Apa yang mau kamu lakukan hari ini?');
    const [isEditingTitle, setIsEditingTitle] = useState(false);

    const [showSettings, setShowSettings] = useState(false);
    const [customTimes, setCustomTimes] = useState({
        fokus: 30,
        istirahat: 5,
        istirahatPanjang: 10,
    });


    const toggleTimer = () => {
        setIsRunning((prev) => !prev);
    };

    const switchMode = (newMode) => {
        setMode(newMode);
        setIsRunning(false);
        setTimeLeft(customTimes[newMode] * 60);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(customTimes[mode] * 60);
    };

    const handleAutoSwitch = () => {
        // buat objek audio
        const notifSound = new Audio('/sounds/notif.mp3'); 
        notifSound.play(); // mainkan suara
        if (mode === 'fokus') {
            toast.success('🎯 Waktu Fokus selesai! Saatnya istirahat.', {
                duration: 5000,
                position: 'top-center',
                style: {
                    background: '#2563eb', // biru
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    borderRadius: '10px',
                    padding: '12px 20px',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.6)',
                },
            });
            setMode('istirahat');
            setTimeLeft(customTimes.istirahat * 60);
            setIsRunning(true);  // langsung lanjut auto play
        } else if (mode === 'istirahat') {
            toast.success('☕ Waktu Istirahat selesai! Yuk lanjut fokus.', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#059669', // hijau
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    borderRadius: '10px',
                    padding: '12px 20px',
                    boxShadow: '0 4px 14px rgba(5, 150, 105, 0.6)',
                },
            });
            setMode('fokus');
            setTimeLeft(customTimes.fokus * 60);
            setIsRunning(true);
        }
    };



    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        handleAutoSwitch(); // ← panggil di sini
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning, mode, customTimes]);


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes} : ${seconds}`;
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center w-screen h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${window.innerWidth <= 768
                    ? backgroundTimerMobile
                    : backgroundTimerDesktop
                    })`,
                backgroundSize: "cover",

                backgroundPosition: "center",
            }}
        >
            <div>
                <Toaster position="top-center" reverseOrder={false} />

            </div>

            {/* Logo */}
            <div className="absolute top-6 left-6 text-white text-2xl md:text-4xl font-mono tracking-widest">
                FOCUSIFY
            </div>

            {/* Main vertical container */}
            <AnimatedContent
                distance={50}
                direction="vertical"
                delay={200}
                config={{ tension: 100, friction: 40 }}
            >
                <div className="flex flex-col items-center text-white px-4 space-y-6">
                    {/* Customizable Title */}
                    <div className="flex items-center gap-2 text-center font-sans text-xl font-medium">
                        {isEditingTitle ? (
                            <input
                                value={customTitle}
                                onChange={(e) => setCustomTitle(e.target.value)}
                                onBlur={() => setIsEditingTitle(false)}
                                className="bg-transparent border-b border-white text-white  placeholder-white text-center focus:outline-none"
                                autoFocus
                            />
                        ) : (
                            <p className="text-xl md:text-base flex items-center gap-2">
                                {customTitle}{' '}
                                <button onClick={() => setIsEditingTitle(true)}>
                                    <PencilSimple size={20} />
                                </button>
                            </p>
                        )}
                    </div>

                    {/* Mode buttons */}
                    <div className="flex space-x-2">
                        <button
                            className={`px-5 py-3 rounded-full border text-sm md:text-base ${mode === 'fokus' ? 'bg-blue-700 text-black' : 'border-white text-white'}`}
                            onClick={() => switchMode('fokus')}
                        >
                            Fokus
                        </button>
                        <button
                            className={`px-5 py-3 rounded-full border text-sm md:text-base ${mode === 'istirahat' ? 'bg-blue-700 text-black' : 'border-white text-white'}`}
                            onClick={() => switchMode('istirahat')}
                        >
                            Istirahat
                        </button>
                    </div>

                    {/* Timer */}
                    <h2 className="text-8xl md:text-9xl font-bold mb-15">{formatTime(timeLeft)}</h2>

                    {/* Control buttons */}
                    <div className="flex space-x-4 items-center">
                        <button
                            className="bg-white/20 backdrop-blur px-6 py-2 rounded-lg font-medium hover:opacity-90"
                            onClick={toggleTimer}
                        >
                            {isRunning ? 'Hentikan' : 'Mulai'}
                        </button>
                        <button
                            onClick={resetTimer}
                            className="text-3xl md:text-4xl hover:scale-110 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M88,104H40a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V76.69L62.63,62.06A95.43,95.43,0,0,1,130,33.94h.53a95.36,95.36,0,0,1,67.07,27.33,8,8,0,0,1-11.18,11.44,79.52,79.52,0,0,0-55.89-22.77h-.45A79.56,79.56,0,0,0,73.94,73.37L59.31,88H88a8,8,0,0,1,0,16Zm128,48H168a8,8,0,0,0,0,16h28.69l-14.63,14.63a79.56,79.56,0,0,1-56.13,23.43h-.45a79.52,79.52,0,0,1-55.89-22.77,8,8,0,1,0-11.18,11.44,95.36,95.36,0,0,0,67.07,27.33H126a95.43,95.43,0,0,0,67.36-28.12L208,179.31V208a8,8,0,0,0,16,0V160A8,8,0,0,0,216,152Z"></path></svg>
                        </button>
                    </div>
                </div>
            </AnimatedContent>

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

            {/* Settings icon */}
            <div className="absolute top-6 right-10 bg-blue-800/70 p-1 rounded-xl shadow-md text-white z-30">
                <button onClick={() => setShowSettings(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.397-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.142-.854-.108-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </button>
            </div>

            {/* Settings Panel - Slide from Right */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[90%] sm:max-w-[400px] bg-white/20 backdrop-blur shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${showSettings ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-10">
                    <SettingTimer
                        defaultTimes={customTimes}
                        onSave={(newTimes) => {
                            setCustomTimes(newTimes);
                            setTimeLeft(newTimes[mode] * 60);
                            setShowSettings(false);
                        }}
                    />
                    <button
                        onClick={() => setShowSettings(false)}
                        className="text-sm text-blue-700 underline mb-4 mt-3 "
                    >
                        Tutup
                    </button>

                </div>
            </div>


        </div >
    );
};

export default TimerPage;
