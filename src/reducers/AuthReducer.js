import * as TYPE from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loginUserStarted: false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case TYPE.EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case TYPE.PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case TYPE.LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', email: '', password: '' }
    case TYPE.LOGIN_USER_FAILED:
      return { ...state, error: action.payload.message, user: null }
    case TYPE.LOGIN_USER_STARTED:
      return { ...state, loginUserStarted: action.payload }
    default:
      return state
  }
}
