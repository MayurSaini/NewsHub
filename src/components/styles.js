import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import Colors from '../styles/Colors';

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor:'white',
    flex: 1,
    marginTop: -4,
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: Colors.skyBlue,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  newsHub: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.blue,
  },
  versionStyle: {
    fontSize: 12,
    fontWeight: '900',
    color: Colors.blue,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  screenName: {
    fontSize: 14,
    fontWeight: '900',
    color: Colors.blue,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 5
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.skyBlue,
    marginHorizontal: 16,
  }
});

export default styles;
