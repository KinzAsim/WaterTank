import React from 'react';
import {View,TouchableOpacity} from 'react-native';



export default class NotificationIcon extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity></TouchableOpacity>
        </View>
    );
}
}
