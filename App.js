/**
 * IconFontDemo
 * 作者Git：https://github.com/guangqiang-liu
 * 技术交流群：620792950
 * 作者QQ：1126756952
 * @guangqiang
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import {Icon} from './icon'
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>react-native-vector-icons 组件库中的字体库</Text>
        <View style={{height: 100, alignItems: 'center', justifyContent: 'space-around', borderWidth: 1, borderColor: 'red', width: 200}}>
          <Icon name={'fontAwesome|rocket'} size={20} color={'red'}/>
          <Icon name={'fontAwesome|facebook'} size={20} color={'orange'}/>
        </View>
        <Text style={{marginTop: 20}}>自定义的字体库</Text>
        <View style={{height: 200, alignItems: 'center', justifyContent: 'space-around', borderWidth: 1, borderColor: 'red', width: 200}}>
          <Icon name={'oneIcon|like_o'} size={20} color={'#dad'}/>
          <Icon name={'oneIcon|horn_playing_o'} size={20} color={'green'}/>
          <Icon name={'oneIcon|horn_paused_o'} size={20} color={'blue'}/>
          <Icon name={'oneIcon|nav_back_o'} size={20} color={'black'}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})