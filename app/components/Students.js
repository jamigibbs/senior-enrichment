import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loading'
import { fetchStudents, fetchCampuses } from '../reducers'
import Title from './Title'
import StudentCard from './StudentCard'

export class Students extends Component {
  componentDidMount(){
    this.props.fetchStudents()
    this.props.fetchCampuses()
  }

  render(){
    const { students, campuses, isFetching } = this.props;
    if (isFetching) return <Loader className="preloader" type="balls" color="#9b4dca" />
    return (
      <div id="students-all">

        <Title id="students-title" content="Students Listing" />

        <div className="container">

          {students.length === 0 && <h3>There are no students registered in the database.</h3>}

          <div className="row">

            <div className="column">
              <button type="button" className="button button-outline float-right">
                Add Student
              </button>
            </div>

            { campuses.length > 0 &&
              students.map((student) => {
                return <StudentCard key={student.id} student={student} campus={campuses[student.campusId - 1]} />
              })
            }
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Students);
