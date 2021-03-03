/* eslint-disable react-native/no-inline-styles */
import React, {
  Component,
  useState,
  useRef,
  useEffect,
  memo,
  useCallback,
  useContext
} from 'react';
import {
  View,
  ToastAndroid,
  FlatList,
  Dimensions,
  Animated,
  Vibration,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Headline, Button, Caption} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import styles from './styles.js';
import {Context as UserContext} from '@@/contexts/UserContext';
import {Context as LocalContext} from '@@/contexts/LocalizationContext';
const {width} = Dimensions.get('screen');

const data = [
  {
    source: require('../../components/LottieComponents/Animations/welcome.json'),
    madeBy: 'Animation by Abdul Latif from lottiefiles',
    header: 'Welcome to Cosmos',
    body:
      'We are a Young Open Source project made and maintained by the community. Our focus is to provide you a professional social media 😉',
  },
  {
    source: require('../../components/LottieComponents/Animations/groups.json'),
    madeBy: 'Animation by Usama Razzaq from lottiefiles',
    header: 'Its All About Boxes',
    body:
      'Control what you share and where you share. Boxes allows you to group people of similar interests, organizations and niche 📦',
  },
  {
    source: require('../../components/LottieComponents/Animations/box.json'),
    madeBy: 'Animation by John Romeio Icons 8 from lottiefiles',
    header: 'Here is a Box',
    body:
      "You can add your friends by their emails and have full control on your box. Each box is a separate private space for it's members to share content with each other",
  },
  {
    source: require('../../components/LottieComponents/Animations/clock.json'),
    madeBy: 'Animation by Auttapon Nakharaj Icons 8 from lottiefiles',
    header: 'Clean slate each day',
    body:
      'Each post has a count down clock set for 24 hours before it is removed. Hence we aim to give you a clean slate each day to work with. So why wait, Come Join Us!',
  },
];

const continueFn = (navigation,dispatch,dispatch18n) => { 
  dispatch({type:'welcome'})
  dispatch18n({type:'language',locale:'zh'}) 
  navigation.replace('Home')
};

const renderScreen = (item, index, myRef,navigation,dispatch,i18n,dispatch18n) => {
  
  return (
    <View style={styles.innerView}>
      <View style={{width: width, height: width / 1.5}}>
        <LottieView source={item.source} autoPlay />
      </View>
      <Caption style={styles.fontSmall}>{item.madeBy}</Caption>
      <Headline style={styles.fontLarge}>{item.header}</Headline>
      <Text style={[{textAlign: 'justify', marginTop: 10}, styles.fontMedium]}>
        {item.body}
      </Text>
      <Button
        mode="contained"
        labelStyle={styles.fontSmall}
        style={styles.googleBtn}
        onPress={
          index === data.length - 1
            ? () => continueFn(navigation,dispatch,dispatch18n)
            : () =>
                myRef.current.scrollToIndex({
                  animated: true,
                  index: index + 1,
                })
        }>
        {index === data.length - 1 ? 'Continue' : i18n.t("WELCOME")}
      </Button>
    </View>
  );
};

const DotContainer = (props) => {
  const {myRef, index} = props;
  return (
    <View style={styles.dotContainer}>
      {data.map((_, i) => {
        return (
          <TouchableWithoutFeedback
            key={i}
            onPress={() =>
              myRef.current.scrollToIndex({animated: true, index: i})
            }>
            <Animated.View
              style={{
                opacity: index.interpolate({
                  inputRange: [i - 1, i, i + 1],
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: 'clamp',
                }),
                height: 6,
                width: 6,
                backgroundColor: '#fff',
                margin: 6,
                borderRadius: 3,
              }}
            />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const Index = ({ navigation }) => { 
  const flatList = useRef();
  const [index, setIndex] = useState(new Animated.Value(0));
  const { dispatch } = useContext(UserContext); 
  const {i18n} = useContext(LocalContext).state  
  const dispatch18n = useContext(LocalContext).dispatch 
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.landingContainer}>
      <DotContainer myRef={flatList} index={index} />
      <FlatList
        ref={flatList}
        style={{}}
        contentContainerStyle={{
          alignItems: 'stretch',
        }}
        data={data}
        keyExtractor={(item) => item.header}
        horizontal
        pagingEnabled
        scrollEnabled
        disableIntervalMomentum
        snapToAlignment="center"
        scrollEventThrottle={1}
        snapToInterval={width}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => renderScreen(item, index, flatList,navigation,dispatch,i18n,dispatch18n)}
        onScroll={({nativeEvent}) => {
          setIndex(new Animated.Value(nativeEvent.contentOffset.x / width));
        }}
      />
    </View>
  );
};

export default Index;
