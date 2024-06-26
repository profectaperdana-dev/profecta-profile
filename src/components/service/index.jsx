import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceArea from "./service-area";
import FeatureArea from "./feature-area";
import PricingArea from "./pricing-area";
import Footer from "@/src/layout/footers/footer";
import OnDevelopment from "@/src/components/on-development";

const Service = () => {
  return (
    <>
      {/* <HeaderOne /> */}
      <Breadcrumb title="Product" innertitle="Our Products" />
      {/* <OnDevelopment /> */}
      <ServiceArea />
      {/* <FeatureArea /> .*/}
      {/* <PricingArea /> */}
      <Footer />
    </>
  );
};

export default Service;
