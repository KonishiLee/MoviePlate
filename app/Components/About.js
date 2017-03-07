/**
 * Created By KonishiLee
 */
'use strict';


import React from 'react';

import {
  Text,
  View,
  Image,
  ListView,
  Linking,
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/Main';
import Global from '../Styles/Global';

class User extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <View style={styles.p10}>
            <Text style={styles.itemHeader}>简介</Text>
            <Text style={[styles.metaText, styles.mt]}>
              这是一个可以查看最新电影，附近影院的 App，
              这也是一个用 React-Native 开发的原生态 App，
              目的在于将 RN 的使用记录下来，
              并且帮助更多的人学会使用 RN。
            </Text>
          </View>

          <View style={styles.p10}>
            <Text style={styles.itemHeader}>参考资料</Text>

            <TouchableHighlight
              underlayColor={Global.underlayColor}
              onPress={() => {
                Linking.openURL('http://reactjs.cn/');
              }}>
              <Text style={[styles.metaText, styles.mt]}>
                1.React</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={Global.underlayColor}
              onPress={() => {
                Linking.openURL('https://facebook.github.io/react-native/');
              }}>
              <Text style={[styles.metaText]}>
                2.React-Native</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={Global.underlayColor}
              onPress={() => {
                Linking.openURL('http://konishilee.com/blog/2017/02/Front-End-React-Native%E5%89%8D%E6%9C%9F%E5%87%86%E5%A4%87.html');
              }}>
              <Text style={[styles.metaText]}>
                3.开发教程</Text>
            </TouchableHighlight>
          </View>


          <View style={styles.p10}>
            <Text style={styles.itemHeader}>关于作者</Text>

            <View style={styles.mt}>
              <Text style={styles.mt}>博客地址</Text>
              <TouchableHighlight
                underlayColor={Global.underlayColor}
                onPress={() => {
                  Linking.openURL('https://konishilee.com/');
                }}>
                <Text style={[styles.metaText]}>
                  https://konishilee.com</Text>
              </TouchableHighlight>

              <Text style={styles.mt}>Github</Text>
              <TouchableHighlight
                underlayColor={Global.underlayColor}
                onPress={() => {
                  Linking.openURL('https://github.com/KonishiLee');
                }}>
                <Text style={[styles.metaText]}>
                  https://github.com/KonishiLee</Text>
              </TouchableHighlight>

              <Text style={styles.mt}>邮箱</Text>
              <Text style={[styles.metaText]}>
                konishilee@qq.com</Text>

              <Text style={styles.mt}>QQ</Text>
              <Text style={[styles.metaText]}>
                519807609</Text>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { User as default};
