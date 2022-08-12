import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import { Card } from 'react-native-shadow-cards';
import StarRating from 'react-native-star-rating';
import FastImage from 'react-native-fast-image';
import { Actions } from 'react-native-router-flux';
//import AsyncStorage from '@react-native-community/async-storage'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
//import GetApiCall from '@GetApi';
//import CardView from 'react-native-cardview'


//   const CustomerReview = () => {
//   const [starCount, setStarCount] = useState([]);
//   const [CustomerReview, setCustomerReview] = useState([]);
//   const [isFetching, setIsFetching] = useState(false);

//   async function fetchData() {
//   const abortController = new AbortController();
//   setIsFetching(true);

//   GetApiCall.getRequest('GetCustomerDetails').then((results) => {
//     results
//       .json()
//       .then((data) => ({
//         data: data,
//         status: results.status,
//       }))
//       .then((res) => {
//         setCustomerReview(res.data.data);
//         setIsFetching(false);
//         abortController.abort();
//       });
//   });
// }

//  useEffect(() => {
//   const abortController = new AbortController();
//   if (Platform.OS == 'android') {
//     StatusBar.setBarStyle('light-content');
//   } else {
//     StatusBar.setBarStyle('dark-content');
//   }
//   fetchData();
//   return () => {
//     abortController.abort();
//   };
// }, []);

//   const truncate = (source, size) => {
//     return source.length > size ? source.slice(0, size - 1) + '…' : source;
//   };

// const customerReviewDetail = () => {
//   Actions.CustomerReviewDetail();
// };


//   return (
//     <FlatList showsHorizontalScrollIndicator={false} horizontal={true}
//       data={CustomerReview}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item, index }) =>
//       (<Card
//         img={item.Request}
//         textName={item.Title}
//         key={index}
//       />)}
//     />

//   )
// }


// const Card = ({ roomType, textName, key, img }) => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.MainContainer}>
//       <TouchableOpacity>
//         <CardView
//           cardElevation={5}
//           cardMaxElevation={10}
//           cornerRadius={5}
//           style={styles.cardViewStyle}>


//           <Image style={styles.reviewProfile}
//             //source={Request}
//             source={img}
//             key={key} />
//           <Text style={styles.cardView_InsideText}>{textName}</Text>
//           <View style={styles.StarRating}>
//             <StarRating
//               disabled={false}
//               maxStars={5}
//               starSize={20}
//               rating={this.state.starCount}
//               selectedStar={(rating) => this.onStarRatingPress(rating)}
//             />
//           </View>

//         </CardView>
//       </TouchableOpacity>
//     </View>
//   )
// }



export default class CustomerReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
      // data:'',
    };
  }
//   componentDidMount = () => {
//     fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/16/lat/58/data.json',{
//        method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//        console.log(responseJson);

//        this.setState({
//           data: responseJson
//        })
//     })
//     .catch((error) => {
//        console.error(error);
//     });
//  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,

    });
  }

  render() {
    return (

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
        <Card elevation={1} style={styles.review}>

          <View
            style={{
              padding: 16,
              flexDirection: 'column',
              // marginTop: 20,
              justifyContent: 'center',
              //  alignItems: 'center',
            }}>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <FastImage style={styles.reviewProfile}
                source={{
                  uri: 'https://unsplash.it/400/400?image=9',
                }}
              // source={{
              //   uri: BlogDetail.fld_coverimage,
              //   headers: {Authorization: 'someAuthToken'},
              //   priority: FastImage.priority.high,
              // }}
              // resizeMode={FastImage.resizeMode.stretch}
              />
              {/* <Text
                    style={{
                      fontFamily: config.SpashTitleFontFamily,
                      color: config.TextTitle,
                      fontSize: config.fontNormalminusone,
                      marginLeft: hp('1.5%'),
                      marginRight: hp('1.5%'),
                      marginTop: hp('1.5%'),
                      textShadowRadius: 0,
                    }}>
                    {BlogDetail.fld_title}{' '}
                  </Text> */}
              <Text style={{ textAlign: 'center', marginLeft: 5, marginTop: 5 }}>
                Dedam
                </Text>
            </View>
          </View>


          <View style={styles.StarRating}>
            <StarRating disabled={false}
              maxStars={5}
              starSize={20}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
            />
          </View>
          <Text style={styles.customerReview}>

            {/* {this.state.data}  */}

            I personally recommed product from furniture marts. Its Good Products at resonable price
            I personally recommed product from furniture marts. Its Good Products at resonable price
            I personally recommed product from furniture marts. Its Good Products at resonable price
            I personally recommed product from furniture marts. Its Good Products at resonable price

          </Text>
        </Card>
      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  review: {
    padding: 10,
    width: wp('75%'),
    height: hp('38%'),
    marginBottom: 5,
    marginLeft: 7
  },

  reviewProfile: {
    width: 30,
    height: 30,
    borderRadius: 50
  },

  text:
  {
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 10,

  },
  StarRating:
  {
    width: wp('30%'),
    height: hp('3%'),
    marginTop: 10
  },

  customerReview:
  {
    fontFamily: 'open-serif',
    marginTop: 10,
    color: '#87868B',
  }
})


//export default CustomerReview;