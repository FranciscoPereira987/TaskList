import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import getMenu, {getNewTaskButtonStyle, getDeleteTaskButtonStyle} from '../styles/menu';

class Menu extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};

        this.state.style = getMenu();

        this.handleScreenChange = this.props.callback;
    }

    render()
    {
        return (<View style={this.state.style.container}>
            {this.props.screen.getButtons(this.handleScreenChange).map((button) => button)}
        </View>)
    }
}


export default Menu;