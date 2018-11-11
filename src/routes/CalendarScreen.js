
import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

class CalendarScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title} >日历页面</Text>
        <Calendar></Calendar>
        {/* <Text> {`platform:${greeting}`}  </Text> */}
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // color: 'red',
    backgroundColor: '#ccc',
  },
  title: {
    color: 'red'
  }
})

export default CalendarScreen
