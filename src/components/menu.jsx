import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import getMenu, {getNewTaskButtonStyle, getDeleteTaskButtonStyle} from '../styles/menu';

class Menu extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};

        this.state.style = getMenu();
    }


    render()
    {
        return (<View style={this.state.style.container}>
            <TouchableNativeFeedback>
                <View style={getNewTaskButtonStyle()}>
                <Text style={this.state.style.font}>Nueva Tarea</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={getDeleteTaskButtonStyle()}>
                <Text style={this.state.style.font}>Eliminar Tarea</Text>
                </View>
            </TouchableNativeFeedback>
        </View>)
    }
}


export default Menu;