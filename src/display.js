import {
  Project
} from "./project";

class PageDisplay {
  static homePage() {
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    // remove container
    let removeCont = document.createElement("div");
    setAttributes(removeCont, {
      class: "remove_cont",
    });

    let sectionElem = document.createElement("section");
    setAttributes(sectionElem, {
      class: "main_body",
    });

    let sectionContainer = document.createElement("div");
    setAttributes(sectionContainer, {
      class: "container-fluid",
    });

    // append row container to section container

    let rowContainer = document.createElement("div");
    setAttributes(rowContainer, {
      class: "row",
    });

    // append colContainer to row container

    let colContainer = document.createElement("div");
    setAttributes(colContainer, {
      class: "col-md-6",
    });

    let bacContainer = document.createElement("div");
    setAttributes(bacContainer, {
      class: "bac_image",
    });

    colContainer.append(bacContainer);
    rowContainer.append(colContainer);

    // append colContainer2 to row container
    let colContainer2 = document.createElement("div");
    setAttributes(colContainer2, {
      class: "col-md-6",
    });

    let titleDesc = document.createElement("div");
    setAttributes(titleDesc, {
      class: "title_desc",
    });

    let h1Desc = document.createElement("h1");
    h1Desc.innerText = "create a To Do List and keep truck of your daily tasks";
    titleDesc.append(h1Desc);

    let pDesc = document.createElement("p");
    pDesc.innerText =
      "be on time with your tasks and complete them. Set daily goals and achieve them";
    titleDesc.append(pDesc);

    let btnDesc = document.createElement("button");
    setAttributes(btnDesc, {
      class: "create_btn",
    });
    btnDesc.innerText = "The best task management tool";
    titleDesc.append(btnDesc);

    colContainer2.append(titleDesc);

    rowContainer.append(colContainer2);

    sectionContainer.append(rowContainer);

    // section
    sectionElem.append(sectionContainer);
    removeCont.append(sectionElem);

    let container = document.getElementById("content");
    container.append(removeCont);

    return container;
  }

  static CreateProjectForm() {
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    let removeContainerForm = document.createElement("div");
    setAttributes(removeContainerForm, {
      class: "remove_cont",
    });

    let ProjectContainer = document.createElement("div");
    setAttributes(ProjectContainer, {
      class: "container project_todo",
    });

    let imgContainer = document.createElement("img");
    setAttributes(imgContainer, {
      src: "/assets/145.png",
      alt: "images",
    });

    //container
    ProjectContainer.append(imgContainer);
    // form container
    let formContainer = document.createElement("form");
    setAttributes(formContainer, {
      action: "#",
    });

    let rowContainer4 = document.createElement("div");
    setAttributes(rowContainer4, {
      class: "row",
    });

    let colContainer4 = document.createElement("div");
    setAttributes(colContainer4, {
      class: "col-25",
    });

    let labelContainer = document.createElement("label");
    setAttributes(labelContainer, {
      for: "project_title",
    });

    labelContainer.innerText = "Project name";
    colContainer4.append(labelContainer);

    let colContainer5 = document.createElement("div");
    setAttributes(colContainer5, {
      class: "col-75",
    });

    let inputContainer = document.createElement("input");
    setAttributes(inputContainer, {
      type: "text",
      id: "project_title",
      name: "project_title",
      placeholder: "Project Name",
      id: "project_name",
    });

    colContainer5.append(inputContainer);

    rowContainer4.append(colContainer4);
    rowContainer4.append(colContainer5);

    let rowContainer5 = document.createElement("div");
    setAttributes(rowContainer5, {
      class: "row",
    });

    let input2 = document.createElement("button");
    setAttributes(input2, {
      id: "sub_btn",
    });
    input2.innerText = "submit";

    formContainer.append(rowContainer4);
    formContainer.append(rowContainer5);

    ProjectContainer.append(formContainer);
    ProjectContainer.append(input2);
    removeContainerForm.append(ProjectContainer);

    let container = document.getElementById("content");
    container.append(removeContainerForm);

    return container;
  }

  static savingProject() {
    let btn_container = document.getElementById("sub_btn");
    let ProjectTitleVal = document.getElementById("project_name");

    btn_container.addEventListener("click", () => {
      let project = new Project(ProjectTitleVal.value);
      project.savingData();

      document.querySelector(".remove_cont").remove();
      this.DisplayProjects();
    });
  }

  static DisplayProjects() {
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    let container = document.getElementById("content");
    let removeContProjects = document.createElement("div");
    setAttributes(removeContProjects, {
      class: "remove_cont",
    });

    let listContainer = document.createElement("div");
    setAttributes(listContainer, {
      class: "list-container container",
    });

    let ulcontainer = document.createElement("ul");

    db.collection("projects")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let liContainer = document.createElement("li");
          let spanContainer = document.createElement("button");
          setAttributes(spanContainer, {
            "data-index": `${doc.id}`,
          });
          spanContainer.innerText = doc.data().name;

          liContainer.append(spanContainer);

          ulcontainer.append(liContainer);
        });
      });

    listContainer.append(ulcontainer);

    removeContProjects.append(listContainer);
    container.append(removeContProjects);
  }

  static CreateTodoForm() {
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    let FormToDoCont = document.createElement('form');
    setAttributes(FormToDoCont, {
      id: "todo-form",
    });

    // title
    let label1 = document.createElement('label');
    setAttributes(label1, {
      for: 'title'
    });
    label1.innerText = "title:";

    let input1 = document.createElement('input');
    setAttributes(input1, {
      type: 'text',
      name: "title",
      id: 'title'
    });

    FormToDoCont.append(label1);
    FormToDoCont.append(input1);

    // text area

    let label2 = document.createElement('label');
    setAttributes(label2, {
      for: 'description'
    });
    label2.innerText = "description:";

    let input2 = document.createElement('textarea');
    setAttributes(input2, {
      rows: '4',
      cols: "50",
      naame: "comment",
      form: "usrform"
    });

    FormToDoCont.append(label2);
    FormToDoCont.append(input2);

    // date

    let label3 = document.createElement('label');
    setAttributes(label3, {
      for: 'date'
    });
    label3.innerText = "date:";

    let input3 = document.createElement('input');
    setAttributes(input3, {
      type: 'date',
      name: "date",
      id: 'date'
    });

    FormToDoCont.append(label3);
    FormToDoCont.append(input3);

    // projects

    let label4 = document.createElement('label');
    setAttributes(label4, {
      for: 'projects'
    });
    label4.innerText = "projects:";

    let input4 = document.createElement('select');
    setAttributes(input4, {

      name: "projects",
      id: 'projects'
    });

    db.collection("projects").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let option4 = document.createElement('option');
        setAttributes(option4, {

          value: doc.id,
        });

        option4.innerText = doc.data().name

        input4.append(option4);

      });
    })

    FormToDoCont.append(label4);
    FormToDoCont.append(input4);

    // priority

    let label5 = document.createElement('label');
    setAttributes(label5, {
      for: 'priority'
    });
    label5.innerText = "priority:";

    let input5 = document.createElement('select');
    setAttributes(input5, {
      name: "projects",
      id: 'projects'
    });

   let priorityArr = [ 'low', 'medium', 'high'];
     
   for (let i = 0; i < priorityArr.length; i++) {
    
    let priorityOption = document.createElement("option");
    setAttributes(priorityOption, {
      value: priorityArr[i],
    });

    priorityOption.innerText = priorityArr[i];

    input5.append(priorityOption);
     
   }

    FormToDoCont.append(label5);
    FormToDoCont.append(input5);

    // button

    let input6 = document.createElement('input');
    setAttributes(input6 , {
      type:"submit",
      id: "submit_todo"
    });

    FormToDoCont.append(input6);



    let removeContainerTodo = document.createElement("div");
    setAttributes(removeContainerTodo, {
      class: "remove_cont container",
      id: "container-to-do"
    });

    removeContainerTodo.append(FormToDoCont); 

    let container = document.getElementById("content");
    container.append(removeContainerTodo);
  }

  static savingTodo() {

  }

}


export {
  PageDisplay
};