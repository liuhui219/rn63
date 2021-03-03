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
  Pressable,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Lunar} from './currentDate';
import styles from './styles.js';
const width = Dimensions.get('window').width;
const Gdate = (n) => {
  return n < 10 ? '0' + n : '' + n;
};
const getDateStr = (date) => {
  let _year = date.getFullYear();
  let _month = date.getMonth() + 1;
  let _d = Gdate(date.getDate());
  _month = Gdate(_month);
  return _year + _month + _d;
};

const CalendarDate = forwardRef((props, ref) => {

  let layoutHeight = useRef(80).current;
  let arr = [];
  let _year = props.year;
  let _month = props.month;
  let _firstDay = new Date(_year, _month - 1, 1);
  const onLayoutFn = (event) => {
    console.log(event.nativeEvent);
  };

  const animateFn = (prop, num) => {
    Animated.spring(prop, {
      toValue: num,
      useNativeDriver: true,
    }).start();
  };

  const onActivity = useCallback((i, date) => { 
    props.onActivity&&props.onActivity(i, layoutHeight, date);
  }, []);

  const renderDate = useCallback(() => {
    for (var i = 1; i < 43; i++) {
      var _thisDay = new Date(_year, _month - 1, i - _firstDay.getDay());
      var _thisDayStr = getDateStr(_thisDay);
      let Lunars = Lunar.toLunar(
        _thisDayStr.slice(0, 4),
        _thisDayStr.slice(4, 6),
        _thisDay.getDate(),
      );
      let ZHText = Lunars[6] == '初一' ? Lunars[5] : Lunars[6];

      let date = _thisDay.getDate();
      let top = Math.floor((i - 1) / 7) * layoutHeight;
      let left = i % 7 == 0 ? 6 * (width / 7) : ((i % 7) - 1) * (width / 7);
      let key = i;
      if (_thisDayStr == getDateStr(new Date())) {
        arr.push(
          <Pressable
            key={key}
            onPress={() => onActivity(key, date)}
            style={[
              styles.dateList,
              {
                height: layoutHeight,
                top: top,
                left: left,
              },
            ]}>
            <View style={[styles.dateListBox, {}]}>
              <Text style={[styles.dateListText, {color: '#fff'}]}>{date}</Text>
              <Text style={[styles.dateListNlText, {color: '#fff'}]}>
                {ZHText}
              </Text>
            </View>
          </Pressable>,
        );
      } else if (
        _thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)
      ) {
        arr.push(
          <Pressable
            key={key}
            onPress={() => onActivity(key, date)}
            style={[
              styles.dateList,
              {height: layoutHeight, top: top, left: left},
            ]}>
            <View key={key} style={styles.dateListBox}>
              <Text style={styles.dateListText}>{date}</Text>
              <Text style={styles.dateListNlText}>{ZHText}</Text>
            </View>
          </Pressable>,
        );
      } else {
        arr.push(
          <Pressable
            key={key}
            onPress={() => onActivity(key, date)}
            style={[
              styles.dateList,
              {height: layoutHeight, top: top, left: left},
            ]}>
            <View style={styles.dateListBox}>
              <Text style={[styles.dateListText, {color: '#ccc'}]}>{date}</Text>
              <Text style={[styles.dateListNlText, {color: '#ccc'}]}>
                {ZHText}
              </Text>
            </View>
          </Pressable>,
        );
      }
    }
    return arr;
  }, [props]);

  useImperativeHandle(ref, () => {
    return {layoutHeight};
  });
 
  return (
    <View  style={styles.CalendarDate}>
      {renderDate()}
    </View>
  );
});

export default React.memo(CalendarDate);
