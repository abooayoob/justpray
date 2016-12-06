import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { COLORS } from '../../assets/colors'

export const Clock = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        {props.time.format('HH:mm:ss')}
      </Text>
      <Text style={styles.dateText}>
        {props.time.format('dddd, Do, MMMM')}
      </Text>
    </View>
  )
}

const { object } = React.PropTypes

Clock.propTypes = {
  time: object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.board
  },
  timeText: {
    fontSize: 40
  },
  dateText: {
    fontSize: 30
  }
})
