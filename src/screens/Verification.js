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
import StyleSheet from '../StyleSheet/StyleSheet';
import TextInput from '../Library/TextInput'
import Button from '../Library/Button'
import Spinner from 'react-native-spinkit';
import HeaderBack from '../Library/HeaderBack'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';
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

export default function LoginScreen (props) {

    const [email, setEmail] = useState('');
    const [isVisible, setisVisible] = useState(false);
    const [password, setpassword] = useState('');
    const [EnteredOtp, setEnteredOtp] = useState('');
    const [CustomerData, setCustomerData] = useState([]);
    const [ResendCount, setResendCount] = useState(0);
    const [MailerOtp, setMailerOtp] = useState('');
    const [isFetching, setIsFetching] = useState(false);






    useEffect(() => {
        const abortController = new AbortController();
        DataFunction()
        return () => { abortController.abort(); }

    }, [])

    async function DataFunction() {

        AsyncStorage.getItem('@CustormerRegister').then(data => {
            var customer = JSON.parse(data)
            if (customer != null) {
                setCustomerData(customer)
                setMailerOtp(customer.otp)
            }


        })
    }



    function Save() {
        if (EnteredOtp != '') {
           setIsFetching(true)
            PostApiCall.postRequest({
                name: CustomerData.name,
                email: CustomerData.email,
                mobile: CustomerData.mobile,
                password: CustomerData.password,
                gender: CustomerData.gender,
                dob: CustomerData.dob,
                age: CustomerData.age,
                source: CustomerData.source,
                login_type: CustomerData.login_type,
                updated_on: CustomerData.updated_on,
                updated_by: CustomerData.updated_by
            }, "RegisterCustomer").then((results) =>
                results.json().then(obj => {
                    if (results.status == 200 || results.status == 201) {
                        PostApiCall.postRequest({
                            name: CustomerData.name,
                            email: CustomerData.email,
                        }, "CustomerRegistraionMailer").then((results1) =>


                            results1.json().then(obj1 => {


                                if (results1.status == 200 || results1.status == 201) {

                                    setIsFetching(false)

                                    // Alert.alert('You are successfully registered with BeatMySugar.');

                                    Alert.alert(
                                        'Success',
                                        'You are successfully registered .',
                                        [
                                          {text: 'OK', onPress: () => {

                                            AsyncStorage.removeItem('@CustormerRegister')

                                            Actions.login();
                                        }
                                        },
                                        ],
                                        {cancelable: false},
                                      );

                              





                                }
                            }))

                    }


                }))


        } else {
            Alert.alert('Please enter OTP to Register.');
        }


    }




    function Resend() {
        setIsFetching(true)
        if (ResendCount > 3) {
            setIsFetching(false)
            Alert.alert('You exceeded the limit to resend OTP.');

        } else {
            setIsFetching(true)
            var random = Math.floor(100000 + Math.random() * 900000)

            PostApiCall.postRequest({

                name: CustomerData.name,
                email: CustomerData.email,
                otp: random


            }, "VerifyMailMailer").then((results2) =>

                // const objs = JSON.parse(result._bodyText)
                results2.json().then(obj2 => {


                    if (results2.status == 200 || results2.status == 201) {

                    
                            setResendCount(ResendCount + 1)
                            setMailerOtp(random)
                            setIsFetching(false)
                    }
                }))
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
                            <View style={[StyleSheet.LoginTopView, { marginBottom: hp('2%') }]}>
                                <Image source={require('../images/logo.png')} style={{
                                    height: hp('14%'),
                                    width: wp('32%'),
                                    marginTop: hp('2%'),
                                    resizeMode: 'contain',
                                    alignSelf: 'center'
                                }}></Image>

                            </View>


                            <View style={[StyleSheet.LoginMainView, { marginTop: Platform.OS == 'ios' ? hp('4%') : hp('5%') }]}>
                                <Text style={{ fontFamily: config.SpashTitleFontFamily, color: config.TextTitle, fontSize: config.fontNormalplusone, marginLeft: hp('1.5%'), marginRight: hp('1%'), marginTop: hp('0.5%'), textAlign: 'auto', textShadowRadius: 0, alignSelf: 'center' }}>Enter One Time Password (OTP)</Text>
                                <Text style={{ fontFamily: config.SpashTitleFontFamily, color: config.TextSubTitle, fontSize: config.fontNormal, marginLeft: hp('1.5%'), marginRight: hp('1%'), marginTop: hp('0.5%'), textAlign: 'auto', textShadowRadius: 0, alignSelf: 'center' }}>One Time Password (OTP) has been sent to your email {CustomerData.email} Please enter the same to reset your password.</Text>

                                <CodeInput
                                
                                    className={'border-circle'}
                                    keyboardType={'number-pad'}
                                    space={10}
                                    codeLength={6}
                                    size={50}
                                    inputPosition='center'
                                    activeColor='blue'
                                    inactiveColor='#bdbdbd'
                                    onFulfill={(code) => setEnteredOtp(code)}
                                />




                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity style={StyleSheet.LoginButtonMargin}
                                      onPress={()=>Save()}
                                    >
                                        <Button buttonName='Register with us'  >
                                        </Button>
                                    </TouchableOpacity>
                                </View>


                                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>


                                    <View style={{ width: wp('80%'), height: hp('5%'), flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity
                                        onPress={()=>Resend()}
                                        >
                                            <Text style={StyleSheet.ForgotPassText}>Resend OTP</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>

                    </View>

                </ScrollView>
            </View>
        );
    }

}

