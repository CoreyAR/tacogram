import {StyleSheet} from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  text: {
    ...Fonts.style.h5,
    color: Colors.charcoal,
    marginVertical: Metrics.baseMargin,
    paddingLeft: 8
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
