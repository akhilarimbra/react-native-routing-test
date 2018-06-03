import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Communications from 'react-native-communications'

import {
  Card,
  CardSection,
  Button
} from './widgets'
import EmployeeForm from './EmployeeForm'
import {
  employeeUpdate,
  employeeSave,
  employeeDelete
} from '../actions'
import ConfirmModal from './ConfirmModal'

class EmployeeEdit extends Component {
  state = {
    visible: false
  }

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

  onAccept() {
    const { employee: { uid }, employeeDelete } = this.props
    employeeDelete({ uid })
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
        <CardSection>
          <Button onPress={() => this.setState({ visible: !this.state.visible })} title='Fire' />
        </CardSection>
        <ConfirmModal
          onAccept={() => this.onAccept.bind(this)}
          onDecline={() => this.setState({ visible: !this.state.visible })}
          visible={this.state.visible}/>
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
  employeeSave,
  employeeDelete
})(EmployeeEdit)
