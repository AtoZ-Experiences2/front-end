import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'
import axios from "axios";

import UserForm from '../ChildrenComponents/UserForm';


function UserForm({ errors, touched, status }) {

  const [signUp, setSignUp] = useState ([])

  useEffect(() => {
    if (status) {
      setSignUp([ ...signUp, status ])
    }
  }, [status])

  return(
    <div>
     <Form>
       <div>
        {touched.username && errors.username && <p>{errors.username} </p>}
        <Field type="text" name="name" placeholder="Name" />
       </div>
       <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <button>Register</button>
     </Form>
      {signUp.map((items, index) => {
        return (
           <div key={index}>
           <h2>{items.name}</h2>
           <p>{items.email}</p>
           </div>
        )
      })}
    </div>
  );
}

const FormikNewUser = withFormik({
  mapPropsToValues({ name, email }) {
    return {
      name: name || "",
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name Required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email required"),
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
})(UserForm);

export default FormikNewUser;