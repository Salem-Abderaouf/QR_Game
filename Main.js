import React from 'react'
import { StyleSheet, ScrollView, Image, Text, View ,Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'
import QrPage from './QrPage'

export default class Main extends React.Component {
  static navigationOptions = {
    title:'QR Game',
    headerLeft: null,
    headerRight:() => (
      <Icon.Button
       name="arrow-right"
       onPress={() => firebase.auth().signOut()}
       color="#8e44ad"
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
          Hi { currentUser && currentUser.email.slice(0, currentUser.email.indexOf("@"))}
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
    marginTop:10,
    marginBottom:15,
    fontSize:16,
  }
})
