import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { postNewCampus } from '../../reducers/'
import Title from '../Title'

export class CampusAdd extends Component {

  constructor(props){
    super()
    this.state = {
      name: '',
      description: ''
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
    })

  }

  componentDidUpdate(prevProps){
    if (this.props.newCampus !== prevProps.newCampus) {
      const campusId = this.props.newCampus[0].id
      const campusUrl = `/campus/${campusId}`
      this.props.history.push(campusUrl);
    }
  }


  render(){
    return (
      <div id="campus-add">
        <Title id="add-campus-title" content="New Campus Form" />

        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">

              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <fieldset>

                  <label htmlFor="name">Name</label>
                  <input required value={this.state.name} name="name" id="name" type="text" placeholder="Starfleet Academy" />

                  <label htmlFor="description">Description</label>
                  <textarea required value={this.state.description} name="description" id="description" type="text" placeholder="Startfleet Academy was created in the year 2161, when the United Federation of Planets was founded. The Academy's motto is Ex astris, scientia – From the stars, knowledge." />

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
    // campuses: state.campuses,
    newCampus: state.newCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    post: (campus) => {
      dispatch(postNewCampus(campus))
    }
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//       submit: form => e => {
//           e.preventDefault()

//           // ...

//           dispatch(submitLoginForm(form)).then(data => {
//               ownProps.history.push(data.nextRoute || '/')
//               if (data.nextRoute) {
//                   dispatch(setNextRoute(undefined))
//               }
//           })
//       }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(CampusAdd);
