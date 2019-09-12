import React, { Fragment } from 'react'
import { setToken } from '../token'
import { useMutation } from 'urql'
import { Formik, Field, Form } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import gql from 'graphql-tag'

const useStyles = makeStyles({
  form: {
    width: '50%'
  }
})

const SIGNIN_MUTATION = gql`
  mutation signUpMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const SignIn = props => {
  console.log({ props })
  const classes = useStyles()
  // const [state, executeMutation] = useMutation(SIGNIN_MUTATION)

  // const mutate = React.useCallback(() => {
  //   executeMutation({ email, password, name }).then(({ data }) => {
  //     const token = data && data[login].token
  //     if (token) {
  //       setToken(token)
  //       history.pushState('/')
  //     }
  //   })
  // })
  return (
    <Fragment>
      <h1>Sign In To Your Account</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log({ values })
        }}
        render={() => {
          return (
            <Form className={classes.form}>
              <Field type="email" name="email" placeholder="Email" />
              <Field type="password" name="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </Form>
          )
        }}
      />
    </Fragment>
  )
}

export default SignIn
