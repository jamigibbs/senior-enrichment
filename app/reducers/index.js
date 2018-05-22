/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import axios from 'axios'

const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER'
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER'
const GOT_NEW_CAMPUS_FROM_SERVER = 'GOT_NEW_CAMPUS_FROM_SERVER'
const GOT_NEW_STUDENT_FROM_SERVER = 'GOT_NEW_STUDENT_FROM_SERVER'
const DELETED_STUDENT_FROM_SERVER = 'DELETED_STUDENT_FROM_SERVER'
const FETCHING_FROM_DB = 'FETCHING_FROM_DB'
const DONE_FETCHING_FROM_DB = 'DONE_FETCHING_FROM_DB'

const initialState = {
  campuses: [],
  students: [],
  isFetching: false
}

const isFetching = () => {
  return {
    type: FETCHING_FROM_DB
  }
}

const doneFetching = () => {
  return {
    type: DONE_FETCHING_FROM_DB
  }
}

export const gotCampusesFromServer = (campuses) => {
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
  }
}

export const fetchCampuses = () => {
  return async (dispatch) => {
    dispatch(isFetching());

    const { data } = await axios.get('/api/campuses');
    const action = gotCampusesFromServer(data);

    dispatch(action)
    dispatch(doneFetching())
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
    dispatch(isFetching())

    const { data } = await axios.get('/api/students')
    const action = getStudentsFromServer(data)

    dispatch(action)
    dispatch(doneFetching())
  }
}

export const gotNewCampusFromServer = (campus) => {
  campus.students = []
  return {
    type: GOT_NEW_CAMPUS_FROM_SERVER,
    campus
  }
}

export const postNewCampus = (campus) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/campuses', campus);
    const action = gotNewCampusFromServer(data);
    dispatch(action)
  }
}

export const gotNewStudentFromServer = (student) => {
  return {
    type: GOT_NEW_STUDENT_FROM_SERVER,
    student
  }
}

export const postNewStudent = (student) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/students', student)
      const action = gotNewStudentFromServer(data);
      dispatch(action)
    } catch (err) {
      console.error(err)
    }
  }
}

export const deletedStudentFromServer = (id) => {
  return {
    type: DELETED_STUDENT_FROM_SERVER,
    id
  }
}

export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/students/${id}`)
      const action = deletedStudentFromServer(id)
      dispatch(action)
    } catch (err) {
      console.error(err)
    }
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return {...state, campuses: action.campuses}
    case GOT_STUDENTS_FROM_SERVER:
      return {...state, students: action.students}
    case GOT_NEW_CAMPUS_FROM_SERVER:
      return { ...state, campuses: [ ...state.campuses, action.campus ]}
    case GOT_NEW_STUDENT_FROM_SERVER:
      return { ...state, students: [...state.students, action.student]}
    case DELETED_STUDENT_FROM_SERVER: {
      const newArr = state.students.filter(student => student.id !== action.id)
      return {...state, students: newArr}
    }
    case FETCHING_FROM_DB:
      return {...state, isFetching: true}
    case DONE_FETCHING_FROM_DB:
      return {...state, isFetching: false}
    default:
      return state
  }
};

export default rootReducer
