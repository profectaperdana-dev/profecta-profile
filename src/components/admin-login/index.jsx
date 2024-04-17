import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import React from "react";

import AdminLoginArea from "./admin-login-area";

const AdminLogin = () => {
  return (
    <>
      {/* <HeaderOne /> */}
      <Breadcrumb title="authentication" innertitle="Authentication Page" />
      <AdminLoginArea />
    </>
  );
};

export default AdminLogin;
