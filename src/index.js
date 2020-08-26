import { PageDisplay } from "./display.js";
import { Logic } from "./logic.js";

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
    Logic.StorageProjectsAccess()
});


nav[2].addEventListener('click', () => {
    document.querySelector('.remove_cont').remove();
    PageDisplay.CreateProjectForm();
    Logic.projectSubmit()
});


