import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import {getContainerStyle, getTextStyle} from '../styles/tasks';


class Task extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};

        this.state.task = props.task;

        this.state.number = props.id;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.callback(this.state.number);
    }

    render()
    {

        return (
            <TouchableNativeFeedback onPress={this.handleClick}>
                <View style={getContainerStyle(this.state.task.status)}>
                    <Text style={getTextStyle(this.state.task.status)}>{this.state.task.title}</Text>
                </View>
            </TouchableNativeFeedback>
        );

    }
}



export default Task;