import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCampuses } from '../reducers'
import Title from './Title'

export class Campuses extends Component {

  componentDidMount(){
    this.props.fetchCampuses()
  }

  render(){
    const campuses = this.props.campuses;
    return (
      <div><Title id="capuses-title" content="Campus Listing" />
      <div>
        <ul>
          {
            campuses.map((campus) => {
              return <li key={campus.id}>{campus.name}</li>
            })
          }
        </ul>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
