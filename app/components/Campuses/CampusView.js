import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loading'
import { Link } from 'react-router-dom'
import { fetchCampuses } from '../../reducers'
import CampusCard from './CampusCard'
import { StudentCard } from '../Students'

export class CampusView extends Component {

  componentDidMount(){
    this.props.fetchCampuses()
  }

  findCampus = (school) => {
    return school.id === Number(this.props.match.params.id)
  }

  render(){
    const { campuses, isFetching } = this.props;

    if (isFetching) {
      return <Loader className="preloader" type="balls" color="#9b4dca" />
    }

    const campus = campuses.find(this.findCampus)

    return (
      <div>
        { campus &&
          <div>
            <CampusCard campus={campus} showDetails="true" />

            {
              campus.students.length > 0 ?

              campus.students.map( (student, index) => {
                return <StudentCard key={index} student={student} campus={campus}/>
              }) :

              <h3>There are no students registered to this campus.</h3>
            }

            <Link className="button button-outline float-right" to="/students/add">Add Student</Link>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => {
      dispatch(fetchCampuses())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CampusView)
