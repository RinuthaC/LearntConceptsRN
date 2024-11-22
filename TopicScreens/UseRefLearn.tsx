import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UseRefLearn = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef} // Attach the ref to the TextInput
        style={styles.input}
        placeholder="Type something..."
      />
      <Button title="Focus Input" onPress={focusInput} />
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
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default UseRefLearn;