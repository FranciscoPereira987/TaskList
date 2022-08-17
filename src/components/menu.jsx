import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import getMenu, {getNewTaskButtonStyle, getDeleteTaskButtonStyle} from '../styles/menu';

const AddTaskButton = (props) => 
{
    return (
        <Link to={props.to} component={TouchableNativeFeedback} style={getNewTaskButtonStyle()} onPress={props.callback}>
            <View>
                <Text style={props.font}>{props.text}</Text>
            </View>
        </Link>
    )
}


const AddDeleteButton = (props) => 
{
    return (
        <Link to={props.to} component={TouchableNativeFeedback} style={getDeleteTaskButtonStyle()} onPress={props.callback}>
            <View>
                <Text style={props.font}>Eliminar Tarea</Text>
            </View>
        </Link>
    )
}

const AddReturnButton = (props) => 
{
    return (
        <Link to={props.to} component={TouchableNativeFeedback} style={getMenu().backButton} onPress={props.callback}>
            <View>
                <Text style={props.font}>Principal</Text>
            </View>
        </Link>
    );
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

    getMenuType(screen, props)
    {
        if (screen === 1)
        {
            return (<AddReturnButton to={props.root} font={this.state.style.font} callback={this.handleScreenChange}/>);
        }

        return (
            <React.Fragment>
                <AddTaskButton to={props.add} font={this.state.style.font} callback={this.handleScreenChange} text={this.props.text}/>
                <AddDeleteButton to={props.delete} font={this.state.style.font} callback={this.handleScreenChange}/>
            </React.Fragment>
        )
    }

    render()
    {
        return (<View style={this.state.style.container}>
            {this.getMenuType(this.props.screen, this.props)}
        </View>)
    }
}


export default Menu;