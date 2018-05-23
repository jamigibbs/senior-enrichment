import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Title'
import CampusCard from './CampusCard'
import { StudentCard, StudentAdd } from '../Students'

const CampusSingle = ({match, location}) => {
  const { campus } = location.state
  const students = campus.students

  return (
    <div id="campus-single">
      <div className="container">
        <div className="row">
          <div className="column">

            <Title
              id="student-campus-title"
              content={campus.name}
            />

            <CampusCard campus={campus} />

            <Link className="button button-outline float-right" to="/students/add">Add Student</Link>

            { students.length > 0 ?
              <div>
                <h3>Students on campus</h3>
                { students.map((student) => {
                    return (<StudentCard
                      key={student.id}
                      student={student}
                      campus={campus}
                    />)
                  })
                }

              </div> :
              <h3>There are no students currently registered to this campus</h3>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default CampusSingle;
