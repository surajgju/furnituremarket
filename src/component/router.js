import * as React from 'react'
//import { View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import CategoryDetailScreen from '@src/screens/CategoryDetails';
import ProductDetails from '@src/screens/ProductDetails/ProductDetails';
import ShoppingCart from '@src/component/ShoppingCart/ShoppingCart'
import Address from '@src/component/Address/Address'
import AddNewAddress from '@src/component/Address/AddNewAddress'
import Search from '@src/screens/Search';
import ProfileScreen from '@src/screens/Profile'
import MoreScreen from '@src/screens/More';
import HomeScreen from '@src/screens/Home'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = ({ navigation }) => {
    return (
        <Stack.Navigator backBehavior={'initialRoute'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MoreScreen" component={MoreScreen} />
            <Stack.Screen name="CategoryDetails" component={CategoryDetailScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
            <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
            <Stack.Screen name="SearchScreen" component={Search} />
            <Stack.Screen name="ProfileScreen" component={ProfileStack} />


        </Stack.Navigator>
    )
}
const ProfileStack = () => {
    return (
        <Stack.Navigator mode='modal' screenOptions={{ headerShown: false }} transparentCard={true}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}
export { ProfileStack }
export default Routes