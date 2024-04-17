import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React, { useEffect, useState } from "react";
import AboutArea from "./about-area";
import ServiceArea from "./service-area";
import GallaryArea from "./gallary-area";
import OurHistory from "./our-history";
import FeatureArea from "./feature-area";
import BlogArea from "./blog-area";
import Footer from "@/src/layout/footers/footer";
import OnDevelopment from "@/src/components/on-development";
import url from "@/utils/globals";
import { useLoadingContext } from "../loading/loading-context";
import Loading from "../loading";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const { isLoading, setIsLoading } = useLoadingContext();

  const getabout = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getabout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setAboutData(data);
      // console.log(data);
    });
  };

  useEffect(() => {
    getabout().then(() => {
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {/* <HeaderOne /> */}
      <Breadcrumb title="About" innertitle="Profecta Perdana" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AboutArea aboutData={aboutData?.data} />
          <ServiceArea aboutData={aboutData?.data} />
          <GallaryArea aboutData={aboutData?.data} />
          <OurHistory aboutData={aboutData?.data} />
        </>
      )}

      {/* <FeatureArea /> */}
      {/* <BlogArea /> */}
      {/* <OnDevelopment /> */}

      <Footer />
    </>
  );
};

export default About;
