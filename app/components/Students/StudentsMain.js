import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loading'
import { Link } from 'react-router-dom'
import { fetchStudents, fetchCampuses } from '../../reducers'
import Title from '../Title'
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
      <div className="students-all">

        <Title id="students-title" content="Students Listing" />

        <div className="container">

          {students.length === 0 && <h3>There are no students registered in the database.</h3>}

          <div className="row">

            <div className="column">
            <Link className="button button-outline float-right" to="/students/add">Add Student</Link>
            </div>

            { students.length > 0 &&
                students.map((student) => {

                  const campus = this.props.campus(student.campusId)

                  return (<StudentCard
                    key={student.id}
                    student={student}
                    campus={campus}
                  />)
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
    isFetching: state.isFetching,
    campus: (id) => {
      return state.campuses.find((campus) => {
        return campus.id === id
      })
    }
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
