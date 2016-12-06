import { default as Sound } from 'react-native-sound'

const adhaan = new Sound('abdul_basit_adhaan_short.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

const adhaanFajr = new Sound('abdul_basit_adhaan_fajr.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

const fajr = new Sound('fajr.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

const dhuhr = new Sound('dhuhr.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

const asr = new Sound('asr.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

const maghrib = new Sound('maghrib.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

const isha = new Sound('isha.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

const none = new Sound('none.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error)
  } else {
    console.log('duration in seconds: ' + adhaan.getDuration())
  }
})

export const AUDIO = {
  adhaan,
  adhaanFajr,
  none,
  fajr,
  dhuhr,
  asr,
  maghrib,
  isha
}
