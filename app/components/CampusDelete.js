import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCampus } from '../reducers'

export class CampusDelete extends Component {
  handleClick = () => {
    this.props.delete(this.props.id)
  }

  render(){
    return (
      <div id="campus-delete">
        <input
          onClick={() => { if (window.confirm('Are you sure you want to delete this campus?')) this.handleClick() }}  // eslint-disable-line no-alert
          className="button button-clear"
          type="submit"
          value="Delete"
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => {
      dispatch(deleteCampus(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(CampusDelete);
