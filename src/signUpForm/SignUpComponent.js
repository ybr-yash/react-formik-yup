import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SubmitFunction from './SubmitFunction';

const initialValues={
    email: '',
    password: '',
    confirmPassword: '',
  }

const validationSchema = {
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  }


const SignUpComponent = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={SubmitFunction}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpComponent;
