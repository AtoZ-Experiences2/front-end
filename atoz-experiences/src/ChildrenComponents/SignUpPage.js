import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'
import axios from "axios";

// import UserForm from '../ChildrenComponents/UserForm';


const SignUpPage = ({ errors, touched, status }) => {

  const [signUp, setSignUp] = useState ([{}])

  useEffect(() => {
    if (status) {
      setSignUp([ ...signUp, status ])
    }
  }, [status])

  return(
    <div className='sign-up-form'>
     <Form>
      {touched.name && errors.name && <p>{errors.name} </p>}
      <Field type="text" name="name" placeholder="Name" />
      
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="example@email.com" />

      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="We'll keep this secret!" />
      
      <Button color="success" size="lg">Register</Button> {' '}
      
      {signUp.map((items, index) => {
        return (
           <div key={index}>
           <h2>{items.name}</h2>
           <p>{items.email}</p>
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
      name: values.name || "",
      email: values.email || "",
      password: values.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name Required"),
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
})(SignUpPage);
