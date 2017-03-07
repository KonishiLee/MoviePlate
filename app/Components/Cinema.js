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
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import styles from '../Styles/Main';
import Global from '../Styles/Global';

class Cinema extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cinemas: this.props.area
    }

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }

  renderCinemasList(cinema){
    return (
      <View style={[styles.item, styles.p10]}>
        <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>
            {cinema.nm}
          </Text>

          <Text style={[styles.itemMeta, styles.pt]}>
            地址：{cinema.addr}
          </Text>

          <Text style={[styles.metaText]}>
            参考价格：¥{cinema.sellPrice}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          initialListSize={this.state.cinemas.length}
          dataSource={this.dataSource.cloneWithRows(this.state.cinemas)}
          renderRow={this.renderCinemasList.bind(this)}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

export { Cinema as default};
