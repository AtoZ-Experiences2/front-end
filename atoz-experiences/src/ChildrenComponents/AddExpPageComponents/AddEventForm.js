import React from 'react';
import { Field } from 'formik';

export default function AddEventForm ({ touched, errors }) {

  return (
    <div>
        <h4>What activity would you like to add?</h4>
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="New Activity" />
    </div>
  )
}