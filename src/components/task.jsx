import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import getStyle from '../styles/tasks';


class Task extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};

        this.state.text = this.props.text;

        this.state.status = this.props.status;

        this.state.style = getStyle(this.props.status);
    }


    render()
    {

        return (
            <View style={this.state.style.container}>
                <Text style={this.state.style.text}>{this.state.text}</Text>
            </View>
        );

    }
}



export default Task;