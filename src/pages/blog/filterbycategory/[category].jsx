import React from "react";
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/common/seo";
import Blog from "@/src/components/blog";
import { useRouter } from "next/router";

const FilterCategory = () => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Wrapper>
      <SEO pageTitle={"Blog & News - Profecta Perdana"} />
      <Blog param={category} />
    </Wrapper>
  );
};

export default FilterCategory;
