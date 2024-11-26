import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import UseStateLearn from './TopicScreens/UseStateLearn'; // Ensure the path is correct
import UseEffectLearn from './TopicScreens/UseEffectLearn';
import UseReducerLearn from './TopicScreens/UseReducerLearn';
import UseCallbackLearn from './TopicScreens/UseCallbackLearn';
import UseEffectWODependency from './TopicScreens/UseEffectWODependency';
import UseRefLearn from './TopicScreens/UseRefLearn';
import RNScreen1 from './ReactNativeScreens/RNScreen1';
import { Provider, Text, Button, Card, TextInput, Switch } from 'react-native-paper';


const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Render the component here*/}
      {/* <UseRefLearn/>
      <UseStateLearn/>
      <UseEffectLearn/>
      <UseReducerLearn/>
      <UseCallbackLearn/>
      <UseReducerLearn/>
      <UseEffectWODependency/> */}
      <RNScreen1/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    // alignItems: 'center',    
    backgroundColor: '#f0f0f0', 
  },
});

export default App;
