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
            <Grid key={flower.name} item xs={4}>
              <FlowerCard
                name={flower.name}
                color={flower.color}
                location={flower.location}
                description={flower.description}
                img={flower.img}
              />
            </Grid>
          )
        })}
      </Grid>
    </Fragment>
  )
}

export default Main
