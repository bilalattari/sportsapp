  import React from 'react';
  import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
  import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
  import Header from './header'
  import AwesomeAlert from 'react-native-awesome-alerts';
  import firebase from 'firebase'
  export default class TimeSheet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userID: '',
        teamNameArr: [],
        teamCounter: 0,
        sessions: [],
        eventDate: {},
        disabled: false,
        showAlert: false
      };
      firebase.database().ref('/users/LKBG-9w38ryefd').once('value',
        data => {
          const teamObj = data.val()
          // console.log(data.val())
          this.setState({
            userID: data.key,
            teamNameArr: teamObj.sportsTeams,
            teamNameArrLength: teamObj.sportsTeams.length - 1
          })
        })
    }
    componentWillMount() {
      firebase.database().ref('/sessions').once('value',
        data => {
          this.setState({ sessions: data.val() })
          this.disableBtn(data.val())
          this.eventDate(this.state.teamNameArr[this.state.teamCounter])
        })
    }
    showAlert = () => {
      this.setState({
        showAlert: true
      });
    };
  
    hideAlert = () => {
      this.setState({
        showAlert: false
      });
    };
    openAlert = (Obj) => {
      Object.keys(this.state.eventDate).map((data => {
        if (data === Obj.date) {
          Alert.alert(
            `${Obj.teamName}`,
            `${Obj.date}`,
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
          )
        }
      }))

    }
    eventDate = (teamName) => {
      console.log('Bilal')
      const EventDate = {}
      const teamEvent = this.state.sessions.filter(data => data.sportsTeam === teamName)
      teamEvent.map((data => {
        EventDate[new Date(data.date_time).toISOString().slice(0, 10)] =
          { selected: true, marked: true, selectedColor: 'blue',  }
      }))
      this.setState({ eventDate: EventDate })
      console.log(this.state.eventDate)
    }
    onForward() {
      const props = this.state
      if (props.teamCounter < props.teamNameArrLength) {
        this.setState({ teamCounter: props.teamCounter + 1 }, () => { this.disableBtn(this.state.sessions) })
      }
      else if (props.teamCounter <= props.teamNameArrLength) {
        this.setState({ teamCounter: 0 }, () => { this.disableBtn(this.state.sessions) })
      }
    }
    onBack() {
      const props = this.state
      if (props.teamCounter == 0) {
        this.setState({ teamCounter: props.teamNameArrLength }, () => { this.disableBtn(this.state.sessions) })
      }
      else if (props.teamCounter == props.teamNameArrLength) {
        this.setState({ teamCounter: props.teamCounter - 1 }, () => { this.disableBtn(this.state.sessions) })
      }
      else if (props.teamCounter < props.teamNameArrLength){
        this.setState({ teamCounter: props.teamCounter - 1 }, () => { this.disableBtn(this.state.sessions) })
      }
    }
    signInFunc(data) {
      const newSession = data
      console.log(newSession)
      this.state.sessions.push(newSession)
      firebase.database().ref('/sessions').set(this.state.sessions)
      firebase.database().ref('/sessions').once('value',
        data => {
          this.setState({ sessions: data.val() })
          this.disableBtn(data.val())
        })
    }
    disableBtn(data) {
      this.eventDate(this.state.teamNameArr[this.state.teamCounter])
      for (let i = 0; i < data.length; i++) {
        console.log( data[i].sportsTeam , this.state.teamNameArr[this.state.teamCounter] ,   new Date(data[i].date_time).toLocaleDateString() ,new Date().toLocaleDateString() )
        if (data[i].sportsTeam === this.state.teamNameArr[this.state.teamCounter] &&
          new Date(data[i].date_time).toLocaleDateString() === new Date().toLocaleDateString()) {
          this.setState({ disabled: true })
          break
        }
        else {
          this.setState({ disabled: false })
        }
      }
    }
    render() {
      return (
        <View style={{ flex: 1 }} >
          <Header heading='Timesheet' />
          <View style={styles.container}>
            <View style={styles.calenderContainer}>
              <View style={styles.teamNameView}>
                <TouchableOpacity onPress={this.onBack.bind(this)}>
                  <Image source={require("./images/LeftArrow.png")} style={styles.arrowHeight} />
                </TouchableOpacity>
                <Text style={styles.headingText} >
                  {
                    this.state.teamNameArr[this.state.teamCounter]
                  }
                </Text>
                <TouchableOpacity onPress={this.onForward.bind(this)}>
                  <Image source={require("./images/RightArrow.png")} style={styles.arrowHeight} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style=
                  {(this.state.disabled) ? styles.btnDisabled  : styles.btnEnabled}
                  onPress={this.signInFunc.bind(this, {
                    sportsTeam: this.state.teamNameArr[this.state.teamCounter],
                    date_time: new Date().toLocaleString(),
                    userID: this.state.userID
                  })}
                  disabled={(this.state.disabled) ? true : false}>
                  <Text style={{ color: "#4A7EA1", fontSize: 19, paddingHorizontal: '28%', }}>
                    SIGN IN
                </Text>
                </TouchableOpacity>
              </View>

              <View style={{ backgroundColor: "#AFCFEB" }}>
                <Text style={{
                  color: "#397B9D", fontSize: 18, marginTop: '9%', marginBottom: '7%',
                  textAlign: "center"
                }}>
                  PREVIOUS HISTORY : </Text>
                <View  >
                  <Calendar
                    onDayPress={(day) => {   this.openAlert({ date: day.dateString, teamName: this.state.teamNameArr[this.state.teamCounter] })
                    ,console.log('selected day', day) }}
                    onDayLongPress={(day) => {
                      this.openAlert({ date: day.dateString, teamName: this.state.teamNameArr[this.state.teamCounter] })
                    }}
                    monthFormat={'MM yyyy'}
                    firstDay={1}
                    onPressArrowLeft={substractMonth => substractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                    markingType={'custom'}
                    markedDates={this.state.eventDate}
                    theme={{
                      calendarBackground: '#AFCFEB',
                      textSectionTitleColor : "#0E6486",
                      dayTextColor: '#0E6486',
                      textDayFontSize: 12,
                      textMonthFontSize: 12,
                      textDayHeaderFontSize: 12
                    }}
                  />
                </View>
              </View>

            </View>
          </View>

          <View>
          </View>
        </View>

      );
    }
  }

  const styles = StyleSheet.create({
    arrowHeight: {
      height: 20, width: 20
    },
    container: {
      flex: 1,
      backgroundColor: "#F0F5F9", marginTop: "1%", marginBottom: "2%", marginLeft: "1%", marginRight: '1%',
      borderColor: "#DEE6ED", borderWidth: 1, width: "99%", height: "100%",
    },
    calenderContainer: {
      height: '93%',
      backgroundColor: "#F0F5F9",
      borderColor: "#E5EAEF", borderWidth: 1, marginHorizontal: "10%", marginTop: "8%", marginBottom: "3%"
    },
    teamNameView: {
      flexDirection: "row", justifyContent: "center", height: 8, justifyContent: "space-around",
      alignItems: "center", marginTop: 41, marginBottom: 22
    },
    headingText: {
      color: "#4A6074", fontSize: 20
    }
    ,
    btnEnabled : {
        height: 40, backgroundColor: "#94BFE5",
        justifyContent: "center", alignItems: "center", zIndex: 1000, marginBottom: -14,
        marginHorizontal : "10%"
    },
    btnDisabled : {
      height: 40, backgroundColor: "#B7D2EA",marginHorizontal : "10%",
      justifyContent: "center", alignItems: "center", zIndex: 1000, marginBottom: -14
    }
  });
