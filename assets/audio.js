import { default as Sound } from 'react-native-sound'

export const adhaan = new Sound('abdul_basit_adhaan.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})
