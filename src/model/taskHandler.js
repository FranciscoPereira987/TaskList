export default class TaskHandler
{
    constructor()
    {
        this.tasks = [];

        this.selected = -1;
    }


    addTask(newTask)
    {   
        if (!newTask.isValid())
        {
            return;
        }
        this.tasks.push(newTask);
    }

    handleSelect(taskNumber)
    {
        this.selected = taskNumber;
    }

    handleUnselect()
    {
        this.selected = -1;
    }

}