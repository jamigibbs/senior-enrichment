import React from 'react'
import { Route } from 'react-router-dom';

import Home from './Home'
import Header from './Header'
import Campuses from './Campuses'
import CampusAdd from './CampusAdd'
import Students from './Students'
import StudentAdd from './StudentAdd'
import StudentSingle from './StudentSingle'

const Main = () => {
  return (
    <div className="container root-container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/campuses" component={Campuses} />
      <Route path="/campuses/add" component={CampusAdd} />
      <Route exact path="/students" component={Students} />
      <Route path="/students/add" component={StudentAdd} />
      <Route path="/students/:id" component={StudentSingle} />
    </div>
  );
}

export default Main;
