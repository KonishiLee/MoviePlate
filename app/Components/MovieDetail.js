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
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import styles from '../Styles/Main';
import Global from '../Styles/Global';

// TODO:
// 1.播放器的使用
// 2.评论的优化

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
        this.setState({
          movieDetail: responseData.data.MovieDetailModel,
          movieComments: responseData.data.CommentResponseModel,
          loaded: true,
        });
      })
      .done();
  }

  _setupStarView() {
    let movie = this.state.movieDetail;

    if (movie.star.length > 100) {
      return (
        <View style={styles.p10}>
          <Text style={styles.labelText}>主演：</Text>
          <Text style={styles.metaText}>
            {movie.star.substr(0, 99)}...
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log('get star detail');
            }}
          >
            <Text>展开</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.p10}>
        <Text style={styles.labelText}>主演：</Text>
        <Text style={styles.metaText}>
          {movie.star}
        </Text>
      </View>
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

    let movie = this.state.movieDetail;
    let comments = this.state.movieComments.cmts.map((c) => {
      return (
        <View key={c.id} style={[styles.item, styles.p10]}>
          <View>
            <Text style={styles.metaText}>{c.content}</Text>

            <Image
              style={[styles.avatar, styles.mt]}
              source={{uri: c.avatarurl}}
              />
            <Text style={[styles.pt5]}>{c.nick}</Text>
            <Text style={styles.metaText}>{c.time}</Text>
          </View>
        </View>
      );
    });

    return (
      <ScrollView styel={styles.container}>
        <View style={[styles.bodyContainer]}>
          <View>
            <Video
              source={{uri: movie.vd}}
              style={[{height: 200}]}
              rate={this.state.rate}
              paused={this.state.paused}
              muted={this.state.muted}
              resizeMode={this.state.resizeMode}
              repeat={false}
            />
          </View>

          <View style={[styles.p10]}>
            <Text style={styles.headerText}>
              {movie.nm}
            </Text>

            <Text style={[styles.metaText]}>
              {movie.ver}
            </Text>
          </View>

          {this._setupStarView()}

          <View style={styles.p10}>
            <Text style={styles.labelText}>详情：</Text>
            <Text style={styles.metaText}>
              {movie.dra.replace(new RegExp(/<p>/g),'').replace(new RegExp(/<\/p>/g),'')}
            </Text>
          </View>

          <View style={styles.p10}>
            <Text style={styles.labelText}>热门评论：</Text>
          </View>

          {comments}
        </View>
      </ScrollView>
    );
  }
}

export { MovieDetail as default };
