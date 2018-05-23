import React from 'react'
import { Link } from 'react-router-dom'
import CampusDelete from './CampusDelete'

const CampusCard = (props) => {
  const studentCount = props.campus.students.length;
  const { campus } = props

  const campusPage = {
    pathname: `/campuses/${campus.id}`,
    search: '',
    hash: '',
    state: { campus }
  }

  return (
    <div className="column column-50">
      <div className="campus-card clearfix">
        <div className="row">

          <div className="column column-50">
            <img src={campus.imageUrl} />
          </div>

          <div className="column column-50">
            <Link to={campusPage}>{campus.name}</Link>
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
