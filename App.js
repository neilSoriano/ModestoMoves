import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button
} from 'react-native';

import logo from './images/ModestoMoves.png'

export default class App extends React.Component {
  render() {
    return (
      < ImageBackground
        style={styles.container}>

        <View style={styles.top}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View>
          <Button
            title="Event Calendar"
          />
        </View>

        <View style={styles.menuContainer}>

        </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 150,
    alignItems: 'flex-start'

  },
  menuContatiner: {
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

});
