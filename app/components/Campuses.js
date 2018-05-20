import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCampuses } from '../reducers'
import Title from './Title'
import CampusCard from './CampusCard'

export class Campuses extends Component {

  componentDidMount(){
    this.props.fetchCampuses()
  }

  render(){
    const campuses = this.props.campuses;
    return (
      <div id="campuses-all">

        <Title id="capuses-title" content="Campus Listing" />

        <div className="container">

          {campuses.length === 0 && <h3>There are no campuses registered in the database.</h3>}

          <div className="row">

            <div className="column">
              <Link className="button button-outline float-right" to="/campuses/add">Add Campus</Link>
            </div>

            { campuses.length > 0 &&
              campuses.map((campus) => {
                return <CampusCard key={campus.id} campus={campus} />
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
