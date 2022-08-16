import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import {Redirect, Route, Routes, Switch} from 'react-router-native'

import Tasks from './taskList';
import Menu from './menu';
import AddView from './addView';
import DeleteView from './deleteView';


const Main = () => {

    return (
        <View style={{flex: 1, backgroundColor: '#232b2b'}}>
            <StatusBar style="auto" />
            <Menu screen={{'main': true}}/>
            <Routes>
                <Route path='/' element={<Tasks />} />
                <Route path='/add' element={<AddView />} />
                <Route path='/delete' element={<DeleteView />} />
            </Routes>
        </View>
    )

}




export default Main;