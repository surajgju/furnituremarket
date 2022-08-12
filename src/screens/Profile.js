import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import CommonHeader from '@src/component/header'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = ({ navigation }) => {
  return (
    <View 
    style={{
      width: 260,
      height: 450,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View 
      style={{ flex: 1,
         backgroundColor: '#f18721', 
         width: '100%', borderTopRightRadius: 10,
          borderTopLeftRadius: 10 }}>

          </View>
    <View
     style={{         
               marginTop: '-20%',
        elevation:10,
        borderRadius: 100,

      //  borderColor: '#F2F2F2',
        }}> 
         <Image style={{    
           width: 100,
           height: 100,
           borderRadius: 100,
           borderWidth: 1,
            resizeMode: 'cover',  
      }}
        source={
          require('@assets/profile.jpeg')}
      />
      </View>
      <View
        style={{ 
          flex: 3,
           width: '100%',
         marginTop: '-5%', 
         justifyContent: 'flex-start', 
         alignItems: 'flex-start', 
         marginTop: '5%', 
        }}>
        <TouchableOpacity
         style={{
          flexDirection: 'row',
          justifyContent: 'center',  paddingStart:'40%'
        }}>
          <Text style={{
            marginTop: '6%', fontWeight: 'bold'
          }} >Diana</Text>
          <Text style={{ marginStart: '4%' }}>
            <Icon
              name='check-decagram'
              type='material-community'
              color='skyblue' /></Text>
        </TouchableOpacity>
        <Text style={{  paddingStart:'38%'}} >@diaSmith</Text>
        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'center',  paddingStart:'25%'
        }}>
          <Text>
            <Icon
              name='location-pin'
              type='entypo'
              color='skyblue' /></Text>
          <Text style={{
            marginTop: '4%', fontWeight: '100'
          }} > London England</Text>

        </TouchableOpacity>

      </View>

    </View>


  )
}
const styles = () => StyleSheet.create({
  ProfileContainer: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginHorizontal: '2%'
  }
})
export default ProfileScreen