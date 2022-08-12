import React, { useState } from 'react'
import { StyleSheet, TouchableNativeFeedback, View, Text, Modal, TouchableOpacity,Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import { ListItem } from 'react-native-elements';
//import { NavigationContainer} from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import FooterMain from '@src/component/footer';
import HomeScreen from '@src/screens/Home';
import AboutScreen from '@src/screens/Aboutus';
//import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Collapse, CollapseBody, CollapseHeader, AccordionList } from 'accordion-collapse-react-native';
import Search from '@src/screens/Search'
import ProfileScreen from '@src/screens/Profile'
import CategoryDetailScreen from '@src/screens/CategoryDetails'
//import ProductDetailScreen from '@src/screens/ProductDetails'
 import Routes from '@src/component/router'

// const LoginStack=()=>{
//     return(<></>)
// }
const listMain = [{
    id: 1,
    title: 'Sofas ',
    body: "Sofa",
    armchair: "armchair",
    bassinet: "bassinet",
    deck: "deck",
    cabinet: "cabinet",



},
{
    id: 2,
    title: 'Furniture',
    body: 'gateleg table',
    armchair: "armchair",
    bassinet: "bassinet",
    deck: "deck",
    cabinet: "cabinet",
},
{
    id: 3,
    title: 'Table',
    body: 'bassinet',
    armchair: "armchair",
    bassinet: "bassinet",
    deck: "deck",
    cabinet: "cabinet",
},
{
    id: 4,
    title: 'Chairs',
    body: 'deck',
    armchair: "armchair",
    bassinet: "bassinet",
    deck: "deck",
    cabinet: "cabinet",
},
{
    id: 5,
    title: 'Glider rocker',
    body: 'cabinet',
    armchair: "armchair",
    bassinet: "bassinet",
    deck: "deck",
    cabinet: "cabinet",
},
{
    id: 6,
    title: 'Rounded Chairs',
    body: 'cabinet',
    armchair: "armchair",
    bassinet: "bassinet",
    deck: "deck",
    cabinet: "cabinet",
},
{
    id: 7,
    title: 'Hammock',
    body: 'cabinet',
    armchair: "armchair",
    bassinet: "bassinet",
    deck: "deck",
    cabinet: "cabinet",
}
];
function _head(item) {
    return (
        <ListItem bottomDivider  >
            <ListItem.Content >
                <ListItem.Title style={styles.LT1}>{item.title} </ListItem.Title>

            </ListItem.Content>
            <ListItem.Chevron color="black" />

        </ListItem>

    )
}
function _body(item) {
    return (
        <ListItem >
            <ListItem.Content style={{ marginVertical:"-6%"}}>
                <ListItem.Title style={styles.LT2} >{item.body}</ListItem.Title >
                <ListItem.Title style={styles.LT2} >{item.armchair}</ListItem.Title >
                <ListItem.Title style={styles.LT2} >{item.bassinet}</ListItem.Title >
                <ListItem.Title style={styles.LT2} >{item.deck}</ListItem.Title >
                <ListItem.Title style={styles.LT2} >{item.cabinet}</ListItem.Title >
                <ListItem.Title style={styles.LT2} >{item.body}</ListItem.Title>
            </ListItem.Content>
        </ListItem>

    )
}

const BaseDrawerNavigation = createDrawerNavigator();
const NavigationDrawer = ({ navigation }) => {

    return (
        <NavigationContainer>
        <BaseDrawerNavigation.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
              //  activeTintColor: "white",
                activeBackgroundColor:'#f18721',
}} >

            <BaseDrawerNavigation.Screen
             name="FooterMain"
             component={FooterMain}
             options={{ 
                 drawerLabel:()=>{
                      return( <View>
                          <Text style={{ color:'white',
                          fontSize:19,fontWeight:'bold'}}>
                               Product Categories</Text></View>)} }}
              />
                       

        </BaseDrawerNavigation.Navigator>
        </NavigationContainer>

    )
}

function CustomDrawerContent(props) {
    const [drawerListItems, setListItem] = useState(null)
    const defaultList = ["Furniture", "Beds", "Table", "Chair", "almera", "sofa", "chairAgain"];

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList  {...props} />
            <AccordionList
      //      style={{ marginTop:"-14%"}}
                list={listMain}
                header={_head}
                body={_body}
                keyExtractor={item => `${item.id}`}
            />
            <View>
                <Text style={ styles.EmailPlace}>Email</Text>
                <Text style={ styles.EmailStyle}>Quickfurn@gmail.com</Text>
                <Text style={ styles.PhoneNumPlace }>Phone Number</Text>
                <Text style={ styles.PhoneNum}>+91 9840093858</Text>

            </View>
            <View style={ styles.SocialContainer}>
                <Icon
                style={{marginStart:15,
                    marginTop:20,
                    }}
                name="facebook-with-circle"
                type="entypo"
                color="#3b5998"
                size={40}
                />
                <Icon
                style={{marginStart:15,
                    marginTop:20,
                     }}
                name="twitter-with-circle"
                type="entypo"
                color="#1da1f2"
                size={40}

                />
                <Icon
                style={{marginStart:15,
                    marginTop:20,
                    }}
                name="instagram-with-circle"
                type="entypo"
                color="#DD2A7B"
                size={40}

                />
                <Icon
                style={{marginStart:15,
                    marginTop:20,
                    }}
                name="linkedin-with-circle"
                type="entypo"
                color="#0a66c2"
                size={40}

                />
                            
            </View>
        </DrawerContentScrollView>
    )
}
// testdata
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    
    header: {
        height: 100
    },
    LT1: {
        fontFamily: 'sans-serif',
        fontSize: 18,

    },
    LT2: {
        width: '93%',
        paddingVertical: "3%",
        color: '#777',
        fontSize: 18,
        paddingStart: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dbdbdb',
        fontFamily: 'sans-serif'
    },
    SocialContainer:{ 
    alignItems:"center" ,
    flexDirection:'row',
    marginStart:15 
    },
    EmailPlace:{
    fontSize:18,
    marginStart:wp(5),
    marginTop:hp(2),
    fontWeight:'bold'

    },
    EmailStyle:{
        fontSize:16,
        marginStart:wp(5),
        marginTop:hp(1),
        color:'#f18721'
    },
    PhoneNumPlace:{
        fontSize:18,
        marginStart:wp(5),
        marginTop:hp(1.5),
        fontWeight:'bold'
    },
    PhoneNum:{
        fontSize:16,
        marginStart:wp(5),
        marginTop:hp(1),
        color:'#f18721'



    }
    
    


})
export default NavigationDrawer