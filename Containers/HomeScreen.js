import React, { Component } from 'react'
import { Image, FlatList, Text, View } from 'react-native'
import ImageCard from '../Components/ImageCard'
import Style from './Styles/HomeScreenStyle'
import TACO_DATA from '../Fixtures/TacoData'


class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tacos: TACO_DATA
    }
  }

  render() {
    return (
      <View
        contentContainerStyle={{justifyContent: 'center'}}
        style={[Style.container, {height: this.state.visibleHeight}]}
      >
      <FlatList
        data={this.state.tacos}
        keyExtractor={item => item.key}
        renderItem={({item}) =>  <ImageCard title={item.title} origin={item.origin} image={item.image} />}
      />
      </View>
    )
  }
}

export default HomeScreen