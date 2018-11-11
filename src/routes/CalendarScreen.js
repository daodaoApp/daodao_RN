
import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars'
import NavBar from '../components/layout/NavBar'
import TabBar from '../components/layout/TabBar'
import { log } from '../utils/debugTools'
// LocaleConfig.defaultLocale = 'fr'

class CalendarScreen extends Component {
  constructor(props) {
    super(props)

    this.onDayPress = this.onDayPress.bind(this)
  }

  onDayPress(dateObj) {
    log(JSON.stringify(dateObj, null, 2))
  }

  render() {
    const calendarProps = {
      onDayPress: this.onDayPress
    }
    return (
      <View style={styles.container} >
        <NavBar></NavBar>
        <Text style={styles.title} >日历页面</Text>
        <Calendar {...calendarProps} ></Calendar>
        <TabBar></TabBar>
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
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
  }
})

export default CalendarScreen
