import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import ScrollFloat from "../components/ScrollFloat";
import SplitText from "../components/SplitText";
import RollingGallery from "../components/RollingGallery";
import BlurText from "../components/BlurText";
import ImageSlider from "../components/ImageSlider";
import FeatureSection from '../components/FeatureSection';
import PreviewSection from '../components/PreviewSection';
import IntroductionSection from '../components/IntroductionSection';
import HamburgerMenu from '../components/HamburgerMenu';

import logo2 from "../assets/logo2.png";
import studyImage from "../assets/study1.webp";
import studyImage2 from "../assets/study2.png";
import studyImage3 from "../assets/study3.png";
import FindWeb from "../assets/FindWeb.jpg";
import FindMobile from "../assets/FindMobile.jpg";
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
              alt=""
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isMobile ? FindMobile : FindWeb;

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-b from-[#462E96] to-[#140540] text-white px-6 md:px-16 flex flex-col justify-center items-center text-center pt-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Temukan Focusify di Play Store!
      </h2>
      <p className="text-base md:text-lg mb-8 max-w-xl">
        Focusify juga hadir di Play Store, download sekarang agar kamu lebih mudah untuk mengakses Focusify kapan saja dan di mana saja!
      </p>
      <button
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=com.focusify.app&hl=en-US&pli=1",
            "_blank"
          )
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
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-gradient-to-b from-[#462E96] to-[#6149b1] flex flex-col">
      {/* Navbar */}
      <nav
  className={`fixed top-0 left-1/2 -translate-x-1/2 mt-5 w-[90%] max-w-7xl z-50 px-4 md:px-10 py-4 rounded-2xl shadow-lg flex items-center transition-all duration-300 ${scrolled
    ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg text-white'
    : 'bg-[#6149b1] text-white'
  }`}
>
  <div className="flex items-center space-x-2">
    <img
      src={logo2}
      alt="Focusify Logo"
      className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
    />
    <span className="text-lg md:text-xl font-bold">
      Focusify
    </span>
  </div>

  {/* Menu Tengah */}
  <div className="hidden md:flex justify-center space-x-6 mx-auto -mr-4">
    <Link
      to="/"
      className="text-white hover:text-gray-300 transition duration-200"
      onClick={() =>
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      Home
    </Link>
    <Link
      to="#"
      className="text-white hover:text-gray-300 transition duration-200"
      onClick={() =>
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      Features
    </Link>
    <Link
      to="#"
      className="text-white hover:text-gray-300 transition duration-200"
      onClick={() =>
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      Article
    </Link>
  </div>

  {/* Tombol Sebelah Kanan */}
  <div className="hidden md:flex ml-auto">
    <Link
      to="/nameinput"
      className="bg-black text-[#6149b1] font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
    >
      Coba Pomodoro
    </Link>
  </div>

  {/* Hamburger Mobile */}
  <div className="md:hidden absolute right-4">
    <HamburgerMenu />
  </div>
</nav>

      {/* Hero Section */}
      <div
        id="hero"
        className={`
             w-full min-h-screen flex flex-col items-center justify-center text-center 
              px-6 py-10 relative overflow-hidden 
              bg-no-repeat bg-center 
              bg-[url('/assets/HeroImageMobile.jpg')] sm:bg-[url('/assets/herosection.jpg')] 
             bg-cover`}
      >

        <div className="absolute inset-0 bg-black/50 z-0"></div>

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
      <PreviewSection />
      <IntroductionSection />
      <FeatureSection />
<section
  id="gallery"
  className="w-full bg-gradient-to-b from-[#462E96] to-[#31385c] py-20 px-6"
>
  <div className="max-w-screen-xl mx-auto text-white">
    <h2 className="text-center text-4xl font-bold mb-10">Review</h2>
    <RollingGallery />
  </div>
</section>
      <FindUsSection />
      <Footer />

    </div>
  );
};

export default LandingPage;