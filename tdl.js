
let addList = document.querySelector('#add_Li');
let input = document.querySelector('#user_Input');
let ul = document.querySelector('ul');



function inputLength() {
    return input.value.length;
}

function addListItem() {
    let li = document.createElement('li');
    li.classList.add('tdl_ListItem');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    let dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);
    
    dBtn.addEventListener('click', dLi);
    
    function dLi() {
        li.classList.add('delete');
    }

    function markAsDone() {
        li.classList.toggle('done');
    }

    li.addEventListener('click', markAsDone);
}


function addAfterClick() {
    if (inputLength() > 0 ) {
        addListItem();
    }
}

addList.addEventListener('click', addAfterClick);

//Function below checks if the 'enter'/ 'return' key is press when using the input tag.
//13 = keycode for the key.
function addAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) {
		createListElement();
	} 
}

input.addEventListener("keypress", addAfterKeypress);
