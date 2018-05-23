import React from 'react'
import Title from '../Title'

const StudentSingle = ({ match }) => {
  return (
    <div id="student-single">
      <div className="container">
        <div className="row">
          <div className="column">
            <Title id="student-single-title" content={'Student ID: ' + match.params.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSingle;
