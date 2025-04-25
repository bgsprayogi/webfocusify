import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'; 
import Slider from "react-slick";
import ScrollFloat from "../components/ScrollFloat";
import SplitText from "../components/SplitText";
import BlurText from "../components/BlurText";
import ImageSlider from "../components/ImageSlider";
import FeatureSection from '../components/FeatureSection';
import logo2 from "../assets/logo2.png";
import studyImage from "../assets/study1.webp";
import studyImage2 from "../assets/study2.png";
import studyImage3 from "../assets/study3.png";
import taskIcon from "../assets/task.png";
import dndIcon from "../assets/do-not-disturb.png";
import soundIcon from "../assets/volume-up.png";
import timerIcon from "../assets/hourglass.png";
import heroImage from "../assets/herosection.jpg";
import FindUsBg from "../assets/findsection.jpg";
import FocusifyLogo from "../assets/focusify.png";
import AgileLogo from "../assets/agile.png";
import PensLogo from "../assets/pens.png";

const Footer = () => {
  return (
    <footer className="bg-[#22234f] text-white py-6 px-6 text-center">
      <p className="text-sm font-semibold mb-4">
      Copyright © Focusify 2025. Powered by AgileTeknik. All Rights Reserved.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
      <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-200"
            onClick={() =>
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <a href="" target="_blank" rel="noopener noreferrer">
          <img
            src={FocusifyLogo}
            alt="Laras"
            className="h-10 bg-white px-3 py-1 rounded-lg"
          />
        </a>
          </Link>
        <a href="https://agileteknik.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={AgileLogo}
            alt="Agile"
            className="h-10 bg-white px-3 py-1 rounded-lg"
          />
        </a>
        <a href="https://pens.ac.id" target="_blank" rel="noopener noreferrer">
          <img
            src={PensLogo}
            alt="PENS"
            className="h-10 bg-white px-3 py-1 rounded-lg"
          />
        </a>
      </div>
    </footer>
  );
};

const FindUsSection = () => {
  return (
    <div
    className="w-full min-h-screen bg-gradient-to-b from-[#462E96] to-[#140540] text-white px-6 md:px-16 flex flex-col justify-center items-center text-center pt-2 bg-cover bg-center"
    style={{ backgroundImage: `url(${FindUsBg})` }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Temukan Focusify di Play Store!
    </h2>
    <p className="text-base md:text-lg mb-8 max-w-xl">
      Focusify juga hadir di Play Store, download sekarang agar kamu lebih mudah untuk mengakses Focusify kapan saja dan di mana saja!
    </p>
    <button
  onClick={() =>
    window.open("https://play.google.com/store/apps/details?id=com.focusify.app&hl=en-US&pli=1", "_blank")
  }
  className="btn flex items-center gap-2"
>
  <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" className="sparkle">
    <path d="M10,21.236L6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
  </svg>
  <span className="text">Download Now!</span>
</button>

  </div>
  );
};

const articles = [
  {
    title: "Susah Belajar? Coba Trik Ini! Rahasia Belajar Efektif, Nilai Pasti Naik!",
    date: "5 Maret 2025",
    image: studyImage,
    description:
      "Belajar secara efektif tidak hanya tentang berapa lama waktu yang dihabiskan untuk belajar...",
    link: "https://banyuwangi.viva.co.id/gaya-hidup/25782-susah-belajar-coba-trik-ini-rahasia-belajar-efektif-nilai-pasti-naik",
  },
  {
    title: "Tips Fokus Saat Bekerja",
    date: "10 September 2024",
    image: studyImage2,
    description:
      "Pelajari cara meningkatkan fokus dan produktivitas dengan teknik yang telah terbukti ampuh...",
    link: "https://gajihub.com/blog/cara-meningkatkan-fokus-kerja/",
  },
  {
    title: "Manfaat Mode DnD",
    date: "6 November 2024",
    image: studyImage3,
    description:
      "Ketahui bagaimana mode DnD membantu kamu bekerja lebih efektif dengan mengurangi distraksi...",
    link: "https://www.kompasiana.com/dewafreelance30404/672accb5ed64157439795e32/5-cara-fokus-saat-bekerja#:~:text=Berikut%20adalah%20lima%20cara%20efektif%20untuk%20menjaga%20fokus,Media%20Sosial%20...%205%205.%20Lakukan%20Olahraga%20Ringan",
  },
];

const ArticleSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ubah jadi 2 atau 3 jika layar besar
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <div id="article" className="w-full bg-gradient-to-b from-[#462E96] to-[#31385c] py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-white">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-center text-4xl font-bold mb-10 text-white"
        >
          Article
        </ScrollFloat>

        <Slider {...settings}>
  {articles.map((article, index) => (
    <div key={index} className="px-4"> {/* padding antar slide */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 h-auto min-h-[450px]">
        
        <img src={article.image} alt={article.title} className="w-full h-52 object-cover" />
        <div className="p-6 text-black">
          <p className="text-gray-500 text-sm">{article.date}</p>
          <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
          <p className="text-sm mt-2">{article.description}</p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            onClickCapture={(e) => e.stopPropagation()}
            className="text-indigo-600 font-medium mt-4 inline-block hover:underline"
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </div>
  );
};

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-gradient-to-b from-[#462E96] to-[#6149b1] flex flex-col">
      {/* Navbar */}
      <nav
  className={`fixed top-0 rounded-2xl shadow-lg left-1/2 -translate-x-1/2 w-9/10 z-50 px-6 md:px-10 py-4 mt-5 mx-auto max-w-7xl flex justify-between items-center transition-all duration-300 ${
    scrolled
      ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg text-white"
      : "bg-[#6149b1] text-white"
  }`}
>
  <div className="flex items-center">
    <img src={logo2} alt="Focusify Logo" className="w-10 h-10 object-contain rounded-full" />
  </div>

  {/* Spacer kiri */}
  <div className="flex-1" />

  {/* Menu di tengah */}
  <div className="hidden md:flex space-x-6 justify-center">
    <Link
      to="/"
      className="text-white hover:text-gray-300 transition duration-200"
      onClick={() =>
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Home
    </Link>
    <Link
      to="#"
      className="text-white hover:text-gray-300 transition duration-200"
      onClick={() =>
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Features
    </Link>
    <Link
      to="#"
      className="text-white hover:text-gray-300 transition duration-200"
      onClick={() =>
        document.getElementById("article")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Article
    </Link>
  </div>

  {/* Spacer kanan */}
  <div className="flex-1" />
</nav>

      {/* Hero Section */}
      <div
        id="hero"
        className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Background Wave */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Animated Content */}
        <div className="relative z-10 max-w-3xl text-center">
          <BlurText
            text="Focusify"
            delay={200}
            highlight={{ word: "Focusify", color: "#6149b1" }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          />
          <BlurText
            text="Bantu mencapai targetmu dengan mudah dan tanpa gangguan. Blokir notifikasi mengganggu saat aktivitas dan atur timer sesuai keinginanmu."
            delay={150}
            className="mt-7 text-lg md:text-xl text-white"
          />
       <div className="flex justify-center mt-8 space-x-4">
  {/* Tombol Google Play */}
  <a
    href="https://play.google.com/store/apps/details?id=com.focusify.app"
    className="bg-[#000000] hover:bg-[#000000] text-white text-base font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
  >
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6 mr-2"
        viewBox="0 0 512 512"
      >
        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
      </svg>
      <span className="flex flex-col items-start text-left">
        <span className="text-xs leading-none">GET IT ON</span>
        <span className="text-lg font-bold leading-tight">Google Play</span>
      </span>
    </div>
  </a>

  {/* Tombol Explore All */}
  <button
  className="button"
  style={{ "--clr": "#6149b1" }}
  onClick={() =>
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }
>
  <span className="button__icon-wrapper">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon-svg"
      width="10"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
  Explore All
</button>

</div>


        </div>
      </div>

      {/* Features Section */}
      <FeatureSection />

      {/* Article Section */}
      <ArticleSection />

      {/* Find Us Section */}

      <FindUsSection />

      {/* Footer */}
      <Footer/>
  
    </div>
  );
};

export default LandingPage;