import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';


const NewsDetail = (props) => {
    const item = props.route.params && props.route.params.item;
  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
        <View style={[styles.card, {marginTop: 25}]}>
            <FastImage
            source={{
                uri: item.urlToImage,
            }}
            style={styles.imgstyle}
            resizeMode={'cover'}
            />
            <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={styles.descView}>
        <Text style={styles.descHeading}>Description</Text>
            <Text style={styles.desc}>{item?.description}</Text>
        </View>
    </SafeAreaView>
  );
};

export default NewsDetail