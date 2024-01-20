import { useRouter } from 'next/router';
import Wrapper from '@/src/layout/wrapper';
import CareerDetails from '@/src/components/career-details';
import SEO from '@/src/common/seo';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={ "PROFECTA PERDANA | career-detail" } />
            <CareerDetails />
        </Wrapper>
    );
};

export default index;
