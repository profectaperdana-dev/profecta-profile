import React from "react";
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/common/seo";
import Blog from "@/src/components/blog";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog & News - Profecta Perdana"} />
      <Blog />
    </Wrapper>
  );
};

export default index;
