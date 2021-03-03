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
import Calendar from './Calendar';
import styles from './styles.js';

const wekList = ['日', '一', '二', '三', '四', '五', '六'];
const Week = memo(() => {
  return (
    <View style={styles.week}>
      {wekList.map((item, i) => {
        return (
          <Text key={i} style={styles.weekText}>
            {item}
          </Text>
        );
      })}
    </View>
  );
});

const Gdate = (n) => {
  return n < 10 ? '0' + n : '' + n;
};

const Index = () => {
  const Calendars = useRef()
  const [date, setDate] = useState(new Date());  
  let _year = useRef(new Date().getFullYear()).current;
  let _month = useRef(new Date().getMonth() + 1).current;
  
  
  useEffect(() => {  
   
    
  });
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.header_time}>
          <Text style={styles.dateTime}>{date.getFullYear()}年{Gdate(date.getMonth() + 1)}月</Text>
          <Text style={styles.dateWeek}>周四</Text>
        </View>
      </View>
      <Week />
      <Calendar ref={Calendars} setDate={setDate} year={_year} month={_month} />
    </View>
  );
};

export default React.memo(Index);
