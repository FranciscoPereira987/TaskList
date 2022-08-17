import React from "react";
import { FlatList, View, Text} from "react-native";
import { getTaskColor } from "../styles/tasks";
import { TextView, TittleView } from "./addView";
import { TaskMenu } from "./menu";
import Task from './task'


function TaskListView (props)
{
    return (
        <FlatList
            style={{flex: 1, flexGrow: 1, flexDirection: 'column'}}
            data = {props.tasks.tasks}
            renderItem={
                (item) => (<Task task={item.item} id={item.index} callback={props.callback}/>)
            }
        />
    )

}

function TaskSelectedView (props)
{
    let task = props.tasks.getTaskSelected();
    return (<View style={{flex: 9/10}}>
                {TittleView(props, task, getTaskColor(task.status))}
                {TextView(props, task)}
                {TaskMenu(task)}
            </View>)
}

export default function Tasks (props)
{
    if (props.selection >= 0)
    {
        return TaskSelectedView(props);
    }
    return TaskListView(props);   
}