/**
 * Created By KonishiLee
 */
'use strict';

import React, { Component } from 'react';
import Carousel from 'react-native-carousel';
import {
  Text,
  View,
  Image,
  WebView,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import styles from '../Styles/Main';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: {},
      movieComments: {},
      loaded: false,
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
        <View>
          <View>
            <ActivityIndicator
              size="large"
              color="#6435c9"
            />
          </View>
        </View>
      );
    }

    let movie = this.state.movieDetail;
    let StillView = movie.photos.map(img => {
      return (
        <Image
          source={{uri: img}}
        />
      );
    });
    return (
      <View style={[styles.p10]}>
        <View>
          {StillView}
        </View>
        <WebView styleWebViewstyle={styles.item}
          source={{html: movie.dra}}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          scrollEnabled={false}
          >
        </WebView>

      </View>
    );
  }
}

export { MovieDetail as default };
