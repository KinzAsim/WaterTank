import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';



export default class NotificationIcon extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <View style={{flexDirection:'row', marginRight:wp('10%')}}>
            <TouchableOpacity onPress={()=>this.navigation.navigate("HomeScreen")}>
                <Icon name="notifications" style={{color:'red'}}></Icon>
            </TouchableOpacity>
        </View>
    );
}
}
