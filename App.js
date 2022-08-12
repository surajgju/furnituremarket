import 'react-native-gesture-handler';
import  React,{useEffect, useState} from 'react';
import {StyleSheet, } from 'react-native';
import NavigationDrawer from './src/component/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native'
//import FooterMain from './src/component/footer';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/screens/Login';
import Signup from './src/screens/SignUp';

const Credentials={ username: "suraj", Password:"12345"};
const RootStack = createStackNavigator();
const App= () => {
   const [Login, setLogIn] = useState(false)
  useEffect(() => {
    SplashScreen.hide();
  }, []);
const LoginFunction =()=>{
  
  setLogIn(true)
}

const Authentication=({navigation})=>{
  return(
    <LoginScreen  LogOutChange={LoginFunction} onSignUpPress={()=>navigation.navigate('signup')} />
  )
}

 if(Login==true){
  return (
    // <NavigationContainer >
    
    //      <RootStack.Navigator screenOptions={{  headerShown:false}}>
    //        <RootStack.Screen  name="drawer"  component={NavigationDrawer} />
    //      </RootStack.Navigator>
    // </NavigationContainer>

      <NavigationDrawer />

  );
 }else{
  return( 
    <NavigationContainer >
    <RootStack.Navigator screenOptions={{  headerShown:false}}>
      <RootStack.Screen name="login" component={Authentication}    />
      <RootStack.Screen name="signup" component={Signup}    />

    </RootStack.Navigator>
    </NavigationContainer>

     )
 }
  
};


const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  },
  text:{
    fontSize:20,
    backgroundColor:"red"
  }
});
export default App
