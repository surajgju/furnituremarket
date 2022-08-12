import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, 
    heightPercentageToDP as hp, 
  } from 'react-native-responsive-screen';
  import config from '../Helper/config'
  import {
    Platform
  } from 'react-native';
export default StyleSheet.create({

  //-----------------------Splash Stylesheet--------------------------

    SplashContainer:{
        flex:1,
        marginTop:hp('2%'),
        alignItems:'center'
          },

          SplashText:{
            fontFamily : config.SpashTitleFontFamily,
            fontSize : config.fontLarge,         
            color : config.DarkBlue
          },
          SplashTopView:{
            justifyContent : 'center',
            alignItems:'center',
            flex : 2,
       
          },

          SplashMidView:{
            justifyContent : 'center',
            alignItems:'flex-end',
            flex : 2,
            flexDirection:'column'

          },
  
          SplashBottomView:{
            justifyContent : 'flex-end',
            marginBottom:hp('3%'),
            alignItems:'center',
            flex : 1,
      
          },

          SplashLogo:{
           height : hp('24%'),
           width : wp('40%'),
           resizeMode:'contain'
         
              },
 
          SplashText:{
           fontFamily : config.SpashTitleFontFamily,
           fontSize : config.SpashTitleFontSize
             },

             LoginTextMainName:{
              fontFamily : config.LightTitleFontFamily,
              fontSize : config.fontSmall,         
              color : config.Black
             } ,




            //--------------------TextInput----------------------

          TextFieldView :{
            borderBottomWidth : 0.8,
        width: wp('80%'),
        alignSelf:'center',
          },

          TextInputLabelStyle:{
            fontFamily : config.RegularTitleFontFamily
            ,fontSize : config.fontNormal
          },


          

 // ----------------Button-------------------


 Button:{
  width:wp('80%'),
  height:hp('7%'),
  backgroundColor:config.DarkBlue,
  alignSelf:'center',
  borderRadius : 5,
  // marginTop:hp('5%'),
  justifyContent : 'center',
  alignItems:'center',
},

largeButton:{
  width:wp('95%'),
  height:hp('5%'),
  backgroundColor:config.DarkBlue,
  alignSelf:'center',
  borderRadius : 5,
  // marginTop:hp('5%'),
  justifyContent : 'center',
  alignItems:'center',
},
ButtonText:{
  fontSize : config.fontLarge,
        fontFamily : config.SpashTitleFontFamily,
        color : config.White,
        textShadowRadius : 0
},


 // ----------------Button-------------------


 SmallButton:{
  width:wp('35%'),
  height:hp('4%'),
  backgroundColor:config.DarkBlue,
  borderRadius : 5,
  justifyContent : 'center',
  alignItems:'center',
},

SmallButtonText:{
  fontSize : config.fontSmall,
        fontFamily : config.SpashTitleFontFamily,
        color : config.White,
        textShadowRadius : 0
},




        //-------------------Login-------------------

        LoginTextNameBMS:{
          fontFamily : config.SpashTitleFontFamily,
          fontSize : config.fontLarge,
          color : config.DarkBlue
         } ,

          DividerStyle:{
            height:hp('3%')
          },

       
          LoginTopView :{
            width:wp('85%'),
           flex : 1,
            },

          LoginMidView :{
            width:wp('85%'),
            flex : 0.5,
            },
  
          LoginMainView :{
            flex : 2,
         
            },
           LoginLogo:{
              height : hp('14%'),
              width : wp('32%'),
              marginTop:hp('2%'),
              resizeMode:'contain'
 
                 },
               LoginTextInitial:{
                  fontFamily : config.LightTitleFontFamily,
                  fontSize : config.SpashTitleFontSize,
                  // marginLeft: wp('5%'),
                  color : config.Black
                 },
                 LoginTextMain:{
                  fontFamily : config.LightTitleFontFamily,
                  fontSize : config.fontLarge,
                  // marginLeft: wp('5%'),
                  color : config.Black
                 } ,
                 LoginTextName:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.LoginTitleFontSize,
                  // marginLeft: wp('5%'),
                  color : config.LightBlue
                 } ,
           
                 LoginTextLoginText:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontLarge,
                  // marginLeft: wp('5%'),
                  color : config.Black
                 },
                 LoginTextMainName:{
                  fontFamily : config.LightTitleFontFamily,
                  fontSize : config.fontSmall,
                  // marginLeft: wp('5%'),
                  color : config.Black
                 } ,
                 LoginTriangleView:{
                  flex:1,
                  alignItems:'flex-end',
                  justifyContent:'flex-end',
                  // position:'absolute',
                  // backgroundColor:'red'
                 },
                 LoginTriangle :
                 {
                  width: wp('100%'),
                  height: 0,
                  backgroundColor: 'transparent',
                  borderStyle: 'solid',
                  borderLeftWidth: wp('100%'),
                  borderRightWidth: 0,
                  borderBottomWidth: wp('100%'),
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor:config.White,
                  transform: [
                      { rotate: '0deg' }
                  ],
                  margin: 0,
                  borderWidth: 0,

                 },
                 LoginCard:{
                  // position:'absolute',
                  flex:1,
                  width:wp('100%'),
                  marginTop:hp('2%'),
                  justifyContent:'center',
                  alignItems:'center'
                 },
                 CardViewStyle :  {
                  justifyContent:'center',
                  alignItems:'center',
                  width: wp('85%'), 
                  shadowOpacity:Platform.OS == 'ios' ? 0 : 4,
                  elevation:2,
                  height: hp('50%'),
                  backgroundColor:config.White,
                  // backgroundColor:'blue',
                  borderRadius : 10,
                  // shadowOffset: {
                  //   width: 0,
                  //   height: 5
                  // },
                  // shadowRadius: 0,
                  // shadowOpacity: 0.2,
                  // shadowColor : config.Black,
                  borderColor : config.LightGray,
                  borderWidth : 1
                },
                ShadowStyle :{
                  height:hp('10%'),
                  marginTop:hp('-3.8%'),
                  width:wp('70%'),
                  alignSelf:'flex-end',
                  marginRight:wp('10%'),
                  resizeMode:'contain'
                },
                ForgotPassView:{
                  width:wp('80%'),
                  height:hp('1%'),
                  flex:1,
                  justifyContent:'center',
                  alignItems:'center'
                },
                ForgotPassText:{
                  fontSize : config.fontNormal,
                  fontFamily : config.RegularTitleFontFamily,
                  color : config.LightBlue,
                  textShadowRadius : 0,
                  alignSelf:'flex-end',
                  marginRight:wp('2%')
                },
                LoginRow:{
                  flexDirection : 'row'
                },

                LoginTopTriangle :
                {
                 width: wp('20%'),
                 height: 0,
                 position:'absolute',
                 backgroundColor: 'transparent',
                 borderStyle: 'solid',
                 borderLeftWidth: wp('20%'),
                 borderRightWidth: 0,
                 borderBottomWidth: wp('20%'),
                 borderLeftColor: 'transparent',
                 borderRightColor: 'transparent',
                 borderBottomColor:config.DarkBlue,
                 transform: [
                     { rotate: '-180deg' }
                 ],
                 margin: 0,
                 borderWidth: 0,

                },

                LoginButtonMargin:{
                  marginTop:hp('5%')
                },
                //-------------------Header--------------------------
              
                HeaderMainView :{
                  backgroundColor:'white',
                  justifyContent:'center',
                  borderBottomColor: config.LightGray,
                  borderBottomWidth:1

                },
                HeaderLeftImage :{
                  width:wp('16%'),
                  height:hp('20%'),
                  resizeMode:'contain'
                },

                HeaderLeftText :{
                  fontSize:config.fontLarge,
                  fontFamily:config.SpashTitleFontFamily,
                  color:config.DarkBlue,
                  alignSelf:'center'
                },
                HeaderRightText :{
                  fontSize:config.fontLarge,
                  fontFamily:config.SpashTitleFontFamily,
                  color:config.LightBlue,
                  alignSelf:'center'
                },

                 //-------------------Header--------------------------


                    //-------------------HeaderBack--------------------------

                 HeaderBackIcon :{
                  color : config.DarkOrange,
                  fontSize:20

                 },


                         //-------------------HeaderBack--------------------------

               //-------------------Dashboard--------------------------

               MainContainer : {
                flex:1,
                backgroundColor:config.BackColor
               },

               MainView:{
                 flex:1,
                backgroundColor:config.BackColor
               },

               TopView :{
                flex:1,flexDirection:'row'
               },

              

               ReadymadeBox :{
                 marginRight : wp('2%')
               },

               ReadymadeImage :{
                resizeMode:'contain',
                width:wp('26%'),
                height:hp('15%')
               },

               ProductNameContainer :{
                flex:1,
                flexDirection:'row'
               },

               OrderContainer :{
                flex:4,
                backgroundColor:config.BackColor
               },

               OrderHeadingText :{
                fontFamily : config.SpashTitleFontFamily,
                fontSize : config.SpashTitleFontSize,
                marginLeft: wp('2%'),
      
                color : config.TextTitle
               },

             

               tabsContainerStyle :
               {
                 width:wp('50%'),
                 borderRadius:20/2
                },

               tabTextStyle : 
               {
                 fontSize:config.fontSmall,
                 fontFamily:config.RegularTitleFontFamily,
                 color:config.DarkOrange,
                },
               activeTabStyle:
               {
                 backgroundColor:config.DarkOrange
                },

               tabStyle:{
                 borderColor:config.DarkOrange
                },


                PieChartView :{
                  backgroundColor:config.White,
                  alignItems:'center',
                  justifyContent:'center',
                  marginTop: hp('2%')
                },
                OrderValueTextView:{
                  flexDirection:'row',
                  alignItems:'center'
                },

                OrderValueTextHeading :{
                  fontFamily : config.SpashTitleFontFamily,
             fontSize : config.fontSmall,
             marginLeft: wp('2%'),
            //  marginTop: wp('2%'),
             color : config.Black
                },

                OrderValueText :{
                  fontFamily : config.RegularTitleFontFamily,
                  fontSize : config.fontSmall,
                  marginLeft: wp('2%'),
                 //  marginTop: wp('2%'),
                  color : config.Black
                },

                DividerView :{
                  width:wp('90%'),
                  height:1,
                  backgroundColor:config.LightGray,
                  alignSelf:'center'
                },

                OrderHistoryButtonView :{
                  flex:1,
                  flexDirection:'row',
                  alignItems:'center'
                },

                OrderHistoryImage :{
                  resizeMode:'contain',
                  width:wp('10%'),
                  height:hp('7%'),
                  marginLeft:wp('2%')
                },

                OrderHistoryText :{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontSmall,
                  marginLeft: wp('2%'),
                 //  marginTop: hp('2%'),
                  color : config.Black
                },


                PendingOrdersContainer :{
                  flex:2
                },

                PendingOrderListView:{
                  marginTop:hp('1%'),
                  marginBottom:hp('4%'),
                  backgroundColor:config.BackColor,
                },


                PendingOrderMainViewDash :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                  marginBottom:hp('2%'),
                  // shadowOpacity:5,
                  // elevation:4,
                  shadowColor:'gray',
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                
                  width:wp('80%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },
                PendingOrderMainViewDashDelivered :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                  marginBottom:hp('2%'),
                  shadowColor:'gray',
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                 
                  width:wp('98%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },
                PendingOrderMainView :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                  marginBottom:hp('2%'),
           
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                  height:hp('24%'),
                  width:wp('80%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },
                PendingOrderMainView2 :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                  marginBottom:hp('2%'),
         
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                  height:hp('14%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },
                PendingOrderMainView3 :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                  marginBottom:hp('2%'),
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                  height:hp('10%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },
                PendingOrderMainView4 :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                  marginBottom:hp('2%'),
                  marginTop:hp('2%'),
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                  height:Platform.OS == 'ios' ? hp('22%') : hp('17%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },  
                PendingOrderMainView5 :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                 
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                  height:hp('19%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },
                PendingOrderMainViewprofiledetil :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                 
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                  height:Platform.OS == 'ios' ? hp('20%') : hp('18%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },
                PendingOrderMainViewProfileAddress :{
                  flex:1,
                  marginLeft:wp('1%'),
                  marginRight:wp('1%'),
                 
                  backgroundColor:config.White,
                  borderRadius:20/2, 
                  height:Platform.OS == 'ios' ? hp('24%') : hp('22%'),
                  borderColor : config.LightGray,
                  borderWidth:1
                },

                PendingNavigateIcon :{
                  color : config.DarkOrange,
                  marginTop:wp('2%'),
                  alignSelf:'flex-end'
                },

                PendingTopView :{
                  flex:1,
                  justifyContent:'center'
                },

                PendingInnerView :{
                  flexDirection:'row',
                  alignItems:'center'
                },
                PendingInnerView1 :{
                  flexDirection:'column',
                  alignItems:'center'
                },
                PendingImageIcon :{
                  resizeMode:'contain',
                  width:wp('10%'),
                  height:hp('7%'),
                  marginLeft:wp('2%')
                },
      

                PendingTrackMainContainer :{
                  marginLeft:wp('4%'),
                  justifyContent:'center',
                  flex:1,
                  marginTop:hp('1.5%'),
                  marginRight:wp('2%'),
                  flexDirection:'column'
                },
                PendingTrackMainContainer3 :{
                  marginLeft:wp('4%'),
                  marginTop:hp('2%'),
                  justifyContent:'center',
                  flex:2,
                  marginRight:wp('4%'),
                  flexDirection:'column'
                },
                PendingTrackMainContainer4 :{
                  marginLeft:wp('4%'),
               
                  justifyContent:'center',
                  flex:2,
                  marginRight:wp('4%'),
                  flexDirection:'column',
                },
                PendingTrackMainContainer5 :{
                  marginLeft:wp('4%'),
                  marginTop:hp('2%'),
                  justifyContent:'center',
                  flex:2,
                  marginRight:wp('4%'),
                  flexDirection:'column',
                },
                PendingTrackMainContainer2 :{
                  marginLeft:wp('2%'),
                  justifyContent:'center',
                  flex:2,
                  marginRight:wp('4%'),
                  flexDirection:'column'
                },

       
                PendingDetailView :{
                  flexDirection:'row'
                },
             
                PendingDetailViewProfile :{
                  flexDirection:'row',
                  flex:1
                },
    
                PendingDetailViewStatus :{
                  flexDirection:'row',
                  justifyContent:'center',
                  alignSelf:'flex-end',
                  alignContent:'flex-end',
                  marginTop:3,
                  marginRight:3
               
                },
                WALLETText:{
                  fontFamily : config.RegularTitleFontFamily,
                  fontSize : config.fontSmall,
                  color : config.Black,
                  alignSelf:'center'
                },
                PendingHeadingText:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.Black
                },
                PendingHeadingTextHeading:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontSmall,
                  color : config.Black
                },
                PendingHeadingTextPending:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.DarkBlue
                },
                PendingHeadingTextDeliver:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.DarkBlue
                },
                PendingHeadingTextCash:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.DarkGreen
                },
                PendingHeadingTextStatus:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontNormal,
                  color : config.DarkRed
                },
                PendingHeadingText2:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontLarge,
                  color : config.DarkRed,
                  marginLeft:wp('1%')
                },

                PendingValueTextCart : {
                  fontFamily : config.RegularTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.Black
                },
                PendingValueText :{
                  fontFamily : config.RegularTitleFontFamily,
             fontSize : config.fontExtraSmall,
             flex:2,
            //  backgroundColor:'red',
            //  marginLeft: wp('1%'),
            //  marginTop: wp('2%'),
             color : config.Black
                },
                ProductDescriptionText :{
                  fontFamily : config.RegularTitleFontFamily,
             fontSize : config.fontExtraSmall,
             flex:2,
             marginRight:wp('4%'),
             marginBottom:hp('1%'),
             color : config.Black,
             textAlign:'justify'
                },


                PendingRupeeView :{
                  flexDirection:'row',
                  marginLeft: wp('1%'),
                  flex:2
                },
                RupeeValue :{
                 marginLeft: wp('1%')
                },


                TrackerHeadingText:{
                  fontFamily : config.SpashTitleFontFamily,
             fontSize : config.fontSmall,
             marginLeft: wp('2%'),
             marginTop: hp('2%'),
             color : config.Black
                },

                TrackerContainer :{
                  flexDirection:'row',
                  marginLeft:wp('4%'),
                  marginRight:wp('4%'),
                  marginTop:hp('2%'),
                  marginBottom:hp('1%')
                },

                TrackerView :{
                  width:20,
                  height:20,
                  borderRadius : 20/2,
                  justifyContent:'center',
                  alignItems:'center'
                },

                TrackerInnerView :{
                  width:10,
                  height:10,
                  borderRadius : 10/2,
                   backgroundColor:config.White
                },
                TrackerMarkerPath :{
                  flex:1,
                  height:1,
                  alignSelf:'center'
                },

                TrackerTextView  : {
                  flexDirection:'row',
                  marginLeft: wp('2%'),
                  marginRight: wp('2%'),
                  marginBottom: wp('2%')
                },
                TrackerText :{
                  fontFamily : config.RegularTitleFontFamily,
            fontSize : config.fontExtraSmall,
            // marginLeft: wp('2%'),
            // marginTop: wp('2%'),
            color : config.Black
                },

                TrackerSeparator :{
                  flex:1,
                  height:1,
                  backgroundColor:config.White,
                  alignSelf:'center'
                },
              
               
                //-------------------Accessories Cart--------------------------

                AccessoriesTopCardViewCart1:{
                  flexDirection:'row',
             
         
                },
                AccessoriesTopCardViewCart:{
                  flexDirection:'row',
                  // flex:1
         
                },
                AccessoriesLengthHeadingText:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.Black,
                  alignItems:'center',
                  alignSelf:'center',
                  marginTop:hp('1%')
                },
                AccessoriesTopCardViewCartView:{
                  flexDirection:'column',
                  marginTop:hp('1%'),
    
                  // flex:1
         
                },
                AccessoriesHeadingTextCart:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.Black,
                  flex:1,
                  // alignSelf:'center'
                  
                },
                AccessoriesHeadingAmountTextCart:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontNormal,
                  color : config.Black,
       
                  // alignSelf:'center'
                  
                },
                AccessoriesHeadingRemoveTextCart:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.DarkGray,
                  // flex:1,
                  // alignSelf:'center'
                  
                },
                AccessoriesWishiheartCart:{
                  flexDirection:'row',
                 flex:2,
                  alignSelf:'center',
                  marginBottom:hp('1%'),
                  marginTop:hp('2%')
            
                },
                AccessoriesWishiheartCartTop:{
                  flexDirection:'row',
                 flex:1,
                 marginTop:hp('1%'),
                  alignItems:'center',
                  justifyContent:'center'
            
                },
                AccessoriesWishiheartCart1:{
                  flexDirection:'row',
                 flex:1,
                  alignSelf:'center',

                },
                AccessoriesWishCartInnerView :{
                  flexDirection:'row',
                  alignItems:'center',

                },
                DropDownCart:{
                  width:wp('15%'),
                  height:hp('3%'),
                  justifyContent:'center',
                  alignItems:'center',
                  borderBottomColor:'black',
                  borderBottomWidth:1
                },
                textCart:{
                  width:wp('15%'),
                  height:hp('3%'),
                  justifyContent:'center',
                  alignItems:'center',
                  borderBottomColor:'black',
                  borderBottomWidth:1
                },
                accessroiesImageCart :{
                  resizeMode:'cover',
                  width:wp('30%'),
                  height:hp('15%'),
                  marginLeft:wp('2%'),
                  backgroundColor:'red'

                },
               //-------------------Alert--------------------------

               AlertMainContainer :{
                flex:1,
                marginLeft:wp('1%'),
                marginRight:wp('1%'),
                marginTop:hp('1%'),
                backgroundColor:config.White,
                borderRadius:20/2,
                borderColor : config.LightGray,
                borderWidth:1
               },
        



    //-------------------Accessories Detail--------------------------
    AccessoriesDetail :{
      flex:1,
      width:wp('48%'),
      // marginLeft:wp('1%'),
      // marginBottom:hp('1%'),
      marginHorizontal:wp('1%'),
      marginVertical:hp('1%'),
      backgroundColor:config.White,
      borderRadius:20/2,
      borderColor : config.LightGray,
      borderWidth:1
     },
     AccessoriesImage :{
     borderTopLeftRadius:20/2,
     borderTopRightRadius:20/2,
      resizeMode:'cover',
      width:wp('47.5%'),
      height:hp('20%'),
      borderWidth:1
      // alignSelf:'center'
    },
    AccessoriesDetailImage :{
      // flex:1,
      borderTopLeftRadius:20/2,
      borderTopRightRadius:20/2,
       resizeMode:'cover',
       width:wp('98%'),
       height:hp('40%'),
       alignSelf:'center'
  
    
     },
    AccessoriesDetailText :{
      flexDirection:'row',
      marginTop:hp('1%'),
      marginBottom:hp('1%')
    },
    AccessoriessmallText :{
      fontFamily : config.RegularTitleFontFamily,
 fontSize : config.fontExtraSmall,
 flex:2,
//  marginLeft: wp('2%'),
 marginTop: wp('1%'),
 color : config.Black
    },
    AccessoriesWishiDetailView :{
      flexDirection:'row',
      marginTop:hp('1%'),
      flex:3
    },
    AccessoriesWishiheart:{
      flexDirection:'row',
      marginTop:hp('1%'),
marginBottom:hp('1%'),
marginRight:wp('1%'),
      alignSelf:'flex-end',

    },
    AccessoriesWishCart :{
      marginLeft:wp('4%'),
      marginTop:hp('2%'),
      marginBottom:wp('2%'),
      justifyContent:'center',
      flex:1,
      // backgroundColor:'blue'
    },
    //-------------------Fabric List--------------------------

    Fabric :{
      marginLeft:wp('4%'),
      marginBottom:wp('2%'),
      justifyContent:'center',
      flex:1
    },
    FabricOrderMainView :{
      flex:1,
      backgroundColor:config.White,
      margin:wp('2%'),
      borderRadius:20/2, 
      borderColor : config.LightGray,
      borderWidth:1
     },

     FabricImageView :{
      height:hp('10%'),
      backgroundColor:config.White,
      justifyContent:'center',
      borderRadius:20/2
     },

     FabricOrderImage :{
      resizeMode:'cover',
      height:hp('10%'),
      width:wp('95.5%'),
      borderTopLeftRadius:20/2,
      borderTopRightRadius:20/2
     },

     FabricOrderTextView :{
      position:'absolute',
      flex:1,
      alignItems:'flex-end',
      width:wp('95%')
     },

     FabricOrderText :{
      fontFamily : config.SpashTitleFontFamily,
      fontSize : config.LoginTitleFontSize,
     alignSelf:'flex-end',
     //  marginTop: hp('2%'),
      marginRight:wp('2%'),
      color : config.White,
     },

     FabricOrderSegmentButtonView :{
      alignItems:'center',
      marginTop:hp('2%')
     },

     FabricDetailView :{
      flexDirection:'row',
      marginTop:hp('1%')
    },
    FabricTextView :{
     flex:1,
     alignItems:'center'
    },

    FabricText :{
     fontFamily : config.RegularTitleFontFamily,
     fontSize : config.fontNormal,
     marginLeft: wp('2%'),
    //  marginTop: wp('4%'),
     color : config.Black
    },
    FabricMain :{
      flex:1
     },

     FabricBox :{
      flex:1,
      backgroundColor:config.White,
      marginLeft:wp('2%'),
      marginTop:hp('2%'),
      borderRadius:20/2, 
      alignItems:'center',
      justifyContent:'center',
      borderColor : config.LightGray,
      borderWidth:1
     },

     FabricImage :{
      resizeMode:'contain',
      width:wp('30%'),
      height:hp('15%')
     },
    FabricButtonView :{
     justifyContent:'center',
     alignItems:'center',
     alignSelf:'center',
    //  backgroundColor:'red'
    },
    AccessDetailView :{
      flexDirection:'row',
      marginTop:hp('1%')
    },


               //-------------------Successful page--------------------------

              
               SuccessfulMainContainer :{
                flex:1,
                backgroundColor:'white'
                
               },
               SuccessfulInnerContainer :{
                flex:1,
                backgroundColor:config.BackColor
               },

               SuccessfulMainView:{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
               },

               SuccessView:{
                width:100,
                height:100,
                borderRadius:100/2,
                backgroundColor:config.DarkOrange,
                justifyContent:'center',
                alignItems:'center'
               },
               SuccessIcon:{
                color:config.White,
                fontSize:50
               },

               SuccessText:{
                fontFamily : config.SpashTitleFontFamily,
                fontSize : config.fontLarge,
                marginTop: hp('2%'),
                color : config.LightBlue
               },
               SuccessDescription :{
                fontFamily : config.RegularTitleFontFamily,
                fontSize : config.fontExtraSmall,
                // flex:2,
                textAlign:'center',
                marginHorizontal:wp('5%'),
                marginTop:hp('1%'),
                color : config.Black,
               },
               SuccessDetailView:{
                marginHorizontal:wp('3%'),
                marginTop:hp('3%')
               },

               SuccessDetailText:{
                fontFamily : config.RegularTitleFontFamily,
                fontSize : config.fontExtraSmall,
                // flex:2,
                marginBottom:hp('1%'),
                color : config.Black,
               },
              

           


               //-------------------Profile-------------------------

               ProfileMainContainer :{
                flex:1,
                backgroundColor:'#F4F6F6'
               },

               ProfileTopView:{
                flex: 1,
                backgroundColor:'#F4F6F6'
               },
               ProfileTopViewInner:{
                // flex:,
                margin:10,
                backgroundColor:'#FFFFFF'
               },

               ProfileHeadingText:{
                fontFamily : config.SpashTitleFontFamily,
                fontSize : config.SpashTitleFontSize,
                marginLeft: wp('2%'),
                marginTop: hp('2%'),
                color : config.TextTitle
               },

               ProfileMidView :{
                flex:1,
                marginLeft:hp('1%'),
                marginRight:hp('1%'),
                marginTop:hp('1%'),
                backgroundColor:config.White,
                borderRadius:20/2,
                height:hp('15%'),
                borderColor : config.LightGray,
                borderWidth:1
               },

               ProfileImageContainer :{
                flex:1,
                backgroundColor:config.White,
                margin:wp('2%'),
                borderRadius:20/2, 
                alignItems:'center',
                justifyContent:'center',
                 borderColor : config.LightGray,
                 height:hp('12%'),
                 borderWidth:1
               },

               ProfileImage:{
                resizeMode:'cover',
                width:wp('20%'),
                height:hp('12%')
               },


               ProfileDetailView :{
                flex:3,
                justifyContent:'center',
                marginLeft:hp('1%'),
               },

               ProfileDetailText :{
                fontFamily : config.RegularTitleFontFamily,
                fontSize : config.fontSmall,
               //  marginLeft: wp('2%'),
               //  marginTop: wp('2%'),
                color : config.Black
               },

               ProfileAddressMainView :{
                flex:1,
                marginLeft:hp('1%'),
                marginRight:hp('1%'),
                marginTop:hp('1%'),
                backgroundColor:config.White,
                borderRadius:20/2,
                borderColor : config.LightGray,
                borderWidth:1
               },


               ProfileAddressText :{
                fontFamily : config.RegularTitleFontFamily,
                fontSize : config.fontNormalplusone,
                marginLeft: wp('4%'),
                marginTop: hp('1%'),
                marginBottom:hp('1%'),
                color : config.Black
               },

               VerticalDividerView:{
                width:1,
                height:hp('4%'),
                backgroundColor:config.LightGray,
                marginTop: hp('2%'),
                alignSelf:'center'
               },

               ProfileCardMargin :{
                marginBottom:hp('2%')
               },

               DividerViewSmall :{
                width:wp('85%'),
                marginRight : wp('2%'),
                marginLeft : wp('2%'),
                height:1,
                backgroundColor:config.LightGray,
                marginTop: hp('2%'),
                alignSelf:'center'
              },


               //-------------------Profile--------------------------
               


               //-------------------Track Order--------------------------

               TrackOrderMainView :{
                flex:1,
                marginTop:hp('1%'),
                marginLeft:hp('1%'),
                marginRight:hp('1%'),
                marginBottom:hp('1%'),
                backgroundColor:config.White,
                borderRadius:20/2, 
                height:hp('25%'),
                borderColor : config.LightGray,
                borderWidth:1
               },


               TrackOrderBottomMargin :{
                 marginBottom:hp('5%')
               },

               //-------------------Track Order--------------------------


                //-------------------Alert--------------------------


               AlertMidView :{
                flex:1,
                flexDirection:'row'
               },

               AlertLogoIconView :{
                justifyContent:'center',
                alignItems:'center',
                marginTop:hp('2%'),
                marginLeft:wp('4%')
               },

               AlertIcon :{
                resizeMode:'contain',
                width:wp('8%'),
                height:hp('5%')
               },
               AlertInnerView :{
                flex:3,
                justifyContent:'center',
                marginLeft:hp('1%'),
               },

               AlertTitleText :{
                fontFamily : config.SpashTitleFontFamily,
                fontSize : config.fontSmall,
                marginLeft: wp('2%'),
                marginTop: hp('2%'),
                color : config.Black
               },

               AlertDetailText :{
                fontFamily : config.RegularTitleFontFamily,
                fontSize : config.fontSmall,
                marginLeft: wp('4%'),
                marginTop: hp('1%'),
                color : config.Black
               },

               AlertDetailDate :{
                fontFamily : config.RegularTitleFontFamily,
                fontSize : config.fontExtraSmall,
                marginLeft: wp('4%'),
               //  marginTop: hp('1%'),
               marginBottom:hp('2%'),
                color : config.Black
               },

              //-------------------Alert--------------------------



               //-------------------Change Password--------------------------

               PasswordMainContiner:{
                marginLeft:hp('1%'),
                marginRight:hp('1%'),
                marginTop:hp('1%'),
                backgroundColor:config.White,
                borderRadius:20/2,
                borderColor : config.LightGray,
                borderWidth:1
               },

               PasswordInfoText :{
                fontFamily : config.RegularTitleFontFamily,
                fontSize : config.fontSmall,
                margin: hp('2%'),
                color : config.Black
               },


                //-------------------Change Password--------------------------



                //-------------------More--------------------------


                MenuIconView:{
                  flexDirection:'row',
                   marginLeft: wp('2%'), 
                   marginTop: hp('2%'),
                   alignItems:'center'
                },

                MenuIcon :{
                  resizeMode:'contain',
                  width:wp('7%'),
                  height:hp('4%')
                },

                MenuTitleText:{
                  fontFamily : config.RegularTitleFontFamily,
             fontSize : config.fontSmall,
             marginLeft: wp('4%'),
            //  marginTop: hp('2%'),
             color : config.Black
                },

                MenuArrowView:{
                  flex:1,
                  alignItems:'flex-end'
                },

                MenuArrowIcon :{
                  marginRight:wp('2%')
                },



               //-------------------GSTdetail--------------------------

                AddressHeading : {
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.SpashTitleFontSize,
                  marginLeft: wp('2%'),
                  marginTop: hp('2%'),
                  color : config.Black
                },
                CompanyHeading : {
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontNormal,
                  color : config.Black
                },

                BillingTextRegular : {
                  fontFamily : config.RegularTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.Black
                },
                BillingTextTitle:{
                  fontFamily : config.SpashTitleFontFamily,
                  fontSize : config.fontExtraSmall,
                  color : config.Black,
                 
                  // alignSelf:'center'
                  
                },
});