import React, { Component } from 'react'
import { Actions as NavigationActions, Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
// screens identified by the router
import HomeScreen from '../Containers/HomeScreen'
import AddTacoScreen from '../Containers/AddTacoScreen'

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
            rightButtonTextStyle={Styles.rightButton}
          >
            <Scene
              key='home'
              component={HomeScreen}
              title='Tacogram'
              renderLeftButton={NavItems.hamburgerButton}
              renderRightButton={() => NavItems.plusButton(NavigationActions.addTaco)} />
            <Scene
              key='addTaco'
              component={AddTacoScreen}
              title='Add Taco'
              renderLeftButton={NavItems.backButton}
              leftButtonIconStyle={Styles.leftButton}
            />
          </ Scene>
        </ Scene>
      </Router>
    )
  }
}

export default NavigationRouter
