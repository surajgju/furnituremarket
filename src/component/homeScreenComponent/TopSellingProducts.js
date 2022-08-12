import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import CardView from 'react-native-cardview'
import { useNavigation } from '@react-navigation/native';
// import FastImage from 'react-native-fast-image'

const Furniture = [

  {
    "id": "1",
    "name": "3 Seater Sofa",
    "src": require('@assets/sofa.jpg'),
  },

  {
    "id": "2",
    "name": "King Sized Bed",
    "src": require('@assets/bed.jpg'),
  },

  {
    "id": "3",
    "name": "Dining Table",
    "src": require('@assets/table.jpg'),

  },

  {
    "id": "4",
    "name": "3 Seater Sofa",
    "src": require('@assets/book_storage.jpg'),

  },

  {
    "id": "5",
    "name": "King Sized Bed",
    "src": require('../../../assets/home.png'),

  },

  {
    "id": "6",
    "name": "Dining Table",
    "src": require('../../../assets/table.jpg'),

  },
]
const TopSellingProducts = () => {

 // const [isFetching, setIsFetching] = useState(false);
  const [data,setData] = useState([]);
  

  // useEffect(() => {
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



 

  return (
    <TouchableOpacity>
      <FlatList
        data={Furniture}
      //  data={data}
        
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (<CardFunc img={item.src} textName={item.name} key={index} />
        )}
      />
    </TouchableOpacity>
  );
}

const CardFunc = ({ img, key, textName,}) => {
  const navigation = useNavigation();
 
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity title="Next" onPress={() => {
         navigation.navigate('ProductDetails',{id:"2"})
         }}>
        <CardView
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={5}
          style={styles.cardViewStyle} >
          <Image source={img} style={styles.image} key={key} />
          <Text style={styles.cardView_InsideText}>{textName}</Text>
        </CardView>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView_InsideText:
  {
    fontFamily:"sans-serif-light",
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginTop: hp('1%'),


  },
  cardViewStyle: {
    fontFamily: "sans-serif",
    width: wp('32%'),
    height: hp('20%'),
    marginLeft: wp('3%'),
    marginTop:hp('1%'),
    marginBottom: 5

  },

  image:
  {
    width: wp('32%'),
    height: hp('15%')
  }
});

export default TopSellingProducts;