import React from "react";
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/common/seo";
import BlogDetails from "@/src/components/blog-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog & News Content - Profecta Perdana"} />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
