import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../peddle_logo_v3.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'snow',
    backgroundColor: '#8200f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
