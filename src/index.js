import { home , CreateProjectForm,  CreateToDoForm } from "./display.js";

window.addEventListener("load", home());

let navLinks = [
    document.getElementById("home"),
    document.getElementById("projects"),
    document.getElementById("create_projects"),
    document.getElementById("create_to_do")
   
  ];
  
  navLinks[0].addEventListener("click", () => {
   home();
  });
  
  navLinks[1].addEventListener("click", () => {
    console.log("clicked");
  });

  navLinks[2].addEventListener("click", () => {
    CreateProjectForm()
  });

  navLinks[3].addEventListener("click", () => {
    CreateToDoForm()
  });