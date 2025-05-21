import React, { useState, useEffect, useRef } from "react";
import backgroundTimerDesktop from "../assets/backgroundTimer.jpg";
import backgroundTimerMobile from "../assets/findMobile.jpg";
import AnimatedContent from "../components/AnimatedContent";
import { PencilSimple } from "phosphor-react";



const TimerPage = () => {
    const name = localStorage.getItem('username') || 'Guest';

    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('fokus'); // fokus | istirahat
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes default
    const timerRef = useRef(null);

    const [customTitle, setCustomTitle] = useState('Apa yang mau kamu lakukan hari ini?');
    const [isEditingTitle, setIsEditingTitle] = useState(false);

    const toggleTimer = () => {
        setIsRunning((prev) => !prev);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(mode === 'fokus' ? 30 * 60 : 5 * 60);
    };

    const switchMode = (newMode) => {
        setMode(newMode);
        setIsRunning(false);
        if (newMode === 'fokus') {
            setTimeLeft(30 * 60);
        } else if (newMode === 'istirahat') {
            setTimeLeft(5 * 60);
        } else {
            setTimeLeft(10 * 60); // istirahatPanjang
        }
    };


    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning]);

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
            {/* Logo */}
            <div className="absolute top-10 left-8 text-white text-4xl font-mono tracking-widest">
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
                                className="bg-transparent border-b border-white text-white placeholder-white text-center focus:outline-none"
                                autoFocus
                            />
                        ) : (
                            <p className="text-2xl md:text-base flex items-center gap-2">
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
                            className={`px-4 py-2 rounded-full border bg-blue-500 ${mode === 'fokus' ? 'bg-blue-700 text-black' : 'border-white text-white'}`}
                            onClick={() => switchMode('fokus')}
                        >
                            Fokus
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full border bg-blue-500 ${mode === 'istirahat' ? 'bg-blue-700 text-black' : 'border-white text-white'}`}
                            onClick={() => switchMode('istirahat')}
                        >
                            Istirahat
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full border bg-blue-500 ${mode === 'istirahatPanjang' ? 'bg-blue-700 text-black' : 'border-white text-white'}`}
                            onClick={() => switchMode('istirahatPanjang')}
                        >
                            Istirahat Panjang
                        </button>
                    </div>

                    {/* Timer */}
                    <h2 className="text-9xl font-bold">{formatTime(timeLeft)}</h2>

                    {/* Control buttons */}
                    <div className="flex space-x-4 items-center">
                        <button
                            className="bg-white/20 backdrop-blur px-6 py-2 rounded-lg font-medium hover:opacity-90"
                            onClick={toggleTimer}
                        >
                            {isRunning ? 'Hentikan' : 'Mulai'}
                        </button>
                        <button onClick={resetTimer} className="text-2xl">↻</button>
                    </div>
                </div>
            </AnimatedContent>



            {/* Navigation Icons */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-800/70 text-white flex gap-6 px-6 py-2 rounded-t-xl shadow-md">
                {/* Home - Landing Page */}
                <button onClick={() => window.location.href = '/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7m-9 11v-6h4v6m5-6h2a2 2 0 002-2V7a2 2 0 00-.586-1.414l-8-8a2 2 0 00-2.828 0l-8 8A2 2 0 001 7v7a2 2 0 002 2h2" />
                    </svg>
                </button>

                {/* Daun - Realtime */}
                <button onClick={() => window.location.href = '/realtime'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C7 2 3 6 3 11c0 4.418 3.582 8 8 8 5 0 9-4 9-9 0-4-4-8-8-8zM5 15c1.5-2 3.5-3 6-3s4.5 1 6 3" />
                    </svg>
                </button>



                {/* Lampu - Timer */}
                <button onClick={() => window.location.href = '/timerpage'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 2v2m6-2v2M4.22 4.22l1.42 1.42M18.36 5.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8zM12 20v2m-6-2a6 6 0 0012 0" />
                    </svg>
                </button>
            </div>

            {/* Settings icon */}
            <div className="absolute top-6 right-10 bg-blue-800/70 p-1 rounded-xl shadow-md text-white">
                <button>
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

        </div >
    );
};

export default TimerPage;
