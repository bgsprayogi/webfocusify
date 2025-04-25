import React from 'react';
import IlustrasiFocus from '../assets/logo.png'; // Pastikan path ini benar

const IntroductionSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#462E96] to-[#17054e] py-24 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Text Kiri */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ayo Kenalan sama <span className="text-violet-300">Focusify !</span>
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Focusify adalah aplikasi pendamping belajar yang dirancang untuk membantu meningkatkan fokus dan produktivitas! Dengan teknik Pomodoro Timer, Focusify memastikan sesi belajar menjadi lebih efektif dan terstruktur.
          </p>
        </div>

        {/* Gambar Kanan */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={IlustrasiFocus}
            alt="Ilustrasi Focusify"
            className="w-[300px] md:w-[400px] h-auto object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default IntroductionSection;
