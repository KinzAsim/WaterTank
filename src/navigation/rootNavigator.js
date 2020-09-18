import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './../modules/auth/login';
import TankTabNavigator from './TankTabNavigator';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthLoadingScreen from '../modules/auth/AuthLoadingScreen';

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
},
{
    defaultNavigationOptions: ({navigation}) =>({
     title: 'Tank Monitoring System',
     headerShown:true,
     headerBackImage:()=>false,
     headerStyle: {
        backgroundColor:'#fff'
    },         
    headerRight:()=>(
        <TouchableOpacity onPress={()=>this.navigation.navigate('HomeScreen')}>
               <Icon style={{marginRight:20}}
               name="notifications" color="#0F5E9C" size={30}/>
        </TouchableOpacity>
        
    )         
  
    }),
}
);

export default createAppContainer(
    createSwitchNavigator(
        {
        AuthLoading:AuthLoadingScreen,    
        auth:Auth_Stack,
        home:App_Stack
        },
        {
            initialRouteName:'AuthLoading',
        }
 )
);
