import { PageDisplay } from './display';


PageDisplay.homePage();


const nav = [
  document.getElementById('home'),
  document.getElementById('projects'),
  document.getElementById('create_projects'),
  document.getElementById('create_to_do'),
  document.getElementById('to_do_list'),
];


nav[0].addEventListener('click', () => {
  document.querySelector('.remove_cont').remove();
  PageDisplay.homePage();
});

nav[1].addEventListener('click', () => {
  document.querySelector('.remove_cont').remove();
  PageDisplay.DisplayProjects();
});


nav[2].addEventListener('click', () => {
  document.querySelector('.remove_cont').remove();
  PageDisplay.CreateProjectForm();
  PageDisplay.savingProject();
});

nav[3].addEventListener('click', () => {
  document.querySelector('.remove_cont').remove();
  PageDisplay.CreateTodoForm();
  PageDisplay.savingTodo();
});

nav[4].addEventListener('click', () => {
  document.querySelector('.remove_cont').remove();
  PageDisplay.displayToDo();
});
