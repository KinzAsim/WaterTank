import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



export default class graphScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>
                    This is gussa :/
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