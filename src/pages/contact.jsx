import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Contact from "../components/contact";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact - Profecta Perdana"} />
      <Contact />
    </Wrapper>
  );
};

export default index;
