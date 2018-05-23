import React from 'react'
import { Link } from 'react-router-dom'
import StudentDelete from './StudentDelete'

const StudentCard = (props) => {
  const { student, campus } = props

  const studentPage = {
    pathname: `/students/${student.id}`,
    search: '',
    hash: '',
    state: { student, campus }
  };

  return (
    <div className="column column-50">
      <div className="student-card clearfix">
        <div className="row">

          <div className="column column-50">
            <img className="cover float-left" src={props.student.imageUrl} />
          </div>

          <div className="column column-50">

            <div className="student-info">
              <h3><Link to={studentPage}>{student.fullName}</Link></h3>
              { campus &&
              <h4>
                <Link
                  to={{
                    pathname: `/campuses/${campus.id}`,
                    search: '',
                    hash: '',
                    state: { campus }
                  }}>
                  {campus.name}
                </Link>
              </h4> }
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
