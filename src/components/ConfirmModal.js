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
  const { containerStyle, textStyle, cardSectionStyle } = styles

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>Are you sure you wanna fire them ?</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept} title='Confirm' />
          <Button onPress={onDecline} title='Cancel' />
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export default ConfirmModal
