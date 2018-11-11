import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import MainLayout from '../components/layout/MainLayout'
const greeting = Platform.select({
  ios: 'ios',
  android: 'android'
});

class Demo extends Component {
  render() {
    return (
      <MainLayout title='demo' navigation={this.props.navigation} >
        <Text style={styles.title} >Hello world</Text>
        <Text> {`platform:${greeting}`}  </Text>
      </MainLayout>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // color: 'red',
    backgroundColor: '#ccc',
  },
  title: {
    color: 'red'
  }
})

export default Demo
