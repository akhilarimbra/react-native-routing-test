import React, { Component } from 'react'
import {
  Picker,
  Text
} from 'react-native'
import { connect } from 'react-redux'

import {
  Card,
  CardSection,
  Button
} from './widgets'
import EmployeeForm from './EmployeeForm'
import {
  employeeUpdate,
  employeeCreate
} from '../actions'

class EmployeeCreate extends Component {
  onFormSubmit() {
    const { name, phone, shift, employeeCreate } = this.props
    employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    console.log(this.props)

    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onFormSubmit.bind(this)} title='Create' />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate)
