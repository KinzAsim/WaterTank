import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Item from './notificationItem';


export default class NotificationView extends React.Component{
constructor(props){
    super(props);
    this.state={
        DATA : [
            {
              id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
              title: "First Item",
            },
            {
              id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
              title: "Second Item",
            },
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Third Item",
            },
          ]
    }
}
 
            componentDidMount(){
              //  console.log('Hello');
            }

            clear = () => {
                this.props.clear();   
            } 

    render(){
    const {notification} = this.props;
    const{DATA} = this.state;

        return(

            <View style={styles.container}>
                <FlatList
                data={ DATA }
                renderItem={({item}) => <Item id={item.id} title={item.title}/>
                }
                keyExtractor={(item, index)=> index.toString()}
                >               
                </FlatList>
           


                <Button style={styles.btn}
                  title="CLEAR"                 
                  onPress={this.clear}>                  
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center'
    },
    btn: {
        justifyContent:'center',
        alignItems:'flex-end'
    }
})