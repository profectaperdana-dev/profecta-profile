import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ContactArea from "./contact-area";
import ContactInfo from "./contact-info";
import Footer from "@/src/layout/footers/footer";

const Contact = () => {
  return (
    <>
      {/* <HeaderOne /> */ }
      <Breadcrumb title={ " Contact" } innertitle={ "Contact Us" } />
      <ContactArea />
      <ContactInfo />
      {/* <Footer /> */ }
    </>
  );
};

export default Contact;
