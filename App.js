import * as React from 'react';
//import { Button, View, Text } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Calendar, CalendarList } from 'react-native-calendars';
import logo from './images/logo2.png'

class LoginScreen extends React.Component {
  render() {
    return (
      < ImageBackground
            style = {styles.container}>
            
            <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Button
              title = "Login"
              onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
            
       </ImageBackground>

    )
  }
}
class HomeScreen extends React.Component {
  render() {
    return (
        < ImageBackground
                style={styles.container}>

                <View style={styles.top}>
                  <Image source={logo} style={styles.logo} />
                </View>

                <View>
                  <Button //Adding buttons to home menu
                    title = "Event Calendar" //onclick =
                    onPress={() => this.props.navigation.navigate('Calendar')}
                  />
                  <Button
                    title = "Statistics"
                  />
                  <Button
                    title = "Profile"
                    onPress={() => this.props.navigation.navigate('Details')}
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

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class CalendarScreen extends React.Component {
    render() {
        return (
            <View>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}

                    //...calendarParams
                    // Initially visible month. Default = Date()
                    
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2019-01-01'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2019-12-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Details: DetailsScreen,
  Calendar: CalendarScreen,
},
{
 headerMode: 'none',
}
);

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
  menuContainer: {
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

});

export default createAppContainer(RootStack);
