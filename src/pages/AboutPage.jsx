import Layout from "../layout/Layout";
import About from "../components/about/About";
import PageBanner from "../components/common/page-banner/PageBanner";

const AboutPage = () => {
  return (
    <Layout>
      <PageBanner />
      <About />
    </Layout>
  );
};

export default AboutPage;
