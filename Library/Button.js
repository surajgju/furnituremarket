
import React, {Fragment} from 'react';
import StyleSheet from '../StyleSheet/StyleSheet';
import config from '../Helper/config'
import {
  TouchableOpacity,Text,View
  } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Button extends React.Component{

    render(){
        return(
      <View
      style={StyleSheet.Button}
      
      >
          <Text style={StyleSheet.ButtonText}>
          {this.props.buttonName}
          </Text>
     
      </View>
    
)
}
}