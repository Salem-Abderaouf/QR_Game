import React ,{ Component } from 'react'
import {View ,Text,TextInput,Button,StyleSheet ,Alert ,ScrollView} from 'react-native'
import { RNCamera } from 'react-native-camera';
import firebase from 'react-native-firebase'
import db from './Firebase';
export default class QrPage extends Component {
    constructor() {
        super();
        this.ref = db.firestore().collection('ans');
        }
        state = {
          student: null,
          response: "",
        }
    // read the user answer
    updateTextInput = (text, field) => {
        const state = this.state
        state[field] = text;
        this.setState(state);
      }
    //lifecycle func to fetch data
    componentDidMount() {
        const state = this.state
        state['student'] = firebase.auth()
        //const { student } =  firebase.auth()
        console.log(state.student._user.email)
        this.setState(state)
    }
    //Trigger to Send data to firebase
    saveAns() {
        this.ref.add({
          student: this.state.student._user.email ,
          response: this.state.response,

        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }

    // QR Code Detection
        barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => barcode.data )
        };

    render(){
        return (
            <View style={{flex:1}}>
                <View style={{flex:4}}>
                <RNCamera
                    ref={ref => {this.camera = ref; }}
                    style={{ height:'100%',width:'100%' }}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
                </RNCamera>
              </View>
                <View style={{flex:2}}>
                    <Text>{  }</Text>
                    <TextInput
                    ref={input=>{this.answre = input}}
                    multiline={true}
                    placeholder="Your Answer"
                    style = {styles.textInput}
                    value = {this.state.response}
                    onChangeText={(text) => this.updateTextInput(text, 'response')}
                    />
                    <Button
                    title="Submit"
                    style={styles.Button}
                    onPress={() =>{
                    if (this.state.response == '') {
                      Alert.alert('Warn','Answer Sould Not be Empty')}
                      else{
                        Alert.alert('Thank you ','Your Answer Have Been Sent')
                        this.saveAns()
                        this.answre.clear()
                      }
                    }
                    }
                    title='Submit'
                    color='#fece00'
                    />
                </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
textInput: {
    borderBottomColor :'grey',
    borderBottomWidth: 1,
    marginBottom: 8,
    width:'100%',
    marginLeft:'auto',
    marginRight:'auto'
  }
})
