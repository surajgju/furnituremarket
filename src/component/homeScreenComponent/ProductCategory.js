import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

const ProductCategory = ({ categoryFirstDetail, categorySecondDetail }) => {

    const [data,setData] = useState([]);


    // useEffect(() => {

    //     fetch('http://localhost:5000/FunMart/Product-category', {
    //         method: 'GET',
    //     }).then(res => res.json())
    //         .then((json) => setData(json.Products))
    //         .catch((error) =>alert(error))
            
    //                 console.warn(data)
    //         }
    //  );
    // const [isFetching, setIsFetching] = useState(false);
    // const [category,setCategory] = useState([]);
    // const [image, setImage] = useState([]);


    // useEffect(() => {
    //     const abortController = new AbortController();
   
    //     if (Platform.OS == 'android') {
    //       StatusBar.setBarStyle('light-content');
    //     } else {
    //       StatusBar.setBarStyle('dark-content');
    //     }
   //   fetchProductCategory();
    //     return () => {
    //       abortController.abort();
    //     };
    //   }, []);


//     fetchProductCategory(){
//     GetApiCall.getRequest('ProductCategoryList').then((resultdes) =>
//     resultdes.json().then((obj) => {
//       // console.log(obj.data)

//       if (JSON.stringify(obj.data) != '[]') {
//         var arr = [];
//         for (var i = 0; i < 12; i++) {
//           arr.push(obj.data[i]);
//           setBlog(arr);
//         }
//       }
//     }),
//   );}


    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <Category
                categoryFirstOnPress={categoryFirstDetail}
                categorySecondOnPress={categorySecondDetail}
                Request1={require('@assets/sofa.jpg')}
                Request2={require('@assets/bed.jpg')}
                text1bold={"Sofa"}
                text2bold={"Bed"}
                text1={"37 Pieces"}
                text2={"10 Pieces"}
            />
            <Category
                Request1={require('@assets/book_storage.jpg')}
                Request2={require('@assets/room1.jpg')}
                text1bold={"Book_Storage"}
                text2bold={"Kids_Furniture"}
                text1={"37 Pieces"}
                text2={"3 Pieces"}
            />
            <Category
                Request1={require('@assets/sofa.jpg')}
                Request2={require('@assets/bed.jpg')}
                text1bold={"Sofa"}
                text2bold={"Bed"}
                text1={"37 Pieces"}
                text2={"10 Pieces"}
            />
            <Category
                Request1={require('@assets/book_storage.jpg')}
                Request2={require('@assets/room1.jpg')}
                text1bold={"Book_Storage"}
                text2bold={"Kids_Furniture"}
                text1={"37 Pieces"}
                text2={"3 Pieces"}
            />
            <Category
                Request1={require('@assets/sofa.jpg')}
                Request2={require('@assets/bed.jpg')}
                text1bold={"Sofa"}
                text2bold={"Bed"}
                text1={"37 Pieces"}
                text2={"10 Pieces"}
            />
            <Category
                Request1={require('@assets/book_storage.jpg')}
                Request2={require('@assets/room1.jpg')}
                text1bold={"Book_Storage"}
                text2bold={"Kids_Furniture"}
                text1={"37 Pieces"}
                text2={"3 Pieces"}
            />
        </ScrollView>
    )
}

const Category = ({ Request1, Request2, text1bold, text2bold, text1, text2, categoryFirstOnPress, categorySecondOnPress }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
             <TouchableOpacity title="Next" onPress={() => { navigation.navigate('ProductDetails')}}>
            {/* <TouchableOpacity onPress={categoryFirstOnPress} > */}
                <View style={styles.ToStyle}>
                    <Image source={Request1} style={styles.imgStyle} />
                    <View style={styles.viewStyleBelowImg}>
                        <Text style={styles.textBold1}>{text1bold}</Text>
                        <Text style={styles.text2}>{text1}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={categorySecondOnPress}>

                <View style={styles.TO2Style}>
                    <Image source={Request2} style={styles.img2Style} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.textBold1}>{text2bold}</Text>
                        <Text style={styles.text2}>{text2}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: 
    {
        flexDirection: "column",
        //marginLeft:10,
        backgroundColor: "white",
        //borderRadius:5,
        //marginRight:10
    },

    ToStyle: 
    {
        flexDirection: "row",
    },

    imgStyle: 
    {
        width: wp('18%'),
        height: hp('9%'),
        marginTop: hp('1%'),
        marginLeft: wp('2%'),
        borderRadius: 5,
        // marginBottom:10
    },

    img2Style: 
    {
        width: wp('18%'),
        height: hp('9%'),
        marginTop: hp('1%'),
        marginLeft: wp('2%'),
        borderRadius: 5,
        marginBottom:  hp('1%'),
    },

    textBold1: {
        fontSize: 15,
        // fontFamily:"sans-serif",
        //fontWeight:"bold",
        marginTop: 5,
        color: '#333333',
        // marginLeft:5,
        padding: 10
    },

    text2: 
    {
        //fontFamily:"sans-serif-light",
        marginTop: 10,
        color: '#333333',
        marginLeft: 10,
        flexDirection: 'row-reverse',
        padding: 10,
        fontSize: 14
        // marginLeft:5
    },

    viewStyleBelowImg:
    {
        flexDirection: "column"
    },

    TO2Style: 
    {
        flexDirection: "row",
        marginTop: 5
    },

    text2boldStyle:
    {
        fontWeight: "bold",
        marginTop: 10
    }

})

export default ProductCategory




