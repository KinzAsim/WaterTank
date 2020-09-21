import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



export default class logScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>
                    Logs
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'center'
    }
})