import React, { useState } from 'react';
import ScrollFloat from "../components/ScrollFloat";
import Audio from "../assets/Audio.png";
import Timer from "../assets/Timer.png";
import Statistik from "../assets/Statistik.png";
import { AnimatePresence, motion } from "framer-motion";

const features = [
  {
    title: 'Timer',
    description: 'Atur waktu belajar dan istirahatmu dengan teknik Pomodoro. Fokus selama sesi kerja, lalu ambil jeda sejenak untuk menyegarkan pikiran. Biar belajar jadi lebih efektif dan nggak bikin burnout.',
    image: Timer,
  },
  {
    title: 'Ambient Sound',
    description: 'Mengatur waktu sesuai keinginanmu, Dengan fitur timer belajar yang fleksibel dan pilihan ambient sound yang menenangkan, Focusify bikin sesi belajarmu jadi lebih terstruktur dan menyenangkan.',
    image: Audio,
  },
  {
    title: 'Statistik',
    description: 'Lihat pencapaian fokusmu dalam grafik dan angka! Fitur ini menunjukkan berapa banyak sesi Pomodoro yang sudah kamu selesaikan. Cocok buat kamu yang ingin tracking produktivitas sekaligus pamer ke teman.',
    image: Statistik,
  },
];

const FeatureSection = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  const handleFeatureClick = (index) => {
    setSelectedFeatureIndex(index);
  };

  return (
    <div id="features" className="w-full bg-gradient-to-b from-[#17054e] to-[#462E96] py-20 px-6 md:px-16 text-white">
      <div className="text-center mb-12">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-center text-4xl font-bold mb-10 text-white"
        >
          Fitur apa saja?
        </ScrollFloat>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Gambar HP */}
        <div className="w-[300px] md:w-[250px] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={features[selectedFeatureIndex].image}
              src={features[selectedFeatureIndex].image}
              alt="Mockup HP"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* List Fitur */}
        <div className="flex flex-col gap-6 w-full max-w-xl">
          {features.map((feature, index) => {
            const isSelected = selectedFeatureIndex === index;

            return (
              <motion.div
                key={index}
                onClick={() => handleFeatureClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`cursor-pointer p-5 rounded-2xl shadow-md transition-all duration-300
                ${isSelected
                  ? 'bg-gradient-to-r from-violet-200 to-violet-300 text-violet-900 ring-2 ring-violet-400/70 scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className={`flex flex-col items-center justify-center text-center gap-1 font-semibold text-lg ${isSelected ? 'text-gray-900' : ''}`}>
                  <span>{feature.title}</span>
                </div>
                <p className={`text-sm mt-2 text-center ${isSelected ? 'text-gray-800' : 'text-white/80'}`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
