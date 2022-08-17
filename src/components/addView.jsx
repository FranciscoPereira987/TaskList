import React from 'react';
import { Text, View, TextInput, Image, TouchableNativeFeedback} from 'react-native';
import { Link } from 'react-router-native';
import Theme from '../styles/theme';
import ViewStyle from '../styles/view';

export function TittleView (props, task=undefined, background=undefined)
{
    let component = props.isTextOnly? 
                    (<Text style={ViewStyle.tittleFontStyle}>{task.title}</Text>)
                    :
                    (<TextInput onChangeText={props.manager.modifiedTitle} style={ViewStyle.tittleFontStyle}>Nombre De la tarea</TextInput>)

    let finalStyle = [viewStyleTittle]

    if (background)
    {
        finalStyle.push({
            backgroundColor: background
        })
    }

    return (
    <View style={finalStyle}>
        {component}
    </View>)
}

export function TextView (props, task=undefined)
{
    let component = props.isTextOnly? 
                    (<Text style={ViewStyle.fontStyle}>{task.text}</Text>)
                    :
                    (<TextInput onChangeText={props.manager.modifiedText} style={ViewStyle.fontStyle}>Informacion De La Tarea</TextInput>)
    return (
        <View style={viewStyleInfo}>
                {component}
        </View>
    )
}

export default function AddView (props)
{

    return (
        <View style={{flex: 9/10, marginVertical: 4}}>
            {TittleView(props)}
            {TextView(props)}
            <Link to='/' component={TouchableNativeFeedback} onPress={props.manager.notify}>
                <Image style={confirmButton} source={require('../../assets/AddIconPrimary.png')}/>
            </Link>
        </View>
    )
}


const viewStyleTittle = [ViewStyle.colorSchemePrimary, ViewStyle.style, ViewStyle.tittleStyle];
const viewStyleInfo = [ViewStyle.colorSchemeSecondary, ViewStyle.style, ViewStyle.taskViewStyle];
const confirmButton = {
    height: 60,
    width: 60,
    alignSelf: 'center'

}
