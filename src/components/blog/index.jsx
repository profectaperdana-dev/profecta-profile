import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PostboxArea from "./postbox-area";
import Footer from "@/src/layout/footers/footer";

const Blog = () => {
  return (
    <>
      <main>
        <Breadcrumb title="Blog" innertitle="News Feeds" />
        <PostboxArea />
      </main>
    </>
  );
};

export default Blog;
