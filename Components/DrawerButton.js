import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from './Styles/DrawerButtonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../Themes'

class DrawerButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={Styles.buttonWrapper}>
        <Icon name={this.props.icon} size={30} color={Colors.charcoal} />
        <Text style={Styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default DrawerButton
