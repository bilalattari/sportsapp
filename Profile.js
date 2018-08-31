import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image , ScrollView } from 'react-native';
import Header from './header'
import firebase from 'firebase'

export default class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      wwcc : '',
      trb : '',
      trbExpiry : '',
      name : '',
      sportsPayRate : ''
    }
    firebase.database().ref('/users/LKBG-9w38ryefd').once('value',
      data => {
        const Obj = data.val()
        this.setState({
          wwcc: Obj.wwcc,
          trb: Obj.trb ,
          trbExpiry: Obj.trbExpiry,
          name : `${Obj.givenName}  ${Obj.surname}`,
          sportsPayRate : Obj.sportsPayRate
        })
      })
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <Header heading='Profile' />
        <View style={{ marginHorizontal: "3%", marginTop: '2%', marginBottom: 12 }}>
          <ImageBackground source={require("./images/ProfileBackground.png")}
            style={{ height: "98%", width: "100%", }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ marginBottom: -64, marginTop: "8%", borderColor: "#17658B", borderRadius: 125 ,zIndex : 1000 }}>
                <Image source={require("./images/12.jpg")}
                  style={{ height: 134, width: 132, resizeMode: "cover", borderRadius: 125, }} />
              </View>
              <View style={{
                height: '60%', width: '80%',
                borderColor: '#DFE5EC', borderWidth: 1
              }}>
                <View style={{ paddingLeft: "7%", marginTop: '32%', flexDirection : 'row' }}>
                  <Text style={{ color: "#596F83", fontSize: 16 }}>  NAME :</Text>
                  <Text style={{ color: "#596F83", fontSize: 16 }}>  {this.state.name}   </Text>
                </View>

                <View style={styles.textView}>
                  <Image source={require("./images/DownloadIcon.png")}
                    style={styles.downloadIcon} />
                  <Text style={styles.heading}>WWCC </Text>
                  <Text style={styles.headingTxt}>{this.state.wwcc} </Text>
                </View>
                <View style={styles.textView}>
                  <Image source={require("./images/DownloadIcon.png")}
                    style={styles.downloadIcon} />
                  <Text style={styles.heading}>TRB </Text>
                  <Text style={styles.headingTxt}>{this.state.trb} </Text>
                  
                </View>

                <View style={styles.textView}>
                  <Image source={require("./images/DownloadIcon.png")}
                    style={styles.downloadIcon} />
                  <Text style={styles.heading} >TRB Expiry   </Text>
                  <Text style={styles.headingTxt}>{this.state.trbExpiry} </Text>
                  
                </View>

                <View style={{ paddingLeft: "10%", marginTop: '8%', flexDirection : 'row' }}>
                  <Text style={{ color: "#596F83", fontSize: 18, }}>
                    PAY RATE  </Text>
                  <Text style={{ color: "#596F83", fontSize: 18, }}>  {this.state.sportsPayRate} </Text>
                    
                </View>


              </View>
            </View>
          </ImageBackground >
        </View>
      </View>
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
  downloadIcon: {
    height: 16, width: 16 , marginRight: 4
  },
  heading: {
    color: "#8891A0",
    fontSize: 15,
    width : '30%'
  },
  headingTxt :  {
    color: "#8891A0",
    fontSize: 15,
  },

  textView: {
    flexDirection: 'row', paddingLeft: "8%", marginTop: 12, alignItems: "center"
  }

});
