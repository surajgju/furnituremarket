import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
//import GetApiCall from '../GetApiCall';
//import PostApiCall from '../PostApiCall';

const Banner = (props) => {

    const [data, setData] = useState([])
    // const [isFetching, setIsFetching] = useState(false);
    // const [image, setImage] = useState([]);
    // const [BannerHome, setBannerHome] = useState([]);


    useEffect(() => {

        fetch('http://demo.globaltrendz.online/maxExchange/dashboard')
        .then(res => res.json())
            .then(data => {()=>
                      console.log(data)
                     console.warn(data)
            }).catch(err => console.warn(err))
    }, []);


    // getData = async () => {
    //     const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page=1"
    //     fetch(apiURL).then((res) => res.json())
    //         .then((resJson) => {
    //             setData(resJson)
    //         })
    // }
    // useEffect(() => {
    //     getData()
    //     return () => {
    //     }
    // }, [])

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemRow}>
                <Image source {...{ uri: item.url }} style={styles.bannerRectangle} />
                {/* <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemText}>{item.id}</Text> */}
            </View>
        )
    }
    return (

        <FlatList showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id} />

    );
}

const styles = StyleSheet.create({
    bannerRectangle: {

        width: wp('70%'),
        height: hp('22%'),
        borderWidth: 2,
        borderRadius: 10,
        margin: 4,
        marginLeft: 10,


    },
    itemRow: {
        borderBottomColor: '#ccc',
        marginBottom: 10,
        //  borderBottomWidth:1,
    },
    itemText: {
        fontSize: 16,
        padding: 5,


    },
    itemImage:
    {
        width: wp('30%'),
        height: hp('8%'),
        resizeMode: 'cover'

    },

})
export default Banner