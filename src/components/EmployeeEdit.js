import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import {
  Card,
  CardSection,
  Button
} from './widgets'
import EmployeeForm from './EmployeeForm'
import {
  employeeUpdate,
  employeeSave
} from '../actions'
import Communications from 'react-native-communications'

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, property) => {
      this.props.employeeUpdate({ property, value })
    })
  }

  onButtonPressed() {
    let { employee: { uid }, employee, name, phone, shift, employeeSave } = this.props
    name = name.length > 0 ? name : employee.name
    phone = phone.length > 0 ? phone : employee.phone
    shift = phone.length > 0 ? shift : employee.shift
    employeeSave({ uid,
      name,
      phone,
      shift,
    })
  }

  onTextPressed() {
    const { phone, shift } = this.props
    Communications.text(
      phone,
      `Your upcoming shift is on ${shift}`
    )
  }

  render() {
    console.log(this.props)
    return (
      <Card>
        <EmployeeForm {...this.props.employee} />
        <CardSection>
          <Button onPress={this.onButtonPressed.bind(this)} title='Update' />
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPressed.bind(this)} title='Text Schedule' />
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
  employeeSave
})(EmployeeEdit)
