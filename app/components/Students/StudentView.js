import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loading'
import { Link } from 'react-router-dom'
import { fetchStudents, fetchCampuses } from '../../reducers'
import { CampusCard, CampusChange } from '../Campuses'
import StudentCard from './StudentCard'

export class StudentView extends Component {

  componentDidMount(){
    // this.props.fetchStudents()
    // this.props.fetchCampuses()
  }

  render(){
    const { campuses } = this.props;
    const studentId = Number(this.props.match.params.id)
    const student = this.props.student(studentId)

    let campus;
    if (student){
      campus = this.props.campus(student.campusId)
    }

    return (
      <div id="student-view">
        {
          student &&
          <StudentCard student={student} campus={campus} showDetails="true" />
        }

        {
          campus ? (
            <div>
              <CampusCard campus={campus} />
              <CampusChange
                campusId={campus.id}
                studentId={student.id}
                campuses={campuses} />
            </div>
          ) : (
            <h3>Student not assigned to a campus</h3>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    student: (id) => {
      return state.students.find((student) => {
        return student.id === id
      })
    },
    campus: (id) => {
      return state.campuses.find((campus) => {
        return campus.id === id
      })
    }
  }
}

export default connect(mapStateToProps, null)(StudentView)

