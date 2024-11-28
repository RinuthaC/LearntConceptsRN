import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

// Define state types
interface LoginFormState {
  email: string;
  password: string;
  rememberMe: boolean;
}

const RNFormForLoginTS: React.FC = () => {
  // State management with TypeScript
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Handle input changes
  const handleInputChange = (field: keyof LoginFormState, value: string | boolean) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const { email, password, rememberMe } = formState;
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    console.log({ email, password, rememberMe });
    alert('Form submitted successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={formState.email}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
        placeholderTextColor={'black'}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={formState.password}
        onChangeText={(text) => handleInputChange('password', text)}
        placeholderTextColor={'black'}
        secureTextEntry
      />

      {/* Remember Me Switch */}
      <View style={styles.switchContainer}>
        <Text>Remember Me</Text>
        <Switch
          value={formState.rememberMe}
          onValueChange={(value) => handleInputChange('rememberMe', value)}
        />
      </View>

      {/* Submit Button */}
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default RNFormForLoginTS;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

