class Project {
  constructor(_name) {
    this.name = _name;
  }

  savingProjectsToLocalStorage() {
    let dataArr = [
      this.name
    ];

    if (typeof(Storage) !== "undefined"){

      localStorage.setItem('projects', JSON.stringify(dataArr));
      
    }
  }

  savingData() {
    db.collection('projects').add({ // eslint-disable-line no-undef
      name: this.name,
    });
  }
}

export { Project }; // eslint-disable-line import/prefer-default-export