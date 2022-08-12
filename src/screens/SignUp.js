import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
const Signup = ({ LogOutChange,navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor:'white'
        }}>
          
           <Image
                style={{
                alignSelf:'flex-end',
                marginTop:-15,
                marginEnd:-15,
                width:'68%',
                height: '35%',
                resizeMode: 'cover'
             }}
                source={require('@assets/styleImage/loginTopStyle.png')}
                    />
           
                
                    <Image
                        style={{ 
                             width: 150,
                             height: 80, 
                             resizeMode: 'contain', 
                             marginStart:'25%',
                             marginTop:'-22%' }}
                        source={require('@assets/furnMarts.jpg')}
                    />
              


            <View style={{ flex: 1, width: '100%',backgroundColor:'white', marginTop:20 }}>
            <Text style={{ fontSize: 18, marginStart: '10%',fontWeight:'bold',marginBottom:-10 }}>Username</Text>
                <TextInput
                    style={{
                        width: '80%',
                        margin: 15,
                        height: 40,
                        alignSelf: 'center',
                        backgroundColor: '#F2F2F2',
                      //  elevation: 2,
                      //   borderColor: '#7a42f4',
                      //   borderWidth: 1
                    }}
                    placeholder={"   example@gmail.com"}
                />
                <Text style={{ fontSize: 18, marginStart: '10%',fontWeight:'bold',marginBottom:-10  }}>Email id</Text>
                <TextInput
                    style={{
                        width: '80%',
                        margin: 15,
                        height: 40,
                        alignSelf: 'center',
                        backgroundColor: '#F2F2F2',
                      //  elevation: 2,
                        //   borderColor: '#7a42f4',
                        //   borderWidth: 1
                    }}
                    placeholder={"   example@gmail.com"}
                />
                <Text style={{ fontSize: 18,
                     marginStart: '10%',
                      marginBottom: '-2%',
                      fontWeight:'bold' ,marginBottom:-10 
                      }}>Password</Text>
                <TextInput
                    style={{
                        width: '80%',
                        height: 40,
                     //   borderRadius: 5,
                        marginTop: '5%',
                        alignSelf: 'center',
                        backgroundColor: '#F2F2F2',

                        //  borderColor:'red',
                        //    borderWidth:0.1,
                      //  elevation: 2,
                    }}
                    placeholder={'    **********************'}

                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#f18721',
                        width: '80%',
                        height: '10%',
                        marginTop: '10%',
                      //  borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginStart: '10%'
                    }}>
                    <Text
                     style={{ 
                         fontWeight: 'bold', 
                         color: 'white'
                          }}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingEnd:'10%',marginTop:'2%'}} onPress={()=> alert('forget password')}>
                    <Text style={{ alignSelf:'flex-end'}}>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={{ flexDirection:'row', alignSelf:'center', marginTop:'15%'}}>
                <Text> Already have an account ?</Text><TouchableOpacity onPress={()=>navigation.navigate('login')}>
    <Text style={{ marginStart:5, color:'red', fontWeight:'bold'}}>Login</Text>
</TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Signup