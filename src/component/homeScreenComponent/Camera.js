import React from 'react'
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Camera = ({CameraPress}) => {
  return (

    <TouchableOpacity style={styles.container} onPress={CameraPress}>
      <Image style={ styles.CameraImg} source={require('@assets/view-room.jpg')} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
  width:Dimensions.get('screen').width,
  height: Dimensions.get('screen').height/2.5,
  //  marginTop: 10,
 },
 CameraImg:{
  width:Dimensions.get('screen').width,
  height: Dimensions.get('screen').height/5.9,
  resizeMode:'contain'
 },

})

export default Camera