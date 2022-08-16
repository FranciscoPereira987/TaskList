import React from "react";
import { FlatList} from "react-native";
import Task from './task'

const tasks = [
    {
        text: "Esto es una tarea",
        status: 2,
    },
    {
        text: "Esto es una tarea",
        status: 2,
    },
    {
        text: "Esto es una tarea",
        status: 1,
    },
    {
        text: "Esto es una tarea",
        status: 0,
    },
    {
        text: "Esto es una tarea",
        status: 1,
    },

];

export default function Tasks ()
{
    return (
        <FlatList
            style={{flex: 1, flexGrow: 1, flexDirection: 'column'}}
            data = {tasks}
            renderItem={
                ({item: props}) => (<Task {...props}/>)
            }
        />
    )
}