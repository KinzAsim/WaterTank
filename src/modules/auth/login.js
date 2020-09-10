
import React from 'react';
import {StyleSheet,View,TextInput,Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../style';
import {connect} from 'react-redux';
import {login} from '../../redux/action/authAction';


class LoginScreen extends React.Component{    
    constructor(props) {
      super(props);
      this.state= {
          email: '',
          password: '',
      }      
    }

   async handleSubmit(){  
      //const {email,password}=this.state;
     // await this.props.login(this.state.email,this.state.password)
      this.props.navigation.navigate("home") 
    }
  
  render(){
    return(      
        <KeyboardAvoidingView 
                          style={styles.conatiner}>   

                <View style={styles.iconView}>               
                         <Icon style={styles.icon} name="user" size={30} color="#757575"/>
                </View>

         
                         <TextInput
                           placeholder="Enter your email" 
                           placeholderTextColor="#fff"
                           style={styles.input}                              
                           inlineImageLeft='email'
                           autoCapitalize = 'none'
                           rightIcon="email"
                           onChangeText={text => this.setState({ email: text })}
                           //value={value} 
                          />
                 
               
                       <TextInput
                          placeholder="Enter your password"
                          placeholderTextColor={colors.whiteOne}
                          style={styles.input}
                          inlineImageLeft='lock'                          
                          autoCapitalize = 'none'
                          rightIcon="lock"
                          secureTextEntry
                          onChangeText={text => this.setState({ password: text })}/>
                 
  
                       <TouchableOpacity style={styles.loginbtn} onPress={()=>this.handleSubmit()}>
                          <Text style={{color:'#192f6a'}}>Login</Text>
                       </TouchableOpacity> 
                  
           </KeyboardAvoidingView>                                                     
     
    );
  }
  }
  
  export default connect(null,{login})(LoginScreen);
  
      const styles = StyleSheet.create({
                  conatiner: {
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#FFC107',                    
                   },
                  
                  input: {
                    borderRadius:30,
                    borderWidth:1,
                    borderColor:'transparent',
                    color:'white',
                    backgroundColor:'rgba(25, 47, 106,0.5)',
                    width: wp('80%'),
                    height:hp('7%'),
                    marginTop:20,
                    paddingHorizontal:20,
                    fontSize: 15,

                  },
                  
                  iconView:{
                    marginBottom:hp('10%'),
                    width: 120,
                    height: 120,
                    borderRadius:60,
                    backgroundColor:colors.background,                  
                    shadowColor:'#000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 20,
                    padding:24
                  },
                  
                  loginbtn :{
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'transparent',
                    width: wp('70%'),
                    height: hp('6%'),
                    borderRadius: 30,
                    marginBottom: 10,
                    marginTop: 50,
                    borderWidth: 1,
                    borderColor: '#192f6a'
                  },

                  icon:{
                    fontSize: hp('5%'),
                    marginBottom: hp('0.5%')
                  }
                           
                  })
  
  