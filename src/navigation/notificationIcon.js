import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';


class NotificationIcon extends React.Component{
    constructor(props){
        super(props);
    }
    
        

render(){
    return(
        <View style={{flexDirection:'row', marginRight:wp('10%')}}>
            <TouchableOpacity onPress={()=>this.props.navigationProps.navigate("notification")}>
                <Icon name="notifications" size={30} style={{color:'#0F5E9C'}}></Icon>
            </TouchableOpacity>
        </View>
    );
}
}

export default NotificationIcon;

