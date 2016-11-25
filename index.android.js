import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { adhaan } from './assets/audio.js'

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
        <Text onPress={this.playAdhaan} style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    )
  }
}

const { object, string } = React.PropTypes

JustPrayClient.propTypes = {
  callToPrayer: object.isRequired,
  test: string
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

const Main = () => <JustPrayClient callToPrayer={adhaan} />

AppRegistry.registerComponent('JustPrayClient', () => Main)
