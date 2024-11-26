import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseStateLearn = () => {
  // Using useState hook: initial value is 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Example of UseState</Text>
      <Text style={styles.text}>Count: {count}</Text>

      {/* Increment Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => setCount(count + 1)} // Update state
        />
      </View>

      {/* Decrement Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Decrement"
          onPress={() => setCount(count - 1)} // Update state
          color="red"
        />
      </View>

      {/* Reset Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Reset"
          onPress={() => setCount(0)} // Reset state
          color="gray"
        />
      </View>

      <View style={styles.buttonContainer}>
        {/* <Button
          title="Next Screen"
          onPress={() => setCount(0)} // Reset state
          color="gray"
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, 
    width: 150,         
  },
  spacing: {
    height: 20, // Adds space between buttons
  },
});

export default UseStateLearn;
