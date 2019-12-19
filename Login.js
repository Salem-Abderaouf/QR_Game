import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native'
import firebase from 'react-native-firebase'


export default class Login extends React.Component {
  static navigationOptions = {
    title:'LOG IN',
    headerLeft: false,
    };
    state = { email: '', password: '', errorMessage: null }
    handleLogin = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage && <Text style={{ color: 'red' }}>
        {this.state.errorMessage} </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="  Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="  Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableHighlight
          style={styles.submit}
          onPress={this.handleLogin}
        >
        <Text style={styles.submitText}>LOG IN</Text>
        </TouchableHighlight>
         <TouchableHighlight
          style={styles.submit}
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
        <Text style={styles.submitText}>Don't have an account? SIGN UP</Text>
        </TouchableHighlight>
      </View>
    )
  }
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    borderRadius : 8,
  },
  submit:{
    marginTop:8,
    width:'90%',
    backgroundColor:'#8e44ad',
    borderRadius:25,
    padding:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
    color:'#fff',
    textAlign:'center',
  }
  
})