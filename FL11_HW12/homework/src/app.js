const rootNode = document.getElementById('root');

const todoItems = [{
    isDone: false,
    id: 12345,
    description: 'Todo 1'
}];

let showmain = true;
let showadd = false;
let showedit = false;
let current_item = 0;
let amounttodo = 0;

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

/* rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br'));
rootNode.appendChild(document.createElement('br')); */

/*add page*/


const addNode = document.getElementById('root');
let headingAdd = document.createElement('h1');
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

/*let list = document.createElement('ul');
list.setAttribute('id', 'mylist');
addNode.appendChild(list);*/

savebtn.setAttribute('onclick', 'addNewToDO()');

function addNewToDO() {
    current_item++;
    amounttodo++;
    checkamount(amounttodo);
    location.hash = '#' + current_item;

    let ul = document.getElementById('mylist');
    let li = document.createElement('li');
    let label = document.createElement('label');
    label.setAttribute('class', 'label-class');
    label.setAttribute('for', 'Checkbox' + current_item);
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

    let inputValue = document.getElementById('todoInput').value;
    let t = document.createTextNode(inputValue);

    ul.appendChild(li);
    let incheckbox = document.createElement('input');
    incheckbox.setAttribute('class', 'checkmark');
    //incheckbox.setAttribute('onclick', 'replaceCheckBox(this)');
    incheckbox.setAttribute('type', 'checkbox');

    li.appendChild(incheckbox);
    //main
    label.appendChild(t);
    li.appendChild(label);
    document.getElementById('maindiv').style.display = 'block';
    document.getElementById('adddiv').style.display = 'none';
}



function showaddfunc() {
    document.getElementById('maindiv').style.display = 'none';
    document.getElementById('adddiv').style.display = 'block';
    document.getElementById('emptynotify').style.display = 'none';
}


function deleteToDO(e) {
	let li = e.parentElement.parentElement;
	li.setAttribute('class', 'li-uncheck');
	li.setAttribute('style', 'display:none');
    e.parentNode.parentNode.removeChild(e.parentNode);
    amounttodo--;
    checkamount(amounttodo);
}

function checkamount(amounttodo){
	if (amounttodo > 0 ) {
		document.getElementById('emptynotify').style.display = 'none';
	} else {
		document.getElementById('emptynotify').style.display = 'block';
	}

}


function changestatus (e) {	 
	e.setAttribute('src', 'assets/img/done-s.png');
    e.setAttribute('class', 'checked');
    e.setAttribute('onclick', 'changestatusback(this)');
    let li = e.parentElement.parentElement;
    li.setAttribute('class', 'li-checked');
    let currentliamount= document.getElementsByTagName('li').length;
    let lastli = document.getElementsByTagName('li')[currentliamount-1];
    lastli.insertAdjacentElement('afterend', li);
    li = e.parentElement.parentElement;
}

function changestatusback(e) {
	e.setAttribute('src', 'assets/img/todo-s.png');
    e.setAttribute('class', 'unchecked');
    e.setAttribute('onclick', 'changestatus(this)');
    let li = e.parentElement.parentElement;
	li.setAttribute('class', 'li-uncheck');
    let firstchecked = document.getElementsByClassName('li-checked')[0];
    li.parentNode.insertBefore( li, firstchecked);
}

 
function CancelAddToDO() {
    document.getElementById('maindiv').style.display = 'block';
    document.getElementById('adddiv').style.display = 'none';
    checkamount(amounttodo);
 } 