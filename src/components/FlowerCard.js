import React, { Fragment, useCallback } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { getToken } from '../token'
import { timeDifferenceForDate } from '../dates'
import gql from 'graphql-tag'
import { useMutation } from 'urql'

const useStyles = makeStyles({
  card: {
    maxWidth: '350px',
    margin: '10px'
  }
})

const VOTE_MUTATION = gql`
  mutation VoteMutation($flowerId: ID!) {
    vote(flowerId: $flowerId) {
      flower {
        id
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`
const FlowerCard = ({
  name,
  color,
  img,
  location,
  description,
  votes,
  postedBy,
  createdAt,
  id
}) => {
  const classes = useStyles()
  const isLoggedIn = !!getToken()

  const [state, executeMutation] = useMutation(VOTE_MUTATION)

  const upvote = React.useCallback(() => {
    if (!state.fetching) {
      executeMutation({ flowerId: id })
    }
  }, [state.fetching, executeMutation, id])

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="wildflower"
          image={img}
          title={name}
          height="100"
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{color}</Typography>
          <Typography variant="body1">{location}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
          <Button size="small">Update</Button>
          {isLoggedIn && <div onClick={upvote}>^</div>}
          <div>
            {votes.length} votes | by {postedBy ? postedBy.name : 'Unknown'}
            {timeDifferenceForDate(createdAt)}
          </div>
        </CardActions>
      </Card>
    </Fragment>
  )
}

export default FlowerCard
