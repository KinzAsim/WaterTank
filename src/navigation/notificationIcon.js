import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NotificationPusher from './notificationpusher';
import NotificationView from '../modules/notification/notificationView';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

class NotificationIcon extends React.Component{
    constructor(props){
        super(props);
    }
    
        

render(){ 
   const {navigationProps, notification} = this.props;
   console.log('PropsView', notification)

    return(
        <View style={{flexDirection:'row', marginRight:wp('10%')}}>
            <TouchableOpacity onPress={()=>navigationProps.navigate('NotificationView')}>
                <Icon name="notifications" size={30} style={{color:'#0F5E9C'}}></Icon>
            </TouchableOpacity>
        </View>
    );
}
}
mapStateToProps = (state) => ({
   notification: state.tank.notification
});

export default connect(mapStateToProps,null)(NotificationIcon);

