import React, { Component } from 'react'
import { Image, Picker, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Button from '../Components/Button'
import CrossPlatformPicker from '../Components/CrossPlatformPicker'
import Style from './Styles/AddTacoScreenStyle'
import { Colors, Images } from '../Themes'
import TACO_DATA from '../Fixtures/TacoData'

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
      image: Images.logo,
      origin: 'Mexico',
      title: ''
    }
  }

  showImagePicker () {
    ImagePicker.showImagePicker(options, (response) => {
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
          image: source
        })
      }
    })
  }

  addTaco () {
    NavigationActions.home({type: 'reset', taco: {...this.state}})
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={{justifyContent: 'center'}}
        style={[Style.container]}
      >
        <View style={Style.imageContainer}>
          <Image style={Style.image} source={this.state.image} />
        </View>
        <View style={Style.form}>
          <TouchableOpacity onPress={() => this.showImagePicker()}>
            <Icon name={'camera'} size={30} color={Colors.charcoal} style={{alignSelf: 'center'}} />
          </TouchableOpacity>
          <View>
            <Text>Title</Text>
            <TextInput
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
              placeholder='Title'
              style={Style.textInput}
            />
          </View>
          <View>
            <Text>Origin</Text>
            <CrossPlatformPicker
              selectedValue={this.state.origin}
              onValueChange={(origin) => this.setState({origin})}
              itemStyle={{fontSize: 16, fontWeight: 'bold'}}
              style={Style.picker}
            >
              {this.renderOriginPickerItems()}
            </CrossPlatformPicker>
          </View>
          <Button raised label='Add Taco' onPress={() => this.addTaco()} style={Style.buttonContainer} />
        </View>
      </ScrollView>
    )
  }

  renderOriginPickerItems () {
    const pickerItems = TACO_DATA.reduce((acc, cur) => {
      if (acc.indexOf(cur.origin) < 0) {
        acc.push(cur.origin)
      }
      return acc
    }, []).map((d, i) => {
      return <Picker.Item label={d} value={d} key={1} />
    })
    return pickerItems
  }
}

export default AddTacoScreen
