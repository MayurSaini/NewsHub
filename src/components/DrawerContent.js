import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import styles from './styles';

export function DrawerContent(props) {

  const headerView = () => {
    return (
      <View style={styles.headerStyle} >
        <Text style={styles.newsHub}>News Hub</Text>
      </View>
    );
  };

  const goToScreen = (screen) => {
    console.log("1111111", props.navigation)

    props.navigation.navigate(screen)
    // console.log('000000000', props.navigation.navigate(screen))
  }

  return (
    <DrawerContentScrollView
    contentContainerStyle={{justifyContent: 'space-between', flex: 1,}}
      {...props}
      // style={
      //   Platform.OS === 'ios'
      //     ? { marginTop: -insets.top, backgroundColor: 'white' }
      //     : null
      // }
      showsVerticalScrollIndicator={false}>
      
      <View style={styles.drawerContent}>
        {headerView()}
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate("News")}>
          <View style={styles.bottomBorder}>
            <Text style={styles.screenName}>Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => goToScreen('MyBookmarks')}>
          <View style={styles.bottomBorder}>
            <Text style={styles.screenName}>My Bookmarks</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.versionStyle}>Version: xxxxx</Text>
      </View>
      {/* {Platform.OS === 'ios' && (
        <View style={{ backgroundColor: Colors.white, height: '100%' }} />
      )} */}
    </DrawerContentScrollView>
  );
}
