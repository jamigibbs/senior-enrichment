import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteStudent } from '../reducers'

export class StudentDelete extends Component {
  handleClick = () => {
    this.props.delete(this.props.id)
  }

  render(){
    return (
      <div id="student-delete">
        <input
          onClick={() => { if (window.confirm('Are you sure you wish to delete this student?')) this.handleClick() }}  // eslint-disable-line no-alert
          className="button button-clear"
          type="submit"
          value="Delete"
          data-confirm="Are you sure to delete this student?"
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => {
      dispatch(deleteStudent(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(StudentDelete);
