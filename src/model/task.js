export default class Task
{

    //Creates a new task, always with a status of 0
    constructor(title, text)
    {
        this.title = title;
        this.text = text;

        this.status = 0;
    }
    
    endTask()
    {
        this.status = 2;
    }

    nowDoingIt()
    {
        this.status = 1;
    }

    isValid()
    {
        return this.title && this.text;
    }
}

