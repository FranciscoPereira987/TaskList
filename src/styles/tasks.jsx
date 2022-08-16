import { StyleSheet } from "react-native";


const doneBackground = '#5f9ea0'; //Laurel green
const InProgressBackground = '#FFFACD';
const NotStartedBackground = '#cb4154'; //Brick red

const FINISHED = 2;
const STARTED = 1;
const NOTSTARTED = 0;

const style = StyleSheet.create(
    {
        container: {
            minHeight: 150,
            flex: 1,
            borderWidth: 3,
            borderColor: '#232b2b',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            margin: 1,
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
        },

        notStarted: {
            backgroundColor: NotStartedBackground,
        },

        inProgress: {
            backgroundColor: InProgressBackground,
        },

        finished: {
            backgroundColor: doneBackground,
        }
    }
)

//Returns the style of the container
export function getContainerStyle (status)
{
    let finalStyle = [
        style.container,
        status === NOTSTARTED && style.notStarted,
        status === STARTED && style.inProgress,
        status === FINISHED && style.finished
    ]
    return finalStyle;
}

//Returns the style of a task according to its state
export function getTextStyle (status) {
    
    let finalStyle = [
        style.text
    ]

    return finalStyle;
}   