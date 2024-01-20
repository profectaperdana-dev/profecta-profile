import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={ "PROFECTA PERDANA | Form-Apply" } />
      <FormApply />
    </Wrapper>
  );
};

export default index;
