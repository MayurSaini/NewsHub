import { StyleSheet } from 'react-native';
import Colors from '../../../styles/Colors';
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    imgstyle: {
        height: 150,
        width: '101%',
        borderRadius: 16,
      },
      titleText: {
        fontSize: 16,
        fontWeight: '800',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 5,
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center'
      },
      card: {
          alignItems: 'center', 
          marginHorizontal: 16, 
          borderRadius: 16, 
          borderLeftWidth: 1, 
          borderRightWidth: 1, 
          borderBottomWidth: 1, 
          borderColor: 'grey',
        },
    separator: {
        width: '100%', 
        borderBottomWidth: 0.5, 
        borderBottomColor: 'grey', 
        marginVertical: 25
    },
    read: {
        // position: 'absolute',
        fontSize: 16,
        fontWeight: '800',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 5,
        color: 'black',
    },
    readbg: {
        position: 'absolute',
        left: -2,
        backgroundColor: 'rgba(100,150,50,0.5)',
        alignSelf: 'flex-start',
        borderTopLeftRadius: 16,
        // opacity: 0.3
    },
    add: {
        fontSize: 16,
        fontWeight: '800',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        // paddingTop: 5,
        color: 'black',
        // alignSelf: 'center',
        // textAlign: 'center'
    },
    bookToggle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
  });

  export default styles;