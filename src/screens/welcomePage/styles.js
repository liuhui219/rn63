import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  landingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fff',
  },
  fontSmall: {
    fontSize: width * 0.03,
  },
  fontMedium: {
    fontSize: width * 0.04,
    lineHeight: width * 0.048,
  },
  fontLarge: {
    fontSize: width * 0.06,
  },
  fontExtraLarge: {
    fontSize: width * 0.08,
  },
  dotContainer: {
    position: 'absolute',
    zIndex: 100,
    top: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    backgroundColor: 'black',
    width,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    height: height / 3,
    resizeMode: 'center',
    marginVertical: 20,
  },
  googleBtn: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
