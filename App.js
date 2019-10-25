import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  FlatList   
} from 'react-native';

// how to import another file you've made 
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //** for help: click type of component and then view properties

  // useState hook returns a stateful value, and a function to update it
  // In this case, outputText is the text inside useState 
  // outputText is displayed
  // Button title is Change Text
  // onPress - when button is pressed
  // => (syntax) to setOutputText(new text)
  // text can only be outputted between <Text> text <Text> components
  // const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  
  const[courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  // functions handles a press on that button which then adds a goal
  // ... pulls all elements from old array into new array
  // updated our list of goals with old list of goals, also adds a new goal when button is pressed
  const addGoalHandler = goalTitle => {
    //setCourseGoals([...courseGoals, enteredGoal]);

    // this format gives you guaranteed latest snapshot before appling state change

    // courseGoals is now an array of an object where each object has a key property and a value property
    // important for FlatList bc it expects a data source where every object has a key property and then anything you want
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    //<View style={styles.container}>
    // style now expects a javascript object {}
    // <Text>{outputText}</Text>
    // <Button title="Change Text" onPress={() => setOutputText('The text changed!')} />
    // placeholder prop - text that shows before user inputs text

    // React Native default: positions elements above each other
    // flexDirection allows for elements inside a view to be positioned next to each other or above each other (column)
    // {flexDirection: 'row'}
    // justifyContent - used to organize contents along main axis
    // alignItems - used to organize items around the cross axis
    // flex property - applied to items that are inside of a component (view)
    // it distributes available space considering number assigned to flex

    // style - width: '80%' means takes 80% of available width made available by parent component (view)

    // FlatList component is a view that is scrollable
    // Depending on where it's placed, the whole screen can be scrollable etc.
    // FlatList can be inefficient if there is a long list of items
    // It renders elements in advance and can really slow down app

    // Use FlatList component for long lists
    // 2 important properties
      // data={}, renderItem={}
      // pointed to courseGoals because that's data needed to output
      // renderItem takes a function which is called for every item in data to render a list item
      //renderItem={itemData => <GoalItem title={itemData.item.value} />}
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
         renderItem={itemData => <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value}/>}
        />
    </View>
  );
}
 
// recommended to use StyleSheet class for improved performance instead of inline styles
// screen could be any word, just make sure styles points to the same name
// ex. styles.screen
// type of style can be applied as much as you want to any view

// padding is spacing between border and content
// margin is spacing between border and surrounding content
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
  

});
