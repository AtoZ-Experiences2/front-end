import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import NavBar from '../ChildrenComponents/NavBar';

function AddExperience ({ errors, touched, isSubmitting }) {
 return (
  <div className='add-exp-page'>
    <NavBar />
    <Form className='addexp-form'>
      <div>
        {touched.event_name && errors.event_name && <p>{errors.event_name}</p>}
        <p>Give your experience a name!</p>
        <Field type="text" name="event_name" placeholder="Weekend at Bernie's?" />
      </div>
      <div>
        {touched.location && errors.location && <p>{errors.location}</p>}
        <p>Where is this taking place?</p>
        <Field type="text" name="location" placeholder="Location"/>
      </div>
      <div>
        {touched.date_time && errors.date_time && <p>{errors.date_time}</p>}
        <p>Which date works best?</p>
        <Field type="date" name="date_time" />
      </div>
      <div>
        {touched.cost && errors.cost && <p>{errors.cost}</p>}
        <p>Set the price: (max is 499) </p>
        <Field type="number" name="cost" min="0" max="$2500" />
      </div>
      <div>
          <p>Pick a category your experience best falls into:</p>
          <Field component="select" name="category">
            <option value="dining">Dining</option>
            <option value="exercise">Exercise</option>
            <option value="outdoors">Outdoors</option>
            <option value="party">Party</option>
            <option value="movie">Movie Night</option>
          </Field>
        </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  </div>
 )
}

export default withFormik({
 mapPropsToValues: (values) => {
   return {
     event_name: values.event_name || "",
     location: values.location || "",
     date_time: values.date_time || "",
     cost: values.cost || "0",
     category: values.category || "Dining"
   }
 },
 validationSchema: Yup.object().shape({
   event_name: Yup.string()
     .required("Your experience needs a name!"),
   location: Yup.string()
     .required("Please enter a location!"),
   date_time: Yup.string()
     .required("Please enter a date!"),
   cost: Yup.number()
   .required("Please set a price!"),
 }),
 handleSubmit: (values, { setSubmitting }) => {

      axios.post("https://a-to-z-experience.herokuapp.com/api/experiences", values)
       .then(res => {
         //console.log(res); // Data was created successfully and logs to console
         alert(res.data.message);
         window.location.reload();
       })
       .catch(err => {
         console.log(err); // There was an error creating the data and logs to console
         setSubmitting(false);
       })
     }
})(AddExperience);

// Create delete and create components here.