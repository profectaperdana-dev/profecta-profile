import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import AdminLogin from "../components/admin-login";

const index = () => {
  return (
    // <Wrapper>
    <>
      <SEO pageTitle={"Admin Live Chat Login - Profecta Perdana"} />
      <AdminLogin />
    </>
    // </Wrapper>
  );
};

export default index;
