
interface ButtonElement {
    id: string;
    type: string;
    className: string;
    buttonText: string;
    parentDiv: string;

}

    var button: HTMLButtonElement; 
    button = createHtmlButton({"buttonText": "Csv", "className": "btn-primary", "id": "csv", "parentDiv": "top", "type": "button"});
    button.addEventListener("click", dosomething, false);

    function createHtmlButton(input: ButtonElement){
        var button: HTMLButtonElement;
        var parentDiv: HTMLElement;
        // @ts-ignore
        parentDiv = document.getElementById(input["parentDiv"]);
        button = <HTMLButtonElement>document.createElement("BUTTON");
        button.id = input["id"];
        button.type = input["type"];
        button.className = input["className"];
        button.innerHTML = input["buttonText"];
        parentDiv.appendChild(button);
        return(button);
    }

    function dosomething(){
    }