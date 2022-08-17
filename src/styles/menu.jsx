import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import Theme from "./theme";

const MenuStyle = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        margin: 2,
        flex: 1/10,
        flexDirection: 'row',
        backgroundColor: Theme.background.primary
    },

    font: [Theme.font.primaryAttributes, {color: Theme.font.primary}],

    backButton: [Theme.container.buttonContainer, {backgroundColor: Theme.buttons.add, borderColor: Theme.buttons.add, flex: 1}]
})

const NewTaskButton = [Theme.container.buttonContainer, {backgroundColor: Theme.buttons.add, borderColor: Theme.buttons.add}]

const DeleteTaskButton = [Theme.container.buttonContainer, {backgroundColor: Theme.buttons.delete, borderColor: Theme.buttons.delete}]


export default function getMenu()
{
    return MenuStyle;
}

export function getCustomBackground(backgroundCustom)
{
    return [Theme.container.buttonContainer, {backgroundColor: backgroundCustom, borderColor: backgroundCustom}]
}

export function getNewTaskButtonStyle ()
{
    return NewTaskButton;
}


export function getDeleteTaskButtonStyle ()
{
    return DeleteTaskButton;
}