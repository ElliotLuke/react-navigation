import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Picker,
  DatePickerIOS,
  NavigationBar,
  Button,
  Navigator,
  KeyboardAvoidingView
} from 'react-native';

class Login extends Component {

  constructor() {
    super()

    this.navigate = this.navigate.bind(this)
  }
  navigate(name) {
    this.props.navigator.push({name})
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.welcome}>
          My first App!
        </Text>
        <Image style={styles.bg} source={require('../images/bg2.png')}/>

        <Text style={styles.instructions}>
          British Gas
        </Text>
        <Text style={styles.instructions}>
          Please login
        </Text>

        <TextInput style={styles.textinput} placeholder={'Username'} placeholderTextColor={"rgba(198,198,204,1)"} returnKeyType="next" onSubmitEditing ={() => this.passwordInput.focus()} keyboardType="email-address" autocapitalize={false}/>
        <TextInput style={styles.textinput} placeholder={'Password'} placeholderTextColor={"rgba(198,198,204,1)"} secureTextEntry ref={(input) => this.passwordInput = input}/>

        <Button onPress={() => this.navigate('DOB')} title="Submit" color="#008000" accessibilityLabel="Submit your username and password"/>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    marginTop: 0
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  bg: {
    flexShrink:0,
    width: 200,
    height: 200
  },
  textinput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 65,
    height: 20,
    width: 250,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)"
  },
  textinputtext: {
    textAlign: 'center'
  },
  navigation: {
    flex: 1
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1
  },

  nav: {
    flex: 1
  }
})

export default Login;
