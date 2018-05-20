import React from 'react';

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
              <h4><a href="#">{campus.name}</a></h4>
            </div>

            <div className="actions">
              <button type="button" className="button button-outline">Edit Student</button>
              <input className="button button-clear" type="submit" value="Delete" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentCard
