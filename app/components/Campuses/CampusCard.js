import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCampuses } from '../../reducers'
import CampusDelete from './CampusDelete'
import CampusMap from './CampusMap'

export class CampusCard extends Component {

  componentWillReceiveProps(){
    this.props.fetchCampuses()
  }

  render(){
    const props = this.props;
    const { campus } = props
    const studentCount = campus.students.length
    const campusLink = `/campus/${campus.id}`
    console.log(studentCount)
    return (
      <div className="column column-50">
        <div className="campus-card clearfix">
          <div className="row">

            <div className="column column-50">
              <img src={campus.imageUrl} />
            </div>

            <div className="column column-50">
              {
                  props.showDetails ? (
                    <div>
                      <h3>{campus.name}</h3>
                      <p>{campus.description}</p>
                       <CampusMap address={campus.address} />
                    </div>
                ) : (
                <Link to={campusLink} >{campus.name}</Link> )
              }
              <p>{studentCount} student{studentCount > 1 && 's'}</p>

              <div className="actions">
                <button type="button" className="button button-outline">Edit Campus</button>
                <CampusDelete id={campus.id} />
              </div>
            </div>

          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CampusCard);
