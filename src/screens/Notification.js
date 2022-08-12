import React from 'react';
import { StyleSheet,Text,View, Image, TouchableOpacity } from 'react-native';
import CommonHeader from '@src/component/header'

const NotificationScreen =({navigation})=>{
    return(
<>
<CommonHeader onPress={() => navigation.toggleDrawer()} 
       onSearchIconPress={ () => navigation.navigate('More',{screen:'SearchScreen'})} 
       onCartIconPress={ () => navigation.navigate('More',{screen:'SearchScreen'})}
       onProfileIconPress={ ()=> navigation.navigate('More',{screen:'ProfileScreen'})}


       />
<Image  
style={ styles.imagWish}
source={require('@assets/empty-notification.png')}
/>
<TouchableOpacity style={ styles.tcblOp} onPress={ ()=> navigation.navigate('Home')} >
      <Text style={styles.notifTxt}>Start Shoping</Text>
    </TouchableOpacity>




</>
        )
}
const styles = StyleSheet.create({
    imagWish:{
      resizeMode:'center',
      alignSelf:"center",
marginTop:'20%',
      width:350,
      height:300,
    },
    notifTxt:{
      alignSelf:'center',
      fontFamily:"open-sans",
      fontSize:20,
      fontWeight:'bold',
      color:'#f18721',
      padding:10
    },
    tcblOp:{
      borderColor:'#f18721',
      borderWidth:0.8,
      marginHorizontal:50,
      marginTop:40,
      paddingVertical:6
    }
  })
export default NotificationScreen