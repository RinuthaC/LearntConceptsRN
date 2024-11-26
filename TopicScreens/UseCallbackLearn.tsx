import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Parent and Child Components using useCallback :

// A Child Component that receives a memoized function as a prop
//React.memo: A higher-order component that prevents unnecessary re-renders by memoizing ChildComponent. 
//It only re-renders when its props (handleClick) change.
const ChildComponent = React.memo(({ handleClick }) => {
  console.log('ChildComponent rendered');
  return (
    <View style={styles.childContainer}>
      <Button title="Click Me" onPress={handleClick} />
    </View>
  );
});

const UseCallbackLearn = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Memoized function to pass to the child component
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Example of UseCallback</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <ChildComponent handleClick={handleClick} />
      <View style={styles.spacing} />
      <Button
        title="Toggle Other State"
        onPress={() => setOtherState((prev) => !prev)}
      />
      <View style={styles.spacing} />
      
      <View style={styles.spacing} />
      <Text style={styles.text}>
        Other State: {otherState ? 'True' : 'False'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
  },
  spacing: {
    height: 20,
  },
  childContainer: {
    marginBottom: 10,
  },
});

export default UseCallbackLearn;
