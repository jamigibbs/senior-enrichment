import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loading'
import { Link } from 'react-router-dom'
import { fetchStudents, fetchCampuses } from '../../reducers'
import { CampusCard, CampusChange } from '../Campuses'
import StudentCard from './StudentCard'

export class StudentView extends Component {

  componentDidMount(){
    this.props.fetchStudents()
    this.props.fetchCampuses()
  }

  findStudent = (student) => {
    return student.id === Number(this.props.match.params.id)
  }

  render(){
    const { students, campuses, isFetching } = this.props;

    if (isFetching) {
      return <Loader className="preloader" type="balls" color="#9b4dca" />
    }

    const student = students.find(this.findStudent)
    const campus = campuses.find((camp) => {
      return camp.id === Number(student.campusId)
    })

    console.log('StudentCard', student)

    return (
      <div>
        <StudentCard student={student} campus={campus} showDetails="true" />
        {
          campus ? (
            <div>
              <CampusCard campus={campus} />
              <CampusChange studentId={student.id} campuses={campuses} />
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
    students: state.students,
    campuses: state.campuses,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents())
    },
    fetchCampuses: () => {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentView)

