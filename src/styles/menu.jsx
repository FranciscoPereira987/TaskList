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


export default function getMenu()
{
    return MenuStyle;
}


function getButtonStyle (color)
{
    let thisStyle = {
        backgroundColor: color,
        borderWidth: 1,
        borderRadius: 6,
        margin: 5,
        borderColor: color,
        flex: 1/2,
        alignItems: 'center',
        justifyContent: 'center'
    }

return thisStyle;
}

export function getNewTaskButtonStyle ()
{
    return getButtonStyle('#5f9ea0');
}


export function getDeleteTaskButtonStyle ()
{
    return getButtonStyle('#cb4154');
}