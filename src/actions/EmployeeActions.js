import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import * as TYPE from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: TYPE.EMPLOYEE_UPDATE,
    payload: {
      prop,
      value
    }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser: { uid } } = firebase.auth()
  return (dispatch) => {
    firebase
      .database()
      .ref(`/user/${uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.main()
        dispatch({
          type: TYPE.EMPLOYEE_CREATE
        })
      })
      .catch(error => alert(error.message))
  }
}

export const employeeFetch = () => {
  const { currentUser: { uid } } = firebase.auth()
  return (dispatch) => {
    firebase
      .database()
      .ref(`/user/${uid}/employees`)
      .on('value', snapshot => {
        
      })
  }
}
