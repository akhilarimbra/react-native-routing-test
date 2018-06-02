import * as TYPE from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.EMPLOYEE_FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}
