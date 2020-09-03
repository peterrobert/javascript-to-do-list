import { PageDisplay } from "./display.js";




window.onload = function () {
  PageDisplay.homePage();
};



let nav = [
  document.getElementById("home"),
  document.getElementById("projects"),
  document.getElementById("create_projects")
  
];

nav[0].addEventListener('click', () => {
    document.querySelector('.remove_cont').remove();
    PageDisplay.homePage();
    console.log('clicked')
});

nav[1].addEventListener('click', () => {
    document.querySelector('.remove_cont').remove();
    PageDisplay.DisplayProjects();
    PageDisplay.gettingProject()
});


nav[2].addEventListener('click', () => {
    document.querySelector('.remove_cont').remove();
    PageDisplay.CreateProjectForm();
    PageDisplay.savingProject();
});
