"use client";

import ContactForm from "@/src/forms/contact-form";
import React, { useEffect, useRef, useState } from "react";
import url from "@/utils/globals";

const ContactArea = ({
  areaData,
  contactData,
  filterContactHandler,
  activatedArea,
}) => {
  return (
    <>
      <div className="contact-page pt-115 pb-115">
        <div className="container">
          <div className="tp-port-button masonary-menu mb-4">
            {areaData
              ? areaData.data.map((item, i) => (
                  <button
                    onClick={() => filterContactHandler(item.id)}
                    key={i}
                    className={activatedArea == item.id ? "active" : ""}
                  >
                    {item.name}
                  </button>
                ))
              : ""}
          </div>
          <div className="contact-bg grey-bg">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-6">
                <div
                  className="contact-map"
                  dangerouslySetInnerHTML={{
                    __html: contactData?.data?.embedded_maps,
                  }}
                />
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="contact-us">
                  <div className="tp-section-box tp-section-box-2  p-relative">
                    <span className="tp-section-subtitle right d-inline-block">
                      contact us
                    </span>
                    <h2 className="tp-section-title mb-35">Get In Touch</h2>
                  </div>
                  <div className="contact">
                    <div className="contact__form">
                      <ContactForm />
                      <p className="ajax-response"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
