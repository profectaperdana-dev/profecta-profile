import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Career from '../components/career';
import CareerDetails from '../components/career-details';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={ "PROFECTA PERDANA | career-detail" } />
            <CareerDetails />
        </Wrapper>
    );
};

export default index;