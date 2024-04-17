import React from "react";
import SEO from "../../common/seo";
import AdminLiveChat from "../../components/admin-live-chat";
import AdminLogin from "@/src/components/admin-login";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Admin Live Chat - Profecta Perdana"} />
      {/* <AdminLogin /> */}
      <AdminLiveChat />
    </>
  );
};

export default index;
