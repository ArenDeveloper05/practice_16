import Layout from "../layout/Layout";
import Publications from "../components/publications/Publications";
import PageBanner from "../components/common/page-banner/PageBanner";

const PublicationsPage = () => {
  return (
    <Layout>
      <PageBanner />
      <Publications />
    </Layout>
  );
};

export default PublicationsPage;
