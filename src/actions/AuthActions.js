import * as TYPE from './types'
import firebase from 'firebase'
import {
  Actions
} from 'react-native-router-flux'

export const emailChanged = text => {
  return {
    type: TYPE.EMAIL_CHANGED,
    payload: text.toLowerCase()
  }
}

export const passwordChanged = text => {
  return {
    type: TYPE.PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    startLoginUser(dispatch, true)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        startLoginUser(dispatch, false)
        loginUserSuccess(dispatch, user)
      })
      .catch(error => {
        if (error.code != 'auth/user-not-found') {
          startLoginUser(dispatch, false)
          loginUserFailed(dispatch, error)
        } else {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
              startLoginUser(dispatch, false)
              loginUserSuccess(dispatch, user)
            })
            .catch(error => {
              startLoginUser(dispatch, false)
              loginUserFailed(dispatch, error)
            })
        }
      })
  }
}

const startLoginUser = (dispatch, status) => {
  dispatch({
    type: TYPE.LOGIN_USER_STARTED,
    payload: status
  })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: TYPE.LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main()
}

const loginUserFailed = (dispatch, error) => {
  dispatch({
    type: TYPE.LOGIN_USER_FAILED,
    payload: error
  })
}
