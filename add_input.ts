    var parentDiv: HTMLElement;
    var numberInput: HTMLInputElement;
    // @ts-ignore
    parentDiv = document.getElementById("top");
    numberInput = <HTMLInputElement>document.createElement("INPUT");
    numberInput.setAttribute("id", "scale");
    numberInput.setAttribute("type", "number");
    numberInput.setAttribute("value", "120");
    numberInput.setAttribute("step", "10");
    numberInput.setAttribute("size", "2");
    parentDiv.appendChild(parentDiv);