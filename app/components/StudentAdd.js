import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loading'
import { postNewStudent, fetchCampuses } from '../reducers/'
import { Redirect } from 'react-router-dom'

import Title from './Title'

export class StudentAdd extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campusId: '',
      redirectToNewPage: false
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchCampuses()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.post({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      gpa: this.state.gpa,
      campusId: this.state.campusId
    })

    // this.setState({
    //   redirectToNewPage: true
    // })

    console.log('User added!', this.state)
  }

  render(){
    if (this.props.students.length > 0 && this.state.redirectToNewPage){
      const studentUrl = `/students/${this.props.students[0].id}`
      return <Redirect to={studentUrl} />
    }

    const { campuses, isFetching } = this.props;

    if (isFetching) return <Loader className="preloader" type="balls" color="#9b4dca" />

    return (
      <div id="student-add">
        <Title id="student-add-title" content="New Student Form" />

        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">

              <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <fieldset>
                  <label htmlFor="firstName">First Name</label>
                  <input value={this.state.firstName} name="firstName" id="firstName" type="text" />

                  <label htmlFor="lastName">Last Name</label>
                  <input value={this.state.lastName} name="lastName" id="lastName" type="text" />

                  <label htmlFor="email">Email</label>
                  <input value={this.state.email} name="email" id="email" type="email" />

                  <label htmlFor="gpa">GPA</label>
                  <input value={this.state.gpa} name="gpa" id="gpa" type="number" placeholder="1.0" step="0.1" min="0.0" max="4.0" />

                  <label htmlFor="campus">Campus</label>
                  <select value={this.state.campusId} name="campusId">
                    {
                      campuses.map((campus) => {
                        return <option key={campus.id} value={campus.id}>{campus.name}</option>
                      })
                    }
                  </select>

                  <input className="button-primary" type="submit" value="Add Student" />
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
    students: state.students,
    campuses: state.campuses,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    post: (student) => {
      dispatch(postNewStudent(student))
    },
    fetchCampuses: () => {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentAdd)
