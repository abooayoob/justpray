import React from 'react'
import { AppRegistry } from 'react-native'
import { AUDIO } from './assets/audio.js'
import { default as JustPrayClient } from './src/app/JustPrayClient'

const Main = () => <JustPrayClient sounds={AUDIO} />

AppRegistry.registerComponent('JustPrayClient', () => Main)
