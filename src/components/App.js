import React from 'react'
import Main from './Main'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">Rocky Mountain Wildflowers</Typography>
            <div>
              <Link to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  )
}

export default App
