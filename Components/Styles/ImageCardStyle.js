import {StyleSheet} from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    borderRadius: 3,
    borderColor: Colors.charcoal,
    borderWidth: 5,
    margin: 15,
    padding: 5
  },
  contents: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  }
})
