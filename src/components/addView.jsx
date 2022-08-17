import React from 'react';
import { Text, View, TextInput, Image, TouchableNativeFeedback} from 'react-native';
import { Link } from 'react-router-native';
import Theme from '../styles/theme';
import ViewStyle from '../styles/view';




class NewTaskManager
{
    constructor()
    {
        this.modifiedText = this.modifiedText.bind(this);
        this.modifiedTitle = this.modifiedTitle.bind(this);
        this.notify = this.notify.bind(this);
        this.reset = this.reset.bind(this);

    }


    modifiedText(newText)
    {
        this.text = newText;
    }

    modifiedTitle(newTitle)
    {
        this.title = newTitle;
    }
    
    notify()
    {
        this.callback({
            title: this.title,
            text: this.text
        })
    }

    reset(callback)
    {
        this.text = undefined;
        this.title = undefined;
        this.callback = callback;
    }
}

var manager = new NewTaskManager();

export default function AddView (props)
{

    manager.reset(props.callback);

    return (
        <View style={{flex: 9/10, marginVertical: 4}}>
            <View style={viewStyleTittle}>
                <TextInput onChangeText={manager.modifiedTitle} style={ViewStyle.tittleFontStyle}>Nombre De la tarea</TextInput>
            </View>
            <View style={viewStyleInfo}>
                <TextInput onChangeText={manager.modifiedText} style={ViewStyle.fontStyle}>Informacion De La Tarea</TextInput>
            </View>
            <Link to='/' component={TouchableNativeFeedback} onPress={manager.notify}>
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
