
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
    this.onMonthChange = this.onMonthChange.bind(this)
  }

  onDayPress(dateObj) {
    log(JSON.stringify(dateObj, null, 2))
  }

  onMonthChange(data) {
    log(data.month)
  }

  render() {
    const calendarProps = {
      onDayPress: this.onDayPress,
      onMonthChange: this.onMonthChange,
      markedDates: {
        // '2018-11-20': { textColor: 'green' },
        '2018-11-22': { startingDay: true, color: 'skyblue' },
        '2018-11-23': { endingDay: true, color: 'skyblue' },
        // '2018-11-04': { disabled: true, startingDay: true, color: 'green', endingDay: true }

        // '2018-11-1': {
        //   startingDay: true,
        //   // color: 'green',
        //   // textColor: 'red',
        //   selected: true
        // },
        // '2018-11-3': {
        //   endingDay: true,
        //   // color: 'green'
        // },
        // '2018-11-16': { selected: true, marked: true, selectedColor: 'red' },
        // '2018-11-17': { marked: true },
        // '2018-11-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
        // '2018-11-19': { disabled: true, disableTouchEvent: true }
      },
      markingType: "period",
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
