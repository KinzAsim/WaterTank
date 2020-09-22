import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Item from './notificationItem';


export default class NotificationView extends React.Component{
constructor(props){
    super(props);
    this.state={
        // DATA : [
        //     {
        //       id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        //       title: "First Item",
        //     },
        //     {
        //       id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        //       title: "Second Item",
        //     },
        //     {
        //       id: "58694a0f-3da1-471f-bd96-145571e29d72",
        //       title: "Third Item",
        //     },
        //   ]
    }
}
 
            componentDidMount(){
                const {notification} = this.props;
               //  console.log('Hello', notification);
            }

            clear = () => {
              //  console.log('clear',clear)
                this.props.clear();   
            }  

    render(){
    const {notification} = this.props;
   // console.log('notice',notification);
  //  const{DATA} = this.state;

        return(

            <View style={styles.container}>
                <FlatList               
                data={notification}
                renderItem={({item}) => <Item id={item.id} title={item.title}/>
                }
                keyExtractor={(item, index)=> index.toString()}
                >               
                </FlatList>
           
           <View style={styles.btn}>
           <Button style={styles.btn}
                  title="CLEAR"              
                  onPress={this.clear}>                  
                </Button>
           </View>               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center'
    },
    btn: {  
        marginTop:800,  
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 16,

    }
})