import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './../modules/auth/login';
import TankTabNavigator from './TankTabNavigator';



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
     headerShown: true,
     headerStyle: {
        backgroundColor:'#757575'
    }
    }),
}
);

export default createAppContainer(
    App_Stack
);
