const consumeIterator = (iterator) => 
{
    let finalResult = [];
    let result = undefined;
    do{
        result = iterator.next();
        result.done ? undefined : finalResult.push(result.value);
    }while(!result.done)

    return finalResult;
}

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

    handleDelete(taskNumber)
    {
        this.tasks = consumeIterator(this.tasks.entries()).
                                                            filter(([index, _]) => (index !== taskNumber)).
                                                            map(([_, value]) => (value));
    }
    
    deleteSelected()
    {
        if (this.selected !== -1)
        {
            this.handleDelete(this.selected);
        }
    }

    handleUnselect()
    {
        this.selected = -1;
    }

    getTaskSelected()
    {
        return this.tasks[this.selected];
    }

}