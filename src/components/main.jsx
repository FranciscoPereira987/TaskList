import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

import Task from './task';
import Menu from './menu';


const Main = () => {

    return (
        <View style={{flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: '#232b2b'}}>
            <StatusBar style="auto" />
            <Menu />
            <Task text="Esto es una tarea" status={2}/>
            <Task text="Esto es una tarea" status={2}/>
            <Task text="Esto es una tarea" status={1}/>
            <Task text="Esto es una tarea" status={0}/>
            <Task text="Esto es una tarea" status={1}/>
        </View>
    )

}




export default Main;