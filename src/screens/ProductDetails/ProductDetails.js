import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView, Button, Dimensions, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { Card } from 'react-native-shadow-cards';
import CommonHeader from '../../component/header'
//import { SliderBox, } from "react-native-image-slider-box";
//import InnerProductDetails from '../../component/ProductDetails/InnerProductDetails'
import { Picker } from '@react-native-picker/picker';
import FastImage from 'react-native-fast-image';
import { withNavigation } from 'react-navigation';

//import Preview from './Preview';
import FlatListSlider from './FlatListSlider';


export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [
        { 'country': 'UK', 'currency':'GBP', 'currencyLabel': 'Pound' },
        { 'country': 'EU', 'currency':'EUR','currencyLabel': 'Euro' },
        { 'country': 'USA', 'currency':'USD', 'currencyLabel': 'USD Dollar'  }
       ],
       currentLabel: 'Select your currency',
       currency: '',

      price: '',

      data: [
        {
          image:
            'http://justadvertise.in/assets/img/category/modular-furniture.jpg',
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'http://justadvertise.in/assets/img/category/office-furniture.jpg',
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          image:
            'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
          desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
        {
          image:
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
      ],
    };
  }

  // handlePress = async () => {
  //   fetch('https://data.advance88.hasura-app.io/v1/query', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //           "type": "select",
  //     "args": {
  //         "table": "author",
  //         "columns": [
  //             "name"
  //         ],
  //         "limit": "1"
  //     }
  //       })
  // })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //  Alert.alert("Author name at 0th index:  " + responseJson[0].name);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }



  // fetch =() =>{
  //   PostApiCall.postRequest(
  //     {
  //       id: ProductDetails.fld_productDetailsImageid,
  //     },
  //     'GetProductDetails',
  //   ).then((results) =>
  //     results.json().then((obj) => {
  //       if (results.status == 200 || results.status == 201) {
  //         setMaster(obj.data[0]);
  //       }
  //     }),
  //   );

  // }


  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);

    const { navigation, } = this.props;
    return (

      <SafeAreaView>
        <CommonHeader onPress={() => navigation.toggleDrawer()}
          onSearchIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
          onCartIconPress={() => navigation.navigate('Routes', { screen: 'HomeSearch' })}
          onProfileIconPress={() => navigation.navigate('Routes', { screen: 'HomeProfile' })}
        />
        {/* <View style={styles.container}> */}
        <ScrollView>

          <View  >
            <Card elevation={1} style={styles.card}>
              <FlatListSlider
                data={this.state.data}
                //timer={2000}
                imageKey={'image'}
                // local={false}
                // width={300}
                width={screenWidth}
                separator={0}
                // loop={true}
                // autoscroll={true}
                currentIndexCallback={index => console.log('Index', index)}
                onPress={item => alert(JSON.stringify(item))}
                indicator
                animation
              />
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.priceStyle}>
                  {/* {this.state.price} */}
                  ₹9,999
          </Text>
                <Text style={styles.lineThroughText}>
                  {/* {this.state.discount} */}
                  ₹40000
          </Text>
                <Text style={styles.textTaxes}>
                  {/* {this.state.text} */}
                  (Inclusive of all taxes)
          </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>


                <View style={styles.button1}>
                  <Picker
                    selectedValue={this.state.count}
                    style={{ height: 28, width: 85, }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ count: itemValue })
                    }>
                    <Picker.Item label="1" value="QTN" />
                    <Picker.Item label="2" value="QTN" />
                    <Picker.Item label="3" value="QTN" />
                    <Picker.Item label="4" value="QTN" />
                    <Picker.Item label="5" value="QTN" />
                  </Picker>


                  {/* <Picker
                    selectedValue={this.state.currency}
                    onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>{
                      this.state.currencies.map((v) => {
                        return <Picker.Item label={v.currencyLabel} value={v.currency} />
                      })
                    }
                  </Picker>
 */}

                </View>

                <View style={styles.button}>
                  <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>


                    <Text style={styles.addToCartText}>
                      Add To Cart
                </Text>

                  </TouchableOpacity>
                </View>

                <View style={styles.backgroundCircle} >
                  <TouchableOpacity >
                    <Icon
                      size={20}
                      name='hearto'
                      type='antdesign'
                      color='#333333'
                    />


                  </TouchableOpacity>
                </View>

              </View>
            </Card>


            <Card elevation={1} style={styles.card1}>
              <View>
                <Text style={styles.price}>
                  Description
          </Text>
                <View style={styles.lineStyle} />

                <Text style={styles.description}>
                  This is a Elegant Sofa which is made of Premium Rosewood.
          </Text>

                <Text style={styles.description}>
                  Brand :           Furn and Marts
          </Text>

                <Text style={styles.description}>
                  Material :      Sheesham Wood & Rexine Fabric
            </Text>

                <Text style={styles.description}>
                  Weight :        35 KG
            </Text>

                <Text style={styles.description}>
                  Warranty :    12 Months
            </Text>

                <Text style={styles.description}>
                  Assembly :   Carpenter Assembly
            </Text>

                <Text style={styles.description}>
                  Primary Material :  Fabric
            </Text>

                <Text style={styles.description}>
                  Seating Height : 20
            </Text>



                {/* {/ <View style = {styles.lineStyle} /> /} */}
              </View>

            </Card>


            {/* <Card elevation={1} style={styles.card1}> */}
            <View>
              <Text style={styles.price}>
                View Similar Items
          </Text>

              {/* <View>
                <InnerProductDetails />
              </View> */}

            </View>
            {/* </Card> */}

            {/* Add a comment box to enter review of an item */}

            {/* <View>

              <InnerProductDetails />
            </View> */}








          </View>

        </ScrollView>

        {/* </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'


  },

  card: {
    // height: hp('45%'), // 30% of height device screen
    //width: wp('96%'), // 100% of width device screen
    resizeMode: 'contain',
    //marginLeft: hp(1),
    //marginTop: hp(1),
    height: 400,
    width: 400,
    marginLeft: 10,
    marginTop: 10

  },

  productDetailsImage: {
    // margin: wp(5),
    height: hp('30%'), // 30% of height device screen
    width: wp('50%'),
    //height: 250,
    //width: 250,
    backgroundColor: 'white',
    //marginRight:5,
    // marginTop:5,
    // marginLeft: wp(13),
    marginBottom: 10,
    resizeMode: 'stretch',
    alignSelf: 'center'

  },

  priceStyle: {
    fontSize: 25,
    paddingLeft: 8,
    color: '#f18721',
    marginTop: 20,
  },

  lineThroughText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 18,
    color: '#777',
    marginLeft: 5,
    marginTop: 25,
  },

  textTaxes: {
    fontSize: 14,
    color: '#777',
    marginLeft: 5,
    marginTop: 25,
  },

  button:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    paddingVertical: 2,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    marginLeft: 40,
    justifyContent: 'center',
    backgroundColor: '#f5f4f2'
  },
  addToCartText:
  {
    fontSize: 14,
    paddingLeft: 10,
    color: '#333333',
    elevation: 2,
    //marginTop: 5,
  },

  backgroundCircle: {

    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    backgroundColor: '#f5f4f2',
    borderRadius: 30,
    // marginTop: 10,
    //marginEnd: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    borderColor: '#e3e3e3',


  },

  card1: {

    height: hp('36%'), // 30% of height device screen
    width: wp('96%'), // 100% of width device screen
    resizeMode: 'stretch',
    margin: hp(1),

  },

  price: {

    marginTop: 10,
    fontSize: 18,
    color: "#333333",
    fontWeight: 'bold',
    marginLeft: 15
  },

  description: {

    //textAlign:'center',
    marginTop: 10,
    color: "#333333",
    marginLeft: 15
  },

  button1:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 8,
    paddingVertical: 4,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    // marginLeft: 40,
    justifyContent: 'center',
    backgroundColor: '#f5f4f2'
  },

  // separator: {
  //   height: 20,
  // },
  // contentStyle: {
  //   paddingHorizontal: 16,
  // },


});