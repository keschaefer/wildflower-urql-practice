import React, { useCallback, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Field, Form } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from 'urql'

const useStyles = makeStyles({
  form: {
    maxWidth: '350px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    width: '250px',
    margin: '10px'
  },
  button: {
    width: '100px',
    margin: '10px'
  }
})

const POST_MUTATION = gql`
  mutation postMutation(
    $name: String!
    $color: String!
    $location: String!
    $description: String!
    $img: String!
  ) {
    post(
      name: $name
      color: $color
      location: $location
      description: $description
      img: $img
    ) {
      id
      createdAt
      name
      color
      location
      description
      img
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
`

const AddFlower = ({ history }) => {
  const classes = useStyles()

  const [state, exectuteMutation] = useMutation(POST_MUTATION)

  const submit = useCallback(
    (name, color, location, description, img) => {
      exectuteMutation({ name, color, location, description, img }).then(() => {
        history.push('/')
      })
    },
    [exectuteMutation, history]
  )

  const uploadFile = async e => {
    console.log(e.target.files[0])
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'rockyMountainWildflowers')

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/keschaefer/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    return file
  }

  return (
    <Fragment>
      <h1>Add a New Flower</h1>
      <Formik
        initialValues={{
          name: '',
          color: '',
          location: '',
          description: '',
          img: ''
        }}
        onSubmit={({ name, color, location, description, img }) => {
          submit(name, color, location, description, img)
        }}
        render={({ setFieldValue }) => {
          return (
            <Form className={classes.form}>
              <Field
                className={classes.input}
                type="input"
                name="name"
                placeholder="Name of flower"
              />
              <Field
                className={classes.input}
                type="input"
                name="color"
                placeholder="Color of flower"
              />
              <Field
                className={classes.input}
                type="input"
                name="location"
                placeholder="Where did you see this flower"
              />
              <Field
                className={classes.input}
                type="input"
                name="description"
                placeholder="Describe this flower"
              />
              <Field
                className={classes.input}
                type="file"
                name="img"
                // onChange={e => {
                //   setFieldValue(uploadFile(e))
                // }}
              />
              <button
                className={classes.button}
                disabled={state.fetching}
                type="submit"
              >
                Create
              </button>
            </Form>
          )
        }}
      />
    </Fragment>
  )
}

export default AddFlower
