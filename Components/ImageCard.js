import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import Style from './Styles/ImageCardStyle'
import { Images } from '../Themes'

class ImageCard extends Component {
  render() {
    console.log(this.props)
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