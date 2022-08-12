import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, } from 'react-native'
//import Icon from 'react-native-vector-icons/AntDesign';

const array = [
    {
        id: 1, value: "Sofas"
    },

    {
        id: 2, value: "Beds"

    },

    {
        id: 3, value: "Wardobe"
    },

    { id: 4, value: "Tables", },

    { id: 5, value: "Storage", },

    { id: 6, value: "Kids Furniture", },

    { id: 7, value: "Furnishing", },

    { id: 8, value: "Office Furniture", },

    { id: 9, value: "Outdoor Furniture", },

    { id: 10, value: "Modular Furniture", },

    { id: 11, value: "Accessories",  },

]

const renderItemList = ({ item, }) => (
    <View style={styles.menu}>
        {/* <Icon name={item.image} size={12} color="#d6d6d6"  /> */}
        <Text style={styles.text}>{item.value}</Text>
    </View>
)


const TopMenu = (props) => {
    return (
        <View style={props.style}>
            <FlatList
                data={array}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItemList}
                keyExtractor={item => item.id + item}
                horizontal
            />
        </View>
    );
}



const styles = StyleSheet.create({

    header_a: {
        flexDirection: 'row',
        backgroundColor: '#009393'
    },


   
    menu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        marginHorizontal: 5,
        paddingVertical: 4,
        borderColor: '#e3e3e3',
        borderWidth: 1
    },
    text:
    {
        fontSize: 14,
        paddingLeft: 3,
        color: '#333333',
        elevation: 2
    }


});


export default TopMenu