import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default class screenTransaction extends Component{
    render(){
        return(
        <View style={styles1.container}>
            <Text style={styles1.text}> transaction</Text>
        </View>
        )
    }
}

const styles1= StyleSheet.create({
    container:{
        flex:1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: '#604580'
    },

    text:{
        color: '#402060',
        justifyContent : 'center',
        fontStyle:'bold',
        fontSize: 20

    }
})