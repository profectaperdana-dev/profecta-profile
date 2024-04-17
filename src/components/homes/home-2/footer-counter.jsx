import React from "react";
import { useHomeContext } from "./home-context";

const footter_counter = {
  logo: "/assets/img/logo/logo2.png",
  counter_info: [
    {
      id: 1,
      cls: "text-md-right",
      count: 820,
      info: (
        <>
          Happy Users <br /> Around The World
        </>
      ),
    },
    {
      id: 2,
      cls: "",
      count: 120,
      info: (
        <>
          Projects <br /> Already Done
        </>
      ),
    },
    {
      id: 3,
      cls: "",
      count: 20,
      info: (
        <>
          Get Rewards <br /> From Other Story
        </>
      ),
    },
  ],
};
const { logo, counter_info } = footter_counter;
const FooterCounter = () => {
  const { homeData, url } = useHomeContext();
  return (
    <>
      <div className="tp-footer-counter-area theme-bg pt-60 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-6 text-lg-start mb-30">
              <div className="tp-counter-logo">
                <img
                  src={`https://apps.profectaperdana.com/images/logos.png`}
                  alt="theme-pure"
                />
              </div>
            </div>
            {/* {counter_info.map((item, i) => ( */}
            <div className={`col-xl-3 col-lg-6 col-md-6 text-md-right mb-30`}>
              <div className="footer-counter-content d-md-flex align-items-center">
                <h2>{homeData?.data?.costumer_total}</h2>
                <div className="counter-text">
                  <h3>
                    {" "}
                    Happy Customers <br /> Across Indonesia
                  </h3>
                </div>
              </div>
            </div>
            <div className={`col-xl-3 col-lg-6 col-md-6 mb-30`}>
              <div className="footer-counter-content d-md-flex align-items-center">
                <h2>{homeData?.data?.sales_total}</h2>
                <div className="counter-text">
                  <h3>
                    {" "}
                    Products <br /> Sold
                  </h3>
                </div>
              </div>
            </div>
            <div className={`col-xl-3 col-lg-6 col-md-6 mb-30`}>
              <div className="footer-counter-content d-md-flex align-items-center">
                <div className="counter-text">
                  <h3 className="me-2">
                    {" "}
                    Established <br /> Since
                  </h3>
                </div>{" "}
                <h2>{homeData?.data?.established}</h2>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCounter;
