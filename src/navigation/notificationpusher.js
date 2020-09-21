import Pusher from 'pusher-js/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native-ui-lib';
import { updateSensors } from '../redux/action/tankAction';


var channel = null;


class NotificationPusher extends React.Component{
    constructor(props){
        super(props);
    }
    
//pusher 
componentDidMount() {
    const {user,updateSensors} = this.props;
    console.log('update', updateSensors);
    var pusher = new Pusher('f00f0afe5cbf360133db', {
        cluster: 'ap2',
        forceTLS: true
    });

    channel = pusher.subscribe(`${user.id}`);


    pusher.bind (function(data) {
        
        updateSensors(data);
    }
);
}

render() {
    return(
      <View style={styles.container}>
          <Text>Kinza</Text>
      </View>
    );
}
}

export default NotificationPusher;