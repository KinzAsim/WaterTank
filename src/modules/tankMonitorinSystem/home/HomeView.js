import React from 'react';
import {StyleSheet, ScrollView, Text,YellowBox, LogBox,   SafeAreaView} from 'react-native';
import { Card } from 'react-native-elements';
import { View} from 'react-native-ui-lib';
import { colors } from '../../../style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import {getSensors} from '../../../redux/action/tankAction';
import Pusher from 'pusher-js/react-native';

//YellowBox.ignoreWarnings(['']);
//LogBox.ignoreAllLogs(' Possible Unhandled Promise Rejection');


 class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state= {
         Modules: [
           {label:'Fill Level Module', value:'Fill Level module'}
        ],
         selectedModule:0,
         selectedModuleValue: 'Fill Level module',
         loading: true,
         isDialogVisible1: false,
         isDialogVisible2: false,
         sensorIndex: null,
         Index:2,
         country: 'tank'
        }
    }
    
    async componentDidMount () {
        const {user} = this.props;
        console.log('user data',user);
        const done = await this.props.getSensors(user.id);
        if(done=='done'){
            console.log('done');
        }
    }   
        handleSubmit = (item) => {
           //console.log('list', List);
           const {tank} = this.props;
           const i = tank.findIndex(x => x.name === item.value);
           console.log('sensor',i);
            this.setState({
            selectedModule:item.label,
            selectedModuleValue:item.value,
            Index:i
            })
    }
    render(){
        const {Modules,selectedModuleValue,Index} = this.state;
        const {user,state,tank,sensorLoading} = this.props; 
        //console.log('state',tank);
        console.log('sensorloading',sensorLoading);

        if(tank[Index] === undefined){
            return(
            <View>
                <Text>Not Working</Text>
            </View>
            );
        }
        else{
            return(
            <SafeAreaView style={styles.container}>   
              {sensorLoading ? (
                    <View>
                        <Text>Welcome</Text>
                    </View>
                ): (
            <ScrollView style={styles.container}> 

                    <DropDownPicker
                    items={Modules}
                    defaultValue={selectedModuleValue}
                    style={{borderColor:'0F5E9C'}}
                    containerStyle={{
                        height:40, 
                        width:wp('86.3%'), 
                        paddingLeft:50,
                        marginTop:20,
                        marginBottom:20}}
                    itemStyle={{
                        justifyContent:'flex-start',
                        borderRadius:5,
                        marginBottom:5,
                        paddingLeft:30
                    }}
                    dropDownStyle={{                       
                        elevation:50}}
                    labelStyle={{
                        fontSize:14,
                        textAlign:'left'                 
                    }}
                    //mapping
                    onChangeItem={item=> this.handleSubmit(item)}
                    ></DropDownPicker>
    
                    <Card
                    containerStyle={[styles.cardMainContainer,{backgroundColor:'#2389DA',borderColor:colors.whiteOne                
                    }]}
                    > 
                    <Card.Title style={styles.cardTitle}>UPPER TANK FILLLEVEL</Card.Title>
                    <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}>
                    <Icon3 name="graphic-eq" size={30} color="#0F5E9C"/>
                    </View>
                       <Text style={styles.text}>{tank[Index].fillLevel}</Text>
                    </View>                                    
                    </Card>
        
                    <Card
                    containerStyle={[styles.cardMainContainer,{backgroundColor:'#2389DA',borderColor:colors.whiteOne}]}>
                        <Card.Title style={styles.cardTitle}>LOWER TANK FILLLEVEL</Card.Title>
                        <View style={{justifyContent:'center', flexDirection:'row-reverse'}}>
                        <View style={styles.IconView}>
                        <Icon3 name="graphic-eq" size={30} color="#0F5E9C"/>
                    </View>
                        <Text              
                        style={styles.text}>{tank[Index].fillLevel1}</Text>  
                        </View>                
                    </Card>
        
                    <Card
                    containerStyle={[styles.cardMainContainer1,{backgroundColor:'#d4f1f9',borderColor:colors.whiteOne, width:450, height:200}]}>
                        <Card.Title style={styles.cardTitle1}>MOTOR STATUS</Card.Title>
                        <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                        <View style={styles.IconView1}>
                        <Icon4 name="poweroff" size={30} color="#0F5E9C"/>
                    </View>
    
                    {tank[Index].motor === 1 ?
                    (
                    <Text style={styles.text1}>ON</Text>) :
                    (
                        <Text style={styles.text1}>OFF</Text>
                    )
                    }    
                    </View>                
                    </Card>
    
                    {/* <Card 
                    containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne}]}>
                        <Card.Title style={styles.cardTitle}>FILL LEVEL</Card.Title>
                        <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                        <View style={styles.IconView}>
                        <Icon name="bomb" size={30} color="#900"/>
                    </View>
                        <Text style={styles.text}>This is House</Text>  
                        </View>                                    
                    </Card> */}              
                </ScrollView>
                )}
          </SafeAreaView>
            )
        }
    }
}
        //pusher 
        // const pusher = new Pusher(APP_KEY, {
        //     cluster: APP_CLUSTER,
        //     forceTLS: true
        // });

        //subscribe to channels
        // const channel = pusher.subscribe('my-channel');
        
        const mapStateToProps = (state) => ({
        //state.reducer.variable
        user:state.auth.user,
        state:state,
        tank:state.tank.sensors        
        })


export default connect(mapStateToProps,{getSensors})(HomeScreen);


const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'#fff',     
    },
    cardMainContainer: {
        flex:1,
        borderRadius:30,
        paddingHorizontal:15,
        borderWidth: 0,
        elevation:10,
        shadowRadius:10,
        marginTop:10,
        marginBottom:15,
    },
    cardMainContainer1: {
        borderRadius:50,
        paddingHorizontal:45,
        backgroundColor:'#d4f1f9',
        borderWidth: 0,
        elevation:5,
        shadowRadius:10,
        marginTop:100,
        marginBottom:10,
    },
    cardTitle: {
        alignSelf:'flex-end',
        fontSize: 15,
        marginTop: hp('0.5%'),
        marginBottom: hp('0.5%'),
        color:'#fff'
    },
    cardTitle1: {
        alignSelf: 'center',
        fontSize:15,
        marginTop:hp('0.5%'),
        color:'#fff'
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
    IconView1: {
        width:65,
        height: 65,
        borderRadius:35,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        flexDirection:'column'
           
    },
    text: {
        marginTop:5,
        fontSize:50,
        fontWeight:'bold',
        color:'#0F5E9C'
    },
    text1: {
        marginTop:25,
        fontSize:50,
        fontWeight:'bold',
        alignItems:'center',
        color:'#0F5E9C'
    }
})