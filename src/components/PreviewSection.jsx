import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Ganti gambar di sini sesuai kebutuhan
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
        <section className="w-full bg-gradient-to-b from-[#17054e] to-[#462E96] py-24 px-0 flex flex-col items-center">
            <div className="w-full max-w-4xl mx-auto relative">
                <Slider {...settings}>
                    {previewImages.map((item, idx) => (
                        <div key={idx} className="flex justify-center">
                            <div
                                className="
                  w-full
                  max-w-[900px]
                  aspect-[16/9]
                  rounded-3xl overflow-hidden shadow-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  flex items-center justify-center
                "
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="
                    w-full h-full object-cover
                    transition-all duration-700
                "
                                    draggable={false}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PreviewSection;
