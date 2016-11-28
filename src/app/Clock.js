import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { COLORS } from '../../assets/colors'
import { default as moment } from 'moment/min/moment-with-locales'

export const Clock = (props) => {
  moment.locale('nb')
  // console.log(moment.locales)
  const now = moment()
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        {now.format('HH:mm')}
      </Text>
      <Text>
        {now.format('dddd, Do, MMMM')}
      </Text>
    </View>
  )
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
