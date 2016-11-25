import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { Prayer } from './Prayer'

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
      <View style={styles.container}>
        <Prayer prayerName='FAJR' />
        <Prayer prayerName='DHUHR' />
        <Prayer prayerName='ASR' />
        <Prayer prayerName='MAGHRIB' />
        <Prayer prayerName='ISHA' />
      </View>
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
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})