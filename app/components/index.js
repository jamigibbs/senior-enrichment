import React from 'react'
import { Route } from 'react-router-dom';

import { CampusMain, CampusAdd, CampusView } from './Campuses'
import { StudentsMain, StudentAdd, StudentView } from './Students'

import Home from './Home'
import Header from './Header'

const Main = () => {
  return (
    <div className="container root-container">
      <Header />
      <Route exact path="/" component={Home} />

      <Route exact path="/campuses" component={CampusMain} />
      <Route exact path="/campuses/add" component={CampusAdd} />
      <Route path="/campus/:id" component={CampusView} />

      <Route exact path="/students/add" component={StudentAdd} />
      <Route exact path="/students" component={StudentsMain} />
      <Route path="/student/:id" component={StudentView} />
    </div>
  );
}

export default Main;
