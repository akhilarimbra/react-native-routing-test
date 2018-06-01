import React, { Component } from 'react';
import {
  View
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import {
  Header
} from './components/widgets'
import LoginForm from './components/LoginForm'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAZkGdn1dqw9K_OM-sQwPldpme1CPsO8Hs",
      authDomain: "test-bc7c5.firebaseapp.com",
      databaseURL: "https://test-bc7c5.firebaseio.com",
      projectId: "test-bc7c5",
      storageBucket: "",
      messagingSenderId: "620047757814"
    }
    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
