import React, { useState, useCallback, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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

  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [state, exectuteMutation] = useMutation(POST_MUTATION)

  const submit = useCallback(() => {
    exectuteMutation({ name, color, location, description, img }).then(() => {
      history.push('/')
    })
  }, [exectuteMutation, name, color, location, description, img, history])

  return (
    <Fragment>
      <form className={classes.form}>
        <input
          className={classes.input}
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          type="text"
          placeholder="Name of flower"
        />
        <input
          className={classes.input}
          value={color}
          onChange={e => {
            setColor(e.target.value)
          }}
          type="text"
          placeholder="Color of flower"
        />
        <input
          className={classes.input}
          value={location}
          onChange={e => {
            setLocation(e.target.value)
          }}
          type="text"
          placeholder="Where did you see this flower"
        />
        <input
          className={classes.input}
          value={description}
          onChange={e => {
            setDescription(e.target.value)
          }}
          type="text"
          placeholder="Describe this flower"
        />
        <input
          className={classes.input}
          value={img}
          onChange={e => {
            setImg(e.target.value)
          }}
          type="text"
          placeholder="Image URL"
        />
        <button
          className={classes.button}
          disabled={state.fetching}
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </Fragment>
  )
}

export default AddFlower
