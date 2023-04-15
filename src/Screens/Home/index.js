import React, { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
} from 'react-native';

import { saveBookmark } from '../../state/api';
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from './Newscard';
import { getNewsList, saveBookmarkList } from '../../state/actions';



const Home = (props) => {
  const dispatch = useDispatch();
  const newsList = useSelector(
    (state) => state.localReducer.newsList,
  );
  const bookedList = useSelector(
    (state) => state.appReducer.bookMarkedNews,
  );
  useEffect(() => {
    saveBookmark().then((res) => {
      if (res && res.articles && res.articles.length>0) {
        dispatch(getNewsList(res.articles))
      }
    }).catch((err) => console.log("this is the error", err))
  }, [])

  const readLater = (item, isAdded) => {
    if (isAdded) {
      const index = bookedList.indexOf(item);
    if (index > -1) {
      bookedList.splice(index, 1);
    }
    dispatch(saveBookmarkList([...bookedList]))
    } else {
      dispatch(saveBookmarkList([item, ...bookedList]))
    }
  }
  const loadNewsCard = (item, index) => {
    return (
      <NewsCard 
        item={item} 
        index={index} 
        navigation={props.navigation}
        readLater={readLater}
        bookedList={bookedList}
        />
    )
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={newsList}
        renderItem={({item, index}) => loadNewsCard(item, index)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={Platform.OS === 'android' && true}
        maxToRenderPerBatch={Platform.OS === 'android' ? 25 : 51}
        initialNumToRender={Platform.OS === 'android' ? 3 : 7}
        windowSize={Platform.OS === 'android' ? 11 : 21}
      />
    </SafeAreaView>
  );
};

export default Home