import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import {
  CardSection
} from './widgets'

class ListItem extends Component {
  onRowPress() {
    Actions.createEmployee({
      employee: this.props.employee
    })
  }

  render() {
    const { name } = this.props.employee

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={{
                fontSize: 18,
                paddingLeft: 15
              }}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default ListItem
