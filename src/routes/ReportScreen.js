import React, { Component } from 'react'
import { Text } from 'react-native'
import MainLayout from '../components/layout/MainLayout'


export default class extends Component {
  render() {
    return (
      <MainLayout title='汇总报表' navigation={this.props.navigation} >
        <Text>汇总报表</Text>
      </MainLayout>)
  }
}

