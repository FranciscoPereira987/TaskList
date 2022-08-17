import { StyleSheet } from "react-native";
import Theme from "./theme";


const FINISHED = 2;
const STARTED = 1;
const NOTSTARTED = 0;

const style = StyleSheet.create(
    {
        container: {
            minHeight: 150,
            flex: 1,
            borderWidth: 3,
            borderColor: Theme.background.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            margin: 1,
        }
    }
)

function getTaskColor (status)
{
    return (status === NOTSTARTED && Theme.background.notStarted) || (status === STARTED && Theme.background.inProgress) || Theme.background.done;
}

//Returns the style of the container
export function getContainerStyle (status)
{
    let finalStyle = [
        style.container,
        {
            backgroundColor: getTaskColor(status)
        }
    ]
    
    return finalStyle;
}

//Returns the style of a task according to its state
export function getTextStyle (status) {
    
    let finalStyle = [
        Theme.font.primaryAttributes,
        {
            color: Theme.font.primary
        }
    ]

    return finalStyle;
}   