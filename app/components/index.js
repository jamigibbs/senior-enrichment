import React from 'react'
import { Route } from 'react-router-dom';

import Home from './Home'
import Campuses from './Campuses'
import Students from './Students'
import Header from './Header'
import CampusAdd from './CampusAdd'

const Main = () => {
  return (
    <div className="container root-container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/campuses" component={Campuses} />
      <Route path="/campuses/add" component={CampusAdd} />
      <Route path="/students" component={Students} />
    </div>
  );
}

export default Main;
