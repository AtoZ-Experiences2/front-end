import React from 'react';
import { Field } from 'formik'

export default function TopExp ( { touched, errors }) {

  return (
    <div>
      <h4>Top Experience!</h4>
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="Top Experience" />
    </div>
  )
}