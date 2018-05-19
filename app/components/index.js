import React from 'react'
import { Route } from 'react-router-dom';

import Home from './Home'
import Campuses from './Campuses'
import Students from './Students'
import Header from './Header'

const Main = () => {
  return (
    <Router>
      <div className="container root-container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/campuses" component={Campuses} />
        <Route path="/students" component={Students} />
      </div>
    </Router>
  );
}

export default Main;
