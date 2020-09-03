import { Project } from "./project";

class PageDisplay {

  static homePage() {
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    // remove container
    let removeCont = document.createElement('div');
    setAttributes(removeCont, {
      class: "remove_cont"
    });

    let sectionElem = document.createElement('section');
    setAttributes(sectionElem, {
      class: "main_body"
    });

    let sectionContainer = document.createElement('div');
    setAttributes(sectionContainer, {
      class: "container-fluid"
    });

    // append row container to section container

    let rowContainer = document.createElement('div');
    setAttributes(rowContainer, {
      class: "row"
    });

    // append colContainer to row container

    let colContainer = document.createElement('div');
    setAttributes(colContainer, {
      class: "col-md-6"
    });

    let bacContainer = document.createElement('div');
    setAttributes(bacContainer, {
      class: "bac_image"
    });

    colContainer.append(bacContainer);
    rowContainer.append(colContainer);

    // append colContainer2 to row container
    let colContainer2 = document.createElement('div');
    setAttributes(colContainer2, {
      class: "col-md-6"
    });

    let titleDesc = document.createElement('div');
    setAttributes(titleDesc, {
      class: "title_desc"
    });


    let h1Desc = document.createElement('h1');
    h1Desc.innerText = "create a To Do List and keep truck of your daily tasks";
    titleDesc.append(h1Desc);

    let pDesc = document.createElement('p');
    pDesc.innerText = "be on time with your tasks and complete them. Set daily goals and achieve them";
    titleDesc.append(pDesc);

    let btnDesc = document.createElement('button');
    setAttributes(btnDesc, {
      class: "create_btn",
      id: "create_btn"
    });
    btnDesc.innerText = "create new todo's";
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


  };

  static CreateProjectForm() {
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    let removeContainerForm = document.createElement('div');
    setAttributes(removeContainerForm, {
      class: "remove_cont"
    })

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
      id: "project_name"
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
      id: "sub_btn"
    });
    input2.innerText = "submit";




    formContainer.append(rowContainer4);
    formContainer.append(rowContainer5);

    ProjectContainer.append(formContainer);
    ProjectContainer.append(input2);
    removeContainerForm.append(ProjectContainer)

    let container = document.getElementById("content");
    container.append(removeContainerForm);
    

    return container
  };

 

  static savingProject() {

    let btn_container = document.getElementById('sub_btn');
    let ProjectTitleVal = document.getElementById('project_name')
    let disList = document.getElementById('list_display')
    
    btn_container.addEventListener('click', () => {
    
      let project = new Project(ProjectTitleVal.value);
      project.savingData();

      document.querySelector('.remove_cont').remove();
      this.DisplayProjects();

    })

  }

  static DisplayProjects () {
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    let container = document.getElementById('content');
    let removeContProjects = document.createElement('div');
    setAttributes(removeContProjects, {
      class: "remove_cont"
    });


    // collapsable

    let elP = document.createElement('div');
    setAttributes(elP, {
      id: "accordion",
      class: "container"
    });

    let card = document.createElement('div');
    setAttributes(card, {
      class: "card"
    });
 
    let cardHeader = document.createElement('div');
    setAttributes(cardHeader , {
      class: "card-header",
      id: "headingOne"
    });

    
    let Header5 = document.createElement('h5');
    setAttributes(Header5  , {
      class: "mb-0"
    });

    let Headerbtn = document.createElement('button');
    setAttributes(Headerbtn  , {
      class: "btn btn-link collapsed",
      'data-toggle': "collapse",
     'data-target' : "#collapseOne",
     'aria-expanded': "true",
     'aria-controls' : "collapseOne"
    });
    
    Headerbtn.innerText = "this is the button for the project title"

    
    Header5.append(Headerbtn);
    cardHeader.append(Header5);
    card.append(cardHeader);
    elP.append(card);


    let collapsecont = document.createElement('div');
    setAttributes(collapsecont  , {
      class: "collapse",
      id: "collapseOne",
      "aria-labelledby": "headingOne",
      'data-parent': "#accordion"
    });

    let cardbody = document.createElement('div');
    setAttributes(cardbody   , {
      class: "card-body"
  
    });

    cardbody.innerText = "this is where the body goes"



   collapsecont.append(cardbody);
    elP.append(collapsecont);

  
    removeContProjects.append(elP);
    container.append(removeContProjects);
  };

}

export {
  PageDisplay
}