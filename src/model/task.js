import { getContainersStyle } from "../styles/tasks";

export default class Task
{

    //Creates a new task, always with a status of 0
    constructor(title, text, callback)
    {
        this.title = title;
        this.text = text;

        this.callback = callback;

        this.status = 0;

        this.endTask = this.endTask.bind(this);
        this.backToStart = this.backToStart.bind(this);
        this.nowDoingIt = this.nowDoingIt.bind(this);
    }
    
    endTask()
    {
        this.status = 2;
        this.callback();
    }

    nowDoingIt()
    {
        this.status = 1;
        this.callback();
    }

    backToStart()
    {
        this.status = 0;
        this.callback();
    }

    ///Returns the hooks of the task, background color and callbacks for the task
    getHooks()
    {
        let backgrounds = getContainersStyle(this.status);
        let hooks = this.hooks();


        let props = 
        {
            left: {
                backgroundCustom: backgrounds[0][0],
                text: backgrounds[0][1],
                hook: hooks[0]
            },

            right: {
                backgroundCustom: backgrounds[1][0],
                text: backgrounds[1][1],
                hook: hooks[1]
            }
        }

        return props;
    }

    isValid()
    {
        return this.title && this.text;
    }

    hooks()
    {
        let containers = [];
        switch (this.status)
        {
            case 0: containers.push(this.nowDoingIt); containers.push(this.endTask); break;
            case 1: containers.push(this.backToStart); containers.push(this.endTask); break;
            case 2: containers.push(this.backToStart); containers.push(this.nowDoingIt); break;
        }

        return containers;
    }
}

