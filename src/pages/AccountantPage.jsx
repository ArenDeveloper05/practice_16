import PageBanner from "../components/common/page-banner/PageBanner";
import Accountant from "../components/home/home-section/home-header/accountant/Accountant";
import Layout from "../layout/Layout";

const AccountantPage = () => {
  return (
    <Layout>
        <PageBanner />
      <Accountant />
    </Layout>
  );
};

export default AccountantPage;