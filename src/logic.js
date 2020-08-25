import {
    PageDisplay
} from "./display.js";


class Logic {



    static projectSubmit() {


        let Storage = [];

        PageDisplay.DomManupilation().btn_container.addEventListener("click", () => {
            const projectValue = PageDisplay.DomManupilation().ProjectTitleVal;

            if (projectValue.value == '') {

                console.log('its empty')

            } else {
             
                Storage.push(projectValue.value);

            }


            console.log(Storage)

        });

        return{Storage}

    };

}


export {
    Logic
}