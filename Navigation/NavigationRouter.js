import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
// screens identified by the router
import HomeScreen from '../Containers/HomeScreen'


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene 
            key='drawerChildrenWrapper' 
            navigationBarStyle={Styles.navBar} 
            titleStyle={Styles.title} 
            leftButtonIconStyle={Styles.leftButton} 
            rightButtonTextStyle={Styles.rightButton}>
            <Scene key='home' component={HomeScreen} title='Tacogram' renderLeftButton={NavItems.hamburgerButton} renderRightButton={NavItems.plusButton}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
