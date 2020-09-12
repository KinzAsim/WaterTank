 import React from 'react';
 import {ActivityIndicator, View} from 'react-native';
 import AsyncStorage from '@react-native-community/async-storage';
 import {loadUser} from '../../redux/action/authAction';
 import {connect} from 'react-redux';


class AuthLoadingScreen extends React.Component{
     constructor(props){
         super(props);
              this.state={
                   userData:{}
              }
     }
    componentDidMount(){
    this.loaderSubmit();
    }
     
    //fetch API
    componentDidUpdate(){
       this.props.loaderSubmit
    }

     loaderSubmit=()=> {
         this.setState.loadUser(getToken)
             //isLoggingIn: true,            
         
     }
 
     async storeToken(user){
         try{
             await AsyncStorage.setItem("userData");
             this.props.loadUser(this.storeToken)
         }
         catch(error){
             console.log("Something went wrong", console.error());
     }}

     async getToken(user){
         try{
             let userData = await 
             AsyncStorage.getItem("userData")
             this.props.loadUser(this.getToken)
         }
         catch(error){
            console.log("Something went wrong", console.error());
         }
     }

     render(){
         return(
             <View>
               <ActivityIndicator/>
             </View>
         );
     }
 }
 
 export default connect(null,{loadUser})(AuthLoadingScreen);