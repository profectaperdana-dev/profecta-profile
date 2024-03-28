import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImagePopup from "@/src/modals/ImagePopup";
import axios from "axios";
import Link from "next/link";
import url from "@/utils/globals";
const GalleryArea = () => {
  const [categoriesData, setCategoriesData] = useState(null);
  const [categoryActive, setCategoryActive] = useState(-1);
  const [galleriesData, setGalleriesData] = useState(null);

  const getCategories = async () => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getgallery/category`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setCategoriesData(data);
    });
  };

  const getGalleries = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getgallery`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setGalleriesData(data);
    });
  };

  const filteredGallery = async (id) => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getgallery/${id}/filterbycategory`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setGalleriesData(data);
    });
  };

  const categoryFilterHandler = (i) => {
    setCategoryActive(i);
    filteredGallery(i);
  };

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
  const img = galleriesData
    ? galleriesData.data.map(
        (item) =>
          `${url.PROFECTA_API_URL}/public/images/cms/galleries/${item.img}`
      )
    : "";

  useEffect(() => {
    getCategories();
    getGalleries();
  }, []);

  return (
    <>
      <div className="tp-portfolio-area pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="tp-port-button masonary-menu">
                <button
                  onClick={() => categoryFilterHandler(-1)}
                  key={-1}
                  className={categoryActive == -1 ? "active" : ""}
                >
                  All
                </button>
                {categoriesData
                  ? categoriesData.data.map((item, i) => (
                      <button
                        onClick={() => categoryFilterHandler(item.id)}
                        key={i}
                        className={categoryActive == item.id ? "active" : ""}
                      >
                        {item.name}
                      </button>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div className="row grid mixitup-active pt-40">
            {galleriesData
              ? galleriesData.data.map((item, i) => (
                  <div
                    key={i}
                    className="col-xl-3 col-lg-6 col-md-6 grid-item cat3 cat5"
                  >
                    <div className="tp-port-item mb-30">
                      <div className="tp-case-img">
                        <div
                          className="fix"
                          style={{
                            width: "100%",
                            height: "19rem",
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
                            src={`${url.PROFECTA_API_URL}/public/images/cms/galleries/${item.img}`}
                            alt=""
                            className="img-fluid"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              width: "100%",
                              height: "100%",
                              objectFit: "contain", // Atur objectFit ke 'contain' untuk memastikan gambar tidak dipotong
                            }}
                          />
                        </div>
                      </div>
                      <div className="tp-port-content">
                        <span className="port-title">{item.title}</span>
                        <h3 className="port-subtitle">{item.description}</h3>
                      </div>
                      <div className="tp-port-icon">
                        <div className="tp-port-icon">
                          <button
                            className="popup-image"
                            onClick={() => handleImagePopup(i)}
                          >
                            <i className="far fa-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>

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

export default GalleryArea;
