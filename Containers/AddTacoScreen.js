import React, { Component } from 'react'
import { Image, NativeModules, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Style from './Styles/AddTacoScreenStyle'
import { Colors } from '../Themes'

const ImagePicker = NativeModules.ImagePickerManager

var options = {
  title: 'Select Avatar',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Camera',
  chooseFromLibraryButtonTitle: 'Photo Library',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'}
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

class AddTacoScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      origin: '',
      title: ''
    }
  }

  showImagePicker () {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        })
      }
    })
  }

  render () {
    return (
      <View
        contentContainerStyle={{justifyContent: 'center'}}
        style={[Style.container]}
      >
        <View style={{flex: 2}}>
          <Image source={this.state.image} />
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={this.showImagePicker}>
            <Icon name={'camera'} size={30} color={Colors.charcoal} style={{alignSelf: 'center'}} />
          </TouchableOpacity>
          <Text>Title</Text>
          <TextInput
            onChange={(title) => this.setState({title})}
            value={this.state.title}
            placeholder='Title'
          />
          <Text>Origin</Text>
          <TextInput
            onChange={(origin) => this.setState({origin})}
            value={this.state.origin}
            placeholder='Origin'
          />
        </View>
      </View>
    )
  }
}

export default AddTacoScreen
