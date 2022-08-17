import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import {Redirect, Route, Routes, Switch} from 'react-router-native'

import Tasks from './taskList';
import Menu from './menu';
import AddView from './addView';
import DeleteView from './deleteView';
import Task from '../model/task';
import TaskHandler from '../model/taskHandler';


class Main extends Component {

    constructor()
    {
        super();

        this.state = {};

        this.state.screen = 0;

        this.state.tasks = new TaskHandler();

        this.handleScreenChange = this.handleScreenChange.bind(this);
        this.handlerNewTask = this.handlerNewTask.bind(this);
        this.handlerTaskClicked = this.handlerTaskClicked.bind(this);

        this.state.tasks.addTask(new Task('Prueba', 'prueba'));

    }

    handleScreenChange()
    {
        this.changeScreen();

        this.setState(this.state)
    }

    handlerNewTask(task)
    {
        this.state.tasks.addTask(new Task(task.title, task.text));
        this.changeScreen();

        this.setState(this.state)
    }

    handlerTaskClicked(taskNumber)
    {
        this.state.tasks.handleSelect(taskNumber);
    
        this.state.screen = 2;

        this.setState(this.state);
    }

    changeScreen()
    {
        if (this.state.screen === 2)
        {
            this.state.tasks.handleUnselect();
        }
        
        this.state.screen = this.state.screen === 0 ? 1 : 0;

    }

    getAddText()
    {
        return this.state.screen === 0 ? 'Nueva Tarea' : 'Principal'
    }

    getAddLink()
    {
        return this.state.screen === 0 ? '/add' : '/'
    }

    render()
    {
        return (
            <View style={{flex: 1, backgroundColor: '#232b2b'}}>
                <StatusBar style="auto" />
                <Menu callback={this.handleScreenChange} screen={this.state.screen} text={this.getAddText()}
                      root='/' delete='/delete' add={this.getAddLink()}/>
                <Routes>
                    <Route path='/' element={<Tasks tasks={this.state.tasks} selection={this.state.tasks.selected} callback={this.handlerTaskClicked}/>} />
                    <Route path='/add' element={<AddView callback={this.handlerNewTask}/>} />
                    <Route path='/delete' element={<DeleteView />} />
                </Routes>
            </View>
        )
    
    }
}




export default Main;