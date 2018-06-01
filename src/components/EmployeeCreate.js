import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Card,
  CardSection,
  Input,
  Button
} from './widgets'
import {
  employeeUpdate
} from '../actions'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='Someone'
            value={this.props.name} />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone} />
        </CardSection>

        <CardSection>
          <Button title='Create' />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(null, { employeeUpdate })(EmployeeCreate)
