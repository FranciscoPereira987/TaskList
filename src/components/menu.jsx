import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import getMenu, {getNewTaskButtonStyle, getDeleteTaskButtonStyle} from '../styles/menu';

const AddTaskButton = (props) => 
{
    return (
        <Link to={props.to} component={TouchableNativeFeedback} style={getNewTaskButtonStyle()} onPress={props.callback}>
            <View>
                <Text style={props.font}>Nueva Tarea</Text>
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
        
        this.state.screen = this.props.screen;

        this.handleScreenChange = this.handleScreenChange.bind(this);
    }

    handleScreenChange()
    {
        let new_screen = !this.state.screen.main;

        this.setState({screen: {'main': new_screen}})
    }

    render()
    {
        return (<View style={this.state.style.container}>
            {this.state.screen.main ? (
            <React.Fragment>
            <AddTaskButton to='/add' font={this.state.style.font} callback={this.handleScreenChange}/>
            <AddDeleteButton to='/delete' font={this.state.style.font} callback={this.handleScreenChange}/>
            </React.Fragment>) : 
            (<AddReturnButton to='/' font={this.state.style.font} callback={this.handleScreenChange}/>)}
        </View>)
    }
}


export default Menu;