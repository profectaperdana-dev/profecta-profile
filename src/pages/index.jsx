import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";
import OnDevelopment from "../components/on-development/";
import Wrapper from "../layout/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={"Homepage - Profecta Perdana"} />
      <HomeTwo />
    </Wrapper>
  );
}
