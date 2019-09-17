import React, { Fragment } from 'react'
import FlowerCard from './FlowerCard'
import { Grid, CircularProgress } from '@material-ui/core'
import gql from 'graphql-tag'
import { useQuery } from 'urql'

const FETCHFLOWERS_QUERY = gql`
  {
    feed {
      flowers {
        id
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
  }
`

const Main = () => {
  const [result] = useQuery({ query: FETCHFLOWERS_QUERY })
  const { data, fetching, error } = result

  if (fetching) return <CircularProgress />
  if (error) return <div>{error}</div>

  const flowerList = data.feed.flowers

  return (
    <Fragment>
      <Grid container spacing={5}>
        {flowerList.map(flower => {
          return (
            <Grid key={flower.id} item xs={4}>
              <FlowerCard
                name={flower.name}
                color={flower.color}
                location={flower.location}
                description={flower.description}
                img={flower.img}
                votes={flower.votes}
                createdAt={flower.createdAt}
                postedBy={flower.postedBy}
                id={flower.id}
              />
            </Grid>
          )
        })}
      </Grid>
    </Fragment>
  )
}

export default Main
