import Link from "next/link";
import React from "react";
import Footer from "../layout/footers/footer";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import { color } from "framer-motion";

const index = () => {
  return (
    <>
      <SEO pageTitle={ "Oops.! Page Not Found!" } />
      <HeaderOne />
      <div id="smooth-wrapper error_page">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-50">
                      <img src="/assets/img/text-404.png" alt="theme-pure" />
                      <h1 style={ { fontSize: "20vw", color: "#84b544" } }></h1>
                      <h4 className="error-title-sm">Oops.! Page Not Found!</h4>
                      <p>The page you are looking for does not exist'</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
