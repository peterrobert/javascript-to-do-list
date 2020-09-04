class Project {
    constructor(_name) {

        this.name = _name;
        
    }

    savingData(){

      db.collection('projects').add({
        name: this.name
      });

    }

}

export{Project}