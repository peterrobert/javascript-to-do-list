class ToDoList {
  constructor(_title, _description, _date, _project, _priority) {
    this.title = _title;
    this.description = _description;
    this.date = _date;
    this.project = _project;
    this.priority = _priority;
  }

  savingTodo() {
    db.collection(`projects/${this.project}/toDos`).add({ // eslint-disable-line no-undef
      title: this.title,
      description: this.description,
      date: this.date,
      priority: this.priority,
    });
  }
}


export { ToDoList }; // eslint-disable-line import/prefer-default-export