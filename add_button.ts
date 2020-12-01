    var parentDiv: HTMLElement;
    var button: HTMLButtonElement;
    var space: Text;
    // @ts-ignore
    parentDiv = document.getElementById("top");
    button = <HTMLButtonElement>document.createElement("BUTTON");
    button.id = 'alpha';
    button.type = 'button';
    button.className = "foo";
    button.innerHTML = 'alpha';
    parentDiv.appendChild(button);
    button.addEventListener("click", doSomething, false);
    // space between buttons
    space = document.createTextNode("\u00A0");
    parentDiv.appendChild(space);