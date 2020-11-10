import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { Component } from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export class FormikForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={this.props.submitHandler}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <Form name="signup">
            <Field name="name" />
            {/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}
            <ErrorMessage name="name" />
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormikForm;
