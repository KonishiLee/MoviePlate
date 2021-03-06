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

import User from './About';
import styles from '../Styles/Main';
import Global from '../Styles/Global';

class Mine extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Movie Plate',
          component: User
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

export { Mine as default };
