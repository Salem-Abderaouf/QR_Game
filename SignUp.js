import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,TouchableHighlight} from 'react-native'
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {

    static navigationOptions = {
        title:'SIGN UP',
        headerLeft: null,
        headerTitleStyle:{
          color:'#1C1C1E'
        }
    };
    state = { email: '', password: '', errorMessage: null }
    handleSignUp = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="  Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="  Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
       
      <TouchableHighlight
            style={styles.submit}
            onPress={this.handleSignUp}
      >
        <Text style={styles.submitText}>SIGN UP</Text>
      </TouchableHighlight>

        <TouchableHighlight
          style={styles.submit}
          onPress={() => this.props.navigation.navigate('Login')}
        >
        <Text style={styles.submitText}>Already Have an account? LOGIN</Text>
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
    borderColor: 'grey',
    borderRadius:8,
    borderWidth: 1,
    marginTop: 8
  },
  submit:{
    marginTop:8,
    width:'90%',
    backgroundColor:'#fe4598',
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
