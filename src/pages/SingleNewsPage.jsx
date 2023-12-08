import PageBanner from "../components/common/page-banner/PageBanner";
import SingleNews from "../components/single-news/SingleNews";
import Layout from "../layout/Layout";

const SingleNewsPage = () => {
    return (
        <Layout >
            <PageBanner />
            <SingleNews />
        </Layout>
    );
}

export default SingleNewsPage