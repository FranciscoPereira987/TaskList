export default class NewTaskManager
{
    constructor()
    {
        this.modifiedText = this.modifiedText.bind(this);
        this.modifiedTitle = this.modifiedTitle.bind(this);
        this.notify = this.notify.bind(this);
        this.reset = this.set.bind(this);

    }


    modifiedText(newText)
    {
        this.text = newText;
    }

    modifiedTitle(newTitle)
    {
        this.title = newTitle;
    }
    
    notify()
    {
        let info = {
            title: this.title,
            text: this.text
        };
        
        this.text = undefined;
        this.title = undefined;

        this.callback(info)
    }

    set(callback)
    {
        this.text = undefined;
        this.title = undefined;
        this.callback = callback;
    }
}
