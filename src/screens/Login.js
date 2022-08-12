import React, { useState, useEffect } from 'react';
import {
    Platform,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    StatusBar,
    ActivityIndicator,
    StyleSheet,
    TextInput
} from 'react-native';
import Style from '../../Styles/StyleSheet'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
//import ForgetPasswordScreen from '../screens/ForgetPassword'
//import TextInput from '../Library/TextInput';
//import Button from '../Library/Button';
//import config from '../Helper/config';
//import PostApiCall from '../PostApiCall';
//import AsyncStorage from '@react-native-community/async-storage';
//import moment from 'moment';
//import {ScrollView} from 'react-native-gesture-handler';
//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// const validateEmail = (email) => {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// };


const credentialCheck = () => {

    if (email == temporaryData.email && password == temporaryData.password) {
        // console.warn(email+"  "+password)
        // alert('access granted')
        grantAccess(true)

    } else if (email == '' || email == null) {
        console.warn('email is empty')
    } else if (password == '' || email == null) {
        console.warn('enter password ')
    } else {
        console.warn('credentials does not match')
    }

}

const LoginScreen = ({ LogOutChange, navigation, onSignUpPress, props }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFetching, setIsFetching] = useState(false);


    const Recover = () => {
        setIsFetching(true);

        if (email !== '') {
            var random = Math.floor(100000 + Math.random() * 900000);

            PostApiCall.postRequest(
                {
                    email: email,
                    otp: random,
                    // mobileNumber: mobileNumber
                },
                'ForgotPasswordMailer',
            ).then((results2) =>
                results2.json().then((obj2) => {
                    if (results2.status == 200 || results2.status == 201) {
                        const data = {
                            otp: random,
                            email: email,
                            // mobileNumber: mobileNumber
                        };

                        setIsFetching(false);
                        AsyncStorage.setItem('@OTPForgot', JSON.stringify(data));
                        Actions.forgotVerification();
                    }
                }),
            );
        } else {
            Alert.alert('Please enter your Email Address.');
            setIsFetching(false);
        }
        //  else {
        //     Alert.alert('Please enter your Mobile Number.');
        //     setIsFetching(false);
        // }

    };


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>

            <Image
                style={{
                    alignSelf: 'flex-end',
                    marginTop: -15,
                    marginEnd: -15,
                    width: wp('68%'),
                    height: hp('35%'),
                    resizeMode: 'cover'
                }}
                source={require('@assets/styleImage/loginTopStyle.png')}
            />


            <Image
                style={{
                    width: wp('35%'),
                    height: hp('8%'),
                    resizeMode: 'contain',
                    marginStart: '25%',
                    marginTop: '-22%'
                }}
                source={require('@assets/furnMarts.jpg')}
            />



            <View style={styles.textInputStyle}>
                <Text style={{ fontSize: 18, marginStart: '10%', fontWeight: 'bold' }}>Email id</Text>
                <TextInput
                    style={{
                        width: wp('80%'),
                        height: hp('6%'),
                        alignSelf: 'center',
                        backgroundColor: '#F2F2F2',
                        margin: 15,
                        //  elevation: 2,
                        //   borderColor: '#7a42f4',
                        //   borderWidth: 1
                    }}
                    //   placeholder={"  example@gmail.com"}
                    placeholder={"  example@gmail.com"}
                    onChangeText={email => setEmail(email)}
                    value={email}

                />
                <Text style={{
                    fontSize: 18,
                    marginStart: '10%',
                    marginBottom: '-2%',
                    fontWeight: 'bold'
                }}>Password</Text>
                <TextInput
                    style={{
                        width: wp('80%'),
                        height: hp('6%'),
                        alignSelf: 'center',


                        // width: '80%',
                        // height: 40,
                        //   borderRadius: 5,
                        marginTop: '5%',
                        backgroundColor: '#F2F2F2',

                        //  borderColor:'red',
                        //    borderWidth:0.1,
                        //  elevation: 2,
                    }}
                    placeholder={'    **********************'}

                    onChangeText={pass => setPassword(pass)}
                    value={password}



                />


                <Text style={{
                    fontSize: 18,
                    marginStart: '10%',
                    marginBottom: '-2%',
                    fontWeight: 'bold',
                    marginTop: 10
                }}>Mobile Number</Text>
                <TextInput
                    style={{
                        width: wp('80%'),
                        height: hp('6%'),
                        //   borderRadius: 5,
                        marginTop: '5%',
                        alignSelf: 'center',
                        backgroundColor: '#F2F2F2',

                        //  borderColor:'red',
                        //    borderWidth:0.1,
                        //  elevation: 2,
                    }}
                    placeholder={'   Enter Your Mobile Number  '}

                    onChangeText={text => setEmail(text)}

                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#f18721',
                        width: '80%',
                        height: '10%',
                        marginTop: '10%',
                        //  borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginStart: '10%'
                    }}
                    onPress={LogOutChange}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Recover()}>
                    <Text style={Style.ForgotPassText}>
                        Recover Password
                          </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ paddingEnd: '10%', marginTop: '2%' }}
                 onPress={() => alert('forget password')}>
                      <Text style={{ alignSelf: 'flex-end' }}>Forgot Password ?</Text>
                </TouchableOpacity> */}

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '20%' }}>
                    <Text> Don't have an account ?</Text><TouchableOpacity onPress={onSignUpPress}>
                        <Text style={{ marginStart: 5, color: 'red', fontWeight: 'bold' }}>Signup</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}



const styles = () => StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    textInputStyle: 
    {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 20
    }


})


export default LoginScreen