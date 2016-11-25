import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export const Prayer = (props) => (
  <View style={styles.container}>
    <Text>
      {props.prayerName}
    </Text>
  </View>
)

const { string } = React.PropTypes

Prayer.propTypes = {
  prayerName: string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
