import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCVIbHna7Z0WtR_vLnkECeODJJjDUEsRrU',
      authDomain: 'react-native-auth-51c25.firebaseapp.com',
      databaseURL: 'https://react-native-auth-51c25.firebaseio.com',
      projectId: 'react-native-auth-51c25',
      storageBucket: 'react-native-auth-51c25.appspot.com',
      messagingSenderId: '374463375287'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
      return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
