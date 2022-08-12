/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import StyleSheet from '../StyleSheet/StyleSheet';
import config from '../Helper/config';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  Alert,
  Modal,
  ScrollView,
  StyleSheet as Style,
} from 'react-native';
import PostApiCall from '../PostApiCall';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import {Header, Text, Left, Right} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Communications from 'react-native-communications';
import {Actions} from 'react-native-router-flux';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import GetApiCall from '../GetApi';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home(props) {
  const [count, setcount] = useState(0);
  const [countWish, setcountWish] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const [FoodCategory, setFoodCategory] = useState([]);
  const [AccessoriesCategory, setAccessoriesCategory] = useState([]);
  const [CovidCategory, setCovidCategory] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  function fetchData() {
    GetApiCall.getRequest('GetFoodCategoryWebsiteData').then((resultdes) =>
      resultdes.json().then((obj) => {
        // console.log(obj.data)
        setFoodCategory(obj.data);
        // this.setState({
        //   FoodCategory: obj.data,
        // });

        GetApiCall.getRequest('GetAccessoriesCategoryWebsiteData').then(
          (resultacc) =>
            resultacc.json().then((objacc) => {
              // console.log(obj.data)
              setAccessoriesCategory(objacc.data);
              // this.setState({
              //   AccessoriesCategory: objacc.data,
              // });

              GetApiCall.getRequest('GetCovidCategoryWebsiteData').then(
                (resultcov) =>
                  resultcov.json().then((objcov) => {
                    // console.log(obj.data)
                    setCovidCategory(objcov.data);
                    // this.setState({
                    //   CovidCategory: objcov.data,
                    // });

                    var dts = [];
                    dts.push({
                      fld_category: 'All',
                      fld_id: 0,
                      fld_status: 'Active',
                      fld_page: 'search',
                    });
                    dts.push(...obj.data);
                    dts.push({
                      fld_category: 'Footwear',
                      fld_id: 0,
                      fld_status: 'Active',
                      fld_page: 'footwear',
                    });
                    dts.push({
                      fld_category: 'Socks',
                      fld_id: 0,
                      fld_status: 'Active',
                      fld_page: 'socks',
                    });
                    dts.push(...objcov.data);
                    dts.push(...objacc.data);
                    dts.push({
                      fld_category: 'Health Knowledge',
                      fld_id: 0,
                      fld_status: 'Active',
                      fld_page: 'healthknowledge',
                    });
                    // console.log(dts)
                  }),
              );
            }),
        );
      }),
    );

    //   // setIsFetching(true);

    //   AsyncStorage.getItem('@UserData').then((user) => {
    //     var userData = JSON.parse(user);

    //     PostApiCall.postRequest(
    //       {
    //         customer_id: userData.fld_userid,
    //       },
    //       'GetShoppingCartData',
    //     ).then((results) =>
    //       results.json().then((obj) => {
    //         if (results.status == 200 || results.status == 201) {
    //           setcount(obj.data.length);

    //           // }
    //         }
    //       }),
    //     );
    //     PostApiCall.postRequest(
    //       {
    //         customer_id: userData.fld_userid,
    //       },
    //       'GetWishlistData',
    //     ).then((results) =>
    //       results.json().then((obj) => {
    //         if (results.status == 200 || results.status == 201) {
    //           setcountWish(obj.data.length);
    //           console.log(obj.data.length);

    //           // }
    //         }
    //       }),
    //     );
    //   });
  }

  return (
    <Header style={StyleSheet.HeaderMainView}>
      <Left style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView
                directionalLockEnabled={true}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.modalText}>ABOUT US</Text>
                <Text style={styles.modalText}>HEALTH KNOWLEDGE</Text>
                <Collapse>
                  <CollapseHeader
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.modalText}>FOOD & SUPPLEMENTS</Text>
                    <Icon2
                      name="chevron-small-down"
                      color={config.DarkGray}
                      size={20}
                      style={{
                        alignSelf: 'center',
                        marginBottom: 15,
                        marginLeft: 15,
                      }}
                    />
                  </CollapseHeader>
                  <CollapseBody>
                    {FoodCategory.map((cat, index) => (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          AsyncStorage.setItem(
                            '@foodCategory',
                            JSON.stringify(cat),
                          );
                          Actions.foodList();
                          setModalVisible(false);
                        }}>
                        <Text style={styles.modalTextInner}>
                          {cat.fld_category}
                        </Text>
                      </TouchableWithoutFeedback>
                    ))}
                  </CollapseBody>
                </Collapse>
                <Collapse>
                  <CollapseHeader
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.modalText}>FOOTCARE</Text>
                    <Icon2
                      name="chevron-small-down"
                      color={config.DarkGray}
                      size={20}
                      style={{
                        alignSelf: 'center',
                        marginBottom: 15,
                        marginLeft: 15,
                      }}
                    />
                  </CollapseHeader>
                  <CollapseBody>
                    <Text style={styles.modalTextInner}>FOOTWEAR</Text>
                    <Text style={styles.modalTextInner}>SOCKS</Text>
                  </CollapseBody>
                </Collapse>
                <Collapse>
                  <CollapseHeader
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.modalText}>COVID ESSENTIALS</Text>
                    <Icon2
                      name="chevron-small-down"
                      color={config.DarkGray}
                      size={20}
                      style={{
                        alignSelf: 'center',
                        marginBottom: 15,
                        marginLeft: 15,
                      }}
                    />
                  </CollapseHeader>
                  <CollapseBody>
                    {CovidCategory.map((cat, index) => (
                      <Text style={styles.modalTextInner}>
                        {cat.fld_category}
                      </Text>
                    ))}
                  </CollapseBody>
                </Collapse>
                <Collapse>
                  <CollapseHeader
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.modalText}>ACCESSORIES</Text>
                    <Icon2
                      name="chevron-small-down"
                      color={config.DarkGray}
                      size={20}
                      style={{
                        alignSelf: 'center',
                        marginBottom: 15,
                        marginLeft: 15,
                      }}
                    />
                  </CollapseHeader>
                  <CollapseBody>
                    {AccessoriesCategory.map((cat, index) => (
                      <Text style={styles.modalTextInner}>
                        {cat.fld_category}
                      </Text>
                    ))}
                  </CollapseBody>
                </Collapse>

                <Text style={styles.modalText}>GIFT HAMPERS</Text>
                <Text style={styles.modalText}>INSURANCE</Text>
                <Text style={styles.modalText}>DOCTOR</Text>
                <Text style={styles.modalText}>DIETITIANS</Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderBottomColor: 'lightgray',
                    marginBottom: 10,
                  }}
                />
                <Text style={styles.modalTextInformation}>Email</Text>
                <Text style={styles.modalTextInformationText}>
                  wecare@beatmysugar.com
                </Text>
                <Text style={styles.modalTextInformation}>Phone Number</Text>
                <Text style={styles.modalTextInformationText}>
                  +91 90244 22444
                </Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderBottomColor: 'lightgray',
                    marginBottom: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Icon2
                    name="facebook"
                    color="#3b5998"
                    size={25}
                    style={{
                      alignSelf: 'center',
                      margin: 10,
                    }}
                  />
                  <Icon3
                    name="instagram"
                    color="#F56040"
                    size={25}
                    style={{
                      alignSelf: 'center',
                      margin: 10,
                    }}
                  />
                  <Icon3
                    name="twitter"
                    color="#00acee"
                    size={25}
                    style={{
                      alignSelf: 'center',
                      margin: 10,
                    }}
                  />
                  <Icon2
                    name="youtube"
                    color="#FF0000"
                    size={25}
                    style={{
                      alignSelf: 'center',
                      margin: 10,
                    }}
                  />
                  <Icon3
                    name="linkedin-square"
                    color="#0e76a8"
                    size={25}
                    style={{
                      alignSelf: 'center',
                      margin: 10,
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Icon2
            name="list"
            color={config.DarkGray}
            size={32}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </Left>
      <Right style={{marginRight: wp('2%'), alignSelf: 'center'}}>
        <View style={{marginRight: wp('2%'), alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              count == 0
                ? Alert.alert('Sorry your cart is empty!!!')
                : Actions.ShoppingCart();
            }}>
            <View
              style={{
                borderRadius: 40,
                borderColor: config.LightGray,
                borderWidth: 1,
                backgroundColor: config.DarkBlue,
              }}>
              <Text
                style={{
                  fontFamily: config.SpashTitleFontFamily,
                  color: config.White,
                  fontSize: config.fontSmall,
                  textAlign: 'justify',
                  alignSelf: 'center',
                }}>
                {count}
              </Text>
            </View>

            <Icon1
              name="shopping-cart"
              color={config.DarkGray}
              size={25}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </Right>
    </Header>
  );
}

const styles = Style.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    height: '80%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontFamily: config.SpashTitleFontFamily,
    color: config.DarkGray,
    fontSize: config.fontExtraSmall,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    textShadowRadius: 0,
  },
  modalTextInner: {
    fontFamily: config.SpashTitleFontFamily,
    color: config.DarkGray,
    fontSize: config.fontExtraSmall,
    marginBottom: 15,
    marginLeft: 15,
    textAlign: 'left',
    textShadowRadius: 0,
  },
  modalTextInformation: {
    fontFamily: config.SpashTitleFontFamily,
    color: config.DarkGray,
    fontSize: config.fontSmall,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'left',
    textShadowRadius: 0,
  },
  modalTextInformationText: {
    fontFamily: config.SpashTitleFontFamily,
    color: config.DarkBlue,
    fontSize: config.fontSmall,
    marginBottom: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    textShadowRadius: 0,
  },
});
