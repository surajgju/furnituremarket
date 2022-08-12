import React from 'react';
import { StyleSheet, View, Text, Image,WebView ,ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import CardView from 'react-native-cardview'
//import IconMat1 from 'react-native-vector-icons/EvilIcons';
import {  Icon } from 'react-native-elements';


const Blogs = () => {
  return (
    <ScrollView
        showsHorizontalScrollIndicator={false}
     horizontal={true}>
      <Card Request={require('@assets/table.jpg')} Detail={"Blog Title"} />
      <Card Request={require('@assets/download.jpg')} Detail={"Blog Title"} />
      <Card Request={require('@assets/sofa.png')} Detail={"Blog Title"} />
    </ScrollView>

  );
}
const Card = ({ Detail, Request }) => {
  return (

    <View style={styles.MainContainer}>
      <TouchableOpacity >
        <CardView
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={5}
          style={styles.cardViewStyle}
          showsVerticalScrollIndicator={false} >

          <View style={{ flexDirection: 'row', marginBottom: 0, }}>
            <View>
              <ImageBackground style={styles.ImageBackgroundStyle
           
              }
                source={Request}>
                <View style={styles.backgroundCircle} >
                  <Text style={{fontSize:20}}>21</Text>
                  <Text style={{fontSize:10}}>Nov</Text>
                </View>
                {/* <View style={{alignSelf: 'flex-end',marginEnd: 10,marginTop: 0}}>
                <Text >Nov</Text>
                </View> */}
              </ImageBackground>
            </View>

          </View>

          <Text style={styles.cardView_InsideText}>{Detail}</Text>
          <Text style={{ marginLeft: 10,
           marginRight: 10,marginTop:10,
            color: '#87868B',
            textAlign:'justify' ,
             fontFamily:"open-serif", }}
          >
            This is a app where you can get different furniture for every
            purpose may be your daily needs or your decoration purpose,
            is a app where you can get different furniture for every
            purpose may be your daily needs or your decoration purpose
           
          </Text>

      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',marginLeft:10}} >
      
      <Icon
          size={20}
          name='like2'
          type='antdesign'
          color='#333333'
        />
               
      <Icon style={{marginStart:10}}
          size={20}
          name='comments'
          type='font-awesome'
          color='#333333'
        />

       </View>
    
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

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  ImageBackgroundStyle:
  {
    width: 270,
    height: 190,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    overflow: "hidden",
  },

  cardView_InsideText: {
    fontSize: 16,
    // color: '#777', 
    color: '#0D5395',
    marginTop: 10,
    marginLeft: 10,
   // marginBottom:5

  },
  backgroundTxt: {
    fontSize: 15,
    alignSelf: 'flex-end',
    backgroundColor: '#D1CFC3',
    borderRadius: 5,
    width: 60,
    height: 25,
    marginTop: 10,
    marginEnd: 10,
    padding: 3,
    paddingTop: 0

  },
  backgroundCircle:{
    height:50,
    width:50,
    alignSelf: 'flex-end',
    backgroundColor: '#f5f4f2',
    borderRadius:25,
    marginTop: 10,
    marginEnd: 10,
    justifyContent:"center",
    alignItems:"center",
  },
  cardViewStyle: {

    width: 290,
    height: 390,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10

  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection:"column",
  },

  text: {
    fontSize: 42,
  },

  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#e3e3e3',
    margin:10,
},
// icons:{
//   marginLeft:10

// }

});

export default Blogs;