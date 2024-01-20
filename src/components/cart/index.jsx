import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import CartArea from "./cart-area";
import Footer from "@/src/layout/footers/footer";

const Cart = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Cart" innertitle="My cart" />
      <CartArea />
      <Footer />
    </>
  );
};

export default Cart;
