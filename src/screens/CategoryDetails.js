import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import CommonHeader from '@src/component/header';
import { Card } from 'react-native-shadow-cards';
import { useNavigation } from '@react-navigation/native';

const CategoryDetails = ({ navigation }) => {
    return (
        <SafeAreaView>
            <CommonHeader onPress={() => navigation.toggleDrawer()}
                onSearchIconPress={() => navigation.navigate('Routes', { screen: 'SearchScreen' })}
                onCartIconPress={() => navigation.navigate('Routes', { screen: 'SearchScreen' })}
                onProfileIconPress={() => navigation.navigate('Routes', { screen: 'ProfileScreen' })}
            />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.InsideText}> Sofa</Text>
                <Text style={styles.text}>
                    Sort
                </Text>
                <TouchableOpacity>
                    <Icon style={styles.icon}
                        size={20}
                        name='sort'
                        type='font-awesome'
                        color='#333333'
                    />
                </TouchableOpacity>
                <Text style={styles.filter}>
                    Filter
                </Text>
                <TouchableOpacity>
                    <Icon style={styles.icon}
                        size={20}
                        name='filter'
                        type='antdesign'
                        color='#333333'
                    />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}  >

                <Category
                    // categoryOnPress={() => alert('pallavi')}
                    // onPress={() => alert('pallavi')}
                    Request1={require('@assets/sofa15.jpg')}
                    Request2={require('@assets/sofa18.jpeg')}
                    text1bold={"Triple Seated Sofa"}
                    text2bold={"Double Seated Sofa"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />
                <Category

                    Request1={require('@assets/sofa14.jpg')}
                    Request2={require('@assets/sofa15.jpg')}
                    text1bold={"Double Seated Sofa"}
                    text2bold={"Triple Seated Sofa"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />
                <Category
                    Request1={require('@assets/sofa15.jpg')}
                    Request2={require('@assets/bed.jpg')}
                    text1bold={"Sofa"}
                    text2bold={"Bed"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />
                <Category
                    Request1={require('@assets/book_storage.jpg')}
                    Request2={require('@assets/room1.jpg')}
                    text1bold={"Book_Storage"}
                    text2bold={"Kids_Furniture"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />
                <Category
                    Request1={require('@assets/sofa11.jpg')}
                    Request2={require('@assets/bed.jpg')}
                    text1bold={"Sofa"}
                    text2bold={"Bed"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />
                <Category
                    Request1={require('@assets/book_storage.jpg')}
                    Request2={require('@assets/room1.jpg')}
                    text1bold={"Book_Storage"}
                    text2bold={"Kids_Furniture"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />
                <Category
                    Request1={require('@assets/sofa11.jpg')}
                    Request2={require('@assets/bed.jpg')}
                    text1bold={"Sofa"}
                    text2bold={"Bed"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />
                <Category
                    Request1={require('@assets/book_storage.jpg')}
                    Request2={require('@assets/room1.jpg')}
                    text1bold={"Book_Storage"}
                    text2bold={"Kids_Furniture"}
                    text1={"By Furn-Marts"}
                    text2={"By Furn-Marts"}
                    categoryOnPress={() => navigation.navigate('ProductDetails')}

                />

            </ScrollView>
        </SafeAreaView>
    )
}

const Category = ({ Request1, Request2, text1bold, text2bold, text1, text2, categoryOnPress }) => {
    return (

        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={categoryOnPress}>
                <Card elevation={1} style={styles.card}>
                    <View style={styles.ToStyle}>
                        <Image style={styles.imgStyle} source={Request1} />
                        <View style={styles.viewStyleBelowImg}>
                            <Text style={styles.textBold1}>{text1bold}</Text>
                            <Text style={styles.text1}>{text1}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, paddingLeft: 8, }}>
                                    ₹10000
                        </Text>
                                <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 14, color: '#777', marginLeft: 5 }}>
                                    ₹40000
                             </Text>
                                <Text style={{ fontSize: 14, color: '#0D5395', marginLeft: 5, marginBottom: 5 }}>
                                    50% Off
                             </Text>

                            </View>

                        </View>
                    </View>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card elevation={1} style={styles.card}>
                    <View style={styles.TO2Style}>
                        <Image style={styles.img2Style} source={Request2} />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.textBold2}>{text2bold}</Text>
                            <Text style={styles.text2}>{text2}</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ fontSize: 15, paddingLeft: 10, }}>
                                    ₹ 20000
                </Text>
                                <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 14, color: '#777', marginLeft: 5 }}>
                                    ₹40000
                    </Text>
                                <Text style={{ fontSize: 14, color: '#0D5395', marginLeft: 5 }}>
                                    50% Off
                    </Text>
                            </View>

                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#F2F2F2",
        marginStart: wp('1%'),

    },

    ToStyle: {
        flexDirection: "column",
    },

    TO2Style: {
        flexDirection: "column",

    },

    imgStyle: {

        height: hp('15%'),
        width: wp('41%'),
        resizeMode: 'stretch',
        borderRadius: 5,
        margin: wp(2),

    },

    img2Style: {

        height: hp('15%'),
        width: wp('41%'),
        resizeMode: 'stretch',
        borderRadius: 5,
        margin: wp(2),

    },

    textBold1:
    {
        fontSize: 15,
        fontWeight: "bold",
        color: '#333333',
        paddingLeft: 6,

    },

    textBold2:
    {
        fontSize: 15,
        fontWeight: "bold",
        color: '#333333',
        paddingLeft: 10,

    },

    text2: {

        color: '#333333',
        flexDirection: 'row-reverse',
        paddingLeft: 10,
        fontSize: 14,


    },
    text1: {

        color: '#333333',
        paddingLeft: 6,
        fontSize: 14,

    },

    viewStyleBelowImg: {
        flexDirection: "column"
    },

    icon: {

        marginTop: 5,
        marginLeft: 4
    },
    card: {
        height: hp('27%'),
        width: wp('45%'),
        resizeMode: 'stretch',
        margin: hp(1),
    },
    InsideText: {
        fontFamily: "open-serif",
        marginTop: 5,
        marginLeft: 15,
        fontSize: 18,
        color: '#333333',
        fontWeight: 'bold',
        marginStart: 5


    },
    text:
    {
        marginStart: 190,
        marginTop: 7,




    },
    filter:
    {
        marginTop: 7,
        marginLeft: 20

    }
})


export default CategoryDetails