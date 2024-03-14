import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import GalleryArea from "./gallery-area";

const Gallery = () => {
  return (
    <>
      {/* <HeaderOne /> */}

      <Breadcrumb title="Gallery" innertitle="Gallery" />
      <GalleryArea />
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default Gallery;
