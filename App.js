import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button
} from 'react-native';

import logo from './images/logo2.png'

export default class App extends React.Component {
  render() {
    return (
      < ImageBackground
        style={styles.container}>

        <View style={styles.top}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View>
          <Button //Adding buttons to home menu
            title = "Event Calendar" id = "cal" //onclick =
            //<script src="../calendar.js">
            //</script>
          />
          <Button
            title = "Statistics"
          />
          <Button
            title = "Profile"
          />
          <Button
            title = "Log Out"
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
    backgroundColor: '#1167b1',
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
