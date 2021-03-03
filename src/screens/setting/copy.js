import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
 
const USE_NATIVE_DRIVER = true

const HEADER_HEIGHT = 50;
const windowHeight = Dimensions.get('window').height;
const SNAP_POINTS_FROM_TOP = [0,300];
 
export class BottomSheet extends Component {
  masterdrawer = React.createRef();
  drawer = React.createRef();
  drawerheader = React.createRef();
  scroll = React.createRef();
  constructor(props) {
    super(props);
     

    this.state = {
      isShow: true, 
    };
   
    this._lastScrollY = new Animated.Value(0);
    this._onRegisterLastScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this._lastScrollY } } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    );

    this._lastScrollY.addListener(({ value }) => {
        console.log('xxxx',value);
      });
	
    
    this._dragY = new Animated.Value(0);
    this._onGestureEvent = Animated.event(
      [{ nativeEvent: { translationY: this._dragY } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    );

    this._reverseLastScrollY = Animated.multiply(
      new Animated.Value(-1),
      this._lastScrollY
    );

    this._translateYOffset = new Animated.Value(0);
    this._translateY = Animated.add(
      this._translateYOffset,
      Animated.add(this._dragY, this._reverseLastScrollY)
    ).interpolate({
      inputRange: [0,500],
      outputRange: [0,500],
      extrapolate: 'clamp',
    }); 
  }
   
  _onHandlerStateChange = ({ nativeEvent }) => { 
    if (nativeEvent.oldState === State.ACTIVE) {
      let lateY = 200
      let { velocityY, translationY } = nativeEvent;
      this._translateYOffset.setValue(translationY);  
      this._dragY.setValue(0); 
      Animated.spring(this._translateYOffset, { 
        tension: 68,
        friction: 12,
        toValue: 0,
        useNativeDriver: USE_NATIVE_DRIVER,
      }).start(); 
    }
  };
  render() {
    return (
       
        <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
          <View>
            <Text>{JSON.stringify(this._dragY)}</Text>
          </View>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor:'#fff',
                transform: [{ translateY: this._translateY }],
              },
            ]}>
            
            <PanGestureHandler
              ref={this.drawer}
              enabled={this.state.isShow}
              simultaneousHandlers={[this.scroll]}
              
              shouldCancelWhenOutside={false}
              onGestureEvent={this._onGestureEvent}
              enableTrackpadTwoFingerGesture
              onHandlerStateChange={this._onHandlerStateChange}>
              <Animated.View style={styles.container}>
                <NativeViewGestureHandler
                  ref={this.scroll}  
                  simultaneousHandlers={this.drawer}  >
                  <Animated.ScrollView 
                    bounces={false} 
                    scrollEnabled={this.state.isShow}
                    onScrollBeginDrag={this._onRegisterLastScroll}
                    scrollEventThrottle={1}>
                       <Text>222222222223</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                       <Text>111111111111</Text>
                  </Animated.ScrollView>
                </NativeViewGestureHandler>
              </Animated.View>
            </PanGestureHandler>
          </Animated.View>
        </View>
      
    );
  }
}

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomSheet />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: 'red',
  },
});
