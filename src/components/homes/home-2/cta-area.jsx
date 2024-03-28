import React from "react";
import { useHomeContext } from "./home-context";
import { SiDuolingo, SiGmail, SiShopee, SiWhatsapp } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const cta_content = {
  map_link:
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.594381298903!2d90.42194549999999!3d23.822204699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652595355816!5m2!1sen!2sbd",
  title: (
    <>
      Elevate your ride with top-quality batteries and tires from Profecta
      Perdana
    </>
  ),
  contact_info: [
    {
      id: 1,
      icon: "fab fa-skype",
      socile: "Skype",
      link: "mailto:webmail.top10",
      contact: "webmail.top10",
    },
    {
      id: 2,
      icon: "fab fa-whatsapp",
      socile: "Whatsapp",
      link: "tel:(568)78023623",
      contact: "(568) 780 236 23",
    },
  ],
};
const { map_link, title, contact_info } = cta_content;

const CtaArea = () => {
  const { contactData, replaceZeroWithCountryCode } = useHomeContext();

  return (
    <>
      <div
        className="tp-cta-area black-bg cta-bg position-relative"
        style={{ backgroundImage: `url(/assets/img/bg/cta-bg.png)` }}
      >
        <div
          className="cta-map"
          dangerouslySetInnerHTML={{
            __html: contactData?.data?.embedded_maps,
          }}
        />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-6 col-lg-12">
              <div className="tp-quote-box pl-80 pt-60 pb-60">
                <div className="tp-section-box cta-map-section p-relative">
                  <span className="tp-section-subtitle right-white  d-inline-block mb-10">
                    get a quote
                  </span>
                  <h2 className="tp-section-title mb-50">{title}</h2>
                </div>
                <div className="tp-cta-main row">
                  {/* {contact_info.map((item, i) => ( */}
                  <div className="tp-cta-box d-flex align-items-center col-12 col-lg-4 mb-3">
                    <div className="tp-cta-icon">
                      <a href="#">
                        <SiShopee className="fs-3" />
                      </a>
                    </div>
                    <div className="tp-cta-content">
                      <label>Shopee</label>
                      <a href={contactData?.data?.shopee_url}>Marketplace</a>
                    </div>
                  </div>
                  <div className="tp-cta-box d-flex align-items-center col-12 col-lg-4 mb-3">
                    <div className="tp-cta-icon">
                      <a href="#">
                        <SiDuolingo className="fs-3" />
                      </a>
                    </div>
                    <div className="tp-cta-content">
                      <label>Tokopedia</label>
                      <a href={contactData?.data?.tokopedia_url}>Marketplace</a>
                    </div>
                  </div>
                  <br />
                  <div className="tp-cta-box d-flex align-items-center col-12 col-lg-4 mb-3">
                    <div className="tp-cta-icon">
                      <a href="#">
                        <SiWhatsapp className="fs-3" />
                      </a>
                    </div>
                    <div className="tp-cta-content">
                      <label>Whatsapp</label>
                      <a
                        href={`https://wa.me/${replaceZeroWithCountryCode(
                          contactData?.data?.phone_1
                        )}`}
                      >
                        {replaceZeroWithCountryCode(contactData?.data?.phone_1)}
                      </a>
                    </div>
                  </div>
                  <div className="tp-cta-box d-flex align-items-center col-12 col-lg-4 mb-3">
                    <div className="tp-cta-icon">
                      <a href="#">
                        <SiGmail className="fs-3" />
                      </a>
                    </div>
                    <div className="tp-cta-content">
                      <label>Email</label>
                      <a href={`mailto:${contactData?.data?.email}`}>
                        {contactData?.data?.email}
                      </a>
                    </div>
                  </div>
                  {/* <div className="tp-cta-box d-flex align-items-center">
                    <div className="tp-cta-icon">
                      <a href="#">
                        <i className={item.icon}></i>
                      </a>
                    </div>
                    <div className="tp-cta-content">
                      <label>{item.socile}</label>
                      <a href={item.link}>{item.contact}</a>
                    </div>
                  </div> */}
                  {/* ))} */}
                </div>
                <div className="tp-cta-main row mt-40">
                  <div className="slider-btn">
                    <Link href="/contact" className="tp-btn">
                      Know more <FaArrowRight />
                    </Link>
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

export default CtaArea;
