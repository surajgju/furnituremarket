import React,{ useState} from 'react';
import { Button, StyleSheet,Text,View, Image, Dimensions, TouchableOpacity } from 'react-native';
import CommonHeader from '@src/component/header';
import { ListItem,Icon} from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import HomeScreen from '@src/screens/Home';
import FooterMain from '@src/component/footer'
import NavigationDrawer from '@src/component/drawer'

const MyOrderScreen =({navigation})=>{
 

  // const [value, setValue] = useState(null);
  // const [mlist, setList] = useState(null);
  // const itemList =["sofa","table","chair","otherFurniture"];
  // const tempList =[];
  // const emptyStr = '';


    return(
    <>
<CommonHeader onPress={() => navigation.toggleDrawer()} 
       onSearchIconPress={ () => navigation.navigate('More',{screen:'SearchScreen'})} 
       onCartIconPress={ () => navigation.navigate('More',{screen:'SearchScreen'})}
       onProfileIconPress={ ()=> navigation.navigate('More',{screen:'ProfileScreen'})}

       />
    <Image style={ styles.emptyImg}  source={require('@assets/no-order.png')} />
    <TouchableOpacity style={ styles.tcblOp} onPress={ ()=> navigation.navigate('Home')} >
      <Text style={styles.contShopTxt}>Continue Shoping</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
    </TouchableOpacity>

{/* <DropDownPicker
items={[
  {label: 'UK', value: 'uk'},
  {label: 'France', value: 'france'},
]}
defaultValue={value}
containerStyle={{ backgroundColor:"red",height:40}}
itemStyle={{ backgroundColor:"green"}}
//onChangeItem={setValue(items.value)}
/> */}

{/*   
    <TouchableOpacity
    onPress={()=>{
      if(mlist ==null){
        setList(itemList)
      }
    }}>
      <Text style={{fontSize:50}}>Sofa</Text></TouchableOpacity>
      <ListItem>
  <Text> {mlist!==null? mlist.map((ele,inx)=>(<ListItem key={inx}> 
  <ListItem.Content>
          <ListItem.Title style={{ width:300}}>{ele}</ListItem.Title>
        </ListItem.Content></ListItem>)):''}
 </Text>

</ListItem> */}

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
    }, 
    emptyImg:{
      width:250,
      height:200,
      alignSelf:"center",
      marginTop:'20%'
    },
    contShopTxt:{
      alignSelf:'center',
      fontFamily:"open-sans",
      fontSize:20,
      fontWeight:'bold',
      color:'#f18721',
      padding:10
    },
    tcblOp:{
      borderColor:'#f18721',
      borderWidth:0.8,
      marginHorizontal:50,
      marginTop:40,
      paddingVertical:6
    }
  })
export default MyOrderScreen