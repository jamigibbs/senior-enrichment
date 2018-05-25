import React from 'react'
import StudentDelete from './StudentDelete'
import { Link } from 'react-router-dom'

const StudentCard = (props) => {
  const { student, campus } = props

  return (
    <div className="column column-20">
      <div className="student-card clearfix">

            <img className="cover float-left" src={props.student.imageUrl} />

            <div className="student-info">
              {
                props.showDetails === 'true' ?
                (
                  <div>
                    <h3>{student.fullName}</h3>
                    <p>GPA: {student.gpa}</p>
                  </div>

                ) : (

                  <div>
                    <h3>
                      <Link to={`../student/${student.id}`}>
                        {student.fullName}
                      </Link>
                    </h3>

                    { campus &&
                      <h4>
                        <Link to={`../campus/${campus.id}`}>
                          {campus.name}
                        </Link>
                      </h4>
                    }
                  </div>
                )
              }

            </div>

            <div className="actions">
              <Link to={`/student/edit/${student.id}`} className="button button-outline">Edit Student</Link>
              <StudentDelete id={student.id} />
            </div>
      </div>

    </div>
  )
}

export default StudentCard
