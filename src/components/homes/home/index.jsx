import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import FactArea from "./fact-area";
import SliderArea from "./slider-area";
import ServiceArea from "./service-area";
import ProjectArea from "./project-area";
import PricingArea from "./pricing-area";
import FeatureArea from "./feature-area";
import TestimonialArea from "./testimonial-area";
import BrandArea from "./brand-area";
import CtaArea from "./cta-area";
import NewsFeed from "./news-feed";
import Footer from "@/src/layout/footers/footer";
import NotFound from "@/src/pages/404";
import OnDevelopment from "@/src/pages/on-development";

const HomeOne = () => {
  return (
    <>
      <OnDevelopment />
      {/* <HeaderOne />
      <SliderArea />
      <AboutArea />
      <FactArea />
      <ServiceArea />
      <ProjectArea />
      <PricingArea />
      <FeatureArea />
      <TestimonialArea />
      <BrandArea />
      <CtaArea />
      <NewsFeed />
      <Footer /> */}
    </>
  );
};

export default HomeOne;
