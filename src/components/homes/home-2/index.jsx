import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import SliderArea from "./slider-area";
import AboutArea from "./about-area";
import ServiceArea from "./service-area";
import SupportArea from "./support-area";
import FeatureArea from "./feature-area";
import PortfolioArea from "./portfolio-area";
import TeamArea from "./team-area";
import FeaturesLevel from "./features-level";
import BrandArea from "./brand-area";
import CtaArea from "./cta-area";
import BlogArea from "./blog-area";
import FooterCounter from "./footer-counter";
import Footer from "@/src/layout/footers/footer";
import OnDevelopment from "@/src/pages/on-development";
import { HomeProvider } from "./home-context";

const HomeTwo = () => {
  return (
    <HomeProvider>
      {/* <HeaderTwo /> */}
      {/* <OnDevelopment /> */}
      <SliderArea />
      <AboutArea />
      {/* <ServiceArea /> */}
      {/* <SupportArea /> */}
      {/* <FeatureArea /> */}
      <PortfolioArea />
      <TeamArea />
      {/* <FeaturesLevel /> */}
      {/* <BrandArea /> */}
      <FooterCounter />
      <CtaArea />
      <BlogArea />

      <Footer style_2={true} />
    </HomeProvider>
  );
};

export default HomeTwo;
