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
        this.tasks = consumeIterator(this.tasks.entries()).filter(([index, value]) => (index !== taskNumber)).map(([index, value]) => (value));
    }
    

    handleUnselect()
    {
        this.selected = -1;
    }

}