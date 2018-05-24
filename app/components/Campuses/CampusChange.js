import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CampusChange extends Component {
  // constructor(){
  //   super()
  // }

  render(){
    const { campuses } = this.props;
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="campus">Campus</label>
            <select value={campuses.campusId} name="campusId">
              <option value="-">-</option>
              {
                campuses.map((campus) => {
                  return <option key={campus.id} value={campus.id}>{campus.name}</option>
                })
              }
            </select>
            <input className="button-primary" type="submit" value="Change Campus" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect(null, null)(CampusChange)
