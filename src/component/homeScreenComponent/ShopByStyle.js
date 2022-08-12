import React from 'react';
import { StyleSheet,View ,Text, Image, ScrollView ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'

const ShopByStyle = ( props) => {
  return (
    <ScrollView
    style={ props.style}
        showsHorizontalScrollIndicator={false}
     horizontal={true}>
      <Card   Request={require('@assets/room1.jpg')}  Detail={"Living Room"}/>
      <Card   Request={require('@assets/room2.jpg')}  Detail={"Dining"}/>
      <Card   Request={require('@assets/room3.jpg')}  Detail={"Bedroom"}/> 
      <Card   Request={require('@assets/room4.jpg')}  Detail={"Study Room"}/>
      <Card   Request={require('@assets/ROOM5.jpg')}  Detail={"Kids Room"}/>
      <Card   Request={require('@assets/room6.jpg')}  Detail={"Storage"}/>
      <Card   Request={require('@assets/room1.jpg')}  Detail={"Living Room"}/>
      <Card   Request={require('@assets/room2.jpg')}  Detail={"Dining"}/>
      <Card   Request={require('@assets/room3.jpg')}  Detail={"Bedroom"}/> 
      <Card   Request={require('@assets/room4.jpg')}  Detail={"Study Room"}/>
      <Card   Request={require('@assets/ROOM5.jpg')}  Detail={"Kids Room"}/>
      <Card   Request={require('@assets/room6.jpg')}  Detail={"Storage"}/>
    </ScrollView>

  );
}
const Card = ({Detail,Request}) => {
  return(
  <View style={styles.MainContainer}>
    <TouchableOpacity>
    <CardView
     cardElevation={5}
      cardMaxElevation={10}
      cornerRadius={5}
      style={styles.cardViewStyle}>
      <Image style={{ width: 200, height: 150}} source={Request} />
      <Text style={styles.cardView_InsideText}>{Detail}</Text>
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
    marginTop:5 
      
 
  },
  cardViewStyle:{
 
    width: 200,
    height: 180,
    marginLeft: 11,
    marginTop: 5,
    marginBottom:5
 
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

export default ShopByStyle;