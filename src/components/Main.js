import React, { Fragment } from 'react'
import FlowerCard from './FlowerCard'
import flowers from '../flowers.json'
import Grid from '@material-ui/core/Grid'

const Main = () => {
  return (
    <Fragment>
      <Grid container spacing={5}>
        {flowers.map(flower => {
          return (
            <Grid key={flower.name} item xs={4}>
              <FlowerCard
                name={flower.name}
                color={flower.color}
                location={flower.location}
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
