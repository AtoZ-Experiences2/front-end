import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { Button } from 'reactstrap';

// import UserForm from '../ChildrenComponents/UserForm';


const SignInPage = ({ errors, touched, status }) => {

  const [signIn, setSignIn] = useState([{}])

  useEffect(() => {
    if (status) {
      setSignIn([...signIn, status])
    }
  }, [status])

  return (
    <div className='sign-up-form'>
      <Form>
         {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="example@email.com" />

        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="password" />

        <Button color="success" size="lg">Register</Button> {' '}

        {signIn.map((items, index) => {
          return (
            <div key={index}>
              <h2>{items.email}</h2>
              <p>{items.password}</p>
            </div>
          )
        })}
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      email: values.email || "",
      password: values.password || ""
    };
  },

  validationSchema: Yup.object().shape({
     email: Yup.string()
      .email("Email not valid")
      .required("Email required"),
    password: Yup.string().required("Please enter a valid password!")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    if (values.email === "") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
          setStatus(response.data);
          resetForm();
          setSubmitting(false);
        })
        .catch(error => {
          console.log(error);
          setSubmitting(false);
        });
    }
  }
})(SignInPage);
