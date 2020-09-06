/* eslint-disable  max-len, no-restricted-syntax, guard-for-in, quotes, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus */
import { Project } from "./project";
import { ToDoList } from "./to_do_lists";

class PageDisplay {
  static homePage() {
    function setAttributes(el, attrs) {
      for (const key in attrs) {
        // eslint-disable-line no-restricted-syntax
        el.setAttribute(key, attrs[key]);
      }
    }

    // remove container
    const removeCont = document.createElement("div");
    setAttributes(removeCont, {
      class: "remove_cont",
    });

    const sectionElem = document.createElement("section");
    setAttributes(sectionElem, {
      class: "main_body",
    });

    const sectionContainer = document.createElement("div");
    setAttributes(sectionContainer, {
      class: "container-fluid",
    });

    // append row container to section container

    const rowContainer = document.createElement("div");
    setAttributes(rowContainer, {
      class: "row",
    });

    // append colContainer to row container

    const colContainer = document.createElement("div");
    setAttributes(colContainer, {
      class: "col-md-6",
    });

    const bacContainer = document.createElement("div");
    setAttributes(bacContainer, {
      class: "bac_image",
    });

    colContainer.append(bacContainer);
    rowContainer.append(colContainer);

    // append colContainer2 to row container
    const colContainer2 = document.createElement("div");
    setAttributes(colContainer2, {
      class: "col-md-6",
    });

    const titleDesc = document.createElement("div");
    setAttributes(titleDesc, {
      class: "title_desc",
    });

    const h1Desc = document.createElement("h1");
    h1Desc.innerText = "create a To Do List and keep truck of your daily tasks";
    titleDesc.append(h1Desc);

    const pDesc = document.createElement("p");
    pDesc.innerText = "be on time with your tasks and complete them. Set daily goals and achieve them";
    titleDesc.append(pDesc);

    const btnDesc = document.createElement("button");
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

    const container = document.getElementById("content");
    container.append(removeCont);

    return container;
  }

  static CreateProjectForm() {
    function setAttributes(el, attrs) {
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    const removeContainerForm = document.createElement("div");
    setAttributes(removeContainerForm, {
      class: "remove_cont",
    });

    const ProjectContainer = document.createElement("div");
    setAttributes(ProjectContainer, {
      class: "container project_todo",
    });

    const imgContainer = document.createElement("img");
    setAttributes(imgContainer, {
      src: "/assets/145.png",
      alt: "images",
    });

    // container
    ProjectContainer.append(imgContainer);
    // form container
    const formContainer = document.createElement("form");
    setAttributes(formContainer, {
      id: "form-projects",
    });

    const rowContainer4 = document.createElement("div");
    setAttributes(rowContainer4, {
      class: "row",
    });

    const colContainer4 = document.createElement("div");
    setAttributes(colContainer4, {
      class: "col-25",
    });

    const labelContainer = document.createElement("label");
    setAttributes(labelContainer, {
      for: "project_title",
    });

    labelContainer.innerText = "Project name";
    colContainer4.append(labelContainer);

    const colContainer5 = document.createElement("div");
    setAttributes(colContainer5, {
      class: "col-75",
    });

    const inputContainer = document.createElement("input");
    setAttributes(inputContainer, {
      type: "text",
      id: "project_title",
      name: "project_title",
      placeholder: "Project Name",
      id: "project_name",
      required: "",
    });

    colContainer5.append(inputContainer);

    rowContainer4.append(colContainer4);
    rowContainer4.append(colContainer5);

    const rowContainer5 = document.createElement("div");
    setAttributes(rowContainer5, {
      class: "row",
    });

    const input2 = document.createElement("input");
    setAttributes(input2, {
      id: "sub_btn",
      type: "submit",
    });
    input2.innerText = "submit";

    formContainer.append(rowContainer4);
    formContainer.append(rowContainer5);
    formContainer.append(input2);

    ProjectContainer.append(formContainer);
    // ProjectContainer.append(input2);
    removeContainerForm.append(ProjectContainer);

    const container = document.getElementById("content");
    container.append(removeContainerForm);

    return container;
  }

  static savingProject() {
    const formContainerProject = document.getElementById("form-projects");
    const ProjectTitleVal = document.getElementById("project_name");

    formContainerProject.addEventListener("submit", () => {
      const project = new Project(ProjectTitleVal.value);
      project.savingData();

      document.querySelector(".remove_cont").remove();
      this.DisplayProjects();
    });
  }

  static DisplayProjects() {
    function setAttributes(el, attrs) {
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    const container = document.getElementById("content");
    const removeContProjects = document.createElement("div");
    setAttributes(removeContProjects, {
      class: "remove_cont",
    });

    const listContainer = document.createElement("div");
    setAttributes(listContainer, {
      class: "list-container container",
    });

    const ulcontainer = document.createElement("ul");

    db.collection("projects") // eslint-disable-line no-undef
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const liContainer = document.createElement("li");
          const spanContainer = document.createElement("button");
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
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    const FormToDoCont = document.createElement("form");
    setAttributes(FormToDoCont, {
      id: "todo-form",
    });

    // title
    const label1 = document.createElement("label");
    setAttributes(label1, {
      for: "title",
    });
    label1.innerText = "title:(this field cant be empty)";

    const input1 = document.createElement("input");
    setAttributes(input1, {
      type: "text",
      name: "title",
      id: "title_todo",
      required: "",
    });

    FormToDoCont.append(label1);
    FormToDoCont.append(input1);

    // text area

    const label2 = document.createElement("label");
    setAttributes(label2, {
      for: "description",
    });
    label2.innerText = "description:";

    const input2 = document.createElement("textarea");
    setAttributes(input2, {
      required: "",
      rows: "4",
      cols: "50",
      naame: "comment",
      form: "usrform",
      id: "text_area",
    });

    FormToDoCont.append(label2);
    FormToDoCont.append(input2);

    // date

    const label3 = document.createElement("label");
    setAttributes(label3, {
      for: "date",
    });
    label3.innerText = "date:(this field cant be empty)";

    const input3 = document.createElement("input");
    setAttributes(input3, {
      type: "date",
      name: "date",
      id: "date",
      required: "",
    });

    FormToDoCont.append(label3);
    FormToDoCont.append(input3);

    // projects

    const label4 = document.createElement("label");
    setAttributes(label4, {
      for: "projects",
    });
    label4.innerText = "projects:(this field cant be empty)";

    const input4 = document.createElement("select");
    setAttributes(input4, {
      name: "projects",
      id: "project",
      required: "",
    });

    db.collection("projects") // eslint-disable-line no-undef
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const option4 = document.createElement("option");

          setAttributes(option4, {
            value: doc.id,
          });

          option4.innerText = doc.data().name;

          input4.append(option4);
        });
      });

    FormToDoCont.append(label4);
    FormToDoCont.append(input4);

    // priority

    const label5 = document.createElement("label");
    setAttributes(label5, {
      for: "priority",
    });
    label5.innerText = "priority:(this field cant be empty)";

    const input5 = document.createElement("select");
    setAttributes(input5, {
      name: "priority",
      id: "priority",
      required: "",
    });

    const priorityArr = ["low", "medium", "high"];

    for (let i = 0; i < priorityArr.length; i++) {
      const priorityOption = document.createElement("option");
      setAttributes(priorityOption, {
        value: priorityArr[i],
      });

      priorityOption.innerText = priorityArr[i];

      input5.append(priorityOption);
    }

    FormToDoCont.append(label5);
    FormToDoCont.append(input5);

    // button

    const input6 = document.createElement("input");
    setAttributes(input6, {
      type: "submit",
      id: "submit_todo",
    });
    input6.innerText = "submit to do list";

    const removeContainerTodo = document.createElement("div");
    setAttributes(removeContainerTodo, {
      class: "remove_cont container",
      id: "container-to-do",
    });

    FormToDoCont.append(input6);
    removeContainerTodo.append(FormToDoCont);

    const container = document.getElementById("content");
    container.append(removeContainerTodo);
  }

  static savingTodo() {
    const formSubmitToDo = document.getElementById("todo-form");

    const title = document.getElementById("title_todo");
    const area = document.getElementById("text_area");
    const date = document.getElementById("date");
    const project = document.getElementById("project");
    const priority = document.getElementById("priority");

    formSubmitToDo.addEventListener("submit", (e) => {
      e.preventDefault();

      const todoInitalize = new ToDoList(
        title.value,
        area.value,
        date.value,
        project.value,
        priority.value,
      );
      todoInitalize.savingTodo();

      document.querySelector(".remove_cont").remove();
      this.displayToDo();
    });
  }

  static displayToDo() {
    function setAttributes(el, attrs) {
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    const container = document.getElementById("content");
    const removeContProjects = document.createElement("div");
    setAttributes(removeContProjects, {
      class: "remove_cont",
    });

    const listContainer = document.createElement("div");
    setAttributes(listContainer, {
      class: "list-container container",
    });

    const ulcontainer = document.createElement("ul");

    db.collection("projects") // eslint-disable-line no-undef
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          db.collection(`projects/${doc.id}/toDos`) // eslint-disable-line no-undef
            .get()
            .then((snap) => {
              snap.docs.forEach((e) => {
                const liContainer = document.createElement("li");
                const headerContainer = document.createElement("h3");
                setAttributes(headerContainer, {
                  class: "header_list",
                });

                headerContainer.innerText = e.data().title;

                const pargContainer = document.createElement("p");
                setAttributes(pargContainer, {
                  class: "desc",
                });

                pargContainer.innerText = e.data().description;

                const dateContainer = document.createElement("p");
                setAttributes(dateContainer, {
                  class: "date",
                });
                dateContainer.innerText = `date: ${e.data().date}`;

                const priContainer = document.createElement("p");
                setAttributes(priContainer, {
                  class: "priority",
                });
                priContainer.innerText = `priority: ${e.data().priority}`;

                liContainer.append(headerContainer);
                liContainer.append(pargContainer);
                liContainer.append(dateContainer);
                liContainer.append(priContainer);

                ulcontainer.append(liContainer);
              });
            });
        });

        listContainer.append(ulcontainer);

        removeContProjects.append(listContainer);
        container.append(removeContProjects);
      });
  }
}
export { PageDisplay }; // eslint-disable-line import/prefer-default-export
/* eslint-enable no-restricted-syntax, guard-for-in, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus */
