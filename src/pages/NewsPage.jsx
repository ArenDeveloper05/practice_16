import PageBanner from "../components/common/page-banner/PageBanner";
import News from "../components/news/News";
import Layout from "../layout/Layout";

const NewsPage = () => {
  return (
    <Layout>
      <PageBanner />
      <News />
    </Layout>
  );
};

export default NewsPage;
