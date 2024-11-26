import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
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

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]); 
  return (
    // <ScrollView style={styles.container}>
    //   {/* Render the component here*/}
    //   {/* <UseRefLearn/>
    //   <UseStateLearn/>
    //   <UseEffectLearn/>
    //   <UseReducerLearn/>
    //   <UseCallbackLearn/>
    //   <UseReducerLearn/>
    //   <UseEffectWODependency/> */}
    //   {/* <RNScreen1/> */}
    //   <Header title="Shopping List"/>
    // </ScrollView>
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});

export default App;
