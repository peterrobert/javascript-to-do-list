import {
    home
} from "./display.js";


let homeLink = document.getElementById('home');
homeLink.addEventListener('click', () => {

    console.log("clicked")
    home();

})