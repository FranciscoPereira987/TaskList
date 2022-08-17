import React from 'react';
import { Text, View, TextInput, Image, TouchableNativeFeedback} from 'react-native';
import { Link } from 'react-router-native';
import Theme from '../styles/theme';
import ViewStyle from '../styles/view';



export default function AddView (props)
{

    return (
        <View style={{flex: 9/10, marginVertical: 4}}>
            <View style={viewStyleTittle}>
                <TextInput onChangeText={props.manager.modifiedTitle} style={ViewStyle.tittleFontStyle}>Nombre De la tarea</TextInput>
            </View>
            <View style={viewStyleInfo}>
                <TextInput onChangeText={props.manager.modifiedText} style={ViewStyle.fontStyle}>Informacion De La Tarea</TextInput>
            </View>
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
