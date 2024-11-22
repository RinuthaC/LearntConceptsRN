import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseEffectLearn = () => {
  const [counter, setCounter] = useState(0);

  // useEffect to update the title based on 'counter' value
  useEffect(() => {
    const title = `Counter Value: ${counter}`;
    console.log('Updating title:', title);
    
    return () => {
      console.log('Cleanup when counter changes or component unmounts');
    };
  }, [counter]);

  return (
    <View style={styles.container}>
        <Text>UseEffect Concept</Text>
        <View style={styles.spacing} />
      <Text>Counter: {counter}</Text>
      <View style={styles.spacing} />
      <Button title="Increment Counter" onPress={() => setCounter(counter + 1)} />
      <View style={styles.spacing} />
      <Button title="Reset Counter" onPress={() => setCounter(0)} />
      <View style={styles.spacing} />
        <Button title="Decrement Counter" onPress={() => setCounter(counter - 1)} />
        <View style={styles.spacing} />   
        <Button title="Double Counter" onPress={() => setCounter(counter * 2)} />
        <View style={styles.spacing} />
        <Button title='Next Screen'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  spacing: {
    height: 20, // Adds space between buttons
  },
});

export default UseEffectLearn;
