import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCampuses } from '../../reducers'
import CampusDelete from './CampusDelete'
import CampusMap from './CampusMap'

const CampusCard = (props) => {

  const { campus } = props
  const studentCount = campus.students.length
  const campusLink = `/campus/${campus.id}`

  return (

    <div className="column column-50">
      <div className="campus-card clearfix">
        <div className="row">

          <div className="column column-50">
            <img src={campus.imageUrl} />
          </div>

          <div className="column column-50">
            {
                props.showDetails === 'true' ? (
                  <div>
                    <h3>{campus.name}</h3>
                    <p>{campus.description}</p>
                      <CampusMap address={campus.address} />
                  </div>
              ) : (
              <Link to={campusLink} >{campus.name}</Link> )
            }
            <p>{studentCount} student{studentCount > 1 && 's'}</p>

            <div className="actions">
              <button type="button" className="button button-outline">Edit Campus</button>
              <CampusDelete id={campus.id} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default CampusCard
