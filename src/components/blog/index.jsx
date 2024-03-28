import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PostboxArea from "./postbox-area";
import Footer from "@/src/layout/footers/footer";

const Blog = ({ param = "" }) => {
  return (
    <>
      <main>
        <Breadcrumb title="Blog" innertitle="Blog & News" />
        <PostboxArea param={param} />
      </main>
    </>
  );
};

export default Blog;
