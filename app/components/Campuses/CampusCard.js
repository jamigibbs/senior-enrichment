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
                  <div className="content-area">
                    <h3>{campus.name}</h3>
                    <p>Students: {studentCount}</p>
                    {
                      props.showDetails === 'true' &&
                        <CampusMap address={campus.address} />
                      }
                    <p className="description">{campus.description}</p>
                  </div>
              ) : (
              <Link to={campusLink} >{campus.name}</Link> )
            }

            <div className="actions">
              {/* <button type="button" className="button button-outline">Edit Campus</button> */}
              <Link to={`/campus/edit/${campus.id}`} className="button button-outline">Edit Campus</Link>
              <CampusDelete id={campus.id} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default CampusCard
