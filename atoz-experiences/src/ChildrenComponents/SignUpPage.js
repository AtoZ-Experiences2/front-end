import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { Button } from 'reactstrap';

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
      <Field type="text" name="name" placeholder="Your Name" />

      {touched.username && errors.username && <p>{errors.username} </p>}
      <Field type="text" name="username" placeholder="uniqueusername123:)" />
      
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="example@email.com" />

      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="password" />
      
      <Button color="success" size="lg">Register</Button> {' '}
      
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      username: values.username || "",
      name: values.name || "",
      email: values.email || "",
      password: values.password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("We do need your name, even if it looks funny"),
    email: Yup.string()
      .email("Please enter a valid email address!")
      .required("Please enter a valid email address!"),
    password: Yup.string().required("Please enter a valid password!"),
    username: Yup.string()
      .required("Please enter a unique username!")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }, props) {
    if (values.email === "") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://a-to-z-experience.herokuapp.com/api/users/register", values)
        .then(response => {
          alert(`Congrats, ${response.data.registeredUser.name}! You've
          successfully created an account. You are now signed in!`)
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
