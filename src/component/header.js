import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProfileScreen from '../screens/Profile'
//import { useNavigation } from '@react-navigation/native';
// const orange = '#f18721'
// const blue = '#0D5395'
const CommonHeader = (props) => {
  const [visible, setVisible] = useState(false);
  const toggleProfile = () => {
    setVisible(!visible)
  }

  //   const navigation = useNavigation();
  return (
    <View>

      <Header containerStyle={{ backgroundColor: 'white', marginTop: hp('.1') }} placement="left">
        <View style={{ flexDirection: "row", alignItems: "center" }} >
          <TouchableOpacity onPress={props.onPress} >
            <Icon
              size={35}
              name='menu'
              type='feather'
              color='#f18721'
            /></TouchableOpacity>

        </View>
        <Image style={{ width: 100, marginTop: 5, marginStart: -5 }}
          source={require("@assets/furnMarts.jpg")}
          resizeMode={'contain'}
        />

        <Text style={{ letterSpacing: 20, fontSize: 10, alignSelf: 'flex-end' }} >
          <Icon
            name='search'
            type='font-awesome'
            color='#f18721'
            onPress={props.onSearchIconPress}
          /> <Icon
            name='cart'
            type='material-community'
            color='#f18721'
            onPress={props.onCartIconPress}

          /> <Icon
            name='user'
            type='font-awesome'
            color='#f18721'
            onPress={toggleProfile}

          /></Text>

      </Header>
      <Overlay isVisible={visible} onBackdropPress={toggleProfile} overlayStyle={{ borderRadius: 10 }}>
        <ProfileScreen />
      </Overlay>
    </View>
  )
}







export default CommonHeader