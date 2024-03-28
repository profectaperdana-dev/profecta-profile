import React, { useEffect } from "react";
import { FaAnchor, FaTiktok } from "react-icons/fa6";
import {
  SiDuolingo,
  SiFacebook,
  SiInstagram,
  SiShopee,
  SiTiktok,
} from "react-icons/si";
import { TbSquareRoundedLetterT } from "react-icons/tb";

// contact info data
const contact_info_data = [
  {
    id: 1,
    icon: "fas fa-phone-alt",
    title: "Call Us Here",
    info_1: "(098) 897 890 90",
    info_2: "+090 8909 89 87-0",
    link_1: "tel:(098)89789090,+09089098987-0",
    link_2: "tel:1234162442",
  },
  {
    id: 2,
    icon: "fas fa-envelope",
    title: "Email Address",
    info_1: "info@webmail.com",
    info_2: "jobs.webexample.com",
    link_1: "mailto:info@webmail.comjobs.webexample.com",
    link_2: "mailto:jobs.webexample.com",
  },
  {
    id: 3,
    icon: "fas fa-map-marker-alt",
    title: "Call Us Here",
    info_1: "14/A, New Humble Town,",
    info_2: "NYC, USA",
    link_1: "#",
    link_2: "#",
  },
  {
    id: 4,
    icon: "fal fa-share-alt",
    title: "Social Connect",
    info_1: "skype.com/humble.cclinkdin.com",
    info_2: "",
    link_1: "",
    link_2: "",
  },
];

const ContactInfo = ({ contactData }) => {
  //   useEffect(() => {
  //     console.log(dataContact?.email);
  //   }, []);

  function replaceZeroWithCountryCode(number) {
    // Cek apakah nomor telepon dimulai dengan angka 0
    if (number.startsWith("0")) {
      // Ganti angka 0 di awal dengan kode negara 62
      return "62" + number.slice(1);
    }
    // Jika tidak dimulai dengan angka 0, kembalikan nomor telepon tanpa perubahan
    return number;
  }

  return (
    <>
      {contactData ? (
        <div className="tp-contact-info pb-90">
          <div className="container">
            <div className="row contact-last-child">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={"fas fa-phone-alt"}></i>
                  <h5>Call Us Here</h5>
                  <a
                    href={`https://wa.me/${replaceZeroWithCountryCode(
                      contactData.data.phone_1
                    )}`}
                    target="_blank"
                  >
                    {contactData.data.phone_1}
                  </a>{" "}
                  /
                  <br />{" "}
                  <a
                    href={`https://wa.me/${replaceZeroWithCountryCode(
                      contactData.data.phone_2
                    )}`}
                    target="_blank"
                  >
                    {contactData.data.phone_2}
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={"fas fa-envelope"}></i>
                  <h5>Email Address</h5>
                  <a href={`mailto:${contactData.data.email}`}>
                    {contactData.data.email}
                    <br />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={"fas fa-map-marker-alt"}></i>
                  <h5>Meet Us Here</h5>

                  {contactData.data.address}
                  <br />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={"fal fa-share-alt"}></i>
                  <h5>Social Connect</h5>
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <a className="fs-2" href={contactData.data.shopee_url}>
                        <SiShopee />
                      </a>
                    </div>
                    <div className="col-2">
                      <a className="fs-2" href={contactData.data.tokopedia_url}>
                        <SiDuolingo />
                      </a>
                    </div>

                    <div className="col-2">
                      <a className="fs-2" href={contactData.data.instagram_url}>
                        <SiInstagram />
                      </a>
                    </div>
                    <div className="col-2">
                      <a className="fs-2" href={contactData.data.facebook_url}>
                        <SiFacebook />
                      </a>
                    </div>
                    <div className="col-2">
                      <a className="fs-2" href={contactData.data.tiktok_url}>
                        <SiTiktok />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ContactInfo;
