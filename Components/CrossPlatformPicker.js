import React, { Component } from 'react'
import { Modal, Picker, Platform, View } from 'react-native'
import Button from './Button'

const PickerWrapper = ({ selectedValue, onValueChange, customOnValueChange, itemStyle, style, openModal, modalVisible, children }) => {
  if (Platform.OS === 'android') {
    return (
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={style}
        >
        {children}
      </Picker>
    )
  } else {
    return (

      <Picker
        selectedValue={selectedValue}
        onValueChange={(value) => customOnValueChange(value)}
        itemStyle={itemStyle}
        style={style}
        >
        {children}
      </Picker>

    )
  }
}

class CrossPlatformPicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  openModal () {
    console.log('pressed')
    this.setState({open: true})
  }

  customOnValueChange (value) {
    this.setState({open: false})
    this.props.onValueChange(value)
  }

  renderPickerWrapper () {
    if (Platform.OS === 'android') {
      return (
        <PickerWrapper
          {...this.props}
        />
      )
    } else {
      return (
        <View>
          <Button onPress={() => this.openModal()} label={this.props.selectedValue} />
          <Modal
            visible={this.state.open}
          >
            <PickerWrapper
              {...this.props}
              openModal={this.openModal}
              customOnValueChange={this.customOnValueChange.bind(this)}
              modalVisible={this.state.open}
            />
          </Modal>
        </View>
      )
    }
  }

  render () {
    return (
      <View>
        {this.renderPickerWrapper()}
      </View>
    )
  }
}

export default CrossPlatformPicker
