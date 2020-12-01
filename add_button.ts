    var parentDiv: HTMLElement;
    var button: HTMLButtonElement;
    // @ts-ignore
    parentDiv = document.getElementById("top");
    button = <HTMLButtonElement>document.createElement("BUTTON");
    button.id = 'alpha';
    button.type = 'button';
    button.className = "foo";
    button.innerHTML = 'alpha';
    parentDiv.appendChild(button);