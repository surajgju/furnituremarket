import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import CommonHeader from '@src/component/header'

const moreItemList = [
  {
    icon: "dropbox",
    title: "My Orders",
    type: "zocial",
    color: "#f18721"
  }, {
    icon: "location-arrow",
    title: "Track Orders",
    type: "font-awesome-5",
    color: "#f18721"
  }, {
    icon: "heart-multiple",
    title: "Wishlist",
    type: "material-community",
    color: "#f18721"
  }, {
    icon: "wallet",
    title: "My Wallet",
    type: "entypo",
    color: "#f18721"
  }, {
    icon: "address-book",
    title: "Address Book",
    type: "font-awesome",
    color: "#f18721"
  },
  {
    icon: "unlock-alt",
    title: "Change Password",
    type: "font-awesome-5",
    color: "#f18721"
  },
  // {
  //   icon:"shield-alt",
  //   title: "Two Step Varification",
  //   type: "font-awesome-5",
  //    color: "#f18721"
  // },
  {
    icon: "sign-out-alt",
    title: "Signout",
    type: "font-awesome-5",
    color: "#f18721"
  },
]
const MoreScreen = ({ navigation }) => {
  return (
    <>
      <CommonHeader onPress={() => navigation.toggleDrawer()}
        onSearchIconPress={() => navigation.navigate('More', { screen: 'SearchScreen' })}
        onCartIconPress={() => navigation.navigate('More', { screen: 'SearchScreen' })}
        onProfileIconPress={() => navigation.navigate('More', { screen: 'ProfileScreen' })}

      /><View>
        {moreItemList.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} type={item.type} color={item.color} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Icon name="chevron-right" type="octicon" size={14} />
          </ListItem>
        ))}
      </View>



    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent:"center",
    // alignItems:"center"
  }, text: {
    fontSize: 30,
    color: '#00a3de'
  }
})
export default MoreScreen