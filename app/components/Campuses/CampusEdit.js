import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCampuses, updateCampus } from '../../reducers'
import Title from '../Title'

export class CampusEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: '',
      address: ''
    }
  }

  componentDidMount() {
    this.props.fetchCampuses()

    const campusId = Number(this.props.match.params.id)
    this.populateForm(campusId)
  }

  populateForm = (campusId) => {
    const campus = this.props.campus(campusId)

    this.setState({
      name: campus.name,
      description: campus.description,
      address: campus.address
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const campusId = this.props.match.params.id

    this.props.update(campusId, {
      name: this.state.name,
      description: this.state.description,
      address: this.state.address
    })

    this.props.history.push(`/campus/${campusId}`);
  }

  render(){
    return (
      <div id="campus-edit">
        <Title id="add-campus-title" content="Edit Campus Form" />

        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">

              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <fieldset>

                  <label htmlFor="name">Name</label>
                  <input required value={this.state.name} name="name" id="name" type="text" />

                  <label htmlFor="description">Description</label>
                  <textarea required value={this.state.description} name="description" id="description" type="text" />

                  <label htmlFor="address">Address</label>
                  <input required value={this.state.address} name="address" id="address" type="text" />

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
    fetchCampuses: () => {
      dispatch(fetchCampuses())
    },
    update: (id, body) => {
      dispatch(updateCampus(id, body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusEdit)
