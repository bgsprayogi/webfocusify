import React, { useState, useEffect } from 'react';
import ScrollFloat from "../components/ScrollFloat";
import Audio from "../assets/Audio.png";
import Timer from "../assets/Timer.png";
import Statistik from "../assets/Statistik.png";
import { AnimatePresence, motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'Timer',
    description:
      'Atur waktu belajar dan istirahatmu dengan teknik Pomodoro. Fokus selama sesi kerja, lalu ambil jeda sejenak untuk menyegarkan pikiran.',
    image: Timer,
  },
  {
    title: 'Ambient Sound',
    description:
      'Dengan fitur timer belajar yang fleksibel dan pilihan ambient sound yang menenangkan, kamu bisa belajar dengan lebih fokus dan nyaman.',
    image: Audio,
  },
  {
    title: 'Statistik',
    description:
      'Pencapaian fokusmu dalam grafik dan angka! Fitur ini menunjukkan berapa banyak sesi Pomodoro yang sudah kamu selesaikan.',
    image: Statistik,
  },
];

export default function FeatureSection() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selected]);

  return (
    <section
      id="features"
      className="w-full bg-gradient-to-b from-[#17054e] to-[#462E96] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 text-white"
    >
      {/* Judul */}
      <div className="text-center mb-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        >
          Fitur apa saja?
        </ScrollFloat>
      </div>

      <div className="flex flex-row items-start justify-center gap-6 max-w-6xl mx-auto flex-nowrap">
        {/* Gambar mockup */}
        <div
          className="flex-shrink-0 w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5 pt-6 sm:pt-4 md:pt-0" // Tambahkan padding top hanya di mobile
          data-aos="fade-right"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={features[selected].image}
              src={features[selected].image}
              alt={features[selected].title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Daftar Fitur */}
        <div className="flex-shrink flex flex-col gap-4 w-3/5 sm:w-2/3 md:w-3/4 lg:w-4/5">
          {features.map((f, i) => {
            const isSel = selected === i;
            return (
              <motion.div
                key={i}
                onClick={() => setSelected(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`cursor-pointer p-4 sm:p-5 md:p-6 rounded-xl shadow-md transition-all duration-300 ${
                  isSel
                    ? 'bg-gradient-to-r from-violet-200 to-violet-300 text-violet-900 ring-2 ring-violet-400/70 scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
