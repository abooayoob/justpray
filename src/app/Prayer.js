import React from 'react'
import {
  // StyleSheet,
  Text,
  View
} from 'react-native'
import { COLORS } from '../../assets/colors'

export const Prayer = (props) => {
  return (
    <View style={styles.container({
      backgroundColor: COLORS[props.prayerName.toLowerCase()]})}>
      <Text style={styles.text}>
        {props.prayerName}
      </Text>
    </View>
  )
}

const { string } = React.PropTypes

Prayer.propTypes = {
  prayerName: string.isRequired
}

const styles = {
  container (options) {
    return ({
      flex: 1,
      margin: 5,
      width: 500,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: options.backgroundColor
    })
  },
  text: {
    fontSize: 60
  }
}
