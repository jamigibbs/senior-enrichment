import React from 'react';
import StudentDelete from './StudentDelete'

const StudentCard = (props) => {
  const { student, campus } = props

  return (
    <div className="column column-50">
      <div className="student-card clearfix">
        <div className="row">

          <div className="column column-50">
            <img className="cover float-left" src={props.student.imageUrl} />
          </div>

          <div className="column column-50">

            <div className="student-info">
              <h3><a href="#">{student.fullName}</a></h3>
              { student.campusId && <h4><a href="#">{campus.name}</a></h4> }
            </div>

            <div className="actions">
              <button type="button" className="button button-outline">Edit Student</button>
              <StudentDelete id={student.id} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentCard
