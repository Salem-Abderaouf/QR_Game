import React ,{ Component } from 'react'
import {View ,Text,TextInput,Button,StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera';

export default class QrPage extends Component {
    barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.warn(barcode.data))
      };
    render(){
        return (
            <View style={{flex:1}}>
                <View style={{flex:4}}>
                <RNCamera
                    ref={ref => {
                    this.camera = ref;
                    }}
                    style={{
                    height:'100%',
                    width:'100%',
                    }}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                >
                </RNCamera>
                </View>
                <View style={{flex:2}}>
                    <Text>{ this.barcodeRecognized }</Text>
                    <TextInput 
                    placeholder="Your Answer"
                    style = {styles.textInput}
                    />
                    <Button 
                    title="Submit"
                    style={styles.Button}
                    onPress ={()=>console.log('Your Question Submited')}
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