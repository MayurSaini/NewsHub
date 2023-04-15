import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';


const NewsCard = (props) => {
  const item = props.item;
  const index = props.index;
  const readLater = props.readLater;
  const bookedList = props.bookedList;
  const isAdded = bookedList && bookedList.length > 0 ? bookedList.includes(item) : false;
  return (
    <View>
        <TouchableOpacity onPress={() => readLater(item, isAdded)}>
            <View style={[styles.bookToggle, index === 0 && {marginTop: 25}]}>
                <Text style={styles.add}>{isAdded ? "Remove" : "Bookmark now"}</Text>
                {!isAdded ? (
                <View style={{height: 20, width: 20, borderWidth: 2, borderRadius: 10, borderColor: 'green', marginBottom: 10,}}/>
                ) : (
                    <View style={{height: 20, width: 20, borderRadius: 10, backgroundColor: 'green', marginBottom: 10,}}/>
                )}
            </View>
        </TouchableOpacity>
        <View style={styles.card}>
            <FastImage
            source={{
                uri: item.urlToImage,
            }}
            style={styles.imgstyle}
            resizeMode={'cover'}
            />
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate("NewsDetail", {item: item})}>
                <View style={styles.readbg}>
                    <Text style={styles.read}>Tap to Read</Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={styles.separator}/>
    </View>
  );
};

export default NewsCard