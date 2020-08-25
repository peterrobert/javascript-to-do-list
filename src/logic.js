import {
    PageDisplay
} from "./display.js";

class Logic {

    static projectSubmit() {
        let Store = [];

        let StorageContainer = () => {
            // Check browser support
            if (typeof (Storage) !== "undefined") {
                // Store
                localStorage.setItem("container", `${ Store }`);
                // Retrieve
                console.log(Store)
            } else {
                console.log('this hasnt worked');
            }
        }

        PageDisplay.DomManupilation().btn_container.addEventListener(
            "click",
            () => {
                const projectValue = PageDisplay.DomManupilation().ProjectTitleVal;

                if (projectValue.value == "") {
                    console.log("its empty");
                } else {
                    Store.push(projectValue.value);
                }

                StorageContainer();
            }
        );




    };

    

}

export {
    Logic
};