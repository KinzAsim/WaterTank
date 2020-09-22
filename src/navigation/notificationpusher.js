import Pusher from 'pusher-js/react-native';
import React from 'react';
import { View, Platform,Text} from 'react-native';
import { updateSensors } from '../redux/action/tankAction';
import {connect} from 'react-redux';
import PushNotification from 'react-native-push-notification';


var channel = null;


class NotificationPusher extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true
        }
    }
    
//pusher 
async componentDidMount() {
    const {user,updateSensors} = await this.props;
   
    var pusher = new Pusher('f00f0afe5cbf360133db', {
        cluster: 'ap2',
        forceTLS: true
    });
    console.log('id', user.id)

    channel = pusher.subscribe(`${user.id}`);
    console.log('channel',channel)

    channel.bind ('update',function(data) {   
        console.log('pusher', data)     
        updateSensors(data);
    },
   
    channel.bind ('notification',function(data){ 
        console.log('Notify',data)

        if(Platform.OS === 'android'){
        PushNotification.localNotification ({
            id:0,
            messgae:"Notification",
            vibration:300
            });
            }
        })
    );
            this.state({
                loading:false
        })
    }

render() {
         const {notification,user}= this.props;
         const{loading}=this.state;
         console.log('state',notification);

    return(
      <View>
          <Text>Kinza</Text> 
      </View>
        ); 
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    notification: state.tank.notification,
})
    
export default connect(mapStateToProps,{updateSensors})(NotificationPusher);