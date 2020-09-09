import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './../modules/auth/login';
import home from '../modules/tankMonitorinSystem/home/HomeView';

const App_Stack = createStackNavigator({
    login: {
        screen: login
        
    },
    home: {
        screen: home
    },
},
{
    defaultNavigationOptions: () =>({
     headerShown: false,
    }),
}
);
export default createAppContainer(
    App_Stack
);
