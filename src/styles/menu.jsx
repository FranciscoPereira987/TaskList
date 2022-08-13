import { StyleSheet } from "react-native";


const MenuStyle = StyleSheet.create({
    container: {
        margin: 2,
        flex: 1/10,
        flexDirection: 'row',
        backgroundColor: '#232b2b'
    },

    font: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

const NewTaskButton = StyleSheet.create({
    button: {
        backgroundColor: '#5f9ea0',
        borderWidth: 1,
        borderRadius: 6,
        margin: 5,
        borderColor: '#5f9ea0',
        flex: 1/2,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
)

const DeleteTaskButton = StyleSheet.create({
    button:   {
        backgroundColor: '#cb4154',
        borderWidth: 1,
        borderRadius: 6,
        margin: 5,
        borderColor: '#cb4154',
        flex: 1/2,
        alignItems: 'center',
        justifyContent: 'center'
    }
}
)


export default function getMenu()
{
    return MenuStyle;
}


export function getNewTaskButtonStyle ()
{
    return NewTaskButton.button;
}


export function getDeleteTaskButtonStyle ()
{
    return DeleteTaskButton.button;
}