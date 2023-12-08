import Layout from "../layout/Layout";
import Services from "../components/services/Services";
import PageBanner from "../components/common/page-banner/PageBanner";

const ServicesPage = () => {
  return (
    <Layout>
      <PageBanner />
      <Services />
    </Layout>
  );
};

export default ServicesPage;
