import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 70,
    backgroundColor: Colors.background,
    height: Metrics.screenHeight
  },
  buttonContainer: {
    ...Platform.select({
      ios: {
        margin: Metrics.baseMargin
      }
    })
  },
  imageContainer: {
    flex: 1,
    margin: Metrics.doubleBaseMargin,
    padding: Metrics.doubleBaseMargin,
    borderColor: Colors.charcoal,
    borderWidth: 3,
    borderRadius: 5
  },
  image: {
    height: 250,
    width: 300,
    alignSelf: 'center'
  },
  form: {
    height: 250,
    margin: Metrics.doubleBaseMargin
    // justifyContent: 'space-between'
  },
  picker: {
    ...Platform.select({
      ios: {
        height: 100
      }
    })
  },
  textInput: {
    ...Platform.select({
      ios: {
        height: 50
      }
    })
  }
})
