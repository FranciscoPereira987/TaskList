import {TouchableNativeFeedback, View, Text} from 'react-native';
import getMenu, {getNewTaskButtonStyle, getDeleteTaskButtonStyle} from '../styles/menu'; 
import { Link } from 'react-router-native';

const GenerateButton = (props, styling) => 
{
    return (
        <Link to={props.to} component={TouchableNativeFeedback} style={styling} onPress={props.callback}>
            <View>
                <Text style={props.font}>{props.text}</Text>
            </View>
        </Link>
    )
}

class MainScreen
{
    constructor()
    {
        this.menu = getMenu();

        this.screenData = 
        {
            leftButton: {
                link: '/add',
                text: 'Nueva Tarea',
                linkedScreen: undefined,
            },

            rightButton: {
                link: '/delete',
                text: 'Eliminar Tarea',
                linkedScreen: undefined
            }
        }
    }

    getButtons(callback)
    {
        let getCallback = (whom) => 
        {
            let wrapper = () => (callback(whom))

            return wrapper;
        };

        let left_props = 
        {
            to: this.screenData.leftButton.link,
            text: this.screenData.leftButton.text,
            font: this.menu.font,
            callback: getCallback(0)

        };

        let right_props = 
        {
            to: this.screenData.rightButton.link,
            text: this.screenData.rightButton.text,
            font: this.menu.font,
            callback:  getCallback(1)
        };

        let buttons = [
            GenerateButton(left_props, getNewTaskButtonStyle()),
            GenerateButton(right_props, getDeleteTaskButtonStyle()),
        ];

        return buttons;
    }

    link(left = undefined, right = undefined)
    {
        this.screenData.leftButton.linkedScreen = left;

        this.screenData.rightButton.linkedScreen = right;
    }

    getLinkage(where)
    {
        if (where === 0)
        {
            return this.screenData.leftButton.linkedScreen;
        }

        return this.screenData.rightButton.linkedScreen;
    }
}

class TaskSelectedScreen
{
    constructor(taskManager)
    {

        this.menu = getMenu();

        this.taskManager = taskManager;

        this.screenData = 
        {
            leftButton: {
                link: '/',
                text: 'Principal',
                linkedScreen: undefined,
            },

            rightButton: {
                link: '/delete',
                text: 'Eliminar Tarea',
                linkedScreen: undefined
            }
        }
    }

    getButtons(callback)
    {
        let getCallback = (whom) => 
        {
            let wrapper = () => {
                this.taskManager.handleUnselect()
                callback(whom)
            }

            return wrapper;
        };

        let left_props = 
        {
            to: this.screenData.leftButton.link,
            text: this.screenData.leftButton.text,
            font: this.menu.font,
            callback: getCallback(0)

        };

        let right_props = 
        {
            to: this.screenData.rightButton.link,
            text: this.screenData.rightButton.text,
            font: this.menu.font,
            callback:  getCallback(1)
        };

        let buttons = [
            GenerateButton(left_props, getNewTaskButtonStyle()),
            GenerateButton(right_props, getDeleteTaskButtonStyle()),
        ];

        return buttons;
    }

    link(left = undefined, right = undefined)
    {
        this.screenData.leftButton.linkedScreen = left;

        this.screenData.rightButton.linkedScreen = right
    }

    getLinkage(where)
    {
        if (where === 0)
        {
            return this.screenData.leftButton.linkedScreen;
        }

        return this.screenData.rightButton.linkedScreen;
    }
}

class TaskWorkScreen
{
    constructor()
    {
        this.menu = getMenu();

        this.screenData = 
        {
            returnButton: {
                link: '/',
                text: 'Principal',
                linkedScreen: undefined
            }
        }
    }
    
    
    getButtons(callback)
    {
        let getCallback = (whom) => 
        {
            let wrapper = () => (callback(whom))

            return wrapper;
        };

        let props = 
        {
            to: this.screenData.returnButton.link,
            text: this.screenData.returnButton.text,
            font: this.menu.font,
            callback: getCallback(0)

        };

        let buttons = [
            GenerateButton(props, this.menu.backButton),
        ];

        return buttons;
    }

    //This one just links the left one
    link(left = undefined, right = undefined)
    {
        this.screenData.returnButton.linkedScreen = left;
    }

    getLinkage(where)
    {
        return this.screenData.returnButton.linkedScreen;
    }
}


export default class ScreenMenuChanger
{
    constructor(taskManager)
    {
        this.screens = {
            main: new MainScreen(),

            selected: new TaskSelectedScreen(taskManager),

            working: new TaskWorkScreen()
        }

        this.screens.main.link(this.screens.working, this.screens.working);
        this.screens.selected.link(this.screens.main, this.screens.working);
        this.screens.working.link(this.screens.main);
        
        this.actual = this.screens.main;
    }

    //Where can be either 0 or 1 (0 leftmost, 1 rightmost)
    handleClick(where)
    {
        this.actual = this.actual.getLinkage(where);

        return this.actual;
    }

    handleTaskClick()
    {
        this.actual = this.screens.selected;

        return this.actual;
    }
}


