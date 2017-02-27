import React from 'react';
import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';

import {
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
} from 'react-native';

class Cinema extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      movies: []
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
          movies: responseData.data.movies
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
        underlayColor="rgba(34, 26, 38, 0.1)"
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
    return (
      <ListView
          initialListSize={this.state.movies.length}
          dataSource={this.dataSource.cloneWithRows(this.state.movies)}
          renderRow={this.renderMovieList.bind(this)}
          enableEmptySections={true}
        />
    );
  }
}

export { Cinema as default};
