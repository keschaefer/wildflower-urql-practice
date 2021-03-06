import React from 'react'
import Header from './Header'
import Main from './Main'
import SignUp from './SignUp'
import SignIn from './SignIn'
import AddFlower from './AddFlower'
import Search from './Search'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/add" component={AddFlower} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  )
}

export default App
