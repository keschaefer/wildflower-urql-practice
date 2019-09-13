import React, { Fragment, useCallback } from 'react'
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
  mutation signInMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const SignIn = ({ history }) => {
  const classes = useStyles()
  // const [isLogin, setIsLogin] = useState(true)

  const [state, executeMutation] = useMutation(SIGNIN_MUTATION)

  const mutate = useCallback(
    (email, password) => {
      executeMutation({ email, password }).then(({ data }) => {
        const token = data && data.login.token
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
      <h1>Sign In To Your Account</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ email, password }) => {
          mutate(email, password)
        }}
        render={() => {
          return (
            <Form className={classes.form}>
              <Field type="email" name="email" placeholder="Email" />
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

export default SignIn
