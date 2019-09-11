import React from 'react'
import Main from './Main'
import { Typography, Button, Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Rocky Mountain Wildflowers</Typography>
          <div>
            <Button color="inherit">Sign In</Button>
            <Button color="inherit">Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Main />
    </div>
  )
}

export default App
