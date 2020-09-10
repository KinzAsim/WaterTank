import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import { Card } from 'react-native-elements';
import { View, ActionBar } from 'react-native-ui-lib';
import { colors } from '../../../style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';



export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
        title: 'Tank Monitoring System',
        headerShown:true,       
        headerStyle: {
            backgroundColor:'#757575'
        }
    }
    
    render(){
        return(
            <ScrollView style={styles.container}>

                <Card
                containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne
                }]}> 
                <Card.Title style={styles.cardTitle}>MOTOR STATUS</Card.Title>
                <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                <View style={styles.IconView}>
                    <Icon name="rocket" size={30} color="#900"/>
                </View>
                   <Text style={styles.text}>This is Home</Text>
                </View>                                    
                </Card>

                <Card 
                containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne}]}>
                    <Card.Title style={styles.cardTitle}>FILL LEVEL</Card.Title>
                    <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}>
                    <Icon name="bomb" size={30} color="#900"/>
                </View>
                    <Text style={styles.text}>This is House</Text>  
                    </View>                                    
                </Card>

                <Card
                containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne}]}>
                    <Card.Title style={styles.cardTitle}>UPPER THRESHOLD</Card.Title>
                    <View style={{justifyContent:'center', flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}>
                    <Icon name="smile-o" size={30} color="#900"/>
                </View>
                    <Text style={styles.text}>This is Ghar</Text>  
                    </View>                
                </Card>


                <Card
                containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne}]}>
                    <Card.Title style={styles.cardTitle}>LOWER THRESHOLD</Card.Title>
                    <View style={{justifyContent:'center', flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}>
                    <Icon1 name="angry" size={30} color="#900"/>
                </View>
                    <Text style={styles.text}>This is Bangla</Text>  
                    </View>                
                </Card>
                           
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'#FFC107',     
    },
    cardMainContainer: {
        flex:1,
        borderRadius:30,
        paddingHorizontal:15,
        borderWidth: 0,
        elevation:5,
        shadowRadius:10,
        marginTop:10,
        marginBottom:15,
    },
    cardTitle: {
        alignSelf:'flex-start',
        fontSize: 15,
        marginTop: hp('0.5%'),
        marginBottom: hp('0.5%'),
        color:'#000'
    },
    IconView:{
        width:65,
        height: 65,
        borderRadius:35,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        marginLeft:hp('30%')       
    },
    text: {
        marginTop:5,
        fontSize:15,
        fontWeight:'bold',
        color:'#757575'
    }
})