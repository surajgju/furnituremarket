import React from 'react';
import { StyleSheet,Text,View } from 'react-native'
import {Input,Icon,Button} from 'react-native-elements'

const Search = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={ styles.searchInput}>
       <Icon
       style={ styles.iconStyle}
      name="left"
      type='antdesign' 
      color='red'
      onPress={ ()=>navigation.goBack()}
      />
   <Input
    style={{ flex:1}}
    placeholder={'search'}
           /> 
           </View>  
           </View>
                    
    )
}
const styles = ()=>StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10   
    },
    searchInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        margin: 10
    },
    iconStyle:{
        padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
    }


})
export default Search

/*
<Icon
      name="left"
      type='antdesign' 
      color='red'
      />

      */