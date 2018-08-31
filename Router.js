import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Sports from './Sports';
import Profile from './Profile';
import TimeSheet from './Timesheet';
export default class Routers extends Component {
    componentWillMount() {
        console.disableYellowBox = true
      }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Sports"
                        hideNavBar={true}
                        component={Sports}
                        title="Sports"
                        initial
                    />
                    <Scene key="Profile"
                        hideNavBar={true}
                        component={Profile}
                        
                    />
                    <Scene key="TimeSheet"
                        hideNavBar={true}
                        component={TimeSheet}
                        title="TimeSheet"
                        
                        
                        
                    />
                </Scene>
            </Router>
        )
    }
}