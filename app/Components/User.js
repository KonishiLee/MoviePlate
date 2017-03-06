import React from 'react';

import {
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

import styles from '../Styles/Main';

class User extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>我的</Text>
      </View>
    );
  }
}

export { User as default};
