import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import CommonHeader from '@src/component/header'

const AboutScreen =({navigation})=>{
    return(
<>
<CommonHeader onPress={() => navigation.toggleDrawer()} />

<Text style={styles.text}> furniture</Text>
<Text style={styles.text}> furniture</Text>
<Text style={styles.text}> furniture</Text>
<Text style={styles.text}> furniture</Text>
<Text style={styles.text}> furniture</Text>
<Text style={styles.text}> furniture</Text>
<Text style={styles.text}> furniture</Text>


</>
        )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //  justifyContent:"center",
      // alignItems:"center"
    },text:{
      fontSize:30,
      color:'#00a3de'
    }
  })
  
export default AboutScreen