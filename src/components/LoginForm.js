import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner,
  Header
} from './widgets'
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password, loginUser } = this.props
    loginUser({ email, password })
  }

  renderError() {
    if (this.props.error && !this.props.loginUserStarted) {
      return (
        <View>
          <Text style={styles.authenticationErrorStyle}>{this.props.error}</Text>
        </View>
      )
    } else return null
  }

  renderLoginButton() {
    if (this.props.loginUserStarted) {
      return (
        <Spinner style={styles.loginProgressStyle} size='small' />
      )
    } else {
      return <Button
                onPress={this.onButtonPress.bind(this)}
                title='Login' />
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Card>
          <CardSection>
            <Input
              isPassword={false}
              label='Email'
              placeholder='you@example.com'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email} />
          </CardSection>

          <CardSection>
            <Input
              isPassword={true}
              label='Password'
              placeholder='********'
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password} />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderLoginButton()}
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  authenticationErrorStyle: {
    color: 'red',
    fontWeight: '600',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 0,
    alignSelf: 'center',
    textAlign: 'center'
  },
  loginProgressStyle: {
    alignSelf: 'center'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loginUserStarted: state.auth.loginUserStarted
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm)
