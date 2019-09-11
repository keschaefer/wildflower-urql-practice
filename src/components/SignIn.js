import React, { Fragment } from 'react'
import { Formik, Field, Form } from 'formik'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  form: {
    width: '50%'
  }
})

const SignIn = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <h1>Sign In To Your Account</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log('submitting')
        }}
        render={() => {
          return (
            <Form className={classes.form}>
              <Field type="email" name="email" placeholder="Email" />
              <Field type="password" name="password" placeholder="Password" />
            </Form>
          )
        }}
      />
    </Fragment>
  )
}

export default SignIn
