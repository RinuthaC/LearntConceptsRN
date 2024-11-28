import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, FlatList, Alert } from 'react-native';
import UseStateLearn from './TopicScreens/UseStateLearn'; // Ensure the path is correct
import UseEffectLearn from './TopicScreens/UseEffectLearn';
import UseReducerLearn from './TopicScreens/UseReducerLearn';
import UseCallbackLearn from './TopicScreens/UseCallbackLearn';
import UseEffectWODependency from './TopicScreens/UseEffectWODependency';
import UseRefLearn from './TopicScreens/UseRefLearn';
import RNScreen1 from './ReactNativeScreens/RNScreen1';
import { Provider, Text, Button, Card, TextInput, Switch } from 'react-native-paper';
import Header from './ReactNativeScreens/Header';
import AddItem, { IItem } from './ReactNativeScreens/AddItem';
import Item from './ReactNativeScreens/Item';
import ParentComponent from './ReactNativeScreens/ParentComponent';
import Greeting from './ReactNativeScreens/Greeting';
import EventAsProp from './ReactNativeScreens/EventAsProp';
import RNFormForLoginTS from './ReactNativeScreens/RNFormForLoginTS';

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]); 
  // Event handler function : The EventAsProp component is a reusable button that accepts a title for the label and an onPress event handler function.
  const handleButtonPress = (event: React.MouseEvent | React.TouchEvent) => {
    Alert.alert('Button Pressed', 'You clicked the button!');
    console.log('Event:', event);
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNFormForLoginTS />
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text style={styles.title}>Passing Events in TypeScript</Text>
  //     {/* Passing the event handler as a prop */}
  //     <EventAsProp title="Click Button" onPress={handleButtonPress} />
  //   </SafeAreaView>
  // );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     {/* <ParentComponent /> */}
  //     <Greeting name="John" age={25} />
  //     <Greeting name="Doe" />
  //   </SafeAreaView>
  // );
  // return (
  //   // <ScrollView style={styles.container}>
  //   //   {/* Render the component here*/}
  //   //   {/* <UseRefLearn/>
  //   //   <UseStateLearn/>
  //   //   <UseEffectLearn/>
  //   //   <UseReducerLearn/>
  //   //   <UseCallbackLearn/>
  //   //   <UseReducerLearn/>
  //   //   <UseEffectWODependency/> */}
  //   //   {/* <RNScreen1/> */}
  //   //   <Header title="Shopping List"/>
  //   // </ScrollView>
  //   <SafeAreaView style={styles.container}>
  //     <Header title="Shopping List" />
  //     <ScrollView style={styles.contentWrapper}>
  //       <AddItem
  //         setShoppingList={setShoppingList}
  //         shoppingList={shoppingList}
  //       />
        
  //       {/* <FlatList
  //         data={shoppingList}
  //         keyExtractor={(item, index) => `${item.item}-${index}`}
  //         renderItem={({item}) => (
  //           <Item item={item.item} quantity={item.quantity} />
  //         )}
  //       /> */}

  //       <View >
  //         {shoppingList.map((item, index) => (
  //           <Item key={`${item.item}-${index}`} item={item.item} quantity={item.quantity} />
  //         ))}
  //       </View>
        
  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default App;
