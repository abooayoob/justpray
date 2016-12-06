import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { COLORS } from '../../assets/colors'

export const Prayer = (props) => {
  const borderColor = COLORS[props.prayerName.toLowerCase()]
  let backgroundColor = COLORS['board']

  if (props.currentPrayer === props.prayerName.toLowerCase()) {
    backgroundColor = COLORS[props.prayerName.toLowerCase()]
  }
  return (
    <View style={
      styles.container({
        borderColor,
        backgroundColor
      })
    }>
      <Text style={styles.text}>
        {props.prayerName}
      </Text>
    </View>
  )
}

const { string } = React.PropTypes

Prayer.propTypes = {
  prayerName: string.isRequired,
  currentPrayer: string
}

// Need to use Dimensions here, to get a responsive layout
const styles = {
  container (options) {
    return ({
      flex: 1,
      margin: 10,
      width: 500,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: options.backgroundColor,
      borderWidth: 5,
      borderColor: options.borderColor
    })
  },
  text: {
    fontSize: 45
  }
}
