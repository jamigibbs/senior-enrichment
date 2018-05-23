import React from 'react'
import Title from '../Title'
import StudentCard from './StudentCard'
import { CampusCard, CampusChange } from '../Campuses/'

const StudentSingle = ({match, location}) => {
  const { student, campus } = location.state
  const studentId = match.params.id

  return (
    <div id="student-single">
      <div className="container">
        <div className="row">
          <div className="column">

            <Title id="student-single-title" content={'Student ID: ' + studentId} />

            <StudentCard key={student.id} student={student} campus={campus} />

            { campus ?
              <div>
                <h3>This student is registered to a campus</h3>
                <CampusCard campus={campus} />
              </div> :
              <h3>The student is not registered to a campus</h3>
            }

            <CampusChange />

          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSingle;
