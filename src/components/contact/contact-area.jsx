"use client";

import ContactForm from "@/src/forms/contact-form";
import React, { useEffect, useRef, useState } from "react";

const ContactArea = () => {
  //

  return (
    <>
      <div className="contact-page pt-115 pb-115">
        <div className="container">
          <div className="contact-bg grey-bg">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-6">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5426893359654!2d104.78279917449515!3d-2.946769339694559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b76efdfa7494d%3A0x2e385bf9550ae573!2sProfecta%20Perdana!5e0!3m2!1sen!2sid!4v1709716895534!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
