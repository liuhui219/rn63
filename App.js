import {
  View,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  Animated,
  ScrollView,
  FlatList,
  Image,
  useColorScheme,
} from 'react-native';
import React, {
  useCallback,
  memo,
  useRef,
  useMemo,
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import SplashScreen from 'react-native-splash-screen';
import {
  NavigationContainer,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
  Headline,
  Caption,
} from 'react-native-paper';
import IconFont from '@@/iconfont';
import WelcomePage from '@@/screens/welcomePage';
import InitPage from '@@/screens/initPage';
import Setting from '@@/screens/setting';
import Calendar from '@@/screens/Calendar';
import {
  Context as UserContext,
  Provider as UserProvider,
} from '@@/contexts/UserContext';
import {Context as LocalContext} from '@@/contexts/LocalizationContext';
import {storage} from '@@/utils/Storage';
const ScrollExp = () => {
  const Settings = useRef();
  const [onRefreshing, setRefreshing] = useState(false);
  const [conut, setConut] = useState(false);
  let scrollY = useRef(1).current;
  let imageOpacity = useRef(0).current;
  let Top = useRef(0).current;
  if (conut) {
    console.log(Settings.current.scrollEndY);
    scrollY = Settings.current.translateY.interpolate({
      inputRange: [0, 120],
      outputRange: [1,2],
      extrapolate: 'clamp',
    })
    imageOpacity = Settings.current.scrollEndY.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
    });

    Top = Settings.current.scrollEndY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, -100],
    });
  }

  const onRefreshFn = () => {
    setRefreshing(true);
    const timer = setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const backGroundPage = useCallback(() => {
    return (
      <View>
        <Text>11111</Text>
      </View>
    );
  }, []);

  useLayoutEffect(() => {
    setConut(true);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Animated.Image
          resizeMode='cover'
          style={{height:200,position:'relative',opacity: imageOpacity,transform: [{ scale: scrollY },{translateY:Top}]}}
          source={{
            uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2943523528,3005554246&fm=26&gp=0.jpg',
          }}
        />
      <Setting ref={Settings} type={ScrollView}>
        

        <View style={{marginTop:180,backgroundColor:'#fff'}}>
          <Text>22222222</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
          <Text>1111111111111</Text>
        </View>
      </Setting>
    </View>
  );
};
const Feed = ({navigation}) => {
  const bottomSheetRef = useRef(BottomSheet);
  const snapPoints = useMemo(() => [0, '30%', '75%'], []);
  const {state, dispatch} = useContext(LocalContext);
  const {i18n} = state;
  const getSnap = () => {
    bottomSheetRef.current?.snapTo(1);
  };
  const getLanguage = () => {
    dispatch({type: 'language', locale: 'en'});
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('ScrollExp')}
        />
        <Button
          title="Go to Calendar"
          onPress={() => navigation.navigate('Calendar')}
        />
        <Button title="getLanguage" onPress={getLanguage} />
        <Button title="Go" onPress={getSnap} />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        animateOnMount={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            backgroundColor: '#fafafa',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{i18n.t('WELCOME')}</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <WelcomePage />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const MyTabs = memo(() => {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      sceneContainerStyle={{backgroundColor: DefaultTheme.colors.background}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? '001-cangku' : '003-cuxiao';
          } else if (route.name === 'Notifications') {
            iconName = focused ? '015-yunshu' : '014-wuliu';
          } else if (route.name === 'Profile') {
            iconName = focused ? '006-kuaidiyuan' : '016-kuaidixiaoge';
          }

          // You can return any component that you like here!
          return <IconFont name={iconName} size={26} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12, paddingBottom: 2},
        style: {paddingTop: 5},
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: '我的',
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '设置',
        }}
      /> */}
    </Tab.Navigator>
  );
});
const Stack = createStackNavigator();

const Mains = memo(() => {
  const {state, dispatch} = useContext(UserContext);
  let profileData;
  const onReloadNeeded = useCallback(async () => {
    try {
      profileData = await storage.load({key: 'welcomeState'});
    } catch (err) {}
  });
  useLayoutEffect(() => {
    onReloadNeeded(); 
  }, []);
  useEffect(() => {});
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#000'} barStyle="light-content" />
      <Stack.Navigator
        // initialRouteName={state.welcomeState ? 'Home': 'Welcome'}
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          // cardStyle: {backgroundColor: '#000'},
          cardOverlayEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        })}>
        <Stack.Screen
          name="InitPage"
          options={{...TransitionPresets.ScaleFromCenterAndroid}}
          component={InitPage}
        />

        <Stack.Screen
          name="Home"
          options={{...TransitionPresets.ScaleFromCenterAndroid}}
          component={MyTabs}
        />

        <Stack.Screen
          name="Welcome"
          options={{...TransitionPresets.ScaleFromCenterAndroid}}
          component={WelcomePage}
        />

        <Stack.Screen name="ScrollExp" component={ScrollExp} options={{}} />
        <Stack.Screen name="Calendar" component={Calendar} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default function App() {
  return (
    <UserProvider>
      <Mains />
    </UserProvider>
  );
}
