import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ChildProps {
  children: ReactNode; // ReactNode type is used for components or elements passed as children
}

const ChildComponent: React.FC<ChildProps> = ({ children }) => {
  return <View style={styles.childContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  childContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default ChildComponent;