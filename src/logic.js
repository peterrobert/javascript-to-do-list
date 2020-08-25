import { PageDisplay } from "./display.js";

class Logic {

  static projectSubmit() {

    PageDisplay.DomManupilation().btn_container.addEventListener("click", () => {
        console.log("clicked");
      });
      
  };

}


export{Logic}
