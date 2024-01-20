import React from "react";
import Wrapper from '@/src/layout/wrapper';
import SEO from "@/src/common/seo";
import FormApply from "@/src/components/form-apply";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={ "PROFECTA PERDANA | Form-Apply" } />
            <FormApply />
        </Wrapper>
    );
};

export default index;
