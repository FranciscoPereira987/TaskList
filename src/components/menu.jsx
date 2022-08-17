import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { SimpleButton } from '../model/screenMenuChanger';
import getMenu, {getNewTaskButtonStyle, getDeleteTaskButtonStyle, getCustomBackground} from '../styles/menu';


export const TaskMenu = (task) => 
{
    
    let hooks = task.getHooks();
    let menu = getMenu();


    let left_props = {
        font: menu.font,
        text: hooks.left.text,
        callback: hooks.left.hook
    };

    let right_props = {
        font: menu.font,
        text: hooks.right.text,
        callback: hooks.right.hook    
    };

    let left_style = getCustomBackground(hooks.left.backgroundCustom);
    let right_style = getCustomBackground(hooks.right.backgroundCustom);

    return (
        <View style={menu.container}>
            {SimpleButton(left_props, left_style, 0)}
            {SimpleButton(right_props, right_style, 1)}
        </View>
    )
}

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