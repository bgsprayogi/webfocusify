import React, { useState } from 'react';
import ScrollFloat from "../components/ScrollFloat";
import Audio from "../assets/Audio.png";
import Timer from "../assets/Timer.png";
import Statistik from "../assets/Statistik.png";

const features = [
  {
    title: 'Timer',
    description: 'Atur waktu belajar dan istirahatmu dengan teknik Pomodoro. Fokus selama sesi kerja, lalu ambil jeda sejenak untuk menyegarkan pikiran. Biar belajar jadi lebih efektif dan nggak bikin burnout.',
    image: Timer,
  },
  {
    title: 'Atur Waktu dan Dengarkan Ambient Sound',
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
  const [selectedImage, setSelectedImage] = useState(features[0].image);

  const handleFeatureClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div id="features" className="w-full bg-gradient-to-b from-[#17054e] to-[#462E96] py-20 px-6 md:px-16 text-white">
      {/* Judul di atas */}
      <div className="text-center mb-12">
      <ScrollFloat
    animationDuration={1}
    ease="back.inOut(2)"
    scrollStart="center bottom+=50%"
    scrollEnd="bottom bottom-=40%"
    stagger={0.03}
    textClassName="text-center text-4xl font-bold mb-10 text-white"
  >
    Fitur apa saja ?
  </ScrollFloat>
      </div>

      {/* Konten Utama */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Gambar HP */}
        <div className="w-[300px] md:w-[250px]">
          <img src={selectedImage} alt="Mockup HP" className="w-full h-auto rounded-xl shadow-lg" />
        </div>

        {/* List Fitur */}
        <div className="flex flex-col gap-6 w-full max-w-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => handleFeatureClick(feature.image)}
              className="cursor-pointer p-4 rounded-xl transition hover:bg-violet-200 bg-white/10 hover:bg-white/20 text-white"
            >
              <div className="flex flex-col items-center justify-center text-center gap-1 font-semibold text-lg">
                <span className="text-2xl">{feature.icon}</span>
                <span>{feature.title}</span>
              </div>
              <p className="text-sm mt-2 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
