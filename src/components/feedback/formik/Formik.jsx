import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./Formik.scss"

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  telephone: Yup.number()
    .required('Required')
    .min(9, 'Must be at least 9 digits'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string()
  .min(1, 'Too Short!')
  .max(400, 'Too Long!')
  .required('Required'),
});

const ValidationSchemaExample = () => (
  <div className='formik'>
    <h3>ՀԵՏԱԴԱՐՁ ԿԱՊ</h3>
    <Formik
      initialValues={{
        firstName: '',
        telephone: '',
        email: '',
        message:''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" placeholder="Անուն"/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="telephone" placeholder="Հեռախոսահամար"/>
          {errors.telephone && touched.telephone ? (
            <div>{errors.telephone}</div>
          ) : null}
          <Field name="email" type="email" placeholder="Էլ․ հասցե"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="message" placeholder="Հաղորդագրություն"/>
          {errors.message && touched.message ? (
            <div>{errors.message}</div>
          ) : null}
           <button type="submit">Ուղարկել</button>
        </Form>
        
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;
