import React, { Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Style from './Styles/AddTacoScreenStyle'
import { Colors } from '../Themes'

class AddTacoScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      origin: '',
      title: ''
    }
  }

  render () {
    return (
      <View
        contentContainerStyle={{justifyContent: 'center'}}
        style={[Style.container]}
      >
        <View style={{flex: 2}}>
          <Image source={this.state.image}/>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => console.log('pressed')}>
            <Icon name={'camera'} size={30} color={Colors.charcoal} style={{alignSelf: 'center'}}/>
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
