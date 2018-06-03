import React, { Component } from 'react'
import {
  Text,
  View,
  Modal
} from 'react-native'

import {
  CardSection,
  Button
} from './widgets'

const ConfirmModal = ({ onAccept, onDecline, visible }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}>
      <View>
        <CardSection>
          <Text>Are you sure you wanna fire them ?</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Confirm</Button>
          <Button onPress={onDecline}>Cancel</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

export default ConfirmModal
