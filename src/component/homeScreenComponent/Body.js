import React from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    Platform, Dimensions
} from 'react-native'
import CardView from 'react-native-cardview';

import Banner from './Banner'
import TopSellingProducts from './TopSellingProducts'
import ProductCategory from './ProductCategory'
import  Advertisement1   from '@src/component/homeScreenComponent/Advertisement1'
import  Advertisement2   from '@src/component/homeScreenComponent/Advertisement2'
import Camera from './Camera'
import ShopByStyle from './ShopByStyle'
import Blogs from './Blog'
import CustomerReview from './CustomerReview'
import TopMenu from '@src/component/homeScreenComponent/TopMenu.js'
const Swidth = Dimensions.get('screen').width;
const Sheight = Dimensions.get('screen').height;







const Body = ({BannerOnPress,TopSellingProductsOnPress,
    ProductCategoryFirstOnPress,ProductCategorySecondOnPress,Advertisement1OnPress,
     ShopByStyleOnPress,BlogsOnPress,Advertisement2OnPress,
     CustomerReviewOnPress,CameraOnPress}) => {
    return (
        <ScrollView 
         showsVerticalScrollIndicator={false} >
             <TopMenu style={styles.TopMenuStyle} />
            <Banner style={ styles.BannerStyle} />
        
                <Text style={styles.InsideText}> TOP SELLING PRODUCTS  </Text>
          
            <TopSellingProducts style={styles.TopSellingStyle} TopSellingProductPress={TopSellingProductsOnPress} />

            
             <Text style={styles.InsideText}>  PRODUCT CATEGORY </Text>

             <ProductCategory categoryFirstDetail={ProductCategoryFirstOnPress} categorySecondDetail={ProductCategorySecondOnPress} />
             <Advertisement1 Advertisement1Press={Advertisement1OnPress} />

            {/* <View style={styles.MainContainer}>
             <CardView
             cardElevation={5}
             cardMaxElevation={5}
             cornerRadius={5}
             style={styles.cardViewStyle}>
             <Text style={styles.cardView_InsideText}> Christmas Sale! Enjoy Up To 55% off! Use Code "CHRISTMAS20" To Get Extra 20% off. </Text>
             </CardView>
         </View> */}



                <Text style={styles.InsideText}> SHOP BY ROOM </Text>
            <ShopByStyle style={ styles.ShopByStyle} shopByStylePress={ShopByStyleOnPress} />
                <Text style={styles.InsideText}>  BLOGS</Text>
            <Blogs blogsPress={BlogsOnPress} />

            <Advertisement2 Advertisement2Press={Advertisement2OnPress} />

            <Text style={styles.InsideText}> CUSTOMER REVIEWS  </Text>
            <CustomerReview CustomerReviewPress={CustomerReviewOnPress} />





                <Text style={styles.InsideText}> IN YOUR ROOM  </Text>
                <Camera CameraPress={CameraOnPress} />




        </ScrollView>
    );
}



const styles = StyleSheet.create({
    rectangle: {
        fontFamily:"open-serif",
        marginTop: 10,
        width: 450,
        height: 200,
    },
    ScrollViewStyle:  {
         marginLeft: 2,
        // marginRight: 1,
        //scrollEnabled: toScroll
        
    },
    
    TopMenuStyle:{
        fontFamily:"open-serif",
        paddingTop:Sheight/200,
        marginVertical:Sheight/100
    },
    BannerStyle:{
        fontFamily:"open-serif",
      //  marginBottom:Sheight/100
    },
    TopSellingStyle:{
        fontFamily:"open-serif",

    },
    ShopByStyle:{

    },


    cardViewStyle: {
        fontFamily:"open-serif",
        width: 450,
        height: 70,

    },

    cardView_InsideText: {
        fontFamily:"open-serif",
        fontSize: 15,
        color: '#a91d20',
        textAlign: 'center',
        marginTop: 15,
        marginLeft: 15

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

    //#00a3de


})

export default Body