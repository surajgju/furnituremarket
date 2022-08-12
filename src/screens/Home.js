import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Image, Dimensions, Alert } from 'react-native';
//import NavigationHeader from '../component/drawer';
//import { Icon, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
//import FooterMain from '../component/footer';
import CommonHeader from '@src/component/header';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import Body from '@src/component/homeScreenComponent/Body'
import { Button} from 'react-native-elements'
//import ProfileScreen from '../screens/Profile'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'sofa',
    imageUri: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
    title: 'cafe furniture',
    imageUri: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: '58694a0f-31-471f-bd96-145571e29d72',
    title: 'chair',
    imageUri: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  },
  {
    id: 'd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
    title: 'sofa',
    imageUri: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: '3ac8afc-c605-48d3-a4f8-fbd91aa97f3',
    title: 'cafe furniture',
    imageUri: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "
  },
  {
    id: '58694a0f-a1-471f-bd96-15571e29d72',
    title: 'chair',
    imageUri: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  },
  {
    id: 'bd7acbea-c1b1-46c2-a5-3ad53abb28ba',
    title: 'sofa',
    imageUri: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3ac68fc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'cafe furniture',
    imageUri: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: '58694a0f-3da1-471f-b6-14557129d72',
    title: 'chair',
    imageUri: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  },
];

const HomeScreen = ({ navigation }) => {


  return (<View>
    <SafeAreaView >
    <CommonHeader onPress={() => navigation.toggleDrawer()} 
       onSearchIconPress={ () => navigation.navigate('Home',{screen:'SearchScreen'})} 
       onCartIconPress={ () => navigation.navigate('Home',{screen:'SearchScreen'})}
     
       />
      
      <Body 
       ProductCategoryFirstOnPress={()=>navigation.navigate('Home',{screen:'CategoryDetails'})} 
       ProductCategorySecondOnPress={()=>navigation.navigate('Home',{screen:'CategoryDetails'})}
       TopSellingProductsOnPress={()=>navigation.navigate('Home',{screen:'ProductDetails'})}
       CameraOnPress={()=>alert('InViewRoomPressed')}
       />

    </SafeAreaView></View>
  );
}
export default HomeScreen