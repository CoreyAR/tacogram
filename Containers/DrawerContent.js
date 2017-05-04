import React, { Component } from 'react'
import { AsyncStorage, BackAndroid, Image, Text, View } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'


class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  enterHome = () => {
    this.toggleDrawer()
    NavigationActions.home()
  }

  render () {
    return (
      <View contentContainerStyle={{justifyContent: 'space-between'}}style={Styles.container}>
        <View style={Styles.header}>
          <Image source={Images.logo} style={Styles.logo} />
        </View>
        <View style={Styles.body}>
          <View style={Styles.menu}>
            <DrawerButton text='Home' icon={'home'} onPress={this.enterHome} />
          </View>
        </View>
      </View>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
