import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView,Button, Alert } from 'react-native';
//import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import CommonHeader from '@src/component/header';
import { Card } from 'react-native-shadow-cards';
import { Picker } from '@react-native-picker/picker';
import { withNavigation } from 'react-navigation';


const ShoppingCart = ({ navigation }) => {
  const [value, onChangeText] = React.useState('Enter Your PinCode');
 // const [value1, onChangeText1] = React.useState('Enter Promo Code');
 // const [text, setText] = React.useState('Enter Promo Code');
  return (
    <SafeAreaView>
      <CommonHeader onPress={() => navigation.toggleDrawer()}
        onSearchIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
        onCartIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
        onProfileIconPress={() => navigation.navigate('Routes', { screen: 'HomeProfile' })}
      />

      
<Card elevation={1} style={styles.card1}>

<View style={styles.sectionStyle}>

<Icon style={styles.locationIcon}
          size={30}
          name='location'
          type='evilicon'
          color='#333333'
        />
          <TextInput style={{}}
            style={{flex: 1}}
            placeholder="Enter Your PinCode"
            underlineColorAndroid="transparent"
          />

<Button style={{width: wp('6%')}}
        color="#f18721"
        title="Check"
        onPress={() => Alert.alert('Delivery Available')}
      />
</View>  



          {/* <View style={{flexDirection:'row',margin :15}}>
           <Icon style={styles.locationIcon}
          size={30}
          name='location'
          type='evilicon'
          color='#333333'
        />

          <TextInput
          editable
          maxLength={40}
          style={styles.textInput}
          placeholder="Enter Your PinCode"
    
     onChangeText={text => onChangeText(text)}
     underlineColorAndroid="transparent"
     value={value}
   
    />

<View >


<Button style={{borderRadius:5}}
        color="#f18721"
        title="Check"
        onPress={() => Alert.alert('Delivery Available')}
      />
</View>

          </View> */}
        </Card>

        
        
        
        
        
        {/* <View style={styles.searchSection}>
    <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
    <TextInput
        style={styles.input}
        placeholder="User Nickname"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View> */}



      <ScrollView   >

        <Category

          Request1={require('@assets/room1.jpg')}
          Request2={require('@assets/room1.jpg')}
          text1bold={"Triple Seated Sofa"}
          text2bold={"Double Seated Sofa"}
          text1={"By Furn-Marts"}
          text2={"By Furn-Marts"}
          categoryOnPress={()=>navigation.navigate('Address')}
       

        />

      </ScrollView>
    </SafeAreaView>
  )
}

const Category = ({ Request1, Request2, text1bold, text2bold, text1, text2,categoryOnPress  }) => {

  
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

     
        <Card elevation={1} style={styles.card}>
          <View style={styles.ToStyle}>
            <Image style={styles.imgStyle} source={Request1} />
            <View style={styles.viewStyleBelowImg}>
              <Text style={styles.textBold1}>{text1bold }</Text>
            
              <Text style={styles.text1}>{text1}</Text>
              <View style={{flexDirection:'row' }}>
                <Text style={{ fontSize: 18,  color: '#f18721', }}>
                  ₹20,000
                  </Text>
   </View>
             
                <View style={styles.dropDown}>
                <Picker

                  style={{ height: 23, width: 75,color:'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    ({ language: itemValue })
                  }>
                  <Picker.Item label="1" value="QTN" />
                  <Picker.Item label="2" value="QTN" />
                  <Picker.Item label="3" value="QTN" />
                  <Picker.Item label="4" value="QTN" />
                  <Picker.Item label="5" value="QTN" />
                </Picker>
              </View>
            </View>
          </View>

          <View style={styles.lineStyle} />

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.button}>
             
              <TouchableOpacity >

              <Icon style={styles.locationIcon}
          size={15}
          name='delete'
          type='antdesign'
          color='#333333'
        />
           <Text style={styles.addToCartText}>
                  Remove   Item
                </Text>
              </TouchableOpacity>
           
            </View>

            <View style={styles.button}>
              <TouchableOpacity >
              <Icon style={styles.locationIcon}
          size={15}
          name='hearto'
          type='antdesign'
          color='#333333'
        />


                <Text style={styles.addToCartText}>
                  Move to WishList
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>


        <Card elevation={1} style={styles.card}>
          <View style={styles.TO2Style}>
            <Image style={styles.img2Style} source={Request2} />
            <View style={styles.viewStyleBelowImg}>
              <Text style={styles.textBold1}>{text1bold}</Text>
              <Text style={styles.text1}>{text1}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, paddingLeft: 2,color: '#f18721', }}>
                  ₹30,000
                  </Text>


                 

              </View>


              <View style={styles.dropDown}>
                <Picker

                  style={{ height: 23, width: 75,color:'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    ({ language: itemValue })
                  }>
                  <Picker.Item label="1" value="QTN" />
                  <Picker.Item label="2" value="QTN" />
                  <Picker.Item label="3" value="QTN" />
                  <Picker.Item label="4" value="QTN" />
                  <Picker.Item label="5" value="QTN" />
                </Picker>
              </View>
            </View>
          </View>

          <View style={styles.lineStyle} />

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.button}>
             
              <TouchableOpacity >

              <Icon style={styles.locationIcon}
          size={15}
          name='delete'
          type='antdesign'
          color='#333333'
        />
           <Text style={styles.addToCartText}>
                  Remove   Item
                </Text>
              </TouchableOpacity>
           
            </View>

            <View style={styles.button}>
              <TouchableOpacity >
              <Icon style={styles.locationIcon}
          size={15}
          name='hearto'
          type='antdesign'
          color='#333333'
        />


                <Text style={styles.addToCartText}>
                  Move to WishList
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        <Card elevation={1} style={styles.card1}>
          {/* {/ <View style={{flexDirection:'row'}}> /} */}
            {/* <Text style={styles.price}>
              Apply Coupon
          </Text> */}


          <View style={styles.sectionStyle}>

<Icon style={styles.locationIcon}
          size={30}
          name='tagso'
          type='antdesign'
          color='#333333'
        />


             <TextInput style={{}}
            style={{flex: 1}}
            placeholder="Apply Your Coupon Here"
            underlineColorAndroid="transparent"
          />

<Button 
        color="#f18721"
        title="Apply"
        onPress={() => Alert.alert('Applied Successfully')}
      />
</View>


          {/* <View style={styles.backgroundRectangle}>
          <Text style={{marginLeft:10,marginTop:10        }}>
            Enter your Code
          </Text>

          </View> */}
{/* 
          <TextInput
 editable
      maxLength={40}
      style={{ height: 40, borderColor: '#f5f4f2',backgroundColor:'#f5f4f2',borderWidth: 1, }}
     onChangeText1={text => onChangeText(text)}
     value1={value1}
   
    /> */}
          {/* {/ </View> /} */}
        </Card>

        <Card elevation={1} style={styles.card2}>
          <View>

          <Text style={styles.priceDetails}>
             Price Details:
          </Text>

          <View style={styles.lineStyle} />

          <Text style={styles.description}>
            Total MRP:                                                                    ₹50,000           
          
          </Text>

          <Text style={styles.description}>
            Discount On MRP:                                                       ₹10,000
          
          </Text>
          <View style={styles.lineStyle} />


          <Text style={{color:'#f18721', marginLeft:15,marginTop:10}}>
            Total Amount:                                                              ₹40,000
          
          </Text>


           </View>
        </Card>


           
          <View>
          <Button 
        color="#f18721"
        title="Place Your Order "
        onPress={categoryOnPress}
      />
          </View>
      

        <Card elevation={1} style={styles.card1}>
          <View>
           
          </View>
        </Card>

        <Card elevation={1} style={styles.card1}>
          <View>
            <Text style={styles.price}>
              Apply Coupon
          </Text>
          </View>
        </Card>


        <Card elevation={1} style={styles.card1}>
          <View>
            <Text style={styles.price}>
              Apply Coupon
          </Text>
          </View>
        </Card>

      




      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F2F2F2",
    //marginTop:hp(2),
    marginStart: wp('1%'),

  },

  ToStyle: {
    flexDirection: "row",


  },

  TO2Style: {
    flexDirection: "row",
    //  marginTop: hp(2),
    //borderRadius:'5'
  },

  imgStyle: {
    // width: 130,
    //height: 130,
    height: hp('20%'), // 30% of height device screen
    width: wp('51%'),
    resizeMode: 'stretch',
    // 100% of width device screen
    borderRadius: 5,
    margin: wp(2),
    // marginLeft: wp(2),
    // marginBottom:10,
    //  marginStart:wp(5)
  },

  img2Style: {
    height: hp('20%'), // 30% of height device screen
    width: wp('51%'),
    resizeMode: 'stretch',
    borderRadius: 5,
    margin: wp(2),
    //    marginLeft: wp(2),
    // marginBottom: 10

  },

  textBold1:
  {
    fontSize: 15,
    fontWeight: "bold",
    //  marginTop:wp(3),
    color: '#333333',
    //paddingLeft: 6,
   // marginTop:-50
    //margin: wp(2),
    // marginTop:2,

  },

  textBold2:
  {
    fontSize: 15,
    fontWeight: "bold",
    // marginTop: wp(3),
    color: '#333333',
    paddingLeft: 10,
    //   marginLeft: wp(5),
     marginTop: 20
  },

  text2: {

    color: '#333333',
    flexDirection: 'row-reverse',
    paddingLeft: 10,
    fontSize: 14,


  },
  text1: {

    color: '#333333',
    // paddingLeft: 6,
    fontSize: 14,

  },

  viewStyleBelowImg: {
    alignItems:'flex-start',
    justifyContent: 'center',
    flexDirection: "column",

  },


  //    text2boldStyle: {
  //        fontWeight:"bold",
  //        marginTop:hp(3)
  //     },

  icon: {

    // marginLeft:10,
    // flexDirection: 'row-reverse',
    // marginLeft:150,
    //padding: 10,
    marginTop: 5,
    marginLeft: 4


  },
  card: {
    height: hp('34%'), // 30% of height device screen
    width: wp('95%'), // 100% of width device screen
    resizeMode: 'stretch',
    margin: hp(.5),
  },

  InsideText: {
    // fontFamily: "open-serif",
    marginTop: 5,
    marginLeft: 15,
    // marginTop:Sheight/80,
    //paddingBottom:Sheight/90,
    fontSize: 18,
    color: '#333333',
    //textAlign: 'center',
    //   marginTop: 10,
    // marginLeft: 10,
    fontWeight: 'bold',
    // flexDirection: 'row',
    marginStart: 5


  },
  text:
  {
    //fontWeight:'bold',
    marginStart: 190,
    // textAlign:'justify',
    marginTop: 7,




  },

  lineThroughText:
  {
   // textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 14,
    color: '#777',
    //marginLeft: 5
  },

  button1:
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
    borderWidth: 1,
     marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#f18721'
  },


  dropDown:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical:30,
    paddingVertical: 3,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#f18721',
    //marginHorizontal:20
  },


  button:
  {
   // flexDirection: 'row',
   // justifyContent: 'center',
   // alignItems: 'center',
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
   // marginHorizontal: 2,
    paddingVertical: 5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: '#f5f4f2',
    padding:10,
    //marginTop:10,

  },



  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#e3e3e3',
    margin: 10,
    // flexDirection: 'column',
  },

  card1: {

    height: hp('8%'), // 30% of height device screen
    width: wp('96%'), // 100% of width device screen
    //resizeMode: 'stretch',
    margin: hp(.5),

  },

  price: {

    marginTop: 20,
    fontSize: 15,
    color: "#333333",
    fontWeight: 'bold',
    marginLeft: 15,
   // textAlign: 'center',
  },

  checkDetails:{
    marginTop:5,
    fontSize: 18,
    color: "#333333",
   // fontWeight: 'bold',
   // marginLeft: 40,
   // alignSelf:'flex-end'
   //textAlign:'right'

  },

  priceDetails:{
    marginTop:15,
    fontSize: 18,
    color: "#333333",
    fontWeight: 'bold',
    marginLeft: 15,

  },
  card2:{
    height: hp('22%'), // 30% of height device screen
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

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //margin:5
    //padding:5
  },
  // locationIcon:{
  //   flexDirection:'row'
  //  // marginTop:1
  // },
  lineThroughText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 16,
    color: '#777',
    marginLeft: 5,
   // marginTop: 25,
  },

  backgroundRectangle: {

    height: 45,
    width: 250,
    alignSelf: 'center',
    backgroundColor: '#f5f4f2',
   borderRadius: 5,
    marginTop: 10,
    //marginEnd: 10,
   // justifyContent: "center",
    //alignItems: "center",
    marginLeft: 20,
    borderColor: '#e3e3e3',
    

  },

  textInput:{
     height: 36,
     width:250, 
     borderColor: '#f5f4f2',
     backgroundColor:'#f5f4f2',
     borderWidth: 1, 
    },

    searchSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },


  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: hp('5%'),
    alignItems: 'center',
    backgroundColor: '#f5f4f2',
    borderWidth: 0.5,
    borderColor: '#e3e3e3',
    //height: 36,
    borderRadius: 5,
    padding:10,
    margin: 10,
    color: '#333333',
    elevation: 2,
  },




})


export default ShoppingCart
