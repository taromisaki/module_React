import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from '../containers/home'
import View from '../containers/view'

export default () => {
  return (<Router>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/view" component={View}/>

      <p><Link to={{
        pathname: '/',
        search: '?sort=name'
      }}>home</Link></p>
      <p><Link to="/view">view</Link></p>
    </div>
  </Router>)
}