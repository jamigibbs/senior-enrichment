import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loading'
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
        {
          campus &&
          <div>
            <CampusCard campus={campus} />
            {
              campus.students.map( (student, index) => {
                return <StudentCard key={index} student={student} campus={campus}/>
              })
            }
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
