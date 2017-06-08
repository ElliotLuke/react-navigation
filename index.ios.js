

import React, { Component } from 'react';

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
  KeyboardAvoidingView,

} from 'react-native';
import login from './components/login'
import DOB from './components/DOB'
export default class awesome extends Component {

      constructor(){
        super()
        this.renderScene = this.renderScene.bind(this)
}

renderScene(route, navigator){
if (route.name === 'login'){
  return <login navigator ={navigator}/>
}else if(route.name ==='DOB'){
  return <DOB navigator={navigator}/>
}

}

render(){
  return(
    <Navigator
    initialRoute={{name:'login'}}
    renderScene={this.renderScene}
    />
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    marginTop:0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bg:{
    width:200,
    height:200,
  },
  textinput:{
    justifyContent:'center',
    alignItems: 'center',
    marginLeft:65,
    height: 20,
    width: 250,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
  },
  textinputtext:{
    textAlign:'center',
  },
  navigation: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  },

  nav:{
    flex:1,
  }
})

AppRegistry.registerComponent('awesome', () => awesome);
