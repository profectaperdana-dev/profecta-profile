import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "@/utils/utils";
import React, { Suspense, useEffect } from "react";
import LiveChat from "@/src/components/live-chat";
import HeaderOne from "./headers/header";
import { LoadingProvider } from "../components/loading/loading-context";
import Whatsapp from "../components/whatsapp";
const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
      <HeaderOne />
      <LoadingProvider>{children}</LoadingProvider>
      <ScrollToTop />
      <Whatsapp />
      {/* <LiveChat /> */}
    </>
  );
};

export default Wrapper;
