import React, { useReducer } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Define action types
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const RESET_FORM = 'RESET_FORM';

// Reducer function
const formReducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case RESET_FORM:
      return { name: '', email: '' };
    default:
      return state;
  }
};

const ProfileForm = () => {
  // initializing useReducer
  const [formState, dispatch] = useReducer(formReducer, { name: '', email: '' });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={formState.name}
        onChangeText={(text) => dispatch({ type: UPDATE_NAME, payload: text })}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={formState.email}
        onChangeText={(text) => dispatch({ type: UPDATE_EMAIL, payload: text })}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Reset"
          onPress={() => dispatch({
              type: RESET_FORM,
              payload: undefined
          })}
        />
      </View>
      <View style={styles.result}>
        <Text>Profile Preview is below :-</Text>
        <Text>Name: {formState.name}</Text>
        <Text>Email: {formState.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
  },
});

export default ProfileForm;
