import React from 'react';
import {StyleSheet, ScrollView, Text,YellowBox, LogBox} from 'react-native';
import { Card } from 'react-native-elements';
import { View, ActionBar } from 'react-native-ui-lib';
import { colors } from '../../../style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
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
         Index:0,
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
           // console.log('list', List);
            this.setState({
            selectedModule:item.label,
            selectedModuleValue:item.value
            })
    } 
    //     const { navigation } = this.props;
    //     console.log('navigation',navigation);
    //     const tab = await this.props.getSensors(user.id);
    // }

  
    // handleSubmit = () => {
    //    const {sensors}= this.props;
    //    const t = sensors.findIndex(i => i.name === selectedModuleValue);
      
    // }
   
    
    render(){
        const {Modules,selectedModuleValue} = this.state;
        const {user,state,tank} = this.props; 

        console.log('state',selectedModuleValue);
        
        return(
            <ScrollView style={styles.container}>
                               
                <DropDownPicker
                items={Modules}
                defaultValue={selectedModuleValue}
                style={{borderColor:'purple'}}
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
                    backgroundColor:'#fff',
                    elevation:50}}
                labelStyle={{
                    fontSize:14,
                    textAlign:'left'                   
                }}
                //mapping
                onChangeItem={item=> this.handleSubmit(item)}
                ></DropDownPicker>

                <Card
                containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne
                }]}> 
                <Card.Title style={styles.cardTitle}>MOTOR STATUS</Card.Title>
                <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                <View style={styles.IconView}>
                <Icon name="rocket" size={30} color="#900"/>
                </View>
                   <Text style={styles.text}>ON</Text>
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
                    <Icon3 name="graphic-eq" size={30} color="#900"/>
                </View>
                    <Text style={styles.text}>Set Threshold</Text>  
                    </View>                
                </Card>


                <Card
                containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne}]}>
                    <Card.Title style={styles.cardTitle}>LOWER THRESHOLD</Card.Title>
                    <View style={{justifyContent:'center', flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}>
                    <Icon1 name="angry" size={30} color="#900"/>
                </View>
                    <Text style={styles.text}>Set Threshold</Text>  
                    </View>                
                </Card>
                           
            </ScrollView>
        );
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
       backgroundColor:'#fff',     
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