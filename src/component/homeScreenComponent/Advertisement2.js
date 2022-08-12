import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'


const Advertisement2 = () => {
  return (

    <View style={styles.container}>
      <Image  style={{width:400}}source={require('@assets/ad3.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    width:200

  }
})

export default Advertisement2 