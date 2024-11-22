import React from 'react';
import { View, StyleSheet } from 'react-native';
import UseStateLearn from './TopicScreens/UseStateLearn'; // Ensure the path is correct
import UseEffectLearn from './TopicScreens/UseEffectLearn';
import ProfileForm from './TopicScreens/UseReducerLearn';
import UseCallbackLearn from './TopicScreens/UseCallbackLearn';
import UseEffectWithoutDependency from './TopicScreens/UseEffectWODependency';
import UseRefLearn from './TopicScreens/UseRefLearn';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Render the component here*/}
      <UseRefLearn/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: '#f0f0f0', 
  },
});

export default App;
