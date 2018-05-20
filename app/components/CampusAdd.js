import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postNewCampus } from '../reducers/'
import { Redirect } from 'react-router-dom'

import Title from './Title'

export class CampusAdd extends Component {

  constructor(props){
    super()
    this.state = {
      name: '',
      description: '',
      redirectToNewPage: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.post({
      name: this.state.name,
      description: this.state.description
    });

    this.setState({
      redirectToNewPage: true
    })
  }

  render(){
    if (this.props.campuses.length > 0 && this.state.redirectToNewPage){
      const campusUrl = `/campuses/${this.props.campuses[0].id}`
      return <Redirect to={campusUrl} />
    }
    return (
      <div id="campus-add">
        <Title id="add-campus-title" content="New Campus Form" />

        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">

              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <fieldset>

                  <label htmlFor="name">Name</label>
                  <input value={this.state.name} name="name" id="name" type="text" placeholder="Starfleet Academy" />

                  <label htmlFor="description">Description</label>
                  <input value={this.state.description} name="description" id="description" type="text" placeholder="Startfleet Academy was created in the year 2161, when the United Federation of Planets was founded. The Academy's motto is Ex astris, scientia – From the stars, knowledge." />

                  <input className="button-primary" type="submit" value="Send" />

                </fieldset>
              </form>

            </div>
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
    post: (campus) => {
      dispatch(postNewCampus(campus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusAdd);
