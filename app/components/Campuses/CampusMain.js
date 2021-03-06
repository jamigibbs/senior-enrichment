import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from 'react-loading'
import { fetchCampuses } from '../../reducers'
import Title from '../Title'
import CampusCard from './CampusCard'

export class CampusMain extends Component {

  componentDidMount(){
    this.props.fetchCampuses()
  }

  render(){
    const { campuses, isFetching } = this.props;
    if (isFetching) return <Loader className="preloader" type="balls" color="#9b4dca" />
    return (
      <div id="campuses-all">

        <Title id="capuses-title" content="Campus Listing" />

        <div className="container">

          {campuses.length === 0 && <h3>There are no campuses registered in the database.</h3>}

          <div className="row">

            <div className="column">
              <Link className="button button-outline float-right" to="/campuses/add">Add Campus</Link>
            </div>

            {
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

export default connect(mapStateToProps, mapDispatchToProps)(CampusMain);
