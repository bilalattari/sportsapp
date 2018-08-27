import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <View style={styles.container}>
       <Image  source = {require("./images/SportsIcon_White.png")}  
       style = {{height : 30 , width : 30 , paddingRight : 6}}/>
        <Text style = {styles.headingStyle}>{this.props.heading}</Text> 	
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height : 60,
    flexDirection : "row",
    backgroundColor: '#116389',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle : {
      justifyContent : "center",
      textAlign  : "center",
      color : "#fff",
      fontSize : 16,
      paddingLeft : 6
  }
});
