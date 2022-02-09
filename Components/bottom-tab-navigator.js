import React,{Component} from 'react';
import screenSearch from '../screens/search';
import screenTransaction from '../screens/transaction';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab=createBottomTabNavigator()
export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <TabNavigator>
                    <Tab.screen name="transaction" component={screenTransaction}/>
                    <Tab.screen name="search" component = {screenSearch}/>
                </TabNavigator>
            </NavigationContainer>
        )
    }
}