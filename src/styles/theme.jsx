import { StyleSheet } from "react-native";


const Theme = StyleSheet.create(
    {
        background: {
            primary: '#232b2b',
            secondary: '#fff',
            done: '#5f9ea0',
            inProgress: '#FFFACD',
            notStarted: '#cb4154'
        },

        buttons: {
            delete: '#cb4154',
            add: '#5f9ea0',
        },

        font: {
            Primary: '#000',
            secondary: '#fff',
            primaryAttributes: {
                fontSize: 16,
                fontWeight: 'bold'
            }
        },

        container: {
            textContainer: {

            },

            buttonContainer: {
                borderWidth: 1,
                borderRadius: 6,
                margin: 5,
                flex: 1/2,
                alignItems: 'center',
                justifyContent: 'center',
            }
        }

    }
);


export default Theme;

