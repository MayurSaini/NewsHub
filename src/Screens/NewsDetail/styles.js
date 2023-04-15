import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
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
      desc: {
        fontSize: 16,
        fontWeight: '800',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 5,
        color: 'grey',
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 21,
        letterSpacing: 1,
        paddingVertical: 10,
      },
      descView: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 16,
        marginHorizontal: 20,
        marginTop: 25,

      },
      descHeading: {
        fontSize: 20,
        fontWeight: '900',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 5,
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 21,
        paddingTop: 20,
        textDecorationLine: 'underline',
      }
  });

  export default styles;