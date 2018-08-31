import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Routers from './Router'
import firebase from 'firebase'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        apiKey: "AIzaSyB6PLAgdBVbF3BYQ1rtMCGeyi3tBjh9Rqo",
        authDomain: "appdev-7c770.firebaseapp.com",
        databaseURL: "https://appdev-7c770.firebaseio.com",
        projectId: "appdev-7c770",
        storageBucket: "appdev-7c770.appspot.com",
        messagingSenderId: "507131154233"
      },
    };
    firebase.initializeApp(this.state.config);
  }

  render() {
  
    return (
      <Routers />
    );
  }
}

const styles = StyleSheet.create({
  arrowHeight: {
    height: 20, width: 20
  }
});
