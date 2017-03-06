import React from 'react';
import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';
import Global from '../Styles/Global';

import {
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

class MovieList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      movies: [],
      loaded: false
    };

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.getData();
  }

  requestURL(){
    return 'https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000'
  }

  getData(){
    fetch(this.requestURL())
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: responseData.data.movies,
          loaded: true
        });
      })
      .done();
  }

  showMovieDetail(movie) {
    this.props.navigator.push({
      id: movie.id,
      component: MovieDetail,
      passProps: {movie},
    });
  }

  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor={Global.underlayColor}
        onPress={() => this.showMovieDetail(movie)}
      >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
              source={{uri: movie.img}}
              style={styles.image}
             />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>
              {movie.nm}
            </Text>
            <Text style={[styles.itemMeta,styles.pt, styles.pr]}>
              {movie.star}
            </Text>
            <Text style={[styles.redText,styles.pt, styles.pr]}>
              {movie.rt}
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
            initialListSize={this.state.movies.length}
            dataSource={this.dataSource.cloneWithRows(this.state.movies)}
            renderRow={this.renderMovieList.bind(this)}
            enableEmptySections={true}
          />
        </View>
      </View>
    );
  }
}

export { MovieList as default};
