import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'
import QrPage from './QrPage'

export default class Main extends React.Component {
  static navigationOptions = {
    title:'Profile',
    headerBackTitleVisible: false,
    headerRight:() => (
      <Icon.Button
       name="sign-out"
       onPress={() => firebase.auth().signOut()}
       color="#4169e1"
       fontSize="22"
       backgroundColor="#ffffff"
      />
    )
  }
    state = { currentUser: null }
  componentDidMount() {
      const { currentUser } =  firebase.auth()
      this.setState({ currentUser })
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.txt}>
          Hi { currentUser && currentUser.email.replace('@gmail.com',' ')}
        </Text>
        <QrPage />
          </View>
      </View>
    )
  }
}const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
  },
  txt:{
    textAlign:'center',
    marginTop:25,
    marginBottom:25,
    fontSize:16,
  }
})
