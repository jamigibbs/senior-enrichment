import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudents, fetchCampuses, updateStudent } from '../../reducers'
import Title from '../Title'

export class StudentEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullName: '',
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      imageUrl: '',
      campusId: ''
    }
  }

  componentDidMount(){
    this.props.fetchCampuses()
    this.props.fetchStudents()

    const studentId = Number(this.props.match.params.id)
    this.populateForm(studentId)
  }

  populateForm = (studentId) => {
    const student = this.props.student(studentId)

    this.setState({
      fullName: student.fullName,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      gpa: student.gpa,
      imageUrl: student.imageUrl,
      campusId: student.campusId
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const studentId = Number(this.props.match.params.id)

    this.props.update(studentId, {
      fullName: this.state.firstName + ' ' + this.state.lastName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      gpa: this.state.gpa,
      campusId: this.state.campusId
    })

    this.props.history.push(`/student/${studentId}`);
  }

  render(){
    return (
      <div id="student-add">

        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">
              <img src={this.state.imageUrl} />
              <Title id="student-edit-title" content={`Editing ${this.state.fullName}`} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">

              <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <fieldset>
                  <label htmlFor="firstName">First Name</label>
                  <input value={this.state.firstName} name="firstName" id="firstName" type="text" required />

                  <label htmlFor="lastName">Last Name</label>
                  <input value={this.state.lastName} name="lastName" id="lastName" type="text" required />

                  <label htmlFor="email">Email</label>
                  <input value={this.state.email} name="email" id="email" type="email" required />

                  <label htmlFor="gpa">GPA</label>
                  <input value={this.state.gpa} name="gpa" id="gpa" type="number" placeholder="1.0" step="0.1" min="0.0" max="4.0" required />

                  <label htmlFor="campus">Campus</label>
                  <select value={this.state.campusId} name="campusId">
                    <option value="-">-</option>
                    {
                      this.props.campuses.map((campus) => {
                        return <option key={campus.id} value={campus.id}>{campus.name}</option>
                      })
                    }
                  </select>

                  <input className="button-primary" type="submit" value="Update Student" />
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
    student: (id) => {
      return state.students.find((student) => {
        return student.id === id
      })
    },
    campus: (id) => {
      return state.campuses.find((campus) => {
        return campus.id === id
      })
    },
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents())
    },
    fetchCampuses: () => {
      dispatch(fetchCampuses())
    },
    update: (id, body) => {
      dispatch(updateStudent(id, body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentEdit)

