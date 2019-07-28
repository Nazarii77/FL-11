const rootNode = document.getElementById('root');

let todoItems = [{
    isDone: false,
    id: 12345,
    description: 'Todo 1'
}];

let current_item = 0;
let amounttodo = 0;
let addSwitchMod = 'Add';
let edititemtext = '';
let editelement = '';

let maindiv = document.createElement('div');
maindiv.setAttribute('id', 'maindiv');
rootNode.appendChild(maindiv);
let heading = document.createElement('h1');
let h1text = document.createTextNode('Simple TODO application');
heading.appendChild(h1text);
maindiv.appendChild(heading);

let roundbtn = document.createElement('button');
let roundbtntext = document.createTextNode('Add new task');
roundbtn.appendChild(roundbtntext);
roundbtn.setAttribute('class', 'btn-round');
roundbtn.setAttribute('onclick', 'showaddfunc()');
maindiv.appendChild(roundbtn);


let emptytodo = document.createElement('h2');
emptytodo.setAttribute('class', 'emptynotify');
emptytodo.setAttribute('id', 'emptynotify');
let h2text = document.createTextNode('TODO is empty');
emptytodo.appendChild(h2text);
maindiv.appendChild(emptytodo);

let divaddresult = document.createElement('div');
divaddresult.setAttribute('class', 'centered');

let ul = document.createElement('ul');
ul.setAttribute('id', 'mylist');
divaddresult.appendChild(ul);

maindiv.appendChild(divaddresult);

let alertdiv = document.createElement('div');
alertdiv.setAttribute('id', 'alertdiv');
let bold = document.createElement('b');
let boldtext = document.createTextNode('Danger!');
bold.appendChild(boldtext);
alertdiv.appendChild(bold);
let msg = document.createElement('p');
let alertmsgtext = document.createTextNode('You can`t add already existing item');
msg.appendChild(alertmsgtext);
alertdiv.appendChild(msg);
let myclose = document.createElement('a');
myclose.setAttribute('id', 'close');
myclose.setAttribute('href', '#');
myclose.setAttribute('onclick', 'removealert()');
alertdiv.appendChild(myclose);
rootNode.appendChild(alertdiv);
removealert();

let donealert = document.createElement('div');
donealert.setAttribute('id', 'donealert');
let bolddone = document.createElement('b');
let bolddonetext = document.createTextNode('Danger!');
bolddone.appendChild(boldtext);
donealert.appendChild(bolddone);
let donemsg = document.createElement('p');
let donealertmsgtext = document.createTextNode('You can`t edit already done item');
donemsg.appendChild(donealertmsgtext);
donealert.appendChild(donemsg);
let doneclose = document.createElement('a');
doneclose.setAttribute('id', 'closedone');
doneclose.setAttribute('href', '#');
doneclose.setAttribute('onclick', 'removedonealert()');
donealert.appendChild(doneclose);
rootNode.appendChild(donealert);
removedonealert();

const addNode = document.getElementById('root');
let headingAdd = document.createElement('h1');
headingAdd.setAttribute('id', 'add-modify');
let headingAddtext = document.createTextNode('Add task');
headingAdd.appendChild(headingAddtext);

let divadd = document.createElement('div');
divadd.setAttribute('class', 'centered');
divadd.setAttribute('id', 'adddiv');
divadd.appendChild(headingAdd);

let inputadd = document.createElement('input');
inputadd.setAttribute('class', 'add-input');
inputadd.setAttribute('id', 'todoInput');

let savebtn = document.createElement('button');
savebtn.setAttribute('id', 'save-btn');
savebtn.setAttribute('onclick', 'addNewToDO()');
savebtn.innerHTML = 'Save changes';

let cancelebtn = document.createElement('button');
cancelebtn.setAttribute('id', 'cancel-btn');
cancelebtn.setAttribute('onclick', 'CancelAddToDO()');
cancelebtn.innerHTML = 'Cancel';

divadd.appendChild(inputadd);
divadd.appendChild(cancelebtn);
divadd.appendChild(savebtn);

addNode.appendChild(divadd);
document.getElementById('adddiv').style.display = 'none';

window.onload = function() {
    document.getElementById('emptynotify').style.display = 'none';
    if (localStorage.getItem('todo') !== undefined) {
        todoItems = JSON.parse(localStorage.getItem('todo'));
        if (todoItems === null) {
            todoItems = [{
                isDone: false,
                id: 12345,
                description: 'Todo 1'
            }];
        }
        let amountofstored = todoItems.length;
        amounttodo = todoItems.length;
        for (let i = 0; i < amountofstored; i++) {
            recoverfromstorage(todoItems[i]);
        }
    }
}

function recoverfromstorage(item) {

    let ul = document.getElementById('mylist');
    let li = document.createElement('li');
    li.setAttribute('class', 'li-uncheck');
    let label = document.createElement('label');
    label.setAttribute('class', 'label-class');
    label.setAttribute('onclick', 'editlabel(this)');
    label.setAttribute('for', item.id);
    label.setAttribute('id', item.id);
    let textrecovered = document.createTextNode(item.description);
    label.appendChild(textrecovered);

    let uncheckedbox = document.createElement('img');
    uncheckedbox.setAttribute('src', 'assets/img/todo-s.png');
    if (!item.isDone) {
        uncheckedbox.setAttribute('class', 'unchecked');
        uncheckedbox.setAttribute('onclick', 'changestatus(this)');
    } else {
        uncheckedbox.setAttribute('class', 'checked');
        uncheckedbox.setAttribute('onclick', 'changestatusback(this)');
    }

    label.appendChild(uncheckedbox);
    let deletecheckbox = document.createElement('img');
    deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
    deletecheckbox.setAttribute('class', 'deleteimg');
    deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
    label.appendChild(deletecheckbox);

    let incheckbox = document.createElement('input');
    incheckbox.setAttribute('class', 'checkmark');
    incheckbox.setAttribute('type', 'checkbox');
    li.appendChild(incheckbox);
    li.appendChild(label);
    ul.appendChild(li);
}


function addNewToDO() {
    let inputValue = document.getElementById('todoInput').value;

    if (addSwitchMod === 'Mod') {

        if (!checkexist()) {
            editelement.textContent = inputValue;
            editelement.setAttribute('class', 'label-class');
            let uncheckedbox = document.createElement('img');
            uncheckedbox.setAttribute('src', 'assets/img/todo-s.png');
            uncheckedbox.setAttribute('class', 'unchecked');
            uncheckedbox.setAttribute('onclick', 'changestatus(this)');
            editelement.appendChild(uncheckedbox);

            let deletecheckbox = document.createElement('img');
            deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
            deletecheckbox.setAttribute('class', 'deleteimg');
            deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
            editelement.appendChild(deletecheckbox);

            document.getElementById('maindiv').style.display = 'block';
            document.getElementById('adddiv').style.display = 'none';
            clearinput();
        } else {
            showalert();
        }

    } else {
        current_item++;
        amounttodo++;
        checkamount(amounttodo);
        location.hash = '#' + current_item;

        let ul = document.getElementById('mylist');
        let li = document.createElement('li');
        li.setAttribute('class', 'li-uncheck');
        let label = document.createElement('label');
        label.setAttribute('class', 'label-class');
        label.setAttribute('onclick', 'editlabel(this)');
        label.setAttribute('for', 'Checkbox' + current_item);
        label.setAttribute('id', 'Checkbox' + current_item);

        let uncheckedbox = document.createElement('img');
        uncheckedbox.setAttribute('src', 'assets/img/todo-s.png');
        uncheckedbox.setAttribute('class', 'unchecked');
        uncheckedbox.setAttribute('onclick', 'changestatus(this)');
        label.appendChild(uncheckedbox);

        let deletecheckbox = document.createElement('img');
        deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
        deletecheckbox.setAttribute('class', 'deleteimg');
        deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
        label.appendChild(deletecheckbox);

        if (!checkexist()) {
            let t = document.createTextNode(inputValue);
            let temp = {};
            temp.isDone = false;
            temp.id = 'Checkbox' + current_item;
            temp.description = inputValue;
            let i = todoItems.length;
            todoItems[i] = temp;

            localStorage.setItem('todo', JSON.stringify(todoItems));


            let firstchecked = document.getElementsByClassName('li-checked')[0];
            if (firstchecked !== 'undefined') {
                ul.insertBefore(li, firstchecked);
            } else {
                ul.appendChild(li);
            }

            let incheckbox = document.createElement('input');
            incheckbox.setAttribute('class', 'checkmark');
            incheckbox.setAttribute('type', 'checkbox');
            li.appendChild(incheckbox);
            label.appendChild(t);
            li.appendChild(label);
            document.getElementById('maindiv').style.display = 'block';
            document.getElementById('adddiv').style.display = 'none';
            clearinput();
        } else {
            showalert();
        }

    }

}

function showaddfunc(e) {
    document.getElementById('maindiv').style.display = 'none';
    document.getElementById('adddiv').style.display = 'block';
    document.getElementById('emptynotify').style.display = 'none';
    document.getElementById('add-modify').innerHTML = 'Add item';
    addSwitchMod = 'Add';
    clearinput();
    editelement = e;
}


function deleteToDO(e) {
    //to stop click event on beneath label
    let event = window.event
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    let li = e.parentElement.parentElement;
    li.setAttribute('class', 'li-uncheck');
    li.setAttribute('style', 'display:none');
    e.parentNode.parentNode.removeChild(e.parentNode);
    amounttodo--;
    checkamount(amounttodo);
}

function checkamount(amounttodo) {
    if (amounttodo > 0) {
        document.getElementById('emptynotify').style.display = 'none';
    } else {
        document.getElementById('emptynotify').style.display = 'block';
    }

}

function changestatus(e) {
    //to stop click event on beneath label
    let event = window.event
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    e.setAttribute('src', 'assets/img/done-s.png');
    e.setAttribute('class', 'checked');
    e.setAttribute('onclick', 'changestatusback(this)');
    let li = e.parentElement.parentElement;
    li.setAttribute('class', 'li-checked');
    let currentliamount = document.getElementsByTagName('li').length;
    let lastli = document.getElementsByTagName('li')[currentliamount - 1];
    lastli.insertAdjacentElement('afterend', li);
    li = e.parentElement.parentElement;
    removealert();
}

function changestatusback(e) {
    //to stop click event on beneath label
    let event = window.event
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }

    e.setAttribute('src', 'assets/img/todo-s.png');
    e.setAttribute('class', 'unchecked');
    e.setAttribute('onclick', 'changestatus(this)');
    let li = e.parentElement.parentElement;
    li.setAttribute('class', 'li-uncheck');
    let firstchecked = document.getElementsByClassName('li-checked')[0];
    li.parentNode.insertBefore(li, firstchecked);
    removealert();
}


function CancelAddToDO() {
    document.getElementById('maindiv').style.display = 'block';
    document.getElementById('adddiv').style.display = 'none';
    removealert();
    checkamount(amounttodo);
    clearinput();
}

function clearinput() {
    document.getElementById('todoInput').value = '';
}

function checkexist() {
    let alreadyexist = false;
    let inputValue = document.getElementById('todoInput').value;
    let labelamount = document.getElementsByTagName('label').length;
    for (let i = 0; i < labelamount; i++) {
        let labeltext = document.getElementsByTagName('label')[i].textContent;
        if (labeltext === inputValue) {
            alreadyexist = true;
            showalert();
        }
    }
    return alreadyexist;
}

function showalert() {
    document.getElementById('alertdiv').style.display = 'block';

}

function removealert() {
    document.getElementById('alertdiv').style.display = 'none';
}

function removedonealert() {
    document.getElementById('donealert').style.display = 'none';
}

function editlabel(e) {
    if (e.parentElement.className === 'li-checked') {
        document.getElementById('donealert').style.display = 'block';
    } else if (e.parentElement.className === 'li-uncheck') {
        showaddfunc(e);
        document.getElementById('add-modify').innerHTML = 'Modify item';
        addSwitchMod = 'Mod';
        edititemtext = editelement.textContent;
        document.getElementById('todoInput').value = edititemtext;

    }

}