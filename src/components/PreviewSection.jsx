import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import preview1 from "../assets/FindMobile.jpg";
import preview2 from "../assets/study3.png";
import preview3 from "../assets/logo2.png";

const previewImages = [
    { src: preview1, alt: "Preview 1" },
    { src: preview2, alt: "Preview 2" },
    { src: preview3, alt: "Preview 3" },
];

const PreviewSection = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        swipe: false,
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#17054e] to-[#462E96] py-6 sm:py-14 flex flex-col items-center">
            <div className="w-full flex justify-center px-2 sm:px-0">
                <div
                    className="
            w-full
            max-w-[900px]
            aspect-[16/9]
            rounded-xl sm:rounded-3xl
            overflow-hidden
            shadow-2xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            flex items-center justify-center
            transition-all
          "
                >
                    <Slider {...settings} className="w-full h-full">
                        {previewImages.map((item, idx) => (
                            <div key={idx} className="w-full h-full flex items-center justify-center">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-auto max-h-full object-cover"
                                    draggable={false}
                                    style={{
                                        minWidth: 0,
                                        minHeight: 0,
                                        aspectRatio: "16/9",
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PreviewSection;
