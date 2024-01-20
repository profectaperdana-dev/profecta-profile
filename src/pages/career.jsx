import React, { lazy, Suspense } from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Career from '../components/career';
import Loader from '../common/loader';

const index = () => {
    return (
        <Suspense fallback={ <Loader /> }>
            <Wrapper>
                <SEO pageTitle={ "PROFECTA PERDANA | Career" } />
                <Career />
            </Wrapper>
        </Suspense>
    );
};

export default index;