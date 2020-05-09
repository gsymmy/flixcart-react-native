import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  FlatList } from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/AppSwitchNavigator/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp'

const App = () => <AppContainer/>;

const LoginStackNavigator = createStackNavigator({
  Home,
  SignUp
})

const AppSwitchNavigator = createSwitchNavigator({
  Login,
  Home,
  SignUp
})

const AppContainer = createAppContainer(AppSwitchNavigator);
export default App;