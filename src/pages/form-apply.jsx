import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import FormApply from "../components/form-apply/form-apply";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"PROFECTA PERDANA | Form-Apply"} />
      <FormApply />
    </Wrapper>
  );
};

export default index;
