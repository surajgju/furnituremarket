import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView,Button, Alert,Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonHeader from '@src/component/header';
import { Card } from 'react-native-shadow-cards';
import { withNavigation } from 'react-navigation';
import { RadioButton } from 'react-native-paper';
const Swidth = Dimensions.get('screen').width;
const Sheight = Dimensions.get('screen').height;

const Address  = ({ navigation}) => {
//   const [value, onChangeText] = React.useState('Enter Your PinCode');
const [checked, setChecked] = React.useState('first');
 
  return (
    <SafeAreaView>
      <CommonHeader onPress={() => navigation.toggleDrawer()}
        onSearchIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
        onCartIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
        onProfileIconPress={() => navigation.navigate('Routes', { screen: 'HomeProfile' })}
      />
<Card elevation={1} style={styles.card}>
        <View style={styles.backgroundCircle}>
         
          <Text style={{ 
           margin: 10,
           color: '#87868B',
           fontFamily:"open-serif",
           Width:200,
              }}
          >
           Sunny Singh,Flat no.4,
           Lodha Amara
           Bvp University,
           Katraj Pune
           
          </Text>
         

    <View style={{marginLeft:-40}}>
      <RadioButton
        value="first"
        text=""
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
     
     
    </View>
     </View>


      <View style={styles.backgroundCircle}>
         
          <Text style={{ 
           margin: 10,
         
           color: '#87868B',
        
           fontFamily:"open-serif",
           Width:200,
              }}
          >
           Sunny Singh,Flat no.4,
           Lodha Amara
           Bvp University,
           Katraj Pune
           
          </Text>
         

    <View style={{marginLeft:-40}}>
       <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </View>
     
     
    </View>



     <View style={styles.backgroundCircle}>
         
          <Text style={{ 
           margin: 10,
          // marginRight: 10,
          // marginTop:10,
           color: '#87868B',
           //textAlign:'justify' ,
           fontFamily:"open-serif",
           Width:200,
              }}
          >
           Sunny Singh,Flat no.4,
           Lodha Amara
           Bvp University,
           Katraj Pune
           
          </Text>
         

    <View style={{marginLeft:-40}}>
       <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
    </View>
     
     
    </View>
 
          


   <View style={{margin:20}}>
          <Button 
        color="#f18721"
        title="Add  New  Address "
      //  onPress={() => Alert.alert('Added')}

       onPress={()=>navigation.navigate('AddNewAddress')}
      
      />
          </View>
          </Card>
      
             </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  card: {
    height: hp('50%'), // 30% of height device screen
    width: wp('94%'), // 100% of width device screen
    resizeMode: 'stretch',
    margin: hp(1),
  },

   backgroundCircle:{
    flexDirection:'row',
    height:hp('12%'),
    width:wp('88%'),
    alignSelf: 'flex-end',
    backgroundColor: '#f5f4f2',
    //borderRadius:25,
    marginTop: 10,
    marginEnd: 10,
    justifyContent:"center",
    alignItems:"center",
  },


})


export default Address