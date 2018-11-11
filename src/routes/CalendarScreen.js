
import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

const greeting = Platform.select({
  ios: 'ios',
  android: 'android'
});

class Calendar extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title} >日历页面</Text>
        <Text> {`platform:${greeting}`}  </Text>
      </View>)
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

export default Calendar