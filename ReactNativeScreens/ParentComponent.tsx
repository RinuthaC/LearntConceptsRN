import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChildComponent>
        <Text style={styles.text}>Hello from Parent!</Text>
      </ChildComponent>
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
    fontSize: 16,
    color: 'blue',
  },
});

export default ParentComponent;