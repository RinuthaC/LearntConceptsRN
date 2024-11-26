import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, TextInput, Switch, useTheme, Provider as PaperProvider, DefaultTheme, Provider } from 'react-native-paper';
import Image from '../assets/image.jpg';
import Image2 from '../assets/image2.jpg';

// Custom Button Component for Reusability
const CustomButton = ({ title, onPress }) => {
  const theme = useTheme();
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[styles.customButton, { backgroundColor: theme.colors.primary }]}
    >
      {title}
    </Button>
  );
};

const RNScreen1 = () => {
  const [inputText, setInputText] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Logging input changes (effect hook example)
  useEffect(() => {
    console.log(`Input text updated: ${inputText}`);
  }, [inputText]);

  return (
    // <PaperProvider>
      <View style={styles.container}>
        {/* Text Component */}
        <Text style={styles.title}>React Native Paper Example</Text>

        {/* Card Component */}
        <Card style={styles.card}>
          <Card.Title title="Card section title 1" subtitle="Subtitlle 1" />
          <Card.Content>
            <Text>ABOVE WE HAVE USED TITLE, SUBTITLE. THIS IS CONTENT SECTION 1.</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => console.log('Learn More pressed')}>Learn More</Button>
          </Card.Actions>
          <Card.Cover source={Image} style={styles.coverImage} />  
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Card section title 2" subtitle="Subtitlle 2" />
          <Card.Content>
            <Text>ABOVE WE HAVE USED TITLE, SUBTITLE. THIS IS CONTENT SECTION 2.</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => console.log('Learn More pressed')}>Learn More</Button>
          </Card.Actions>
          <Card.Cover source={Image2} style={styles.coverImage} />
        </Card>

        {/* TextInput Component */}
        <TextInput
          label="Type Something"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={styles.input}
        />

        {/* Custom Button Component */}
        <CustomButton title="Submit" onPress={() => console.log(`Input Submitted: ${inputText}`)} />

        {/* Switch for toggling */}
        <View style={styles.switchContainer}>
          <Text>Enable Option</Text>
          <Switch value={isSwitchOn} onValueChange={handleSwitchToggle} />
        </View>

        {/* Theme Toggle */}
        <View style={styles.themeSwitchContainer}>
          <Text>Dark Theme</Text>
          <Switch value={isDarkTheme} onValueChange={handleThemeToggle} />
        </View>
      </View>
    // </PaperProvider> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 20,
  },
  customButton: {
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  coverImage: {
    width: '100%', 
    height: 250, 
  },
});

export default RNScreen1;
