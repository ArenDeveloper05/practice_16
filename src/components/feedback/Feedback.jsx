import ValidationSchemaExample from "./formik/Formik";

import "./Feedback.scss";

const Feedback = () => {
  return (
    <div className="feedback">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868.8585207517974!2d37.63767900485589!3d55.75121474636482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afdeb530959%3A0x2f7bd8f48d4d981f!2z0JPQu9C-0LHQsNGD0LTQuNGCINCR0LjQt9C90LXRgSDQodC10YDQstC40YEg0J7QntCe!5e0!3m2!1sru!2sam!4v1702041991523!5m2!1sru!2sam"
        width="600"
        height="450"
        style={{ border: "0", width: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
      <ValidationSchemaExample />
    </div>
  );
};

export default Feedback;
