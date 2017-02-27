/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import icons from './app/Assets/Icons'
import Featured from './app/Components/Featured';
import Cinema from './app/Components/Cinema';
import User from './app/Components/User';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TabBarIOS
} from 'react-native';

export default class MaoyanMovie extends Component {
  constructor(props){
      super(props);

      this.state = {
        selectedTab: 'movie'
      }
  }

  render() {
    return (
      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item
          icon={{uri: icons.star, scale: 4.6}}
          title="最新电影"
          selectedIcon={{uri: icons.starActive, scale: 4.6}}
          selected={this.state.selectedTab === 'movie'}
          onPress={() => {
            this.setState({
              selectedTab: 'movie'
            });
          }}>
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.board, scale: 4.6}}
          title="影院"
          selectedIcon={{uri: icons.boardActive, scale: 4.6}}
          selected={this.state.selectedTab === 'cinema'}
          onPress={() => {
            this.setState({
              selectedTab: 'cinema'
            });
          }}
          >
          <Cinema />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.user, scale: 3.3}}
          selected={this.state.selectedTab === 'mine'}
          title="我的"
          onPress={() => {
            this.setState({
              selectedTab: 'mine'
            })
          }}
          >
          <User />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MaoyanMovie', () => MaoyanMovie);
