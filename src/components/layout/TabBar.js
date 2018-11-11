import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default class extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>底部标签</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    height: 30,
    fontSize: 15,
    width: '100%',
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

})
