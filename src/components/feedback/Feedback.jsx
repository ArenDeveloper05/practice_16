import PageBanner from "../common/page-banner/PageBanner";
import ValidationSchemaExample from "./formik/Formik";
import "./Feedback.scss"
const Feedback = () => {
  
  return <div className="feedback">
    <PageBanner />
    <ValidationSchemaExample />
  </div>;
};

export default Feedback;
