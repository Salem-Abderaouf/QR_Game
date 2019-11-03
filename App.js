import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'// create our app's navigation stack

const MainNavigator = createStackNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)
const App = createAppContainer(MainNavigator);

export default App;
