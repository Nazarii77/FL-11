let rootNode = document.getElementById('root');
let disableEdit = false;
let max_item = 10;
let current_item = 0;

document.getElementById('addBtn').disabled = true;
document.getElementById('todoInput').addEventListener('keyup', function() {
    let nameInput = document.getElementById('todoInput').value;
    if (nameInput !== '') {
        document.getElementById('addBtn').removeAttribute('disabled');
    } else {
        document.getElementById('addBtn').setAttribute('disabled', null);
    }
});

function addNewToDO() {

    if (checkitemquantity(current_item, max_item)) {
        current_item++;

        let li = document.createElement('li');
        li.setAttribute('draggable', 'true');
        li.setAttribute('ondragstart', 'dragStarted(event)');
        li.setAttribute('ondragover', 'draggingOver(event)');
        li.setAttribute('ondrop', 'dropped(event)'); 
        let label = document.createElement('label');
        label.setAttribute('class', 'label-class');
        let inputValue = document.getElementById('todoInput').value;
        let t = document.createTextNode(inputValue);

        let icheck = document.createElement('i');
        icheck.setAttribute('class', 'material-icons check');
        //icheck.setAttribute('onclick', 'editThis(this)');

        let incheckbox = document.createElement('input');
        incheckbox.setAttribute('class', 'checkmark');
        incheckbox.setAttribute('onclick', 'replaceCheckBox(this)');
        incheckbox.setAttribute('type', 'checkbox');
        icheck.appendChild(incheckbox);
        li.appendChild(icheck);

        //main
        label.appendChild(t);
        li.appendChild(label);
        //edit
        let iedit = document.createElement('i');
        iedit.setAttribute('class', 'material-icons check edit');
        iedit.setAttribute('onclick', 'editThis(this)');
        let t2 = document.createTextNode('edit');
        iedit.appendChild(t2);
        li.appendChild(iedit);
        //delete
        let i = document.createElement('i');
        i.setAttribute('class', 'material-icons check delete');
        i.setAttribute('onclick', 'deleteParent(this)');
        let t3 = document.createTextNode('delete');
        i.appendChild(t3);
        li.appendChild(i);

        if (inputValue !== '') {
            document.getElementById('mylist').appendChild(li);
        }
        document.getElementById('todoInput').value = '';
        document.getElementById('addBtn').setAttribute('disabled', null);

        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = 'none';
            }
        }
    }
}


function replaceCheckBox(e) {
    let checkBox = e; //document.getElementById(id);
    let myText = document.createTextNode('done')
    checkBox.parentNode.replaceChild(myText, checkBox);
}


function deleteParent(e) {
    e.parentNode.parentNode.removeChild(e.parentNode);
    current_item--;
    let nameInput = document.getElementById('todoInput').value;
    if (nameInput !== '') {
        document.getElementById('addBtn').disabled = false;
    }
    checkitemquantity(current_item, max_item);
}

function editThis(e) {
    if (!disableEdit) {
        let li = e.parentElement;
        let labeltext = li.getElementsByTagName('label')[0].textContent;
        let p = document.createElement('p');
        let i = document.createElement('i');
        i.setAttribute('class', 'material-icons check save');
        i.setAttribute('onclick', 'saveAndDelete(this)');
        let t = document.createTextNode('save');
        i.appendChild(t);
        let input = document.createElement('input');
        input.value = labeltext;
        input.setAttribute('class', 'editinput');
        p.appendChild(input);
        p.appendChild(i);
        li.appendChild(p);
        disableEdit = true;
    }
}

function saveAndDelete(e) {
    disableEdit = false;
    let li = e.parentElement.parentElement;
    let labeltext = li.getElementsByTagName('label')[0];
    let replacetext = li.getElementsByTagName('p')[0].getElementsByTagName('input')[0].value;
    labeltext.innerHTML = replacetext;
    deleteParent(e);
    current_item++;
    alert(current_item + '     ' + max_item);
    checkitemquantity(current_item, max_item);
}


function checkitemquantity(current_item, max_item) {
    if (current_item >= max_item) {
        document.getElementById('addBtn').disabled = true;
        document.getElementById('maxwarning').style.display = 'block';
        document.getElementById('todoInput').setAttribute('disabled', null);

        return false;
    } else {
              let nameInput = document.getElementById('todoInput').value;
          if (nameInput !== '') {
              document.getElementById('addBtn').removeAttribute('disabled');
          } else {
              document.getElementById('addBtn').setAttribute('disabled', null);
          }
        document.getElementById('maxwarning').style.display = 'none';
        document.getElementById('todoInput').removeAttribute('disabled');

        return true;
    }

}



let source;

function dragStarted(e) {
source = e.target;
  e.dataTransfer.setData("text/plain", e.target.innerHTML);
  e.dataTransfer.effectAllowed = "move";
}

function draggingOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}


function dropped(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.localName === 'li') {
        source.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData("text/plain");
    }
}