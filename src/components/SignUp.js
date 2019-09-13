import React, { Fragment, useCallback } from 'react'
import { Formik, Field, Form } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { useMutation } from 'urql'
import gql from 'graphql-tag'
import { setToken } from '../token'

const useStyles = makeStyles({
  form: {
    width: '50%'
  }
})

const SIGNUP_MUTATION = gql`
  mutation signUpMutation(
    $name: String!
    $email: String!
    $homeState: String!
    $password: String!
  ) {
    signup(
      name: $name
      email: $email
      homeState: $homeState
      password: $password
    ) {
      token
    }
  }
`

const SignUp = ({ history }) => {
  const classes = useStyles()

  const [state, executeMutation] = useMutation(SIGNUP_MUTATION)

  const mutate = useCallback(
    (name, email, homeState, password) => {
      executeMutation({ name, email, homeState, password }).then(({ data }) => {
        const token = data && data.signup.token
        if (token) {
          setToken(token)
          history.push('/')
        }
      })
    },
    [executeMutation, history]
  )

  return (
    <Fragment>
      <h1>Sign Up for an Account</h1>
      <Formik
        initialValues={{ name: '', email: '', homeState: '', password: '' }}
        onSubmit={({ name, email, homeState, password }) => {
          mutate(name, email, homeState, password)
        }}
        render={() => {
          return (
            <Form className={classes.form}>
              <Field type="input" name="name" placeholder="Full Name" />
              <Field type="email" name="email" placeholder="Email" />
              <Field type="input" name="homeState" placeholder="Home State" />
              <Field type="password" name="password" placeholder="Password" />
              <button disabled={state.fetching} type="submit">
                Submit
              </button>
            </Form>
          )
        }}
      />
    </Fragment>
  )
}

export default SignUp
