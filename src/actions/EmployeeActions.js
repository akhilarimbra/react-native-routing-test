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
