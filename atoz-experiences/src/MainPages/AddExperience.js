import React from 'react';
import { Field } from 'formik';
import AddEventForm from '../ChildrenComponents/AddExpPageComponents/AddEventForm'

export default function AddExperience({ touched, errors }) {

  return(
    <div>
      <h4>What experience would you like to add?</h4>
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="New Experience" />
    </div>
  )
}