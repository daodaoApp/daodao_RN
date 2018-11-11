import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default class extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>顶栏导航</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'skyblue',
    flex: 1,
    width: '100%',
    textAlign: 'center',
    height: 100
  },

})
