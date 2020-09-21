import React from 'react';
import {StyleSheet, ScrollView, Text,YellowBox, LogBox,   SafeAreaView, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import { View} from 'react-native-ui-lib';
import { colors } from '../../../style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import  Svg, {Circle}  from 'react-native-svg';
import Icon4 from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import {getSensors} from '../../../redux/action/tankAction';


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
                    style={{borderColor:'#0F5E9C',backgroundColor:'#000'}}
                    containerStyle={{
                        height:40, 
                        width:wp('86.3%'),                                              
                        borderWidth:1,
                        paddingLeft:50,
                        marginTop:10,
                        marginBottom:20}}
                    itemStyle={{
                        justifyContent:'flex-start',
                        borderRadius:5,                       
                        marginBottom:5,
                        paddingLeft:30,
                       
                    }}
                    dropDownStyle={{                       
                        elevation:50,                          
                        backgroundColor:'#000',
                    }}
                    labelStyle={{
                        fontSize:14,
                        textAlign:'left',
                        color:'#fff'
                                       
                    }}
                    //mapping
                    onChangeItem={item=> this.handleSubmit(item)}
                    ></DropDownPicker>
                    
                   
                    <View style={styles.drop}>
                        <Icon1 name="drop" size={30} color="#0F5E9C"width="100" height="100"/>
                    </View>

                    {/* <Svg style={styles.containerWave}height="15" width="15">
                    <Circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="blue"
                        strokeWidth="1.5"
                        fill="#2389DA"
                      
                    />
                    </Svg> */}

                    <Card
                    containerStyle={[styles.cardMainContainer,{backgroundColor:'#000',borderColor:'#2389DA', marginTop:300,height:70
                    }]}
                    > 
                    <Card.Title style={styles.cardTitle}>UPPER TANK FILLLEVEL</Card.Title>
                    <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}
                    >
                    <Icon3 name="graphic-eq" size={30} color="#0F5E9C"/>
                    </View>
                       <Text style={styles.text}>{tank[Index].fillLevel}</Text>
                    </View>                                    
                    </Card>
        
                    <Card
                    containerStyle={[styles.cardMainContainer,{backgroundColor:'#000',borderColor:'#2389DA', height:70}]}>
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
                    containerStyle={[styles.cardMainContainer1,{backgroundColor:'#000',borderColor:'#2389DA', width:140, height:140, marginTop:40}]}>
                        <Card.Title style={styles.cardTitle1}>MOTOR STATUS</Card.Title>
                        <View style={{justifyContent:'center',flexDirection:'row-reverse', paddingLeft:50}}>
                        <View style={styles.IconView1}>
                        <Icon4 name="poweroff" size={20} color="#0F5E9C"/>
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
       backgroundColor:'#000',     
    },
    cardMainContainer: {
        flex:1,
        borderColor:'#2389DA',
        borderRadius:30,             
        paddingHorizontal:15,
        borderWidth: 1,
        elevation:10,
        shadowRadius:10,
    
        marginBottom:15,
    },
    cardMainContainer1: {
        borderRadius:100,
        alignItems:'center',
        paddingHorizontal:15,
        backgroundColor:'#2389DA',
        borderWidth: 1,
        elevation:5,
        shadowRadius:10,
        marginLeft:150,
        marginBottom:10,
    },
    cardTitle: {
        alignSelf:'flex-start',
        fontSize: 12,
        marginBottom: hp('0.2%'),
        color:'#fff'
    },
    cardTitle1: {
        fontSize:10,
        color:'#fff',
        marginBottom: hp('0.2%'),
    },
    IconView:{
        width:35,
        height: 35,
        borderRadius:45,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        marginLeft:hp('30%'),
             
    },
    IconView1: {
        width:35,
        height: 35,
        borderRadius:15,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        marginTop:10
           
    },
    text: {
        marginBottom:5,
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        
    },
    text1: {
        marginTop:60,
        fontSize:15,
        marginLeft:30,
        fontWeight:'bold',
        color:'#fff'
    },
    containerWave: {
        
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#2389DA'
    },
    waveBall: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    drop: {
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        
    }
})