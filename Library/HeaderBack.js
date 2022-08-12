
import React, {Fragment} from 'react';
import StyleSheet from '../StyleSheet/StyleSheet';
import config from '../Helper/config'
import {
  TouchableOpacity,Image
  } from 'react-native';
  import { List, ListItem, Container, Content, Header, Title, Body, Text,Left,Right } from 'native-base';
  import {widthPercentageToDP as wp, 
    heightPercentageToDP as hp, 
  } from 'react-native-responsive-screen';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';

import { Actions } from 'react-native-router-flux';


export default class HeaderBarBack extends React.Component{

    render(){
        return(
          
            <Header style={StyleSheet.HeaderMainView }>
        
              <Left>
                <TouchableOpacity onPress={()=>{
                 Actions.pop()
                }}>
                {/* <Image source={require('../images/orange_over.png')} style={StyleSheet.HeaderLeftImage}></Image>   */}
             <IconLine name={'arrow-left'} style={StyleSheet.HeaderBackIcon}> </IconLine>
             </TouchableOpacity>
              </Left>
       
              <Right>
              {/* <Image source={require('../images/rider-logo1.png')}></Image> */}
                  </Right>
            </Header>
 
    
)
}
}