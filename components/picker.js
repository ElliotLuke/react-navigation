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
  NavigatorIOS
} from 'react-native';

export default class awesome extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.bg source ={require('./images/bg.png')}/>

        <Text style={styles.welcome}>
          Welcome to British Gas!
        </Text>

        <Text style={styles.instructions}>
          To create an account please fill in some details
        </Text>
        <Text style={styles.instructions}>
          Date of Birth
        </Text>

        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Picker style={styles.picker} selectedValue={(this.state && this.state.pickerValue) || 'a'} onValueChange={(value) => {
            this.setState({value})
          }}>
            <Picker.Item label={'01'} value={'1'}/>
            <Picker.Item label={'02'} value={'2'}/>
            <Picker.Item label={'03'} value={'3'}/>
            <Picker.Item label={'04'} value={'4'}/>
            <Picker.Item label={'05'} value={'5'}/>
            <Picker.Item label={'06'} value={'6'}/>
            <Picker.Item label={'07'} value={'7'}/>
            <Picker.Item label={'08'} value={'8'}/>
            <Picker.Item label={'09'} value={'9'}/>
            <Picker.Item label={'10'} value={'10'}/>
            <Picker.Item label={'11'} value={'11'}/>
            <Picker.Item label={'12'} value={'12'}/>
            <Picker.Item label={'13'} value={'13'}/>
            <Picker.Item label={'14'} value={'14'}/>
            <Picker.Item label={'15'} value={'15'}/>
            <Picker.Item label={'16'} value={'16'}/>
            <Picker.Item label={'17'} value={'17'}/>
            <Picker.Item label={'18'} value={'18'}/>
            <Picker.Item label={'19'} value={'19'}/>
            <Picker.Item label={'20'} value={'20'}/>
            <Picker.Item label={'21'} value={'21'}/>
            <Picker.Item label={'22'} value={'22'}/>
            <Picker.Item label={'23'} value={'23'}/>
            <Picker.Item label={'24'} value={'24'}/>
            <Picker.Item label={'25'} value={'25'}/>
            <Picker.Item label={'26'} value={'26'}/>
            <Picker.Item label={'27'} value={'27'}/>
            <Picker.Item label={'28'} value={'28'}/>
            <Picker.Item label={'29'} value={'29'}/>
            <Picker.Item label={'30'} value={'30'}/>
            <Picker.Item label={'31'} value={'31'}/>
          </Picker>

          <Picker style={styles.picker} selectedValue={(this.state && this.state.pickerValue) || 'a'} onValueChange={(value) => {
            this.setState({value})
          }}>
            <Picker.Item label={'January'} value={'a'}/>
            <Picker.Item label={'February'} value={'b'}/>
            <Picker.Item label={'March'} value={'c'}/>
            <Picker.Item label={'April'} value={'d'}/>
            <Picker.Item label={'May'} value={'e'}/>
            <Picker.Item label={'June'} value={'f'}/>
            <Picker.Item label={'July'} value={'g'}/>
            <Picker.Item label={'August'} value={'h'}/>
            <Picker.Item label={'September'} value={'i'}/>
            <Picker.Item label={'October'} value={'j'}/>
            <Picker.Item label={'November'} value={'k'}/>
            <Picker.Item label={'December'} value={'l'}/>
          </Picker>

          <Picker style={styles.picker} selectedValue={(this.state && this.state.pickerValue) || 'a'} onValueChange={(value) => {
            this.setState({value})
          }}>
            <Picker.Item label={'2000'} value={'a'}/>
            <Picker.Item label={'1999'} value={'b'}/>
            <Picker.Item label={'1998'} value={'c'}/>
            <Picker.Item label={'1997'} value={'d'}/>
            <Picker.Item label={'1996'} value={'e'}/>
            <Picker.Item label={'1995'} value={'f'}/>
            <Picker.Item label={'1994'} value={'g'}/>
            <Picker.Item label={'1993'} value={'h'}/>
            <Picker.Item label={'1992'} value={'i'}/>
            <Picker.Item label={'1991'} value={'j'}/>
            <Picker.Item label={'1990'} value={'k'}/>
            <Picker.Item label={'1989'} value={'l'}/>
            <Picker.Item label={'1988'} value={'l'}/>
            <Picker.Item label={'1987'} value={'l'}/>
            <Picker.Item label={'1986'} value={'l'}/>
            <Picker.Item label={'1985'} value={'l'}/>
            <Picker.Item label={'1984'} value={'l'}/>
            <Picker.Item label={'1983'} value={'l'}/>
            <Picker.Item label={'1982'} value={'l'}/>

          </Picker>

        </View>

        <Button style={styles.button} onPress={this._onForward} title="Next" color="#008000" accessibilityLabel="Submit your username and password"/>

      </View>
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
    marginTop: 80
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  bg: {
    marginTop: 50,
    width: 100,
    height: 100
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
    alignItems: 'center'
  },
  navigation: {
    flex: 1
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1
  },

  picker: {
    height: 200,
    width: 100
  },
  button: {
    marginBottom: 200
  }

})
