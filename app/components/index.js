import React from 'react'
import { Route } from 'react-router-dom';

import { CampusMain, CampusAdd, CampusSingle } from './Campuses'
import { StudentsMain, StudentAdd, StudentSingle } from './Students'

import Home from './Home'
import Header from './Header'

const Main = () => {
  return (
    <div className="container root-container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/campuses" component={CampusMain} />
      <Route path="/campuses/add" component={CampusAdd} />
      <Route path="/campuses/:id" component={CampusSingle} />
      <Route exact path="/students" component={StudentsMain} />
      <Route path="/students/add" component={StudentAdd} />
      <Route path="/students/:id" component={StudentSingle} />
    </div>
  );
}

export default Main;
