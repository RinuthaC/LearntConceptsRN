import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseEffectWithoutDependency = () => {
  const [count, setCount] = useState(0);

  // useEffect without dependency array
  useEffect(() => {
    console.log('Component rendered or updated');
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button
        title="Increment Count"
        onPress={() => setCount((prev) => prev + 1)}
      />
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
});

export default UseEffectWithoutDependency;
