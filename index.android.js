import React from 'react'
import { AppRegistry } from 'react-native'
import { adhaan } from './assets/audio.js'
import { default as JustPrayClient } from './src/app/JustPrayClient'

const Main = () => <JustPrayClient callToPrayer={adhaan} />

AppRegistry.registerComponent('JustPrayClient', () => Main)
