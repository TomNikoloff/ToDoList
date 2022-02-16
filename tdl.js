
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

