class ToDoList {

    constructor(_title, _description, _date, _project, _priority) {

        this.title = title;
        this.description = description;
        this.date = date;
        this.project = _project;
        this.priority = _priority;
        
    }

  savingTodo (){
      db.collection('projects').doc(this.project).collection(this.title).add({
          title:this.title,
          description:this.description,
          date: this.date,
          priority: this.priority
      })
  }  

}


export{ToDoList};