import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListView
} from 'react-native'
import _ from 'lodash'

import {
  Card,
  CardSection
} from './widgets'
import ListItem from './ListItem'
import { employeeFetch } from '../actions'

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    console.log(employees)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })
    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <Card>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return { employees: _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  }) }
}

export default connect(mapStateToProps, {
  employeeFetch
})(EmployeeList)
