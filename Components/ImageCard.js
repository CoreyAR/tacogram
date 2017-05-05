import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import Style from './Styles/ImageCardStyle'

class ImageCard extends Component {
  render () {
    return (
      <View style={Style.container}>
        <Text>{this.props.title}</Text>
        <Image source={this.props.image} style={Style.image} />
        <View>
          <Text>{this.props.origin}</Text>
        </View>
      </View>
    )
  }
}

export default ImageCard
