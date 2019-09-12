import React from 'react'
import Main from './Main'
import SignUp from './SignUp'
import SignIn from './SignIn'
import AddFlower from './AddFlower'
import { Route, Link, Switch } from 'react-router-dom'
import { Typography, Button, Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getToken, deleteToken } from '../token'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const App = props => {
  const classes = useStyles()
  const isLoggedIn = !!getToken()

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Rocky Mountain Wildflowers</Typography>
          <div>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            {isLoggedIn && (
              <Link to="/add">
                <Button>Add Flower</Button>
              </Link>
            )}
            {isLoggedIn ? (
              <div>
                <button
                  onClick={() => {
                    deleteToken()
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>
            )}
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/add" component={AddFlower} />
      </Switch>
    </div>
  )
}

export default App
