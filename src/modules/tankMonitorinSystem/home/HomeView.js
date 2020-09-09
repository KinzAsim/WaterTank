import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



export default class home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>This is home</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'center'
    }
})