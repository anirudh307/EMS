import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import img1 from "../assets/img6.jpg";
import img2 from "../assets/img3.jpg";
import img3 from "../assets/img5.jpeg";
import img4 from "../assets/img2.jpeg";

const images = [img1, img2, img3, img4];

const ImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds interval
    pauseOnHover: false,
  };

  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
