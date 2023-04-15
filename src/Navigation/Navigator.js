import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from '../components/DrawerContent';
// import {navigationRef} from '../navigation/RootNavigation';
import { MainStackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  const MyTheme = {
    dark: false,
    colors: {
      background: 'white',
      card: 'white',
    },
  };

  const linking = {
    prefixes: ['https://www.otipy.com', 'otipy://'],
    //config,
  };
  console.log('in Navigator-------------');
  return (
    // <NavigationContainer linking={linking} theme={MyTheme}>
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home"
        drawerStyle={{ width: '85%', height: '100%' }}
        defaultStatus={'closed'}
        drawerContent={(props) => <DrawerContent {...props} />}
        >
        <Drawer.Screen name="Home" component={MainStackNavigator} />
        <Drawer.Screen name="BookMarks" component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}