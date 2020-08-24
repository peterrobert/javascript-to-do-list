let home = () => {

    const elements = `
    <section class="main_body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="bac_image">

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="title_desc">
                        <h1>create a To Do List and keep truck of your daily tasks</h1>
                        <p>be on time with your tasks and complete them. Set daily goals and achieve them</p>

                        <button class="create_btn" id = "create_to_do">
                            create new todo's
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>`

    let container = document.getElementById('content');
    container.innerHTML = elements;

    return container


}

let CreateToDoForm = () => {
    const toDoFormElement = `
    <div class="container">
        <form action="#">
        <div class="row">
          <div class="col-25">
            <label for="fname">Title</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="title" placeholder="to do list title">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="description">description</label>
          </div>
          <div class="col-75">
            <input type="text" id="description" name="description" placeholder="description..">
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="date">date</label>
            </div>
            <div class="col-75">
              <input type="date" id="date" name="description" placeholder="description..">
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="priority">priority: From 1 to 10</label>
            </div>
            <div class="col-75">
              <input type="number" id="priority" name="priority" placeholder="number"  min="1" max="10">
            </div>
          </div>
        <div class="row">
          <div class="col-25">
            <label for="group">Group</label>
          </div>
          <div class="col-75">
            <select id="group" name="group">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="summary">Summary</label>
          </div>
          <div class="col-75">
            <textarea id="summary" name="summary" placeholder="Write something.." style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit">
        </div>
        </form>
      </div>
    `
    let container = document.getElementById('content');
    container.innerHTML = toDoFormElement;

    return container
}


let CreateProjectForm = () => {

  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
    
  let ProjectContainer = document.createElement('div');
  setAttributes(ProjectContainer, {
    class: "container project_todo"
  });

  let imgContainer = document.createElement('img');
  setAttributes(imgContainer,{
    src: "/assets/145.png",
    alt: 'images'
  });

  ProjectContainer.append(imgContainer);

  let formContainer = document.createElement('form');
  setAttributes(formContainer,{
    action: "#"
  });

  let rowContainer = document.createElement('div');
  setAttributes(rowContainer,{
    class: "row"
  });

  let colContainer = document.createElement('div');
  setAttributes(colContainer,{
    class: "col-25"
  });

  let colContainer = document.createElement('div');
  setAttributes(colContainer,{
    class: "col-25"
  });

  let labelContainer = document.createElement('label');
  setAttributes(labelContainer ,{
    for: "fname"
  });

  labelContainer.innerText = "Project name";

  rowContainer.append(colContainer);


  formContainer.append(rowContainer);



    const ProjectForm = ` <div class="container project_todo">
    <img src="/assets/145.png" alt="images" srcset="">
    <form action="#">
        <div class="row">
            <div class="col-25">
                <label for="fname">Project name</label>
            </div>
            <div class="col-75">
                <input type="text" id="fname" name="project_title" placeholder="Project Name">
            </div>
        </div>
        
        <div class="row">
            <input type="submit" value="Submit">
        </div>
    </form>
</div>`

    let container = document.getElementById('content');
    container.innerHTML = ProjectForm;

    return container

}
export {
    home,
    CreateToDoForm,
    CreateProjectForm
}