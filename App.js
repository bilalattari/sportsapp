import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Image} from 'react-native';
import Header from './header'
export default class App extends React.Component {
  render() {
    return (
       <ImageBackground source={require("./images/SportsBackground.png")}  style={{width: '100%', height: '100%'}}>
      <View >
      <Header heading = 'Sports' />
      <View style = {{flexDirection : "row" , justifyContent : "space-around"}}>

      <View style = {{flexDirection : "column" , height : 125 , width : "45%" ,  alignItems : "center",justifyContent : "center" ,
       borderColor : "#000" , borderWidth : 1 , borderRadius : 12  , backgroundColor : "#EEF4F8"}}>
      <Image  source = {require("./images/ProfileIcon.png")}  
       style = {{height : 30 , width : 30 ,}}/>
        <Text> Profile </Text>
      </View>

      <View style = {{flexDirection : "column" , height : 125 ,width : "45%" , borderColor : "#000" , justifyContent : "center" ,
      borderWidth : 1 , borderRadius : 12 , backgroundColor : "#116389" , alignItems : "center" }}>
      <Image  source = {require("./images/TimesheetsIcon.png")}  
       style = {{height : 30 , width : 30 , }}/>
      <Text> Time Sheet </Text>
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
