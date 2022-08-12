import React, {Component} from 'react';
import {Animated, TouchableHighlight, View,transform,TouchableWithoutFeedback,Image,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../Helper/config'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const SIZE = 80;
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage'
import StyleSheet from '../StyleSheet/StyleSheet';

export default class AddButton extends Component {
    mode1 = new Animated.Value(0);
    toggleView1 = () => {
        Animated.timing(this.mode1, {
            toValue: this.mode1._value === 0 ? 1 : 0,
            duration: 200
        }).start();
    };

    mode2 = new Animated.Value(0);
    toggleView2 = () => {
        Animated.timing(this.mode2, {
            toValue: this.mode2._value === 0 ? 1 : 0,
            duration: 200
        }).start();
    };

    mode3 = new Animated.Value(0);
    toggleView3 = () => {
        Animated.timing(this.mode3, {
            toValue: this.mode3._value === 0 ? 1 : 0,
            duration: 200
        }).start();
    };
    render() {
        const firstX = this.mode1.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -40],
        });
        const firstY = this.mode1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });

        const secondX = this.mode2.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        });
        const secondY = this.mode2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55]
        });
        const thirdX = this.mode3.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 80]
        });
        const thirdY = this.mode3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });
        const opacity1 = this.mode1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        const rotation = this.mode1.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });

        const opacity2 = this.mode2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
     

        const opacity3 = this.mode3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
       
        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center',
              paddingBottom: widthPercentageToDP('10%')
            }}>
               
                

                
              
                <TouchableHighlight
                    onPress={()=>{this.toggleView1()
                        this.timeoutHandle = setTimeout(()=>{
                            this.toggleView2()
                            this.timeoutHandle = setTimeout(()=>{
                                this.toggleView3()
                            },300)
                        },300)
                        }}
                    underlayColor={config.LightBlue}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 2,
                        backgroundColor: config.White,
                        borderColor : config.White,
                        borderWidth : 3,
                    }}
                >
                    <Animated.View>
                        <Image source={require('../images/logo.png')} style={StyleSheet.HeaderLeftImage}></Image>  
                    </Animated.View>
                </TouchableHighlight>
            </View>
        );
    }
}
