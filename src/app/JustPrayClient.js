import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import { Prayer } from './Prayer'
import { Clock } from './Clock'
import { COLORS } from '../../assets/colors'

export default class JustPrayClient extends Component {
  constructor (props) {
    super(props)
    this.props = props

    this.playAdhaan = this.playAdhaan.bind(this)
  }

  playAdhaan () {
    this.props.callToPrayer.play(success => {
      if (success) {
        console.log('successfully finished playing')
      } else {
        console.log('playback failed due to audio decoding errors')
      }
    })
  }

  render () {
    return (
      <TouchableWithoutFeedback onPress={this.playAdhaan}>
        <View style={styles.container}>
          <Clock />
          <Prayer prayerName='FAJR' />
          <Prayer prayerName='DHUHR' />
          <Prayer prayerName='ASR' />
          <Prayer prayerName='MAGHRIB' />
          <Prayer prayerName='ISHA' />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const { object } = React.PropTypes

JustPrayClient.propTypes = {
  callToPrayer: object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.board
  }
})
