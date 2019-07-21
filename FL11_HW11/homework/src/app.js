let rootNode = document.getElementById('root');
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
  let li = document.createElement('li');
  let label = document.createElement('label');
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

  if (inputValue != '') {
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


function replaceCheckBox(e) {
  var checkBox = e; //document.getElementById(id);
  var myText= document.createTextNode("done")
  checkBox.parentNode.replaceChild(myText, checkBox);
}

 
  function deleteParent(e)
{
    e.parentNode.parentNode.removeChild(e.parentNode);
}

function editThis(e){
 
    let li = e.parentElement;
    var labeltext = li.getElementsByTagName("label")[0].textContent;
    let p = document.createElement('p');
    let i = document.createElement('i');
    i.setAttribute('class', 'material-icons check save');
    i.setAttribute('onclick', 'saveAndDelete(this)');
    let t = document.createTextNode('save');
    i.appendChild(t);
    //<i class="material-icons check save" onclick="saveAndDelete(this)" >save</i>
    
     let input = document.createElement('input');
     //input.setAttribute('placeholder', labeltext);
     input.value = labeltext;
     input.setAttribute('class', 'editinput');
    //<input type="text"   placeholder="Add new action" class="editinput">
    p.appendChild(input);
    p.appendChild(i);
    li.appendChild(p);
}

function saveAndDelete(e){

    let li = e.parentElement.parentElement;
    let labeltext= li.getElementsByTagName("label")[0];
    let replacetext =  li.getElementsByTagName("p")[0].getElementsByTagName("input")[0].value; 
     labeltext.innerHTML = replacetext;
    deleteParent(e);

}