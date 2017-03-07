/**
 * Created By KonishiLee
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import MovieList from './MovieList';
import styles from '../Styles/Main';
import Global from '../Styles/Global';

class Latest extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '最新电影',
          component: MovieList
        }}
        shadowHidden={true}
        barTintColor={Global.barBgColor}
        titleTextColor="rgba(255, 255, 255, 0.8)"
        tintColor="rgba(255, 255, 255, 0.8)"
        translucent={true}
      />
    );
  }
}

export { Latest as default };
