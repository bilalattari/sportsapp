import React from 'react';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
import Header from './header'
export default class Sport extends React.Component {
  render() {
    return (
        <ImageBackground source={require("./images/SportsBackground.png")}  style={{width: '100%', height: '100%'}}>
        <View >
        <Header heading = 'Sports' />
        <View style = {{flexDirection : "row" , justifyContent : "space-around" , paddingTop : "6%"}}>
  
        <View style = {{flexDirection : "column" , height : 112 , width : "45%" ,  alignItems : "center" ,justifyContent : "center" ,
           borderRadius : 5  , backgroundColor : "#EEF4F8"}}>
        <Image  source = {require("./images/ProfileIcon.png")}  
         style = {{height : 35 , width : 35 ,}}/>
          <Text style = {{color : "#99BCCF" , paddingTop : 3}}> Profile </Text>
        </View>
  
        <View style = {{flexDirection : "column" , height : 112 ,width : "45%" , borderColor : "#000" , justifyContent : "center" ,
        borderRadius : 5 , backgroundColor : "#116389" , alignItems : "center" }}>
        <Image  source = {require("./images/TimesheetsIcon.png")}  
         style = {{height : 35 , width : 35 , }}/>
        <Text style = {{color : "#fff" , paddingTop : 3}}> Timesheets </Text>
        </View>
  
        </View>
        
        </View>
        </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
