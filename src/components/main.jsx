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
import ScreenMenuChanger from '../model/screenMenuChanger';
import NewTaskManager from '../model/additionManager';


class Main extends Component {

    constructor()
    {
        super();

        this.state = {};

        this.state.tasks = new TaskHandler();
        
        this.state.menuManager = new ScreenMenuChanger(this.state.tasks);
        
        this.state.screen = this.state.menuManager.actual;
        this.state.addManager = new NewTaskManager();
        
        this.handleScreenChange = this.handleScreenChange.bind(this);
        this.handlerNewTask = this.handlerNewTask.bind(this);
        this.handlerTaskClicked = this.handlerTaskClicked.bind(this);
        this.handlerTaskPoped = this.handlerTaskPoped.bind(this);

        this.state.addManager.set(this.handlerNewTask);
        this.state.tasks.addTask(new Task('Prueba', 'prueba'));

    }

    handleScreenChange(where)
    {
        this.changeScreen(where);

        this.setState(this.state)
    }

    handlerNewTask(task)
    {
        this.state.tasks.addTask(new Task(task.title, task.text));
        this.changeScreen(0);

        this.setState(this.state)
    }

    handlerTaskClicked(taskNumber)
    {
        this.state.tasks.handleSelect(taskNumber);
    
        this.state.screen = this.state.menuManager.handleTaskClick();

        this.setState(this.state);
    }

    handlerTaskPoped(taskNumber)
    {
        this.state.tasks.handleDelete(taskNumber);

        this.changeScreen(0);

        this.setState(this.state);
    }

    changeScreen(where)
    {
        
        this.state.screen = this.state.menuManager.handleClick(where);
        

    }

    render()
    {
        return (
            <View style={{flex: 1, backgroundColor: '#232b2b'}}>
                <StatusBar style="auto" />
                <Menu callback={this.handleScreenChange} screen={this.state.screen}/>
                <Routes>
                    <Route path='/' element={<Tasks tasks={this.state.tasks} selection={this.state.tasks.selected} callback={this.handlerTaskClicked}/>} />
                    <Route path='/add' element={<AddView manager={this.state.addManager}/>} />
                    <Route path='/delete' element={<DeleteView tasks={this.state.tasks} selection={this.state.tasks.selected} callback={this.handlerTaskPoped}/>} />
                </Routes>
            </View>
        )
    
    }
}




export default Main;