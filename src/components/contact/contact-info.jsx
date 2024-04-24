import React, { useEffect } from "react";
import { FaAnchor, FaBagShopping, FaStore, FaTiktok } from "react-icons/fa6";
import {
  SiDuolingo,
  SiFacebook,
  SiInstagram,
  SiShopee,
  SiTiktok,
  SiWallabag,
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
            <div className="row contact-last-child justify-content-center">
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className="fab fa-whatsapp"></i>
                  <h5>Contact Us</h5>
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

              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={"fas fa-envelope"}></i>
                  <h5>Email Address</h5>
                  <a href={`mailto:${contactData.data.email}`}>
                    {contactData.data.email}
                    <br />
                  </a>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={"fas fa-map-marker-alt"}></i>
                  <h5>Find Us</h5>

                  {contactData.data.address}
                  <br />
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className="fa fa-shopping-bag"></i>
                  <h5>E-Commerce</h5>
                  <div className="row justify-content-center">
                    {contactData.data.shopee_url != "-" ? (
                      <div className="col-2">
                        <a className="fs-2" href={contactData.data.shopee_url}>
                          <SiShopee />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {contactData.data.tokopedia_url != "-" ? (
                      <div className="col-2">
                        <a
                          className="fs-2"
                          href={contactData.data.tokopedia_url}
                        >
                          <FaStore />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* {contactData.data.instagram_url != "-" ? (
                      <div className="col-2">
                        <a
                          className="fs-2"
                          href={contactData.data.instagram_url}
                        >
                          <SiInstagram />
                        </a>
                      </div>
                    ) : (
                      ""
                    )} */}

                    {contactData.data.facebook_url != "-" ? (
                      <div className="col-2">
                        <a
                          className="fs-2"
                          href={contactData.data.facebook_url}
                        >
                          <SiFacebook />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {contactData.data.tiktok_url != "-" ? (
                      <div className="col-2">
                        <a className="fs-2" href={contactData.data.tiktok_url}>
                          <SiTiktok />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={"fal fa-share-alt"}></i>
                  <h5>Social Media</h5>
                  <div className="row justify-content-center">
                    {/* {contactData.data.shopee_url != "-" ? (
                      <div className="col-2">
                        <a className="fs-2" href={contactData.data.shopee_url}>
                          <SiShopee />
                        </a>
                      </div>
                    ) : (
                      ""
                    )} */}

                    {/* {contactData.data.tokopedia_url != "-" ? (
                      <div className="col-2">
                        <a
                          className="fs-2"
                          href={contactData.data.tokopedia_url}
                        >
                          <SiDuolingo />
                        </a>
                      </div>
                    ) : (
                      ""
                    )} */}

                    {contactData.data.instagram_url != "-" ? (
                      <div className="col-2">
                        <a
                          className="fs-2"
                          href={contactData.data.instagram_url}
                        >
                          <SiInstagram />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {contactData.data.facebook_url != "-" ? (
                      <div className="col-2">
                        <a
                          className="fs-2"
                          href={contactData.data.facebook_url}
                        >
                          <SiFacebook />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {contactData.data.tiktok_url != "-" ? (
                      <div className="col-2">
                        <a className="fs-2" href={contactData.data.tiktok_url}>
                          <SiTiktok />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
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
