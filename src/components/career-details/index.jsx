import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import React from "react";
import CareerDetail from "./career-details";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";
import HeaderOne from "@/src/layout/headers/header";

const ServiceDetails = () => {
  return (
    <>
      {/* <HeaderOne /> */ }
      <Breadcrumb title="Career Details" innertitle="Career Details" />
      <CareerDetail />
      {/* <Footer /> */ }
    </>
  );
};

export default ServiceDetails;
