import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './../modules/auth/login';
import TankTabNavigator from './TankTabNavigator';
import AuthLoadingScreen from '../modules/auth/AuthLoadingScreen';
import NotificationIcon from './notificationIcon';
import logScreen from '../modules/tankMonitorinSystem/logs/logView';
import NotificationView from '../modules/notification/notificationView';
import notificationVI from '../modules/notification/notificationVI';


const Auth_Stack = createStackNavigator({
    auth: {
        screen: login,        
    },   
   
},
{
    defaultNavigationOptions:()=>({
        headerShown:false
    })
}
     
);
const App_Stack = createStackNavigator({
    home: {
        screen: TankTabNavigator        
    },
    log:{
        screen: logScreen,  
    },
    notification: {
        screen: NotificationView
    }
},
{
    defaultNavigationOptions: ({navigation}) =>({
     title: 'Tank Monitoring System',

    headerTitleStyle: {
     color:'white'
    },
     headerShown:true,
     
     headerBackImage:()=>false,

     headerStyle: {
        backgroundColor:'#000',   
    }, 
            
    headerRight:()=>  <NotificationIcon navigationProps={navigation}/>        
  
    }),
}
);



export default createAppContainer(
    createSwitchNavigator(
        {
        AuthLoading:AuthLoadingScreen,    
        auth:Auth_Stack,
        home:App_Stack,
        log:App_Stack,
        notification:App_Stack
        },
        {
            initialRouteName:'AuthLoading',
        }
 )
);
