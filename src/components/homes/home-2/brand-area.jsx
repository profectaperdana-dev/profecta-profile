import React, { useRef } from "react";
import Slider from "react-slick";

const setting = {
  slidesToShow: 3,
  arrows: false,
  autoplay: false,
  Infinity: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
  ],
};
const brands_data = [
  "assets/img/brand-2/brand4.png",
  "assets/img/brand-2/brand5.png",
  "assets/img/brand-2/brand5.png",
  "assets/img/brand-2/brand4.png",
  "assets/img/brand-2/brand5.png",
  "assets/img/brand-2/brand4.png",
];

const { logo } = "/assets/img/logo/logo2.png";
const BrandArea = () => {
  const sliderRef = useRef(null);
  return (
    <>
      <div className="tp-brand-area brand-strok p-relative theme-bg pt-100 pb-100">
        <div className="container">
          <div className="row brand-power">
            <div className="tp-brand-active">
              <Slider {...setting} ref={sliderRef}>
                <div className="col-xl-3 col-lg-6 col-md-6  text-lg-start">
                  <div className="tp-counter-logo">
                    <img src={logo} alt="theme-pure" />
                  </div>
                </div>

                <div className={`col-xl-3 col-lg-6 col-md-6 `}>
                  <div className="footer-counter-content d-md-flex align-items-center mb-30">
                    <h2>2300</h2>
                    <div className="counter-text">
                      <h3>Damn</h3>
                    </div>
                  </div>
                </div>

                {/* {brands_data.map((item, i) => (
                  <div key={i} className="col-xl">
                    <div className="tp-brand-item">
                      <a href="#">
                        <img src={item} alt="theme-pure" />
                      </a>
                    </div>
                  </div>
                ))} */}
              </Slider>
            </div>
          </div>
        </div>
        <div className="tp-brand-big-text tp-brand-big-text2 text-center">
          <h3>Happy Users</h3>
        </div>
      </div>
    </>
  );
};

export default BrandArea;
