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
        <Field type="text" name="username" placeholder="Username" />
       </div>
       <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button>Register</button>
     </Form>
      {signUp.map((items, index) => {
        return (
           <div key={index}>
           <h2>{items.username}</h2>
           <p>{items.password}</p>
           </div>
        )
      })}
    </div>
  );
}

const FormikNewUser = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username Required"),
      password: Yup.string()
      .min(8, "Password must be 8 or more characters")
      .required("Password required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    if (values.username === "") {
      setErrors({ username: "That username is already taken" });
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