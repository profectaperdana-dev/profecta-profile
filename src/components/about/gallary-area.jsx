import ImagePopup from "@/src/modals/ImagePopup";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import url from "@/utils/globals";

const setting = {
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  Infinity: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
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
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
const gallery_data = [
  "assets/img/gallary/gallary.jpg",
  "assets/img/gallary/gallary-1.jpg",
  "assets/img/gallary/gallary-3.jpg",
  "assets/img/gallary/gallary-1.jpg",
  "assets/img/gallary/gallary-3.jpg",
];
const GallaryArea = ({ aboutData }) => {
  const sliderRef = useRef(null);

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);

  // image open state
  const [isOpen, setIsOpen] = useState(false);

  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  //  images
  const img = gallery_data.map((item) => item);
  return (
    <>
      <div
        className="col-12 justify-content-center"
        style={{
          width: "100%",
          height: "100%",
          // maxHeight: "18.5rem",
          // minHeight: "20rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "whitesmoke",
        }}
      >
        <img
          className=""
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            objectFit: "contain", // Atur objectFit ke 'contain' untuk memastikan gambar tidak dipotong
          }}
          src={`${url.PROFECTA_API_URL}/public/images/cms/abouts/${aboutData?.image_2}`}
          alt="theme-pure"
        />
      </div>
      {/* <div className="gallary-area mb-115">
        <div className="container-fluid p-0"> */}
      {/* <div className="gallary-slider-active"> */}
      {/* <Slider {...setting} ref={sliderRef}> */}
      {/* {gallery_data.map((item, i) =>  */}
      {/* <div key={0} className="gallary-item">
              <a
                onClick={() => handleImagePopup(0)}
                className="popup-image"
                href="#"
              >
                <img
                  src={`${url.PROFECTA_API_URL}/public/images/cms/abouts/${aboutData?.image_2}`}
                  alt="theme-pure"
                />
              </a>
            </div> */}
      {/* )} */}
      {/* </Slider>  */}
      {/* </div> */}
      {/* </div>
      </div> */}

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default GallaryArea;
