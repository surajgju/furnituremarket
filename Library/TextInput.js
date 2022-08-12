
import React, {Fragment} from 'react';
import { Hoshi } from 'react-native-textinput-effects';
// import TextField from 'react-native-md-textinput';
import StyleSheet from '../StyleSheet/StyleSheet';
import config from '../Helper/config'

export default class TextInput extends React.Component{

    render(){
        return(
        <Hoshi
        label={this.props.label}
        borderColor={config.DarkBlue}
        secureTextEntry = {this.props.secureTextEntry}
        style={StyleSheet.TextFieldView}
        borderHeight={0.8}
        inputPadding={10}
        labelStyle={StyleSheet.TextInputLabelStyle}
        onChangeText={this.props.onChangeText}
      /> 
)
}
}