const rootNode = document.getElementById('root');

let maindiv = document.createElement('div');
maindiv.setAttribute('id', 'maindiv');
rootNode.appendChild(maindiv);
let divaddresult = document.createElement('div');
divaddresult.setAttribute('class', 'centered');
let ul = document.createElement('ul');
ul.setAttribute('id', 'mylist');
divaddresult.appendChild(ul);
maindiv.appendChild(divaddresult);

const addNode = document.getElementById('root');

let headingAdd = document.createElement('h1');
headingAdd.setAttribute('id', 'add-modify');
let headingAddtext = document.createTextNode('Edit user');
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
savebtn.setAttribute('onclick', 'addNewUser(this)');
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


var copiedList = [];
let objectToUpdate = {};

sortArrayOfObjects = (arr, key) => {
    return arr.sort((a, b) => {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
            return -1;
        }
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
            return 1;
        }
        return 0;
    });
};

function getNames(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        arr.push(obj[i].name);
        //console.log(obj[i]);
        copiedList.push(obj[i]);
        addUser(obj[i].name, obj[i]);
    }
    getallLogos();
    return arr;
}


async function fetchJsonAsync(url) {
    try {
        showLoading();
        const request = await fetch(url);
        const text = await request.text(); {
            var obj = JSON.parse(text);
            //  console.log(Object.values(obj)); 

            var sKey = 'name';
            obj = sortArrayOfObjects(obj, sKey);
            return getNames(obj);
        }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

function updateUser(user) {
    showLoading();
    var id = user.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {

            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name: user.name,
                username: user.username,
                email: user.email

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
}


function deleteOnServer(id) {
    showLoading();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
    })
}



function displayList() {
    fetchJsonAsync('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));
}

window.onload = function() {
    displayList();
}


function addUser(name, obj) {
    let li = document.createElement('li');
    li.setAttribute('class', 'li-uncheck');
    let label = document.createElement('label');
    label.setAttribute('class', 'label-class');
    label.setAttribute('onclick', 'editlabel(this)');
    //label.setAttribute('for', item.id);
    label.setAttribute('id', obj.id);
    let textrecovered = document.createTextNode(name);
    label.appendChild(textrecovered);
    let deletecheckbox = document.createElement('img');
    deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
    deletecheckbox.setAttribute('class', 'deleteimg');
    deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
    label.appendChild(deletecheckbox);

    li.appendChild(label);
    ul.appendChild(li);

}

function showaddfunc(e) {
    document.getElementById('maindiv').style.display = 'none';
    document.getElementById('adddiv').style.display = 'block';
    document.getElementById('add-modify').innerHTML = 'Add user';
    addSwitchMod = 'Add';

    editelement = e;
}


function editlabel(e) {
    if (e.parentElement.className === 'li-checked') {
        document.getElementById('donealert').style.display = 'block';
    } else if (e.parentElement.className === 'li-uncheck') {
        showaddfunc(e);
        document.getElementById('add-modify').innerHTML = 'Edit user';
        addSwitchMod = 'Mod';
        edititemtext = editelement.textContent;
        document.getElementById('todoInput').value = edititemtext;
    }
    objectToUpdate = copiedList.find(obj => obj.id.toString() === e.id);
}


function addNewUser(obj) {
    let inputValue = document.getElementById('todoInput').value;

    if (addSwitchMod === 'Mod') {
        editelement.textContent = inputValue;
        editelement.setAttribute('class', 'label-class');

        let deletecheckbox = document.createElement('img');
        deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
        deletecheckbox.setAttribute('class', 'deleteimg');
        deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
        editelement.appendChild(deletecheckbox);

        document.getElementById('maindiv').style.display = 'block';
        document.getElementById('adddiv').style.display = 'none';

        objectToUpdate.name = inputValue;
        updateUser(objectToUpdate);
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


        let deletecheckbox = document.createElement('img');
        deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
        deletecheckbox.setAttribute('class', 'deleteimg');
        deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
        label.appendChild(deletecheckbox);


        let t = document.createTextNode(inputValue);
        let temp = {};
        temp.isDone = false;
        temp.id = 'Checkbox' + current_item;
        temp.description = inputValue;
        let i = userItems.length;
        userItems[i] = temp;

        localStorage.setItem('todo', JSON.stringify(userItems));


        let firstchecked = document.getElementsByClassName('li-checked')[0];
        if (firstchecked !== 'undefined') {
            ul.insertBefore(li, firstchecked);
        } else {
            ul.appendChild(li);
        }

        label.appendChild(t);
        li.appendChild(label);
        document.getElementById('maindiv').style.display = 'block';
        document.getElementById('adddiv').style.display = 'none';
    }
}

function CancelAddToDO() {
    document.getElementById('maindiv').style.display = 'block';
    document.getElementById('adddiv').style.display = 'none';
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

    //console.log(e.parentNode.id); 
    var id = e.parentNode.id;
    let objToDelete = copiedList.find(obj => obj.id.toString() === id);
    deleteOnServer(id);
    e.parentNode.parentNode.removeChild(e.parentNode);
}


const loadingicon = document.getElementById("loadingicon");

function showLoading() {
    loadingicon.className = "show";
    setTimeout(() => {
        loadingicon.className = loadingicon.className.replace("show", "");
    }, 1000);
}


function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


 function  getallLogos() {
    const listItems = document.querySelectorAll("#root #maindiv .centered #mylist li");
    console.log(listItems)
    for (let i = 0; i < listItems.length; i++) {

        //alert (listItems[i].textContent);
        ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
            let logo = document.createElement('img');
            logo.setAttribute('src', data[0]["url"]);
            logo.setAttribute('class', 'user-logo');
            listItems[i].appendChild(logo);
            showLoading();
        });
    }

}


 