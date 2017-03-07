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
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import Cinema from './Cinema';
import styles from '../Styles/Main';
import Global from '../Styles/Global';

class Area extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      areas: [],
      loaded: false
    }

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.getData();
  }

  requestURL(){
    return 'http://m.maoyan.com/cinemas.json';
  }

  getData() {
    fetch(this.requestURL())
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          areas: responseData.data,
          loaded: true
        });
      });
  }

  showCinemas(area) {
    this.props.navigator.push({
      area: area,
      component: Cinema,
      passProps: {area},
    });
  }

  renderAreaList(area){
    return (
      <TouchableHighlight
        underlayColor={Global.underlayColor}
        onPress={() => this.showCinemas(area)}
      >
        <View style={[styles.item, styles.p10]}>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>
              {area[0].area}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator
              size="large"
              color={Global.colorStyle}
            />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <ListView
            initialListSize={this.state.areas.length}
            dataSource={this.dataSource.cloneWithRows(this.state.areas)}
            renderRow={this.renderAreaList.bind(this)}
            enableEmptySections={true}
          />
        </View>
      </View>
    );
  }
}

export { Area as default};
