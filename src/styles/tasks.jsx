import { StyleSheet } from "react-native";


const doneBackground = '#5f9ea0'; //Laurel green
const InProgressBackground = '#FFFACD';
const NotStartedBackground = '#cb4154'; //Brick red

const DONE = 2;
const INPROGRESS = 1;

//Returns the style of a task according to its state
export default function getStyle (taskState) {
    let style = {
        container: {
            flex: 1/5,
            backgroundColor: NotStartedBackground,
            borderWidth: 3,
            borderColor: '#232b2b',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            margin: 5,
            fontSize: 16,
            fontWeight: 'bold',
        }
    };

    if (taskState === INPROGRESS)
    {
        style.container.backgroundColor = InProgressBackground;
    }

    if (taskState === DONE)
    {
        style.container.backgroundColor = doneBackground;
    }

    return StyleSheet.create(style);
}