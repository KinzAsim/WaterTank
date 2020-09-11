import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './../modules/auth/login';
import TankTabNavigator from './TankTabNavigator';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App_Stack = createStackNavigator({
    login: {
        screen: login,        
    },
    home: {
        screen: TankTabNavigator        
    },
    graphs: {
        screen: TankTabNavigator
    },
    alerts: {
        screen: TankTabNavigator
    }, 
    logs: {
        screen: TankTabNavigator
    }, 
},
{
    defaultNavigationOptions: () =>({
     title: 'Tank Monitoring System',
     headerShown:true,
     headerBackImage:false,
     headerStyle: {
        backgroundColor:'#fff'
    },         
    headerRight:(
        <TouchableOpacity onPress={()=>this.navigation.navigate('HomeScreen')}>
               <Icon style={{marginRight:20}}
               name="notifications" color="red" size={30}/>
        </TouchableOpacity>
        
    )         
  
    }),
}
);

export default createAppContainer(
    App_Stack
);
