import React, { Component } from 'react'
import { Text } from 'react-native'
import MainLayout from '../components/layout/MainLayout'


export default class extends Component {
  render() {
    return (
      <MainLayout title='设置' navigation={this.props.navigation} >
        <Text>设置</Text>
      </MainLayout>)
  }
}

