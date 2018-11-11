
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Demo from "./src/routes/DemoScreen.js"
import { createStackNavigator } from 'react-navigation'
import router from './src/router'
const App = createStackNavigator(router)
export default App
