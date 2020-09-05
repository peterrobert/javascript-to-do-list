class Project {
  constructor(_name) {
    this.name = _name;
  }

  savingData() {
    db.collection('projects').add({ // eslint-disable-line no-undef
      name: this.name,
    });
  }
}

export { Project }; // eslint-disable-line import/prefer-default-export