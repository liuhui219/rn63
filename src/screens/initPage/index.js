import React, {
    Component,
    useState,
    useRef,
    useEffect,
    useLayoutEffect,
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
  import {storage} from '@@/utils/Storage';
  import {Context as LocalContext} from '@@/contexts/LocalizationContext'; 

 const InitPage = ({navigation}) => { 
    const dispatch18n = useContext(LocalContext).dispatch 
    const onReloadNeeded = useCallback(async () => {
      let profileData;
      let language;
      try { 
        language = await storage.load({key: 'language'});
      } catch (err) {}
      try {  
        profileData = await storage.load({key: 'welcomeState'});
      } catch (err) {}
      if(language){
        dispatch18n({type:'language',locale:language.locale})
      }
      if (profileData) {
        navigation.replace('Home');
      } else {
        navigation.replace('Welcome');
      }
      
    });
    useLayoutEffect(() => {
      onReloadNeeded();
      
    }, []);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}></View>
    );
  };

  export default InitPage;