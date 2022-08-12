import React from 'react';
import { StyleSheet,View ,Text, Image, ScrollView ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InnerProductDetails = ( props) => {
  return (
    <ScrollView
    style={ props.style}
        showsHorizontalScrollIndicator={false}
     horizontal={true}>
      <Card   Request={require('@assets/room1.jpg')}  Name={"Living Room"}  Price={"₹10,000"}/>
      <Card   Request={require('@assets/room2.jpg')}  Name={"Dining"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/room3.jpg')}  Name={"Bedroom"} Price={"₹10,000"}/> 
      <Card   Request={require('@assets/room4.jpg')}  Name={"Study Room"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/ROOM5.jpg')}  Name={"Kids Room"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/room6.jpg')}  Name={"Storage"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/room1.jpg')}  Name={"Living Room"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/room2.jpg')}  Name={"Dining"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/room3.jpg')}  Name={"Bedroom"} Price={"₹10,000"}/> 
      <Card   Request={require('@assets/room4.jpg')}  Name={"Study Room"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/ROOM5.jpg')}  Name={"Kids Room"} Price={"₹10,000"}/>
      <Card   Request={require('@assets/room6.jpg')}  Name={"Storage"} Price={"₹10,000"}/>
    </ScrollView>

  );
}
const Card = ({Detail,Request,Name,Price}) => {
  return(
  <View style={styles.MainContainer}>
    <TouchableOpacity>
    <CardView
     cardElevation={1}
     // cardMaxElevation={10}
      cornerRadius={5}
      style={styles.cardViewStyle}>
      <Image style={{ width: 225, height: 150}} source={Request} />
      <Text style={styles.cardView_InsideText}>{Name}</Text>
      <Text style={styles.cardView_InsideText}>{Price}</Text>

    </CardView>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
 
  cardView_InsideText:{
     
    fontSize: 14, 
    color: '#333333', 
   textAlign: 'center',
    marginTop:5 ,
    marginLeft:5
      
 
  },
  cardViewStyle:{
 
  //  width: 200,
   // height: 180,
    marginLeft: 10,
   // marginRight:11,
    marginTop: 5,
    marginBottom:5,
    height: hp('26%'), // 30% of height device screen
    width: wp('55%'), // 100% of width device screen
    //resizeMode: 'stretch',
    //margin: hp(1),
 
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"column",
  },
  text: {
    fontSize: 42,
  },
});

export default InnerProductDetails;