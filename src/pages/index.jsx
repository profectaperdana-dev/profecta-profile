import SEO from "../common/seo";
import OnDevelopment from "../components/on-development/";
import Wrapper from "../layout/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={ "Sectox - CCTV & Security" } />
      <OnDevelopment />
    </Wrapper>
  );
}
