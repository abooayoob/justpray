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
        13:25
      </Text>
      <Text>
        23/11-16
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
