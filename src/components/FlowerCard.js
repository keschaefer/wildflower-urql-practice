import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    maxWidth: '350px',
    margin: '10px'
  }
})

const FlowerCard = ({ name, color, img, location }) => {
  const classes = useStyles()

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
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
          <Button size="small">Update</Button>
        </CardActions>
      </Card>
    </Fragment>
  )
}

export default FlowerCard
