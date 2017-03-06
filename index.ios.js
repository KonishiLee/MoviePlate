/**
 * MaoyanMovie
 * git@git.coding.net:konishilee/MaoyanMovie.git
 * KonishiLee
 */

import React, { Component } from 'react';
import icons from './app/Assets/Icons'
import Featured from './app/Components/Featured';
import Cinemas from './app/Components/Cinemas';
import Mine from './app/Components/Mine';
import Global from './app/Styles/Global';

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
      <TabBarIOS barTintColor={Global.barBgColor} tintColor="white">
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
          title="周边院线"
          selectedIcon={{uri: icons.boardActive, scale: 4.6}}
          selected={this.state.selectedTab === 'cinema'}
          onPress={() => {
            this.setState({
              selectedTab: 'cinema'
            });
          }}
          >
          <Cinemas />
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
          <Mine />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('MaoyanMovie', () => MaoyanMovie);
