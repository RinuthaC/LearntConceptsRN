import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
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

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]); 
  return (
    <SafeAreaView style={styles.container}>
      <ParentComponent />
    </SafeAreaView>
  );
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
  scrollViewContent: {
    
  },
});

export default App;
