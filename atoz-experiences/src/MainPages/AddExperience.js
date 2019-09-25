import React, { useState, useEffect } from 'react';
import { Field, withFormik, Form } from 'formik';
import axios from 'axios';

export default function AddExperience({ touched, errors }) {
  const [addExperience, setAddExperience] = useState([])


  useEffect(() => {
      axios
        .post("https://a-to-z-experience.herokuapp.com/api/experiences")
        .then(resp => {
          setAddExperience(resp.data.results);
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [])

  return(
    <Form>
      <h4>What experience would you like to add?</h4>
      {touched.category && errors.category && <p>{errors.category}</p>}
      <Field type="text" name="name" placeholder="New Experience" />
    </Form>
  )
}
 withFormik({
  mapPropsToValues: (values) => {
    return {
      event_name: values.event_name || '',
      location: values.location || '',
      date_time: values.date_time || '',
      cost: values.cost || '',
      category: values.category || ''
    }
  }
})


// Create delete and create components here.