import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ShopDetailsArea from "./shop-details-area";
import Footer from "@/src/layout/footers/footer";

const ShopDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title=" Shop Details" innertitle="Our Products" />
      <ShopDetailsArea />

      <Footer />
    </>
  );
};

export default ShopDetails;
