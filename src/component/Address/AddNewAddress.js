import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView,Button, Alert,Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Icon } from 'react-native-elements';
import CommonHeader from '@src/component/header';
import { Card } from 'react-native-shadow-cards';
import { withNavigation } from 'react-navigation';
//import { RadioButton } from 'react-native-paper';
const Swidth = Dimensions.get('screen').width;
const Sheight = Dimensions.get('screen').height;

const Box = ({ txt }) => {
            return (
        <View style={styles.box}>
        <TouchableOpacity>
            <Text style={{ alignSelf: 'center', marginTop: 5 }}>{txt}</Text>
        </TouchableOpacity>
        </View>
    )
} 

const Details=({text}) =>{
    return (
         <View >
<View  style={{flexDirection:'row',marginLeft:10}}>
            <TextInput
            placeholder="Firstname & Lastname "
            underlineColorAndroid="transparent"
            />
           
</View>
<View style = {styles.lineStyle} />
</View>

    )
}

const AddNewAddress  = ({ navigation }) => {
//   const [value, onChangeText] = React.useState('Enter Your PinCode');
 const [checked, setChecked] = React.useState('first');


 
  return (
    <SafeAreaView>
      <CommonHeader onPress={() => navigation.toggleDrawer()}
        onSearchIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
        onCartIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
        onProfileIconPress={() => navigation.navigate('Routes', { screen: 'HomeProfile' })}
      />
      <ScrollView>
<Card elevation={1} style={styles.card}>
 <Text style={styles.InsideText}>   Address Details </Text>

                    <Details text ='Home' />
                    <Details text='Office' />
                    <Details text='Others' />
                  
<View >
<View  style={{flexDirection:'row',marginLeft:10}}>
            <TextInput
            placeholder="Pincode "
            underlineColorAndroid="transparent"
            />
           
</View>
<View style = {styles.lineStyle} />
</View>
        <View >
          <View  style={{flexDirection:'row',marginLeft:5}}>
            <TextInput
            placeholder=" Address"
            underlineColorAndroid="transparent"
          />
          </View>
             <View style = {styles.lineStyle} />
          </View>

 <View style={{flexDirection:'row',marginLeft:5}} >
          <TextInput 
           placeholder="Street"
           underlineColorAndroid="transparent"
          />
          </View>

            <View style = {styles.lineStyle} />

 <View style={{flexDirection:'row',marginLeft:5}}>
          <View  style={styles.sectionStyle1}>
         
          <TextInput 
          // style={{flex: .5}}
           placeholder="City"
           underlineColorAndroid="transparent"
          />

            <View style = {styles.lineStyle} />
<View  style={styles.sectionStyle2}>
          <TextInput 
           style={{flex: .5}}
           placeholder="PinCode"
           underlineColorAndroid="transparent"
          />
          </View>
          </View>
          </View>

                <Text style={styles.InsideText}> Save address as </Text>
                <View style={{ flexDirection: 'row', }}>
                
                    <Box txt='Home' />
                    <Box txt='Office' />
                    <Box txt='Others' />
              

                </View>


                <View>
                <View style = {styles.lineStyle} />
                </View>
   <View >
          <Button 
        color="#f18721"
        title="Add Address "
        onPress={() => Alert.alert('Added')}
      />
          </View>
          </Card>
          </ScrollView>
      
             </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  card: {
    height: hp('90%'), 
    width: wp('96%'), 
    resizeMode: 'stretch',
    margin: hp(1),
  },

  InsideText: {
    fontFamily: "open-serif",
    marginTop: 5,
    marginLeft: 15,
    // marginTop:Sheight/80,
    //paddingBottom:Sheight/90,
    fontSize: 18,
    color: '#333333',
   //   marginTop: 10,
    // marginLeft: 10,
    fontWeight: 'bold',
    marginStart: 5
  },

  button:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 5,
    paddingVertical: 3,
    borderColor: '#e3e3e3',
    borderWidth: 2,
     marginLeft: 10,
    justifyContent: 'center',
   // backgroundColor: '#f18721'
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#e3e3e3',
    margin: 10,
    // flexDirection: 'column',
  },

  card1: {

    height: hp('7%'), // 30% of height device screen
    width: wp('96%'), // 100% of width device screen
    //resizeMode: 'stretch',
    margin: hp(.5),

  },

  priceDetails:{
    marginTop:15,
    fontSize: 18,
    color: "#333333",
    fontWeight: 'bold',
    marginLeft: 15,

  },
  card2:{
    height: hp('12%'), // 30% of height device screen
    width: wp('96%'), // 100% of width device screen
    resizeMode: 'stretch',
    margin: hp(.5),

  },
  description: {
    //textAlign:'center',
    marginTop: 10,
    color: "#333333",
    marginLeft: 15
  },

  addToCartText:
  {
    fontSize: 14,
    paddingLeft: 10,
    color: '#333333',
    elevation: 2,
    //marginTop: 5,
  },


  textInput:{
     height: 36,
     width:250, 
     borderColor: '#f5f4f2',
     backgroundColor:'#f5f4f2',
     borderWidth: 1, 
    },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f4f2',
    borderWidth: 0.5,
// borderColor: '#e3e3e3',
    height: 36,
   // borderRadius: 5,
    margin: 10,
    color: '#333333',
    elevation: 2,
  },

     InsideText: {
        fontFamily:"open-serif",
        marginTop:Sheight/80,
        paddingBottom:Sheight/90,
        fontSize: 15,
        color: '#333333',
        //textAlign: 'center',
     //   marginTop: 10,
       // marginLeft: 10,
         fontWeight: 'bold',
        flexDirection: 'column',
        marginStart:5

    },

     box: {
        height: hp('4%'),
        width: wp('18%'),
        borderWidth: 1,
        marginLeft: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#e3e3e3',
        backgroundColor: '#f5f4f2',
    },

})


export default AddNewAddress