import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  static navigationOptions = {
    title:'Profile',
    headerRight:() => (
      <Icon.Button
       name="facebook"
       onPress={() => alert('Hola From fb ')}
       backgroundColor="#3b5998"
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
        <Text>
          Hi { currentUser && currentUser.username } !
        </Text>
        <Button
        title="Log out"
        onPress={() => firebase.auth().signOut()}
        />
      </View>
    )
  }
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
