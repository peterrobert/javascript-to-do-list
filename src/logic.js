import {
    PageDisplay
} from "./display.js";

class Logic {
    static projectSubmit() {
        let Store = [];

        let StorageContainer = () => {
            // Check browser support
            if (typeof Storage !== "undefined") {
                // Store
                localStorage.setItem("container", `${Store}`);
                // Retrieve
                console.log(Store);
            } else {
                console.log("this hasnt worked");
            }
        };

        PageDisplay.DomManupilation().btn_container.addEventListener(
            "click",
            () => {
                console.log("clicked");
                const projectValue = PageDisplay.DomManupilation().ProjectTitleVal;

                if (projectValue.value == "") {
                    console.log("its empty");
                } else {
                    Store.push(projectValue.value);
                }

                StorageContainer();
            }
        );
    }

    static StorageProjectsAccess() {

        const projectLists = localStorage.getItem("container");
        if (projectLists !== null) {

         const [...theLists] = projectLists.split(',');
           
            let elpargraph;
      
           console.log(PageDisplay.DomManupilation().disList )

            for (let i = 0; i < theLists.length; i++) {
            
                elpargraph = document.createElement("p").innerText = theLists[i];

                PageDisplay.DomManupilation().disList.append(elpargraph); 
              
             
            }


        } else {
    
           
           
        }
    };

}

export {
    Logic
};
