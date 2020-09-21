import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';



export default class NotificationItem extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

       const {id, title}= this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.text}>{title}</Text>
            </View>            
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        borderRadius: 10,
        backgroundColor:'blue',
        marginVertical:10
    },
    touch: {
        justifyContent:'center'
    },
    text:{
        color:'#fff'
    }
})