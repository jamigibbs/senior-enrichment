import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateStudent } from '../../reducers'

export class CampusChange extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusId: props.campusId
    }
  }

  handleChange = (event) => {
    const campusId = Number(event.target.value);
    this.setState({
      campusId
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.update(this.props.studentId, this.state)
  }

  render(){
    const { campuses } = this.props;
    return (
      <div className="campus-change">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <fieldset>
            <label htmlFor="campus">Change Campus</label>
            <select defaultValue={this.state.campusId} name="campusId">
              <option value="-">-</option>
              {
                campuses.map((campus) => {
                  return <option key={campus.id} value={campus.id}>{campus.name}</option>
                })
              }
            </select>
            <input className="button-primary" type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id, body) => {
      dispatch(updateStudent(id, body))
    }
  }
}

export default connect(null, mapDispatchToProps)(CampusChange)
