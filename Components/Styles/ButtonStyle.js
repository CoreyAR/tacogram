import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  button: {
    padding: 20,
    margin: 10,
    width: 200,
    alignSelf: 'center'
  },
  buttonRaised: {
    borderRadius: 2,
    backgroundColor: Colors.leaf,
    ...Platform.select({
      android: {
        elevation: 3
      }
    })
  },
  buttonFlat: {
  },
  buttonLabel: {
    textAlign: 'center',
    ...Platform.select({
      android: {
        fontWeight: 'bold'
      }
    })
  },
  buttonLabelRaised: {
    color: '#FFFFFF'
  },
  buttonLabelFlat: {
    color: Colors.leaf
  }
})
