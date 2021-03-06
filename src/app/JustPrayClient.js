import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import { Prayer } from './Prayer'
import { Clock } from './Clock'
import { COLORS } from '../../assets/colors'
import { default as moment } from 'moment/min/moment-with-locales'
import { default as prayers } from '../../assets/prayerTimes.json'
moment.locale('nb')

export default class JustPrayClient extends Component {
  constructor (props) {
    super(props)
    this.props = props

    this.state = {
      currentTime: moment(),
      prayersToday: this.getNewPrayers(moment())
    }

    this.playAdhaan = this.playAdhaan.bind(this)
    this.tick = this.tick.bind(this)
    this.getNewPrayers = this.getNewPrayers.bind(this)
    this.determinePrayer = this.determinePrayer.bind(this)
    this.queryPrayerTime = this.queryPrayerTime.bind(this)
  }

  componentDidMount () {
    setInterval(this.tick, 1000)
  }

  tick () {
    const now = moment()
    const today = now.format('DD.MM.YYYY')

    if (today !== this.state.currentTime.format('DD.MM.YYYY')) {
      this.setState({prayersToday: this.getNewPrayers(now)})
    }

    const freshPrayer = this.determinePrayer(now)

    if (freshPrayer !== this.state.currentPrayer) {
      this.setState({currentPrayer: freshPrayer})
      if (this.state.currentPrayer !== 'none') {
        this.playAdhaan()
      }
    }

    this.setState({currentTime: now})
  }

  determinePrayer (time) {
    const prayerObject = this.state.prayersToday
    const date = time.format('YYYY-MM-DD')

    const dateAfter = moment().add(1, 'days').format('YYYY-MM-DD')
    const dateBefore = moment().subtract(1, 'days').format('YYYY-MM-DD')

    if (time.isBetween(date + ' ' + prayerObject.fajr, date + ' ' + prayerObject.sunrise)) {
      return 'fajr'
    } else if (time.isBetween(date + ' ' + prayerObject.sunrise, date + ' ' + prayerObject.dhuhr)) {
      return 'none'
    } else if (time.isBetween(date + ' ' + prayerObject.dhuhr, date + ' ' + prayerObject.asr)) {
      return 'dhuhr'
    } else if (time.isBetween(date + ' ' + prayerObject.asr, date + ' ' + prayerObject.maghrib)) {
      return 'asr'
    } else if (time.isBetween(date + ' ' + prayerObject.maghrib, date + ' ' + prayerObject.isha)) {
      return 'maghrib'
    } else if (time.isBetween(date + ' ' + prayerObject.isha, dateAfter + ' ' + prayerObject.fajr)) {
      return 'isha'
    } else if (time.isBetween(dateBefore + ' ' + prayerObject.isha, date + ' ' + prayerObject.fajr)) {
      return 'isha'
    }
  }

  getNewPrayers (moment) {
    const prayerObject = prayers[moment.format('DD.MM.YYYY')]

    console.log(prayerObject)
    return {
      'fajr': prayerObject.fajr,
      'sunrise': prayerObject.sunrise,
      'dhuhr': prayerObject.dhuhr,
      'asr': prayerObject.asr_hanafi,
      'maghrib': prayerObject.maghrib,
      'isha': prayerObject.isha
    }
  }

  playAdhaan () {
    if (this.state.currentPrayer === 'fajr') {
      this.props.sounds.adhaanFajr.play(success => {
        if (success) {
          console.log('successfully finished playing')
        } else {
          console.log('playback failed due to audio decoding errors')
        }
      })
    } else {
      this.props.sounds.adhaan.play(success => {
        if (success) {
          console.log('successfully finished playing')
        } else {
          console.log('playback failed due to audio decoding errors')
        }
      })
    }
  }

  queryPrayerTime () {
    const { none, fajr, dhuhr, asr, maghrib, isha } = this.props.sounds
    switch (this.state.currentPrayer) {
      case 'fajr':
        fajr.play()
        break
      case 'dhuhr':
        dhuhr.play()
        break
      case 'asr':
        asr.play()
        break
      case 'maghrib':
        maghrib.play()
        break
      case 'isha':
        isha.play()
        break
      default:
        none.play()
    }
  }

  render () {
    return (
      <TouchableWithoutFeedback onPress={this.queryPrayerTime}>
        <View style={styles.container}>
          <Clock time={this.state.currentTime} />
          <Prayer prayerName='FAJR' currentPrayer={this.state.currentPrayer} />
          <Prayer prayerName='DHUHR' currentPrayer={this.state.currentPrayer} />
          <Prayer prayerName='ASR' currentPrayer={this.state.currentPrayer} />
          <Prayer prayerName='MAGHRIB' currentPrayer={this.state.currentPrayer} />
          <Prayer prayerName='ISHA' currentPrayer={this.state.currentPrayer} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const { object } = React.PropTypes

JustPrayClient.propTypes = {
  sounds: object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.board
  }
})
