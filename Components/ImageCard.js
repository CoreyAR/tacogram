import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import Style from './Styles/ImageCardStyle'

class ImageCard extends Component {
  render () {
    return (
      <View style={Style.container}>
        <Image source={this.props.image} style={Style.image} />
        <View style={Style.contents}>
          <Text style={{textAlign: 'center'}}>{this.props.title} from {this.props.origin}</Text>
        </View>
      </View>
    )
  }
}

export default ImageCard
