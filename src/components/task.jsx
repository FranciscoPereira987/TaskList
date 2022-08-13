import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {getContainerStyle, getTextStyle} from '../styles/tasks';


class Task extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};

        this.state.text = this.props.text;

        this.state.status = this.props.status;
    }


    render()
    {

        return (
            <View style={getContainerStyle(this.state.status)}>
                <Text style={getTextStyle(this.state.status)}>{this.state.text}</Text>
            </View>
        );

    }
}



export default Task;