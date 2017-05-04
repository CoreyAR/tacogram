import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.green,
  },
  body: {
    flex: 3
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: Metrics.doubleBaseMargin
  },
  header: {
    padding: Metrics.doubleBaseMargin,
    flex: 1,
    justifyContent: 'flex-start'
  },
  logo: {
    width: 105,
    height: 87,
    alignSelf: 'center'
  },
  menu: {
    flex: 1,
    padding: Metrics.doubleBaseMargin,
    justifyContent: 'flex-start'
  },
  text: {
    ...Fonts.style.h5,
    color: Colors.snow,
    marginVertical: Metrics.baseMargin
  }
})
