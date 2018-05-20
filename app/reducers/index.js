/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import axios from 'axios'

const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER'
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER'

const initialState = {
  campuses: [],
  students: []
}

export const gotCampusesFromServer = (campuses) => {
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
  }
}

export const fetchCampuses = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/campuses');
    const action = gotCampusesFromServer(data);
    dispatch(action)
  }
}

export const getStudentsFromServer = (students) => {
  return {
    type: GOT_STUDENTS_FROM_SERVER,
    students
  }
}

export const fetchStudents = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/students')
    const action = getStudentsFromServer(data)
    dispatch(action)
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return {...state, campuses: action.campuses}
      case GOT_STUDENTS_FROM_SERVER:
      return {...state, students: action.students}
    default:
      return state
  }
};

export default rootReducer
