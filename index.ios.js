/**
 * MaoyanMovie
 * git@git.coding.net:konishilee/MaoyanMovie.git
 * KonishiLee
 */

import React, { Component } from 'react';
import icons from './app/Assets/Icons'
import Featured from './app/Components/Latest';
import Cinemas from './app/Components/Cinemas';
import Mine from './app/Components/MoviePlate';
import Global from './app/Styles/Global';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TabBarIOS,
} from 'react-native';

export default class MaoyanMovie extends Component {
  constructor(props){
      super(props);

      this.state = {
        selectedTab: 'about'
      }
  }

  render() {
    return (
      <TabBarIOS barTintColor={Global.barBgColor} tintColor="white">
        <TabBarIOS.Item
          icon={{uri: icons.latest, scale: 4.5}}
          title="最新电影"
          selectedIcon={{uri: icons.latestActive, scale: 4.5}}
          selected={this.state.selectedTab === 'latest'}
          onPress={() => {
            this.setState({
              selectedTab: 'latest'
            });
          }}>
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.cinemas, scale: 4.5}}
          title="周边院线"
          selectedIcon={{uri: icons.cinemasActive, scale: 4.5}}
          selected={this.state.selectedTab === 'cinemas'}
          onPress={() => {
            this.setState({
              selectedTab: 'cinemas'
            });
          }}
          >
          <Cinemas />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.about, scale: 3.3}}
          selected={this.state.selectedTab === 'about'}
          title="关于"
          onPress={() => {
            this.setState({
              selectedTab: 'about'
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
