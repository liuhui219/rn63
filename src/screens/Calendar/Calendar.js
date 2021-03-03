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
import CalendarDate from './CalendarDate';
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
const Calendar = forwardRef((props, ref) => {
  const Scroll = useRef();
  const CalendarDates = useRef();
  let translateY = useRef(new Animated.Value(0)).current;
  let translateX = useRef(new Animated.Value(0)).current;
  const [year, setYear] = useState(props.year);
  const [month, setMonth] = useState(props.month);
  const [months, setMonths] = useState(props.month);
  const [dateDay, setDateDay] = useState(new Date().getDate());
  let variable = useRef(0).current;
  const onScroll = (event) => {
    variable = (event.nativeEvent.contentOffset.x - width) / width;
    if (variable == 1) {
      nextMonth();
    }
    if (variable == -1) {
      prevMonth();
    }
  };
  const scrollFn = () => {
    Scroll.current.scrollTo({y: 0, x: width, animated: false});
  };
  const nextMonth = () => {
    let _firstDay = new Date(year, month, 1);
    props.setDate(_firstDay);
    setMonth((c) => c + 1);
  };
  const prevMonth = () => {
    let _firstDay = new Date(year, month - 2, 1);
    props.setDate(_firstDay);
    setMonth((c) => c - 1);
  };
  const onMomentumScrollEnd = (event) => {
    // let scrollX = event.nativeEvent.contentOffset.x;
    // if (scrollX > width) {
    //   nextMonth();
    // } else if (scrollX < width) {
    //   prevMonth();
    // }
  };

  const animateFn = (prop, num) => {
    Animated.spring(prop, {
      toValue: num,
      useNativeDriver: true,
    }).start();
  };

  const onActivity = useCallback((i, layoutHeight, date) => {
    if (date) {
      setDateDay(date);
    }

    let top = Math.floor((i - 1) / 7) * layoutHeight;
    let left = i % 7 == 0 ? 6 * (width / 7) : ((i % 7) - 1) * (width / 7);
    animateFn(translateY, top);
    animateFn(translateX, left);
  }, []);

  const init = (layoutHeight) => {
    let _firstDay = new Date(year, month - 1, 1);
    for (var i = 1; i < 43; i++) {
      var _thisDay = new Date(year, month - 1, i - _firstDay.getDay());
      var _thisDayStr = getDateStr(_thisDay);

      if (
        _thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6) &&
        dateDay == _thisDay.getDate()
      ) {
        let top = Math.floor((i - 1) / 7) * layoutHeight;
        let left = i % 7 == 0 ? 6 * (width / 7) : ((i % 7) - 1) * (width / 7);
        translateY.setValue(top);
        translateX.setValue(left);
      }
    }
  };

  useEffect(() => {
    setMonths(month);
    scrollFn();
    const timer = setTimeout(() => {
      init(CalendarDates.current.layoutHeight);
    }, 10);
    return () => clearTimeout(timer);
  }, [month]);
  return (
    <View style={styles.contentContainer}>
      <ScrollView
        ref={Scroll}
        contentOffset={{x: width, y: 0}}
        fadingEdgeLength={5}
        horizontal
        removeClippedSubviews
        pagingEnabled
        scrollEnabled
        disableIntervalMomentum
        disableScrollViewPanResponder
        snapToInterval={width}
        snapToAlignment="center"
        scrollEventThrottle={1}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}>
        <View style={styles.box}>
          <CalendarDate year={year} month={months - 1} />
        </View>
        <View style={styles.box}>
          <Animated.View
            style={[
              styles.bg,
              {
                transform: [{translateY: translateY}, {translateX: translateX}],
                backgroundColor: '#1890ff',
              },
            ]}></Animated.View>
          <CalendarDate
            ref={CalendarDates}
            onActivity={onActivity}
            year={year}
            month={month}
          />
        </View>
        <View style={styles.box}>
          <CalendarDate year={year} month={months + 1} />
        </View>
      </ScrollView>
    </View>
  );
});

export default React.memo(Calendar);
