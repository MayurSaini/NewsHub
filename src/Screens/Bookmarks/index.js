import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveBookmarkList } from '../../state/actions';
import NewsCard from '../Home/Newscard';

import styles from './styles';


const MyBookmarks = (props) => {
  const dispatch = useDispatch();
  const bookedList = useSelector(
    (state) => state.appReducer.bookMarkedNews,
  );

  const removeFromBook = (item) => {
    const index = bookedList.indexOf(item);
    if (index > -1) {
      bookedList.splice(index, 1);
    }
    dispatch(saveBookmarkList([...bookedList]))
  }

  const loadNewsCard = (item, index) => {
    return (
      <NewsCard 
        item={item} 
        index={index} 
        navigation={props.navigation}
        readLater={removeFromBook}
        bookedList={bookedList}
        />
    )
  }

  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <Text style={styles.title}>Bookmarked News</Text>
      {bookedList && bookedList.length > 0 ? (
      <FlatList
        data={[...bookedList]}
        renderItem={({item, index}) => loadNewsCard(item, index)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={Platform.OS === 'android' && true}
        maxToRenderPerBatch={Platform.OS === 'android' ? 25 : 51}
        initialNumToRender={Platform.OS === 'android' ? 3 : 7}
        windowSize={Platform.OS === 'android' ? 11 : 21}
      />
      ) : (
        <View style={{height: '80%', justifyContent: 'center', alignItems: 'center'}}>
          <Text>You don't have any bookmark to show. Please add.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyBookmarks