import React, { Fragment } from 'react'
import { Formik, Field, Form } from 'formik'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  form: {
    width: '50%'
  }
})

const SignUp = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <h1>Sign Up for an Account</h1>
      <Formik
        initialValues={{ name: '', email: '', homeState: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log('submitting')
        }}
        render={() => {
          return (
            <Form className={classes.form}>
              <Field type="input" name="name" placeholder="Full Name" />
              <Field type="email" name="email" placeholder="Email" />
              <Field type="input" name="homeState" placeholder="Home State" />
              <Field type="password" name="password" placeholder="Password" />
            </Form>
          )
        }}
      />
    </Fragment>
  )
}

export default SignUp
