import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import CareerList from "./career-list";
import Footer from "@/src/layout/footers/footer";

const Service = () => {
  return (
    <>
      {/* <HeaderOne /> */ }
      <Breadcrumb title="Career" innertitle="Available Job(s)" />
      <CareerList />
      {/* <Footer /> */ }
    </>
  );
};

export default Service;
