import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import CheckoutArea from "./checkout-area";
import Footer from "@/src/layout/footers/footer";

const Checkout = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Checkout" innertitle="Checkout" />
      <CheckoutArea />
      <Footer />   
    </>
  );
};

export default Checkout;
