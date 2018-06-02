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
  employeeUpdate
} from '../actions'

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, property) => {
      this.props.employeeUpdate({ property, value })
    })
  }

  onButtonPressed() {
    const { name, phone, swift } = this.props
    console.log(name, phone, shift)
  }

  render() {
    console.log(this.props)

    return (
      <Card>
        <EmployeeForm {...this.props.employee} />
        <CardSection>
          <Button onPress={this.onButtonPressed.bind(this)} title='Update' />
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
  employeeUpdate
})(EmployeeEdit)
