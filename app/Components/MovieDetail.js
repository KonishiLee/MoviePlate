/**
 * Created By KonishiLee
 */
'use strict';

import React, { Component } from 'react';
import Carousel from 'react-native-carousel';
import Video from 'react-native-video';

import {
  Text,
  View,
  Image,
  WebView,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styles/Main';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetail: {},
      movieComments: {},
      loaded: false,

      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: false,
      skin: 'custom',
      isBuffering: false,

    };

    const REQUEST_URL = `http://m.maoyan.com/movie/${this.props.movie.id}.json`;

    this.fetchData(REQUEST_URL);
  }

  fetchData(REQUEST_URL) {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.data.MovieDetailModel);
        console.log(responseData.data.CommentResponseModel);

        this.setState({
          movieDetail: responseData.data.MovieDetailModel,
          movieComments: responseData.data.CommentResponseModel,
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator
              size="large"
              color="#6435c9"
            />
          </View>
        </View>
      );
    }

    let movie = this.state.movieDetail;

    return (
      <View style={[styles.container, {paddingTop: 60}]}>
        <Video
          source={{uri: movie.vd}}
          style={[{height: 200}]}
          rate={this.state.rate}
          paused={this.state.paused}
          muted={this.state.muted}
          resizeMode={this.state.resizeMode}
          repeat={false}

        />
        <WebView styleWebViewstyle={styles.item}
          source={{html: movie.dra}}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          scrollEnabled={true}
          >
        </WebView>
      </View>
    );
  }
}

export { MovieDetail as default };
