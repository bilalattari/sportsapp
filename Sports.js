import React from 'react';
import { StyleSheet, Text, View , ImageBackground , Image , TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header'
export default class Sport extends React.Component {
  render() {
    return (
      
        <ImageBackground source={require("./images/SportsBackground.png")}  style={{width: '100%', height: '100%'}}>
        <View >
        <Header heading = 'Sports' />
        <View style = {{flexDirection : "row" , justifyContent : "space-around" , paddingTop : "6%"}}>
  
        <TouchableOpacity style = {{flexDirection : "column" , height : 112 , width : "45%" ,  alignItems : "center" ,justifyContent : "center" ,
           borderRadius : 5  , backgroundColor : "#EEF4F8"}}  onPress = {()=> { Actions.Profile()}}>
        <Image  source = {require("./images/ProfileIcon.png")}  
         style = {{height : 35 , width : 35 ,}}/>
          <Text style = {{color : "#4882A2" , paddingTop : 3}}> Profile </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style = {{flexDirection : "column" , height : 112 ,width : "45%" , borderColor : "#000" , justifyContent : "center" ,
        borderRadius : 5 , backgroundColor : "#116389" , alignItems : "center" }}  onPress = {()=> { Actions.TimeSheet()}}>
        <Image  source = {require("./images/TimesheetsIcon.png")}  
         style = {{height : 35 , width : 35 , }}/>
        <Text style = {{color : "#88B5D2" , paddingTop : 3}}> Timesheets </Text>
        </TouchableOpacity>
  
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
