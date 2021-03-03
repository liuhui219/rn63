import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header:{
    flexDirection:'row',
    height:50,
    width,
    alignItems:'center'
  },
  header_time:{
    flex:1,
    flexDirection:'row',
    paddingHorizontal:15,
    alignItems:'center'
  },
  dateTime:{
    fontSize:28,
    color:'#555'
  },
  dateWeek:{
    fontSize:12,
    color:'#777',
    alignSelf:'center',
    paddingLeft:5,
    paddingTop:10
  },
  week: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 30,
  },
  weekText: {
    fontSize: 10,
    color: '#777',
  },
  contentContainer: {
    flex: 1,
  },
  box: {
    width:width,
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative'
  },
  CalendarDate: {
    width,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'relative'
  },
  dateList: {
    width: width / 7, 
    flexDirection: 'row', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    position:'absolute', 
  },
  dateListBox:{ 
    height: width / 7,
    flexDirection:'column', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  dateListText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateListNlText:{
    fontSize: 12,
    color:'#777',
    fontWeight: 'bold',
  },
  bg:{
    position: 'absolute', 
    width: width / 7,
    height: width / 7,
    zIndex: 0,
    left:0,
    top:0,
    borderRadius: width / 14,
  }
});
