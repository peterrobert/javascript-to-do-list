import { PageDisplay } from "./display.js";




window.onload = function () {
  PageDisplay.homePage();
};

// getting data
db.collection('projects').get().then(snapshot => {

  snapshot.docs.forEach(doc => {

   console.log(doc.data().name)

  });

});




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
});


nav[2].addEventListener('click', () => {
    document.querySelector('.remove_cont').remove();
    PageDisplay.CreateProjectForm();
    PageDisplay.savingProject();
});
