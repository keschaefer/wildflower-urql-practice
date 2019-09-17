import React from 'react'
import { Typography, Button, Toolbar, AppBar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { getToken, deleteToken } from '../token'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const Header = () => {
  const classes = useStyles()
  const isLoggedIn = !!getToken()
  return (
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
          <Link to="/search">
            <Button>SEARCH</Button>
          </Link>
          {isLoggedIn ? (
            <div>
              <Button
                onClick={() => {
                  deleteToken()
                }}
              >
                Sign Out
              </Button>
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
  )
}

export default Header
