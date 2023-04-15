import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyBookmarks from '../Screens/Bookmarks';
import Home from '../Screens/Home'
import NewsDetail from '../Screens/NewsDetail';
const HEADER_FONT = 13;
const COLORS = ['green', 'white'];
const START = { x: 0.0, y: 1.0 };
const END = { x: 1.0, y: 1.0 };
const screenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  console.log("working")
  return (
    <Stack.Navigator
      // screenOptions={{
      //   // headerStyle: {
      //   //   backgroundColor: 'white',
      //   // },
      //   // headerTitleStyle: {
      //   //   fontSize: HEADER_FONT,
      //   // },
      //   // headerTintColor: 'white',
      //   // headerBackTitle: 'Back',
      //   headerShown: false,
      // }}
      // initialRouteName={'Home'}
      >
      <Stack.Screen
        name="News"
        component={Home}
        options={{
          title: 'Today News',
        }}
      />
      <Stack.Screen
        name="MyBookmarks"
        component={MyBookmarks}
        options={{
          title: 'My Bookmarks',
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          title: 'Description',
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };

