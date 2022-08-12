import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'


const Advertisement1 = (props) => {
  return (

    <View style={styles.container}>
      <Image style={{width:400}} source={require('@assets/ad1.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom:4,
    marginLeft:2,
    height:140,
    width:410

  }
})

export default Advertisement1;