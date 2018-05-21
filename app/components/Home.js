import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>An Intergalactic Directory</h1>
          </div>
        </div>
        <div className="row buttons-wrap">
          <div className="column">
            <Link className="button" to="/campuses">Campuses</Link>
            <Link className="button" to="/students">Students</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
