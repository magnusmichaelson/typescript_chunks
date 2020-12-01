    interface optionElement {
        "text": string,
        "value": string,
        "disabled": boolean
    }
    var parentDiv: HTMLElement;
    var select: HTMLSelectElement;
    var optionList: Array<optionElement>;
    var optionElement: HTMLOptionElement;
    // @ts-ignore
    parentDiv = document.getElementById("top");
    select = document.createElement("select");
    optionList = [];
    parentDiv.appendChild(select)
    optionList.push({"text": "Alpha", "value": "alpha", "disabled": false});
    optionList.push({"text": "Bravo", "value": "bravo", "disabled": false});
    optionList.push({"text": "Charlie", "value": "charlie", "disabled": false});
    optionList.forEach(function(option){
      optionElement = document.createElement('option');
      optionElement.text = option["text"];
      optionElement.value = option["value"];
      optionElement.disabled = option["disabled"];
      select.appendChild(optionElement);
    });
    select.addEventListener("click", doSomething, false);