import React, { Component } from 'react'
import { Text, View, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import Style from './Styles/ButtonStyle'

const ButtonWrapper = ({ raised, onPress, children }) => {
  // All Android Buttons should have the ripple effect
  if (Platform.OS === 'android') {
    // Raised Android buttons need a white ripple
    if (raised) {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#FFF')}
        >
          <View style={[Style.button, Style.buttonRaised]}>
            {children}
          </View>
        </TouchableNativeFeedback>
      )
    }

    // Normal Android buttons get a gray ripple
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple()}
      >
        <View style={[Style.button, Style.buttonFLat]}>
          {children}
        </View>
      </TouchableNativeFeedback>
    )
  }

  // iOS raised buttons use TouchableHighlight
  if (raised) {
    return (
      <TouchableHighlight
        style={[Style.button, Style.buttonRaised]}
        underlayColor='#0052AC'
        onPress={onPress}
      >
        {children}
      </TouchableHighlight>
    )
  }

  // Normal iOS buttons use TouchableOpacity
  return (
    <TouchableOpacity
      style={[Style.button, Style.buttonFlat]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

class Button extends Component {
  renderLabel () {
    const labelStyles = [Style.buttonLabel]
    if (this.props.raised) {
      labelStyles.push(Style.buttonLabelRaised)
    } else {
      labelStyles.push(Style.buttonLabelFlat)
    }

    let labelText = this.props.label
    if (Platform.OS === 'android') {
      labelText = labelText.toUpperCase()
    }

    return <Text style={labelStyles}>{labelText}</Text>
  }

  render () {
    return (
      <ButtonWrapper {...this.props}>
        {this.renderLabel()}
      </ButtonWrapper>
    )
  }
}

export default Button
