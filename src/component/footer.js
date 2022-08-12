import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon} from 'react-native-elements';
import AboutScreen from '@src/screens/Aboutus';
import HomeScreen from '@src/screens/Home';
import WishListScreen from '@src/screens/Wishlist';
import MyOrderScreen from '@src/screens/MyOrder';
import NotificationScreen from '@src/screens/Notification';
import Routes from '@src/component/router';

//import ProfileScreen from '@src/screens/Profile';
import MoreScreen from '@src/screens/More';
import { SafeAreaView } from 'react-native';
//import NavigationDrawer from '@src/component/drawer'
import CategoryDetails from '@src/screens/CategoryDetails';

const Footer = createBottomTabNavigator();

const FooterMain= ({navigation})=>{
    return(
       
        <Footer.Navigator initialRouteName="Home"
       //  backBehavior={'initialRoute'} 
         detachInactiveScreens={true}
         tabBarOptions={{ labelStyle:{
             fontSize:10,
             marginBottom:5,
             fontWeight:'bold'
         },
         activeBackgroundColor:"#0D5395",
         activeTintColor:'white',inactiveTintColor:'#f18721'}} >
                <Footer.Screen name="Home" component={Routes} 
             options={{ tabBarIcon:()=>(<Icon name="home" type="font-awesome" color="#f18721"  />)}}
            />
            {/* <Footer.Screen name="Home" component={HomeScreen} 
            options={{tabBarLabel:"Home",  activeTintColor:'white',tabBarIcon:({tintColor})=>(<Icon name="home" type="font-awesome" color="#f18721" />)}} /> */}
            <Footer.Screen name="My Orders" component={MyOrderScreen} 
            options={{ tabBarIcon:()=>(<Icon name="archive" type="entypo" color="#f18721" />)}}  />
            <Footer.Screen name="Wishlist" component={WishListScreen} 
            options={{ tabBarIcon:()=>(<Icon name="heart-multiple" type="material-community" color="#f18721" />)}} />
            <Footer.Screen name="Notification" component={NotificationScreen} 
            options={{ tabBarIcon:()=>(<Icon name="android-messages" type="material-community"  color="#f18721" />)}} />
         
         {/* <Footer.Screen name="Routes" component={Routes} 
             options={{ tabBarIcon:()=>(<Icon name="more" type="material" color="#f18721"  />)}}
            /> */}
                       <Footer.Screen name="More" component={MoreScreen} 
            options={{ tabBarIcon:()=>(<Icon name="more" type="material" color="#f18721"  />)}} />

             
           
        
        </Footer.Navigator>
    )
}
export default FooterMain