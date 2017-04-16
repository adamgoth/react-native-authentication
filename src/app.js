import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCVIbHna7Z0WtR_vLnkECeODJJjDUEsRrU',
      authDomain: 'react-native-auth-51c25.firebaseapp.com',
      databaseURL: 'https://react-native-auth-51c25.firebaseio.com',
      projectId: 'react-native-auth-51c25',
      storageBucket: 'react-native-auth-51c25.appspot.com',
      messagingSenderId: '374463375287'
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
