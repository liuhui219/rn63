import React, {
  Component,
  useState,
  useRef,
  forwardRef,
  useEffect,
  memo,
  useMemo,
  useCallback,
  useImperativeHandle,
  useContext,
} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import styles from './styles.js';
const USE_NATIVE_DRIVER = true;

const ScrollIndex = memo(
  React.forwardRef((props, ref) => {
    const AnimatedScrollView = Animated.createAnimatedComponent(
      props.type || ScrollView,
    );
    return (
      <NativeViewGestureHandler ref={ref} simultaneousHandlers={[ref]}>
        <AnimatedScrollView
          {...props}
          bounces={false}
          scrollEnabled={props.scrollEnabled}
          scrollEventThrottle={1}
          onScroll={props.onScrollEndDrag}
          onScrollBeginDrag={props.onRegisterLastScroll}>
          {props.children}
        </AnimatedScrollView>
      </NativeViewGestureHandler>
    );
  }),
);

const Index = forwardRef((props, ref) => {
  let inputRange = (props.snapPoints && props.snapPoints.inputRange) || [
    0,
    200,
  ];
  let outputRange = (props.snapPoints && props.snapPoints.outputRange) || [
    0,
    120,
  ];
  let refreshHeight = props.refreshHeight || 60;
  let multipleHeight = (inputRange[1] / outputRange[1]) * refreshHeight;
  let pulldownText = props.pulldownText || '下拉刷新';
  let refreshLoading = props.refreshLoading || '刷新中';
  let pulldownRefreshText = props.pulldownRefreshText || '释放更新';
  let pullRefresh = props.pullRefresh || false;

  const drawer = useRef();
  const scroll = useRef();
  const [refreshText, setRefreshText] = useState(pulldownText);
  const [enabled, setEnabled] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  let pan = useRef(new Animated.Value(0)).current;
  let scrollY = useRef(new Animated.Value(0)).current;
  let scrollEndY = useRef(new Animated.Value(0)).current;
  let translateYOffset = useRef(new Animated.Value(0)).current;
  let setFreshNum = useRef(0).current;
  let translateY = useRef(0).current;

  const onGestureEvent = Animated.event([{nativeEvent: {translationY: pan}}], {
    useNativeDriver: USE_NATIVE_DRIVER,
  });

  const onScrollEndDrag = useCallback(
    (() => {
      return Animated.event([{nativeEvent: {contentOffset: {y: scrollEndY}}}], {
        useNativeDriver: USE_NATIVE_DRIVER,
      });
    })(),
    [],
  );

  const onRegisterLastScroll = useCallback(
    (() => {
      return Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: USE_NATIVE_DRIVER,
      });
    })(),
    [],
  );

  pan.addListener(({value}) => {
    if (JSON.stringify(value) > 0 && JSON.stringify(scrollEndY) == 0) {
      setEnabled(false);
    }

    if (
      JSON.stringify(setFreshNum) > multipleHeight &&
      JSON.stringify(value) > 1 &&
      pullRefresh
    ) {
      setRefreshText(pulldownRefreshText);
    }
    if (
      JSON.stringify(setFreshNum) < multipleHeight &&
      JSON.stringify(value) > 1 &&
      pullRefresh
    ) {
      setRefreshText(pulldownText);
    }
  });

  scrollEndY.addListener(({value}) => {
    if (JSON.stringify(value) <= 0) {
      setScrollEnabled(true);
    } else {
      setScrollEnabled(false);
    }
  });

  translateYOffset.addListener(({value}) => {
    if (JSON.stringify(value) < 1) {
      setEnabled(true);
    }
  });

  setFreshNum = Animated.add(
    translateYOffset,
    Animated.add(pan, Animated.multiply(new Animated.Value(-1), scrollY)),
  );

  translateY = setFreshNum.interpolate({
    inputRange: inputRange,
    outputRange: outputRange,
    extrapolate: 'clamp',
  });

  const onHandlerStateChange = ({nativeEvent}) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let {velocityY, translationY} = nativeEvent;
      let setFreshNums = JSON.stringify(setFreshNum) - 0;
      pan.setValue(0);
      translateYOffset.setValue(setFreshNums);
      if (pullRefresh) {
        if (JSON.stringify(setFreshNum) >= multipleHeight) {
          setRefreshText(refreshLoading);
          onAnimate(multipleHeight);
        } else {
          onAnimate(0);
        }
      } else {
        onAnimate(0);
      }
    }
  };

  const onAnimate = useCallback((num) => {
    Animated.spring(translateYOffset, {
      tension: 200,
      friction: 20,
      toValue: num,
      useNativeDriver: USE_NATIVE_DRIVER,
    }).start(() => {
      if (num == 0) {
        translateYOffset.setValue(0);
        if (pullRefresh) {
          setRefreshText(pulldownText);
        }
      } else {
        if (props.onRefreshFn) {
          props.onRefreshFn();
        }
        translateYOffset.setValue(num);
      }
    });
  });

  useImperativeHandle(ref, () => {
    return {translateY, scrollEndY};
  });

  useEffect(() => {
    if (!props.onRefreshing && props.pullRefresh) {
      onAnimate(0);
    }
  }, [props]);

  return (
    <View style={{...StyleSheet.absoluteFillObject}} pointerEvents="box-none">
      <PanGestureHandler
        ref={drawer}
        simultaneousHandlers={scroll}
        enabled={scrollEnabled}
        shouldCancelWhenOutside={false}
        enableTrackpadTwoFingerGesture
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}>
        <Animated.View style={{...StyleSheet.absoluteFillObject}}>
          {props.backGroundPage && props.backGroundPage()}
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: 'transparent',
                transform: [{translateY: translateY}],
              },
            ]}>
            {pullRefresh ? (
              <View
                style={{
                  height: 50,
                  width: Dimensions.get('window').width,
                  position: 'absolute',
                  top: -50,
                }}>
                <View
                  style={{
                    flex: 1,
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{refreshText}</Text>
                </View>
              </View>
            ) : null}
            <ScrollIndex
              ref={scroll}
              {...props}
              scrollEnabled={enabled}
              onScrollEndDrag={onScrollEndDrag}
              onRegisterLastScroll={onRegisterLastScroll}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
});

export default React.memo(Index);
