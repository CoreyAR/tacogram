import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import ImageCard from '../Components/ImageCard'
import Style from './Styles/HomeScreenStyle'
import TACO_DATA from '../Fixtures/TacoData'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tacos: TACO_DATA
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.taco !== nextProps.taco) {
      console.log('taco added')
      // Add key based on length of array
      nextProps.taco.key = this.state.tacos.length + 1
      this.setState((prevState) => ({tacos: prevState.tacos.concat(nextProps.taco)}))
    }
  }

  componentDidMount () {
    if (this.props.taco === null) return
    this.setState((prevState) => ({
      tacos: prevState.tacos.concat(
        Object.assign({}, this.props.taco, { key: this.props.taco.title })
      )
    }))
  }

  render () {
    return (
      <View
        contentContainerStyle={{justifyContent: 'center'}}
        style={[Style.container, {height: this.state.visibleHeight}]}
      >
        <FlatList
          data={this.state.tacos}
          keyExtractor={item => item.key}
          renderItem={({item}) => <ImageCard title={item.title} origin={item.origin} image={item.image} />}
      />
      </View>
    )
  }
}

HomeScreen.defaultProps = {
  taco: null
}

export default HomeScreen
