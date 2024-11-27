import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the props for the Greeting component
interface GreetingProps {
  name: string;
  age?: number; // Optional property
}

// Functional Component
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
      {age !== undefined && <Text style={styles.text}>You are {age} years old.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Greeting;
