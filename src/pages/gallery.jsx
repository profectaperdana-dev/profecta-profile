import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Gallery from "../components/gallery";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gallery - Profecta Perdana"} />
      <Gallery />
    </Wrapper>
  );
};

export default index;
