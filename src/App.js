import React from 'react'
import Home from './components/Home'
import Middle from './components/Middle'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'

const  App = ()=> {
  return (
   <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:id">
        <Middle />
      </Route> 

      
    </Switch>
   
   </Router>
  )
}

export default App