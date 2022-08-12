import React, { useState, useEffect } from 'react';
import {
    Platform,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    StatusBar
} from 'react-native';
//import StyleSheet from '../StyleSheet/StyleSheet';

import TextInput from '../Library/TextInput'
import Button from '../Library/Button'
import Spinner from 'react-native-spinkit';
import HeaderBack from '../Library/HeaderBack'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import { Actions } from 'react-native-router-flux';
import PostApiCall from '../PostApiCall'
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment'
import { ScrollView } from 'react-native-gesture-handler';
import CodeInput from 'react-native-confirmation-code-input';




const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var done = 'no'

export default function Home(props) {

    const [isVisible, setisVisible] = useState(false);
    const [password, setpassword] = useState('');
    const [confpassword, setconfpassword] = useState('');
    const [EnteredOtp, setEnteredOtp] = useState('');
    const [CustomerData, setCustomerData] = useState('');
    const [ResendCount, setResendCount] = useState(0);
    const [MailerOtp, setMailerOtp] = useState('');
    const [isFetching, setIsFetching] = useState(false);






    useEffect(() => {
        const abortController = new AbortController();
        DataFunction()
        return () => { abortController.abort(); }

    }, [])

    async function DataFunction() {

        AsyncStorage.getItem('@OTPForgot').then(data => {
            var customer = JSON.parse(data)
            if (customer != null) {
                setCustomerData(customer.email)
                setMailerOtp(customer.otp)
            }


        })
    }








 function ResetPass(){

        if(password != ''){
            if(confpassword != ''){
                if(password == confpassword){

                    setIsFetching(true)
    
                            PostApiCall.postRequest({
    
                                 
                                    email : CustomerData,
                                    password : password,
                                    
                                 
                                 },"UpdateCustomerPassword").then((results) => 
                                 
                                  
                                   results.json().then(obj => {
                 
                                 
                                   if(results.status == 200 || results.status == 201){
                                    setIsFetching(false)
                                   Alert.alert(
                                    'Success',
                                    'You password has been successfully recovered.',
                                    [
                                      {text: 'OK', onPress: () => {
                                        AsyncStorage.removeItem('@OTPForgot')  
                                        Actions.login()}},
                                    ],
                                    {cancelable: false},
                                  );

                   

                       }
    
    
                    }))


                }else{
                    Alert.alert('Password Mismatch.'); 
                }
            }else{
                Alert.alert('Please enter Confirm Password.');  
            }

        }else{
            Alert.alert('Please enter New Password.'); 
        }
    }







    if (isFetching) {
        return (
            <View style={{ backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <ActivityIndicator animating={true} />
            </View>
        );
    } else {

        return (

            <View style={StyleSheet.ProfileMainContainer}>
                <HeaderBack></HeaderBack>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >

                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                    }}>

                        <View style={StyleSheet.SplashContainer}>
          


                            <View style={[StyleSheet.LoginMainView, { marginTop: Platform.OS == 'ios' ? hp('4%') : hp('5%') }]}>
                                <Text style={{ fontFamily: config.SpashTitleFontFamily, color: config.TextTitle, fontSize: config.fontNormalplusone, marginLeft: hp('1.5%'), marginRight: hp('1%'), marginTop: hp('0.5%'),marginBottom:hp('2%') ,textAlign: 'auto', textShadowRadius: 0, alignSelf: 'center' }}>Reset your password</Text>
                                <Text style={StyleSheet.TrackerHeadingText}>Password</Text>

<TextInput style={StyleSheet.ProfileAddressText}
//  secureTextEntry = {true}
 keyboardType="default"
 value={password}
 onChangeText={text => setpassword(text)}

  />


<Text style={StyleSheet.TrackerHeadingText}>Confirm Password</Text>

<TextInput style={StyleSheet.ProfileAddressText}
 secureTextEntry = {true}
 keyboardType="default"
 value={confpassword}
 onChangeText={text => setconfpassword(text)}

  />



                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity style={StyleSheet.LoginButtonMargin}
                                      onPress={()=>ResetPass()}
                                    >
                                        <Button buttonName='Save'  >
                                        </Button>
                                    </TouchableOpacity>
                                </View>


            
                            </View>
                        </View>

                    </View>

                </ScrollView>
            </View>
        );
    }

}

