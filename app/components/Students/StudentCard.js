import React from 'react'
import StudentDelete from './StudentDelete'
import { Link } from 'react-router-dom'

const StudentCard = (props) => {
  const { student, campus } = props

  const handleClick = () => {
    props.history.push(`../student/${student.id}`);
  }

  return (
    <div className="column column-50">
      <div className="student-card clearfix">
        <div className="row">

          <div className="column column-50">
            <img className="cover float-left" src={props.student.imageUrl} />
          </div>

          <div className="column column-50">

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

                    { student.campusId &&
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
