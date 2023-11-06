import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ActionSheetIOS, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
import ResponsiveImage from 'react-native-responsive-image';


import { useSelector } from 'react-redux';


export default function Start({navigation}) {


  const theme=useSelector(state=>state.theme)
  
  
 
  
  
    

  return (
    <View style={{  flex: 1,
      backgroundColor: theme=="light"?'lightblue':"#0f2557",
      alignItems: 'center',
      justifyContent: 'center',}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <ResponsiveImage initHeight="50" initWidth={50} source={require("../assets/back.png")}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={{margin:10,backgroundColor:theme=="light"?"white":"#28559a",borderRadius:5,padding:10}} onPress={()=>navigation.navigate("Zahtjevi")}><View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
           {theme=="light"?"":<Image  style={styles.mini }source={require("../assets/reqs.png")}/> }
           <Text style= {{fontWeight:"bold" ,color:theme=="light"?"black":"white"}}> ZAHTJEVI ZA PRIJATELJSTVO</Text>
           </View>
           </TouchableOpacity>
        <TouchableOpacity style={{margin:10,backgroundColor:theme=="light"?"white":"#28559a",borderRadius:5,padding:10}} onPress={()=>navigation.navigate("DodajFrenda")}><View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        { theme=="light"?"":<Image  style={styles.mini }source={require("../assets/add_friend.png")}/> }
          <Text style= {{fontWeight:"bold",color:theme=="light"?"black":"white"}}>DODAJ PRIJATELJA</Text>
          </View>
          </TouchableOpacity>
        <TouchableOpacity style={{margin:10,backgroundColor:theme=="light"?"white":"#28559a",borderRadius:5,padding:10}} onPress={()=>navigation.navigate("ListaFrendova")}>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          { theme=="light"? "":<Image  style={styles.mini }source={require("../assets/friendList.png")}/> }
            <Text style= {{fontWeight:"bold",color:theme=="light"?"black":"white"}}>LISTA PRIJATELJA</Text>
            </View></TouchableOpacity>
   
        
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },  mini:{
    height:22, 
    width:22, 
    marginRight:4
  },
  tinyLogo: {
    width:Dimensions.get("window").width/10,
    height:Dimensions.get("window").height/25, 
    margin:5
  },
  login :{
      
      flexDirection:"row",
      borderWidth:1,
      borderRadius:9,
      borderColor:"white",
      padding:10,
      justifyContent:'center',
      alignItems:"center",
      margin:15,
      backgroundColor:"white",
      width:300,
      height:50
      

  },
  krug:{
    backgroundColor:"white",
    borderRadius:150,
    borderWidth:1,
    borderColor:"white",
    width:300,
    height:300,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40
  }

});

