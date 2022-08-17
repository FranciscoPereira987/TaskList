import { StyleSheet } from "react-native";
import Theme from "./theme";


const ViewStyle = StyleSheet.create(
    {
        colorSchemePrimary: 
        {
            backgroundColor: Theme.background.inProgress,
            borderColor: Theme.background.primary,
        },

        colorSchemeSecondary:
        {
            backgroundColor: Theme.background.secondary,
            borderColor: Theme.background.primary
        },

        style: 
        {
            borderWidth: 1,
            borderRadius: 4,
            flex: 1/2,
            alignItems: 'center',
            justifyContent: 'center'
        },

        taskViewStyle:
        {
            marginVertical: 10,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
            
        },

        tittleStyle:
        {
            flex: 1/10,    
        },

        fontStyle:
        {
            fontSize: Theme.font.primaryAttributes.fontSize,
            fontWeight: Theme.font.primaryAttributes.fontWeight,
        },

        tittleFontStyle:
        {
            fontSize: 20,
            fontWeight: Theme.font.primaryAttributes.fontWeight,    
        },

        confirmButtonStyle:
        {
            flex: 1/15,
            minWidth: 50,
            borderRadius: 20,
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        },

        confirmFontStyle:
        {
            fontSize: 35
        }
    }
)


export default ViewStyle;