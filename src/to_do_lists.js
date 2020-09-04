class ToDoList {

    constructor(_title, _description, _date, _project, _priority) {

        this.title = _title;
        this.description = _description;
        this.date = _date;
        this.project = _project;
        this.priority = _priority;
        
    }

  savingTodo (){
    
      db.collection(`projects/${this.project}/toDos`).add({
          title:this.title,
          description:this.description,
          date: this.date,
          priority: this.priority
      })
  }  

}


export{ToDoList};