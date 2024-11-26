import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseEffectWODependency = () => {
  const [count, setCount] = useState(0);

  // useEffect without dependency array
  useEffect(() => {
    console.log('Component rendered or updated');
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Example of UseEffect Without Dependency</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button
        title="Increment Count"
        onPress={() => setCount((prev) => prev + 1)}
      />
      <View style={styles.spacing} />
      
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
    height: 20, // Adds space between buttons
  },
});

export default UseEffectWODependency;
