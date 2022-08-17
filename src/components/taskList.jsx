import React from "react";
import { FlatList, View, Text} from "react-native";
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
    return (<View>
                <Text>Seleccionaste una tarea</Text>
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