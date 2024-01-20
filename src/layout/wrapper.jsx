import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import LiveChat from "@/src/components/live-chat";
const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
      <HeaderOne />
      {children}
      <ScrollToTop />
      <LiveChat />
    </>
  );
};

export default Wrapper;
