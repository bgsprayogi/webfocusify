// RollingGallery.jsx

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Focusifyers",
    text: "Dark modenya bagus, tampilan jadi lebih enak dilihat, kesan juga lebih matang aplikasinya. Pilihan suara meditasi udah banyak, tinggal pilih yang sesuai selera.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Focusifyers",
    text: "Bisa curhat ke laras tentang kegiatan yang dilakukan sehari-harinya tanpa diketahui orang lain, rasanya lega banget bisa mencatat semua yang telah saya lalui apalagi laras menyediakan fitur suara relaksasi yang bisa membuat saya lebih tenang ketika jenuh.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Focusifyers",
    text: "Saya menyukai aplikasi ini karena salah satunya terdapat fitur mode gelap karena menurut saya cocok banget sesuai dengan topiknya yaitu meditasi, lalu untuk fitur audio nya bisa didengar sambil keluar dari app.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Focusifyers",
    text: "Aplikasinya bagus unik, bisa menyampaikan perasaan kita lewat jurnal lebih bisa mengekspresikan diri aja, merasa seperti disediakan wadah untuk melepas ekspresi.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Focusifyers",
    text: "Dark modenya bagus, tampilan jadi lebih enak dilihat, kesan juga lebih matang aplikasinya. Pilihan suara meditasi udah banyak, tinggal pilih yang sesuai selera.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Focusifyers",
    text: "Dark modenya bagus, tampilan jadi lebih enak dilihat, kesan juga lebih matang aplikasinya. Pilihan suara meditasi udah banyak, tinggal pilih yang sesuai selera.",
  }
];

const GAP = 24;

export default function RollingGallery({ speed = 60, pauseOnHover = true }) {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const items = [...testimonials, ...testimonials];
  const [width, setWidth] = useState(0);

  // Hitung lebar satu loop (setengah scrollWidth)
  useEffect(() => {
    if (!trackRef.current) return;
    setWidth(trackRef.current.scrollWidth / 2);
  }, [items.length]);

  // Fungsi memulai loop dari posisi x tertentu
  const startLoop = (fromX = 0) => {
    controls.start({
      x: [fromX, fromX - width],
      transition: {
        x: {
          repeat: Infinity,
          ease: "linear",
          duration: width / speed,
        },
      },
    });
  };

  // Inisialisasi loop saat width tersedia
  useEffect(() => {
    if (width > 0) {
      x.set(0);
      startLoop(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  // Pause / Resume tanpa jump
  const handlePause = () => {
    controls.stop();
  };
  const handleResume = () => {
    const current = x.get() % -width;
    const fromX = current > 0 ? current - width : current;
    startLoop(fromX);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 230 }}
      onMouseEnter={() => pauseOnHover && handlePause()}
      onMouseLeave={() => pauseOnHover && handleResume()}
      onTouchStart={() => pauseOnHover && handlePause()}
      onTouchEnd={() => pauseOnHover && handleResume()}
    >
      <motion.div
        className="flex gap-6"
        ref={trackRef}
        style={{ x }}
        animate={controls}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col bg-[#5E548E] rounded-2xl px-6 py-5 text-white shadow-xl min-w-[250px] max-w-[360px] w-[80vw] sm:w-[340px] md:w-[320px] lg:w-[340px] flex-shrink-0"
            style={{ marginRight: i === items.length - 1 ? 0 : GAP }}
          >
            <div className="flex items-center mb-2 gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full bg-white border-2 border-white shadow"
              />
              <span className="font-bold text-lg">{item.name}</span>
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Fade overlays */}
      <div className="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#423561] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#423561] to-transparent" />
    </div>
  );
}
