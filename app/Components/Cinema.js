import React from 'react';

import {
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

class Cinema extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      cinemas: []
    }

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }

  requestURL(){
    return 'http://m.maoyan.com/cinemas.json';
  }


  render() {
    return (
      <View>
        <Text>影院</Text>
      </View>
    );
  }
}

export { Cinema as default};
